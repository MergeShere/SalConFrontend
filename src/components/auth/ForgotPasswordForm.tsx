import React, { useState } from 'react';
import { ForgotPasswordFormProps } from '../../types/auth';

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:p-12 bg-white shadow max-w-full mx-auto">
      <div className="flex-1 space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">Forgot Password</h2>
        <p className="pb-10 text-gray-600">Enter your Email to reset password</p>
        <form onSubmit={handleSubmit} className="space-y-4">
        <h6>Email</h6>
        <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className= "w-full bg-black text-white py-2 rounded hover:opacity-90"
          >
            Next
          </button>
        </form>
      </div>
      <div className="hidden md:block w-1/2 h-full">
  <img src="/src/assets/forgot-image.png" alt="Forgot" className="w-full h-full object-cover" />
</div>

    </div>
  );
};

export default ForgotPasswordForm;
