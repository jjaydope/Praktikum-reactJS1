import React, { useState } from "react";

const Bank = () => {
    let [nominal, setNominal] = useState(0);
    let [bunga, setBunga] = useState(0);
    let [periode, setPeriode] = useState(0);
    let [cicilan, setCicilan] = useState(0)


    const calculate = (e) => {
        e.preventDefault();
        const formValid = +nominal > 0 && +bunga > 0 && +periode > 0;
        if (!formValid) {
            return;
        }

        let cicilan = (+nominal / (+periode)) + ((+nominal * ((+bunga) / 100)) / (+periode))
        setCicilan(cicilan)
    };

    // const cek = () =>{

    //   document.getElementById('status').value = status;
    // }


    return (
        <div className="formulir"><br /><br /><br /><br /><br />
            <div className="container">
                <div className="card col-md-6">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>Peminjaman Bank</h4>
                    </div>
                    <div className="card-body text-left">
                        <form onSubmit={calculate}>
                            <div>
                                Nominal (Rp.)
                                <input className="form-control" value={nominal} onChange={(e) => setNominal(e.target.value)} />
                            </div><br />

                            <div>
                                Bunga (%)
                                <input value={bunga} onChange={(e) => setBunga(e.target.value)} className="form-control" />
                            </div><br />

                            <div>
                                Masa peminjaman
                                <select className="form-control  mb-3" name="type" value={periode}
                                    onChange={(e) => setPeriode(e.target.value)}>
                                    <option></option>
                                    <option value={12}>12 bulan</option>
                                    <option value={24}>24 bulan</option>
                                    <option value={36}>36 bulan</option>
                                </select>

                            </div>
                            <button type="submit" className="btn btn-dark w-100">Hitung</button>
                        </form>
                        <input value={"Rp. " + cicilan + ",-"} className="form-control" readOnly />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bank;