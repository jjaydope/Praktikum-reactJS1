import React, { useState } from "react";

const Bilangan = () => {
    let [nilai, setNilai] = useState(0);
    let [konversi, setKonversi] = useState("Octal");
    let [awal, setAwal] = useState("Biner");
    let [hasil, setHasil] = useState(0);


    const calculate = (e) => {
        e.preventDefault();

        let desimal = 0;
        if (awal == "Octal") {
            desimal = parseInt(+nilai, 8)
            if (konversi == "Decimal") {
                hasil = desimal
            } else if (konversi == "Biner") {
                hasil = desimal.toString(2)
            } else if (konversi == "Hexadecimal") {
                hasil = desimal.toString(16)
            }
        } else if (awal == "Decimal") {
            desimal = +nilai
            if (konversi == "Biner") {
                hasil = desimal.toString(2)
            } else if (konversi == "Octal") {
                hasil = desimal.toString(8)
            } else if (konversi == "Hexadecimal") {
                hasil = desimal.toString(16)
            }
        } else if (awal == "Biner") {
            desimal = parseInt(+nilai, 2)
            if (konversi == "Decimal") {
                hasil = desimal
            } else if (konversi == "Octal") {
                hasil = desimal.toString(8)
            } else if (konversi == "Hexadecimal") {
                hasil = desimal.toString(16)
            }
        } else if (awal == "Hexadecimal") {
            desimal = parseInt(nilai, 16)
            if (konversi == "Biner") {
                hasil = desimal.toString(2)
            } else if (konversi == "Octal") {
                hasil = desimal.toString(8)
            } else if (konversi == "Decimal") {
                hasil = desimal
            }
        }

        setHasil(hasil)




    };
    return (
        <div className="formulir"><br /><br /><br /><br /><br />
            <div className="container">
                <div className="card col-md-6">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>{awal} Number Conversion</h4>
                    </div>
                    <div className="card-body text-left">
                        <form onSubmit={calculate}>
                            <div>
                                {awal}
                                <input value={nilai} onChange={(e) => setNilai(e.target.value)} className="form-control" />
                            </div><br />

                            <div>
                                Conversion from
                                <select className="form-control" name="type" value={awal}
                                    onChange={(e) => setAwal(e.target.value)}>
                                    <option value="Biner">Biner</option>
                                    <option value="Octal">Octal</option>
                                    <option value="Decimal">Decimal</option>
                                    <option value="Hexadecimal">Hexadecimal</option>
                                </select>

                            </div><br />

                            <div>
                                Conversion to
                                <select className="form-control" name="type" value={konversi}
                                    onChange={(e) => setKonversi(e.target.value)}>
                                    <option value="Biner">Biner</option>
                                    <option value="Octal">Octal</option>
                                    <option value="Decimal">Decimal</option>
                                    <option value="Hexadecimal">Hexadecimal</option>
                                </select>

                            </div><br />

                            <button type="submit" className="btn btn-dark w-100 mb-1" >Convert</button>
                        </form>
                        <div className="card-body"></div>
                        {konversi}
                        <input value={hasil} className="form-control" readOnly />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bilangan;