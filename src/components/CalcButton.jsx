import React from "react";

function CalcButton(props){
    return(
        <div className="btn btn-block btn-lg btn-outline-info">
            <h1 onClick={props.click}>{props.character}</h1>
        </div>
    );
}

export default CalcButton;