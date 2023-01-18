import { Card, Sprite } from "./PokemonCardStyle";

export default function PokemonCard(props) {
  const {
    name = "Nome",
    type = "Tipo",
    sprite = "imagem",
    weight = "peso",
  } = props;

  return (
    <Card>
      {name}, {type}, <Sprite src={sprite} />, {`${weight} kgs`}
    </Card>
  );
}
