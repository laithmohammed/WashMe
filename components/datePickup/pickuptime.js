
import React, { Component } from 'react';
import Styled from 'styled-components'
import BodyBackground from '../background'
import ReactWeeklyDayPicker from './index';
import 'babel-polyfill';
import Gallery from './time'
let Container = Styled.div`overflow:overlay;height:100vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:60em;`;
let NatDiv = Styled.div`width:100%;background-color:#fafafa; padding: 0.2em 0.2em;border-radius: 0.3em;`;
let DayPickerContainer = Styled.div`width:100%;background-color:#fafafa; display: block;position: relative;padding: 0px;border-radius: 0.3em;`;
let Titele = Styled.div`height:2.5em;align-items: center;text-align:center;opacity: 1;justify-content: center;background: #0f75bc;border-radius: 0.3em;`;
let DivRow = Styled.div`background-color:#ffff;height: auto;flex-direction: row; flex-wrap: wrap;justify-content: space-between; width:100%;text-align: left;border-radius:0.5em;display: flex;clear: both;margin: 0.2em 0em;`;
let Text = Styled.text`font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFF;;padding:0 1.6em;`;
let TitelText = Styled.text`color:#0f75bc;font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding: 1em 0.1em 0 1em;text-decoration:none;`;
let Cover = Styled.div`width:100%;text-align: left;background-color: #FFF;border-radius:0.5em;`;
let ImgButton = Styled.img`width:5em;position:relative;cursor:pointer;`;
let DivButton = Styled.div`background-color:#ffff;height: auto;flex-direction: row; flex-wrap: wrap;justify-content: center; width:100%;text-align: center;border-radius:0.5em;display: flex;clear: both;margin: 0.2em 0em;`;
let SelectePickupdate = ''
let SelecteDeliverydate = ''
class PickupDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            Pickuptime: "",
            Deliverytime: ""
        };
        this.onClick = this.onClick.bind(this)
        this.onClickDelivry = this.onClickDelivry.bind(this);
    }
    onTimeUpdatePickuptime(time) {
        this.setState({
            Pickuptime: time
        })
        alert(time)
    };
    onTimeUpdateDeliverytime(time) {
        this.setState({
            Deliverytime: time
        })
        alert(time)
    };

    onClick(date) {
        var dateChosen = date[0];
        SelectePickupdate = dateChosen;
        alert(dateChosen)
    };
    onClickDelivry(date) {
        var dateChosen = date[0];
        SelecteDeliverydate = dateChosen;
        alert(dateChosen)
    };

    render() {
        return (
            <React.Fragment>
                <BodyBackground context={
                    <Container>
                        <Titele><Text>  Schedule Pickup</Text></Titele>
                        <NatDiv>
                            <Cover>
                                <DivRow>
                                    <TitelText>Pickup Date</TitelText>
                                </DivRow>
                                <ReactWeeklyDayPicker
                                    multipleDaySelect={false}
                                    daysCount={7}
                                    selectedDays={[this.state.date]}
                                    startDay={new Date()}
                                    mobilView={window.innerWidth < 100}
                                    format={'YYYY-MM-DD'}
                                    selectDay={this.onClick.bind(this)}
                                    unavailables={{
                                        weekly: [5] //unavailable dates list for each week (0:Sunday, 1:Monday ...)
                                    }} />
                            </Cover>
                            <Cover>
                                <DivRow>
                                    <TitelText>Pickup Time Slot</TitelText>
                                    <DayPickerContainer>
                                        <Gallery date={this.state.date} timeClick={this.onTimeUpdatePickuptime.bind(this)}></Gallery>                              </DayPickerContainer>
                                </DivRow>
                            </Cover>
                        </NatDiv>
                        <NatDiv>
                            <Cover>
                                <DivRow>
                                    <TitelText>Delivery Date</TitelText>
                                </DivRow>
                                <ReactWeeklyDayPicker
                                    multipleDaySelect={false}
                                    daysCount={7}
                                    startDay={new Date()}
                                    selectedDays={[SelecteDeliverydate]}
                                    mobilView={window.innerWidth < 100}
                                    format={'YYYY-MM-DD'}
                                    selectDay={this.onClickDelivry.bind(this)}
                                    keysControlDisabled={true}
                                    playButtonEnabled={false}
                                    buttonsDisabled={true}
                                    swipeDisabled={true}
                                    unavailables={{
                                        weekly: [5] //unavailable dates list for each week (0:Sunday, 1:Monday ...)
                                    }} />
                            </Cover>
                            <Cover>
                                <DivRow>
                                    <TitelText>Pickup Time Slot</TitelText>
                                    <DayPickerContainer>
                                        <Gallery date={this.state.date} timeClick={this.onTimeUpdateDeliverytime.bind(this)}></Gallery>                              </DayPickerContainer>
                                </DivRow>
                            </Cover>

                        </NatDiv>
                        <DivButton>
                            <br /><br />
                            <label htmlFor='registerButton'>
                                <ImgButton src={require('../../assets/icons/nextarrow.svg')} alt='next arrow' />
                            </label>
                        </DivButton>

                    </Container>
                } />
            </React.Fragment>
        );
    }
}

export default PickupDate;