import axios from "axios";
import React from "react";

export default class FeederStatus extends React.Component {
    state = null;

    constructor(props) {
        super(props);

        this.state = {
            beastStatus: 'Not connected',
            beastStyle: null,
            mlatStatus: 'Not connected',
            mlatStyle: null,
            ip: null,
            uuid: null,
            kbits: null,
            messages: null,
            positions: null,
            tPositions: null
        };
    }

    componentDidMount() {
        axios.get('http://10.0.10.156:3001/feed-status')
        .then((r) => {

            var receiverIds = '';

            for (var a of r.data.feederReceivers) {
                receiverIds += a[0] + '\n';
            }

            this.setState({
                beastStatus: r.data.feederClients ? 'Connected' : 'Not connected',
                beastStyle: r.data.feederClients ? 'green' : 'red',
                mlatStatus: r.data.feederMlats ? 'Connected' : 'Not connected',
                mlatStyle: r.data.feederMlats ? 'green' : 'red',
                ip: r.data.feederClients[0].host,
                uuid: receiverIds,
                kbits: r.data.feederClients[0].avg_kbit_s,
                messages: r.data.feederClients[0].messages_s,
                positions: r.data.feederClients[0].positions_s,
                tPositions: r.data.feederClients[0].positions
            });
        });
    }

    render() {
        return (
            <center>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Your IP</h3>
                <p>{this.state.ip}</p>
                <h3>Feeder ID(s)</h3>
                <p>{this.state.uuid}</p>
                <h3>Beast Feed Status</h3>
                <h3 style={{color: this.state.beastStyle}}>{this.state.beastStatus}</h3>
                <h3>MLAT Feed Status</h3>
                <h3 style={{color: this.state.mlatStyle}}>{this.state.mlatStatus}</h3>
                <br/>
                <br/>
                <br/>
                <table className='feedStats'>
                    <tbody>
                        <tr>
                            <td>Avg kbit/s</td>
                            <td>{this.state.kbits}</td>
                        </tr>
                        <tr>
                            <td>Messages/s</td>
                            <td>{this.state.messages}</td>
                        </tr>
                        <tr>
                            <td>Positions/s</td>
                            <td>{this.state.positions}</td>
                        </tr>
                        <tr>
                            <td>Total Positions</td>
                            <td>{this.state.tPositions}</td>
                        </tr>
                    </tbody>
                </table>
            </center>
        );
    }
}