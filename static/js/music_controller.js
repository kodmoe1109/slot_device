const musicArr = ["../music/piano.wav", "../music/cello.wav", "../music/drum.wav"];
let _rate = 1;
let _volume = 0.1;

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
// let drum = new Howl({
//     src: musicArr[2],
//     autoplay: true,
//     loop: true,
//     volume: _volume,
//     rate: _rate,
//     onload: function () {
//         console.log('Drum Load Ok')
//     }
// });

function piano_vol(vol) {
    if(vol<0) {
        vol = 0;
        // drum_anim.pause();
        // cello_anim.pause();
    }
    cello_anim.setSpeed(vol);
    drum_anim.setSpeed(vol);
    cello.volume(vol);
    console.log(vol);
}

