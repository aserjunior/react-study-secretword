import "./GameOver.css"

const GameOver = ({ retry, score }) => {
    return (
        <div className="gameOver">
            <h1>Fim de jogo</h1>
            <h2>A sua pontução foi: <span>{score}</span></h2>
            <button onClick={retry}>Resetar o Jogo</button>
        </div>
    )
}

export default GameOver;