var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //CONSTRUCTOR
        function Button(imagePath, x, y, centered) {
            var _this = _super.call(this, imagePath) || this;
            _this.imagePath = imagePath;
            _this.centered = centered;
            _this.Start();
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._Over);
            _this.on("mouseout", _this._Out);
            return _this;
        }
        //PUBLIC METHODS
        Button.prototype.Start = function () {
            if (this.centered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        };
        //PRIVATE METHODS
        Button.prototype._Over = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._Out = function (event) {
            this.alpha = 1;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map