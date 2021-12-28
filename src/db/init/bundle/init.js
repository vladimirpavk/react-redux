/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./environment.js":
/*!************************!*\
  !*** ./environment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig)\n/* harmony export */ });\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBza_8IYd4pwgQoBoBNzlITSVz_H2CYVws\",\n  authDomain: \"meals-f92cb.firebaseapp.com\",\n  databaseURL: \"https://meals-f92cb-default-rtdb.europe-west1.firebasedatabase.app\",\n  projectId: \"meals-f92cb\",\n  storageBucket: \"meals-f92cb.appspot.com\",\n  messagingSenderId: \"876325346027\",\n  appId: \"1:876325346027:web:8e32aea6ac9d122dcbfcae\"\n};\n\n//# sourceURL=webpack:///./environment.js?");

/***/ }),

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbStore\": () => (/* binding */ dbStore),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment */ \"./environment.js\");\n/* harmony import */ var _initFirebaseUsers_initFirebaseUsers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initFirebaseUsers/initFirebaseUsers.js */ \"./initFirebaseUsers/initFirebaseUsers.js\");\n\n\n\n\n\nvar firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(_environment__WEBPACK_IMPORTED_MODULE_3__.firebaseConfig);\nvar dbStore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseApp);\nvar auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebaseApp);\n(0,_initFirebaseUsers_initFirebaseUsers_js__WEBPACK_IMPORTED_MODULE_4__.populateFirebase)(dbStore, auth);\n\n//# sourceURL=webpack:///./init.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "./initFirebaseUsers/assets/randomUsers.js":
/*!*************************************************!*\
  !*** ./initFirebaseUsers/assets/randomUsers.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomUsers\": () => (/* binding */ randomUsers)\n/* harmony export */ });\nvar randomUsers = [{\n  auth: [4, 8, 2],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Jorge',\n    last: 'Martinez'\n  },\n  location: {\n    street: [Object],\n    city: 'Palma de Mallorca',\n    state: 'Galicia',\n    country: 'Spain',\n    postcode: 65821,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'jorge.martinez@example.com',\n  phone: '939-368-235',\n  cell: '637-032-172',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/52.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/52.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/52.jpg'\n  },\n  nat: 'ES'\n}, {\n  auth: [5, 7],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Ms',\n    first: 'Rose',\n    last: 'French'\n  },\n  location: {\n    street: [Object],\n    city: 'Victoria',\n    state: 'British Columbia',\n    country: 'Canada',\n    postcode: 'Y0S 5B6',\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'rose.french@example.com',\n  phone: '628-687-9907',\n  cell: '925-889-5467',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/71.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg'\n  },\n  nat: 'CA'\n}, {\n  auth: [3],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Ms',\n    first: 'Dali',\n    last: 'Kalf'\n  },\n  location: {\n    street: [Object],\n    city: 'Stokkum',\n    state: 'Limburg',\n    country: 'Netherlands',\n    postcode: 54216,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'dali.kalf@example.com',\n  phone: '(672)-754-5471',\n  cell: '(376)-870-2128',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/61.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/61.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg'\n  },\n  nat: 'NL'\n}, {\n  auth: [8, 1],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Mrs',\n    first: 'Ece',\n    last: '├ça─č─▒ran'\n  },\n  location: {\n    street: [Object],\n    city: 'Osmaniye',\n    state: '─░zmir',\n    country: 'Turkey',\n    postcode: 42306,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'ece.cagiran@example.com',\n  phone: '(978)-084-4572',\n  cell: '(030)-397-6745',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/14.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/14.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/14.jpg'\n  },\n  nat: 'TR'\n}, {\n  auth: [1, 7],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Joona',\n    last: 'Heikkila'\n  },\n  location: {\n    street: [Object],\n    city: 'Laihia',\n    state: 'Lapland',\n    country: 'Finland',\n    postcode: 33294,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'joona.heikkila@example.com',\n  phone: '02-358-397',\n  cell: '042-049-84-17',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/29.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/29.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/29.jpg'\n  },\n  nat: 'FI'\n}, {\n  auth: [2, 4],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Ibrahim',\n    last: 'Huseb├Ş'\n  },\n  location: {\n    street: [Object],\n    city: 'Slitu',\n    state: 'Vestfold',\n    country: 'Norway',\n    postcode: '5685',\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'ibrahim.husebo@example.com',\n  phone: '85689676',\n  cell: '97323919',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/27.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/27.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/27.jpg'\n  },\n  nat: 'NO'\n}, {\n  auth: [7],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Daryl',\n    last: 'Baker'\n  },\n  location: {\n    street: [Object],\n    city: 'Kells',\n    state: 'Westmeath',\n    country: 'Ireland',\n    postcode: 86486,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'daryl.baker@example.com',\n  phone: '041-857-5283',\n  cell: '081-580-7484',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/35.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/35.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg'\n  },\n  nat: 'IE'\n}, {\n  auth: [2, 3],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Miss',\n    first: 'Swantje',\n    last: 'Sobotta'\n  },\n  location: {\n    street: [Object],\n    city: 'Stade',\n    state: 'Sachsen',\n    country: 'Germany',\n    postcode: 68525,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'swantje.sobotta@example.com',\n  phone: '0867-1117652',\n  cell: '0175-4376656',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/29.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/29.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/29.jpg'\n  },\n  nat: 'DE'\n}, {\n  auth: [1],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Augustas',\n    last: 'Frivold'\n  },\n  location: {\n    street: [Object],\n    city: 'Moss',\n    state: 'Nordland',\n    country: 'Norway',\n    postcode: '7718',\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'augustas.frivold@example.com',\n  phone: '29692552',\n  cell: '91797768',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/76.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'\n  },\n  nat: 'NO'\n}, {\n  auth: [1, 8],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Heinz-Josef',\n    last: 'Wrede'\n  },\n  location: {\n    street: [Object],\n    city: 'Dietfurt an der Altm├╝hl',\n    state: 'Th├╝ringen',\n    country: 'Germany',\n    postcode: 77560,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'heinz-josef.wrede@example.com',\n  phone: '0312-8847350',\n  cell: '0174-6167873',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/28.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg'\n  },\n  nat: 'DE'\n}, {\n  auth: [8, 1],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Allan',\n    last: 'Hawkins'\n  },\n  location: {\n    street: [Object],\n    city: 'Warrnambool',\n    state: 'Northern Territory',\n    country: 'Australia',\n    postcode: 4408,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'allan.hawkins@example.com',\n  phone: '05-1585-3835',\n  cell: '0492-329-195',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/23.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg'\n  },\n  nat: 'AU'\n}, {\n  auth: [2],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Giray',\n    last: 'Adan'\n  },\n  location: {\n    street: [Object],\n    city: 'Mu─čla',\n    state: 'Ni─čde',\n    country: 'Turkey',\n    postcode: 88225,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'giray.adan@example.com',\n  phone: '(535)-683-4708',\n  cell: '(708)-726-6562',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/88.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'\n  },\n  nat: 'TR'\n}, {\n  auth: [1],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Matthew',\n    last: 'Van de Geijn'\n  },\n  location: {\n    street: [Object],\n    city: 'Grou',\n    state: 'Drenthe',\n    country: 'Netherlands',\n    postcode: 97555,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'matthew.vandegeijn@example.com',\n  phone: '(143)-236-4068',\n  cell: '(926)-870-4916',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/5.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/5.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg'\n  },\n  nat: 'NL'\n}, {\n  auth: [3, 2],\n  password: 'try1pass',\n  gender: 'male',\n  name: {\n    title: 'Mr',\n    first: 'Duane',\n    last: 'Fleming'\n  },\n  location: {\n    street: [Object],\n    city: 'Waterford',\n    state: 'D├║n LaoghaireÔÇôRathdown',\n    country: 'Ireland',\n    postcode: 43505,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'duane.fleming@example.com',\n  phone: '071-198-0303',\n  cell: '081-823-0753',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/men/84.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg'\n  },\n  nat: 'IE'\n}, {\n  auth: [7, 8],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Miss',\n    first: 'Ana├»s',\n    last: 'Dumas'\n  },\n  location: {\n    street: [Object],\n    city: 'Cr├ęteil',\n    state: 'Loir-et-Cher',\n    country: 'France',\n    postcode: 35011,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'anais.dumas@example.com',\n  phone: '04-08-58-96-71',\n  cell: '06-69-62-69-11',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/66.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/66.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/66.jpg'\n  },\n  nat: 'FR'\n}, {\n  auth: [8, 0, 4],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Miss',\n    first: 'Annabelle',\n    last: 'C├┤t├ę'\n  },\n  location: {\n    street: [Object],\n    city: 'Tecumseh',\n    state: 'British Columbia',\n    country: 'Canada',\n    postcode: 'N7A 1R5',\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'annabelle.cote@example.com',\n  phone: '836-308-1749',\n  cell: '125-691-5536',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/7.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg'\n  },\n  nat: 'CA'\n}, {\n  auth: [1],\n  password: 'try1pass',\n  gender: 'female',\n  name: {\n    title: 'Ms',\n    first: 'Rebecca',\n    last: 'Mitchelle'\n  },\n  location: {\n    street: [Object],\n    city: 'Carlow',\n    state: 'Wexford',\n    country: 'Ireland',\n    postcode: 21419,\n    coordinates: [Object],\n    timezone: [Object]\n  },\n  email: 'rebecca.mitchelle@example.com',\n  phone: '011-293-2686',\n  cell: '081-415-1886',\n  picture: {\n    large: 'https://randomuser.me/api/portraits/women/25.jpg',\n    medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',\n    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'\n  },\n  nat: 'IE'\n}];\n\n//# sourceURL=webpack:///./initFirebaseUsers/assets/randomUsers.js?");

/***/ }),

