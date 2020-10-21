import React from "react";

function AltButton(props){
    return(
        <div className="btn btn-block btn-lg btn-outline-dark">
            <h1 onClick={props.click}>{props.character}</h1>
        </div>
    );
}

export default AltButton;