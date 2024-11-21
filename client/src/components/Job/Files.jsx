import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import './files.scss';
import { useContext } from 'react';
import FilesContext from './context/FilesContext'


const Files = () => {

  const { files, handleUpload, handleDrop, handleDrag, dragActive } = useContext(FilesContext);

  const inputRef = useRef(null);

const browse = (e) => {
  e.preventDefault();
  inputRef.current.click();
};

  return (
    <section>
      <label htmlFor='files'><b>Please Upload Any Relevant Documents</b></label>
      <input ref={inputRef} id='files' name='files' type='file' multiple={true} onChange={handleUpload}/>
      <div className={dragActive ? 'dragDropActive' : 'dragDrop' } onDragEnter={handleDrag}>
        <p >Drag and Drop Files Here<br />
          or </p>
        <button className='upload' onClick={browse}>Browse Files</button>
        { dragActive && <div className='cover' onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop} ></div> }
      </div>
    </section>
  );
};

Files.propTypes = {
  files: PropTypes.object,
  dragActive: PropTypes.bool,
  handleDrag: PropTypes.func,
  handleUpload: PropTypes.func,
  handleDrop: PropTypes.func,
};

export default Files;
