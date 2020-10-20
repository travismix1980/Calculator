import React from "react";

function CalcButton(props){
    return(
        <div className="btn btn-block btn-lg btn-outline-info">
            <h1>{props.character}</h1>
        </div>
    );
}

export default CalcButton;