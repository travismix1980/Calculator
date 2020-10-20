import React from "react";

function EqualsButton(props){
    return(
        <div className="btn btn-block btn-lg btn-outline-danger">
            <h1>{props.character}</h1>
        </div>
    );
}

export default EqualsButton;