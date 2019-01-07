
import React, { Component } from 'react';
import Styled from 'styled-components'
import BodyBackground from '../background'
import 'babel-polyfill';
let Container       = Styled.div`overflow:overlay;height:100vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:60em;`;
let NatDiv          = Styled.div`width:100%;height:auto;background-color:#fafafa; padding: 0.2em 0.2em;border-radius: 0.3em;`;
let ContantDiv      = Styled.div`width:100%;height:auto;border-radius: 0.3em;`;
let Titele          = Styled.div`height:2.5em;align-items: center;text-align:center;opacity: 1;justify-content: center;background: #0f75bc;border-radius: 0.3em;`;
let ImageNat        = Styled.img`height: 100%;width:3em;max-width: 100%; max-height: 100%;vertical-align: middle; align-self: center;border-radius:0.3em;`;
let DivRow          = Styled.div`background-color:#ffff;height: auto;flex-direction: row; flex-wrap: wrap;justify-content: space-between;; width:100%;text-align: left;border-radius:0.5em;display: flex;clear: both;margin: 0.2em 0em;`;
let DivSide         = Styled.div`margin-left: 0.5em;float: left;width: auto;text-align: left;background-color: transparent;border-radius:0.5em;`;
let Divmiddle       = Styled.div`display:flex;flex-direction: column;float: left;width: auto;height: 100%;text-align: left;flex:1;border-radius:0.5em;`;
let Divright        = Styled.div` padding-bottom: 2em;display: flex;justify-content: center;align-items:center;width: auto;;border-radius:0.5em; margin:0 1em 0 1em;`;
let Text            = Styled.text`font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFF;;padding:0 1.6em;`;
let TitelText       = Styled.text`color:#13a892;font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding: 1em 0.1em 0 1em;text-decoration:none;`;
let DescriptionText = Styled.text`opacity:0.6;color:#000;font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0.0em 1em;text-decoration:none;`;
let TimeText        = Styled.span`opacity:0.5;font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0px 0.5em;color:#000;text-decoration:none;`;
class Natification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NatData: [{
                Type: 'Cancelled',
                Titel: 'Yor order has been Cancelled',
                Description: 'You order 2017115555 has been Canvelled by You',
                TimeAdd: '09 Nov'
            }
                , {
                Type: 'Confirmed',
                Titel: 'Your order has been Confirmed',
                Description: 'Be Ready! with your clothings baggage between 04:00PM to 06:00PM on 29 November 2018',
                TimeAdd: '1hr Ago'
            }
                , {
                Type: 'SuccessDelivered',
                Titel: 'Successfully Delivred Your order',
                Description: 'Hi Your order 2017115555 has been successfully derliverd to you, Please help us to serve you more better servicess by giving feedback and rating services',
                TimeAdd: '12 Nov'
            }
                , {
                Type: 'OutDelivery',
                Titel: 'Your order is out for delivery',
                Description: 'Delivery boy will reach to you between 12:00 PM to 02:00 Pm on 10 November 2018',
                TimeAdd: '10 Nov'
            }
                , {
                Type: 'InProcess',
                Titel: 'Your order in Now in-process.',
                Description: 'Your order in is in-process, It will be shipped within 5hrs',
                TimeAdd: '10 Nov'
            }
                , {
                Type: 'Pickedup',
                Titel: 'You baggage has been picked up',
                Description: 'You baggage has been picked up successfuly. it will be delivered to you after 6 hrs',
                TimeAdd: '10 Nov'
            }, {
                Type: 'OutPickup',
                Titel: 'Layndry boys is Now out for pickup',
                Description: 'Our srtaff member will reach to you between 10:00AM to 12:00PM on 10 Novermber 2018',
                TimeAdd: '09 Nov'
            }]
        };
        this.RendorNatification = this.RendorNatification.bind(this);
    }
    RendorNatification() {
        let IconOath = '';
        return (<React.Fragment>{
            this.state.NatData.map((item, index) => {
                if (item.Type == 'Cancelled') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/Cancelled.svg')} alt={item.Type} />
                }
                else if (item.Type == 'Confirmed') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/Confirmed.svg')} alt={item.Type} />
                }
                else if (item.Type == 'SuccessDelivered') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/SuccessDelivered.svg')} alt={item.Type} />
                }
                else if (item.Type == 'OutDelivery') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/OutDelivery.svg')} alt={item.Type} />
                }
                else if (item.Type == 'InProcess') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/InProcess.svg')} alt={item.Type} />
                }
                else if (item.Type == 'OutPickup') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/OutPickup.svg')} alt={item.Type} />
                }
                else if (item.Type == 'Pickedup') {
                    IconOath = <ImageNat key={'Image' + index} src={require('./Naticons/Pickedup.svg')} alt={item.Type} />
                }

                return (
                    <DivRow key={'Row' + index}><DivSide key={'Side' + index}>
                        {IconOath}
                    </DivSide>
                        <Divmiddle key={'middle' + index}>
                            <TitelText key={'Titel' + index}> {item.Titel}</TitelText>
                            <DescriptionText key={'Description' + index}>
                                {item.Description}
                            </DescriptionText>
                        </Divmiddle>
                        <Divright>
                            <TimeText key={'Time' + index}>{item.TimeAdd}</TimeText>
                        </Divright>
                    </DivRow>
                )
            })}</React.Fragment>
        )

    }
    render() {
        return (
            <React.Fragment>
                <BodyBackground context={
                    <Container>
                        <Titele><Text>Natifcation User</Text></Titele>
                        <NatDiv>
                            {this.RendorNatification()}
                        </NatDiv>
                    </Container>
                } />
            </React.Fragment>
        );
    }
}

export default Natification;