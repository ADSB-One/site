import React from "react";

export default class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <section className='home_hero text-center px-4 py-5 mx-auto'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{opacity: '100%'}}>
                            <h5>ADSB One</h5>
                        </div>
                    </div>
                    <p>ADSB One aims to be one-stop shop for all aero-related information and an open replacement to ADSBExchange in lieu of the recent sell off to a PE firm.<br /><br />
                    Data here will remain unfiltered. There is an API to use that is a drop-in replacement for the ADSBx RapidAPI, see the <a href="https://github.com/ADSB-One/api/blob/main/README.md">API documentation</a> page for more information.</p>
                </div>
            </section>
        )
    }
}