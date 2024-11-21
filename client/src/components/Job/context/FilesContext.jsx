import {useContext, createContext, useState} from 'react';

const FilesContext = createContext({});

export const FilesProvider = ({ children }) => {

  const [files, setFiles] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
      setDragActive(false);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
    }
  };

  return (
    <FilesContext.Provider value={{
      files, handleDrag, handleDrop, handleUpload
    }}>
    {children}
    </FilesContext.Provider>
  );
};

export default FilesContext;
