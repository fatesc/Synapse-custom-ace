define("ace/snippets/lua",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet #!\n\
	#!/usr/bin/env lua\n\
	$1\n\
snippet rj\n\
	game:GetService('TeleportService'):TeleportToPlaceInstance(game.PlaceId,game.JobId)\n\
    $1\n\
";
exports.scope = "lua";

});                (function() {
                    window.require(["ace/snippets/lua"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            