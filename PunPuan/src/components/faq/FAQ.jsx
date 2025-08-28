import React, { useState, useRef, useEffect } from 'react';
import '../../Styles/faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const faqDataKeys = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
  { questionKey: 'faq.q5', answerKey: 'faq.a5' },
  { questionKey: 'faq.q6', answerKey: 'faq.a6' },
  { questionKey: 'faq.q7', answerKey: 'faq.a7' },
];

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    // Adjust max-height for active answer panel
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      el.style.maxHeight = idx === activeIndex ? el.scrollHeight + 'px' : '0';
    });
  }, [activeIndex]);

  return (
    <div className="faq-container" id='faq'>
      <h2 className="faq-title title">{t('faq.title')}</h2>
      <div className="faq-list">
        {faqDataKeys.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleIndex(index)}>
              <span>{t(item.questionKey)}</span>
              {activeIndex === index ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </div>
            <div ref={el => (answerRefs.current[index] = el)} className="faq-answer-wrapper">
              <div className="faq-answer">{t(item.answerKey)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;