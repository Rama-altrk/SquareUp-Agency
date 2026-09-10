
import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import './faq.css';

const FaqCard = ({ item, isOpen, toggleFAQ }) => {
  return (
    <div
      className={`HM-faq-card ${isOpen ? 'HM-open' : ''}`}
      onClick={() => toggleFAQ(item.id)}
    >
      <span className="HM-faq-number">
        {String(item.id).padStart(2, '0')}
      </span>

      <div className="HM-faq-content">

        <div className="HM-faq-card-header">
          <h3 className="HM-faq-question">
            {item.question}
          </h3>

          <button
            className="HM-faq-icon-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(item.id);
            }}
          >
            {isOpen ? <FaTimes /> : <FaPlus />}
          </button>
        </div>

        {isOpen && item.answer && (
          <div className="HM-faq-answer">
            <p>{item.answer}</p>
          </div>
        )}

      </div>
    </div>
  );
};

const Faq = ({ items }) => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };


  const leftItems = items?.slice(0, 4) || [];
  const rightItems = items?.slice(4, 8) || [];

  return (
    <section className="HM-faq-section">
      <div className="HM-faq-grid">

        <div className="HM-faq-column">
          {leftItems.map((item) => (
            <FaqCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>


        <div className="HM-faq-column">
          {rightItems.map((item) => (
            <FaqCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;