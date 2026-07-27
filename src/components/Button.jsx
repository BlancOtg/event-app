const Button = ({ onClick, children, type="button"}) => {
  return (
    <div>
      <button onClick={onClick} type={type} className="bg-purple-500 hover:bg-purple-700 h-fit  text-white font-bold py-2 px-5 rounded-full" >
        {children}
      </button>
    </div>
  )
}

export default Button
