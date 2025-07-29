import React, { useState, useRef, useEffect } from 'react';
import '../../Styles/faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is this website about?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
  },
  {
    question: 'How do I create an account?',
    answer:
      'Click on the sign-up button and fill in the required information to create your account.',
  },
  {
    question: 'Is this website free to use?',
    answer: 'Yes, it is completely free to use.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can contact support via the help section or email us directly.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'Go to login, click "Forgot Password", and follow the steps.',
  },
  {
    question: 'How can we rent property?',
    answer: 'Browse listings, filter by your preference, and contact the owner.',
  },
  {
    question: 'How can we contact to owner property?',
    answer: 'Each property has a contact button for direct messaging or call.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleIndex = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    // Adjust max-height for active answer panel
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === activeIndex) {
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        el.style.maxHeight = '0';
      }
    });
  }, [activeIndex]);

  return (
    <div className="faq-container" id='faq'>
      <h2 className="faq-title title">Frequently Asked Question</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleIndex(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </div>
            <div
              ref={el => (answerRefs.current[index] = el)}
              className="faq-answer-wrapper"
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
