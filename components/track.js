import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';
import BodyBackground from './background'
// duha

//let Form  = Styled.form `width:auto;padding:3em 2em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:#E8E8E8;`

let Container = Styled.div `top:40%;left:40%;transform:translate(-40%,-40%);position:absolute;width:100%;max-width:30em; height:100%;  min-width: 10em;
`


//let Container = Styled.div `position:absolute;top:0px;left:0px;width:100%;height:100%;`;
let Form     = Styled.div `display:flex;align-items:center;justify-content:center;width:100%;max-width:40em;flex-direction:column; background:#E8E8E8;
                            transform:translateX(-50%);left:50%;position:absolute;z-index:11;text-align:center;`;
let Header   = Styled.div `display:flex;align-items:center;  align-content: flex-start;
;width:100%;max-width:40em;background-color:#25AAE1;height :100px;color:#25AAE1;font-size:1em;`
let Order    =Styled.div`display: flex;flex-wrap: nowrap;  flex-direction: row; align-items: center;height :50px;;width:100%;max-width:40em; box-shadow:0px 7px 22px -10px #111;`
let Span     = Styled.div `font-size:1em;font-family: 'Noto Sans', sans-serif; cursor:pointer;align-self: center; ;background:white; height: 92%; flex:1; &:hover {color: #13a892;border-width:4px;border-bottom-style:solid;} `
let Img      = Styled.img `width:10%;height:10%;transform:translate(-40%); align-self: center;margin:10px`;
let Line     =Styled.div`border-Bottom:4px solid gray;width:30px;height:2px;align-self: center;padding:2%;margin-right:2% `
let Cont     =Styled.div`width:100%;max-width:35em;text-align:left;border:1px solid gray; padding:2%;display:flex;flex-direction:row;  justify-content: space-around;`
let In       =Styled.div`padding:9%;margin:4%;   box-shadow:0px 7px 22px -10px #111;border-radius:0.3em;background:white;display:flex;flex-direction:column`;
let Button   =Styled.button`width: 135px;height:35px;border-radius: 10px;border: 1px solid gray;box-shadow: 0 0px 15px rgba(0, 0, 0, 0.16);margin: 18px;padding: 10px;
background:white;flex: 1;align-items:right;&:focus {  box-shadow: 0 0px 15px ##13a892;};cursor:pointer;`;
let Details  =Styled.div`font-size:1em;font-family: 'Noto Sans', sans-serif; align-text:right;
;  height: 100%; `;
let counter=15;
class Track extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        list: [],
        
      }
    }
    details(){
      { window.location = './detail' }
    }
    pastData(){
     { window.location = './history' }
    }
    orderData(){
      { window.location = './track' }
    }
    render() {
      return (
        <React.Fragment>
          <BodyBackground context={
                <Container>
                <Form>
                <Header> </Header>
                <Order >
           <Span onClick={()=>this.orderData()} style={{color: '#13a892',borderWidth:'4px',borderBottomStyle:'solid'}}>Order Details</Span>
            <Span onClick={()=>this.pastData()} >Past Orders </Span></Order>
            
           <In>
             <Cont>
                 <Details><h3>Order No. #{counter}         $14</h3>
             </Details>
              </Cont>
              <Cont>
              <Img src={require('../assets/icons/tasks.svg')}/><Line/>
               <Img src={require('../assets/icons/schedulepickup.svg')}/><Line/> 
                <Img src={require('../assets/icons/topwashing.svg')}/><Line/>   
                <Img src={require('../assets/icons/fastdelivery.svg')}/> <Line/> 
                <Img src={require('../assets/icons/boxdelivery.svg')}/> 
                
              </Cont>
              
              <Cont>
              <Button>Cancel Order</Button>
              <Button onClick={()=>this.details()}>View Details</Button></Cont>
              </In>
              
             </Form>
          </Container> }/>
    
        </React.Fragment>
      );
    }
  }
  
  export default Track;