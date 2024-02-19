import React from "react";
import { useState } from "react";
import useStarShips from "../hooks/useStarShips.jsx";
import StarShipCard from "./StarShipCard.jsx";
import StarShipDetails from "./StarShipDetail.jsx";
import AddNewShip from "./AddNewShip.jsx";

function StarShips() {
  const starShips = useStarShips();
  const [selectedShip, setSelectedShip] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [starShipss, setStarShipss] = useState(useStarShips()); // useStarShips hook'unun dönüş değeriyle starShips state'ini başlat

  // Filtreleme işlemi
  const filtered = starShips.filter(
    (starShip) =>
      starShip.name.toLowerCase().includes(filterText.toLowerCase()) ||
      starShip.model.toLowerCase().includes(filterText.toLowerCase())
  );

  // Detayları gösterme fonksiyonu
  const handleDetailsClick = (ship) => {
    setSelectedShip(ship);
  };

  // Detayları kapatma fonksiyonu
  const handleCloseDetails = () => {
    setSelectedShip(null);
  };

  // Yeni gemi ekleme fonksiyonu
  const handleAddShip = (newShipData) => {
    setStarShipss((currentShips) => [...currentShips, newShipData]);
  };

  return (
    <>
      {/* <div>
        <h1>Star Wars Starships</h1>
        <input
          type="text"
          placeholder="Filter by Name or Model"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="card-container">
          {filtered.map((starShip) => (
            <StarShipCard
              key={starShip.name}
              starShip={starShip}
              onDetailsClick={() => handleDetailsClick(starShip)}
            />
          ))}
        </div>
        {selectedShip && (
          <StarShipDetails
            selectedShip={selectedShip}
            onClose={handleCloseDetails}
          />
        )}
      </div> */}
      <div>
        <h1>Star Wars Starships</h1>
        <input
          type="text"
          placeholder="Filter by Name or Model"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="card-container">
          {filtered.map((starShip) => (
            <StarShipCard
              key={starShip.name}
              starShip={starShip}
              onDetailsClick={() => handleDetailsClick(starShip)}
            />
          ))}
        </div>
        {selectedShip && (
          <StarShipDetails
            selectedShip={selectedShip}
            onClose={handleCloseDetails}
          />
        )}
        <AddNewShip onAddShip={handleAddShip} />
      </div>
    </>
  );
}

export default StarShips;
