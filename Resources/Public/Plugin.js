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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _manifest = __webpack_require__(/*! ./manifest */ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js");

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SynchronousMetaRegistry = exports.SynchronousRegistry = exports.readFromConsumerApi = exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(/*! ./createConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js");

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(/*! ./readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

var _index = __webpack_require__(/*! ./registry/index */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;
exports.readFromConsumerApi = _readFromConsumerApi2.default;
exports.SynchronousRegistry = _index.SynchronousRegistry;
exports.SynchronousMetaRegistry = _index.SynchronousMetaRegistry;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function (identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }
        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var AbstractRegistry = class AbstractRegistry {
    constructor(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
};
//# sourceMappingURL=AbstractRegistry.js.map

exports.default = AbstractRegistry;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js");

var _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SynchronousMetaRegistry = class SynchronousMetaRegistry extends _SynchronousRegistry2.default {
    set(key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return super.set(key, value);
    }
};
//# sourceMappingURL=SynchronousMetaRegistry.js.map

exports.default = SynchronousMetaRegistry;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _AbstractRegistry = __webpack_require__(/*! ./AbstractRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js");

var _AbstractRegistry2 = _interopRequireDefault(_AbstractRegistry);

var _positionalArraySorter = __webpack_require__(/*! @neos-project/positional-array-sorter */ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js");

var _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SynchronousRegistry = class SynchronousRegistry extends _AbstractRegistry2.default {
    constructor(description) {
        super(description);
        this._registry = [];
    }
    set(key, value) {
        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    }
    get(key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    }
    _getChildrenWrapped(searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return (0, _positionalArraySorter2.default)(unsortedChildren);
    }
    getChildrenAsObject(searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    }
    getChildren(searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    }
    has(key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    }
    _getAllWrapped() {
        return (0, _positionalArraySorter2.default)(this._registry);
    }
    getAllAsObject() {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    }
    getAllAsList() {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    }
};
//# sourceMappingURL=SynchronousRegistry.js.map

exports.default = SynchronousRegistry;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SynchronousMetaRegistry = exports.SynchronousRegistry = undefined;

var _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js");

var _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);

var _SynchronousMetaRegistry = __webpack_require__(/*! ./SynchronousMetaRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js");

var _SynchronousMetaRegistry2 = _interopRequireDefault(_SynchronousMetaRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SynchronousRegistry = _SynchronousRegistry2.default;
exports.SynchronousMetaRegistry = _SynchronousMetaRegistry2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().CkEditorApi;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/ckeditor5-exports/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/ckeditor5-exports/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().CkEditor5;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var positionalArraySorter = function positionalArraySorter(subject) {
    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';
    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';

    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var _weightMatch = position.match(/end\s+(\d+)/);
            var _weight = _weightMatch && _weightMatch[1] ? Number(_weightMatch[1]) : 0;
            if (!endKeys[_weight]) {
                endKeys[_weight] = [];
            }
            endKeys[_weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var _weight2 = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][_weight2]) {
                    beforeKeys[reference][_weight2] = [];
                }
                beforeKeys[reference][_weight2].push(key);
            }
        } else if (position.startsWith('after')) {
            var _match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!_match) {
                invalid = true;
            } else {
                var _reference = _match[1];
                var _weight3 = _match[3] ? Number(_match[3]) : 0;
                if (!afterKeys[_reference]) {
                    afterKeys[_reference] = {};
                }
                if (!afterKeys[_reference][_weight3]) {
                    afterKeys[_reference][_weight3] = [];
                }
                afterKeys[_reference][_weight3].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = beforeWeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var i = _step.value;

                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = afterWeights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _i = _step2.value;

                        addToResults(afterKeys[key][_i], result);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        });
    };
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = sortedWeights(startKeys, false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var i = _step3.value;

            addToResults(startKeys[i], resultStart);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = sortedWeights(middleKeys, true)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _i2 = _step4.value;

            addToResults(middleKeys[_i2], resultMiddle);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = sortedWeights(endKeys, true)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _i3 = _step5.value;

            addToResults(endKeys[_i3], resultEnd);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = Object.keys(beforeKeys)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var key = _step6.value;

            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = sortedWeights(beforeKeys[key], false)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var _i4 = _step8.value;

                    addToResults(beforeKeys[key][_i4], resultStart);
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = Object.keys(afterKeys)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _key = _step7.value;

            if (processedKeys.indexOf(_key) >= 0) {
                continue;
            }
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = sortedWeights(afterKeys[_key], false)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var _i5 = _step9.value;

                    addToResults(afterKeys[_key][_i5], resultMiddle);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    var sortedKeys = [].concat(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports.default = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "./src/GridSelectBox.js":
/*!******************************!*\
  !*** ./src/GridSelectBox.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");

var _styles = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridSelectBox = class GridSelectBox extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
    }

    handleClick() {
        this.setState(function (prevState) {
            return {
                isToggleOn: !prevState.isToggleOn
            };
        });
    }

    handleSelectButtonClick(value) {
        this.handleClick();
        this.props.onSelect(value);
    }

    render() {
        var _this = this;

        return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
                "div",
                { className: _styles2.default.gridSelectBox },
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: this.handleClick, className: _styles2.default.gridSelectBoxButton },
                    _react2.default.createElement(
                        "span",
                        { className: _styles2.default.gridSelectBoxButtonSpan },
                        this.props.placeholder
                    ),
                    " ",
                    _react2.default.createElement(_reactUiComponents.Icon, { className: _styles2.default.gridSelectBoxButtonChevron, icon: this.state.isToggleOn ? 'fas fa-chevron-up' : 'fas fa-chevron-down' })
                ),
                this.state.isToggleOn && _react2.default.createElement(
                    "div",
                    { className: _styles2.default.gridSelectBoxSelect },
                    this.props.options.map(function (option) {
                        return _react2.default.createElement(
                            "button",
                            { type: "button", className: _styles2.default.gridSelectBoxSelectButton, onClick: function onClick() {
                                    return _this.handleSelectButtonClick(option.value);
                                } },
                            option.label
                        );
                    })
                )
            )
        );
    }
};
exports.default = GridSelectBox;

/***/ }),

/***/ "./src/PresetType.js":
/*!***************************!*\
  !*** ./src/PresetType.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,

    // keys are the option values
    options: _propTypes2.default.objectOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        cssClass: _propTypes2.default.string.isRequired
    }))
});

/***/ }),

