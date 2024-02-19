function StarShipDetails({ selectedShip, onClose }) {
    return (
      <div className="details-overlay">
        <div className="details-card">
          <img
            src={selectedShip.image || "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/09/20/0bba35af-bf8c-4296-8cbd-1e4ccedfcc6a/star-wars-spaceships-millennium-falcon"} // selectedShip.image kullanıldı varsayılarak
            alt={selectedShip.name}
            className="ship-image"
          />
          <h2>{selectedShip.name}</h2>
          <p><span>Model:</span> {selectedShip.model}</p>
          <p><span>Hyperdrive Rating:</span> {selectedShip.hyperdrive_rating}</p>
          <p><span>Manufacturer:</span> {selectedShip.manufacturer}</p>
          <p><span>Length:</span> {selectedShip.length}</p>
          <p><span>Max Atmosphering Speed:</span> {selectedShip.max_atmosphering_speed}</p>
          <p><span>Crew:</span> {selectedShip.crew}</p>
          <button className="close" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default StarShipDetails;