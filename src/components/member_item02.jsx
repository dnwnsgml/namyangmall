import React from "react";

function Item02({ src, txt }) {
    return (
        <div>
            <img src={src} alt={txt} />
            <h4>{txt}</h4>
        </div>
    )
}

export default Item02;