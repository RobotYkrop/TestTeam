import { Form, Formik, Field } from 'formik';
import { Block, Button } from '../../../shared/index';

import { initialValues, validationSchema } from './schema';
import css from '../forms.module.scss';

import { useLoginUserMutation } from '../../../services/authAPI';
import type { LoginUser } from '../../../types/AuthDTO';

export default function SignInForm(): JSX.Element {
  const [loginUser, { error, data, isLoading, isSuccess, isError }] = useLoginUserMutation();

  const onSubmitForm = (values: LoginUser) => {
    if (!values) {
      console.log('Данные отсутствуют');
    }
    loginUser(values);
  };

  if (isSuccess) {
    console.log('Авторизация выполнена');
    console.log(data);
  }

  if (error) {
    console.log('Что-то пошло не так!');
  }

  return (
    <Block constraints={{ w: 430 }} style={{ paddingBlock: 40 }} fitContent>
      <h1>Вход</h1>
      <Formik
        onSubmit={onSubmitForm}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">Логин</label>
            <Field
              className={errors.username && touched.username ? css.negative : css.input}
              id="username"
              name="username"
              placeholder="Введите логин"
            />
            {errors.username && touched.username && <p>{errors.username}</p>}
            <label htmlFor="password">Пароль</label>
            <Field
              className={errors.password && touched.password ? css.negative : css.input}
              id="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
            <Button.Filled
              type='submit'
              style={{ marginTop: 20, paddingBlock: '0.45em' }}
            >
              Войти
            </Button.Filled>
          </Form>
        )}
      </Formik>
    </Block>
  );
}
