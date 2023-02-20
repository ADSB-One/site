import React from "react";
import { Container } from "react-bootstrap";

export default class GettingStarted extends React.Component {

    render() {
        return (
            <Container fluid className='h-100'>
                <h3>Feed with readsb docker</h3>
                <a href="https://github.com/sdr-enthusiasts/docker-multifeeder">SDR Enthusiasts Multi Feeder Container</a>
                <br/>
                <br/>
                <h3>ADSB Feed information:</h3>
                <p><b>URL</b>: feed.adsb.one<br/>
                <b>Beast port</b>: 64004<br/>
                <b>MLAT port</b>: 64006</p>
            </Container>
        )
    }
}