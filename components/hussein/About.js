import React from 'react';
import Styled from 'styled-components';
// import 'babel-polyfill';
import BodyBackground from '../background'
import NavBar from './Navbar'
import Services from './services'
import Aboutus from './aboutus'
import Review from './review'
import img from './assesst/headerback.jpg';
let Slider = Styled.div`width:80%;height:16em;min-height:40vh;background-image:url('${require('../../assets/imgs/slide2.jpg')}');
                                background-size:cover;background-repeat:no-repeat;background-position:center;transition: backgroundImage 2s,
                                box-shadow:inset 0 0 10px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:flex-start;padding:0px 10%;`;
let SliderDiv = Styled.div`font-family: 'Noto Sans', sans-serif;font-size:1.2em;width:100%;max-width:30em;text-align:left;
                                background-color:rgba(0,0,0,0.5);color:white;border-left:2px solid silver;padding:1em 1em;margin:10% 0;
                                transition: width 2s, padding 2s;overflow:hidden;-webkit-transition: width 2s, padding 2s;`;
let SliderText = Styled.div`width:60vw;overflow:hidden;max-width:20em;`
let Container = Styled.div`position:absolute;width:100%;height:100%;top:0px;left:0px;`
let Section = Styled.div`width:100%;background-color:rgba(255,255,255,0.9);margin-bottom:6em;`;
let Titele = Styled.div`position:absolute;width:100%;top:0px;left:0px;display: flex; height:2em;opacity: 0.9;display:left;justify-content:left;text-align:center;
                                background-color:rgba(0,0,0,0.5);color:white;border-left:2px solid silver;padding:1em 10%; ;margin:0 0; `;
let ImgMenu = Styled.img`height:1.5em;cursor:pointer;`;
let Nameservice = Styled.div`padding:1em 10%;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white; margin-top: 0.5em;display:flex;flex-direction: column;justify-content:left;text-align:left;`;
let DivItems = Styled.div`padding:1em 10%;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white; margin-top: 0.5em;`;
let Textabout = Styled.text`font-size:1.5em;font-family: 'Noto Sans', sans-serif; color: #FFFFFF;`;
let NameWashme = Styled.text`font-family: 'Signika', sans-serif;font-size:1.5em;font-weight:bold;padding: 0px 0.5em;color:#13a892;text-decoration:none;`;
let LocationWashme = Styled.span`font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;padding: 0px 0.5em;color:#000;text-decoration:none;`;
let AwayLocation = Styled.span`font-family: 'Noto Sans', sans-serif;font-size:1.1em;font-weight:bold;padding: 0px 0.5em;color:#0091EA;text-decoration:none;`;
let SelectCatogay = Services;
let Headerbackground = Styled.div`width:100%;;background-image: url(${img});height:250px;background-position: center;background-size: cover;background-repeat: no-repeat;`;

let ActiveTab = 'Services';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            Active: 'Services'
        };
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }
    componentDidMount() {
        this.slidingTest();
    }
    onCategorySelect(Catogary) {
        if (Catogary === 'Services') {
            SelectCatogay = Services;
            ActiveTab = 'Services'
        }
        if (Catogary === 'About') {
            SelectCatogay = Aboutus;
            ActiveTab = 'About'

        }
        if (Catogary === 'Review') {
            SelectCatogay = Review;
            ActiveTab = 'Review'

        }
        this.setState({
            Active: ActiveTab
        });
    }
    slidingTest() {
        let index = 0;
        let con = document.getElementById('sliderCon')
        let div = document.getElementById('slideDiv');
        let text = document.getElementById('slideText');
        let sliderText = [
            `Easily choose collection & delivery times at your convenience, including late evenings and weekends.`,
            `Our drivers bring your items to our cleaning partners, where we take atmost care to ensure great results.`,
            `Your clothes are back to you ASAP - all clean and ready for action.`
        ];
        let sliderImg = [
            require('../../assets/imgs/slide2.jpg'),
            require('../../assets/imgs/slide1.jpg'),
            require('../../assets/imgs/slide0.jpg')
        ]
        setInterval(function () {
            index++;
            if (index === 3) { index = 0; }
            div.style.width = '0em'
            div.style.padding = '1em 0em'
            setTimeout(function () {
                text.innerHTML = sliderText[index];
                div.style.width = '100%'
                div.style.padding = '1em 1em'
                con.style.backgroundImage = `url('${sliderImg[index]}')`
            }, 2000)
        }, 8000)
    }
    render() {
        return (
            <BodyBackground context={
                <React.Fragment>
                    <Container><center>
                        <Slider alt='image slider' id='sliderCon'>
                            <Titele>
                                < Textabout> About Us</ Textabout>
                            </Titele>
                            <SliderDiv id='slideDiv'>
                                <SliderText id='slideText'>Easily choose collection & delivery times at your convenience, including late evenings and weekends.</SliderText>
                            </SliderDiv>
                        </Slider>
                        <Section>
                            <Nameservice>
                                <NameWashme>
                                    Wash and Dry Cleaning It Laundry Services
                              </NameWashme>
                                <LocationWashme>
                                    <br></br>
                                    Baghdad Street /DIS. 734 ST. 37 H.N.663/10<AwayLocation>-3Km Away</AwayLocation>
                                </LocationWashme>
                            </Nameservice>
                            <DivItems>
                            <NavBar onFilterClick={this.onCategorySelect} activeTab={this.state.Active} />
                            {<SelectCatogay></SelectCatogay>}
                            </DivItems>

                        </Section>
                    </center></Container>
                </React.Fragment>
            } />
        );
    }
}
export default About;