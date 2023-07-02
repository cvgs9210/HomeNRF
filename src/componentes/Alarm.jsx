import React, { useState } from 'react';

function Alarm(props) {
    const { id, initialValue, apiUrl } = props;
    const [alarmTime, setAlarmTime] = useState('');
    const [isAlarmSet, setIsAlarmSet] = useState(initialValue);

    // Función para manejar el cambio en el campo de entrada de la hora de la alarma
    const handleAlarmTimeChange = (event) => {
        setAlarmTime(event.target.value);
    };

    // Función para activar la alarma
    const setAlarm = () => {
        if (alarmTime) {
            setIsAlarmSet(true);
            setTimeout(() => {
                // Lógica para ejecutar una acción cuando se active la alarma

                const requestData = {
                    id_device: id,
                    value_device: 1,
                    fecha_value: Math.floor(Date.now() / 1000)
                };

                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                })
                    .then(response => {
                        // Manejar la respuesta de la API
                        // ...
                    })
                    .catch(error => {
                        // Manejar errores de la solicitud
                        // ...
                    });
                alert('¡Alarma activada!');
                setIsAlarmSet(false);
            }, getTimeToAlarm());
        }
    };

    // Función para calcular el tiempo restante hasta la alarma
    const getTimeToAlarm = () => {
        const currentTime = new Date();
        const alarmTimeParts = alarmTime.split(':');
        const alarmDate = new Date();
        alarmDate.setHours(parseInt(alarmTimeParts[0], 10));
        alarmDate.setMinutes(parseInt(alarmTimeParts[1], 10));
        alarmDate.setSeconds(0);

        const timeToAlarm = alarmDate.getTime() - currentTime.getTime();
        console.log("alarma en: ", timeToAlarm);
        return timeToAlarm >= 0 ? timeToAlarm : 0;
    };

    return (
        <div>
            <h4>Establecer alarma</h4>
            <label htmlFor="alarmTime">Hora de la alarma:</label>
            <input type="time" id="alarmTime" value={alarmTime} onChange={handleAlarmTimeChange} />
            <button onClick={setAlarm}>Activar alarma</button>
            {isAlarmSet && <p>Alarma activada para las {alarmTime}</p>}
        </div>
    );
}

export default Alarm;

