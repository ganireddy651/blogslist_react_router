import {Link} from 'react-router-dom'
import './index.css'

const BlogsList = props => {
  const {eachList} = props
  const {id, title, author, avatarUrl, imageUrl, topic} = eachList

  return (
    <li>
      <Link to={`/blogs/${id}`} className="nav-link">
        <div className="blog-card">
          <img className="image" src={imageUrl} alt={id} />
          <div className="blog-info-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogsList
