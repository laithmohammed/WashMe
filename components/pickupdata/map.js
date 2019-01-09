import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Styled from 'styled-components'
import Autocomplete from 'react-google-autocomplete';
Geocode.setApiKey("AIzaSyCX1_2Dlr5a_GRbjCgwGup1EDb3jqVeOfc");
Geocode.enableDebug();
let ImgLogo   = Styled.img `height:10em;position:absolute;top:50%;left:80%;transform:translate(-50%);cursor:pointer;`;
let Form  = Styled.form `width:auto;padding:3em 2em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white;`
let InputSubmit = Styled.input `display:none;`;
let ImgButton = Styled.img `width:5em;position:absolute;bottom:2em;left:50%;transform:translate(-50%);cursor:pointer;`;
let DivSide = Styled.div`float: left;width: 100%;text-align: left;background-color: transparent;border-radius:0.5em; margin-top: 0.5em;`;
let DivRow = Styled.div`background-color:#ffff;height: auto; width:100%;text-align: left;border-radius:0.5em;display: flex;clear: both;margin: 0.2em 0em;`;
let Span = Styled.span`font-size:1em;font-family: 'Noto Sans', sans-serif;`;
let InputText = Styled.input`width:96%;font-size:1.3em;border:unset;outline:none;border-bottom:2px solid #13a89e;padding:0px 2%;margin-bottom:0.6em;display:block;font-family: 'Noto Sans', sans-serif;test-decoration:none;
                              &:hover { border-bottom:2px solid #25aae1;}`;
let Selectedposition = '';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            area: '',
            state: '',
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPositionSelected: {
                lat: 0,
                lng: 0
            }
        }
        this.getState = this.getState.bind(this);
        this.getCity = this.getCity.bind(this);
        this.getArea = this.getArea.bind(this);
        this.getState = this.getState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
        this.onMouseoverMarker = this.onMouseoverMarker.bind(this);
        this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
        this.onPlaceSelected = this.onPlaceSelected.bind(this);
    }
    /**
     * Get the current address from the default map position and set those values in the state
     */
    componentDidMount() {
        Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);

                console.log('city', city, area, state);

                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                })
            },
            error => {
                console.error(error);
            }
        );
    };
    /**
     * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
     *
     * @param nextProps
     * @param nextState
     * @return {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if (this.props.center.lat === nextProps.center.lat) {
            return false
        }
    }
    /**
     * Get the city and set the city input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getCity(addressArray) {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };
    /**
     * Get the area and set the area input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getArea(addressArray) {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };
    /**
     * Get the address and set the address input value to the one selected
     *
     * @param addressArray
     * @return {string}
     */
    getState(addressArray) {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };
    /**
     * And function for city,state and address input
     * @param event
     */
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    /**
     * This Event triggers when the marker window is closed
     *
     * @param event
     */
    onInfoWindowClose(event) {

    };
    onMouseoverMarker(marker) {
        let x = 0
        let Xpoint = 0;
        let Ypoint = 0;
        if (marker.pa)
            Object.entries(marker.pa).map(itemArray => {

                if (x == 0) {
                    Xpoint = itemArray[1];
                    console.log(itemArray[1] + 'x')
                    x = 1;
                }
                else { Ypoint = itemArray[1]; console.log(itemArray[1] + 'y'); }



            })
        this.setState({

            markerPosition: {
                lat: Xpoint,
                lng: Ypoint
            },
            mapPosition: {
                lat: Xpoint,
                lng: Ypoint
            },
        })


    }
    /**
     * When the marker is dragged you get the lat and long using the functions available from event object.
     * Use geocode to get the address, city, area and state from the lat and lng positions.
     * And then set those values in the state.
     *
     * @param event
     */
    onMarkerDragEnd(event) {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    /**
     * When the user types an address in the search box
     * @param place
     */
    onPlaceSelected(place) {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };


    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap

                        google={this.props.google} onClick={this.onMouseoverMarker}
                        defaultZoom={this.props.zoom}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        <DivSide>
                            <Autocomplete
                                style={{
                                    width: '96%',
                                    fontSize: '1.3em',
                                    borderBottom: '2px solid #13a89e',
                                    border: 'unset',
                                    outline:'none',
                                    padding: '0px 2%',
                                    marginTop: '10px',
                                    marginBottom: '0.6em',
                                    display: 'block', fontFamily: 'Noto Sans, sans-serif',
                                    hover: 'border-bottom:2px solid #25aae1',
                                    borderBottom: '2px solid #13a89e',
                              
                                }}
                                onPlaceSelected={this.onPlaceSelected}
                                types={['(regions)']}
                            />
                            <Form>  
                            <ImgLogo src={require('../../assets/icons/washlogo.png')} alt='logo'/>   
                                <Span>Address 1</Span>
                                <InputText type='text' name='address1' value={this.state.state+'/'+this.state.city+'/'+this.state.address+"/"} />
                                <Span>Address 2</Span>
                                <InputText type='text' name='Address2' />
                                <Span>Address Title</Span>
                                <InputText type='text' name='title' />
                                <label htmlFor='registerButton'>
                                <ImgButton src={require('../../assets/icons/nextarrow.svg')} alt='next arrow'/>
                                </label>
                                <InputSubmit type='submit' name='submit' id={'registerButton'} />
                            </Form>
                        </DivSide>
                        {/* InfoWindow on top of marker */}
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                            </div>
                        </InfoWindow>
                        {/*Marker*/}
                        {Selectedposition}
                        <Marker
                            name={'Dolores park'}
                            draggable={true}
                            onDragEnd={this.onMarkerDragEnd}
                            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <Marker />
                        {/* For Auto complete Search Box */}
                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map =
                <DivRow>
                    <AsyncMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCX1_2Dlr5a_GRbjCgwGup1EDb3jqVeOfc&libraries=places"
                        loadingElement={
                            <div style={{ height: `100%`, width: '100%' }} />
                        }
                        containerElement={
                            <div style={{ width: '100%', }} />
                        }
                        mapElement={
                            <div style={{ height: `50%`, width: '100%' }} />
                        }
                    />
                </DivRow>

        } else {
            map = <div style={{ height: this.props.height }} />
        }
        return (map)
    }
}
export default Map