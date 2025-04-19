import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import { Eye, EyeOff } from 'lucide-react';
import { PasswordInputProps } from '../../types/auth';

const PasswordInput = ({ label, name, ...rest }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-800 font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <Field
          name={name}
          type={showPassword ? 'text' : 'password'}
          id={name}
          className="w-full border-b border-gray-300 py-2 px-0 pr-10 focus:outline-none focus:border-gray-900 bg-transparent"
          {...rest}
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default PasswordInput;