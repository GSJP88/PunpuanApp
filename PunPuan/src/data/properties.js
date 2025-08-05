// src/data/propertyData.js
import img1 from '../assets/room.jpg';
import img2 from '../assets/apm.jpg';
import img3 from '../assets/cd.jpg';
import img4 from '../assets/town.jpg';
import img1_1 from '../assets/condo.jpg';
import img1_2 from '../assets/condo.jpg';
import img1_3 from '../assets/condo.jpg';
import img1_4 from '../assets/condo.jpg';
import img1_5 from '../assets/condo.jpg';
import img2_1 from '../assets/room.jpg';
import img2_2 from '../assets/room.jpg';
import img2_3 from '../assets/room.jpg';
import img2_4 from '../assets/room.jpg';
import img2_5 from '../assets/room.jpg';
import img3_1 from '../assets/cd.jpg';
import img3_2 from '../assets/cd.jpg';
import img3_3 from '../assets/cd.jpg';
import img3_4 from '../assets/cd.jpg';
import img3_5 from '../assets/cd.jpg';
import img4_1 from '../assets/town.jpg';
import img4_2 from '../assets/town.jpg';
import img4_3 from '../assets/town.jpg';
import img4_4 from '../assets/town.jpg';
import img4_5 from '../assets/town.jpg';


const propertyData = [
  {
    id: 1,
    image: img1,
    images: [img1_1, img1_2, img1_3, img1_4, img1_5],
    type: "Single family",
    name: "Apartment AB8, Vientiane",
    province: "Vientiane",
    district: "Chanthaboury",
    village: "Sysavard",
    location: [17.97070, 102.6154],
    address: "123 River Ridge Dr, Boardman, OR, 97818, US",
    occupancy: 15,
    totalProperty: 15,
    balance: 4500000,
    bedRoom: 1,
    bathRoom: 1,
    Parking: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, praesentium minima aperiam eum et excepturi corrupti unde ex beatae fugiat."
  },
  {
    id: 2,
    image: img2,
    images: [img2_1, img2_2, img2_3, img2_4, img2_5],
    type: "2 Units",
    name: "Townhouse 3B, Luang Prabang",
    province: "Vientiane",
    district: "Chanthaboury",
    village: "Sysavard",
    location: [17.950350, 102.621348],
    address: "1231 116th Ave NE, Bellevue, WA, 98004, US",
    occupancy: 3,
    totalProperty: 5,
    balance: 7500000,
    bedRoom: 4,
    bathRoom: 3,
    Parking: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, praesentium minima aperiam eum et excepturi corrupti unde ex beatae fugiat."
  },
  {
    id: 3,
    image: img3,
    images: [img3_1, img3_2, img3_3, img3_4, img3_5],
    type: "Single family",
    name: "Condo A12, Vientiane",
    province: "Vientiane",
    district: "Sisattanak",
    village: "Beung Kha Nyong",
    location: [17.949572, 102.620140],
    address: "34287 Diagonal Blvd, Hermiston, OR, 97838, US",
    occupancy: 2,
    totalProperty: 20,
    balance: 25000000,
    bedRoom: 2,
    bathRoom: 2,
    Parking: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, praesentium minima aperiam eum et excepturi corrupti unde ex beatae fugiat."
  },
  {
    id: 4,
    image: img4,
    images: [img4_1, img4_2, img4_3, img4_4, img4_5],
    type: "Single family",
    name: "Room 202, Pakse",
    province: "Vientiane",
    district: "Chanthaboury",
    village: "Sysavard",
    location: [17.950350, 102.621348],
    address: "Utah Ave, Pasco, WA 99301, USA",
    occupancy: 1,
    totalProperty: 15,
    balance: 1050000,
    bedRoom: 1,
    bathRoom: 1,
    Parking: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, praesentium minima aperiam eum et excepturi corrupti unde ex beatae fugiat."
  }
];

export default propertyData;
