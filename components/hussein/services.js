import React, { Component } from 'react';
import Styled from 'styled-components'
let Containerg = Styled.div`justify-content:center;display: flex;height: auto;flex-direction: row; flex-wrap: wrap;padding:1em 0.2em;box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:0.1em;background:white;margin-top: 0.1em;transition: 0.3s;`
let Imagcover = Styled.div` width:auto;text-align: center;background-color: #CEF2FC; position: relative; height: 15em;width: 12em;margin: 30px 10px 30px 5px;padding: 0 5%;border-radius:1.2em;`;
let Imageservice = Styled.img`height: 12em;width: 10em;max-width: 120px;position: absolute;top: -20px;left: 10px;min-height: 180px; max-width: 100%; max-height: 100%;vertical-align: middle; align-self: center;border-radius:1.2em;`;
let Imagelike = Styled.img`color:#D32F2F; position: absolute;right: 3px;
top: 3px;cursor: pointer;transition: 1s;vertical-align: middle; align-self: center;border-radius:1.2em;`;
let Imagedislike = Styled.img`color:#D32F2F; position: absolute;right: 3px;
top: 3px;cursor: pointer;transition: 1s;vertical-align: middle; align-self: center;border-radius:1.2em;`;
let DivInfo = Styled.div`height: 4em;
width: 100%;
position: absolute;
top: 75%;
left:0%;
background-color:transparent;border-radius:1.2em;justify-content: center;`;
let Servicestit = Styled.text`font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;color:#0f75bc;text-decoration:none;`;
let Price = Styled.span`font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0px 0.5em;color:#ff9800;text-decoration:none;`;

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }
    isLiked() {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        let like = null;
        if (this.state.liked) {
            like = <Imagelike onClick={() => { this.isLiked() }} src={require('./assesst/2.png')} />
        } else {
            like = <Imagedislike onClick={() => { this.isLiked() }} src={require('./assesst/1.png')} />
        }
        return (

            <Containerg>
                <Imagcover>
                    <Imageservice src={require('./services/WashDrFold0.jpg')} alt='carpet' />
                    {like}
                    <DivInfo>
                        <Servicestit>
                            Wash Dry and Fold
                    <br></br>
                        </Servicestit>
                        <Price>
                            $10 /per Kg
                 </Price>
                    </DivInfo>
                </Imagcover>
                <Imagcover>
                    <Imageservice src={require('./services/dry-clean.jpg')} alt='carpet' />
                    {like}
                    <DivInfo>
                        <Servicestit>
                            Dry Cleaning
                    <br></br>
                        </Servicestit>
                        <Price>
                            $12 /per Kg
                 </Price>
                    </DivInfo>
                </Imagcover>
                <Imagcover>
                    <Imageservice src={require('./services/carpet-dry-cleaning.jpg')} alt='carpet' />
                    {like}
                    <DivInfo>
                        <Servicestit>
                           Carpet Dry Cleaning
                    <br></br>
                        </Servicestit>
                        <Price>
                            $20 /per Kg
                 </Price>
                    </DivInfo>
                </Imagcover>
                <Imagcover>
                    <Imageservice src={require('./services/mattress-cleaning.jpg')} alt='carpet' />
                    {like}
                    <DivInfo>
                        <Servicestit>
                           Mattress Dry Cleaning
                    <br></br>
                        </Servicestit>
                        <Price>
                            $25 /per Kg
                 </Price>
                    </DivInfo>
                </Imagcover>
            </Containerg>
        );
    }
}

export default Services;