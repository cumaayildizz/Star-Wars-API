import React, { useState } from 'react';

function AddNewShip({ onAddShip }) {
  const [newShipData, setNewShipData] = useState({
    name: "",
    model: "",
    hyperdrive_rating: "",
    manufacturer: "",
    length: "",
    max_atmosphering_speed: "",
    crew: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShipData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Formun varsayılan gönderme işlemini engelle
    onAddShip(newShipData); // Üst bileşene yeni gemi bilgisini geçir
    // Formu sıfırla
    setNewShipData({
      name: "",
      model: "",
      hyperdrive_rating: "",
      manufacturer: "",
      length: "",
      max_atmosphering_speed: "",
      crew: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-ship-form">
      <h2>Add New Ship</h2>
      {/* Form alanları */}
      <input type="text" name="name" placeholder="Name" value={newShipData.name} onChange={handleChange} />
      <input type="text" name="model" placeholder="Model" value={newShipData.model} onChange={handleChange} />
      <input type="text" name="hyperdrive_rating" placeholder="Hyperdrive Rating" value={newShipData.hyperdrive_rating} onChange={handleChange} />
      <input type="text" name="manufacturer" placeholder="Manufacturer" value={newShipData.manufacturer} onChange={handleChange} />
      <input type="text" name="length" placeholder="Length" value={newShipData.length} onChange={handleChange} />
      <input type="text" name="max_atmosphering_speed" placeholder="Max Atmosphering Speed" value={newShipData.max_atmosphering_speed} onChange={handleChange} />
      <input type="text" name="crew" placeholder="Crew" value={newShipData.crew} onChange={handleChange} />
      <button type="submit" className="add-ship">Add Ship</button>
    </form>
  );
}

export default AddNewShip;