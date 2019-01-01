import React from 'react';
import Styled from 'styled-components';
// import 'babel-polyfill';


let Header = Styled.div`flex:1;width:100%; height:7%; background-color:#0f75bc;display: inline-flex;`;
let Head = Styled.p` border:1px red solid;color:#fff; display:inline-block; margin-left: 25%;   padding:   0px;`;
let ProgressLine = Styled.div`flex:1;width:100%; height:7%; background-color:#25aae1`;
let Footer = Styled.div`    position: absolute;bottom:0px;flex:1;flex:end;width:100%; height:7%; background-color:#25aae1`;
let Sp = Styled.div` align-content: space-between;`;
let ImgButton = Styled.img` padding:10px;width:2.5rm;cursor:pointer;`;
let Cen = Styled.center`width:100%; `;

class PickUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div style={Sp}>
                <Header >
                    <ImgButton src={require('../assets/icons/backarrow.svg')} alt='back arrow' />
                    <center style={Cen}> <Head>Schedule Pickup</Head></center></Header>
                <ProgressLine ><Head>progress</Head></ProgressLine>
                {this.props.context}
                <Footer ><Head>foteer</Head></Footer>

            </div>
        );
    }
}


export default PickUp;