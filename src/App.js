import React from 'react';

function Jsxthe(props){
  console.log(props.fav);
  return <h3> 안녕 그지 깽깽이들아. 나는 {props.fav} 를 좋아해.</h3>
}

function App() {
  return (
    <div> 
      <h1>여기는 app 안이야.</h1>
      <Jsxthe fav="kimchi" />
      <Jsxthe fav="쭈꾸미" />
      <Jsxthe fav="삼겹살" />
      <Jsxthe fav="kimchi" />
      
    </div>

    );
}

export default App;
