
const Button = ({text, font}) => {
  return (
    <button className={`bg-yellow-400 text-gray-800 px-6 py-3 ${font}  hover:bg-yellow-500` }>
      {text}
    </button>
  )
}

export default Button