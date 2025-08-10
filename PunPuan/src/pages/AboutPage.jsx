import React, { useState } from 'react';
import "../Styles/aboutPage.css";
import p1 from "../assets/ton.jpg";
import p2 from "../assets/god.jpeg";
import p3 from "../assets/sky.jpg";

const people = [
  {
    id: 1,
    name: 'Kedsada Vannaphom',
    role: 'Full Stack Developer',
    image: p1,
    bio: 'ຊື່ ເເລະ ນາມສະກຸນ: ທ້າວ ເກດສະດາ ວັນນະພົມ ວັນ, ເດືອນ, ປີເກີດ: 18 ກຸມພາ 2002 ບ້ານເກີດ: ບ້ານ ນາສ້າງໄພ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ ບ້ານຢູ່ປັດຈຸບັນ: ບ້ານ ນາສ້າງໄພ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ'
  },
  {
    id: 2,
    name: 'Sathaphone Savayvanh',
    role: 'UI/UX Designer & Frontend Developer',
    image: p2,
    bio: 'ຊື່ ເເລະ ນາມສະກຸນ: ທ້າວ ສະຖາພອນ ສະໄຫວວັນ ວັນ, ເດືອນ, ປີເກີດ: 24 ພະຈິກ 2004 ບ້ານເກີດ: ບ້ານ ບຶງຂະຫຍອງ, ເມືອງ ສີສັດຕະນາກ, ເເຂວງນະຄອນຫຼວງວຽງຈັນ ບ້ານຢູ່ປັດຈຸບັນ: ບ້ານ ບຶງຂະຫຍອງ, ເມືອງ ສີສັດຕະນາກ, ເເຂວງນະຄອນຫຼວງວຽງຈັນ'
  },
  {
    id: 3,
    name: 'Palinya Phenmanivong',
    role: 'Project Manager',
    image: p3,
    bio: " ຊື່ ເເລະ ນາມສະກຸນ: ທ້າວ ປະລິນຍາ ເເພງມະນີວົງ ວັນ, ເດືອນ, ປີເກີດ: 18 ມິຖຸນາ 2003 ບ້ານເກີດ: ບ້ານນາທົ່ວ, ເມືອງເຟືອງ, ເເຂວງວຽງຈັນ ບ້ານຢູ່ປັດຈຸບັນ: ບ້ານເມືອງນ້ອຍ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ"
  }
];

const AboutPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="about-container box_container container">
      <div className="sidebar">
        {people.map((person) => (
          <div
            key={person.id}
            className={`tap-box ${selectedPerson.id === person.id ? 'active' : ''}`}
            onClick={() => setSelectedPerson(person)}
          >
            <img src={person.image} alt={person.name} className="circle-image" />
            <div className="tap-text">
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div key={selectedPerson.id} className="info-box animate-fade-left">
        <div className="person_info">
          <h2>{selectedPerson.name}</h2>
          <h4>{selectedPerson.role}</h4>
          <p>{selectedPerson.bio}</p>
        </div>
        <div
          className="person_img"
          style={{
            backgroundImage: `url(${selectedPerson.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'start',
            height: '200px',
            borderRadius: '10px',
            marginTop: '0px'
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutPage;
