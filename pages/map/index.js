import React from "react";
import StyledMap from "./index.css";

class Map extends React.Component {
  state = {
    defaultCenter: {
     
      lat:  59.37215372800212,
      lng: 16.51307543068856,
    },
    currentMap: 'https://www.google.com/maps/d/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.'
    
  };
  kmzLayeMattiasr = null;

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() {  document.body.classList.remove("is-map"); }
  handleDrawMarkers = () => {
    const { markers,currentMap } = this.state;
    const bounds = new google.maps.LatLngBounds();
   
    this.kmzLayeMattiasr = new google.maps.KmlLayer(currentMap);
    var kmzLayer = new google.maps.KmlLayer('https://www.google.com/maps/d/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.');
   this.kmzLayeMattiasr.setMap(this.map);
  };
  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.kmzLayeMattiasr = new google.maps.KmlLayer(this.state.currentMap);
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 10,
    });
    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  };
  change= (event) =>{
    this.kmzLayeMattiasr = new google.maps.KmlLayer(event.target.value);
    this.kmzLayeMattiasr.setMap(this.map);
    this.setState({value: event.target.value});
};
  render() {
    return (<div>
      <StyledMap>
        <div id="google-map" />
      </StyledMap>
      <select  onChange={this.change}>
        <option value="https://www.google.com/maps/d/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.">Larsa</option>
        <option value="https://www.google.com/maps/d/u/0/kml?mid=1g8DMXDvq0gH-SbKzv-JR5WVTX78lni7J&nl=1&cid=mp&cv=gFJlqtzGxiQ.sv.">Jocke</option></select>
      </div>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;