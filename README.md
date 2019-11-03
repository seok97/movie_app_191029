# 영화 앱 만들기 2019

React JS Fundamentals Course (2019 Update!)

진행중 -
https://blog.naver.com/slgo123

2019-11-02 까지 작업.

컴포넌트 사용법과 propTypes 설치/사용.

``` js
import React from 'react';
import PropTypes from 'prop-types';



function Favidols({name, shit, rating}){

  return (
  <div>
    <h3> 내가 좋아하는 아이돌은 {name} 이야. </h3>
    <img src={shit} width="500px" alt={name} />
    <h4>{rating}/5.0</h4>
  </div>
  );
}

function Idols(dis){
 
  return <Jsxthe name={dis.name} shit={dis.shit} key={dis.id} rating={dis.ratin}/>
}


const idolsinfo = [
  { 
    id:1,
    name: "itzy",
    shit: "https://farm8.staticflickr.com/7896/46731686204_51bdb425e3_o.jpg",
    ratin: 4
  },
  { 
    id:2,
    name: "twice",
    shit: "https://farm5.staticflickr.com/4819/46713125631_3f1356b6cf_o.jpg",
    ratin: 4.9
  },
  { 
    id:3,
    name: "fromis",
    shit: "https://live.staticflickr.com/65535/48013082297_623af4ef20_o.jpg",
    ratin: 5
  }

]


Jsxthe.propTypes = {
  name: PropTypes.string.isRequired,
  shit: PropTypes.string.isRequired,
  rating: PropTypes.number
}



function App() {
  return (
    <div> 
      <h1>여기는 app 안이야.</h1>
      <h4>{foodlke.map(Idols)}</h4>
    </div>

    );
}

export default App;
```
