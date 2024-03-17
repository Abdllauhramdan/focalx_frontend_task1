const FilterButtons = () => {
  return (
    <div
      className="my-4 container justify-content-center d-flex border-0"
      
    >
      <button
        type="button"
        className="btn p-2 px-4 mx-3"
        
      >
        Show All
      </button>
      <button type="button" className="btn btn-dark p-2 px-4 mx-3">
        Appartment
      </button>
      <button type="button" className="btn btn-dark p-2 px-4 mx-3">
        Villa House
      </button>
      <button type="button" className="btn btn-dark p-2 px-4 mx-3">
        Penthouse
      </button>
    </div>
  );
};

export default FilterButtons;
