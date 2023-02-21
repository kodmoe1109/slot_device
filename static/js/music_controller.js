const musicArr = ["../static/music/piano.wav"];
const saxoArr = ["../static/music/saxo2_0.wav","../static/music/saxo2_1.wav","../static/music/saxo2_2.wav","../static/music/saxo2_3.wav","../static/music/saxo2_4.wav","../static/music/saxo2_5.wav",]
const celloArr = ["../static/music/bass1.wav","../static/music/bass2.wav","../static/music/bass3.wav"]
const drumArr = ["../static/music/drum1.wav","../static/music/drum2.wav","../static/music/drum3.wav"]
let _rate = 1;
let _volume = 0.5;

Howler.autoUnlock = false;
//-----------------------------OK-------------------------------
// let piano = new Howl({
//     src: musicArr[0],
//     autoplay: true,
//     loop: true,
//     volume: _volume,
//     rate: _rate,
//     onload: function () {
//         console.log('Drum1 Load Ok')
//     }
// });
let drum0 = new Howl({
    src: drumArr[0],
    autoplay: true,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum2 Load Ok')
    }
});
let drum1 = new Howl({
    src: drumArr[1],
    autoplay: true,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum2 Load Ok')
    }
});
let drum2 = new Howl({
    src: drumArr[2],
    autoplay: false,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum3 Load Ok')
    }
});
let cello0 = new Howl({
    src: celloArr[0],
    autoplay: true,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum3 Load Ok')
    }
});
let saxo0 = new Howl({
    src: saxoArr[0],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo0 Load Ok')
    }
});
let saxo1 = new Howl({
    src: saxoArr[1],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo1 Load Ok')
    }
});
let saxo2 = new Howl({
    src: saxoArr[2],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo2 Load Ok')
    }
});
let saxo3 = new Howl({
    src: saxoArr[3],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo3 Load Ok')
    }
});
let saxo4 = new Howl({
    src: saxoArr[4],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo4 Load Ok')
    }
});
let saxo5 = new Howl({
    src: saxoArr[5],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo5 Load Ok')
    }
});
function cello_vol(vol) {
    console.log(vol);
    if(vol<0) {
        vol = 0;
    }
    cello0.volume(vol);
    cello_anim.setSpeed(vol);
}
function drum_vol(val) {
    console.log(val);
    switch(val){
        case 1:
            drum_anim.play();
            drum0.volume(1);
            break;
        case 2:
            drum_anim.play();
            drum1.volume(1);
            break;
        case 3:
            drum_anim.play();
            drum2.volume(1);
            break;
        default:
            drum_anim.pause();
            drum0.volume(0);
            drum1.volume(0);
            drum2.volume(0);
    }
}
function saxo_vol(val){
    // console.log(val);
    switch(val){
        case 1:
            saxo_anim.play();
            saxo0.play();
            break;
        case 2:
            saxo_anim.play();
            saxo1.play();
            break;
        case 3:
            saxo_anim.play();
            saxo2.play();
            break;
        case 4:
            saxo_anim.play();
            saxo3.play();
            break;
        case 5:
            saxo_anim.play();
            saxo4.play();
            break;
        case 6:
            saxo_anim.play();
            saxo5.play();
            break;
        default:
            saxo_anim.pause();
    }
}

