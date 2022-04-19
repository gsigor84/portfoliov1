import React from "react"
import { Map, Marker } from "pigeon-maps"

function MyMap() {
  return (
    <Map height={300} defaultCenter={[52.2040946, 0.1337392]} defaultZoom={13}>
      <Marker width={50} anchor={[52.2040946, 0.1337392]} />
    </Map>
  )
}

export default MyMap;