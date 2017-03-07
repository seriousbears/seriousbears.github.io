// Prepare some varaibles
var throttleHornInputs = false;
var bearhorns = [];
// load the bearhorns
var bearhorn1 = new Howl({
    src: ['./sounds/bearhorn1.mp3']
    , volume: 0.5
    , preload: true
});
var bearhorn2 = new Howl({
    src: ['./sounds/bearhorn2.mp3']
    , volume: 0.5
    , preload: true
});
var bearhorn3 = new Howl({
    src: ['./sounds/bearhorn3.mp3']
    , volume: 0.5
    , preload: true
});
var bearhorn4 = new Howl({
    src: ['./sounds/bearhorn4.mp3']
    , volume: 0.5
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
    if (!throttleHornInputs) {
        var whichHorn = getRandomInt(0, 4); // array positions 0-3
        var thisHorn = bearhorns[whichHorn];
        thisHorn.play();
        throttleHornInputs = true;
        var backgroundBlink = setInterval(function () {
            var currentBGcolor = $(".centerContainer").css("background-color");
            if (currentBGcolor === "rgba(0, 0, 0, 0)") {
                $(".centerContainer").css("background-color", randomColor);
            }
            else {
                $(".centerContainer").css("background-color", "transparent");
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
        }, 800);
        // INCREASE HYPE
        $("#hornCount").text(parseInt($("#hornCount").text()) + 1);
    }
}
// get the track ID
function getTrackID() {
    $.getJSON('http://listen.seriousbears.net/stats', function (data) {
        console.log(data.icestats.source[0].title);
        $("#nowplaying").replaceWith(data.icestats.source[0].title);
    });
}
// this function will control which media module at the top is currently active. 
function displayModule(module) {
    var twitch = "none";
    var oso = "none";
    if (module == "twitch") {
        twitch = "block";
    }
    if (module == "oso") {
        oso = "block";
    }
    document.getElementById("twitchContainer").style.display = twitch;
    document.getElementById("muteNotice").style.display = twitch;
    document.getElementById("osoContainer").style.display = oso;
}

function hehehehe() {
    var _0x4585 = ["\x47\x45\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x77\x69\x74\x63\x68\x2E\x74\x76\x2F\x6B\x72\x61\x6B\x65\x6E\x2F\x73\x74\x72\x65\x61\x6D\x73\x2F\x73\x65\x72\x69\x6F\x75\x73\x62\x65\x61\x72\x73", "\x68\x39\x70\x66\x76\x31\x6D\x30\x33\x37\x35\x36\x30\x34\x74\x68\x71\x70\x32\x79\x75\x67\x73\x62\x70\x38\x76\x62\x69\x76", "\x73\x74\x72\x65\x61\x6D", "\x6F\x73\x6F", "\x54\x57\x49\x54\x43\x48\x20\x41\x50\x49\x3A\x20\x69\x73\x20\x4F\x66\x66\x6C\x69\x6E\x65", "\x6C\x6F\x67", "\x74\x77\x69\x74\x63\x68", "\x54\x57\x49\x54\x43\x48\x20\x41\x50\x49\x3A\x20\x69\x73\x20\x4F\x4E\x4C\x49\x4E\x45", "\x61\x6A\x61\x78"];
    $[_0x4585[9]]({
        type: _0x4585[0]
        , url: _0x4585[1]
        , headers: {
            "\x43\x6C\x69\x65\x6E\x74\x2D\x49\x44": _0x4585[2]
        }
        , success: function (_0xedcfx1) {
            if (_0xedcfx1[_0x4585[3]] == null) {
                displayModule(_0x4585[4]);
                console[_0x4585[6]](_0x4585[5])
            }
            else {
                displayModule(_0x4585[7]);
                document.getElementById("mp3source").src = "";
                document.getElementById("audiostream").load();
                document.getElementById("audiostream").pause();
                console[_0x4585[6]](_0x4585[8])
            }
        }
    })
}