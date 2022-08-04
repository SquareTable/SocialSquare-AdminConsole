var express = require('express')
var ports = [80, 443] // FORCE HTTPS WHEN WE GET A HTTPS CERTIFICATE
var servers = []

ports.forEach(port => {
    servers.push(express())
})

servers.forEach((server, index) => {
    server.use('/', express.static('public'))

    server.listen(ports[index], () => {
        console.log(`Server ${index + 1} is listening on port ${ports[index]}`)
    })
})