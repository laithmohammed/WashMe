import React from 'react';
import Styled from 'styled-components';


let Header = Styled.div`flex:1;width:100%; height:7%; background-color:#0f75bc;display: inline-flex;`;
let Head = Styled.p` font-size: 1.1rem; color:#fff; display:inline-block;  width:100%;`;
let ProgressLine = Styled.div`flex:1;width:100%; height:9%; background-color:#25aae1`;
let Footer = Styled.div`    position: absolute;bottom:0px;flex:1;flex:end;width:100%; height:7%; background-color:#25aae1`;
let Sp = Styled.div` align-content: space-between;`;
let ImgButton = Styled.img` padding:10px;width:2.5rm;cursor:pointer;`;
let Img = Styled.img` width:36px;cursor:pointer;background-color:white;border-radius: 22px; padding: 3px;`;
let Cen = Styled.div`  width:100%;`;
const Styleds = {
    Body: { position: 'absolute', width: '100%', top: '0px', left: '0px', right: '0px', bottom: '0px', padding: '0px', margin: '0px' },
};

class PickUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            bar: [0.5, 0.5, 0.5, 0.5,]
        }
    }
    opacit(loc) {
        if (loc == 'location')
            this.setState({
                bar: [1, 0.5, 0.5, 0.5]
            })
            if (loc == 'payment')
            this.setState({
                bar: [0.5, 1, 0.5, 0.5]
            })
    }
    render() {
        return (
            <React.Fragment>
                {this.props.context}
                <div style={Styleds.Body}>
                    <Header >
                        <center>
                            <ImgButton src={require('../assets/icons/backarrow.svg')} alt='back arrow' />
                            <Head>Schedule Pickup</Head>
                        </center>
                    </Header>
                    <ProgressLine >
                        <center style={{ display: 'flex', justifyContent: 'space-Between', height: 44, marginRight: 41, marginLeft: 41, paddingTop: 5 }}>
                            <Img style={{ opacity: this.state.bar[0] }} /*onClick={this.opacit('location')} */src={require('../assets/icons/location.svg')} alt='location' />
                            <Img style={{ opacity: this.state.bar[1] }} /*onClick={this.opacit('payment')}*/ src={require('../assets/icons/payment.svg')} alt='payment' />
                            <Img style={{ opacity: this.state.bar[2] }} /*onClick={this.opacit('datetime1')}*/ src={require('../assets/icons/datetime1.svg')} alt='datetime1' />
                            <Img style={{ opacity: this.state.bar[3] }} /*onClick={this.opacit('true')} */src={require('../assets/icons/true.svg')} alt='true' />
                        </center>
                    </ProgressLine>
                    <Footer >
                        <center>
                            <Head>foteer</Head>
                        </center>
                    </Footer>
                </div>
            </React.Fragment>
        )
    }
}


export default PickUp;