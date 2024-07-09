import * as yup from "yup";
import { ERRORS } from "../../utils/validationHelper";

export const CreateUserValidation = yup.object().shape({
  name: yup.string().required(ERRORS.required),
  email: yup.string().email(ERRORS.email).required(ERRORS.required),
  contact: yup.object().shape({
    countryCode: yup.string().required(ERRORS.required),
    phone: yup.string().required(ERRORS.required),
  }),
  password: yup.string().required(ERRORS.required).min(8),
  licenseId: yup.string().required(ERRORS.required),
  companyId: yup.string().required(ERRORS.required),
});

export const UpdateUserValidation = yup.object().shape({
  name: yup.string().required(ERRORS.required),
  email: yup.string().email(ERRORS.email).required(ERRORS.required),
  contact: yup.object().shape({
    countryCode: yup.string().required(ERRORS.required),
    phone: yup.string().required(ERRORS.required),
  }),
  password: yup.string().min(8).nullable(),
  licenseId: yup.string().required(ERRORS.required),
  companyId: yup.string().required(ERRORS.required),
});
