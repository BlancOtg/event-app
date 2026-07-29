import { twMerge } from 'tailwind-merge';

const Button = ({ onClick, children, type = "button", className = "",  }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={twMerge(
          "bg-purple-500 hover:bg-purple-700 h-fit text-white font-bold py-2 px-5 rounded-full",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
