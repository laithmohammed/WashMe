import React, { Component } from 'react';
import Styled from 'styled-components'
let Containerg = Styled.div`justify-content:left;display: flex;height: auto;flex-direction: row; flex-wrap: wrap;box-shadow:0px 0px 10px rgba(0,0,0,0.1);border-radius:0.1em;background:white;margin-top: 0.1em;transition: 0.3s;`
let Cover = Styled.div` width:100%;text-align: left;background-color: transparent;border-radius:0.5em;`;
let DivText = Styled.div` width:100%;text-align: left;padding-left:1em;background-color: transparent;border-radius:0.5em;`;
let Imagelocation = Styled.img`height: 15em;width: 100%;max-height: 100%;vertical-align: middle; align-self: center;border-radius:0.5em;`;
let Servicestit = Styled.text`font-family: 'Noto Sans', sans-serif;font-size:1.8em;font-weight:bold;color:#0f75bc;text-decoration:none;margin:0.8em 0em;`;
let Text = Styled.text`font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;color:#000;text-decoration:none;margin:0.8em 0em;`;
let Time = Styled.span`font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding 0px 0.5em;color:#ff9800;text-decoration:none;margin:0.5em 0em;`;
class About extends Component {
    render() {
        return (
            <Containerg>
                <Cover>
                <Imagelocation src={require('./assesst/location.png')} alt='location' />
                </Cover>
                <DivText>
                <Servicestit>
                    WashMe Services 7Days in Week
                </Servicestit><br></br>
                <Text>
                Sunday To Thursday
                </Text><Time>08:00 Am -06:00 Pm</Time><br></br>
                <Text>
                Friday to Saturday
                </Text><Time>08:00 Am -02:00 Pm</Time><br></br>
                <Text>
                    <Servicestit>
                        Description: 
                    </Servicestit>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text><br></br><br></br>
                <Servicestit>
                        Visit our WebSite: 
                </Servicestit><Time>WWW.WashMe.com</Time><br></br><br></br><br></br>

                </DivText>
            </Containerg>
        );
    }
}

export default About;