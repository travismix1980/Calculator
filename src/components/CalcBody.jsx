import React, {useState} from "react";
import CalcView from "./CalcView";
import CalcButton from "./CalcButton";
import AltButton from "./AltButton";
import EqualsButton from "./EqualsButton";

function CalcBody(){
    const [output, setOutput] = useState('0');
    return (
        <div className=" p-4 border border rounded-lg border-info" style={backColor}>
            <CalcView output={output} />
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <AltButton character="(" click={() => setOutput(
                                output === "0" ? "(" : output + "(")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character=")" click={() => setOutput(
                            output === "0" ? ")" : output + ")")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="clr" click={() => setOutput("0")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="/" click={() => setOutput(
                            output === "0" ? " / " : output + " / ")}/>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="7" click={() => setOutput(
                            output === "0" ? "7" : output + "7")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="8" click={() => setOutput(
                            output === "0" ? "8" : output + "8")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="9" click={() => setOutput(
                            output === "0" ? "9" : output + "9")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="x" click={() => setOutput(
                            output === "0" ? "*" : output + " * ")}/>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="4" click={() => setOutput(
                            output === "0" ? "4" : output + "4")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="5" click={() => setOutput(
                            output === "0" ? "5" : output + "5")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="6" click={() => setOutput(
                            output === "0" ? "6" : output + "6")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="-" click={() => setOutput(
                            output === "0" ? "- " : output + " - ")}/>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="1" click={() => setOutput(
                            output === "0" ? "1" : output + "1")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="2" click={() => setOutput(
                            output === "0" ? "2" : output + "2")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="3" click={() => setOutput(
                            output === "0" ? "3" : output + "3")}/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="+" click={() => setOutput(
                            output === "0" ? "+ " : output + " + ")}/>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-sm">
                        <AltButton character="del" click={() => setOutput(
                            //output.substring(0, output.length - 1)
                            output.slice(0, -1)
                        )}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="0" click={() => setOutput(
                            output === "0" ? "0" : output + "0")}/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="." click={() => setOutput(
                            output === "0" ? "." : output + ".")}/>
                    </div>
                    <div className="col-sm">
                        {/* eslint-disable-next-line no-eval */}
                        <EqualsButton character="=" click={() => setOutput(eval(output).toString())}/>
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