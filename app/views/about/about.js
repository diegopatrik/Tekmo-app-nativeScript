var frames = require("ui/frame");

function onTap() {
    frames.topmost().navigate("views/home/home");
}

exports.onTap = onTap;