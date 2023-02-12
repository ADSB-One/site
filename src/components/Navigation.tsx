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
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand d-flex w-50 me-auto">ADSB One</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                            <ul className="navbar-nav w-100 justify-content-center">
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='https://globe.adsb.one'>Globe</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='https://acars.adsb.one'>ACARS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/getting-started">Getting Started</NavLink>
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
                                        <li><a className='dropdown-item disabled' href='/about'>About</a></li>
                                        <li><a className='dropdown-item disabled' href='/contact'>Contact</a></li>
                                        <li><a className='dropdown-item disabled' href='/tos'>Terms of Service</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav w-100 justify-content-end">
                                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                                    <div className='input-group px-2 my-auto'>
                                        <input type='text' className='form-control' placeholder='Mode S hex, callsign, reg' />
                                        <div className='input-group-append'>
                                            <button className='btn btn-outline-secondary disabled' type='button'>Search</button>
                                        </div>
                                    </div>
                                    <a className='btn btn-outline-primary disabled' href='#'>Login</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}