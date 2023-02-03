import * as Express from 'express';
import * as FS from 'fs';
import path from 'path';

const port = 3000;
const app = Express.default();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    let clients = await JSON.parse(FS.readFileSync('/json/clients.json', 'utf8'));
    var count = Object.keys(clients.clients).length;
    res.render('pages/index', {
        feedCount: count
    });
});

app.get('/feeder-map', async (req, res) => {
    let Rclients = await JSON.parse(FS.readFileSync('/json/clients.json', 'utf8'));
    let Mclients = await JSON.parse(FS.readFileSync('/mlat/clients.json', 'utf8'));
    let Msync = await JSON.parse(FS.readFileSync('/mlat/sync.json', 'utf8'));
    var count = Object.keys(Rclients.clients).length;

    res.render('pages/feeder-map', {
        feedCount: count
    });
});

app.get('/myip', async (req, res) => {
    let clients = await JSON.parse(FS.readFileSync('/json/clients.json', 'utf8'));
    var count = Object.keys(clients.clients).length;
    var ip = req.headers['cf-connecting-ip'];
    var match = false;
    var cIp = 'N/A';
    var feedId = null;
    var kbits = null;
    var messages = null;
    var positions = null;
    var tPositions = null;
    for (var client of clients.clients) {
        var rawIp = client[1].toString().replace(' port ', ':').replace(/\s/g, '');
        cIp = rawIp.substring(0, rawIp.lastIndexOf(':'));
        if (cIp == ip) {
            match = true;
            feedId = client[0];
            kbits = client[2];
            messages = client[4];
            positions = client[5];
            tPositions = client[8];
            break;
        }
        else {
            match = false;
            feedId = "N/A";
        }
    }
    var statusStyle: string;
    var status: string;
    if (match) {
        statusStyle = 'color: green';
        status = 'Connected';
    }
    else {
        statusStyle = 'color: red';
        status = 'Not Connected';
    }
    res.render('pages/myip', {
        feedCount: count,
        ip: ip,
        feedId: feedId,
        statusStyle: statusStyle,
        status: status,
        kbits: kbits,
        messages: messages,
        positions: positions,
        tPositions: tPositions
    });
});

app.listen(port, () => {
    console.log('App started');
});
