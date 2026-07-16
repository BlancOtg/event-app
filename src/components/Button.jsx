const Button = ({ onClick, children, type="button"}) => {
  return (
    <div>
      <button className="bg-purple-500 hover:bg-purple-700  text-white font-bold py-2 px-4 rounded-[15%]" onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  )
}

export default Button
