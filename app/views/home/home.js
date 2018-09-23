var frames = require("ui/frame");

function onTap() {
    var navigationEntry = {
        moduleName: "views/about/about",
        transition: {
            name: "fade"
        }
    };

    frames.topmost().navigate(navigationEntry);
}

exports.onTap = onTap;