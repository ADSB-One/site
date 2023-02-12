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

export default class MLATMap extends React.Component {
    state = null;

    constructor(props) {
        super(props);

        this.state = {
            receivers: null
        };
    }

    async componentDidMount() {
        await axios.get('https://api.adsb.one/clients/mlat')
        .then((r) => this.setState({ receivers: r.data.clients}))
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
                id: 'mlat-clients',
                data: this.state.receivers,
                filled: false,
                radiusScale: 1,
                radiusMinPixels: 4,
                radiusMaxPixels: 100,
                lineWidthMinPixels: 1,
                stroked: true,
                getPosition: d => [d[1], d[0]],
                getFillColor: [255,0,0],
            }),
            new LineLayer({
                id: 'mlat-lines',
                data: this.state.receivers,
                getWidth: 2,
                getSourcePosition: d => [d[1], d[0]],
                getTargetPosition: d => [d[3], d[2]],
                getColor: [255, 100, 100]
            })
        ];

        return (
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>
                <div className="alert alert-warning" role="alert">
                    The locations on this map may be offset.
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