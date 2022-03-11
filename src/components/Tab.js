import React, { useState } from 'react';

function Tab({ children }) {
    const [highlightStyle, setHighlightStyle] = useState({ left: 0});

    function moveHighlight(e) {
        setHighlightStyle({
        left: e.nativeEvent.layerX - 150,
        opacity: 0.7,
        });
    }
    
    function hideHighlight(e) {
        setHighlightStyle({
        opacity: 0,
        left: e.nativeEvent.layerX - 150,
        });
    }
    
    return  <div className="tab" onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
                <div className='highlight' style={highlightStyle} />
                {children}
            </div>
}

export default Tab;