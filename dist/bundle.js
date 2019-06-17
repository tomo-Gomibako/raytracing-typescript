/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar Vector3 = __webpack_require__(/*! ./modules/Vector3 */ \"./src/modules/Vector3.ts\");\nvar v1 = new Vector3(1, 2, 3);\nvar v2 = new Vector3(3, 5, 7);\nconsole.log(v1.tos());\nconsole.log(v1.multiply(2).tos());\nconsole.log(v1.dot(v2));\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/modules/Vector3.ts":
/*!********************************!*\
  !*** ./src/modules/Vector3.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Vector3 = /** @class */ (function () {\n    function Vector3(x, y, z) {\n        this.x = x;\n        this.y = y;\n        this.z = z;\n    }\n    Object.defineProperty(Vector3.prototype, \"normalized\", {\n        get: function () {\n            return 0;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Vector3.prototype, \"norm\", {\n        get: function () {\n            return 0;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Vector3.prototype.tos = function () {\n        return \"Vector3(\" + this.x + \", \" + this.y + \", \" + this.z + \")\";\n    };\n    Vector3.prototype.multiply = function (val) {\n        if (val instanceof Vector3) {\n            return new Vector3(this.x * val.x, this.y * val.y, this.z * val.z);\n        }\n        else if (typeof val === \"number\") {\n            return new Vector3(this.x * val, this.y * val, this.z * val);\n        }\n        else {\n            throw new Error(\"An argument must be number or vector3.\");\n        }\n    };\n    Vector3.prototype.dot = function (vec) {\n        return this.x * vec.x + this.y * vec.y + this.z * vec.z;\n    };\n    return Vector3;\n}());\n/*\ngetters:\n    normalized\n    norm\n\nmethods:\n    tos\n    dot\n    cross\n    sq_magnitude\n    magnitude\n    normalize\n    equals\n*/\nmodule.exports = Vector3;\n\n\n//# sourceURL=webpack:///./src/modules/Vector3.ts?");

/***/ })

/******/ });