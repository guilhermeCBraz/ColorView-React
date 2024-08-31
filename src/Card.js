const Card = ({ colorCard, colorHex, isDarkText }) => {
  return (
    <div
      className="colorCard"
      style={
        {
          backgroundColor: colorCard || "#fff",
          color: isDarkText ? "#000" : "#FFF"
        }} >
      <p>{colorCard ? colorCard : "Empty Value"}<br /></p>
      <p>{colorHex ? colorHex : null}</p>
    </div>
  )
}

export default Card;