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
            .then((r) => this.setState({ clients: r.data.clients, recvCount: r.data.receivers.length }));
    }

    render() {
        return (
            <header className='mb-auto'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Coverage
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/feeder-status">Feeder Status</a></li>
                                        <li><a className="dropdown-item" href="/feeder-map">Feeder Map</a></li>
                                        <li><a className="dropdown-item" href="/mlat-map">MLAT Map</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Data
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item disabled" href="#">Historical Data</a></li>
                                        <li><a className="dropdown-item" href="https://github.com/ADSB-One/api/blob/main/README.md">API</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aira-expanded='false'>
                                        About
                                    </a>
                                    <ul className='dropdown-menu dropdown-menu-dark'>
                                        <li><a className='dropdown-item' href='/about'>About</a></li>
                                        <li><a className='dropdown-item' href='/contact'>Contact</a></li>
                                        <li><a className='dropdown-item disabled' href='/tos'>Terms of Service</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                                <p className='my-auto px-3 text-white'>Feeder count: {this.state.clients}</p>
                                <a className='btn btn-outline-primary' href='#'>Login</a>
                                <a className="btn btn-outline-success" href="https://github.com/ADSB-One">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a className="btn btn-outline-success" href="https://discord.gg/jfVRF2XRwF">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}