import React from "react";
import Typography from "../../../../components/Typography/Typography";
import { AdminModuleService } from "../../../../services/moduleService";
import { Form, Formik } from "formik";
import { Input, TextArea } from "../../../../components/Inputs";
import FileUpload from "../../../../components/Inputs/FileUpload";
import { useLoader } from "../../../../hooks/use-loader.hook";
import { toast } from "react-toastify";
import { CreateModuleValidation } from "../../../../validations/Admin/Module";
import classes from "../index.module.css";
import { useState } from "react";
import { ERRORS } from "../../../../utils/validationHelper";

const getInitialValues = (editData) => {
  const values = { title: "", description: "", thumbnail: "" };
  if (editData.id) {
    values.title = editData.title;
    values.description = editData.description;
  }
  return values;
};

const CreateEditModule = ({ editData = {}, setOpen, setRefresh }) => {
  const [startLoader, stopLoader] = useLoader();
  const initialValues = getInitialValues(editData);
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileError, setFileError] = useState("");

  const handleSubmit = (values) => {
    if (!editData.thumbnail) {
      if (!selectedFile?.name) {
        setFileError(ERRORS.required);
        return;
      }
      const isLogoImageValid = /(jpg|png|peg)$/.test(
        selectedFile?.name?.slice(-4)
      );
      if (!isLogoImageValid) {
        setFileError("Please select a valid image format");
        return;
      }
      setFileError("");
    }

    const payload = new FormData();
    payload.append("thumbnail", selectedFile);
    payload.append("values", JSON.stringify(values));

    if (editData.id) {
      AdminModuleService.Update(
        editData.id,
        payload,
        () => startLoader("update"),
        handleSuccess,
        handleError,
        () => stopLoader("update")
      );
    } else {
      AdminModuleService.Create(
        payload,
        () => startLoader("create"),
        handleSuccess,
        handleError,
        () => stopLoader("create")
      );
    }
  };

  const handleSuccess = () => {
    setOpen(false);
    setRefresh(Date.now());
    toast.success(`Module ${editData.id ? "updated" : "created"}!`);
  };

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className={classes.CreateModal}>
      <Typography content={`${editData.id ? "Edit" : "Create"} Module`} />
      <Formik
        onSubmit={handleSubmit}
        validationSchema={CreateModuleValidation}
        initialValues={initialValues}
      >
        <Form>
          <div className="input-container">
            <div className="field-container-full-width">
              <label htmlFor="title">Title</label>
              <Input name="title" />
            </div>
          </div>
          <div className="input-container">
            <div className="field-container-full-width">
              <label htmlFor="description">Description</label>
              <TextArea name="description" label="description" />
            </div>
          </div>
          <div className="input-container">
            <div className="field-container-full-width">
              <label htmlFor="thumbnail">Thumbnail</label>
              <FileUpload
                name="thumbnail"
                accept="image/*"
                onChange={handleFileChange}
                id="thumbnail"
              />
              {fileError && <div className="error-msg">{fileError}</div>}
            </div>
          </div>
          <div className="buttons-container">
            <div>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateEditModule;
