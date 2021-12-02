
import React from "react";
import StyledMap from "./index.css";
import Container from "./container.css";

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
    setTimeout(() => {
      this.handleAttachGoogleMap();
    }, 2000);
   
  }

  componentWillUnmount() {  document.body.classList.remove("is-map"); }

  handleAttachGoogleMap = () => {
    const { defaultCenter,mapStyle, currentMap} = this.state;
    //this.kmzLayeMattiasr = new google.maps.KmlLayer(this.state.currentMap);
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 15,
      mapTypeId: 'satellite'
    });
    this.map.set('styles',mapStyle);
    this.kmzLayeMattiasr = new google.maps.KmlLayer(currentMap, {
      suppressInfoWindows: false,
      preserveViewport: false,
      map: this.map
    });

  };
  change= (event) =>{
    const { defaultCenter,mapStyle } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 100,
      mapTypeId: 'satellite'
    });
    this.map.set('styles',mapStyle);
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
    return (<Container>
      <StyledMap>
       
<iframe src="https://www.google.com/maps/d/embed?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&ehbc=2E312F" width="640" height="480"></iframe>
      </StyledMap>
      <select  style={{display:"flex",margin:'10px auto',padding:'10px'}} onChange={this.change}>
        <option value="https://www.google.com/maps/d/u/0/kml?mid=1VeRAB3VxhihKjIroI-5r0Gt922ebT57c&nl=1&forcekml=1">Larsa</option>
        <option value="https://www.google.com/maps/d/u/0/kml?mid=1g8DMXDvq0gH-SbKzv-JR5WVTX78lni7J&nl=1&forcekml=1">Annat test</option></select>
      </Container>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;
