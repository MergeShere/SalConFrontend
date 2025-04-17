import { cn } from "../../lib/utils";



type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

function Button({ text, onClick, type = "button", className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all capitalize",
        className
      )}
    >
      {text}
    </button>
  );
}

export default Button;
