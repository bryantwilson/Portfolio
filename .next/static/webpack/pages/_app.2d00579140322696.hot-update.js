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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5RDtBQUNYO0FBRTlDLEdBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDWkMsTUFBTSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUNuQixDQURvQixDQUFDO1lBQ2ZDLElBQUksRUFBRSxDQUFDO2dCQUNIQyxFQUFFLEVBQUVMLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztZQUN4QyxDQUFDO1FBQ0wsQ0FBQzs7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDRyxVQUFVLEdBQUcsQ0FBQztJQUNoQkMsT0FBTyxFQUFFLENBQUM7UUFDTkMsUUFBUSxFQUFFLENBQUM7WUFDUCxDQUFlLGdCQUFFLENBQUM7Z0JBQ2RDLGNBQWMsRUFBRSxDQUFXO2dCQUMzQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCQyxtQkFBbUIsRUFBRSxDQUFTO2dCQUM5QkMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQztZQUNuQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFREMsSUFBSSxFQUFFLENBQUM7UUFDSGxCLFNBQVMsRUFBRUssUUFBUSxDQUFSQSxLQUFLO1lBQUksTUFDMUIsQ0FEMkIsQ0FBQztnQkFDbEJjLEtBQUssRUFBRWpCLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztnQkFDdkNRLG1CQUFtQixFQUFFLENBQUM7WUFDMUIsQ0FBQzs7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELEdBQUssQ0FBQ08sS0FBSyxHQUFHLENBQUM7SUFDWEMsT0FBTyxFQUFFLENBQXFCO0FBQ2xDLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLFNBQVMsRUFBRSxDQUFTO0FBQ3hCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLGdCQUFnQixFQUFFLENBQU07SUFDeEJDLGtCQUFrQixFQUFFLElBQUk7QUFDNUIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHMUIsNkRBQVcsQ0FBQyxDQUFDO0lBQ3ZCdUIsTUFBTSxFQUFOQSxNQUFNO0lBQ05yQixNQUFNLEVBQU5BLE1BQU07SUFDTkssVUFBVSxFQUFWQSxVQUFVO0lBQ1ZjLE1BQU0sRUFBTkEsTUFBTTtJQUNORixLQUFLLEVBQUxBLEtBQUs7QUFDVCxDQUFDO0FBRUQsK0RBQWVPLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmFzZVN0eWxlLCBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IG1vZGUgIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjNTI1MjUyJyxcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIExpbms6IHtcclxuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICAgIGhlYWRpbmc6IFwiJ00gUExVUyBSb3VuZGVkIDFjJ1wiXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIGNvbmZpZyxcclxuICAgIHN0eWxlcyxcclxuICAgIGNvbXBvbmVudHMsXHJcbiAgICBjb2xvcnMsXHJcbiAgICBmb250c1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiYmFzZVN0eWxlIiwiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/main */ \"./components/layouts/main.js\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Website = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            router: router,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"C:\\\\repos\\\\myPortfolio\\\\homepage\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                },\n                __self: _this\n            }))\n        }, void 0, false, {\n            fileName: \"C:\\\\repos\\\\myPortfolio\\\\homepage\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\repos\\\\myPortfolio\\\\homepage\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0Y7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEdBQUssQ0FBQ0csT0FBTyxHQUFHLFFBQVEsUUFBNEIsQ0FBQztRQUFuQ0MsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07SUFDMUMsTUFBTSw2RUFDRE4sNERBQWM7UUFBQ0UsS0FBSyxFQUFFQSxrREFBSzs4RkFDdkJELGdFQUFNO1lBQUNLLE1BQU0sRUFBRUEsTUFBTTt5RkFDakJGLFNBQVMsb0JBQUtDLFNBQVM7Z0JBQUVFLEdBQUcsRUFBRUQsTUFBTSxDQUFDRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0QsQ0FBQztLQVJLTCxPQUFPO0FBVWIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvbWFpbidcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2xpYi90aGVtZSdcclxuXHJcbmNvbnN0IFdlYnNpdGUgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8TGF5b3V0IHJvdXRlcj17cm91dGVyfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGUiXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJMYXlvdXQiLCJ0aGVtZSIsIldlYnNpdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJrZXkiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});