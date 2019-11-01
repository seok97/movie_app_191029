import React from 'react';
import { ENOTCONN } from 'constants';

function Jsxthe(props){
  console.log(props.name);
  return (
  <h3> 내가 좋아하는 아이돌은 {props.name} 이야. <br></br><img src={props.shit} /> </h3>
  );
}

const foodlke = [
  { 
    name: "itzy",
    shit: "https://farm8.staticflickr.com/7896/46731686204_51bdb425e3_o.jpg"
  },
  { 
    name: "twice",
    shit: "https://farm5.staticflickr.com/4819/46713125631_3f1356b6cf_o.jpg"
  },
  { 
    name: "fromis",
    shit: "https://live.staticflickr.com/65535/48013082297_623af4ef20_o.jpg"
  }

]

function App() {
  return (
    <div> 
      <h1>여기는 app 안이야.</h1>
      <p>{foodlke.map( etc => ( <Jsxthe name={etc.name} shit={etc.shit} />)) }</p>
    </div>

    );
}

export default App;
