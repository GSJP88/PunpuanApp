import React, { useState } from 'react';
import "../Styles/aboutPage.css";
import p1 from "../assets/ton.jpg";
import p2 from "../assets/god.jpeg";
import p3 from "../assets/sky.jpg";
import { useTranslation } from 'react-i18next';

const people = [
  { id: 1, key: 'person1', image: p1 },
  { id: 2, key: 'person2', image: p2 },
  { id: 3, key: 'person3', image: p3 }
];

const AboutPage = () => {
  const { t } = useTranslation();
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
            <img src={person.image} alt={t(`${person.key}.name`)} className="circle-image" />
            <div className="tap-text">
              <h4>{t(`${person.key}.name`)}</h4>
              <p>{t(`${person.key}.role`)}</p>
            </div>
          </div>
        ))}
      </div>

      <div key={selectedPerson.id} className="info-box animate-fade-left">
        <div className="person_info">
          <h2>{t(`${selectedPerson.key}.name`)}</h2>
          <h4>{t(`${selectedPerson.key}.role`)}</h4>
          <p>{t(`${selectedPerson.key}.bio`)}</p>
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