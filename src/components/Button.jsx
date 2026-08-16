import { twMerge } from "tailwind-merge";

const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={twMerge(
        "bg-purple-500 hover:bg-purple-700 h-fit text-white font-bold py-2 px-5 rounded-full cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
