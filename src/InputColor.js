import colorNames from "colornames";

const InputColor = ({ setColorCard, setColorHex, isDarkText, setIsDarkText }) => {
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
      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default InputColor;