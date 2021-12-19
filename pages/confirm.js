import {useEffect} from 'react'
import tw from "tailwind-styled-components";
import Map from './components/Map'

const confirm = () => {

    const getCoordinates = () =>{
        const location = "Santa Monica"

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${locatino}.json?` + 
            new URLSearchParams({
                acess_token: "pk.eyJ1Ijoia2FtaXM5MyIsImEiOiJja3hhdWRtY2MwMXdpMnJvM3Fhbjd6M2RzIn0.CDx8H8rsWQotVKTbxY-PGg",
                limit: 1
            })        
        )
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
        })
    }

    useEffect(()=>{
        getCoordinates();
    }, [])

    return (
        <Wrapper>
           <Map/> 

            <RideContainer>
                Ride a Selecton. Confirme a sua entrega.
            </RideContainer>

        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`;

const RideContainer = tw.div`
    flex-1
`