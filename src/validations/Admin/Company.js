import * as yup from 'yup'
import { ERRORS } from '../../utils/validationHelper'

export const CreateCompanyValidation = yup.object().shape({
    name: yup.string().required(ERRORS.required)
})