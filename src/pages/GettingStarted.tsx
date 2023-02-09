import React from "react";

export default class GettingStarted extends React.Component {

    render() {
        return (
            <div className='container-fluid'>
                <h3>Feed with readsb docker</h3>
                <a href="https://github.com/sdr-enthusiasts/docker-multifeeder">SDR Enthusiasts Multi Feeder Container</a>
                <br/>
                <br/>
                <h3>ADSB Feed information:</h3>
                <p><b>URL</b>: feed.adsb.one<br/>
                <b>Beast port</b>: 64004<br/>
                <b>MLAT port</b>: 64006</p>
                <h3>ACARS Feed information:</h3>
                <p><b>URL</b>: feed.adsb.one<br/>
                <b>ACARS UDP port</b>: 5550<br/>
                <b>VDLM2 UDP port</b>: 5555</p>
            </div>
        )
    }
}