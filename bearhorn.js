// Prepare some varaibles
var throttleHornInputs = false;
var bearhorns = [];
// load the bearhorns
var bearhorn1 = new Howl({
    src: ['./sounds/bearhorn1.mp3']
    , volume: 1
    , preload: true
});
var bearhorn2 = new Howl({
    src: ['./sounds/bearhorn2.mp3']
    , volume: 1
    , preload: true
});
var bearhorn3 = new Howl({
    src: ['./sounds/bearhorn3.mp3']
    , volume: 1
    , preload: true
});
var bearhorn4 = new Howl({
    src: ['./sounds/bearhorn4.mp3']
    , volume: 1
    , preload: true
});
bearhorns = [bearhorn1, bearhorn1, bearhorn3, bearhorn4];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
// sweet color generator function lulz
function getRandomColor() {
    var color = ["yellowgreen", "#ff33cc"];
    var i = getRandomInt(0, color.length);
    return color[i];
}
// arm the bearhorn...
function blowHorn(randomColor) {
    if ($("#idContainer").is(":visible")) {
        $("#idContainer").hide();
    }
    if (!throttleHornInputs) {
        var whichHorn = getRandomInt(0, 4); // array positions 0-3
        var thisHorn = bearhorns[whichHorn];
        thisHorn.play();
        throttleHornInputs = true;
        var backgroundBlink = setInterval(function () {
            var currentBGcolor = $(".centerContainer").css("background-color");
            if (currentBGcolor === "rgba(0, 0, 0, 0)") {
                $(".centerContainer").css("background-color", randomColor);
                if (randomColor == "#ff33cc") {
                    $("#boh").css("color", "yellowgreen");;
                }
                else {
                    $("#boh").css("color", "#ff33cc");
                }
                $("#boh").show();
            }
            else {
                $(".centerContainer").css("background-color", "transparent");
                $("#boh").hide();
            }
        }, 69);
        // CONTINUE ALL THE ABOVE STATES FOR 800 MS
        setTimeout(function () {
            // SIGNAL THE STOP
            throttleHornInputs = false;
            // STOP THE ANIMATION
            // STOP THE BLINKING
            clearInterval(backgroundBlink);
            // STOP THE OTHER STUFF
            $(".centerContainer").css("background-color", "transparent");
            $("#boh").hide();
        }, 800);
        // INCREASE HYPE
        $("#hornCount").text(parseInt($("#hornCount").text()) + 1);
    }
}