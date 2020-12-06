"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var react_dnd_1 = require("react-dnd");
var style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move'
};
exports.Card = function (_a) {
    var id = _a.id, text = _a.text, index = _a.index, moveCard = _a.moveCard;
    var ref = react_1.useRef(null);
    var _b = react_dnd_1.useDrop({
        accept: 'area',
        hover: function (item, monitor) {
            var _a;
            if (!ref.current) {
                return;
            }
            var dragIndex = item.index;
            var hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            var hoverBoundingRect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            // Get vertical middle
            var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            var clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            var hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        }
    }), drop = _b[1];
    var _c = react_dnd_1.useDrag({
        item: { type: 'area', id: id, index: index },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging()
        }); }
    }), isDragging = _c[0].isDragging, drag = _c[1];
    var opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (react_1["default"].createElement("div", { ref: ref, style: __assign(__assign({}, style), { opacity: opacity }) }, text));
};
