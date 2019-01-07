
import React, { Component } from 'react';
import Styled from 'styled-components'
import BodyBackground from '../background'
import 'babel-polyfill';
import NavBar from './Navbar'
import Services from './services'
import About from './aboutus'
import Review from './review'
import img from './assesst/headerback.jpg';
let Container = Styled.div`overflow:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);  height: 100vh;width:100%;max-width:60em;`;
let Headerbackground = Styled.div`width:100%;max-width:80em;background-image: url(${img});height:250px;background-position: center;background-size: cover;background-repeat: no-repeat;`;
let Titele = Styled.div`display: flex; height:30px;flex-direction: row;align-items: center;justify-content: space-between;opacity: 0.5;padding: 15px;background-color: #000;border-radius: 10px;`;
let ImgMenu   = Styled.img `height:1.5em;cursor:pointer;`;
let Nameservice  = Styled.div `width:auto;padding:1em 1.5em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white; margin-top: 0.5em;`
let Textabout = Styled.text `font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFFFFF;;padding:0 1.6em;margin-right: 50%;`;
let NameWashme = Styled.text `font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding 0px 0.5em;color:#0f75bc;text-decoration:none;`;
let LocationWashme = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding 0px 0.5em;color:#000;text-decoration:none;`;
let AwayLocation = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.1em;font-weight:bold;padding 0px 0.5em;color:#13a892;text-decoration:none;`;

let LetGet = Styled.span`font-family: 'Signika', sans-serif;font-size:2em;`;
let LetDes = Styled.p`font-family: 'Noto Sans', sans-serif;font-size:1.4;color:#6e6e70;padding:0 1.6em;`;
let LoginBut = Styled.div`width:80%;max-width:20em;text-align:center;padding:0.6em 0em;background:linear-gradient(#25aae1,#0f75bc);
                            font-family: 'Noto Sans', sans-serif;border-radius:1.2em;color:black;cursor:pointer;font-weight:bold;`;
let CreateBut = Styled.div`width:80%;max-width:20em;text-align:center;padding:0.6em 0em;background-color:white;font-family: 'Noto Sans', sans-serif;
                            border-radius:1.2em;cursor:pointer;border:1px solid black;margin-top:1.4em;font-weight:bold;`;
                            let ImgButton = Styled.img `width:5em;position:absolute;bottom:-2.5em;left:50%;transform:translate(-50%);cursor:pointer;`;
                            let TextCon   = Styled.div `width:100%;text-align:center;position:absolute;bottom:-5em;`;
                            let LoginSpan = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.2em;`;
                            let LoginWord = Styled.a `font-family: 'Noto Sans', sans-serif;font-size:1.2em;font-weight:bold;padding 0px 0.5em;color:#0f75bc;text-decoration:none;text-shadow: 0 0 4px #ffffff;`;
                            let SelectCatogay=Services;
                            let ActiveTab='Services';

class AboutHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Active:'Services'
        };
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }
    onCategorySelect (Catogary){
        if(Catogary=='Services')
        {
            SelectCatogay=Services;
            ActiveTab='Services'
        }
        if(Catogary=='About')
        {
            SelectCatogay=About;
            ActiveTab='About'

        }
        if(Catogary=='Review')
        {
            SelectCatogay=Review;
            ActiveTab='Review'

        }
        this.setState({
            Active:ActiveTab
        });
      }
    render() {
        return (
            <React.Fragment>
                <BodyBackground context={
                           <Container>
                              < Headerbackground>
                              <Titele>
                              <ImgMenu src={require('./assesst/Menu (3).svg')} alt='menu'/>
                             < Textabout> About Us</ Textabout>
                              </Titele>
                              </Headerbackground>
                              <Nameservice>
                              <NameWashme>
                                  WashMe It Laundry Services
                              </NameWashme>
                              <LocationWashme>
                                  <br></br>
                              Baghdad Street /DIS. 734 ST. 37 H.N.663/10<AwayLocation>-3Km Away</AwayLocation>
                              </LocationWashme>
                              < Textabout> About Us</ Textabout>
                              </Nameservice>
                              <NavBar onFilterClick={this.onCategorySelect} activeTab={this.state.Active}/>
{<SelectCatogay></SelectCatogay>}
                              </Container>
} />
            </React.Fragment>
        );
    }
}

export default AboutHeader;