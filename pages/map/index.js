import React from "react";
import StyledMap from "./index.css";

class Map extends React.Component {
  state = {
    defaultCenter: {
     
      lat:  59.37215372800212,
      lng: 16.51307543068856,
    },
    
    
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {  document.body.classList.remove("is-map"); }
  handleDrawMarkers = () => {
    const { markers } = this.state;
    const bounds = new google.maps.LatLngBounds();
   
    var kmzLayeMattiasr = new google.maps.KmlLayer('https://www.google.com/maps/d/u/0/kml?mid=1g8DMXDvq0gH-SbKzv-JR5WVTX78lni7J&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.');
    var kmzLayer = new google.maps.KmlLayer('https://www.google.com/maps/d/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.');
    kmzLayeMattiasr.setMap(this.map);
  };
  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 10,
    });
    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  };

  render() {
    return (
      <StyledMap>
        <div id="google-map" />
      </StyledMap>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;