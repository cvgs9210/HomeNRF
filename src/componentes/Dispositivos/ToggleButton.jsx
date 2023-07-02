import React, { useState } from 'react';

function ToggleButton(props) {
  const { id, initialValue, apiUrl } = props;
  const [isOn, setIsOn] = useState(initialValue);

  const handleToggle = () => {
    setIsOn(!isOn);

    // Crear el objeto de datos a enviar
    const requestData = {
      id_device: id,
      value_device: isOn ? 0 : 1,
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
  };

  return (
    <button onClick={handleToggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton;
