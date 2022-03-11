import React, { useState } from 'react';
import './App.css';

function App() {

  const [highlightStyle, setHighlightStyle] = useState({ left: 0});

  function moveHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    })
  }
  
  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    })
  }

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
            <div className='highlight' style={highlightStyle}/>
            <a href='localhost://3000'>Home</a>
          </div>
          <div className="tab">
            <a href='localhost://3000'>About</a>
          </div>
          <div className="tab ">
            <a href='localhost://3000'>Features</a>
          </div>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
