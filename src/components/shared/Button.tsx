import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

function Button({
  text,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const iconVariants = {
    initial: { x: 0 },
    hover: { 
      x: iconPosition === "right" ? 5 : -5,
      transition: { repeat: 0, duration: 0.3 }
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-black text-white  px-6 py-3 rounded-md hover:bg-gray-800 transition-all capitalize flex items-center gap-2",
        className,
        disabled && "opacity-50 cursor-not-allowed"
      )}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      transition={{ duration: 0.2 }}
    >
      {iconPosition === "left" && icon && (
        <motion.span variants={iconVariants}>
          {icon}
        </motion.span>
      )}
      
      <span>{text}</span>
      
      {iconPosition === "right" && icon && (
        <motion.span variants={iconVariants}>
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
}

export default Button;