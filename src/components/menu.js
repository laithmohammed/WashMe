import React from 'react';
import Styled from 'styled-components'
import Params from './params';

let Container = Styled.div `position:fixed;top:0;left:-4em;width:3em;height:100%;background-color:white;border-right:1px solid black;z-index:200;padding:0 0.5em;
                            display:flex;align-items:center;justify-content:flex-start;flex-direction: column;transition: left 0.25s;
                            -webkit-transition: left 0.25s;`;
let Icon      = Styled.img `width:100%;`
let MenuButton= Styled.div `position:fixed;top:80%;margin-left:3.8em;width:3em;height:3em;border-top-right-radius:1em;border-bottom-right-radius:1em;
                            background-color:white;border:1px solid black;border-left:unset;padding:0.5em;padding-right:0.7em;`;

class MenuBar extends React.Component {
    constructor(){
        super();
        this.state = {
            Icon : [],
            set  : [<Icon src={require('../assets/icons/logouthold.svg')} alt='log out' onClick={e=>this.logOut(e)}/>]
        }
    }
    componentDidMount(){
        this.onMove(document.getElementById('MenuBottun'));
        fetch(`${Params.originServer}/checkPermit/${this.getCookie('X-auth-token')}`)
        .then(res => res.json()).then(data=>{
          if (data.authorized === "valid token") {
            this.setState({ Icon : [this.state.set[0]] });
          } else {
            this.setState({ Icon : [] });
          }
        })
        .catch(err => {
          this.setState({ Icon : [] });
        });
    }
    setCookie(cname, cvalue = 'logout', exdays = 365) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(window.document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    onMove(element){
        var pos2 = 0, pos4 = 0;
        element.onmousedown = setLoc;
        element.ontouchstart = setLoc;        
        function setLoc(e){
            pos4 = e.clientY;
            document.onmouseup = stopDragMouse;
            document.onmousemove = startDragMouse;
            document.ontouchend = stopDragTouch;
            document.ontouchmove = startDragTouch;
        }
        function startDragMouse(e){
            pos2 = pos4 - e.clientY;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
        }
        function startDragTouch(e){
            pos2 = pos4 - Math.floor(e.touches[0].clientY);
            pos4 = Math.floor(e.touches[0].clientY);
            element.style.top = (element.offsetTop - pos2) + "px";
        }
        function stopDragMouse(e){
            document.onmouseup = null;
            document.onmousemove = null;
        }
        function stopDragTouch(e){
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
    sliding(e){
        if(parseInt(e.target.title) === 0){
            document.getElementById('MenuBar').style.left = '-4em';
            document.getElementById('MenuBottunIcon').title = 1;
        }else{
            document.getElementById('MenuBar').style.left = '0em';
            document.getElementById('MenuBottunIcon').title = 0;
        }
    }
    logOut() {
        fetch(`${Params.originServer}/logout/${this.getCookie('X-auth-token')}`)
        .then(res=>{
            if(res.status === 200){
                this.setCookie('X-auth-token');
                window.location.reload();
            }
        })
    }
  render() {
    return (
    <Container id='MenuBar'>
        <MenuButton id='MenuBottun' >
            <Icon src={require('../assets/icons/menulines.svg')} alt='menu lines' id='MenuBottunIcon' onClick={(e)=>{this.sliding(e)}} title='1' />
        </MenuButton>
        {this.state.Icon.map((icon,i)=>{ return <React.Fragment key={i}>{icon}</React.Fragment> })}
    </Container>
    );
  }
}
export default MenuBar;