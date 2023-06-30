/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import './index.css'

const Images = props => {
  const {imageDetails, randomImage} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails

  const imageClicked = () => {
    randomImage(id)
  }

  return (
    <li className="list-images">
      <button className="imageButton" onClick={imageClicked}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnailImages" />
      </button>
    </li>
  )
}
export default Images
