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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



var Furry = function () {

    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

var Coin = function () {

   this.x = Math.floor(Math.random() * 10);
   this.y = Math.floor(Math.random() * 10);

}

var Game = function () {

    this.board = document.querySelector("#board").querySelectorAll("div");
    this.furry = new Furry ();
    this.coin = new Coin ();
    this.score = 0;
    
    this.furryPosition = function(x,y) {
        return x + (y * 10);
    }
    this.showFurry = function () {
        this.board[ this.furryPosition(this.furry.x,this.furry.y) ].classList.add('furry');
    }

    this.coinPosition = function(x,y) {
        return x + (y * 10);
    }

    this.showCoin = function () {
        this.board[ this.coinPosition(this.coin.x,this.coin.y) ].classList.add('coin');
    }
    this.startGame = function (){
        var self = this
        this.interval = setInterval(function () {            
            self.moveFurry()
            }, 250);   
    }
    this.moveFurry = function () {
        this.hideVisibleFurry();
        
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y - 1;
        }        
        
        this.checkCoinCollision();
        this.gameOver();
        this.showFurry();
    }
    this.hideVisibleFurry = function() {
        var hideFurry = document.querySelector(".furry");
        hideFurry.classList.remove("furry");
    };

    
    this.directionWay = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38: 
                this.furry.direction = "down";
                break;
            case 39: 
                this.furry.direction = "right";
                break;
            case 40: 
                this.furry.direction = "up";
                break;
        }
    }
    this.checkCoinCollision = function () {
        if(this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            var hideCoin = document.querySelector(".coin");
            hideCoin.classList.remove("coin");
            this.score  ++
            var score = document.querySelector("strong").innerText = this.score
            this.coin = new Coin();
            newGame.showCoin();
        }
    }
    this.gameOver = function () {
    if  (   this.furry.x<0 || 
            this.furry.x>9 ||
            this.furry.y<0 ||
            this.furry.y>9
        ) {
            clearInterval(this.interval);
            this.hideVisibleFurry();
            
            document.querySelector("#over").style.display = "none";
            document.querySelector(".score").innerText = "Zdobyte punkty: " + this.score;
        }    
    }
}
document.addEventListener('keydown', function(event){
    newGame.directionWay(event);
});



var newGame =  new Game();
newGame.showCoin();
newGame.showFurry()
newGame.startGame();



   

 

   
   


/***/ })
/******/ ]);