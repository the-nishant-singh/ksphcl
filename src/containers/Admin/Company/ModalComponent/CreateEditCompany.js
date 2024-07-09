import React from "react";
import Typography from "../../../../components/Typography/Typography";
import { Form, Formik } from "formik";
import { Input } from "../../../../components/Inputs";
import { CreateCompanyValidation } from "../../../../validations/Admin/Company";
import { AdminCompanyService } from "../../../../services/companyService";
import { useLoader } from "../../../../hooks/use-loader.hook";
import { toast } from "react-toastify";

const getInitialValues = (editData) => {
  const values = { name: "" };
  if (editData.id) {
    values.name = editData.name;
  }
  return values;
};

const CreateEditCompany = ({ editData = {}, setOpen, setRefresh }) => {
  const [startLoader, stopLoader] = useLoader();
  const initialValues = getInitialValues(editData);

  const handleSubmit = (values) => {
    if (editData.id) {
      AdminCompanyService.Update(
        editData.id,
        values,
        () => startLoader("update"),
        handleSuccess,
        handleError,
        () => stopLoader("update")
      );
    } else {
      AdminCompanyService.Create(
        values,
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
    toast.success(`Company ${editData.id ? "updated" : "created"}!`);
  };

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  return (
    <div>
      <Typography content={`${editData.id ? "Edit" : "Create"} Company`} />
      <Formik
        onSubmit={handleSubmit}
        validationSchema={CreateCompanyValidation}
        initialValues={initialValues}
      >
        <Form>
          <div className="input-container">
            <div className="field-container">
              <label htmlFor="name">Name</label>
              <Input name="name" />
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

export default CreateEditCompany;
