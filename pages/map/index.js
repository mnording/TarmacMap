import React from "react";
import StyledMap from "./index.css";

class Map extends React.Component {
  state = {
    defaultCenter: {
     
      lat:  59.37215372800212,
      lng: 16.51307543068856,
    },
    currentMap: 'https://www.google.com/maps/d/u/0/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&forcekml=1',
   mapStyle:  [{
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  }],
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
   
    this.kmzLayeMattiasr = new google.maps.KmlLayer(currentMap, {
      suppressInfoWindows: false,
      preserveViewport: false,
      map: this.map
    });
   // this.kmzLayeMattiasr.setMap(this.map);
  };
  handleAttachGoogleMap = () => {
    const { defaultCenter,mapStyle } = this.state;
    //this.kmzLayeMattiasr = new google.maps.KmlLayer(this.state.currentMap);
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 15,
    });
    this.map.set('styles',mapStyle);
    setTimeout(() => {
      this.handleDrawMarkers();
    }, 2000);
  };
  change= (event) =>{
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 100,
    });
    this.kmzLayeMattiasr.setMap(null);
    console.log("settings map to "+event.target.value)
    this.kmzLayeMattiasr = new google.maps.KmlLayer(event.target.value, {
      suppressInfoWindows: false,
      preserveViewport: false,
      map: this.map
    });
;
    
   
};
  render() {
    return (<div>
      <StyledMap>
        <div id="google-map" />
      </StyledMap>
      <select  style={{display:"flex",margin:'0 auto',padding:'10px'}} onChange={this.change}>
        <option value="https://www.google.com/maps/d/u/0/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&forcekml=1">Larsa</option>
        <option value="https://www.google.com/maps/d/u/0/kml?mid=1g8DMXDvq0gH-SbKzv-JR5WVTX78lni7J&nl=1&forcekml=1">Jocke</option></select>
      </div>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;