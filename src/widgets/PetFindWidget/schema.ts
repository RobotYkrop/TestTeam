import * as yup from 'yup';

export const initialValues = { message: '', coordinates: [] };

export const validationSchema = yup.object().shape({
  message: yup
    .string()
    .trim()
    .required('Поле обязательно для заполнения'),
});
