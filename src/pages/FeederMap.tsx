import  DeckGL from '@deck.gl/react/typed'
import { MapView, COORDINATE_SYSTEM } from "@deck.gl/core/typed";
import { TileLayer } from "@deck.gl/geo-layers/typed"
import { BitmapLayer, LineLayer, ScatterplotLayer } from "@deck.gl/layers/typed";
import React from 'react';
import axios from 'axios';

const INITIAL_VIEW_STATE = {
    latitude: 47.65,
    longitude: 7,
    zoom: 1,
    minZoom: 2,
    maxZoom: 20,
    maxPitch: 89,
    bearing: 0
};

class FeederMap extends React.Component {
    state = null;

    constructor(props) {
        super(props);

        this.state = {
            receivers: null,
            mlatReceivers: null
        };
    }

    async componentDidMount() {
        await axios.get('http://api.adsb.one/clients/beast')
        .then((r) => this.setState({ receivers: r.data.receivers }));
    }

    render() {
        const layers = [
            new TileLayer({
                data: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 19,
                tileSize: 256,
    
                renderSubLayers: props => {
                    const {
                        //@ts-ignore
                        bbox: {west, north, east, south}
                    } = props.tile;
    
                    return new BitmapLayer(props, {
                        data: null,
                        image: props.data,
                        _imageCoordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
                        bounds: [west, south, east, north]
                    });
                }
            }),
            new ScatterplotLayer({
                id: 'beast-clients',
                data: this.state.receivers,
                filled: true,
                radiusScale: 1,
                radiusMinPixels: 3,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                stroked: true,
                getPosition: d => [d[1], d[0]],
                getFillColor: [0,255,0,75],
            }),
        ];

        return (
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>
                <div className="alert alert-warning" role="alert">
                    The locations on this map may be off by ~50km or more.
                </div>
                <DeckGL
                    //@ts-ignore
                    views={new MapView({ resolution: 10, repeat: true, controller: {normalize: true}})}
                    initialViewState={INITIAL_VIEW_STATE}
                    controller={true}
                    layers={[layers]}
                />
            </div>
        );
    }
}

export default FeederMap;