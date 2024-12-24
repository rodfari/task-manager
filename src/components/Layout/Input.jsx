
const Input = ({ type, placeholder, name}) => {
  console.log("[Input component] - rendered");
  return (
    <>
        <input type={ type } placeholder={ placeholder } name={ name } />
    </>
  )
}

export default Input