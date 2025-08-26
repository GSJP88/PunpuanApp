import React from 'react';

const Type = ({ activeType, setActiveType }) => {
  const types = ["ອາພາດເມັ້ນ", "ຄອນໂດ", "ຫ້ອງແຖວ", "ບ້ານພັກ"];

  return (
    <div className="property-types-wrapper">
      <h2 className='title'>ປະເພດຫ້ອງ</h2>
      <div className="property-buttons">
        {types.map((type) => (
          <button
            key={type}
            className={`property-button ${activeType === type ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type;