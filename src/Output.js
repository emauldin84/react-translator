// V1. The purpose of this component is to receive some text and display it to the page

// V2. Add "translation" (toUpperCase) to the text displayed to the page

import React from 'react';

function Output(props) {
    console.log('Rendering Output')
    return (
        <div>{props.text.toUpperCase()}</div>
    );
}










export default Output;