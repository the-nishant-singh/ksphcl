import React from "react";
import Typography from "../../../../components/Typography/Typography";
import classes from "../index.module.css";
import { Form, Formik } from "formik";
import { Input } from "../../../../components/Inputs";
import { useLoader } from "../../../../hooks/use-loader.hook";
import { toast } from "react-toastify";
import {
  CreateUserValidation,
  UpdateUserValidation,
} from "../../../../validations/Admin/User";
import { AdminUserService } from "../../../../services/userService";
import PhoneNumberComponent from "../../../../components/Inputs/PhoneNumberComponent";
import Dropdown from "../../../../components/Inputs/Dropdown";

const getInitialValues = (editData) => {
  const values = {
    name: "",
    email: "",
    contact: { countryCode: "+91", phone: "" },
    companyId: "",
    licenseId: "",
    password: null,
  };
  if (editData.id) {
    values.name = editData.name;
    values.email = editData.email;
    values.contact = editData.contact;
    values.companyId = editData.companyId;
    values.licenseId = editData.licenseId;
  }
  return values;
};

const getCompanyOptions = (companies) => {
  const options = [];
  companies.forEach((comp) =>
    options.push({ label: comp.name, value: comp.id })
  );
  return options;
};

const CreateEditUser = ({
  editData = {},
  setOpen,
  companies = [],
  setRefresh = () => {},
}) => {
  const [startLoader, stopLoader] = useLoader();
  const initialValues = getInitialValues(editData);
  const companyOptions = getCompanyOptions(companies);

  const handleSubmit = (values) => {
    if (editData.id) {
      AdminUserService.Update(
        editData.id,
        values,
        () => startLoader("update"),
        handleSuccess,
        handleError,
        () => stopLoader("update")
      );
    } else {
      AdminUserService.Create(
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
    toast.success(`User ${editData.id ? "updated" : "created"}!`);
  };

  const handleError = (err) => {
    if (err && err.response) toast.error(err.response.data.message);
  };

  return (
    <div>
      <Typography content={`${editData.id ? "Edit" : "Create"} User`} />
      <Formik
        onSubmit={handleSubmit}
        validationSchema={
          editData.id ? UpdateUserValidation : CreateUserValidation
        }
        initialValues={initialValues}
      >
        {({ errors, touched, values, isValidating, ...props }) => (
          <Form>
            {console.log(errors)}
            <div className="input-container">
              <div className="field-container-full-width">
                <label htmlFor="companyId">Company</label>
                <Dropdown
                  name="companyId"
                  options={companyOptions}
                  defaultValue={{ value: initialValues.companyId }}
                />
              </div>
              <div className="field-container-full-width">
                <label htmlFor="name">Name</label>
                <Input name="name" />
              </div>
            </div>
            <div className="input-container">
              <div className="field-container-full-width">
                <label htmlFor="email">Email</label>
                <Input name="email" />
              </div>
              <div className="field-container-full-width">
                <label htmlFor="phone">Phone</label>
                <PhoneNumberComponent
                  props={props}
                  inputName="contact.phone"
                  countryCodeName="contact.countryCode"
                  inputValues={values}
                  defaultCountryCode={{
                    value: initialValues.contact.countryCode,
                  }}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="field-container-full-width">
                <label htmlFor="password">Password</label>
                <Input name="password" type="password" />
              </div>
              <div className="field-container-full-width">
                <label htmlFor="name">License ID</label>
                <Input name="licenseId" />
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
        )}
      </Formik>
    </div>
  );
};

export default CreateEditUser;
