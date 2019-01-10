import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Styled from 'styled-components'
let Container = Styled.div`height:20vh;position:absolute;top:50%;left:50%;width:100%;max-width:60em;`;
let NatDiv = Styled.div`height:100%;width:100%;background-color:#fafafa; padding: 0.2em 0.2em;border-radius: 0.3em;`;
let DayPickerContainer = Styled.div`width:100%;background-color:#fafafa; display: block;position: relative;padding: 0px;border-radius: 0.3em;`;
let PrevArrow = Styled.div`   width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;border-right:20px solid #0f75bc;position: absolute;top: calc(50% - 10px);left: 0px;cursor: pointer;`;
let NextArrow = Styled.div`   width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;border-left:20px solid #0f75bc;position: absolute;top: calc(50% - 10px);right: 0px;;cursor: pointer;`;
let TimeBox = Styled.div`display: flex;flex-direction: row;justify-content: space-between;`;
let Timeslotcontainer = Styled.div`display: flex;align-items: center;justify-content: center;flex-direction: column;width: 100%;margin-top: 40px;margin-bottom: 20px;padding: 0 0.8em;border:none;background: transparent;cursor: pointer;`;
let Button = Styled.button`height:2em;width:5em;cursor:pointer;width: 10em;height: 3em;text-align:center;border-radius:1em;border: 2px solid #0f75bc;color: #13a89e;background-color:#fff;;font-family: 'Noto Sans', sans-serif;font-size:1em;font-weight:bold;`;
export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
 this.onClickPickup=this.onClickPickup.bind(this);
    }

    onClickPickup (event){
        var time = event.target.value;
        this.props.timeClick(time);
      };

    galleryItems() {
        return (
            ['0800 AM-0900 AM', '1000 AM-1100  AM', '1200 PM-1300 PM','1400 PM-1500 PM','1600 PM-1700 PM','1800 PM-1900 PM','2000 PM-2100 PM'].map((item, i) => (
                <div >
                    <Button onClick={this.onClickPickup} value={item}>{item}</Button>
                </div>
            ))
        )
    };

    render() {
        const items = this.galleryItems();

        return (
            <AliceCarousel
                items={items}
                duration={400}
                autoPlay={true}
                dotsDisabled={true}
                buttonsDisabled={true}
                startIndex={1}
                mouseDragEnabled={true}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                hide='arrows'
                responsive={{
                    0: {
                        items: 1
                    },
                    512: {
                        items: 2
                    },
                    1024: {
                        items: 4
                    }
                }}
                 />
        );
    }
}
