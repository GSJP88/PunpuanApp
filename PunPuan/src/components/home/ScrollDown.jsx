import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../Service/i18n/i18n';

const ScrollDown = () => {
  const { t } = useTranslation();

  return (
    <div className="home__scroll">
        <a href="#filter" className="home__scroll-button button--flex">
            <span className="home__scroll-text">{t('see_more')}</span>
            <i class="bi bi-caret-down-fill "></i>
        </a>
    </div>
  );
}

export default ScrollDown;