/***/ "./src/SpecialCharacterCommand.js":
/*!****************************************!*\
  !*** ./src/SpecialCharacterCommand.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/ckeditor5-exports/index.js");

var SpecialCharacterCommand = class SpecialCharacterCommand extends _ckeditor5Exports.Command {

    /**
     * @fires execute
     * @param {Object} [options] Command options.
     * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.
     */
    execute() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var editor = this.editor;
        editor.model.change(function (writer) {
            var insertPosition = editor.model.document.selection.getFirstPosition();
            var value = options.value;
            console.log(value);
            writer.insertText(value, insertPosition);
        });
    }
};
exports.default = SpecialCharacterCommand;

/***/ }),

/***/ "./src/SpecialCharacterEditing.js":
/*!****************************************!*\
  !*** ./src/SpecialCharacterEditing.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/ckeditor5-exports/index.js");

var _SpecialCharacterCommand = __webpack_require__(/*! ./SpecialCharacterCommand */ "./src/SpecialCharacterCommand.js");

var _SpecialCharacterCommand2 = _interopRequireDefault(_SpecialCharacterCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
exports.default = function (configuration) {
    return class SpecialCharacterEditing extends _ckeditor5Exports.Plugin {
        init() {
            this.editor.commands.add('SpecialCharacterCommand', new _SpecialCharacterCommand2.default(this.editor));
        }
    };
};

/***/ }),

/***/ "./src/SpecialCharacterPlugin.js":
/*!***************************************!*\
  !*** ./src/SpecialCharacterPlugin.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/ckeditor5-exports/index.js");

var SpecialCharactersPlugin = class SpecialCharactersPlugin extends _ckeditor5Exports.Plugin {
    static get pluginName() {
        return 'SpecialCharactersPlugin';
    }

    init() {
        var editor = this.editor;
    }
};
exports.default = SpecialCharactersPlugin;

/***/ }),

/***/ "./src/SpecialCharacterSelector.js":
/*!*****************************************!*\
  !*** ./src/SpecialCharacterSelector.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PresetType = __webpack_require__(/*! ./PresetType */ "./src/PresetType.js");

var _PresetType2 = _interopRequireDefault(_PresetType);

