import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PasswordInput from '../../components/shared/PasswordInput';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';

const SetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
});

const SetPasswordPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: { password: string; confirmPassword: string }) => {
    try {
      setIsLoading(true);
      console.log('Password values:', values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/auth/success');
    } catch (error) {
      console.error('Set password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout centerContent title="Set Password">
      <Formik
        initialValues={{
          password: '',
          confirmPassword: ''
        }}
        validationSchema={SetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="text-left">
            <PasswordInput
              label="New Password"
              name="password"
              placeholder="**********"
            />
            
            <PasswordInput
              label="Confirm New Password"
              name="confirmPassword"
              placeholder="**********"
            />
            
            <div className="mt-10">
              <AuthButton 
                type="submit" 
                isLoading={isSubmitting || isLoading}
              >
                Confirm
              </AuthButton>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default SetPasswordPage;