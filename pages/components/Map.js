import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FtaXM5MyIsImEiOiJja3hhdWRtY2MwMXdpMnJvM3Fhbjd6M2RzIn0.CDx8H8rsWQotVKTbxY-PGg";

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-23.5489, -46.6388],
          zoom: 3,
        });

        addToMap('map')
      });

      const addToMap = (map) =>{
          const marker1 = new mapboxgl.Marker()
          .selLngLat([12.554729, 55.70651])
          .addTo(map);
      }

    return <Mapa id='map'></Mapa>
    
}

export default Map

const Mapa = tw.div`
    flex-1
`
