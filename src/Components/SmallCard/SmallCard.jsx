import './SmallCard.css'
const SmallCard = ({number, pargraph , rest}) => {
  return (
    <div className="fun-facts">
        <div className="counter">
      <h2>{number}</h2>
      <p>{pargraph} <br/>{rest}</p>
      </div>
      </div>
  )
}

export default SmallCard
