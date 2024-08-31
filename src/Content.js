import Card from "./Card";
import InputColor from "./InputColor";

const Content = ({ colorCard, setColorCard, colorHex, setColorHex }) => {
  return (
    <main>
      <Card
        colorCard={colorCard}
        colorHex={colorHex} />
      <InputColor
        colorCard={colorCard}
        setColorCard={setColorCard}
        setColorHex={setColorHex}
      />

    </main>
  )
}

export default Content;