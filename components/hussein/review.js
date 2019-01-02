import React, { Component } from 'react';
import Styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
let Tstar1=10;
let total = 0;
let Containerg = Styled.div`justify-content:left;display: flex;height: auto;flex-direction: row; flex-wrap: wrap;box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:0.1em;background:white;margin-top: 0.1em;transition: 0.3s;`
let Cover = Styled.div` width:100%;text-align: left;background-color: #FAFAFaFA;border-radius:0.5em;`;
let DivText = Styled.div` width:100%;text-align: left;background-color: transparent;border-radius:0.5em; margin-top: 0.5em;`;
let DivRow = Styled.div` width:100%;text-align: left;background-color: transparent;border-radius:0.5em;display: table;clear: both;margin: 0.5em 1em;`;
let DivSide = Styled.div`float: left;width: 15%;margin-top:10px;text-align: left;background-color: transparent;border-radius:0.5em; margin-top: 0.5em;`;
let Divmiddle = Styled.div`float: left;width: 70%;margin-top:10px;height: 1em;text-align: left;`;
let Divright = Styled.div`padding:0.3em;`;
let Divbarcontainer = Styled.div`width: 100%;height: 100%;text-align: center;background-color: #000;color: white;background-color: #CEF2FC;border-radius:0.5em;`;
let Divbar1 = Styled.div`width: ${Tstar1}%;background-color: #f44336;color: white;height: 100%;border-radius:0.5em;`;
let Divbar2 = Styled.div`width: ${Tstar1}%;background-color: #ff9800;color: white;height: 100%;border-radius:0.5em;`;
let Divbar3 = Styled.div`width: ${Tstar1}%;background-color: #00bcd4;color: white;height: 100%;border-radius:0.5em;`;
let Divbar4 = Styled.div`width: ${Tstar1}%;background-color: #2196F3;color: white;height: 100%;border-radius:0.5em;`;
let Divbar5 = Styled.div`width: ${Tstar1}%;background-color: #4CAF50;color: white;height: 100%;border-radius:0.5em;`;
let Servicestit = Styled.text`padding: 0px 0.5em;font-family: 'Noto Sans', sans-serif;font-size:1.5em;font-weight:bold;color:#0f75bc;text-decoration:none;margin:0.8em 0.8em;`;
let Text = Styled.text`font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;color:#000;text-decoration:none;margin:0.8em 0em;`;
let Number = Styled.text`font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;color:#000;text-decoration:none;margin:0.1em 1em;`;
let Time = Styled.span`font-family: 'Noto Sans', sans-serif;font-size:0.8em;font-weight:bold;padding: 0px 0.5em;color:#ff9800;text-decoration:none;margin:0.5em 0em;`;
class Review extends Component {

    constructor() {
        super();

        this.state = {
            yourrating: 1,
            NoOneStar: 40,
            NoTwoStar: 21,
            NoThreeStar: 63,
            NoFourStar: 102,
            NoFiveStar: 180,
        };
        Tstar1=0
        total = (this.state.NoOneStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ yourrating: nextValue });
    }
    render() {
        const { yourrating } = this.state;
        return (
            <Containerg>
                <Cover>
                    <Servicestit>
                        Please Inter  your Reat  {yourrating}
                    </Servicestit>
                    <br />
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={yourrating}
                        onStarClick={this.onStarClick.bind(this)}
                    />

                </Cover>
                <DivText>

                    <Servicestit>
                        Total User Rating
                </Servicestit><br></br>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={total}
                        editing="false"

                    /><br />
                    <DivRow>
                    <div>
                            <DivSide>
                                <Text>5 star</Text>
                            </DivSide>
                            <Divmiddle>
                                < Divbarcontainer>
                                    <Divbar5 style={{width: (100*this.state.NoFiveStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))+'%'}}>
                                    </Divbar5>
                                </Divbarcontainer>
                            </Divmiddle>
                            <Divright>
                                <Number>{this.state.NoFiveStar}</Number>
                            </Divright>
                        </div>
                    <div>
                            <DivSide>
                                <Text>4 star</Text>
                            </DivSide>
                            <Divmiddle>
                                < Divbarcontainer>
                                    <Divbar4 style={{width: (100*this.state.NoFourStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))+'%'}}>
                                    </Divbar4>
                                </Divbarcontainer>
                            </Divmiddle>
                            <Divright>
                                <Number>{this.state.NoFourStar}</Number>
                            </Divright>
                        </div>
                    <div>
                            <DivSide>
                                <Text>3 star</Text>
                            </DivSide>
                            <Divmiddle>
                                < Divbarcontainer>
                                    <Divbar3 style={{width: (100*this.state.NoThreeStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))+'%'}}>
                                    </Divbar3>
                                </Divbarcontainer>
                            </Divmiddle>
                            <Divright>
                                <Number>{this.state.NoThreeStar}</Number>
                            </Divright>
                        </div>
                    <div>
                            <DivSide>
                                <Text>2 star</Text>
                            </DivSide>
                            <Divmiddle>
                                < Divbarcontainer>
                                    <Divbar2 style={{width: (100*this.state.NoTwoStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))+'%'}}>
                                    </Divbar2>
                                </Divbarcontainer>
                            </Divmiddle>
                            <Divright>
                                <Number>{this.state.NoTwoStar}</Number>
                            </Divright>
                        </div>
                        <div>
                            <DivSide>
                                <Text>1 star</Text>
                            </DivSide>
                            <Divmiddle>
                                < Divbarcontainer>
                                    <Divbar1 style={{width: (100*this.state.NoOneStar / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoTwoStar * 2 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoThreeStar * 3 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFourStar * 4 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar)) + (this.state.NoFiveStar * 5 / (this.state.NoOneStar + this.state.NoTwoStar + this.state.NoThreeStar + this.state.NoFourStar + this.state.NoFiveStar))+'%'}}>
                                    </Divbar1>
                                </Divbarcontainer>
                            </Divmiddle>
                            <Divright>
                                <Number>{this.state.NoOneStar}</Number>
                            </Divright>
                        </div>

                    </DivRow>
                    <Servicestit>
                        Visit our WebSite:
                </Servicestit><Time>WWW.WashMe.com</Time><br></br><br></br><br></br>

                </DivText>
            </Containerg>
        );
    }
}

export default Review;