import { Field, ErrorMessage } from 'formik';
import { FormInputProps } from '../../types/auth';

const FormInput = ({ label, name, type = 'text', ...rest }: FormInputProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-800 font-medium mb-2">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        id={name}
        className="w-full border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-gray-900 bg-transparent"
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default FormInput;