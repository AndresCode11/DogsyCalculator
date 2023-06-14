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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portion_calculator_portion_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portion-calculator/portion-calculator */ \"./src/js/portion-calculator/portion-calculator.js\");\n\n\nconst portionCalculator = new _portion_calculator_portion_calculator__WEBPACK_IMPORTED_MODULE_0__.PortionCalculator();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/portion-calculator/portion-calculator.js":
/*!*********************************************************!*\
  !*** ./src/js/portion-calculator/portion-calculator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PortionCalculator: () => (/* binding */ PortionCalculator)\n/* harmony export */ });\n/* harmony import */ var _ration_management_ration_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ration-management/ration-management */ \"./src/js/ration-management/ration-management.js\");\n\n\nclass PortionCalculator {\n\n    constructor() {\n        this.init();\n        this.currentSize = ''\n        this.rationManagement = new _ration_management_ration_management__WEBPACK_IMPORTED_MODULE_0__.RationManagement()\n    }\n\n    init() {\n\n            const dog_name = ''\n\n            const portion_steps = [...document.getElementsByClassName('portion-step')]\n            \n\n            /*\n            const dog_size = [...document.getElementsByClassName('dog_size')]\n            //\n            dog_size.forEach(element => {\n                element.addEventListener('click', () => {\n                    alert('test')\n                })\n            })\n            */\n\n            const size_steps = [...document.getElementsByClassName('size-step')]\n\n            // Init button Listener\n            const btns = [...document.getElementsByClassName('calculate-ration-js')]\n            btns.forEach(element => {\n                element.addEventListener('click', () => {\n                    this.changeSection(portion_steps, \"portion-step-2\")\n                    let subSize = this.getSubsizeByTab(this.currentSize)\n                    const dog_heigth = document.getElementById('form-portion-weigth').value\n                    console.log(\"CALCULANDO\")\n                    console.log(dog_heigth, this.currentSize, subSize)\n                    this.calculateTotal(dog_heigth , this.currentSize, subSize)\n                    window.scrollTo(0, 0);\n                })\n            })\n\n            // Tab buttons listener\n            const tab_btns = [...document.getElementsByClassName('dog-size')]\n            tab_btns.forEach(element => {\n                element.addEventListener('click', () => {\n\n                    this.currentSize = element.getAttribute('target')\n\n                    this.changeTabSize(size_steps, element.getAttribute(\"target\"))\n                })\n            })\n\n            // number Days\n            const number_radios = [...document.getElementsByName(\"number-days\")]\n            number_radios.forEach(element => {\n                element.addEventListener('click', ()=> {\n                    const dog_heigth = document.getElementById('form-portion-weigth').value\n                    let subSize = this.getSubsizeByTab(this.currentSize)\n                    this.calculateTotal(dog_heigth , this.currentSize, subSize, element.value)\n                })\n            })\n        \n        \n    }\n\n    changeSection(sections, currentSection) {\n\n        let showSection;\n        let animation_section = document.getElementById(\"portion-step-0\");\n        // Hide Al sections\n        sections.forEach(element => {\n            element.style = \"display: none\"\n            \n            if(currentSection == element.id) {\n                showSection = element\n            }\n        })\n\n        animation_section.style = 'display: block'\n\n        // Show animation section\n        setTimeout(() => {\n            animation_section.style = 'display: none'\n            showSection.style = 'display: block'\n        }, 2000)\n    }\n\n    changeTabSize(sections, currentSection) {\n        sections.forEach(element => {\n            element.style = \"display: none\"\n            \n            if(currentSection == element.id) {\n                element.style = \"display: block\"\n            }\n        })\n\n    }\n\n    getSubsizeByTab(name) {\n        const rates = document.getElementsByName(name);\n        for (const iterator of rates) {\n            if(iterator.checked) {\n                return iterator.value\n            }\n        }\n    }\n\n    calculateTotal(dog_weigth, dog_size, dog_subsize, days = 30) {\n        console.log(\"DAYS\")\n        console.log(days)\n        const grs =  this.rationManagement.calculateTotal(dog_weigth, dog_size, dog_subsize)\n        console.log(\"GR\")\n        console.log(grs)\n        const units = this.rationManagement.calculateUnits(grs, days)\n        document.getElementById('portion-result').innerText = grs \n        document.getElementById('portion-days').innerText = days\n        document.getElementById('portion-units').innerText = units\n\n        let flavors = {}\n\n        console.log(\"UNITS BY PORTIONS\")\n        let quantityByUnits = this.getQuantityByUnits(null, units)\n\n        let options1 = [...document.getElementsByClassName('item-1')]\n        options1.forEach(element => {\n            let item = JSON.parse(element.getAttribute('item'))\n            let metaTags = element.getAttribute('meta_tags')\n            item.flavor = metaTags\n            item.quantity = 1;\n\n            if(flavors[item.flavor] == undefined) {\n                flavors[item.flavor] = [];\n                flavors[item.flavor].push(item)\n            } else {\n                flavors[item.flavor].push(item)\n            }\n        })\n\n        let options10 = [...document.getElementsByClassName('item-10')]\n        options10.forEach(element => {\n            let item = JSON.parse(element.getAttribute('item'))\n            let metaTags = element.getAttribute('meta_tags')\n            item.flavor = metaTags\n            item.quantity = 10;\n\n            if(flavors[item.flavor] == undefined) {\n                flavors[item.flavor] = [];\n                flavors[item.flavor].push(item)\n            } else {\n                flavors[item.flavor].push(item)\n            }\n\n        })\n\n        let options20 = [...document.getElementsByClassName('item-20')]\n        options20.forEach(element => {\n            let item = JSON.parse(element.getAttribute('item'))\n            let metaTags = element.getAttribute('meta_tags')\n            item.flavor = metaTags\n            item.quantity = 20;\n\n            if(flavors[item.flavor] == undefined) {\n                flavors[item.flavor] = [];\n                flavors[item.flavor].push(item)\n            } else {\n                flavors[item.flavor].push(item)\n            }\n\n        })\n\n        let options30 = [...document.getElementsByClassName('item-30')]\n        options30.forEach(element => {\n            let item = JSON.parse(element.getAttribute('item'))\n            let metaTags = element.getAttribute('meta_tags')\n            item.flavor = metaTags\n            item.quantity = 30;\n\n            if(flavors[item.flavor] == undefined) {\n                flavors[item.flavor] = [];\n                flavors[item.flavor].push(item)\n            } else {\n                flavors[item.flavor].push(item)\n            }\n\n        })\n\n        let result_container = document.getElementById('portion-results')\n        // CLEAN DOM\n        result_container.innerHTML = ''\n        \n        for (const flavor of Object.keys(flavors)) {\n            // Data\n            let flavor_data = flavors[flavor]\n            console.log(flavor_data)\n            // Template\n            let template = this.renderTemplateFlavor(flavor, flavor_data, quantityByUnits)\n            \n          \n            // Add flavor\n            result_container.innerHTML += `\n                <div>\n                    <div class=\"row mb-5\">${template}</div> \n                <div>\n            `\n            \n        }\n\n        this.initButtonsListener();\n\n\n\n\n        \n\n\n    }\n\n    renderTemplateFlavor(flavor, items, quantityByUnits) {\n        let template = ``\n        for (const iterator of items) {\n\n            console.log(\"TEST:\", quantityByUnits[iterator.quantity])\n            if(quantityByUnits[iterator.quantity] != 0) {\n                console.log(iterator)\n                template += `\n                    <div class=\"col-lg-4 col-md-6 flavor-${flavor}\" flavor=\"${flavor}\" quantity=\"${quantityByUnits[iterator.quantity]}\" shopify_id=\"${iterator.variants[0].id}\">\n                        <img src='${iterator.images[0]}' width='150'>\n                        <p>${iterator.title} <b style=\"font-size: 22px\">x ${quantityByUnits[iterator.quantity]}</b></p>\n                    </div>\n                `\n            }\n        }\n\n        template += `\n            <div class=\"col-12 mt-3\">\n                <button class=\"btn btn-portion-side-cart-add\" target=\"${flavor}\" >Agregar MENÚ ${flavor}</button>\n            </div>\n            <hr>\n        `\n\n        return template\n    }\n\n    initButtonsListener() {\n        const btns = [...document.getElementsByClassName('btn-portion-side-cart-add')];\n        btns.forEach(async element => {\n            element.addEventListener('click', async ()=> {\n               let targetFlavor = element.getAttribute(\"target\")\n               let items = [...document.getElementsByClassName('flavor-'+targetFlavor)]\n               await this.addCart(items)\n            })\n        })\n    }\n\n    async addCart(items) {\n        for (const item of items) {\n            let id = parseInt(item.getAttribute('shopify_id'))\n            let quantity = parseInt(item.getAttribute('quantity'))    \n            await this.side_cart.addItem(id, quantity)\n        }\n        \n    }\n\n    getQuantityByUnits(items, quantity) {\n        let posible_values = [ 30, 20, 10, 1 ]\n        let result = {}\n        let total = quantity;\n        for (const value of posible_values) {\n            console.log(value)\n            if(Math.trunc(total / value) == 0) {\n                result[value] = 0\n            } else {\n                result[value] = Math.trunc(total / value)\n                total = Math.abs(total - value)\n            }\n\n        }\n\n        return result\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/portion-calculator/portion-calculator.js?");

