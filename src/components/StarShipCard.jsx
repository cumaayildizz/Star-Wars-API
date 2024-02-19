function StarShipCard({ starShip, onDetailsClick }) {
    return (
      <div key={starShip.name} className="card">
        <img
          src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/09/20/0bba35af-bf8c-4296-8cbd-1e4ccedfcc6a/star-wars-spaceships-millennium-falcon"
          alt={starShip.name}
          className="ship-image"
        />
        <h2>{starShip.name}</h2>
        <p><span>Model:</span> {starShip.model}</p>
        <p><span>Hyperdrive Rating:</span> {starShip.hyperdrive_rating}</p>
        <button className="details" onClick={() => onDetailsClick(starShip)}>Details</button>
      </div>
    );
  }
  
  export default StarShipCard;