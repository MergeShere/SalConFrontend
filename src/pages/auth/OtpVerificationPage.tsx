import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';

const OtpSchema = Yup.object().shape({
  otp: Yup.array()
    .of(Yup.string().required('Required').length(1, 'Required'))
    .length(5, 'All fields are required')
});

const OtpVerificationPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  
  // Email would typically come from context, route params, or redux
  const email = "example@email.com";
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = async (values: { otp: string[] }) => {
    try {
      setIsLoading(true);
      console.log('OTP values:', values.otp.join(''));
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/auth/set-password');
    } catch (error) {
      console.error('OTP verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value !== '' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Auto-focus previous input on backspace
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    if (!/^\d+$/.test(pastedData)) return; // Only allow numbers
    
    const digits = pastedData.split('').slice(0, 5);
    const newOtpValues = [...otpValues];
    
    digits.forEach((digit, index) => {
      if (index < 5) {
        newOtpValues[index] = digit;
      }
    });
    
    setOtpValues(newOtpValues);
    
    // Focus the next empty input or the last one if all are filled
    const nextEmptyIndex = newOtpValues.findIndex(val => val === '');
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[4]?.focus();
    }
  };

  return (
    <AuthLayout centerContent title="Forgot Password">
      <h2 className="text-xl font-medium mb-2">Enter OTP</h2>
      
      <p className="text-gray-600 mb-8">
        Please enter the OTP sent to your registered email:
        <br />
        <span className="text-blue-600">{email}</span>
      </p>
      
      <Formik
        initialValues={{ otp: otpValues }}
        validationSchema={OtpSchema}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="flex justify-center gap-2 md:gap-4 mb-8">
              {otpValues.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                    return undefined;
                  }}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 md:w-16 md:h-16 text-center text-xl border border-gray-300 rounded-lg focus:border-gray-700 focus:ring-0 focus:outline-none"
                  value={digit}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    handleOtpChange(index, value);
                    setFieldValue(`otp[${index}]`, value);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                />
              ))}
            </div>
            
            <AuthButton type="submit" isLoading={isSubmitting || isLoading}>
              Verify
            </AuthButton>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default OtpVerificationPage;