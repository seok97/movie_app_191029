import React from 'react';

function Jsxthe(props){
  console.log(props);
  return <h3> 안녕 그지 깽깽이들아.</h3>
}

function App() {
  return (
    <div> 
      <h1>여기는 app 안이야.</h1>
      <Jsxthe fav="kimchi"  />
    </div>

    );
}

export default App;
