import React, { Component } from 'react';
import './main.css';
import Styled from 'styled-components'
let NavBardiv = Styled.div`width:auto;padding:1em 1.5em;box-shadow:0px 0px 10px rgba(0,0,0,0.3);border-radius:0.3em;background:white; margin-top: 0.5em; flex: 3; display: flex; flex-direction: row; justify-content: space-between;`;
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilter: 'Services',
        };
    }
    onFilterSelect(category) {
        this.props.onFilterClick(category);
      }
    render() {
        let style = 'Nomal' + (this.props.activeTab == 'Services' ? 'ButtonActive' : '');
        let Aboutstyel = 'Nomal' + (this.props.activeTab == 'About' ? 'ButtonActive' : '');
        let Reviewsstyel = 'Nomal' + (this.props.activeTab == 'Review' ? 'ButtonActive' : '');
            return (
                <NavBardiv>
                    <button className={style} onClick={() => this.onFilterSelect('Services')}>Services</button>
                    <button className={Aboutstyel} onClick={() => this.onFilterSelect('About')}>About</button>
                    <button className={Reviewsstyel} onClick={() => this.onFilterSelect('Review')}>Reviews</button>
                </NavBardiv>
            );
       
        

    }
}

export default NavBar;