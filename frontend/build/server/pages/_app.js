/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./public/near-logo.svg":
/*!******************************!*\
  !*** ./public/near-logo.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/near-logo.cda1b90b.svg\",\"height\":27,\"width\":27,\"blurWidth\":0,\"blurHeight\":0});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3B1YmxpYy9uZWFyLWxvZ28uc3ZnIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDLHVHQUF1RyIsInNvdXJjZXMiOlsiL1VzZXJzL21vdXNlL3NyYy9ORUFSX0FJX2xpYnJhcnkvaGVsbG8tbmVhci1leGFtcGxlcy9mcm9udGVuZC9wdWJsaWMvbmVhci1sb2dvLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvbWVkaWEvbmVhci1sb2dvLmNkYTFiOTBiLnN2Z1wiLFwiaGVpZ2h0XCI6MjcsXCJ3aWR0aFwiOjI3LFwiYmx1cldpZHRoXCI6MCxcImJsdXJIZWlnaHRcIjowfTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./public/near-logo.svg\n");

/***/ }),

/***/ "(pages-dir-node)/./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(pages-dir-node)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @near-wallet-selector/react-hook */ \"@near-wallet-selector/react-hook\");\n/* harmony import */ var _near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_near_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/near-logo.svg */ \"(pages-dir-node)/./public/near-logo.svg\");\n\n\n\n\n\n\nconst Navigation = ()=>{\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        \"Navigation.useState\": ()=>{}\n    }[\"Navigation.useState\"]);\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('Loading...');\n    const { signedAccountId, signIn, signOut } = (0,_near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_4__.useWalletSelector)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Navigation.useEffect\": ()=>{\n            if (signedAccountId) {\n                setAction({\n                    \"Navigation.useEffect\": ()=>signOut\n                }[\"Navigation.useEffect\"]);\n                setLabel(`Logout ${signedAccountId}`);\n            } else {\n                setAction({\n                    \"Navigation.useEffect\": ()=>signIn\n                }[\"Navigation.useEffect\"]);\n                setLabel('Login');\n            }\n        }\n    }[\"Navigation.useEffect\"], [\n        signedAccountId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: _public_near_logo_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"NEAR\",\n                        width: \"30\",\n                        height: \"24\",\n                        className: \"d-inline-block align-text-top\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav pt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/components/navigation.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBRWU7QUFDeUI7QUFFeEI7QUFFdEMsTUFBTU0sYUFBYTtJQUN4QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBOytCQUFDLEtBQVE7O0lBQzdDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVRLGVBQWUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1QsbUZBQWlCQTtJQUU5REYsZ0RBQVNBO2dDQUFDO1lBQ1IsSUFBSVMsaUJBQWlCO2dCQUNuQkg7NENBQVUsSUFBTUs7O2dCQUNoQkgsU0FBUyxDQUFDLE9BQU8sRUFBRUMsaUJBQWlCO1lBQ3RDLE9BQU87Z0JBQ0xIOzRDQUFVLElBQU1JOztnQkFDaEJGLFNBQVM7WUFDWDtRQUNGOytCQUFHO1FBQUNDO0tBQWdCO0lBRXBCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ2Qsa0RBQUlBO29CQUFDZ0IsTUFBSztvQkFBSUMsUUFBUTtvQkFBQ0MsY0FBYzs4QkFDcEMsNEVBQUNuQixtREFBS0E7d0JBQUNvQixRQUFRO3dCQUFDQyxLQUFLaEIsNkRBQVFBO3dCQUFFaUIsS0FBSTt3QkFBT0MsT0FBTTt3QkFBS0MsUUFBTzt3QkFBS1QsV0FBVTs7Ozs7Ozs7Ozs7OEJBRTdFLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1U7d0JBQU9WLFdBQVU7d0JBQW9CVyxTQUFTbkI7a0NBQzVDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3VzZS9zcmMvTkVBUl9BSV9saWJyYXJ5L2hlbGxvLW5lYXItZXhhbXBsZXMvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0U2VsZWN0b3IgfSBmcm9tICdAbmVhci13YWxsZXQtc2VsZWN0b3IvcmVhY3QtaG9vayc7XG5cbmltcG9ydCBOZWFyTG9nbyBmcm9tICcvcHVibGljL25lYXItbG9nby5zdmcnO1xuXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKCgpID0+IHsgfSk7XG4gIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoJ0xvYWRpbmcuLi4nKTtcbiAgY29uc3QgeyBzaWduZWRBY2NvdW50SWQsIHNpZ25Jbiwgc2lnbk91dCB9ID0gdXNlV2FsbGV0U2VsZWN0b3IoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaWduZWRBY2NvdW50SWQpIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBzaWduT3V0KTtcbiAgICAgIHNldExhYmVsKGBMb2dvdXQgJHtzaWduZWRBY2NvdW50SWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBzaWduSW4pO1xuICAgICAgc2V0TGFiZWwoJ0xvZ2luJyk7XG4gICAgfVxuICB9LCBbc2lnbmVkQWNjb3VudElkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgIDxJbWFnZSBwcmlvcml0eSBzcmM9e05lYXJMb2dvfSBhbHQ9XCJORUFSXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjI0XCIgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdGV4dC10b3BcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBwdC0xXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e2FjdGlvbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlV2FsbGV0U2VsZWN0b3IiLCJOZWFyTG9nbyIsIk5hdmlnYXRpb24iLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJsYWJlbCIsInNldExhYmVsIiwic2lnbmVkQWNjb3VudElkIiwic2lnbkluIiwic2lnbk91dCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/navigation.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EVMWalletChain: () => (/* binding */ EVMWalletChain),\n/* harmony export */   HelloNearContract: () => (/* binding */ HelloNearContract),\n/* harmony export */   NetworkId: () => (/* binding */ NetworkId)\n/* harmony export */ });\nconst contractPerNetwork = {\n    mainnet: 'hello.near-examples.near',\n    testnet: 'hello.near-examples.testnet'\n};\n// Chains for EVM Wallets\nconst evmWalletChains = {\n    mainnet: {\n        chainId: 397,\n        name: 'Near Mainnet',\n        explorer: 'https://eth-explorer.near.org',\n        rpc: 'https://eth-rpc.mainnet.near.org'\n    },\n    testnet: {\n        chainId: 398,\n        name: 'Near Testnet',\n        explorer: 'https://eth-explorer-testnet.near.org',\n        rpc: 'https://eth-rpc.testnet.near.org'\n    }\n};\nconst NetworkId = 'testnet';\nconst HelloNearContract = contractPerNetwork[NetworkId];\nconst EVMWalletChain = evmWalletChains[NetworkId];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEscUJBQXFCO0lBQ3pCQyxTQUFTO0lBQ1RDLFNBQVM7QUFDWDtBQUVBLHlCQUF5QjtBQUN6QixNQUFNQyxrQkFBa0I7SUFDdEJGLFNBQVM7UUFDUEcsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsS0FBSztJQUNQO0lBQ0FMLFNBQVM7UUFDUEUsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsS0FBSztJQUNQO0FBQ0Y7QUFFTyxNQUFNQyxZQUFZLFVBQVU7QUFDNUIsTUFBTUMsb0JBQW9CVCxrQkFBa0IsQ0FBQ1EsVUFBVSxDQUFDO0FBQ3hELE1BQU1FLGlCQUFpQlAsZUFBZSxDQUFDSyxVQUFVLENBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3VzZS9zcmMvTkVBUl9BSV9saWJyYXJ5L2hlbGxvLW5lYXItZXhhbXBsZXMvZnJvbnRlbmQvc3JjL2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250cmFjdFBlck5ldHdvcmsgPSB7XG4gIG1haW5uZXQ6ICdoZWxsby5uZWFyLWV4YW1wbGVzLm5lYXInLFxuICB0ZXN0bmV0OiAnaGVsbG8ubmVhci1leGFtcGxlcy50ZXN0bmV0Jyxcbn07XG5cbi8vIENoYWlucyBmb3IgRVZNIFdhbGxldHNcbmNvbnN0IGV2bVdhbGxldENoYWlucyA9IHtcbiAgbWFpbm5ldDoge1xuICAgIGNoYWluSWQ6IDM5NyxcbiAgICBuYW1lOiAnTmVhciBNYWlubmV0JyxcbiAgICBleHBsb3JlcjogJ2h0dHBzOi8vZXRoLWV4cGxvcmVyLm5lYXIub3JnJyxcbiAgICBycGM6ICdodHRwczovL2V0aC1ycGMubWFpbm5ldC5uZWFyLm9yZycsXG4gIH0sXG4gIHRlc3RuZXQ6IHtcbiAgICBjaGFpbklkOiAzOTgsXG4gICAgbmFtZTogJ05lYXIgVGVzdG5ldCcsXG4gICAgZXhwbG9yZXI6ICdodHRwczovL2V0aC1leHBsb3Jlci10ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICBycGM6ICdodHRwczovL2V0aC1ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgTmV0d29ya0lkID0gJ3Rlc3RuZXQnO1xuZXhwb3J0IGNvbnN0IEhlbGxvTmVhckNvbnRyYWN0ID0gY29udHJhY3RQZXJOZXR3b3JrW05ldHdvcmtJZF07XG5leHBvcnQgY29uc3QgRVZNV2FsbGV0Q2hhaW4gPSBldm1XYWxsZXRDaGFpbnNbTmV0d29ya0lkXTtcbiJdLCJuYW1lcyI6WyJjb250cmFjdFBlck5ldHdvcmsiLCJtYWlubmV0IiwidGVzdG5ldCIsImV2bVdhbGxldENoYWlucyIsImNoYWluSWQiLCJuYW1lIiwiZXhwbG9yZXIiLCJycGMiLCJOZXR3b3JrSWQiLCJIZWxsb05lYXJDb250cmFjdCIsIkVWTVdhbGxldENoYWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/config.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @near-wallet-selector/modal-ui/styles.css */ \"(pages-dir-node)/./node_modules/@near-wallet-selector/modal-ui/styles.css\");\n/* harmony import */ var _near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @near-wallet-selector/my-near-wallet */ \"@near-wallet-selector/my-near-wallet\");\n/* harmony import */ var _near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _near_wallet_selector_meteor_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @near-wallet-selector/meteor-wallet */ \"@near-wallet-selector/meteor-wallet\");\n/* harmony import */ var _near_wallet_selector_meteor_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_meteor_wallet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _near_wallet_selector_meteor_wallet_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @near-wallet-selector/meteor-wallet-app */ \"@near-wallet-selector/meteor-wallet-app\");\n/* harmony import */ var _near_wallet_selector_meteor_wallet_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_meteor_wallet_app__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _near_wallet_selector_bitte_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @near-wallet-selector/bitte-wallet */ \"@near-wallet-selector/bitte-wallet\");\n/* harmony import */ var _near_wallet_selector_bitte_wallet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_bitte_wallet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _near_wallet_selector_ethereum_wallets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @near-wallet-selector/ethereum-wallets */ \"@near-wallet-selector/ethereum-wallets\");\n/* harmony import */ var _near_wallet_selector_ethereum_wallets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_ethereum_wallets__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _near_wallet_selector_hot_wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @near-wallet-selector/hot-wallet */ \"@near-wallet-selector/hot-wallet\");\n/* harmony import */ var _near_wallet_selector_hot_wallet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_hot_wallet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _near_wallet_selector_ledger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @near-wallet-selector/ledger */ \"@near-wallet-selector/ledger\");\n/* harmony import */ var _near_wallet_selector_ledger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_ledger__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _near_wallet_selector_sender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @near-wallet-selector/sender */ \"@near-wallet-selector/sender\");\n/* harmony import */ var _near_wallet_selector_sender__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_sender__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @near-wallet-selector/here-wallet */ \"@near-wallet-selector/here-wallet\");\n/* harmony import */ var _near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _near_wallet_selector_near_mobile_wallet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @near-wallet-selector/near-mobile-wallet */ \"@near-wallet-selector/near-mobile-wallet\");\n/* harmony import */ var _near_wallet_selector_near_mobile_wallet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_near_mobile_wallet__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _near_wallet_selector_welldone_wallet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @near-wallet-selector/welldone-wallet */ \"@near-wallet-selector/welldone-wallet\");\n/* harmony import */ var _near_wallet_selector_welldone_wallet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_welldone_wallet__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @near-wallet-selector/react-hook */ \"@near-wallet-selector/react-hook\");\n/* harmony import */ var _near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/config */ \"(pages-dir-node)/./src/config.js\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/navigation */ \"(pages-dir-node)/./src/components/navigation.js\");\n/* harmony import */ var _wallets_web3modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/wallets/web3modal */ \"(pages-dir-node)/./src/wallets/web3modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wallets_web3modal__WEBPACK_IMPORTED_MODULE_17__]);\n_wallets_web3modal__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// ethereum wallets\n\nconst walletSelectorConfig = {\n    network: _config__WEBPACK_IMPORTED_MODULE_15__.NetworkId,\n    // createAccessKeyFor: HelloNearContract,\n    modules: [\n        (0,_near_wallet_selector_ethereum_wallets__WEBPACK_IMPORTED_MODULE_7__.setupEthereumWallets)({\n            wagmiConfig: _wallets_web3modal__WEBPACK_IMPORTED_MODULE_17__.wagmiAdapter.wagmiConfig,\n            web3Modal: _wallets_web3modal__WEBPACK_IMPORTED_MODULE_17__.web3Modal\n        }),\n        (0,_near_wallet_selector_bitte_wallet__WEBPACK_IMPORTED_MODULE_6__.setupBitteWallet)(),\n        (0,_near_wallet_selector_meteor_wallet__WEBPACK_IMPORTED_MODULE_4__.setupMeteorWallet)(),\n        (0,_near_wallet_selector_meteor_wallet_app__WEBPACK_IMPORTED_MODULE_5__.setupMeteorWalletApp)({\n            contractId: _config__WEBPACK_IMPORTED_MODULE_15__.HelloNearContract\n        }),\n        (0,_near_wallet_selector_hot_wallet__WEBPACK_IMPORTED_MODULE_8__.setupHotWallet)(),\n        (0,_near_wallet_selector_ledger__WEBPACK_IMPORTED_MODULE_9__.setupLedger)(),\n        (0,_near_wallet_selector_sender__WEBPACK_IMPORTED_MODULE_10__.setupSender)(),\n        (0,_near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_11__.setupHereWallet)(),\n        (0,_near_wallet_selector_near_mobile_wallet__WEBPACK_IMPORTED_MODULE_12__.setupNearMobileWallet)(),\n        (0,_near_wallet_selector_welldone_wallet__WEBPACK_IMPORTED_MODULE_13__.setupWelldoneWallet)(),\n        (0,_near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_3__.setupMyNearWallet)()\n    ]\n};\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_near_wallet_selector_react_hook__WEBPACK_IMPORTED_MODULE_14__.WalletSelectorProvider, {\n        config: walletSelectorConfig,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_16__.Navigation, {}, void 0, false, {\n                fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/pages/_app.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mouse/src/NEAR_AI_library/hello-near-examples/frontend/src/pages/_app.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXFCO0FBQ3NCO0FBQ0Q7QUFDTztBQUNUO0FBQ1E7QUFDWjtBQUNQO0FBQ0E7QUFDUztBQUNhO0FBQ0w7QUFDRjtBQUNsQjtBQUNIO0FBRXJELG1CQUFtQjtBQUMyQztBQUU5RCxNQUFNaUIsdUJBQXVCO0lBQzNCQyxTQUFTTCwrQ0FBU0E7SUFDbEIseUNBQXlDO0lBQ3pDTSxTQUFTO1FBQ1BmLDRGQUFvQkEsQ0FBQztZQUFFZ0IsYUFBYUwsNkRBQVlBLENBQUNLLFdBQVc7WUFBRUosU0FBU0EsNERBQUFBO1FBQUM7UUFDeEViLG9GQUFnQkE7UUFDaEJGLHNGQUFpQkE7UUFDakJDLDZGQUFvQkEsQ0FBQztZQUFDbUIsWUFBWVQsdURBQWlCQTtRQUFBO1FBQ25EUCxnRkFBY0E7UUFDZEMseUVBQVdBO1FBQ1hDLDBFQUFXQTtRQUNYQyxtRkFBZUE7UUFDZkMsZ0dBQXFCQTtRQUNyQkMsMkZBQW1CQTtRQUNuQlYsdUZBQWlCQTtLQUNsQjtBQUNIO0FBRWUsU0FBU3NCLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFFbEQscUJBQ0UsOERBQUNiLHFGQUFzQkE7UUFBQ2MsUUFBUVI7OzBCQUM5Qiw4REFBQ0gsK0RBQVVBOzs7OzswQkFDWCw4REFBQ1M7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvVXNlcnMvbW91c2Uvc3JjL05FQVJfQUlfbGlicmFyeS9oZWxsby1uZWFyLWV4YW1wbGVzL2Zyb250ZW5kL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9tb2RhbC11aS9zdHlsZXMuY3NzJztcbmltcG9ydCB7IHNldHVwTXlOZWFyV2FsbGV0IH0gZnJvbSAnQG5lYXItd2FsbGV0LXNlbGVjdG9yL215LW5lYXItd2FsbGV0JztcbmltcG9ydCB7IHNldHVwTWV0ZW9yV2FsbGV0IH0gZnJvbSAnQG5lYXItd2FsbGV0LXNlbGVjdG9yL21ldGVvci13YWxsZXQnO1xuaW1wb3J0IHsgc2V0dXBNZXRlb3JXYWxsZXRBcHAgfSBmcm9tICdAbmVhci13YWxsZXQtc2VsZWN0b3IvbWV0ZW9yLXdhbGxldC1hcHAnO1xuaW1wb3J0IHsgc2V0dXBCaXR0ZVdhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9iaXR0ZS13YWxsZXQnO1xuaW1wb3J0IHsgc2V0dXBFdGhlcmV1bVdhbGxldHMgfSBmcm9tICdAbmVhci13YWxsZXQtc2VsZWN0b3IvZXRoZXJldW0td2FsbGV0cyc7XG5pbXBvcnQgeyBzZXR1cEhvdFdhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9ob3Qtd2FsbGV0JztcbmltcG9ydCB7IHNldHVwTGVkZ2VyIH0gZnJvbSAnQG5lYXItd2FsbGV0LXNlbGVjdG9yL2xlZGdlcic7XG5pbXBvcnQgeyBzZXR1cFNlbmRlciB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9zZW5kZXInO1xuaW1wb3J0IHsgc2V0dXBIZXJlV2FsbGV0IH0gZnJvbSAnQG5lYXItd2FsbGV0LXNlbGVjdG9yL2hlcmUtd2FsbGV0JztcbmltcG9ydCB7IHNldHVwTmVhck1vYmlsZVdhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9uZWFyLW1vYmlsZS13YWxsZXQnO1xuaW1wb3J0IHsgc2V0dXBXZWxsZG9uZVdhbGxldCB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci93ZWxsZG9uZS13YWxsZXQnO1xuaW1wb3J0IHsgV2FsbGV0U2VsZWN0b3JQcm92aWRlciB9IGZyb20gJ0BuZWFyLXdhbGxldC1zZWxlY3Rvci9yZWFjdC1ob29rJztcbmltcG9ydCB7IEhlbGxvTmVhckNvbnRyYWN0LCBOZXR3b3JrSWQgfSBmcm9tICdAL2NvbmZpZyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL25hdmlnYXRpb24nO1xuXG4vLyBldGhlcmV1bSB3YWxsZXRzXG5pbXBvcnQgeyB3YWdtaUFkYXB0ZXIsIHdlYjNNb2RhbCB9IGZyb20gJ0Avd2FsbGV0cy93ZWIzbW9kYWwnO1xuXG5jb25zdCB3YWxsZXRTZWxlY3RvckNvbmZpZyA9IHtcbiAgbmV0d29yazogTmV0d29ya0lkLFxuICAvLyBjcmVhdGVBY2Nlc3NLZXlGb3I6IEhlbGxvTmVhckNvbnRyYWN0LFxuICBtb2R1bGVzOiBbXG4gICAgc2V0dXBFdGhlcmV1bVdhbGxldHMoeyB3YWdtaUNvbmZpZzogd2FnbWlBZGFwdGVyLndhZ21pQ29uZmlnLCB3ZWIzTW9kYWwgfSksXG4gICAgc2V0dXBCaXR0ZVdhbGxldCgpLFxuICAgIHNldHVwTWV0ZW9yV2FsbGV0KCksXG4gICAgc2V0dXBNZXRlb3JXYWxsZXRBcHAoe2NvbnRyYWN0SWQ6IEhlbGxvTmVhckNvbnRyYWN0fSksXG4gICAgc2V0dXBIb3RXYWxsZXQoKSxcbiAgICBzZXR1cExlZGdlcigpLFxuICAgIHNldHVwU2VuZGVyKCksXG4gICAgc2V0dXBIZXJlV2FsbGV0KCksXG4gICAgc2V0dXBOZWFyTW9iaWxlV2FsbGV0KCksXG4gICAgc2V0dXBXZWxsZG9uZVdhbGxldCgpLFxuICAgIHNldHVwTXlOZWFyV2FsbGV0KCksXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxXYWxsZXRTZWxlY3RvclByb3ZpZGVyIGNvbmZpZz17d2FsbGV0U2VsZWN0b3JDb25maWd9PlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1dhbGxldFNlbGVjdG9yUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic2V0dXBNeU5lYXJXYWxsZXQiLCJzZXR1cE1ldGVvcldhbGxldCIsInNldHVwTWV0ZW9yV2FsbGV0QXBwIiwic2V0dXBCaXR0ZVdhbGxldCIsInNldHVwRXRoZXJldW1XYWxsZXRzIiwic2V0dXBIb3RXYWxsZXQiLCJzZXR1cExlZGdlciIsInNldHVwU2VuZGVyIiwic2V0dXBIZXJlV2FsbGV0Iiwic2V0dXBOZWFyTW9iaWxlV2FsbGV0Iiwic2V0dXBXZWxsZG9uZVdhbGxldCIsIldhbGxldFNlbGVjdG9yUHJvdmlkZXIiLCJIZWxsb05lYXJDb250cmFjdCIsIk5ldHdvcmtJZCIsIk5hdmlnYXRpb24iLCJ3YWdtaUFkYXB0ZXIiLCJ3ZWIzTW9kYWwiLCJ3YWxsZXRTZWxlY3RvckNvbmZpZyIsIm5ldHdvcmsiLCJtb2R1bGVzIiwid2FnbWlDb25maWciLCJjb250cmFjdElkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/wallets/web3modal.js":
/*!**********************************!*\
  !*** ./src/wallets/web3modal.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wagmiAdapter: () => (/* binding */ wagmiAdapter),\n/* harmony export */   web3Modal: () => (/* binding */ web3Modal)\n/* harmony export */ });\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wagmi/core */ \"@wagmi/core\");\n/* harmony import */ var _reown_appkit_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reown/appkit/react */ \"@reown/appkit/react\");\n/* harmony import */ var _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reown/appkit/networks */ \"@reown/appkit/networks\");\n/* harmony import */ var _reown_appkit_adapter_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reown/appkit-adapter-wagmi */ \"@reown/appkit-adapter-wagmi\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wagmi_core__WEBPACK_IMPORTED_MODULE_0__, _reown_appkit_react__WEBPACK_IMPORTED_MODULE_1__, _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__, _reown_appkit_adapter_wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([_wagmi_core__WEBPACK_IMPORTED_MODULE_0__, _reown_appkit_react__WEBPACK_IMPORTED_MODULE_1__, _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__, _reown_appkit_adapter_wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst projectId = '5bb0fe33763b3bea40b8d69e4269b4ae';\nconst wagmiAdapter = new _reown_appkit_adapter_wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiAdapter({\n    projectId,\n    networks: [\n        _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__.nearTestnet\n    ]\n});\nconst web3Modal = (0,_reown_appkit_react__WEBPACK_IMPORTED_MODULE_1__.createAppKit)({\n    adapters: [\n        wagmiAdapter\n    ],\n    projectId,\n    networks: [\n        _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__.nearTestnet\n    ],\n    enableWalletConnect: true,\n    features: {\n        analytics: true,\n        swaps: false,\n        onramp: false,\n        email: false,\n        socials: false\n    },\n    coinbasePreference: \"eoaOnly\",\n    allWallets: \"SHOW\"\n});\n// force reconnecting if the user has already signed in with an ethereum wallet\n// this is a workaround until `ethereum-wallets` supports the `reconnect` method\nif (false) {}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy93YWxsZXRzL3dlYjNtb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUNFO0FBQ007QUFFMUQsTUFBTUksWUFBWTtBQUVYLE1BQU1DLGVBQWUsSUFBSUYscUVBQVlBLENBQUM7SUFDM0NDO0lBQ0FFLFVBQVU7UUFBQ0osK0RBQVdBO0tBQUM7QUFDekIsR0FBRztBQUVJLE1BQU1LLFlBQVlOLGlFQUFZQSxDQUFDO0lBQ3BDTyxVQUFVO1FBQUNIO0tBQWE7SUFDeEJEO0lBQ0FFLFVBQVU7UUFBQ0osK0RBQVdBO0tBQUM7SUFDdkJPLHFCQUFxQjtJQUNyQkMsVUFBVTtRQUNSQyxXQUFXO1FBQ1hDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBQyxvQkFBb0I7SUFDcEJDLFlBQVk7QUFDZCxHQUFHO0FBRUgsK0VBQStFO0FBQy9FLGdGQUFnRjtBQUNoRixJQUFJLEtBQTZCLEVBQUUsRUFHbEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3VzZS9zcmMvTkVBUl9BSV9saWJyYXJ5L2hlbGxvLW5lYXItZXhhbXBsZXMvZnJvbnRlbmQvc3JjL3dhbGxldHMvd2ViM21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlY29ubmVjdCB9IGZyb20gJ0B3YWdtaS9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZUFwcEtpdCB9IGZyb20gJ0ByZW93bi9hcHBraXQvcmVhY3QnXG5pbXBvcnQgeyBuZWFyVGVzdG5ldCB9IGZyb20gJ0ByZW93bi9hcHBraXQvbmV0d29ya3MnXG5pbXBvcnQgeyBXYWdtaUFkYXB0ZXIgfSBmcm9tICdAcmVvd24vYXBwa2l0LWFkYXB0ZXItd2FnbWknXG5cbmNvbnN0IHByb2plY3RJZCA9ICc1YmIwZmUzMzc2M2IzYmVhNDBiOGQ2OWU0MjY5YjRhZSc7XG5cbmV4cG9ydCBjb25zdCB3YWdtaUFkYXB0ZXIgPSBuZXcgV2FnbWlBZGFwdGVyKHtcbiAgcHJvamVjdElkLFxuICBuZXR3b3JrczogW25lYXJUZXN0bmV0XSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgd2ViM01vZGFsID0gY3JlYXRlQXBwS2l0KHtcbiAgYWRhcHRlcnM6IFt3YWdtaUFkYXB0ZXJdLFxuICBwcm9qZWN0SWQsXG4gIG5ldHdvcmtzOiBbbmVhclRlc3RuZXRdLFxuICBlbmFibGVXYWxsZXRDb25uZWN0OiB0cnVlLFxuICBmZWF0dXJlczoge1xuICAgIGFuYWx5dGljczogdHJ1ZSxcbiAgICBzd2FwczogZmFsc2UsXG4gICAgb25yYW1wOiBmYWxzZSxcbiAgICBlbWFpbDogZmFsc2UsIC8vIFNtYXJ0IGFjY291bnRzIChTYWZlIGNvbnRyYWN0KSBub3QgYXZhaWxhYmxlIG9uIE5FQVIgUHJvdG9jb2wsIG9ubHkgRU9BLlxuICAgIHNvY2lhbHM6IGZhbHNlLCAvLyBTbWFydCBhY2NvdW50cyAoU2FmZSBjb250cmFjdCkgbm90IGF2YWlsYWJsZSBvbiBORUFSIFByb3RvY29sLCBvbmx5IEVPQS5cbiAgfSxcbiAgY29pbmJhc2VQcmVmZXJlbmNlOiBcImVvYU9ubHlcIiwgLy8gU21hcnQgYWNjb3VudHMgKFNhZmUgY29udHJhY3QpIG5vdCBhdmFpbGFibGUgb24gTkVBUiBQcm90b2NvbCwgb25seSBFT0EuXG4gIGFsbFdhbGxldHM6IFwiU0hPV1wiLFxufSk7XG5cbi8vIGZvcmNlIHJlY29ubmVjdGluZyBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBzaWduZWQgaW4gd2l0aCBhbiBldGhlcmV1bSB3YWxsZXRcbi8vIHRoaXMgaXMgYSB3b3JrYXJvdW5kIHVudGlsIGBldGhlcmV1bS13YWxsZXRzYCBzdXBwb3J0cyB0aGUgYHJlY29ubmVjdGAgbWV0aG9kXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBjb25zdCByZWNlbnRXYWxsZXRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuZWFyLXdhbGxldC1zZWxlY3RvcjpyZWNlbnRseVNpZ25lZEluV2FsbGV0c1wiKTtcbiAgcmVjZW50V2FsbGV0cyAmJiByZWNlbnRXYWxsZXRzLmluY2x1ZGVzKFwiZXRoZXJldW0td2FsbGV0c1wiKSAmJiByZWNvbm5lY3Qod2FnbWlBZGFwdGVyLndhZ21pQ29uZmlnKVxufSAiXSwibmFtZXMiOlsicmVjb25uZWN0IiwiY3JlYXRlQXBwS2l0IiwibmVhclRlc3RuZXQiLCJXYWdtaUFkYXB0ZXIiLCJwcm9qZWN0SWQiLCJ3YWdtaUFkYXB0ZXIiLCJuZXR3b3JrcyIsIndlYjNNb2RhbCIsImFkYXB0ZXJzIiwiZW5hYmxlV2FsbGV0Q29ubmVjdCIsImZlYXR1cmVzIiwiYW5hbHl0aWNzIiwic3dhcHMiLCJvbnJhbXAiLCJlbWFpbCIsInNvY2lhbHMiLCJjb2luYmFzZVByZWZlcmVuY2UiLCJhbGxXYWxsZXRzIiwicmVjZW50V2FsbGV0cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbmNsdWRlcyIsIndhZ21pQ29uZmlnIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/wallets/web3modal.js\n");

