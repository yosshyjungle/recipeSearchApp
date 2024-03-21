import React, { useState } from 'react';
import './App.css';
import Button from "./Button";

function AppCount() {

  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <p>カウント: {count}</p>
      <Button btn_click={() => {setCount(count + 1)}} btn_txt="1増やす"/>
      <Button btn_click={() => {setCount(count - 1)}} btn_txt="1減らす"/>
    </div>
  );
}

export default AppCount;
