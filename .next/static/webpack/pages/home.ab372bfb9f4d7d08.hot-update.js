"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button */ \"./pages/home/components/button.js\");\n/* harmony import */ var _components_myHeader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/myHeader/index */ \"./components/myHeader/index.js\");\nvar _jsxFileName = \"/Users/cengjunwei/Desktop/\\u4E2A\\u4EBA\\u9879\\u76EE/next-react-web/next-react-web/pages/home/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Home = function Home() {\n  // routeChangeStart     路由发生变化之前\n  // routeChangeComplete  路由发生变化之后\n  // beforeHistoryChange  Next.js全部都用History模式\n  // routeChangeError     路由发生错误时,404不算\n  // hashChangeStart      Hash路由切换之前\n  // hashChangeComplete   Hash路由切换完成 \n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', function () {\n    var _console;\n\n    for (var _len = arguments.length, argus = new Array(_len), _key = 0; _key < _len; _key++) {\n      argus[_key] = arguments[_key];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console = console).log.apply(_console, ['1.routeChangeStart,路由开始变化,参数为:'].concat(argus));\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', function () {\n    var _console2;\n\n    for (var _len2 = arguments.length, argus = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      argus[_key2] = arguments[_key2];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console2 = console).log.apply(_console2, ['2.routeChangeComplete,路由变化结束,参数为:'].concat(argus));\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('beforeHistoryChange', function () {\n    var _console3;\n\n    for (var _len3 = arguments.length, argus = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      argus[_key3] = arguments[_key3];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console3 = console).log.apply(_console3, ['3.beforeHistoryChange,参数为:'].concat(argus));\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', function () {\n    var _console4;\n\n    for (var _len4 = arguments.length, argus = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n      argus[_key4] = arguments[_key4];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console4 = console).log.apply(_console4, ['4.routeChangeError,路由发生错误时,参数为:'].concat(argus));\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('hashChangeStart', function () {\n    var _console5;\n\n    for (var _len5 = arguments.length, argus = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n      argus[_key5] = arguments[_key5];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console5 = console).log.apply(_console5, ['5.hashChangeStart,Hash路由切换之前,参数为:'].concat(argus));\n  });\n  next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('hashChangeComplete', function () {\n    var _console6;\n\n    for (var _len6 = arguments.length, argus = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n      argus[_key6] = arguments[_key6];\n    }\n\n    // ...argus 返回路径和{shallow: false}对象\n    (_console6 = console).log.apply(_console6, ['6.hashChangeComplete,Hash路由切换完成,参数为:'].concat(argus));\n  }); // 编写跳转方法\n\n  function gotoA() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/users-center');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_myHeader_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"\\u6211\\u662F\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"\\u6211\\u662F\\u9996\\u9875\"));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUVmO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBSCw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsWUFBYztJQUFBOztJQUFBLGtDQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDL0M7SUFDQSxZQUFBQyxPQUFPLEVBQUNDLEdBQVIsa0JBQVksZ0NBQVosU0FBaURGLEtBQWpEO0VBQ0gsQ0FIRDtFQUlBTiw0REFBQSxDQUFpQixxQkFBakIsRUFBd0MsWUFBYztJQUFBOztJQUFBLG1DQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDbEQ7SUFDQSxhQUFBQyxPQUFPLEVBQUNDLEdBQVIsbUJBQVksbUNBQVosU0FBb0RGLEtBQXBEO0VBQ0gsQ0FIRDtFQUlBTiw0REFBQSxDQUFpQixxQkFBakIsRUFBd0MsWUFBYztJQUFBOztJQUFBLG1DQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDbEQ7SUFDQSxhQUFBQyxPQUFPLEVBQUNDLEdBQVIsbUJBQVksNEJBQVosU0FBNkNGLEtBQTdDO0VBQ0gsQ0FIRDtFQUlBTiw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsWUFBYztJQUFBOztJQUFBLG1DQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDL0M7SUFDQSxhQUFBQyxPQUFPLEVBQUNDLEdBQVIsbUJBQVksaUNBQVosU0FBa0RGLEtBQWxEO0VBQ0gsQ0FIRDtFQUlBTiw0REFBQSxDQUFpQixpQkFBakIsRUFBb0MsWUFBYztJQUFBOztJQUFBLG1DQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDOUM7SUFDQSxhQUFBQyxPQUFPLEVBQUNDLEdBQVIsbUJBQVksbUNBQVosU0FBb0RGLEtBQXBEO0VBQ0gsQ0FIRDtFQUlBTiw0REFBQSxDQUFpQixvQkFBakIsRUFBdUMsWUFBYztJQUFBOztJQUFBLG1DQUFWTSxLQUFVO01BQVZBLEtBQVU7SUFBQTs7SUFDakQ7SUFDQSxhQUFBQyxPQUFPLEVBQUNDLEdBQVIsbUJBQVksc0NBQVosU0FBdURGLEtBQXZEO0VBQ0gsQ0FIRCxFQTdCZSxDQWtDZjs7RUFDQSxTQUFTRyxLQUFULEdBQWlCO0lBQ2JULHVEQUFBLENBQVksZUFBWjtFQUNIOztFQUVELG9CQUNJLHVJQUNBLDJEQUFDLGtFQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBREEsZUFFSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUZKLENBREo7QUFLSCxDQTVDRDs7S0FBTUc7QUE2Q04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcz83MWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgTXlIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9teUhlYWRlci9pbmRleCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRlQ2hhbmdlU3RhcnQgICAgIOi3r+eUseWPkeeUn+WPmOWMluS5i+WJjVxuICAgIC8vIHJvdXRlQ2hhbmdlQ29tcGxldGUgIOi3r+eUseWPkeeUn+WPmOWMluS5i+WQjlxuICAgIC8vIGJlZm9yZUhpc3RvcnlDaGFuZ2UgIE5leHQuanPlhajpg6jpg73nlKhIaXN0b3J55qih5byPXG4gICAgLy8gcm91dGVDaGFuZ2VFcnJvciAgICAg6Lev55Sx5Y+R55Sf6ZSZ6K+v5pe2LDQwNOS4jeeul1xuICAgIC8vIGhhc2hDaGFuZ2VTdGFydCAgICAgIEhhc2jot6/nlLHliIfmjaLkuYvliY1cbiAgICAvLyBoYXNoQ2hhbmdlQ29tcGxldGUgICBIYXNo6Lev55Sx5YiH5o2i5a6M5oiQIFxuXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICguLi5hcmd1cykgPT4ge1xuICAgICAgICAvLyAuLi5hcmd1cyDov5Tlm57ot6/lvoTlkox7c2hhbGxvdzogZmFsc2V95a+56LGhXG4gICAgICAgIGNvbnNvbGUubG9nKCcxLnJvdXRlQ2hhbmdlU3RhcnQs6Lev55Sx5byA5aeL5Y+Y5YyWLOWPguaVsOS4ujonLCAuLi5hcmd1cyk7XG4gICAgfSlcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKC4uLmFyZ3VzKSA9PiB7XG4gICAgICAgIC8vIC4uLmFyZ3VzIOi/lOWbnui3r+W+hOWSjHtzaGFsbG93OiBmYWxzZX3lr7nosaFcbiAgICAgICAgY29uc29sZS5sb2coJzIucm91dGVDaGFuZ2VDb21wbGV0ZSzot6/nlLHlj5jljJbnu5PmnZ8s5Y+C5pWw5Li6OicsIC4uLmFyZ3VzKTtcbiAgICB9KVxuICAgIFJvdXRlci5ldmVudHMub24oJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCAoLi4uYXJndXMpID0+IHtcbiAgICAgICAgLy8gLi4uYXJndXMg6L+U5Zue6Lev5b6E5ZKMe3NoYWxsb3c6IGZhbHNlfeWvueixoVxuICAgICAgICBjb25zb2xlLmxvZygnMy5iZWZvcmVIaXN0b3J5Q2hhbmdlLOWPguaVsOS4ujonLCAuLi5hcmd1cyk7XG4gICAgfSlcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKC4uLmFyZ3VzKSA9PiB7XG4gICAgICAgIC8vIC4uLmFyZ3VzIOi/lOWbnui3r+W+hOWSjHtzaGFsbG93OiBmYWxzZX3lr7nosaFcbiAgICAgICAgY29uc29sZS5sb2coJzQucm91dGVDaGFuZ2VFcnJvcizot6/nlLHlj5HnlJ/plJnor6/ml7Ys5Y+C5pWw5Li6OicsIC4uLmFyZ3VzKTtcbiAgICB9KVxuICAgIFJvdXRlci5ldmVudHMub24oJ2hhc2hDaGFuZ2VTdGFydCcsICguLi5hcmd1cykgPT4ge1xuICAgICAgICAvLyAuLi5hcmd1cyDov5Tlm57ot6/lvoTlkox7c2hhbGxvdzogZmFsc2V95a+56LGhXG4gICAgICAgIGNvbnNvbGUubG9nKCc1Lmhhc2hDaGFuZ2VTdGFydCxIYXNo6Lev55Sx5YiH5o2i5LmL5YmNLOWPguaVsOS4ujonLCAuLi5hcmd1cyk7XG4gICAgfSlcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdoYXNoQ2hhbmdlQ29tcGxldGUnLCAoLi4uYXJndXMpID0+IHtcbiAgICAgICAgLy8gLi4uYXJndXMg6L+U5Zue6Lev5b6E5ZKMe3NoYWxsb3c6IGZhbHNlfeWvueixoVxuICAgICAgICBjb25zb2xlLmxvZygnNi5oYXNoQ2hhbmdlQ29tcGxldGUsSGFzaOi3r+eUseWIh+aNouWujOaIkCzlj4LmlbDkuLo6JywgLi4uYXJndXMpO1xuICAgIH0pXG5cbiAgICAvLyDnvJblhpnot7Povazmlrnms5VcbiAgICBmdW5jdGlvbiBnb3RvQSgpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy91c2Vycy1jZW50ZXInKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxNeUhlYWRlcj7miJHmmK/pppbpobU8L015SGVhZGVyPlxuICAgICAgICAgICAgPGRpdj7miJHmmK/pppbpobU8L2Rpdj4gXG4gICAgICAgIDwvPilcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWUgIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJvdXRlciIsIkJ1dHRvbiIsIk15SGVhZGVyIiwiSG9tZSIsImV2ZW50cyIsIm9uIiwiYXJndXMiLCJjb25zb2xlIiwibG9nIiwiZ290b0EiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home/index.js\n"));

/***/ })

});