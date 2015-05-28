define('init.js',[],function(require, exports, module) {
    console.log(module.uri);
    var html = require('./modules/example/test/test.tpl');
    console.log(html);
});
/*define(function(require, exports, module) {
    console.log(module.uri);
    var html = require('./modules/example/test/test.tpl');
    console.log(html);
});*/
