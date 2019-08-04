import { svg } from '../assets/car'
import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const { token, defaultZoom } = require('../config.json');
const Map = ReactMapboxGl({
  minZoom: 8,
  maxZoom: 15,
  accessToken: token
});



class MapContainer extends Component {

  constructor(props) {
    super(props)    
    this.state = { 
      center: props.center,
      zoom: [ defaultZoom ],
      selectedLocation: null,
      locations: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.center !== nextProps.center) {
      this.setState({
        center: nextProps.center
      })
    }
  }

  onDrag = () => {
    if (this.state.location) {
      this.setState({ selectedLocation: null });
    }
  };

  onToggleHover(cursor, { map }) {
    map.getCanvas().style.cursor = cursor;
  }

  markerClick = (location, { feature }) => {
    console.info('Selected location', feature.geometry.coordinates)
    this.setState({
      center: feature.geometry.coordinates,
      zoom: [60],
      selectedLocation: location
    });
  };

  onStyleLoad = (map) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  render() {
    
    const { center, zoom, } = this.state;    
    const { locations } = this.props;
    const layoutLayer = { 'icon-image': 'splytCars' };

    const image = new Image();
    image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg);
    const images = ['splytCars', image];

    return (
        <Map
          style= {"mapbox://styles/mapbox/basic-v9"}
          className = "MapContainer"
          containerStyle={this.props.containerStyle}
          center={ center }
          zoom = { zoom }
        >       
          <Layer type="symbol" id="marker" layout={layoutLayer} images={ images } >
          {Object.keys(locations).map( location => (
            <Feature
              key={location}
              onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
              onMouseLeave={this.onToggleHover.bind(this, '')}
              onClick={this.markerClick.bind(this, locations[location])}
              coordinates={locations[location].position}
            />
          ))}
        </Layer>
        </Map>
    );
  }
}

export default MapContainer;