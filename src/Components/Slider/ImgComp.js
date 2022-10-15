import React from 'react';

function ImgComp({ src }) {
    let imgStyles = {
        width: "auto",
        height: "100%"
    }
    return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default ImgComp;