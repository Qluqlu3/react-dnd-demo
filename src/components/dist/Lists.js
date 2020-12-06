"use strict";
exports.__esModule = true;
exports.Container = void 0;
var react_1 = require("react");
var Area_1 = require("./Area");
var immutability_helper_1 = require("immutability-helper");
var style = {
    width: 400
};
exports.Container = function () {
    {
        var _a = react_1.useState([
            {
                id: 1,
                text: 'ああああああ'
            },
            {
                id: 2,
                text: 'いいいいいい'
            },
            {
                id: 3,
                text: 'おおおおおお'
            },
            {
                id: 4,
                text: 'うううううううう'
            },
            {
                id: 5,
                text: 'えええええええええええ'
            },
            {
                id: 6,
                text: '？？？？？？？？'
            },
            {
                id: 7,
                text: '！！！！！！！！'
            },
        ]), cards_1 = _a[0], setCards_1 = _a[1];
        var moveCard_1 = react_1.useCallback(function (dragIndex, hoverIndex) {
            var dragCard = cards_1[dragIndex];
            setCards_1(immutability_helper_1["default"](cards_1, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ]
            }));
        }, [cards_1]);
        var renderCard_1 = function (card, index) {
            return (react_1["default"].createElement(Area_1.Card, { key: card.id, index: index, id: card.id, text: card.text, moveCard: moveCard_1 }));
        };
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { style: style }, cards_1.map(function (card, i) { return renderCard_1(card, i); }))));
    }
};
exports["default"] = exports.Container;
