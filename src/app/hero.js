var nextId = 30;
var Hero = (function () {
    function Hero(id, name) {
        this.name = name;
        this.id = id || nextId++;
    }
    return Hero;
})();
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map