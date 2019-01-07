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
let Header   = Styled.div `display:flex;align-items:center;  align-content: flex-start;align-self: center
;width:100%;max-width:40em;background-color:#25AAE1;height :70px;color:#13a892;font-size:1.5em;margin-top:2%`
let Order    =Styled.div`display: flex;flex-wrap: nowrap;  flex-direction: row; align-items: center;height :50px;;width:100%;max-width:40em; box-shadow:0px 7px 22px -10px #111;`
let Span     = Styled.div `font-size:1em;font-family: 'Noto Sans', sans-serif ;color:white;margin-left:19%`
let Line     =Styled.div`border-Bottom:4px solid white;cursor:pointer;width:30px;height:2px;align-self: center;padding:2%;margin:2% `
let Cont     =Styled.div`width:100%;max-width:35em;text-align:left;border:1px solid gray; padding:2%;display:flex;flex-direction:row;  justify-content: space-around;`
let In       =Styled.div`padding:9%;margin:4%;   box-shadow:0px 7px 22px -10px #111;border-radius:0.3em;background:white;display:flex;flex-direction:column`;
let Details  =Styled.div`font-size:1em;font-family: 'Noto Sans', sans-serif; align-text:right;
;  height: 100%; `;
let counter=15;
 // <Img src={require('../assets/icons/tasks.svg')}/><Line/>
class Detail extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        list: [],
        
      }
    }
    back(){
     { window.location = './history' }
    }
    
    render() {
      return (
        <React.Fragment>
          <BodyBackground context={
                <Container>
                <Form>
                <Header> 
                <Line onClick={()=>this.back()}/>
                <Span>Order Details</Span>
                </Header>          
           <In>
             
           <Cont>
                <h3>Order No. #{counter}      </h3>
                time
        
                </Cont>
               
                <Cont>
              <Details><h3>Pickup Address </h3>
                lorem ipsum
             </Details>
         
              
             </Cont>
             <Cont>
              <Details><h3>Pickup date & time</h3>
                lorem ipsum
             </Details>
             </Cont>
             <Cont>
              <Details><h3>Delivary date & time</h3>
                lorem ipsum
             </Details>
             </Cont>
          

              </In>
              
             </Form>
          </Container> }/>
    
        </React.Fragment>
      );
    }
  }
  
  export default Detail;