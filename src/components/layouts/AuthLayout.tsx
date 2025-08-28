
// import { motion } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { AuthLayoutProps } from '../../types/auth';

// const AuthLayout = ({ 
//   children, 
//   showBackgroundImage = false, 
//   title,
//   showLogo = true,
//   centerContent = false,
//   backgroundImage
// }: AuthLayoutProps) => {
//   const location = useLocation();
  
//   const getBackgroundImage = () => {
//     if (backgroundImage) {
//       return backgroundImage;
//     }
    
//     if (location.pathname.includes('forgot-password')) {
//       return "/src/assets/images/forgot-password.svg";
//     }
    
//     return "/src/assets/images/salon-login.svg";
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row">
//       <motion.div 
//         className={`w-full ${showBackgroundImage ? 'lg:w-1/2' : ''} p-8 md:p-12 lg:p-16 flex items-center justify-center`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className={`w-full max-w-md ${centerContent || !showBackgroundImage ? 'mx-auto text-center' : ''}`}>
//           {showLogo && (
//             <div className="flex justify-center mb-8">
//               <Link to="/">
//                 <img 
//                   src="/src/assets/images/Salon Connect-02 1.png" 
//                   alt="Salon Connect" 
//                   className="h-20" 
//                 />
//               </Link>
//             </div>
//           )}
          
//           {title && (
//             <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h1>
//           )}
          
//           {children}
//         </div>
//       </motion.div>
      
//       {showBackgroundImage && (
//         <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
//           <img
//             src={getBackgroundImage()}
//             alt="Salon Connect"
//             className="w-full h-full object-cover"
//           />
          
//           {(location.pathname === '/login' || location.pathname === '/signup') && (
//             <div className="absolute bottom-8 right-8">
//               <img
//                 src="/src/assets/images/salon-tools.svg"
//                 alt="Salon Tools"
//                 className="w-32 h-32"
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthLayout;

