import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { Block, Button, Separator } from '../../../shared/index';

import { initialValues, validationSchema } from './schema';
import css from '../forms.module.scss';

import type { NewUser } from '../../../types/AuthDTO';

export default function SignUpForm(): JSX.Element {
  const onSubmit = (values: NewUser & { agree: boolean }) => {
    console.log(values);
  };

  return (
    <Block constraints={{ w: 430 }} style={{ paddingBlock: 40 }} fitContent>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Имя</label>
            <Field
              className={
              errors.firstname && touched.firstname ? css.negative : css.input
            }
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Введите имя"
            />
            {touched.firstname && errors.firstname && (
              <p>{errors.firstname}</p>
            )}
            <label htmlFor="lastname">Фамилия</label>
            <Field
              className={errors.lastname && touched.lastname ? css.negative : css.input}
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Введите фамилию"
            />
            {touched.lastname && errors.lastname && (
              <p>{errors.lastname}</p>
            )}
            <label htmlFor="email">Электронная почта</label>
            <Field
              className={errors.email && touched.email ? css.negative : css.input}
              type="email"
              id="email"
              name="email"
              placeholder="Введите адрес"
            />
            {touched.email && errors.email && (
              <p>{errors.email}</p>
            )}
            <label htmlFor="password">Пароль</label>
            <Field
              className={errors.password && touched.password ? css.negative : css.input}
              type="password"
              id="password"
              name="password"
              placeholder="Введите пароль"
            />
            {touched.password && errors.password && (
              <p>{errors.password}</p>
            )}
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <Field
              className={errors.confirmPassword && touched.confirmPassword ? css.negative : css.input}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p>{errors.confirmPassword}</p>
            )}
            <Separator type='horizontal' />
            <div className={css.data}>
              <input id="agree" type="checkbox" defaultChecked={touched.agree} className={css.checkbox} />
              <label className={css.description} htmlFor="agree">Я даю согласие на обработку персональных данных</label>
            </div>
            <Button.Filled
              type='submit'
              /* disabled={!isValid && !dirty} */
              style={{ marginTop: 20, paddingBlock: '0.45em' }}
            >
              Подтвердить
            </Button.Filled>
            <div className={css.signin}>
              Уже зарегистрированы?&nbsp;
              <Link to="/sign-in">Войдите.</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Block>
  );
}
