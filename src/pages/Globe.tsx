import DeckGL from "@deck.gl/react/typed";
import { MapView, COORDINATE_SYSTEM } from "@deck.gl/core/typed";
import { TileLayer } from "@deck.gl/geo-layers/typed"
import { BitmapLayer, LineLayer, ScatterplotLayer } from "@deck.gl/layers/typed";
import React from "react";
import axios from "axios";

// Experimental globe replacement for tar1090
export default class Globe extends React.Component {
    state = null;

    INITIAL_VIEW_STATE = {
        latitude: 47.65,
        longitude: 7,
        zoom: 1,
        minZoom: 2,
        maxZoom: 20,
        maxPitch: 89,
        bearing: 0
    };

    constructor(props) {
        super(props);

        

        this.state = {
            tileLayer: null
        };
    }

    async componentDidMount() {
        
        var data = null;
        axios.get('https://globe.adsb.one/re-api/?binCraft&zstd&box=-77.486053,84.316077,-180,180')
        .then((d) => data = d.data);

        console.log(data);

        
        
        this.setState({
            tileLayer: new TileLayer({
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
            })
        });
    }

    render() {
        return (
            <div style={{height: '100vh', width: '100vw', position: 'relative'}}>
                <div className="alert alert-warning" role="alert">
                    The locations on this map may be off by ~50km or more.
                </div>
                <DeckGL
                    //@ts-ignore
                    views={new MapView({ resolution: 10, repeat: true, controller: {normalize: true}})}
                    initialViewState={this.INITIAL_VIEW_STATE}
                    controller={true}
                    layers={[this.state.tileLayer]}
                />
            </div>
        );
    }
}