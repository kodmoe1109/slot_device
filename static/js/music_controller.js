const musicArr = ["../static/music/piano.wav","../static/music/drum.wav"];
const saxoArr = ["../static/music/saxo2_0.wav","../static/music/saxo2_1.wav","../static/music/saxo2_2.wav","../static/music/saxo2_3.wav","../static/music/saxo2_4.wav","../static/music/saxo2_5.wav",]
const celloArr = ["../static/music/bass1.wav","../static/music/bass2.wav","../static/music/bass3.wav"]
const drumArr = ["../static/music/drum1.wav","../static/music/drum2.wav","../static/music/drum3.wav"]
let _rate = 1;
let _volume = 0.1;

Howler.autoUnlock = false;
//-----------------------------OK-------------------------------
let piano = new Howl({
    src: musicArr[0],
    autoplay: true,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Piano Load Ok')
    }
});
//---------------------------------------------------------------
let cello = new Howl({
    src: musicArr[1],
    autoplay: true,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Cello Load Ok')
    }
});

let drum = new Howl({
    src: musicArr[1],
    autoplay: false,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum Load Ok')
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
    if(vol<0) {
        vol = 0;
    }
    cello_anim.setSpeed(vol);
    cello.volume(vol);
    console.log(vol);
}
function saxo_vol(num){
    console.log(num);
    if(num == 1){
        saxo0.play();
    }
    else if(num == 2){
        saxo1.play();
    }
    else if(num == 3){
        saxo2.play();
    }
    else if(num == 4){
        saxo3.play();
    }
    else if(num == 5){
        saxo4.play();
    }
    else if(num == 6){
        saxo5.play();
    }
}

