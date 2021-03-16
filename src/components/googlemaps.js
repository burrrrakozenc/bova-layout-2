import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
    width: '100%',
    height: '100%',
    opacity: '0.8'
}

class GoogleMaps extends React.Component {
    render() {
        return (
            <div>
                <Map
                    containerStyle={mapStyles}
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: 41.03609848022461, lng: 28.981544494628906 }}
                // onClick={this.onMapClicked}
                >
                    <Marker
                        title={'.'}
                        name={'BOVAA'}
                        position={{ lat: 41.03609848022461, lng: 28.981544494628906 }} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDaSZUiK_pPV4r2LZqijtnhUZaJ3xiYXPc'
})(GoogleMaps)

// import React from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

// function Map() {
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{
//                 lat: 41.036058216234630,
//                 lng: 28.98162416199774
//             }}
//         />
//     )
// }

// const WrapperMap = withScriptjs(withGoogleMap(Map))


// export default function Mapping() {
//     return (
//         <div>
//             <WrapperMap
//                 googleMapURLrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `400px` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         </div>
//     )
// }
