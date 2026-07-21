const Button = ({ onClick, children, type="button"}) => {
  return (
    <div>
      <button onClick={onClick} type={type} className="bg-purple-500 hover:bg-purple-700  text-white font-bold py-2 px-4 rounded-[5%]" >
        {children}
      </button>
    </div>
  )
}

export default Button