/***/ }),

/***/ "@near-wallet-selector/bitte-wallet":
/*!*****************************************************!*\
  !*** external "@near-wallet-selector/bitte-wallet" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/bitte-wallet");

/***/ }),

/***/ "@near-wallet-selector/ethereum-wallets":
/*!*********************************************************!*\
  !*** external "@near-wallet-selector/ethereum-wallets" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/ethereum-wallets");

/***/ }),

/***/ "@near-wallet-selector/here-wallet":
/*!****************************************************!*\
  !*** external "@near-wallet-selector/here-wallet" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/here-wallet");

/***/ }),

/***/ "@near-wallet-selector/hot-wallet":
/*!***************************************************!*\
  !*** external "@near-wallet-selector/hot-wallet" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/hot-wallet");

/***/ }),

/***/ "@near-wallet-selector/ledger":
/*!***********************************************!*\
  !*** external "@near-wallet-selector/ledger" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/ledger");

/***/ }),

/***/ "@near-wallet-selector/meteor-wallet":
/*!******************************************************!*\
  !*** external "@near-wallet-selector/meteor-wallet" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/meteor-wallet");

/***/ }),

/***/ "@near-wallet-selector/meteor-wallet-app":
/*!**********************************************************!*\
  !*** external "@near-wallet-selector/meteor-wallet-app" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/meteor-wallet-app");

/***/ }),

