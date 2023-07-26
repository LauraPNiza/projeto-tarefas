import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import heroImg from '../../public/assets/hero.png'
import { GetStaticProps } from 'next'

import {db} from '../services/firebaseConnections'
import {
  collection,
  getDocs,
} from 'firebase/firestore'

interface HomeProps{
  posts: number,
  comments: number,
}

export default function Home({posts, comments}: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize sus tarefas de forma fácil</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image 
            className={styles.hero}
            alt='Logo Tarefas+' 
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar<br/>seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
        <section className={styles.box}>
          <span>+{posts} posts!</span>
        </section>

        <section className={styles.box}>
          <span>+{comments} comentários!</span>
        </section>

        </div>
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps =async () => {
  
  const commentRef = collection(db, "comments")
  const postRef = collection(db, "tarefas")

  const commentSnaphot = await getDocs(commentRef)
  const postSnaphot = await getDocs(postRef)

  return{
    props:{
      posts: postSnaphot.size || 0,
      comments: commentSnaphot.size || 0,
    },
    revalidate: 1200, //seria revalidada a página com o db a cada 20 minutos
  }
}