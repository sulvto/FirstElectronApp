/**
 * Created by sulvto on 16-4-20.
 */
ipc = require('electron').ipcRenderer;
var $ = require('./jquery.min.js');

ipc.on('$', function (e, msg) {
    console.log(msg);
    var $s = $(msg.selector);
    console.log($s);
    for (var i = 0, len = msg.fns.length; i < len; i++) {
        var fn = msg.fns[i];
        console.log(fn.name + "" + fn.value);
        if (fn.value) {
            if (fn.value instanceof Array) {
                $s = $s[fn.name](fn.value[0], fn.value[1]);
            } else {
                $s = $s[fn.name](fn.value);
            }
        } else {
            $s = $s[fn.name]();
        }
    }

    ipc.sendToHost({'$r': $s});
});


