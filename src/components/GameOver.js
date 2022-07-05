import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <h2>Sua pontuação foi de: <span>{score}</span></h2>
      <button className='anim' onClick={retry}>Reiniciar jogo</button>
    </div>
  )
}

export default GameOver