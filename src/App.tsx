import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop.tsx';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';
import SignupPage from './pages/auth/SignupPage.tsx';
import SuccessPage from './pages/auth/SuccessPage.tsx';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.tsx';
import OtpVerificationPage from './pages/auth/OtpVerificationPage.tsx';
import SetPasswordPage from './pages/auth/SetPasswordPage.tsx';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/auth/success" element={<SuccessPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/verify-otp" element={<OtpVerificationPage />} />
            <Route path="/auth/set-password" element={<SetPasswordPage />} />
            
            <Route path="/" element={<HomePage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <ScrollToTop />
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default App;