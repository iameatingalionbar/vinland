"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ContactForm.tsx":
/*!****************************************!*\
  !*** ./app/components/ContactForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ContactForm() {\n    _s();\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const form = e.currentTarget;\n        const data = new FormData(form);\n        try {\n            const response = await fetch(\"https://formspree.io/f/mvgpngwq\", {\n                method: \"POST\",\n                body: data,\n                headers: {\n                    \"Accept\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                setStatus(\"Takk fyrir a\\xf0 hafa samband!\");\n                form.reset();\n            } else {\n                setStatus(\"\\xdaps! Eitthva\\xf0 f\\xf3r \\xfarskei\\xf0is. Vinsamlegast reyndu aftur.\");\n            }\n        } catch (error) {\n            setStatus(\"\\xdaps! Eitthva\\xf0 f\\xf3r \\xfarskei\\xf0is. Vinsamlegast reyndu aftur.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-20 bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 mb-8 md:mb-0 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold mb-4\",\n                                children: \"Hafa Samband\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-6\",\n                                children: \"Sendu \\xe1 okkur hj\\xe1 Vinland Media til \\xfeess a\\xf0 auka \\xfatbrei\\xf0slu \\xfe\\xedns fyrirt\\xe6kis \\xe1 samf\\xe9lagsmi\\xf0lum me\\xf0 hj\\xe1lp fagmanna.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-2\",\n                                children: \"S\\xedmi: 6992021 e\\xf0a 7796205\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Netfang: contact@vinlandmedia.is\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 md:pl-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"bg-white bg-opacity-10 p-6 rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"name\",\n                                        placeholder: \"Nafn\",\n                                        className: \"w-full p-2 border rounded bg-transparent text-white placeholder-gray-300\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        name: \"email\",\n                                        placeholder: \"Netfang\",\n                                        className: \"w-full p-2 border rounded bg-transparent text-white placeholder-gray-300\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        name: \"message\",\n                                        placeholder: \"Skilabo\\xf0\",\n                                        className: \"w-full p-2 border rounded bg-transparent text-white placeholder-gray-300\",\n                                        rows: 4,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-[#790f0e] text-white py-2 px-4 rounded hover:bg-[#5f0c0b] transition duration-300\",\n                                    children: \"Senda\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-4 text-white\",\n                                    children: status\n                                }, void 0, false, {\n                                    fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 26\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stefanatli/Documents/Forritun med Cursor/NewVinland2024/app/components/ContactForm.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"KPYrX9LquK4QzAleGVocmTfvvco=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFdUM7QUFFeEIsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNSSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU9GLEVBQUVHLGFBQWE7UUFDNUIsTUFBTUMsT0FBTyxJQUFJQyxTQUFTSDtRQUUxQixJQUFJO1lBQ0YsTUFBTUksV0FBVyxNQUFNQyxNQUFNLG1DQUFtQztnQkFDOURDLFFBQVE7Z0JBQ1JDLE1BQU1MO2dCQUNOTSxTQUFTO29CQUNQLFVBQVU7Z0JBQ1o7WUFDRjtZQUVBLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtnQkFDZmIsVUFBVTtnQkFDVkksS0FBS1UsS0FBSztZQUNaLE9BQU87Z0JBQ0xkLFVBQVU7WUFDWjtRQUNGLEVBQUUsT0FBT2UsT0FBTztZQUNkZixVQUFVO1FBQ1o7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBMEI7Ozs7OzswQ0FDeEMsOERBQUNHO2dDQUFFSCxXQUFVOzBDQUFPOzs7Ozs7MENBR3BCLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBTzs7Ozs7OzBDQUNwQiw4REFBQ0c7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FJTCw4REFBQ0Y7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNiOzRCQUFLaUIsVUFBVXBCOzRCQUFjZ0IsV0FBVTs7OENBQ3RDLDhEQUFDQztvQ0FBSUQsV0FBVTs4Q0FDYiw0RUFBQ0s7d0NBQU1DLE1BQUs7d0NBQU9DLE1BQUs7d0NBQU9DLGFBQVk7d0NBQU9SLFdBQVU7d0NBQTJFUyxRQUFROzs7Ozs7Ozs7Ozs4Q0FFakosOERBQUNSO29DQUFJRCxXQUFVOzhDQUNiLDRFQUFDSzt3Q0FBTUMsTUFBSzt3Q0FBUUMsTUFBSzt3Q0FBUUMsYUFBWTt3Q0FBVVIsV0FBVTt3Q0FBMkVTLFFBQVE7Ozs7Ozs7Ozs7OzhDQUV0Siw4REFBQ1I7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNVO3dDQUFTSCxNQUFLO3dDQUFVQyxhQUFZO3dDQUFXUixXQUFVO3dDQUEyRVcsTUFBTTt3Q0FBR0YsUUFBUTs7Ozs7Ozs7Ozs7OENBRXhKLDhEQUFDRztvQ0FBT04sTUFBSztvQ0FBU04sV0FBVTs4Q0FBdUY7Ozs7OztnQ0FDdEhsQix3QkFBVSw4REFBQ3FCO29DQUFFSCxXQUFVOzhDQUFtQmxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQ7R0E5RHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3g/NjZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZm9ybSA9IGUuY3VycmVudFRhcmdldFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi9tdmdwbmd3cScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRTdGF0dXMoJ1Rha2sgZnlyaXIgYfAgaGFmYSBzYW1iYW5kIScpXG4gICAgICAgIGZvcm0ucmVzZXQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKCfacHMhIEVpdHRodmHwIGbzciD6cnNrZWnwaXMuIFZpbnNhbWxlZ2FzdCByZXluZHUgYWZ0dXIuJylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0U3RhdHVzKCfacHMhIEVpdHRodmHwIGbzciD6cnNrZWnwaXMuIFZpbnNhbWxlZ2FzdCByZXluZHUgYWZ0dXIuJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICB7LyogTGVmdCBzaWRlIHdpdGggdGV4dCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBtYi04IG1kOm1iLTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+SGFmYSBTYW1iYW5kPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgU2VuZHUg4SBva2t1ciBoauEgVmlubGFuZCBNZWRpYSB0aWwg/mVzcyBh8CBhdWthIPp0YnJlafBzbHUg/u1ucyBmeXJpcnTma2lzIOEgc2FtZulsYWdzbWnwbHVtIG1l8CBoauFscCBmYWdtYW5uYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5T7W1pOiA2OTkyMDIxIGXwYSA3Nzk2MjA1PC9wPlxuICAgICAgICAgICAgPHA+TmV0ZmFuZzogY29udGFjdEB2aW5sYW5kbWVkaWEuaXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgc2lkZSB3aXRoIGZvcm0gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgbWQ6cGwtOFwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS0xMCBwLTYgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFmblwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBwbGFjZWhvbGRlci1ncmF5LTMwMFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJOZXRmYW5nXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLWdyYXktMzAwXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiU2tpbGFib/BcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcGxhY2Vob2xkZXItZ3JheS0zMDBcIiByb3dzPXs0fSByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctWyM3OTBmMGVdIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQgaG92ZXI6YmctWyM1ZjBjMGJdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCI+U2VuZGE8L2J1dHRvbj5cbiAgICAgICAgICAgICAge3N0YXR1cyAmJiA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtd2hpdGVcIj57c3RhdHVzfTwvcD59XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0Rm9ybSIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsIkZvcm1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwib2siLCJyZXNldCIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ContactForm.tsx\n"));

/***/ })

});