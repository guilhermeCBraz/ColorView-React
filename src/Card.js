const Card = ({ colorCard, colorHex }) => {
  return (
    <div style={{ backgroundColor: colorCard || "#fff" }} className="colorCard">
      <p>{colorCard ? colorCard : "Empty Value"}<br /></p>
      <p>{colorHex ? colorHex : null}</p>
    </div>
  )
}

export default Card;