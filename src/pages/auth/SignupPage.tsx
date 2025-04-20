import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import FormInput from '../../components/shared/FormInput';
import PasswordInput from '../../components/shared/PasswordInput';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';
import { motion } from 'framer-motion';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
});

const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (values: { name: string; email: string; password: string; confirmPassword: string }) => {
    try {
      if (!termsAccepted) {
        console.error('Terms and conditions must be accepted');
        return;
      }

      setIsLoading(true);
      console.log('Signup values:', values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AuthLayout 
        showBackgroundImage 
        title="Sign up for free"
        backgroundImage="/src/assets/images/salon-signup.png"
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormInput
                label="Your Name"
                name="name"
                type="text"
                placeholder="your name"
              />
              
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="example@email.com"
              />
              
              <PasswordInput
                label="Your Password"
                name="password"
                placeholder="**********"
              />
              
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="**********"
              />
              
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
                </label>
              </div>
              
              <div className="space-y-4">
                <AuthButton 
                  type="submit" 
                  isLoading={isSubmitting || isLoading}
                >
                  Sign Up
                </AuthButton>
                
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <span className="mx-4 text-sm text-gray-500">or</span>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                
                <AuthButton
                  type="button"
                  variant="outline"
                  onClick={() => console.log('Google sign up')}
                >
                  <div className="flex items-center justify-center">
                    <FcGoogle className="w-5 h-5 mr-2" />
                    <span>Sign Up with Google</span>
                  </div>
                </AuthButton>
              </div>
            </Form>
          )}
        </Formik>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </AuthLayout>
    </motion.div>
  );
};

export default SignupPage; 