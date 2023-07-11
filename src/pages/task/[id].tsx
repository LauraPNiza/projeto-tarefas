import { GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from './styles.module.css'
import {Textarea} from '../../components/textarea'
import {db} from '../../services/firebaseConnections'
import {
    doc,
    collection,
    query,
    where,
    getDoc,
} from 'firebase/firestore'

interface TaskProps{
    item:{
        tarefa: string
        created: string
        public: boolean
        user: string
        taskId: string
    }
}

export default function Task({item}: TaskProps){
    return(
        <div className={styles.container}>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>
                
                <article className={styles.task}>
                    <p>
                        {item.tarefa}
                    </p>
                </article>

            </main>

            <section className={styles.commentContainer}>
                <h2>Deixar comentário</h2>

                <form>
                    <Textarea
                        placeholder='Digite seu comentário...'
                    />
                    <button className={styles.button}>Enviar comentário</button>

                </form>
            </section>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps =async ({params}) => {
    const id = params?.id as string
    const docRef = doc(db, "tarefas", id)
    const snapshot = await getDoc(docRef)

    if(snapshot.data() === undefined){
        return{
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    if(!snapshot.data()?.public){
        return{
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    const miliseconds = snapshot.data()?.created.seconds*1000

    const task = {
        tarefa: snapshot.data()?.tarefa,
        public: snapshot.data()?.public,
        created: new Date(miliseconds).toDateString(),
        user: snapshot.data()?.user,
        taskId: id,
    }

    console.log(task)
    return{
        props: {
            item: task,
        },
    }
}