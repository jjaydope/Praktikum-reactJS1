import React, { useState } from "react";
import Alert from "./Alert";

const Bmi = () => {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    let [status, setStatus] = useState("Ukur BB&TB")


    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);

        if (bmi < 18.5) {
            status = "Kurang"
        } else if (bmi >= 18.5 && bmi <= 24.999999999999999) {
            status = "Normal"
        } else if (bmi >= 25 && bmi <= 29.999999999999999) {
            status = "Kelebihan"
        } else if (bmi >= 30) {
            status = "Obesitas"
        }
        setStatus(status)
    };

    // const cek = () =>{

    //   document.getElementById('status').value = status;
    // }

    const alert = () => {
        if (status === "") {
            return <div></div>;
        }
        if (status === "Kurang") {
            return <Alert type="danger">
                <p><b>{status}</b> ({bmi})</p>
            </Alert>

        }
        if (status === "Normal") {
            return <Alert type="success" children>
                <p><b>{status}</b> ({bmi})</p>
            </Alert>
        }
        if (status === "Kelebihan") {
            return <Alert type="warning">
                <p><b>{status}</b> ({bmi})</p>
            </Alert>
        }
        if (status === "Obesitas") {
            return <Alert type="danger">
                <p><b>{status}</b> ({bmi})</p>
            </Alert>
        }
    }


    return (
        <div className="formulir"><br /><br /><br /><br /><br />
            <div className="container">
                <div className="card col-md-6">
                    <div className="card-header bg-cyan text-black text-center">
                        <h4>BMI</h4>
                    </div>
                    <div className="card-body text-left">
                        <form onSubmit={calculate}>
                            <div>
                                Tinggi
                                <input className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div><br />

                            <div>
                                Berat
                                <input value={mass} onChange={(e) => setMass(e.target.value)} className="form-control" />
                            </div><br />

                            <button type="submit" className="btn btn-blue w-100" >Hitung</button>
                        </form>
                        {alert()}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bmi;