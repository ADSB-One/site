import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    state = null;

    constructor(props) {
        super(props)

        this.state = {
            clients: 0,
            recvs: 0
        };
    }

    async componentDidMount() {
        await axios.get('https://api.adsb.one/clients/beast')
        .then((r) => this.setState({ clients: r.data.clients, recvCount: r.data.receivers.length}));
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ADSB One</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/getting-started">Getting Started</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="https://globe.adsb.one">Globe</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="https://acars.adsb.one">ACARS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/feeder-map">Feeder Map</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/mlat-map">MLAT Map</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/feeder-status">Feeder Status</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Data Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item disabled" href="#">Historical Data</a></li>
                                    <li><a className="dropdown-item" href="https://github.com/ADSB-One/api/blob/main/README.md">API</a></li>
                                </ul>
                            </li>
                        </ul>
                        <p className='my-auto px-3 text-white'>Feeder count: {this.state.clients}</p>
                        <a className="btn btn-success" href="https://github.com/ADSB-One">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}