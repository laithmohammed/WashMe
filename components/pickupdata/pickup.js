
import React, { Component } from 'react';
import Styled from 'styled-components'
import BodyBackground from '../background'
import Map from './Map';
import 'babel-polyfill';
let Container = Styled.div`overflow:overlay;height:100vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:60em;`;
let NatDiv = Styled.div`width:100%;background-color:#fafafa; padding: 0.2em 0.2em;border-radius: 0.3em;`;
let ContantDiv = Styled.div`width:100%;height:auto;border-radius: 0.3em;`;
let Titele = Styled.div`height:2.5em;align-items: center;text-align:center;opacity: 1;justify-content: center;background: #0f75bc;border-radius: 0.3em;`;
let ImageNat = Styled.img`height: 100%;width:3em;max-width: 100%; max-height: 100%;vertical-align: middle; align-self: center;border-radius:0.3em;`;
let DivRow = Styled.div`background-color:#ffff;height: auto;flex-direction: row; flex-wrap: wrap;justify-content: space-between;; width:100%;text-align: left;border-radius:0.5em;display: flex;clear: both;margin: 0.2em 0em;`;
let DivSide = Styled.div`margin-left: 0.5em;float: left;width: auto;text-align: left;background-color: transparent;border-radius:0.5em;`;
let Divmiddle = Styled.div`display:flex;flex-direction: column;float: left;width: auto;height: 100%;text-align: left;flex:1;border-radius:0.5em;`;
let Divright = Styled.div` padding-bottom: 2em;display: flex;justify-content: center;align-items:center;width: auto;;border-radius:0.5em; margin:0 1em 0 1em;`;
let Text = Styled.text`font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFF;;padding:0 1.6em;`;
let TitelText = Styled.text`color:#13a892;font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding: 1em 0.1em 0 1em;text-decoration:none;`;
let DescriptionText = Styled.text`opacity:0.6;color:#000;font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0.0em 1em;text-decoration:none;`;
let TimeText = Styled.span`opacity:0.5;font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0px 0.5em;color:#000;text-decoration:none;`;
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