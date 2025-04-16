import { ImgHeightProvider } from "./context/img-height"
import { useImgHeight } from "./hook/img-height"

const games = [
  {
    id: "610aw15JvKL",
    name: `Assassin's Creed Mirage`,
    description: `Em Assassin's Creed Mirage, você é Basim, um astucioso ladino de rua em busca de respostas e de justiça.`,
    imgUrl: "https://m.media-amazon.com/images/I/610aw15JvKL._AC_SL1000_.jpg",
  },
  {
    id: "61te8AW6zjL",
    name: "EA Sports FC 24",
    description: "O EA SPORTS FC 24 traz para você o Jogo de Todo Mundo.",
    imgUrl: "https://m.media-amazon.com/images/I/61te8AW6zjL._AC_SL1020_.jpg",
  },
  {
    id: "81RfcW3Ml-L",
    name: `Marvel's Spider-Man 2`,
    description: `Peter Parker e Miles Morales retornam para uma nova e emocionante aventura na aclamada franquia de Marvel's Spider-Man.`,
    imgUrl: "https://m.media-amazon.com/images/I/81RfcW3Ml-L._AC_SL1500_.jpg",
  },
]

const GamesList = () => (
  <ul>
    {games.map((game) => (
      <li key={game.id}>
        <Game game={game} />
      </li>
    ))}
  </ul>
)

const Game = ({ game }) => (
  <>
    <Img game={game} />
    <p>
      <b>{game.name}</b>
      {": " + game.description}
    </p>
  </>
)

const Img = ({ game }) => {
  const { height } = useImgHeight()
  return <img src={game.imgUrl} alt={game.name} style={{ height }} />
}

const Head = () => <h1>Lista de Games</h1>

const Main = () => {
  const { isLarge, setIsLarge } = useImgHeight()
  const handleChange = (e) => setIsLarge(e.target.checked)
  return (
    <>
      <label>
        <input type="checkbox" checked={isLarge} onChange={handleChange} />
        Ver imagens maiores
      </label>
      <hr />
      <GamesList />
    </>
  )
}

const App = () => (
  <>
    <Head />
    <ImgHeightProvider>
      <Main />
    </ImgHeightProvider>
  </>
)

export { App }
