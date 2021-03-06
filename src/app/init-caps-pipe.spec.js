var init_caps_pipe_1 = require('./init-caps-pipe');
describe('InitCapsPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new init_caps_pipe_1.InitCapsPipe();
    });
    it('transforms "abc" to "Abc"', function () {
        expect(pipe.transform('abc')).toEqual('Abc');
    });
    it('transforms "abc def" to "Abc Def"', function () {
        expect(pipe.transform('abc def')).toEqual('Abc Def');
    });
    it('leaves "Abc Def" unchanged', function () {
        expect(pipe.transform('Abc Def')).toEqual('Abc Def');
    });
});
//# sourceMappingURL=init-caps-pipe.spec.js.map