import React from 'react';
import '../../Styles/viewDetail.css';

const ViewDetail = () => {
  return (
    <div className="view-detail-wrapper">
      <div className="view-detail container">
        {/* Status Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Status</h2>
          </div>
          <div className="status-info info">
            <p className="available_room amount data">6</p>
            <p className="total_room">/20</p>
            <p className="text">Available</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Price</h2>
          </div>
          <div className="price-info info">
            <p className="price amount data">₭1,050,000</p>
            <p className="text">/Month</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Address</h2>
          </div>
          <div className="address-info">
            <ul>
              <li>
                <label>Province: </label>
                <p className="text">Vientiane</p>
              </li>
              <li>
                <label>District: </label>
                <p className="text">Chanthabuly</p>
              </li>
              <li>
                <label>Village: </label>
                <p className="text">Ban Thong Khan Kham</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Description Section */}
        <div className="view-info">
          <div className="view-title">
            <h2>Description</h2>
          </div>
          <div className="description text">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;


                        /// perfect version ///


// export default ViewContent

// import React, { useEffect, useState } from 'react';
// import './viewContent.css';

// const ViewContent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch('/api/room-info')
//       .then((res) => res.json())
//       .then((info) => setData(info))
//       .catch((err) => console.error("Failed to fetch data:", err));
//   }, []);

//   if (!data) {
//     return <div className="view-content-wrapper">Loading...</div>;
//   }

//   return (
//     <div className="view-content-wrapper">
//       <div className="view-content container">
//         {/* Status */}
//         <div className="view-info">
//           <div className="view-title">
//             <h2>Status</h2>
//           </div>
//           <div className="status-info info">
//             <p className='available_room amount'>{data.availableRooms}</p>
//             <p className='total_rooms'>/{data.totalRooms}</p>
//             <p className="text">Available</p>
//           </div>
//         </div>

//         {/* Price */}
//         <div className="view-info">
//           <div className="view-title">
//             <h2>Price</h2>
//           </div>
//           <div className="Price-info info">
//             <p className='Price amount'>₭{data.price.toLocaleString()}</p>
//             <p className="text">/Month</p>
//           </div>
//         </div>

//         {/* Address */}
//         <div className="view-info">
//           <div className="view-title">
//             <h2>Address</h2>
//           </div>
//           <div className="address-info">
//             <ul>
//               <li>
//                 <label>Province:</label>
//                 <p>{data.address.province}</p>
//               </li>
//               <li>
//                 <label>District:</label>
//                 <p>{data.address.district}</p>
//               </li>
//               <li>
//                 <label>Village:</label>
//                 <p>{data.address.village}</p>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="view-info">
//           <div className="view-title">
//             <h2>Description</h2>
//           </div>
//           <div className="description">
//             <p>{data.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewContent;

