import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import FormInput from '../../components/shared/FormInput';
import PasswordInput from '../../components/shared/PasswordInput';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      console.log('Login values:', values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      showBackgroundImage 
      title="Sign In to Salon Connect"
      backgroundImage="/src/assets/images/salon-login.svg"
    >
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="exam@gmail.com"
            />
            
            <PasswordInput
              label="Your Password"
              name="password"
              placeholder="**********"
            />
            
            <div className="mb-6">
              <Link to="/auth/forgot-password" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <div className="space-y-4">
              <AuthButton 
                type="submit" 
                isLoading={isSubmitting || isLoading}
              >
                Sign In
              </AuthButton>
              
              <div className="relative flex items-center justify-center my-4">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="mx-4 text-sm text-gray-500">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>
              
              <AuthButton
                type="button"
                variant="outline"
                onClick={() => console.log('Google sign in')}
              >
                <div className="flex items-center justify-center">
                  <FcGoogle className="w-5 h-5 mr-2" />
                  <span>Sign In with Google</span>
                </div>
              </AuthButton>
            </div>
          </Form>
        )}
      </Formik>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;