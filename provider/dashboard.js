import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

import BodyBackground from '../components/background'

let Container = Styled.div `position:absolute;top:0px;left:0px;width:100%;height:100%;`;
let Label     = Styled.div `display:flex;align-items:center;justify-content:center;width:100%;max-width:40em;flex-direction:column;
                            transform:translateX(-50%);left:50%;position:absolute;z-index:11;text-align:center;`;
let Graphic   = Styled.img `width:50%;max-width:30em;padding-top:4em;`;
let Header    = Styled.span `font-family: 'Signika', sans-serif;font-size:1.5em;display:flex; `;
let TestDes   = Styled.span `font-family: 'Noto Sans', sans-serif;font-size:1.4;color:#6e6e70;padding:0 1.6em;max-width:30em;height:5em;`;
let DotCon    = Styled.div `display:flex;`;
let Dot       = Styled.div `width:1em;height:1em;border-radius:50%;margin:0px 0.3em;cursor:pointer;
                            &:hover { background-color:#13a892; }`;
let BottunNext= Styled.img `width:5em;margin:2em 0px;cursor:pointer;box-shadow:0 0 10px rgba(0,0,0,0.5);border-radius:50%;`;
let Shadow    = Styled.img `position:absolute;left:0px;bottom:0px;width:30vw;z-index:10;`;
let Stack=Styled.div`width:50%;max-width:30em;padding-top:4em;cursor:pointer;display:flex;flex-direction:row;`
let Img      = Styled.img `width:20%;max-width:30em;padding-top:4em;transform:translate(-30%); align-self: center;margin:10px`;

class Dash extends React.Component {
  constructor(){ 
    super();
    this.state = {
      index       : 0,
      icon        : [
        require('../assets/icons/chooseyourclothes.svg'),
        require('../assets/icons/schedulepickup.svg'),
        require('../assets/icons/topwashing.svg'),
        require('../assets/icons/fastdelivery.svg'),
        require('../assets/icons/boxdelivery.svg')
      ],
      title       : [ 'Choose your cloths',
                     'scedule pickup',
                     'being washed',
                     'on the way to your delivery location',
                     'delivered'
                    ],
     /* slideDot    : [
        ['#13a892','#efefef','#efefef','#efefef','#efefef'],
        ['#efefef','#13a892','#efefef','#efefef','#efefef'],
        ['#efefef','#efefef','#13a892','#efefef','#efefef'],
        ['#efefef','#efefef','#efefef','#13a892','#efefef'],
        ['#efefef','#efefef','#efefef','#efefef','#13a892'],
      ],*/
      
     
      defaultIcon : require('../assets/icons/chooseyourclothes.svg'),
      defaultTitle: 'Choose your cloths',
      slideDotDef : ['#13a892','#efefef','#efefef','#efefef','#efefef']
        }
  }

  dotShow(title){
    let index = parseInt(title)
    this.setState({
      index       : index,
      defaultIcon : this.state.icon[index],
      defaultTitle: this.state.title[index]
     // slideDotDef : this.state.slideDot[index],
    })
  }
 

  changeData(){
    let index = this.state.index;
    index ++;
    if(index == 5){ window.location = './dash' }
    else{
      this.setState({
        index       : index,
        defaultIcon : this.state.icon[index],
        defaultTitle: this.state.title[index],
        //slideDotDef : this.state.slideDot[index],
      })
    }
  }
    /* 
                <Img src={require('../assets/icons/topwashing.svg')}/>
                <Img src={require('../assets/icons/fastdelivery.svg')}/>  
                <Img src={require('../assets/icons/boxdelivery.svg')}/> 
                 <Dot style={{backgroundColor:this.state.slideDotDef[3]}} title='4' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>
              <Dot style={{backgroundColor:this.state.slideDotDef[4]}} title='5' onClick={(e)=>{this.dotShow(e.target.title)}}> </Dot>         */

  render() {
    return (
      <BodyBackground context={
        <Container>
          <Label>
          <TestDes>hello there</TestDes>
             <Stack>
               
              <Img src={require('../assets/icons/chooseyourclothes.svg')} title='0' onClick={(e)=>{this.dotShow(e.target.title)}}/> 
              
              <Img src={require('../assets/icons/schedulepickup.svg')}    title='1' onClick={(e)=>{this.dotShow(e.target.title,e.target.state)}}/>
              <Img Img src={require('../assets/icons/topwashing.svg')}    title='2' onClick={(e)=>{this.dotShow(e.target.title)}}/>
              <Img Img src={require('../assets/icons/fastdelivery.svg')}  title='3' onClick={(e)=>{this.dotShow(e.target.title)}}/>
              <Img Img src={require('../assets/icons/boxdelivery.svg')}   title='4' onClick={(e)=>{this.dotShow(e.target.title)}}/>
        
           </Stack>
           <Stack>
           <TestDes>{this.state.title}</TestDes>

           </Stack>
          </Label>
        
        </Container>
      } />
    );
  }
}
export default Dash;