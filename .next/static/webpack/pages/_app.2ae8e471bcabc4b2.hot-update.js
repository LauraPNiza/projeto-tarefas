"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/header/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    var _session_user;\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            children: [\n                                \"Terafas\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 36\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this),\n                status === \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: [\n                        \"Ol\\xe1, \",\n                        session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().loginButton),\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\"),\n                    children: \"Acessar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\laura\\\\Documents\\\\programing\\\\React\\\\projeto-tarefas\\\\src\\\\components\\\\header\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(Header, \"jvend4EpIM+r5TEBFxVuCMCZVA8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDWjtBQUMrQjtBQUVwRCxTQUFTSztRQW1CMEVDOztJQWpCdEYsTUFBTSxFQUFDQyxNQUFNRCxPQUFPLEVBQUVFLE1BQU0sRUFBRSxHQUFHTiwyREFBVUE7SUFFM0MscUJBQ0ksOERBQUNPO1FBQU9DLFdBQVdWLGtFQUFhUztrQkFDNUIsNEVBQUNFO1lBQVFELFdBQVdWLG1FQUFjWTs7OEJBQzlCLDhEQUFDQztvQkFBSUgsV0FBV1YsK0RBQVVhOzhCQUN0Qiw0RUFBQ1osa0RBQUlBO3dCQUFDYSxNQUFLO3dCQUFJSixXQUFXVixvRUFBZWU7a0NBQ3JDLDRFQUFDQzs0QkFBR04sV0FBV1YsZ0VBQVdpQjs7Z0NBQUU7OENBQ2pCLDhEQUFDQzs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNeEJWLFdBQVcsMEJBQ1IsZ0pBQ0RGLHdCQUNDLDhEQUFDYTtvQkFBT1QsV0FBV1YsdUVBQWtCb0I7b0JBQUVDLFNBQVMsSUFBS2pCLHdEQUFPQTs7d0JBQUk7d0JBQU1FLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNnQixrQkFBVGhCLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlaUI7Ozs7Ozt5Q0FFckYsOERBQUNKO29CQUFPVCxXQUFXVix1RUFBa0JvQjtvQkFBRUMsU0FBUyxJQUFLbEIsdURBQU1BLENBQUM7OEJBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNGO0dBNUJnQkU7O1FBRXFCSCx1REFBVUE7OztLQUYvQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzPzQxZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0fSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCl7XHJcblxyXG4gICAgY29uc3Qge2RhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rTG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcmFmYXM8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtzdGF0dXMgPT09IFwibG9hZGluZ1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICApOiBzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5CdXR0b259IG9uQ2xpY2s9eygpPT4gc2lnbk91dCgpfT5PbMOhLCB7c2Vzc2lvbj8udXNlcj8ubmFtZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJ1dHRvbn0gb25DbGljaz17KCk9PiBzaWduSW4oXCJnb29nbGVcIil9PkFjZXNzYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJIZWFkZXIiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImhlYWRlciIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJjb250ZW50IiwibmF2IiwiaHJlZiIsImxpbmtMb2dvIiwiaDEiLCJsb2dvIiwic3BhbiIsImJ1dHRvbiIsImxvZ2luQnV0dG9uIiwib25DbGljayIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/index.js\n"));

/***/ })

});