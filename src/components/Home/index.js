import {Component} from 'react'
import Loader from 'react-loader-spinner'
import UserInfo from '../UserInfo'
import BlogsList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {blogsData: [], isLoading: false}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="profile-container">
          <UserInfo />
        </div>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-container">
              {blogsData.map(eachList => (
                <BlogsList eachList={eachList} key={eachList.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
