var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var InitCapsPipe = (function () {
    function InitCapsPipe() {
    }
    InitCapsPipe.prototype.transform = function (value) {
        return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
            return m.toUpperCase();
        });
    };
    InitCapsPipe = __decorate([
        angular2_1.Pipe({ name: 'initCaps' }), 
        __metadata('design:paramtypes', [])
    ], InitCapsPipe);
    return InitCapsPipe;
})();
exports.InitCapsPipe = InitCapsPipe;
//# sourceMappingURL=init-caps-pipe.js.map