/***/ "@near-wallet-selector/my-near-wallet":
/*!*******************************************************!*\
  !*** external "@near-wallet-selector/my-near-wallet" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/my-near-wallet");

/***/ }),

/***/ "@near-wallet-selector/near-mobile-wallet":
/*!***********************************************************!*\
  !*** external "@near-wallet-selector/near-mobile-wallet" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/near-mobile-wallet");

/***/ }),

/***/ "@near-wallet-selector/react-hook":
/*!***************************************************!*\
  !*** external "@near-wallet-selector/react-hook" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/react-hook");

/***/ }),

/***/ "@near-wallet-selector/sender":
/*!***********************************************!*\
  !*** external "@near-wallet-selector/sender" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/sender");

/***/ }),

/***/ "@near-wallet-selector/welldone-wallet":
/*!********************************************************!*\
  !*** external "@near-wallet-selector/welldone-wallet" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@near-wallet-selector/welldone-wallet");

/***/ }),

/***/ "@reown/appkit-adapter-wagmi":
/*!**********************************************!*\
  !*** external "@reown/appkit-adapter-wagmi" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit-adapter-wagmi");;

/***/ }),

/***/ "@reown/appkit/networks":
/*!*****************************************!*\
  !*** external "@reown/appkit/networks" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit/networks");;

/***/ }),

/***/ "@reown/appkit/react":
/*!**************************************!*\
  !*** external "@reown/appkit/react" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit/react");;

/***/ }),

/***/ "@wagmi/core":
/*!******************************!*\
  !*** external "@wagmi/core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@near-wallet-selector"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();