/***/ }),

/***/ "./src/js/ration-management/ration-management.js":
/*!*******************************************************!*\
  !*** ./src/js/ration-management/ration-management.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RationManagement: () => (/* binding */ RationManagement)\n/* harmony export */ });\n \nclass RationManagement {\n    \n    constructor() {\n        \n        // Cachorro\n        this.WEIGTH_2_3 = 10;\n        this.WEIGTH_4_6 = 8;\n        this.WEIGTH_6_7 = 6;\n        this.WEIGTH_8_10 = 4;\n        this.WEIGTH_11_12 = 3;\n \n        // Adulto\n        this.WEIGTH_ADULT_NORMAL = 2.5;\n        this.WEIGTH_ADULT_STERILIZED = 2;\n        this.WEIGTH_ADULT_SPORT = 3;\n        \n        // Senior\n        this.WEIGTH_SENIOR = 2;\n\n    }\n\n    calculateTotal($weightKG, $size, $subSize, $taste, $days = 30) {\n     \n        let $weigthCalculated = 0;\n        let $price = 0;\n   \n        switch($size) {\n            // Puppy\n            case 'size-child':\n                switch($subSize) {\n                    case '23': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_2_3);\n                        break;\n                    case '45': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_4_6);\n                        break;\n                    case '67': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_6_7);\n                        break;\n                    case '810': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_8_10);\n                        break;\n                    case '1012': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_11_12);\n                        break;\n                }\n            break;\n            \n            // Adult\n            case 'size-adult': \n                switch($subSize) {\n                    case 'low': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_STERILIZED); \n                        break;\n                    case 'normal': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_NORMAL);\n                        break;\n                    case 'sport': $weigthCalculated = this.calculate($weightKG, this.WEIGTH_ADULT_SPORT);\n                        break;\n                }    \n            break;\n            \n            // Senior\n            case 'size-senior': \n                $weigthCalculated = this.calculate($weightKG, this.$WEIGTH_SENIOR);\n            break;\n                \n        }\n\n        return $weigthCalculated\n    }\n\n    calculate($weightKG, $kgconst) {\n        const $kg = $weightKG * ($kgconst * 0.01);\n        return Math.round($kg * 1000)\n    }\n\n    calculateUnits($gr, $days = 30)\n    {\n        const units = ($gr * $days) / 500;\n        return Math.round(units)\n    }\n\n}\n \n\n\n//# sourceURL=webpack:///./src/js/ration-management/ration-management.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;