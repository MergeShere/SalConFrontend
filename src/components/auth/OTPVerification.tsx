import React, { useState } from 'react';
import { OTPVerificationProps } from '../../types/auth';

const OTPVerification: React.FC<OTPVerificationProps> = ({ email, onVerify }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (index: number, value: string) => {
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify(otp.join(''));
  };

  return (
    <div className="p-6 md:p-12 max-w-xl mx-auto bg-white shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
      <h6 className='pt-8 font-bold text-center'>Enter OTP</h6>
      <p className="text-center text-gray-600">
        Please enter the OTP sent to your registered email:
        <br />
        <span className="text-blue-600">{email}</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
        <div className="flex justify-center space-x-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              maxLength={1}
              className="w-10 h-10 text-justify border border-gray-300 rounded"
            />
          ))}
        </div>
        <button
          type="submit"
          className=" w-full bg-black text-white py-2 rounded hover:opacity-90"
>
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
