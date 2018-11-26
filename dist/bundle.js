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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/FaceIcon.tsx":
/*!*************************************!*\
  !*** ./src/components/FaceIcon.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.FaceIcon = () => (React.createElement("div", { className: "faceicon" },
    React.createElement("img", { className: "faceicon-img", src: "img/face.jpg" })));


/***/ }),

/***/ "./src/components/Fractals.tsx":
/*!*************************************!*\
  !*** ./src/components/Fractals.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Pictures = [
    "algae",
    "cauliflower",
    "cubes1",
    "cubes2",
    "gasbox",
    "glbox1",
    "glbox2",
    "greensponge",
    "ironsprout",
    "mandelbox1",
    "mandelbox2",
    "mandelbox3",
    "mandelbox4",
    "octree",
    "particleaccelerator",
    "saturn",
    "toroidalvortex",
    "tree",
];
const PictureIcon = (props) => (React.createElement("div", { className: "pieceicon" },
    React.createElement("a", { href: `img/${props.image}.png`, target: "_blank", rel: "noopener noreferrer" },
        React.createElement("img", { className: "pieceicon-img", src: `img/${props.image}_small.png` }))));
exports.Fractals = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "fractals" }, Pictures.map(img => (React.createElement(PictureIcon, { key: img, image: img })))),
    React.createElement("div", null,
        "More images at",
        " ",
        React.createElement("a", { href: "https://timstraubinger.tumblr.com/", target: "_blank", rel: "noopener noreferrer" }, "timstraubinger.tumblr.com/"))));


/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const FaceIcon_1 = __webpack_require__(/*! ./FaceIcon */ "./src/components/FaceIcon.tsx");
const TabMenu_1 = __webpack_require__(/*! ./TabMenu */ "./src/components/TabMenu.tsx");
const Songs_1 = __webpack_require__(/*! ./Songs */ "./src/components/Songs.tsx");
const Videos_1 = __webpack_require__(/*! ./Videos */ "./src/components/Videos.tsx");
const Fractals_1 = __webpack_require__(/*! ./Fractals */ "./src/components/Fractals.tsx");
exports.Main = () => (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "backdrop" }),
    React.createElement("div", { className: "maincontainer" },
        React.createElement("div", { className: "mainbody" },
            React.createElement(FaceIcon_1.FaceIcon, null),
            React.createElement("h1", { className: "mainheader" }, "Welcome to Tim"),
            React.createElement(TabMenu_1.TabMenu, { tabs: [
                    {
                        title: "About Me",
                        render: () => React.createElement("h1", null, "I am Tim"),
                    },
                    {
                        title: "A Cool Video",
                        render: () => React.createElement(Videos_1.Videos, null),
                    },
                    {
                        title: "Some Neat Songs",
                        render: () => React.createElement(Songs_1.Songs, null),
                    },
                    {
                        title: "Pictures I Done",
                        render: () => React.createElement(Fractals_1.Fractals, null),
                    },
                ] })))));


/***/ }),

/***/ "./src/components/Songs.tsx":
/*!**********************************!*\
  !*** ./src/components/Songs.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const SoundCloudPlayer_1 = __webpack_require__(/*! ./SoundCloudPlayer */ "./src/components/SoundCloudPlayer.tsx");
const PlayList = [
    "362396984",
    "352281611",
    "352281068",
    "275723029",
    "317720529",
    "293278142",
    "275870851",
    "271523671",
    "315647927",
    "267075861",
];
exports.Songs = () => (React.createElement(React.Fragment, null,
    PlayList.map(song => (React.createElement(SoundCloudPlayer_1.SoundCloudPlayer, { key: song, trackid: song, width: 300, height: 300 }))),
    React.createElement("div", null,
        "More songs at",
        " ",
        React.createElement("a", { href: "https://soundcloud.com/timstraubinger", target: "_blank", rel: "noopener noreferrer" }, "soundcloud.com/timstraubinger"))));


/***/ }),

/***/ "./src/components/SoundCloudPlayer.tsx":
/*!*********************************************!*\
  !*** ./src/components/SoundCloudPlayer.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/**
 * Wraps an embedded SoundCloud song player
 */
exports.SoundCloudPlayer = (props) => (React.createElement("iframe", { className: "soundcloudplayer", width: props.width, height: props.height, scrolling: "no", frameBorder: "no", allow: "autoplay", src: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.trackid}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true` }));


/***/ }),

/***/ "./src/components/TabMenu.tsx":
/*!************************************!*\
  !*** ./src/components/TabMenu.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TabItem = (props) => (React.createElement("div", { className: props.active ? "tabmenuitem-active" : "tabmenuitem", onClick: props.onClick },
    React.createElement("span", { className: "tabmenuitem-title" }, props.title)));
class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectTab = (tab) => {
            const theTab = this.props.tabs.find(t => t.title === tab);
            if (theTab === undefined) {
                this.setState({ title: null, content: null });
            }
            else {
                this.setState({ title: theTab.title, content: theTab.render() });
            }
        };
        let currentTab = null;
        if (props.tabs.length > 0) {
            currentTab = props.tabs[0];
        }
        this.state = {
            title: currentTab.title,
            content: currentTab.render(),
        };
    }
    render() {
        return (React.createElement("div", { className: "tabmenu" },
            React.createElement("div", { className: "tabmenu-list" }, this.props.tabs.map(t => (React.createElement(TabItem, { key: t.title, active: t.title === this.state.title, title: t.title, onClick: () => this.onSelectTab(t.title) })))),
            React.createElement("div", { className: "tab-content" }, this.state.content || "Please select a tab")));
    }
}
exports.TabMenu = TabMenu;


/***/ }),

/***/ "./src/components/Videos.tsx":
/*!***********************************!*\
  !*** ./src/components/Videos.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const YouTubePlayer_1 = __webpack_require__(/*! ./YouTubePlayer */ "./src/components/YouTubePlayer.tsx");
exports.Videos = () => (React.createElement(YouTubePlayer_1.YouTubePlayer, { ytid: "JyjkAtQ-BkM", width: 1000, height: 700 }));


/***/ }),

/***/ "./src/components/YouTubePlayer.tsx":
/*!******************************************!*\
  !*** ./src/components/YouTubePlayer.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/**
 * Wraps a YouTube embedded video player
 */
exports.YouTubePlayer = (props) => (React.createElement("iframe", { className: "youtubeplayer", width: props.width, height: props.height, src: `https://www.youtube.com/embed/${props.ytid}?autoplay=1&origin=http://timstr.github.io&rel=0`, frameBorder: 0 }));


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const Main_1 = __webpack_require__(/*! ./components/Main */ "./src/components/Main.tsx");
ReactDom.render(React.createElement(Main_1.Main, null), document.getElementById("main"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map