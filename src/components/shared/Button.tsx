import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode; 
  iconPosition?: "left" | "right"; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

function Button({
  text,
  icon,
  iconPosition = "left",
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all capitalize flex items-center gap-2",
        className
      )}
    >
      {iconPosition === "left" && icon}
      <span>{text}</span>
      {iconPosition === "right" && icon}
    </button>
  );
}

export default Button;
