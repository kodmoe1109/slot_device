const pianoArr = ["../static/music/piano.wav"];
const saxoArr = ["../static/music/saxo2_0.wav", "../static/music/saxo2_1.wav", "../static/music/saxo2_2.wav", "../static/music/saxo2_3.wav", "../static/music/saxo2_4.wav", "../static/music/saxo2_5.wav",]
const celloArr = ["../static/music/bass1.wav", "../static/music/bass2.wav", "../static/music/bass3.wav"]
const drumArr = ["../static/music/drum1.wav", "../static/music/drum2.wav", "../static/music/drum3.wav"]
let saxoCtrl_enable = true;
let celloCtrl_enable = true;
let drumCtrl_enable = true;
let _rate = 1;
let _volume = 0.5;

Howler.autoUnlock = false;
//-----------------------------Piano-------------------------------
// let piano = new Howl({
//     src: pianoArr[0],
//     autoplay: true,
//     loop: true,
//     volume: 0.5,
//     rate: _rate,
//     onload: function () {
//         console.log('Piano Load Ok')
//     }
// });//OK
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
    onplay: function () {
        $('#drum_anim0').show();
        $('#drum_anim1').hide();
        $('#drum_anim2').hide();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 2500)
        drum_anim0.play();
    },
    onend: function () {
        drum_anim0.stop();
        drum0.stop();
        drum_anim0.play();
        drum0.play();
        console.log('restart!!')
    },
    onstop: function () {
        drum_End_Result()
    }
});//OK
let drum1 = new Howl({
    src: drumArr[1],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum1 Load Ok')
    },
    onplay: function () {
        $('#drum_anim0').hide();
        $('#drum_anim1').show();
        $('#drum_anim2').hide();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 2500)
        drum_anim1.play();
    },
    onend: function () {
        drum_anim1.stop();
        drum1.stop();
        drum_anim1.play();
        drum1.play();
        console.log('restart!!')
    },
    onstop: function () {
        drum_End_Result();
    }
});//OK
let drum2 = new Howl({
    src: drumArr[2],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Drum2 Load Ok')
    },
    onplay: function () {
        $('#drum_anim0').hide();
        $('#drum_anim1').hide();
        $('#drum_anim2').show();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 2500)
        drum_anim2.play();
    },
    onend: function () {
        drum_anim2.stop();
        drum2.stop();
        drum_anim2.play();
        drum2.play();
        console.log('restart!!')
    },
    onstop: function () {
        drum_End_Result();
    }
});//OK
let cello0 = new Howl({
    src: celloArr[0],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Cello0 Load Ok')
    },
    onplay: function () {
        cello_anim.play();
        $('#spotlight_Cello').fadeIn(800);
        setTimeout(() => { $('#spotlight_Cello').fadeOut(800); }, 2500)
        celloCtrl_enable = false;
    },
    onend: function () {
        cello_anim.stop();
        cello0.stop();
        cello_anim.play();
        cello0.play();
        console.log('cello0 restart!!')
    },
    onstop: function () {
        cello_End_Result()
        celloCtrl_enable = true;
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
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }

});//OK
let saxo1 = new Howl({
    src: saxoArr[1],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo1 Load Ok')
    },
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
let saxo2 = new Howl({
    src: saxoArr[2],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo2 Load Ok')
    },
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
let saxo3 = new Howl({
    src: saxoArr[3],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo3 Load Ok')
    },
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
let saxo4 = new Howl({
    src: saxoArr[4],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo4 Load Ok')
    },
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
let saxo5 = new Howl({
    src: saxoArr[5],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('saxo5 Load Ok')
    },
    onplay: function () {
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
function cello_vol(vol) {
    console.log(celloCtrl_enable)
    if (celloCtrl_enable) {
        cello0.play();
    }
    cello0.volume(vol); 
    if (vol <= 0) {
        cello0.stop();
    }

}
function drum_vol(val) {
        switch (val) {
            case 1:
                drum0.play();
                break;
            case 2:
                drum1.play();
                break;
            case 3:
                drum2.play();
                break;
            default:
                drum_music_all_stop();
        
    }

}//OK
function saxo_vol(val) {
    if (saxoCtrl_enable) {
        switch (val) {
            case 1:
                saxo0.play();
                break;
            case 2:
                saxo1.play();
                break;
            case 3:
                saxo2.play();
                break;
            case 4:
                saxo3.play();
                break;
            case 5:
                saxo4.play();
                break;
            case 6:
                saxo5.play();
                break;
            default:
                saxo_music_all_stop();
        }
    }
}//OK
function drum_music_all_stop() {
    drum0.stop();
    drum1.stop();
    drum2.stop();
}//OK
function saxo_music_all_stop() {
    saxo0.stop();
    saxo1.stop();
    saxo2.stop();
    saxo3.stop();
    saxo4.stop();
    saxo5.stop();
}//OK
function cello_music_all_stop() {
    cello0.stop();
    // cello1.stop();
    // cello2.stop();
}//OK
function saxo_End_Result() {
    $('#spotlight_Saxo').fadeOut(300);
    saxoCtrl_enable = true;
    saxo_anim.pause();
}//OK
function drum_End_Result() {
    $('#spotlight_Drum').fadeOut(300);
    drum_anim0.stop();
    drum_anim1.stop();
    drum_anim2.stop();
    // $('#drum_anim0').show();
    // $('#drum_anim1').hide();
    // $('#drum_anim2').hide();
}//OK
function cello_End_Result() {
    $('#spotlight_Cello').fadeOut(300);
    cello_anim.stop();
}//OK


// ---------------ANIMATION----------------------------------------------
// function cello_anim0() {
//     setInterval(() => {
//         cello_anim.playSegments([(0,25)], 1);
//     }, 500)
// }
