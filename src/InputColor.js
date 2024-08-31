import colorNames from "colornames";

const InputColor = ({ setColorCard, setColorHex }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        id="colorInput"
        placeholder="Add color name"
        type="text"
        onChange={(e) => {
          setColorCard(e.target.value)
          setColorHex(colorNames(e.target.value))
        }} />
    </form>
  )
}

export default InputColor;