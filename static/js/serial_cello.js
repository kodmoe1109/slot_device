import SerialPort from "serialport";
import { firebase } from "./firebase.js"
import { getDatabase, onValue, ref, set, update } from "firebase/database";

const db = getDatabase();//firebase
const connect_router = ref(db,'/')//firebase

// const arduinoPort = 'COM4'
const _arduinoPort = '/dev/cu.usbserial-14420'
const port = new SerialPort(_arduinoPort, { bauRate: 9600 }, (err) => {
    if (err) {
        console.log('fail');
        return
    }
    console.log('已連接至 Arduino UNO 板')
});

setTimeout(()=>{show_num();},1000)
function show_num() {
    port.write("open", function () {
        port.on("data", function (d) {
            let real_data = parseFloat(d)
            if (real_data) { // 拉下拉霸
                let data = real_data/-10;
                console.log(data);
                update(connect_router, {
                    'cello_val':data,
                });
            }
        })
    })
}