var _neosUiCkeditor5Bindings = __webpack_require__(/*! @neos-project/neos-ui-ckeditor5-bindings */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js");

var CkEditorApi = _interopRequireWildcard(_neosUiCkeditor5Bindings);

var _GridSelectBox = __webpack_require__(/*! ./GridSelectBox */ "./src/GridSelectBox.js");

var _GridSelectBox2 = _interopRequireDefault(_GridSelectBox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpecialCharacterSelector = (_temp = _class = class SpecialCharacterSelector extends _react.PureComponent {

    constructor() {
        super(...arguments);

        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    render() {
        var _this = this;

        var optionsForSelect = this.props.metadata;
        console.log(optionsForSelect);

        if (optionsForSelect.length === 0) {
            return null;
        }

        return _react2.default.createElement(
            'div',
            { style: { marginLeft: '1px' } },
            _react2.default.createElement(_GridSelectBox2.default, {
                options: optionsForSelect,
                placeholder: this.props.label,
                onSelect: function onSelect(p) {
                    return _this.handleOnSelect(p);
                }
            })
        );
    }

    handleOnSelect(value) {
        CkEditorApi.executeCommand('SpecialCharacterCommand', { value: value });
    }
}, _class.propTypes = {
    metadata: _PresetType2.default.isRequired,
    label: _PresetType2.default.isRequired
}, _temp);
exports.default = SpecialCharacterSelector;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _plowJs = __webpack_require__(/*! plow-js */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");

var _SpecialCharacterEditing = __webpack_require__(/*! ./SpecialCharacterEditing */ "./src/SpecialCharacterEditing.js");

var _SpecialCharacterEditing2 = _interopRequireDefault(_SpecialCharacterEditing);

var _SpecialCharacterPlugin = __webpack_require__(/*! ./SpecialCharacterPlugin */ "./src/SpecialCharacterPlugin.js");

var _SpecialCharacterPlugin2 = _interopRequireDefault(_SpecialCharacterPlugin);

var _SpecialCharacterSelector = __webpack_require__(/*! ./SpecialCharacterSelector */ "./src/SpecialCharacterSelector.js");

var _SpecialCharacterSelector2 = _interopRequireDefault(_SpecialCharacterSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addSpecialCharacters = function addSpecialCharacters(ckEditorConfiguration, options) {
    if ((0, _plowJs.$get)(['specialCharacters'], options.editorOptions)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return (0, _plowJs.$add)('plugins', _SpecialCharacterPlugin2.default, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

var addEmojis = function addEmojis(ckEditorConfiguration, options) {
    if ((0, _plowJs.$get)(['emojis'], options.editorOptions)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return (0, _plowJs.$add)('plugins', _SpecialCharacterPlugin2.default, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

(0, _neosUiExtensibility2.default)('NeosRulez.Neos.CkEditor.SpecialCharacters', {}, function (globalRegistry, _ref) {
    var frontendConfiguration = _ref.frontendConfiguration;

    var ckEditorRegistry = globalRegistry.get('ckEditor5');
    var richtextToolbar = ckEditorRegistry.get('richtextToolbar');
    var ckEditorConfig = ckEditorRegistry.get('config');

    var symbols = frontendConfiguration['NeosRulez.Neos.CkEditor.SpecialCharacters'].symbols;
    var emojis = frontendConfiguration['NeosRulez.Neos.CkEditor.Emojis'];
    var symbolsLabel = frontendConfiguration['NeosRulez.Neos.CkEditor'].symbolsLabel || "Special characters";
    var emojisLabel = frontendConfiguration['NeosRulez.Neos.CkEditor'].emojisLabel || "Emojis";

    ckEditorConfig.set('NeosRulez.Neos.CkEditor.SpecialCharacter_Symbols', function (ckEditorConfiguration, _ref2) {
        var editorOptions = _ref2.editorOptions;

        var editing = (0, _SpecialCharacterEditing2.default)(symbols);
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        ckEditorConfiguration.plugins.push(editing);
        return ckEditorConfiguration;
    });

    var symbolsList = Object.keys(symbols).map(function (item, i) {
        return {
            value: Object.values(symbols)[i].character,
            label: Object.values(symbols)[i].character
        };
    });

    richtextToolbar.set('SpecialCharacters_Symbols', {
        component: _SpecialCharacterSelector2.default,
        isVisible: function isVisible(editorOptions, formattingUnderCursor) {
            return editorOptions.specialCharacters === true || editorOptions.specialCharacters === 'true';
        },
        metadata: symbolsList,
        label: symbolsLabel
    });

    ckEditorConfig.set('NeosRulez.SpecialCharacters.addSpecialCharacters', function (ckEditorConfiguration, _ref3) {
        var editorOptions = _ref3.editorOptions;

        var editing = (0, _SpecialCharacterEditing2.default)(symbolsList);
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        ckEditorConfiguration.plugins.push(editing);
        return ckEditorConfiguration;
    });

    var emojisList = Object.keys(emojis).map(function (item, i) {
        return {
            value: Object.values(emojis)[i].emoji,
            label: Object.values(emojis)[i].emoji
        };
    });

    ckEditorConfig.set('NeosRulez.Neos.CkEditor.SpecialCharacter_Emojis', function (ckEditorConfiguration, _ref4) {
        var editorOptions = _ref4.editorOptions;

        var editing = (0, _SpecialCharacterEditing2.default)(emojis);
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        ckEditorConfiguration.plugins.push(editing);
        return ckEditorConfiguration;
    });

    richtextToolbar.set('SpecialCharacters_Emojis', {
        component: _SpecialCharacterSelector2.default,
        isVisible: function isVisible(editorOptions, formattingUnderCursor) {
            return editorOptions.emojis === true || editorOptions.emojis === 'true';
        },
        metadata: emojisList,
        label: emojisLabel
    });
});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"gridSelectBox":"styles__gridSelectBox___3pIbn","gridSelectBoxButton":"styles__gridSelectBoxButton___1ZHw8","gridSelectBoxButtonSpan":"styles__gridSelectBoxButtonSpan___38tHo","gridSelectBoxButtonChevron":"styles__gridSelectBoxButtonChevron___23F8R","gridSelectBoxSelect":"styles__gridSelectBoxSelect___1vOYx","gridSelectBoxSelectButton":"styles__gridSelectBoxSelectButton___PJklF"};

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map