/***/ "./initFirebaseUsers/initFirebaseUsers.js":
/*!************************************************!*\
  !*** ./initFirebaseUsers/initFirebaseUsers.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeUsersList\": () => (/* binding */ changeUsersList),\n/* harmony export */   \"populateFirebase\": () => (/* binding */ populateFirebase),\n/* harmony export */   \"populateFirebaseX\": () => (/* binding */ populateFirebaseX)\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _assets_randomUsers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/randomUsers.js */ \"./initFirebaseUsers/assets/randomUsers.js\");\nvar _excluded = [\"login\", \"dob\", \"registered\", \"id\"];\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nvar getRandomInt = function getRandomInt(max, base) {\n  return Math.floor(Math.random() * max) + base;\n};\n\nvar changeUsersList = function changeUsersList() {\n  _assets_randomUsers_js__WEBPACK_IMPORTED_MODULE_2__.randomUsers.map(function (user) {\n    var newGenList = [];\n\n    for (var y = 0; y < getRandomInt(3, 1); y++) {\n      var newRandomNumber = getRandomInt(9, 0);\n\n      while (newGenList.indexOf(newRandomNumber) !== -1) {\n        newRandomNumber = getRandomInt(9, 0);\n      }\n\n      newGenList.push(newRandomNumber);\n    }\n\n    var login = user.login,\n        dob = user.dob,\n        registered = user.registered,\n        id = user.id,\n        reducedUser = _objectWithoutProperties(user, _excluded);\n\n    return _objectSpread({\n      auth: newGenList,\n      password: 'try1pass'\n    }, reducedUser);\n  });\n};\nvar populateFirebase = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dbStore, firebaseAuth) {\n    var detailedUsers;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Promise.all(_assets_randomUsers_js__WEBPACK_IMPORTED_MODULE_2__.randomUsers.map( /*#__PURE__*/function () {\n              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(messedUser) {\n                var createdUser;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(firebaseAuth, messedUser.email, messedUser.password);\n\n                      case 2:\n                        createdUser = _context.sent;\n                        return _context.abrupt(\"return\", _objectSpread({\n                          uid: createdUser.user.uid\n                        }, messedUser));\n\n                      case 4:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x3) {\n                return _ref2.apply(this, arguments);\n              };\n            }()));\n\n          case 2:\n            detailedUsers = _context3.sent;\n            detailedUsers.forEach( /*#__PURE__*/function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(detailedUser) {\n                var usersDetailsDocument;\n                return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        _context2.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(dbStore, 'usersDetails', detailedUser.uid), detailedUser);\n\n                      case 2:\n                        usersDetailsDocument = _context2.sent;\n                        console.log(usersDetailsDocument);\n\n                      case 4:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n\n              return function (_x4) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function populateFirebase(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar populateFirebaseX = function populateFirebaseX(dbStore, firebaseAuth) {\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(firebaseAuth, 'vladimirpavk@fite-firma.com', 'proba1pass').then(function (signedIn) {\n    console.log('User signed in...', signedIn);\n    _assets_randomUsers_js__WEBPACK_IMPORTED_MODULE_2__.randomUsers.map( /*#__PURE__*/function () {\n      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(randomUser) {\n        var createdUser, usersDetailsDocument;\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.prev = 0;\n                _context4.next = 3;\n                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(firebaseAuth, randomUser.email, randomUser.login);\n\n              case 3:\n                createdUser = _context4.sent;\n                console.log(createdUser);\n                _context4.prev = 5;\n                _context4.next = 8;\n                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(dbStore, 'usersDetails', createdUser.uid), createdUser);\n\n              case 8:\n                usersDetailsDocument = _context4.sent;\n                console.log(usersDetailsDocument);\n                _context4.next = 15;\n                break;\n\n              case 12:\n                _context4.prev = 12;\n                _context4.t0 = _context4[\"catch\"](5);\n                console.log('usersDetailsDocument exception...');\n\n              case 15:\n                _context4.next = 20;\n                break;\n\n              case 17:\n                _context4.prev = 17;\n                _context4.t1 = _context4[\"catch\"](0);\n                console.log('createUser exception...', _context4.t1);\n\n              case 20:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[0, 17], [5, 12]]);\n      }));\n\n      return function (_x5) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n  });\n};\n\n//# sourceURL=webpack:///./initFirebaseUsers/initFirebaseUsers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("babel-polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./init.js");
/******/ 	
/******/ })()
;