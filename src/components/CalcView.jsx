import React from "react";

function CalcView(props){
    return(
        <div>
            <input
                type="text"
                value={props.output}
                className="input-group input-group-lg text-right font-weight-bold text-lg text-info border-info"
                style={{fontSize: "48px"}}
                readOnly
            />
        </div>
    );
}

export default CalcView;