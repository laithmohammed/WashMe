import React from 'react';

class Final extends React.Component {
  constructor(){
    super();
    this.state = {
      data : localStorage
    }
  }
  render() {
    let Key = Object.keys(localStorage)
    let Val = Object.values(this.state.data)
    return (
    <React.Fragment>{Key.map((key,i)=>{
      return <p key={i}>{key} : {Val[i]}</p>
    })}</React.Fragment>
    );
  }
}
export default Final;
