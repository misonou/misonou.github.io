import { addAnimateIn } from "brew-js/anim";
import { createNodeIterator } from "zeta-dom/domUtil";
import { grep } from "zeta-dom/util";

addAnimateIn('animate-typewriter', function (element) {
    var charDelay = 20;
    return new Promise<void>(function (resolve) {
        var textNodes = grep(createNodeIterator(element, 4));
        var $span = $(textNodes).wrap('<span style="display: inline !important; color: transparent !important;"></span>').parent();
        setTimeout(function () {
            var arr = textNodes.slice(0);
            var n: Text | undefined;
            var p: Text | undefined;
            (function printChar() {
                if (!n || !(n as Text).data) {
                    n = arr.shift();
                    p = n && $(document.createTextNode('')).insertBefore(n.parentNode!)[0];
                }
                if (n && /(\s+|.)/.test(n.data)) {
                    p!.data += RegExp.$1;
                    n.data = n.data.substr(RegExp.$1.length);
                    setTimeout(printChar, charDelay);
                } else {
                    $span.remove();
                    resolve();
                }
            })();
        });
    });
});
