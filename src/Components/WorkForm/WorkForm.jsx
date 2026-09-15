import  { useState } from 'react';
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
  
  const [title, setTitle] = useState(editingItem ? editingItem.title : '');
  const [imageUrl, setImageUrl] = useState(editingItem ? editingItem.imageUrl : '');
  const [projectName, setProjectName] = useState(editingItem ? editingItem.projectName : '');
  const [projectLink, setProjectLink] = useState(editingItem ? editingItem.projectLink : '');
  const [description, setDescription] = useState(editingItem ? editingItem.description : '');
  const [editingId, setEditingId] = useState(editingItem ? editingItem.id : null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !projectName.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      imageUrl,
      projectName,
      projectLink,
      description
    };

    if (onAdd) onAdd(newProject);

    setTitle('');
    setImageUrl('');
    setProjectName('');
    setProjectLink('');
    setDescription('');
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!title.trim() || !projectName.trim()) return;

    const updatedProject = {
      id: editingId || Date.now(),
      title,
      imageUrl,
      projectName,
      projectLink,
      description
    };

    if (onSave) onSave(updatedProject);

  
    setTitle('');
    setImageUrl('');
    setProjectName('');
    setProjectLink('');
    setDescription('');
    setEditingId(null);
  };

  return (
    <div className="work-form-container">
      <form className="work-form-content" onSubmit={(e) => e.preventDefault()}>
        
        <InputsField
          labelField="Add Title"
          labelId="work_title"
          inputType="text"
          placeholder="e.g. Mobile App for Food Delivery Service"
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
          labelField="Project Name"
          labelId="work_project_name"
          inputType="text"
          placeholder="e.g. HungryBites"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
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
          <button 
            type="button" 
            onClick={handleAdd} 
            className="work-btn-action work-btn-add"
          >
            Add
          </button>

          <button 
            type="button" 
            onClick={handleSaveChanges} 
            className="work-btn-action work-btn-save"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}