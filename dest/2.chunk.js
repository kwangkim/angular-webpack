webpackJsonp([2],{

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(1);\n\nvar about = angular.module('app.about', [\n  __webpack_require__(16).name\n]);\n\nabout.controller('AboutController', __webpack_require__(13));\nabout.directive('about', __webpack_require__(14));\n\nmodule.exports = about;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app/about/index.js\n ** module id = 6\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/app/about/index.js?");

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar $inject = ['BlahService'];\nvar AboutController = function (blahService) {\n  this.name = 'About: ' + blahService.blah();\n};\nAboutController.$inject = $inject;\n\nmodule.exports = AboutController;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app/about/about_controller.js\n ** module id = 13\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/app/about/about_controller.js?");

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar $inject = [];\nvar about = function () {\n  return {\n    controller: 'AboutController',\n    controllerAs: 'controller',\n    template: __webpack_require__(29)\n  };\n};\nabout.$inject = $inject;\n\nmodule.exports = about;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app/about/about_directive.js\n ** module id = 14\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/app/about/about_directive.js?");

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(1);\n\nvar blah = angular.module('blahBlahBlah', []);\n\nblah\n  .service('BlahService', __webpack_require__(21));\n\nmodule.exports = blah;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blah/index.js\n ** module id = 16\n ** module chunks = 1 2\n **/\n//# sourceURL=webpack:///./src/blah/index.js?");

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar $inject = [];\nvar BlahService = function () {\n  this.blah = function () {\n    return 'blah';\n  };\n};\nBlahService.$inject = $inject;\n\nmodule.exports = BlahService;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blah/blah_service.js\n ** module id = 21\n ** module chunks = 1 2\n **/\n//# sourceURL=webpack:///./src/blah/blah_service.js?");

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	eval("var v1=\"<div>{{controller.name}}</div>\";\nangular.module([\"ng\"]).run([\"$templateCache\",function(c){c.put(\"app/about/about.html\", v1)}]);\nmodule.exports=v1;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app/about/about.html\n ** module id = 29\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/app/about/about.html?");

/***/ }

});