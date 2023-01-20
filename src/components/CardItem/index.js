// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails
  console.log(key)

  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
