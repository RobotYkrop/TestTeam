import * as yup from 'yup';

export const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
};

export const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .trim()
    .min(4, 'Имя должно состоять не менее 4 символов')
    .max(20, 'Имя должно состоять не более 20 символов')
    .required('Обязательное поле'),
  lastname: yup
    .string()
    .trim()
    .min(4, 'Фамилия должно состоять не менее 4 символов')
    .max(30, 'Фамилия должно состоять не более 30 символов')
    .required('Обязательное поле'),
  email: yup.string().email('Пожалуйста, введите правильный адрес электронной почты')
    .required('Обязательное поле'),
  password: yup
    .string()
    .trim()
    .min(6, 'Пароль должен содержать не менее 8 символов')
    .max(40, 'Пароль должен содержать не более 40 символов')
    .required('Обязательное поле'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});
