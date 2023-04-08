import SerialPort from "serialport";
import RLparser from "@serialport/parser-readline";
import { firebase } from "./firebase.js"
import { getDatabase, onValue, ref, set, update } from "firebase/database";

const db = getDatabase();//firebase
const connect_router = ref(db,'/')//firebase

// const arduinoPort = 'COM4'
const arduinoPort = '/dev/cu.usbmodem143201'
const port = new SerialPort(arduinoPort, { bauRate: 9600 }, (err) => {
    if (err) {
        console.log('fail');
        return
    }
    console.log('已連接至 Arduino UNO 板')
});

const parser = port.pipe(new RLparser({ delimiter: '\r\n' }))

setTimeout(()=>{serialBegin();},1000)
function serialBegin() {
    port.write("open", function () {
        parser.on("data", function (d) {
            let upload_data = parseInt(d);
                console.log(upload_data);
                update(connect_router, {
                    'drum_val':upload_data,
                });
        })
    })
}
