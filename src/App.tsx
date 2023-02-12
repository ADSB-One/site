import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import FeederMap from './pages/FeederMap';
import FeederStatus from './pages/FeederStatus';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import NoPage from './pages/NoPage';
import GettingStarted from './pages/GettingStarted';
import MLATMap from './pages/MLATMap';
import Globe from './pages/Globe';
import About from './pages/About';
import Footer from './components/Footer';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path="getting-started" element={<GettingStarted />} />
                    <Route path="globe2" element={<Globe />} />
                    <Route path="feeder-map" element={<FeederMap />} />
                    <Route path="mlat-map" element={<MLATMap />} />
                    <Route path="feeder-status" element={<FeederStatus />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
        )
    }
}