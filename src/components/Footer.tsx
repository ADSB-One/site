import React from "react";

export default class Footer extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <footer className="d-flex justify-content-between fixed-bottom text-center justify-content-between bg-dark text-white">
                    <p className='col-md-2 mb-0 text-muted'>ADSB One&copy; 2022</p>
                    <ul className='nav justify-content-end col-md-4 text-muted'>
                        <li className='nav-item'>
                            <a className='nav-link px-2 text-muted' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link px-2 text-muted' href='https://globe.adsb.one'>Globe</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link px-2 text-muted' href='https://acars.adsb.one'>ACARS</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link px-2 text-muted' href='/feeder-map'>Feeder Map</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link px-2 text-muted' href='/mlat-map'>MLAT Map</a>
                        </li>
                    </ul>
                </footer>
            </div> 
        );
    }
}