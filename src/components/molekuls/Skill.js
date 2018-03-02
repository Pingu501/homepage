import React from 'react'
import PropTypes from 'prop-types'

class Skill extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.any,
    children: PropTypes.any
  }

  render() {
    return (
      <div className="skill">
        <div className="skill__name">
          {this.props.name}
        </div>
        <div className="skill__description">
          {this.props.children}
        </div>
        <div className="skill__rating">
          {this.renderRating(this.props.rating)}
        </div>
      </div>
    )
  }

  renderRating(rating) {
    let ratingStars = []

    for (let i = 1; i <= 5; i++) {
      const content = rating >= i ? '★' : '☆'
      ratingStars.push(<span>{content}</span>)
    }

    return ratingStars
  }
}

export default Skill
