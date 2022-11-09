import SignInForm from './SignInForm/SignInForm';
import SignUpForm from './SignUpForm/SignUpForm';

export const FormWidget = {
  SignIn: (): JSX.Element => <SignInForm />,
  SignUp: (): JSX.Element => <SignUpForm />,
};
