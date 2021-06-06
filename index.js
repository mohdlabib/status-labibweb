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
    var link

    // 1
    link = 'labibweb.my.id'

    check1(link)

    function check1(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
                    socket.emit('ping1', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping1', '')
            }

            socket.emit('status1', msg)
            socket.emit('status1_class', msg)
        })
    };

    // 2
    link = 'wallet.labibweb.my.id'

    check2(link)

    function check2(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
                    socket.emit('ping2', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping2', '')
            }

            socket.emit('status2', msg)
            socket.emit('status2_class', msg)
        })
    };

    // 3
    link = 'openapi.labibweb.my.id'

    check3(link)

    function check3(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
                    socket.emit('ping3', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping3', '')
            }

            socket.emit('status3', msg)
            socket.emit('status3_class', msg)
        })
    };

    // 4
    link = 'request.labibweb.my.id'

    check4(link)

    function check4(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
                    socket.emit('ping4', ' - ' + latency + ' ms')
                });

            } else {
                msg = 'unactive'
                socket.emit('ping4', '')
            }

            socket.emit('status4', msg)
            socket.emit('status4_class', msg)
        })
    };

    // 5
    link = '2embed.ru'

    check5(link)

    function check5(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
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
    link = '123player.4u.ms'

    check6(link)

    function check6(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
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
    link = 'fvs.io'

    check7(link)

    function check7(host) {
        Activeping.sys.probe(host, function latency(isAlive) {
            var msg

            if (isAlive) {
                msg = 'active'

                ping.system.ping(link, function (latency) {
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

})

server.listen(port, function () {
    console.log('App running on :' + port)
})