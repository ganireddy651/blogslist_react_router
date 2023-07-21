import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: false}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    this.setState({isLoading: true})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      content: data.content,
      id: data.id,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {avatarUrl, imageUrl, author, content, title, topic} = blogDetails

    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="each-title">{title}</h1>
            <div className="blog-details-id">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
            <img className="each-image" src={imageUrl} alt={topic} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
