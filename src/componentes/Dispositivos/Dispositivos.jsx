import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import "./Dispositivos.css";
import ToggleButton from './ToggleButton';
import Alarm from '../Alarm';

function Dispositivos() {
    const [device1, setDevices1] = useState([]);
    const [device2, setDevices2] = useState([]);
    const [device3, setDevices3] = useState([]);
    const [localDate1, setFecha1] = useState([]);
    const [localDate2, setFecha2] = useState([]);
    const [localDate3, setFecha3] = useState([]);
    const urlDataDevices = "http://192.168.59.107:3000/datadevices";

    useEffect(() => {
        // Función para obtener los dispositivos desde la API
        const fetchDevices = async () => {
            try {
                const response = await fetch(urlDataDevices);
                const data = await response.json();
                const Device1 = data.find((device1) => device1.id_device === 'aa6244c4-21f2-4db2-b07e-63c3d2489555');
                const Device2 = data.find((device2) => device2.id_device === 'aa6244c4-21f2-4db2-b07e-63c3d2489445');
                const Device3 = data.find((device3) => device3.id_device === 'aa6244c4-21f2-4db2-b07e-63c3d2489885');
                const dateStr1 = Device1.fecha_value;
                const dateStr2 = Device2.fecha_value;
                const dateStr3 = Device3.fecha_value;
                const date1 = new Date(dateStr1);
                const date2 = new Date(dateStr2);
                const date3 = new Date(dateStr3);
                const LocalDate1 = date1.toLocaleString();
                const LocalDate2 = date2.toLocaleString();
                const LocalDate3 = date3.toLocaleString();
                setDevices1(Device1);
                setDevices2(Device2);
                setDevices3(Device3);
                setFecha1(LocalDate1);
                setFecha2(LocalDate2);
                setFecha3(LocalDate3);
                // console.log("Data: ", Device1);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDevices();
    }, []);
    return (
        <>
            <Header isLoggedIn={true}/>
            <main className='mainD'>
                <div className="dashboard-container">
                    <div className="dashboard">
                        <div className="dashboard-titulo">Dashboard 1</div>
                        <div className="dashboard-fecha" id="fecha1">{localDate1}</div>
                        <div className="dashboard-id" id="id1">{device1.id_device}</div>
                        <div className="dashboard-valor" id="value1">{device1.value_device ? 'ON' : 'OFF'}</div>
                        {/* <ToggleButton id={device1.id_device} stateButton={device1.value_device ? true : false}  /> */}

                    </div>
                    <div className="dashboard">
                        <div className="dashboard-titulo">Dashboard 2</div>
                        <div className="dashboard-id" id="id2">{device2.id_device}</div>
                        <div className="dashboard-fecha" id="fecha2">{localDate2}</div>
                        <div className="dashboard-valor" id="value2">{device2.value_device ? 'ON' : 'OFF'}</div>
                        <ToggleButton id={device2.id_device} initialValue={false} apiUrl={urlDataDevices} />
                    </div>
                    <div className="dashboard">
                        <Alarm id={device2.id_device} initialValue={false} apiUrl={urlDataDevices}/>
                    </div>
                    <div className="dashboard">
                        <div className="dashboard-titulo">Dashboard 3</div>
                        <div className="dashboard-id" id="id3">{device3.id_device}</div>
                        <div className="dashboard-fecha" id="fecha3">{localDate3}</div>
                        <div className="dashboard-valor" id="value3">{device3.value_device} °C</div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Dispositivos