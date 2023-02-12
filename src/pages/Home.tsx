import React from "react";

export default class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
          <section className='home_hero text-center mx-auto vh-100 vw-100'>
            <div className='container'>
              <div className='row justify-content-md-center'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text-white'>
                  <h1 className='display-1 mb-3'>ADSB One</h1>
                  <p className='lead mb-5 display-6'>A one-stop shop for all aero-related information and an aggregator
                  for aero feed data to reduce feeder bandwidth usage, infrastructure duplication, and costs across sites with similar 
                  functions.</p>
                  <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                    <a className="btn btn-light btn-lg px-4 gap-3" href='https://globe.adsb.one'>Globe</a>
                    <a className="btn btn-light btn-lg px-4" href='/getting-started'>Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}