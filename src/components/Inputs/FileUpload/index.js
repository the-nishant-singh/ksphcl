import React, { useState, useEffect, useRef } from 'react';
import classes from './FileUpload.module.css';
import { useField } from 'formik';
import { UilTimesCircle } from '@iconscout/react-unicons';
function FileUpload({ label, onChange, ...props }) {
  const [file, setFile] = useState([]);
  const [field, meta] = useField(props);
  const [preview, setPreview] = useState();

  const drop = useRef(null);

  // useEffect(() => {
  //   if (!file) {
  //     setPreview(undefined);
  //     return;
  //   }
  //   const objectUrl = URL.createObjectURL(file);
  //   setPreview(objectUrl);
  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [file]);

  const onChangeHandler = e => {
    setFile(e.target.files || []);
    onChange(e);
  };
  const removeFile = () => {
    setFile([]);
  };

  // drag and drop
  useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    return () => {
      drop.current && drop.current.removeEventListener('dragover', handleDragOver);
      drop.current && drop.current.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files);
    const file = {
      target: {
        files: e.dataTransfer.files
      }
    };
    onChange(file);
  };
  return (
    <div ref={drop}>
      <div className={classes.MainContainer}>
        <input
          type="file"
          name="uploadfile"
          {...field}
          {...props}
          placeholder={label}
          style={{ display: 'none' }}
          onChange={onChangeHandler}
        />
        <label className={classes.Text} for={props.id}>
          Drag and Drop or <span className={classes.Browse}>Browse</span>
        </label>
      </div>
      {
        console.log("files, file", file)
      }
      {Array.from(file).map((f) => (
        <div className={classes.SelectedFile}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className={classes.PreviewImg} src={URL.createObjectURL(f)} />
            <p>{f.name}</p>
          </div>
          <div onClick={removeFile} className={classes.CloseIcon}>
            <UilTimesCircle style={{ color: 'var(--gray-500)' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileUpload;
