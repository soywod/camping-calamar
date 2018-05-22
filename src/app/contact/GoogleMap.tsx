import React from "react"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

const position = {
  lat: 42.32162,
  lng: 9.545187,
}

const GoogleMapComponent = withScriptjs(withGoogleMap((props) => (
  <GoogleMap defaultZoom={16} defaultCenter={position}>
    <Marker position={position} />
  </GoogleMap>
)))

export default GoogleMapComponent
