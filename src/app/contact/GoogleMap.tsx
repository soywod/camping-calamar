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
  const key = "AIzaSyAAidGfYO01HZnXIrpxdt_066AHfn2JGLI"
  const baseURL = "https://maps.googleapis.com/maps/api/js"
  const params = `key=${key}&v=3.exp&libraries=geometry,drawing,places`

  return `${baseURL}?${params}`
}

export default GoogleMapComponent
export {getGoogleMapURL}
