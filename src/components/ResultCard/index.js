import './index.css'

const ResultCard = props => {
  const {score, homePage} = props

  return (
    <div className="scoreCard">
      <p className="heading">Your Score</p>
      <p className="score">{score}</p>
      <button type="button" className="button" onClick={homePage}>
        Play Again
      </button>
    </div>
  )
}
export default ResultCard
