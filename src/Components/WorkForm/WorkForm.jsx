import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkForm.css';

function InputsField({
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
      <label htmlFor={labelId} className="rtLabelForm">
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
        />
      )}
    </div>
  );
}

export default function WorkProjectForm({ onAdd, onSave, editingItem = null }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title || '');
      setProjectName(editingItem.projectName || editingItem.category || '');
      setImageUrl(editingItem.imageUrl || editingItem.image || '');
      setProjectLink(editingItem.projectLink || editingItem.link || '');
      setDescription(editingItem.description || '');
      setEditingId(editingItem.id);
    } else {
      setTitle('');
      setImageUrl('');
      setProjectName('');
      setProjectLink('');
      setDescription('');
      setEditingId(null);
    }
  }, [editingItem]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !projectName.trim()) return;

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      category: projectName.trim(),
      projectName: projectName.trim(),
      image: imageUrl.trim() || '/img/card1photo.png',
      imageUrl: imageUrl.trim(),
      link: projectLink.trim(),
      projectLink: projectLink.trim(),
      description: description.trim()
    };

    if (onAdd) onAdd(newProject);
    navigate(-1);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!title.trim() || !projectName.trim()) return;

    const updatedProject = {
      id: editingId || Date.now(),
      title: title.trim(),
      category: projectName.trim(),
      projectName: projectName.trim(),
      image: imageUrl.trim() || '/img/card1photo.png',
      imageUrl: imageUrl.trim(),
      link: projectLink.trim(),
      projectLink: projectLink.trim(),
      description: description.trim()
    };

    if (onSave) onSave(updatedProject);
    navigate(-1);
  };

  return (
    <div className="work-form-container">
      <div className="work-form-top-bar">
        <button 
          type="button" 
          onClick={() => navigate(-1)} 
          className="work-back-btn"
        >
          ← Back
        </button>
      </div>

      <form className="work-form-content" onSubmit={(e) => e.preventDefault()}>
        <InputsField
          labelField="Project Name / Category"
          labelId="work_project_name"
          inputType="text"
          placeholder="e.g. Mobile App for Food Delivery Service"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <InputsField
          labelField="Add Title"
          labelId="work_title"
          inputType="text"
          placeholder="e.g. HungryBites"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <InputsField
          labelField="Add Image"
          labelId="work_image"
          inputType="text"
          placeholder="Enter image URL (e.g. /img/card2photo.png)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <InputsField
          labelField="Project Link"
          labelId="work_project_link"
          inputType="url"
          placeholder="e.g. https://www.hungrybites.com"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <InputsField
          labelField="Short Description"
          labelId="work_description"
          placeholder="Write project description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isTextarea={true}
          rows={4}
        />
        <div className="work-actions-group">
          {editingItem ? (
            <button 
              type="button" 
              onClick={handleSaveChanges} 
              className="work-btn-action work-btn-save"
            >
              Save Changes
            </button>
          ) : (
            <button 
              type="button" 
              onClick={handleAdd} 
              className="work-btn-action work-btn-add"
            >
              Add
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="work-btn-action work-btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}