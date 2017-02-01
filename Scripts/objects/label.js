var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        //CONSTRUCTOR
        function Label(LabelString, fontFamily, fontColour, x, y, centered) {
            var _this = _super.call(this, LabelString, fontFamily, fontColour) || this;
            _this.LabelString = LabelString;
            _this.fontFamily = fontFamily;
            _this.fontColour = fontColour;
            _this.centered = centered;
            _this.Start();
            _this.x = x;
            _this.y = y;
            return _this;
        }
        //PUBLIC METHODS
        Label.prototype.Start = function () {
            if (this.centered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map