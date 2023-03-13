const pianoArr = ["../static/music/piano.wav"];
const saxoArr = ["../static/music/saxo2_0.wav","../static/music/saxo2_1.wav","../static/music/saxo2_2.wav","../static/music/saxo2_3.wav","../static/music/saxo2_4.wav","../static/music/saxo2_5.wav",]
const celloArr = ["../static/music/bass1.wav","../static/music/bass2.wav","../static/music/bass3.wav"]
const drumArr = ["../static/music/drum1.wav","../static/music/drum2.wav","../static/music/drum3.wav"]
let _rate = 1;
let _volume = 0.5;

Howler.autoUnlock = false;
//-----------------------------Piano-------------------------------
let piano = new Howl({
    src: pianoArr[0],
    autoplay: true,
    loop: true,
    volume: 1,
    rate: _rate,
    onload: function () {
        console.log('Piano Load Ok')
    }
});
//------------------------------------------------------------
let drum0 = new Howl({
    src: drumArr[0],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum0 Load Ok')
    },
    onend: function(){
        drum_anim.stop();
        drum0.stop();
        drum_anim.play();
        drum0.play();
        console.log('restart!!')
    }
});
let drum1 = new Howl({
    src: drumArr[1],
    autoplay: false,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum1 Load Ok')
    },
    onend: function(){
        drum_anim.stop();
        drum1.stop();
        drum_anim.play();
        drum1.play();
        console.log('restart!!')
    }
});
let drum2 = new Howl({
    src: drumArr[2],
    autoplay: false,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum2 Load Ok')
    },
    onend: function(){
        drum_anim.stop();
        drum2.stop();
        drum_anim.play();
        drum2.play();
        console.log('restart!!')
    }
});
let cello0 = new Howl({
    src: celloArr[0],
    autoplay: false,
    loop: true,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Cello0 Load Ok')
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
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
    },
    onplay: function(){
        saxo_anim.play();
    },
    onend: function(){
        saxo_anim.pause();
    }
});
function cello_vol(vol) {
    if(vol<0) {
        vol = 0;
    }
    cello0.volume(vol);
    // cello_anim.setSpeed(vol);
}
function drum_vol(val) {
    console.log(val);
    switch(val){
        case 1:
            drum_anim.play();
            drum0.play();
            break;
        case 2:
            drum_anim.play();
            drum1.play();
            break;
        case 3:
            drum_anim.play();
            drum2.play();
            break;
        default:
            drum_music_all_stop();
            drum_anim.stop();
            
    }
}
function saxo_vol(val){
    console.log(val);
    switch(val){
        case 1:
            // saxo_anim.play();
            saxo0.play();
            break;
        case 2:
            // saxo_anim.play();
            saxo1.play();
            break;
        case 3:
            // saxo_anim.play();
            saxo2.play();
            break;
        case 4:
            // saxo_anim.play();
            saxo3.play();
            break;
        case 5:
            // saxo_anim.play();
            saxo4.play();
            break;
        case 6:
            // saxo_anim.play();
            saxo5.play();
            break;
        // default:
            // saxo_anim.pause();
    }
}
function drum_music_all_stop(){
    drum0.stop();
    drum1.stop();
    drum2.stop();
}
function cello_music_all_stop(){
    cello0.stop();
    // cello1.stop();
    // cello2.stop();
}

// ---------------ANIMATION----------------------------------------------
function cello_anim0(){
    setInterval(()=>{
        cello_anim.playSegments([(0,25),(25,0)],1);
    },1500)
    // cello_anim.playSegments([(10,11)],1);
    // cello_anim.goToAndPlay(20, true) 
    // cello_anim.pause();
}