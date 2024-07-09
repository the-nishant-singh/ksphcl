import * as yup from "yup";
import { ERRORS } from "../../utils/validationHelper";

export const CreateModuleValidation = yup.object().shape({
  title: yup.string().required(ERRORS.required),
  description: yup.string().required(ERRORS.required)
});
