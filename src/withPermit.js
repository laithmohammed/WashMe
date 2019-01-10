import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Params from './components/params';

export default function withPermit(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
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
    componentDidMount() {
      fetch(`${Params.originServer}/checkPermit/${this.getCookie('X-auth-token')}`)
        .then(res => res.json()).then(data=>{
          if (data.authorized === "valid token") {
            this.setState({ loading: false, redirect: false });
          } else {
            this.setState({ loading: false, redirect: true });
          }
        })
        .catch(err => {
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      const { loading, redirect } = this.state;
      let view = <img src={require('./assets/icons/loader.svg')} alt='loader' style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'4em',height:'4em'}}/>
      if (!loading) {
        if (redirect) {
          view = <Redirect to="/login" />
        } else {
          view = <ComponentToProtect {...this.props} />
        }
      }
      return (
        <React.Fragment>
          { view }
        </React.Fragment>
      );
    }
  }
}