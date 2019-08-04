import React, { Component } from 'react';
import { geolocated } from "react-geolocated";

import MapContainer from './containers/MapContainer'
import Slider from './components/Slider'
import { getCars } from './data/Data';

import { mapDimensions, maxItems, defaultLocation } from './config.json'
import './App.css';


class App extends Component {

  componentDidMount () {
    // load all locations from default Location.
    this.loadCars(defaultLocation, maxItems);
  }

  componentDidUpdate(prevProps) {    
    if (this.props.coords &&  prevProps.coords === null) {
      // In case we have location permissions.
      this.loadCars({ 'latitude': this.props.coords.latitude, 'longitude': this.props.coords.longitude}, this.state.maxItems);
    }
  }

  constructor() {
    super();

    this.state = {
        geoLocation: defaultLocation,
        hasLoaded: false,
        maxItems : maxItems,
        mapsOpacity: 1,
        drivers: []
    }
    this.loadCars = this.loadCars.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  loadCars = (geoLocation, limit) => {

      this.setState({
        mapsOpacity: 0.5
      });

    try { 
      getCars({ ...geoLocation, count: limit} ).then(res => {
        this.setState(({ drivers }) => ({
          drivers: {
            ...drivers,
            ...res
          },        
          hasLoaded: true,
          mapsOpacity: 1,  
          geoLocation: geoLocation                
        }));    
      });

    } catch(error) {
      console.error('Error loading location', error)
    };
  }

  onSliderChange = (render, handle, value, un, percent) => {

    getCars({ ...this.state.geoLocation, count: parseInt(value[0])} ).then(res => {
      this.setState({
        drivers: {
          ...res
        },        
        maxItems: parseInt(value[0]),
        mapsOpacity: 1
      });    
     });
  };
  
  onSliderUpdate = () => {
    if (this.state.hasLoaded) {
      this.setState({
        mapsOpacity: 0.5
      });
    }    
  }

  render() {
    
    const containerStyle = {
      opacity: this.state.mapsOpacity,
      ...mapDimensions
    }
    
    return (
      <div className="App">
        <MapContainer containerStyle = { containerStyle } locations = { this.state.drivers } center = { [ this.state.geoLocation.longitude, this.state.geoLocation.latitude] }  />
        <Slider 
          min = { 1 } 
          max = { maxItems } 
          onChange = { this.onSliderChange }
          onUpdate = { this.onSliderUpdate }
          />
    </div>
    );
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
