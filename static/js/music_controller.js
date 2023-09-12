const pianoArr = ["../static/music/piano_new.wav"];
const saxoArr = ["../static/music/do.wav", "../static/music/ra.wav", "../static/music/mi.wav", "../static/music/la.wav", "../static/music/so.wav"]
const celloArr = ["../static/music/bass1.wav", "../static/music/bass2.wav", "../static/music/bass3.wav"]
const drumArr = ["../static/music/drum1.wav", "../static/music/drum2.wav", "../static/music/drum3.wav"]
let saxoCtrl_enable = true;
let celloCtrl0_enable = true;
let celloCtrl1_enable = true;
let celloCtrl2_enable = true;
let drumCtrl_enable = true;
let _rate = 1;
let _volume = 0.5;
let saxo_volume = 1;
let drum_volume = 0.7;

// Howler.autoUnlock = false;
//-----------------------------Piano-------------------------------
let piano = new Howl({
    src: pianoArr[0],
    autoplay: true,
    loop: true,
    volume: 0.6,
    rate: _rate,
    onload: function () {
        console.log('Piano Load Ok')
    }
});//OK
//------------------------------------------------------------
let drum0 = new Howl({
    src: drumArr[0],
    autoplay: false,
    loop: false,
    volume: drum_volume,
    rate: _rate,
    onload: function () {
        console.log('Drum0 Load Ok')
    },
    onplay: function () {
        drumCtrl_enable = false;
        $('#drum0').show();
        $('#drum1').hide();
        $('#drum2').hide();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 800)
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
    volume: drum_volume,
    rate: _rate,
    onload: function () {
        console.log('Drum1 Load Ok')
    },
    onplay: function () {
        drumCtrl_enable = false;
        $('#drum0').hide();
        $('#drum1').show();
        $('#drum2').hide();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 800)
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
    volume: drum_volume,
    rate: _rate,
    onload: function () {
        console.log('Drum2 Load Ok')
    },
    onplay: function () {
        drumCtrl_enable = false;
        $('#drum0').hide();
        $('#drum1').hide();
        $('#drum2').show();
        $('#spotlight_Drum').fadeIn(800);
        setTimeout(() => { $('#spotlight_Drum').fadeOut(800); }, 800)
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
        cello_anim0.play();
        $('#cello0').show();
        $('#cello1').hide();
        $('#cello2').hide();
        $('#spotlight_Cello').fadeIn(800);
        setTimeout(() => { $('#spotlight_Cello').fadeOut(800); }, 2500)
    },
    onend: function () {
        cello_anim0.stop();
        cello0.stop();
        cello_anim0.play();
        cello0.play();
        console.log('cello0 restart!!')
    },
    onstop: function () {
        cello_End_Result();
        cello_anim0.stop();
    }
});
let cello1 = new Howl({
    src: celloArr[1],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Cello1 Load Ok')
    },
    onplay: function () {
        cello_anim1.play();
        $('#cello0').hide();
        $('#cello1').show();
        $('#cello2').hide();
        $('#spotlight_Cello').fadeIn(800);
        setTimeout(() => { $('#spotlight_Cello').fadeOut(800); }, 2500)
    },
    onend: function () {
        cello_anim1.stop();
        cello1.stop();
        cello_anim1.play();
        cello1.play();
        console.log('cello1 restart!!')
    },
    onstop: function () {
        cello_End_Result();
        cello_anim1.stop();
    }
});
let cello2 = new Howl({
    src: celloArr[2],
    autoplay: false,
    loop: false,
    volume: _volume,
    rate: _rate,
    onload: function () {
        console.log('Cello2 Load Ok')
    },
    onplay: function () {
        cello_anim2.play();
        $('#cello0').hide();
        $('#cello1').hide();
        $('#cello2').show();
        $('#spotlight_Cello').fadeIn(800);
        setTimeout(() => { $('#spotlight_Cello').fadeOut(800); }, 2500)
    },
    onend: function () {
        cello_anim2.stop();
        cello2.stop();
        cello_anim2.play();
        cello2.play();
        console.log('cello2 restart!!')
    },
    onstop: function () {
        cello_End_Result();
        cello_anim2.stop();
    }
});
let saxo0 = new Howl({
    src: saxoArr[0],
    autoplay: false,
    loop: false,
    volume: saxo_volume,
    rate: _rate,
    onload: function () {
        console.log('saxo0 Load Ok')
    },
    onplay: function () {
        saxoCtrl_enable = false;
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxo_End_Result()
    },
    onend: function () {
        saxo_End_Result()
    }

});//OK
let saxo1 = new Howl({
    src: saxoArr[1],
    autoplay: false,
    loop: false,
    volume: saxo_volume,
    rate: _rate,
    onload: function () {
        console.log('saxo1 Load Ok')
    },
    onplay: function () {
        saxoCtrl_enable = false;
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxo_End_Result()
    },
    onend: function () {
        saxo_End_Result()
    }
});//OK
let saxo2 = new Howl({
    src: saxoArr[2],
    autoplay: false,
    loop: false,
    volume: saxo_volume,
    rate: _rate,
    onload: function () {
        console.log('saxo2 Load Ok')
    },
    onplay: function () {
        saxoCtrl_enable = false;
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxo_End_Result()
    },
    onend: function () {
        saxo_End_Result()
    }
});//OK
let saxo3 = new Howl({
    src: saxoArr[3],
    autoplay: false,
    loop: false,
    volume: 0.75,
    rate: _rate,
    onload: function () {
        console.log('saxo3 Load Ok')
    },
    onplay: function () {
        saxoCtrl_enable = false;
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxo_End_Result()
    },
    onend: function () {
        saxo_End_Result()
    }
});//OK
let saxo4 = new Howl({
    src: saxoArr[4],
    autoplay: false,
    loop: false,
    volume: 0.75,
    rate: _rate,
    onload: function () {
        console.log('saxo4 Load Ok')
    },
    onplay: function () {
        saxoCtrl_enable = false;
        $('#spotlight_Saxo').fadeIn(800);
        saxo_anim.play();
    },
    onstop: function () {
        saxo_End_Result()
    },
    onend: function () {
        saxoCtrl_enable = false;
        saxo_End_Result()
        $('#spotlight_Saxo').fadeOut(300);
    }
});//OK
function cello_vol0(vol) {
    if (vol >= 0.4 && celloCtrl0_enable == true && celloCtrl1_enable == true && celloCtrl2_enable == true) {
        cello0.play();
        celloCtrl0_enable = false;
    }
    if (vol < 0.3) {
        cello0.stop();
        celloCtrl0_enable = true;
    }
    cello0.volume(vol);
    // console.log("0號可控制? "+ celloCtrl0_enable);
}
function cello_vol1(vol) {
    if (vol >= 0.4 && celloCtrl0_enable == true && celloCtrl1_enable == true && celloCtrl2_enable == true) {
        cello1.play();
        celloCtrl1_enable = false;
    }
    if (vol < 0.3) {
        cello1.stop();
        celloCtrl1_enable = true;
    }
    cello1.volume(vol);
    // console.log("1號可控制? "+celloCtrl0_enable);
}
function cello_vol2(vol) {
    if (vol >= 0.5 && celloCtrl0_enable == true && celloCtrl1_enable == true && celloCtrl2_enable == true) {
        cello2.play();
        celloCtrl2_enable = false;
    }
    if (vol < 0.3) {
        cello2.stop();
        celloCtrl2_enable = true;
    }
    cello2.volume(vol);
    // console.log("2號可控制? "+celloCtrl0_enable);
}
function drum_vol(val) {
    if (drumCtrl_enable) {
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
    }else if(drumCtrl_enable == false && val == 0){
        drum_music_all_stop();
    }

}//OK
function saxo_vol(val) { 
        switch (val) {
            case 1:
                if(saxoCtrl_enable){saxo0.play();}
                break;
            case 2:
                if(saxoCtrl_enable){saxo1.play();}
                break;
            case 3:
                if(saxoCtrl_enable){saxo2.play();}
                break;
            case 4:
                if(saxoCtrl_enable){saxo3.play();}
                break;
            case 5:
                if(saxoCtrl_enable){saxo4.play();}
                break;
            default:
                saxo_music_all_stop();
        }
}//OK
function piano_vol(val){
    piano.volume(val);
}
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
}//OK
function cello_music_all_stop() {
    cello0.stop();
    cello1.stop();
    cello2.stop();
}//OK
function saxo_End_Result() {
    $('#spotlight_Saxo').fadeOut(300);
    saxoCtrl_enable = true;
    saxo_anim.pause();
}//OKu
function drum_End_Result() {
    $('#spotlight_Drum').fadeOut(300);
    drum_anim0.stop();
    drum_anim1.stop();
    drum_anim2.stop();
    drumCtrl_enable = true;
}//OK
function cello_End_Result() {
    $('#spotlight_Cello').fadeOut(1500);
    // cello_anim0.stop();
    // cello_anim1.stop();
    // cello_anim2.stop();

}//OK