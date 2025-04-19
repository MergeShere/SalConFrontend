import React, { useState } from 'react';
import { ResetPasswordFormProps } from '../../types/auth';

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password); 
  };

  return (
    <div className="p-6 md:p-12 max-w-xl mx-auto bg-white shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Set Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <h6 className=' font-bold text-center'>New Password</h6>
      <input
          type="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <h6 className='font-bold text-center'>Confirm New Password</h6>
        <input
          type="password"
          placeholder="***********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
