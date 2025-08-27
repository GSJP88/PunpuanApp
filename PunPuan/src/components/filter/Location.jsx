import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import laosData from './laosData.jsx';

const Location = ({ province, setProvince, district, setDistrict, village, setVillage }) => {
  const { t, i18n } = useTranslation();
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  // update districts when province changes
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

  // update villages when district changes
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
      <h2 className='title'>{t('location_title')}</h2>
      <div className="location_option">
        {/* Province */}
        <label>{t('province_label')}:</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="form-select mb-3"
        >
          <option value="">{t('province_placeholder')}</option>
          {Object.keys(laosData).map((prov) => (
            <option key={prov} value={prov}>
              {i18n.language === 'en' ? prov : t(`${prov}`)}
            </option>
          ))}
        </select>

        {/* District */}
        <label>{t('district_label')}:</label>
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="form-select mb-3"
          disabled={!districts.length}
        >
          <option value="">{t('district_placeholder')}</option>
          {districts.map((dist) => (
            <option key={dist} value={dist}>
              {i18n.language === 'en' ? dist : t(`${dist}`)}
            </option>
          ))}
        </select>

        {/* Village */}
        <label>{t('village_label')}:</label>
        <select
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          className="form-select mb-3"
          disabled={!villages.length}
        >
          <option value="">{t('village_placeholder')}</option>
          {villages.map((vill) => (
            <option key={vill.en} value={vill.en}>
              {i18n.language === 'en' ? vill.en : vill.la}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Location;