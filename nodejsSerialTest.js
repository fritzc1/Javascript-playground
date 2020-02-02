/**********************************************************************
 * SerialPort Test
 * 
 * To Execute: 
 *  node nodejsSerialTest.js COM3 [brightness_in_decimal]
 * 
 * 
 * ***************************************************/

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const InterByteTimeout = require('@serialport/parser-inter-byte-timeout')
const Delimiter = require('@serialport/parser-delimiter')

var portName = process.argv[2];

const port = new SerialPort(portName, {
    baudRate:9600,
    dataBits:8,
    parity:"none",
    stopBits:1,
    
})
function respFinish(){
    // wait for parser.on data to get filled? 
    console.log('hi')
    //console.log(data)
    partsDone++
    doNextPart()
}
//const parser = port.pipe(new InterByteTimeout({interval: 30}))
const parser = port.pipe(new Delimiter({ delimiter: '$' }))
parser.on('data', function (data) {
    // wait for parser.on data to get filled? 
    console.log(String(data))
    partsDone++
    doNextPart()
})
// port.on('data', function (data) {
//     console.log(data)
// })
port.on('error', function(err) {
    console.log('Error: ', err.message)
})


var partsDone = 0
var deviceAddr = 0x05
var packet = ''
packet = '!' + String.fromCharCode(deviceAddr) + 'b' + process.argv[3] + '$'

port.write(packet, function(err) {
    if(err) {
        return console.log('error on write: ', err.message)
    }
    console.log('message written:' + packet)
})

function doNextPart() {
    var packet = ''
    var deviceAddr = 0x05
    switch(partsDone) {
        case 1:
            packet = '!' + String.fromCharCode(deviceAddr) + 'r6$'
        break;
        case 2:
            packet = '!' + String.fromCharCode(deviceAddr) + 'm$'
        break;
        case 3:
            //term
            return process.kill(process.pid);
        break;
        default:
    }
    port.write(packet, function(err) {
        if(err) {
        return console.log('error on write: ', err.message)
        }
        console.log('message written:' + packet)
    })
}



// list all the ports
var serportPromise = SerialPort.list()
serportPromise.then(function (ports) {
    ports.forEach(function(port, i) {
        console.log("PORT PATH=>", port.path, port.isOpen);
    })
})