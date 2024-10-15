import React from 'react';
import { useState, useRef } from 'react';
import './quoteForm.scss';

const QuoteForm = () => {

const [state, setState] = useState ({
  name: '',
  phone: '',
  email: '',
  company: '',
  project: '',
  address: '',
  shipping: '',
  mesh: '',
  rebar: '',
  access: '',
  comments: '',
});

const handleValue = (e) => {
  const value = e.target.type === 'checkbox' ? e.traget.checked : e.target.value;
  setState({
    ...state,
    [e.target.name]: value
  });
};

  const quote = [
    { tag: 'input', label: 'Name:', required: 'required', name: 'name', type: 'text', value: `${state.name}`, size: '32' },
    { tag: 'input', label: 'Phone #:', required: 'required', name: 'phone', type: 'text', value: `${state.phone}`, size: '30' },
    { tag: 'input', label: 'Email:', required: 'required', name: 'email', type: 'email', value: `${state.email}`, size: '32' },
    { tag: 'input', label: 'Company Name:', required: 'required', name: 'company', type: 'text', value: `${state.company}`, size: '23' },
    { tag: 'input', label: 'Project Name:', required: 'required', name: 'project', type: 'text', value: `${state.project}`, size: '25' },
    { tag: 'input', label: 'Company Address:', required: 'required', name: 'address', type: 'text', value: `${state.address}`, size: '21' },
    { tag: 'input', label: 'Shipping Address:', required: 'required', name: 'shipping', type: 'text', value: `${state.shipping}`, size: '22' },
    { tag: 'input', type: 'checkbox', mesh: `${state.mesh}`, rebar: `${state.rebar}`, access: `${state.access}` },
    { tag: 'textarea', label: 'Comments:', name: 'comments', value: `${state.comments}` },
  ];

  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState(null);
  const inputRef = useRef(null);

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
    if (e.dataTransfer.file && e.dataTransfer.file[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
      setDragActive(false);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (e.type.files && e.target.files[0]) {
      const file = e.dataTransfer.files[0];
      setFiles(file);
    }
  };

  const browse = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <main className='getQuote'>
      <h2>You can also get in direct contact with us and have one of our estimators guide you through the process of getting a custom quote.</h2>
      <p>Office Phone #: 601-795-6110</p>
      <p>Email: sales@resteelexpress.com</p>
        <form className='quoteForm' action="">
          {quote.map((input) => (
            input.tag === 'textarea' ?
            <div key={input.name}>
              <label htmlFor={input.name}>{input.label}</label><br />
              <textarea id={input.name} name={input.name} value={input.value} onChange={handleValue} rows='10' cols='40' ></textarea>
            </div> :
            input.type === 'checkbox' ?
            <div key={input.name}>
              <label><b>Check Any You Might Be Interested In:</b></label><br />
              <input name='mesh' type='checkbox' checked={input.mesh} onChange={handleValue} />Mesh
              <input name='rebar' type='checkbox' checked={input.rebar} onChange={handleValue} />Rebar
              <input name='access' type='checkbox' checked={input.access} onChange={handleValue} />Accessories
            </div> :
            <div key={input.name}>
              <label htmlFor={input.name} className={input.required}>{input.label}</label>
              <input required={input.required} name={input.name} id={input.name} type={input.type} value={input.value} size={input.size} onChange={handleValue} />
            </div>
          ))}
          <input ref={inputRef} id='files' name='files' type='file' multiple={true} onChange={handleUpload}/>
          <div className={dragActive ? 'dragDropActive' : 'dragDrop' } onDragEnter={handleDrag}>
            <p >Drag and Drop Files Here<br />
              or </p>
            <button className='upload' onClick={browse}>Browse Files</button>
            { dragActive && <div className='cover' onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop} ></div> }
          </div>
          <button>Submit</button>
        </form>
    </main>
  );
};

export default QuoteForm;
