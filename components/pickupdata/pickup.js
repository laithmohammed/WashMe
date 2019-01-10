
import React, { Component } from 'react';
import Styled from 'styled-components'
import BodyBackground from '../background'
import Map from './Map';
import 'babel-polyfill';
let Container = Styled.div`overflow:overlay;height:100vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:60em;`;
let NatDiv = Styled.div`width:100%;background-color:#fafafa; padding: 0.2em 0.2em;border-radius: 0.3em;`;
let Titele = Styled.div`height:2.5em;align-items: center;text-align:center;opacity: 1;justify-content: center;background: #0f75bc;border-radius: 0.3em;`;
let Text = Styled.text`font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFF;;padding:0 1.6em;`;
let Cover = Styled.div` width:100%;text-align: left;background-color: transparent;border-radius:0.5em;`;
class Pickup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <BodyBackground context={
                    <Container>
                        <Titele><Text>  Schedule Pickup</Text></Titele>
                        <NatDiv>
                            <Cover>
                                <Map
                                    google={this.props.google}
                                    center={{ lat: 33.297541, lng: 44.438440 }}
                                    height='300px'
                                    width= '100%'
                                    zoom={15}
                                />
                            </Cover>
                        </NatDiv>
                    </Container>
                } />
            </React.Fragment>
        );
    }
}

export default Pickup;