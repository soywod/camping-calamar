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

function getGoogleMapURL() {
  const apiKey = "AIzaSyCmss3qELP65PTTFuG8zcePWgkRvvVi8ck"
  const baseURL = "https://maps.googleapis.com/maps/api/js"
  const params = `key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`

  return `${baseURL}?${params}`
}

export default GoogleMapComponent
export {getGoogleMapURL}
