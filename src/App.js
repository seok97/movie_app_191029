import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{

  state = {
    count:0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1}) );
  };
  minus = () => {
    console.log("minus");
    this.setState( current => ({count: current.count - 1}));
  };

  componentDidUpdate(){
    console.log("업데이트했어");
  }
  componentDidMount(){
    console.log("나는 렌더 당했엉");
  }
  componentWillUnmount(){
    console.log("안녕");
  }
  render(){
    console.log("render");
    return (
      <div>
      <h1>This number is : {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
