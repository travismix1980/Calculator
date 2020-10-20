import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CalcButton from "./components/CalcButton";
import AltButton from "./components/AltButton";
import EqualsButton from "./components/EqualsButton";

function App() {
    return (
        <div className="mx-sm-5 my-sm-5">
            <div className="container container-lg">
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="7"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="8"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="9"/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="/"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="4"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="5"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="6"/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="x"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="1"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="2"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="3"/>
                    </div>
                    <div className="col-sm">
                        <AltButton character="-"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <CalcButton character="+/-"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="0"/>
                    </div>
                    <div className="col-sm">
                        <CalcButton character="."/>
                    </div>
                    <div className="col-sm">
                        <EqualsButton character="="/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;