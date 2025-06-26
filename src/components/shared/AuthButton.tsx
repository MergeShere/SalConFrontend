import { AuthButtonProps } from '../../types/auth';

const AuthButton = ({
  children,
  fullWidth = true,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...rest
}: AuthButtonProps) => {
  const baseStyles = 'py-3 rounded-md font-medium transition duration-300 focus:outline-none';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  const buttonClasses = `${baseStyles} ${widthStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button
      className={`${buttonClasses} transform transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;