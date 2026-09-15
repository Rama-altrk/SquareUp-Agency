
import { COLORS } from '../../assets/constants/colors';
import { FONTS } from '../../assets/constants/fonts';
import './FaqForm.css';
import { useState } from 'react';

export function InputsField({
  className = '',
  widthField = '100%',
  labelField,
  labelId,
  inputType = 'text',
  value = '',
  onChange,
  placeholder = 'Type here',
  isTextarea = false,
  rows = 3
}) {
  return ( 
    <div className={`rtContainerInput ${className}`} style={{ width: widthField }}>
      <label 
        htmlFor={labelId} 
        className="rtLabelForm" 
        style={{ ...FONTS.medium, color: COLORS.absolutefff }}
      >
        {labelField}
      </label>

      {isTextarea ? (
        <textarea
          id={labelId}
          name={labelId}
          value={value}
          onChange={onChange}
          rows={rows}
          className="rtInputForm rtTextareaForm"
          placeholder={placeholder}
          style={{ ...FONTS.regular, color: COLORS.absolutefff }}
        />
      ) : (
        <input
          type={inputType}
          className="rtInputForm"
          name={labelId}
          id={labelId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ ...FONTS.regular, color: COLORS.absolutefff }}
        />
      )}
    </div>
  );
}

export default function FaqForm({ onAdd, onSave }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    if (onAdd) onAdd({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    if (onSave) onSave({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="faq-dashboard-container">
      <form className="faq-form-content" onSubmit={(e) => e.preventDefault()}>
        

        <InputsField
          labelField="Add Question"
          labelId="add_question"
          inputType="text"
          placeholder="Type here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

    
        <InputsField
          labelField="Add Answer"
          labelId="add_answer"
          placeholder="Type here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          isTextarea={true}
          rows={3}
        />

  
        <div className="faq-actions-group">
          <button 
            type="button" 
            onClick={handleAdd} 
            className="faq-btn-action faq-btn-add"
          >
            Add
          </button>

          <button 
            type="button" 
            onClick={handleSaveChanges} 
            className="faq-btn-action faq-btn-save"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}