"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var Lists_1 = require("./Lists");
var App = function () {
    return (react_1["default"].createElement("div", { className: 'App' },
        react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend },
            react_1["default"].createElement(Lists_1["default"], null))));
};
exports["default"] = App;
