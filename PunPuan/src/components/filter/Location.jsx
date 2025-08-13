import React, { useEffect, useState } from 'react';

const laosData = {
  "Attapeu": {
    "Samakkixay": ["Ban Xaysettha", "Ban Somsanouk", "Ban Donsavanh"],
    "Sanamxay": ["Ban Phouampha", "Ban Vangphai"],
    "Sanxay": ["Ban Nonghin", "Ban Phouhouay"]
  },
  "Bokeo": {
    "Houayxay": ["Ban Meungneua", "Ban Done"],
    "Meung": ["Ban Meung", "Ban Sopmeung"],
    "Paktha": ["Ban Paknga", "Ban Namkeung"]
  },
  "Bolikhamxay": {
    "Paksan": ["Ban Keun", "Ban Namsanam"],
    "Borikhane": ["Ban Nakhang", "Ban Phon"],
    "Khamkeut": ["Ban Lak Sao", "Ban Viengthong"]
  },
  "Champasak": {
    "Pakse": ["Ban Lak 20", "Ban Thongphong"],
    "Pathoumphone": ["Ban Nongphaya", "Ban Na"],
    "Khong": ["Ban Don Det", "Ban Don Khon"]
  },
  "Houaphanh": {
    "Sam Neua": ["Ban Viengxay", "Ban Namnoeung"],
    "Xiengkhor": ["Ban Sop Lao", "Ban Namthon"],
    "Sopbao": ["Ban Huaythu", "Ban Vieng"]
  },
  "Khammouane": {
    "Thakhek": ["Ban Thakhek", "Ban Napheng"],
    "Mahaxay": ["Ban Dong", "Ban Thong"],
    "Nakai": ["Ban Nakai Tai", "Ban Sop Hia"]
  },
  "Luang Namtha": {
    "Namtha": ["Ban Namtha", "Ban Khoua"],
    "Sing": ["Ban Meuang", "Ban Thongpheng"],
    "Long": ["Ban Long", "Ban Soplong"]
  },
  "Luang Prabang": {
    "Luang Prabang": ["Ban Vat Nong", "Ban Xieng Mouane"],
    "Pak Ou": ["Ban Pak Ou", "Ban Paktha"],
    "Phonxay": ["Ban Xay", "Ban Nong"]
  },
  "Oudomxay": {
    "Xay": ["Ban Xay", "Ban Nalao"],
    "La": ["Ban La", "Ban Namhoum"],
    "Namor": ["Ban Namor", "Ban Na"]
  },
  "Phongsaly": {
    "Phongsaly": ["Ban Phongsaly", "Ban Boun Neua"],
    "Samphanh": ["Ban Samphanh", "Ban Khoun"],
    "May": ["Ban May", "Ban Vieng"]
  },
  "Salavan": {
    "Salavan": ["Ban Salavan", "Ban Talong"],
    "Lakhonepheng": ["Ban Lakhon", "Ban Pheng"],
    "Samoui": ["Ban Samoui", "Ban Ta Oy"]
  },
  "Savannakhet": {
    "Kaysone Phomvihane": ["Ban Xayaphoum", "Ban Non"],
    "Outhoumphone": ["Ban Xeno", "Ban Thapha"],
    "Phin": ["Ban Phin", "Ban Kengkok"]
  },
  "Sekong": {
    "Lamarm": ["Ban Lamarm", "Ban Nong"],
    "Thateng": ["Ban Thateng", "Ban Song"],
    "Dakcheung": ["Ban Dakcheung", "Ban Phou"]
  },
  "Vientiane Province": {
    "Thoulakhom": ["Ban Thoulakhom", "Ban Vieng"],
    "Vangvieng": ["Ban Vangvieng", "Ban Viengkeo"],
    "Keo-Oudom": ["Ban Keo", "Ban Oudom"]
  },
  "Vientiane Prefecture": {
    "Chanthabuly": ["Ban Phonthan", "Ban Nongbone", "Ban Watnak"],
    "Sikhottabong": ["Ban Dongdok", "Ban Phonpapao"],
    "Sisattanak": ["Ban Simeuang", "Ban Haisok"]
  },
  "Xaisomboun": {
    "Anouvong": ["Ban Anouvong", "Ban Muang"],
    "Thathom": ["Ban Thathom", "Ban Namkong"],
    "Hom": ["Ban Hom", "Ban Lak"]
  },
  "Xayabouly": {
    "Xayabouly": ["Ban Xayabouly", "Ban Don"],
    "Hongsa": ["Ban Hongsa", "Ban Namkeung"],
    "Phiang": ["Ban Phiang", "Ban Muang"]
  },
  "Xiengkhouang": {
    "Phonsavan": ["Ban Phonsavan", "Ban Khoum"],
    "Khoune": ["Ban Khoune", "Ban Hieng"],
    "Nonghet": ["Ban Nonghet", "Ban Muang"]
  }
};

const Location = ({ province, setProvince, district, setDistrict, village, setVillage }) => {
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    if (province) {
      setDistricts(Object.keys(laosData[province]));
      setDistrict('');
      setVillages([]);
      setVillage('');
    } else {
      setDistricts([]);
      setDistrict('');
      setVillages([]);
      setVillage('');
    }
  }, [province, setDistrict, setVillage]);

  useEffect(() => {
    if (province && district) {
      setVillages(laosData[province][district]);
      setVillage('');
    } else {
      setVillages([]);
      setVillage('');
    }
  }, [district, province, setVillage]);

  return (
    <div className="location_wrapper mt-4">
      <h2 className='title'>Location</h2>
      <div className="location_option">
        <label>Province:</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="form-select mb-3"
        >
          <option value="">Select Province</option>
          {Object.keys(laosData).map((prov) => (
            <option key={prov} value={prov}>{prov}</option>
          ))}
        </select>

        <label>District / City:</label>
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="form-select mb-3"
          disabled={!districts.length}
        >
          <option value="">Select District</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>{dist}</option>
          ))}
        </select>

        <label>Village:</label>
        <select
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          className="form-select mb-3"
          disabled={!villages.length}
        >
          <option value="">Select Village</option>
          {villages.map((vill) => (
            <option key={vill} value={vill}>{vill}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Location;