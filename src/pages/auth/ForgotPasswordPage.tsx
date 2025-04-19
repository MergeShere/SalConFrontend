import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ArrowLeft } from 'lucide-react';
import FormInput from '../../components/shared/FormInput';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: { email: string }) => {
    try {
      setIsLoading(true);
      console.log('Forgot password email:', values.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/auth/verify-otp');
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout showBackgroundImage>
      <div className="mb-6">
        <Link to="/login" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Login</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      
      <p className="text-gray-600 mb-8">
        Enter your Email to reset password
      </p>
      
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="example@email.com"
            />
            
            <div className="mt-10">
              <AuthButton 
                type="submit" 
                isLoading={isSubmitting || isLoading}
              >
                Next
              </AuthButton>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;