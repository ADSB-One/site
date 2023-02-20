import axios from "axios";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

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
            uuid: [],
            kbits: null,
            messages: null,
            positions: null,
            tPositions: null
        };
    }

    componentDidMount() {
        axios.get('https://api.adsb.one/feed-status')
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
                ip: r.data.host,
                uuid: r.data.feederClients,
                kbits: r.data.feederClients[0].avg_kbit_s,
                messages: r.data.feederClients[0].messages_s,
                positions: r.data.feederClients[0].positions_s,
                tPositions: r.data.feederClients[0].positions
            });
        });
    }

    render() {
        return (
            <Container fluid className='text-center h-100'>
                <Row>
                    <Col>
                        <h1>Your IP</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.state.ip}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Beast Feed Status</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 style={{color: this.state.beastStyle}}>{this.state.beastStatus}</h3>
                        {this.state.uuid.map((dat: any) => {
                            return [
                                <Container className='w-50'>
                                    <p>{dat.receiverId}</p>
                                    <Row>
                                        <Col>
                                            <h5>Avg. kbit/s</h5>
                                            <p>{dat.avg_kbit_s}</p>
                                        </Col>
                                        <Col>
                                            <h5>Messages/s</h5>
                                            <p>{dat.messages_s}</p>
                                        </Col>
                                        <Col>
                                            <h5>Positions/s</h5>
                                            <p>{dat.positions_s}</p>
                                        </Col>
                                        <Col>
                                            <h5>Total Positions</h5>
                                            <p>{dat.positions}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            ]
                        })}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>MLAT Feed Status</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 style={{color: this.state.mlatStyle}}>{this.state.mlatStatus}</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}