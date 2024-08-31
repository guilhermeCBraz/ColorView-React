import Card from "./Card";
import InputColor from "./InputColor";

const Content = ({ colorCard, setColorCard, colorHex, setColorHex, isDarkText, setIsDarkText }) => {
  return (
    <main>
      <Card
        colorCard={colorCard}
        colorHex={colorHex}
        isDarkText={isDarkText} />
      <InputColor
        colorCard={colorCard}
        setColorCard={setColorCard}
        setColorHex={setColorHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />

    </main>
  )
}

export default Content;