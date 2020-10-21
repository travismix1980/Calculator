import React from "react";
import CalcView from "./CalcView";
import CalcButton from "./CalcButton";
import AltButton from "./AltButton";
import EqualsButton from "./EqualsButton";

function CalcBody(){
    return (
        <div className=" p-4 border border rounded-lg border-info" style={backColor}>
            <CalcView output={42} />
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <AltButton character="(" />
                    </div>
                    <div className="col-sm">
                        <AltButton character=")" />
                    </div>
                    <div className="col-sm">
                        <AltButton character="clr" />
                    </div>
                    <div className="col-sm">
                        <AltButton character="/" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="7" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="8" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="9" />
                    </div>
                    <div className="col-sm">
                        <AltButton character="x" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="4" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="5" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="6" />
                    </div>
                    <div className="col-sm">
                        <AltButton character="-" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="1" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="2" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="3" />
                    </div>
                    <div className="col-sm">
                        <AltButton character="+" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="+/-" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="0" />
                    </div>
                    <div className="col-sm">
                        <CalcButton character="." />
                    </div>
                    <div className="col-sm">
                        <EqualsButton character="=" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const backColor = {
    backgroundColor: "#bcfff7"
};

export default CalcBody;