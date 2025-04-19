import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AuthButton from '../../components/shared/AuthButton';
import AuthLayout from '../../components/layouts/AuthLayout';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout centerContent showLogo={false}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Check size={32} color="white" />
        </motion.div>
        
        <h1 className="text-2xl font-bold mb-4">Successful</h1>
        
        <p className="text-gray-600 mb-12">
          Congratulations! Your password has been successfully updated. Click Continue to login
        </p>
        
        <AuthButton 
          onClick={() => navigate('/login')}
          className="px-8"
        >
          Continue
        </AuthButton>
      </motion.div>
    </AuthLayout>
  );
};

export default SuccessPage;