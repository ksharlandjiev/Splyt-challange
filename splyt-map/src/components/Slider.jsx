import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 

const Slider = (props) => (
  <Nouislider 
    
    range={{ min: props.min || 1, max: props.max || 50 }} 
    start={[ props.start || props.max ]} 
    connect
    tooltips
    step = { props.step || 1 }
    onUpdate = { props.onUpdate || null }
    onChange={ props.onChange || null }
    />
);

export default Slider;