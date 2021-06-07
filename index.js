const express = require('express')
const socket = require('socket.io')
const ping = require('jjg-ping');
const http = require('http')
const Activeping = require('ping');
const port = process.env.PORT || 5000


const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendfile('public/index.html', {
        root: __dirname
    })
})

// Socket IO
io.on('connection', function (socket) {

    // 1
    var link1 = 'labibweb.my.id'

    check1(link1)

    function check1(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'
            } else {
                msg = 'unactive'
            }

            socket.emit('status1', msg)
            socket.emit('status1_class', msg)
        })
    };

    // 2
    var link2 = 'wallet.labibweb.my.id'

    check2(link2)

    function check2(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'
            } else {
                msg = 'unactive'
            }

            socket.emit('status2', msg)
            socket.emit('status2_class', msg)
        })
    };

    // 3
    var link3 = 'openapi.labibweb.my.id'

    check3(link3)

    function check3(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'
            } else {
                msg = 'unactive'
            }

            socket.emit('status3', msg)
            socket.emit('status3_class', msg)
        })
    };

    // 4
    var link4 = 'request.labibweb.my.id'

    check4(link4)

    function check4(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'
            } else {
                msg = 'unactive'
            }

            socket.emit('status4', msg)
            socket.emit('status4_class', msg)
        })
    };

    // 5
    var link5 = '2embed.ru'

    check5(link5)

    function check5(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link5, function (latency) {
                    socket.emit('ping5', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping5', '')
            }

            socket.emit('status5', msg)
            socket.emit('status5_class', msg)
        })
    };

    // 6
    var link6 = '123player.4u.ms'

    check6(link6)

    function check6(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link6, function (latency) {
                    socket.emit('ping6', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping6', '')
            }

            socket.emit('status6', msg)
            socket.emit('status6_class', msg)
        })
    };

    // 7
    var link7 = 'fvs.io'

    check7(link7)

    function check7(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link7, function (latency) {
                    socket.emit('ping7', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping7', '')
            }

            socket.emit('status7', msg)
            socket.emit('status7_class', msg)
        })
    };

    // 8
    var link8 = 'fembed.com'

    check8(link8)

    function check8(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link8, function (latency) {
                    socket.emit('ping8', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping8', '')
            }

            socket.emit('status8', msg)
            socket.emit('status8_class', msg)
        })
    };

    // 9
    var link9 = 'uptostream.com'

    check9(link9)

    function check9(host) {
        Activeping.sys.probe(host, function (isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link9, function (latency) {
                    socket.emit('ping9', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping9', '')
            }

            socket.emit('status9', msg)
            socket.emit('status9_class', msg)
        })
    };

})

server.listen(port, function () {
    console.log('App running on :' + port)
})
