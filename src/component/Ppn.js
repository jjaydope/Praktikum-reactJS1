import React, { useState } from "react";

const Ppn = () => {
    let [hargaAwal, setHargaAwal] = useState(0);
    let [ppn, setPpn] = useState(0);
    let [discount, setDiscount] = useState(0);
    let [hargaAkhir, setHargaAkhir] = useState(0)


    const calculate = (e) => {
        e.preventDefault();
        const formValid = +hargaAwal > 0 && +ppn > 0 && +discount > 0;
        if (!formValid) {
            return;
        }

        let hargaAkhir = ((+hargaAwal - ((+ discount / 100) * +hargaAwal)) + ((+ppn) / 100) * +hargaAwal)
        setHargaAkhir(hargaAkhir)
    };
    return (
        <div className="formulir"><br /><br /><br /><br /><br />
            <div className="container">
                <div className="card col-md-6">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>Calculating Final Price</h4>
                    </div>
                    <div className="card-body text-left">
                        <form onSubmit={calculate}>
                            <div>
                                Initial Price
                                <input className="form-control" value={hargaAwal} onChange={(e) => setHargaAwal(e.target.value)} />
                            </div><br />

                            <div>
                                PPN
                                <input value={ppn} onChange={(e) => setPpn(e.target.value)} className="form-control" />
                            </div><br />

                            <div>
                                Discount
                                <input value={discount} onChange={(e) => setDiscount(e.target.value)} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Calculate</button>
                        </form>
                        <input value={"Rp. " + hargaAkhir + ",-"} className="form-control" readOnly />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ppn;