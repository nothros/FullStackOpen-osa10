import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

const initialValues = {
  name: '',
  pword: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(2).required("Username is required"),
  pword: yup.string().required("Password is required")
})


const SignIn = () => {

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );

};

export default SignIn;