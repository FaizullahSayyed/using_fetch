import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

// const blogsData = [
//   {
//     id: 1,
//     title: 'Blog 1',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
//   {
//     id: 2,
//     title: 'Blog 2',
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
//     avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//     author: 'Author Name',
//     topic: 'React.js',
//   },
// ]

class BlogsList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogDate()
  }

  getBlogDate = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    if (data !== undefined) {
      this.setState({isLoading: false})
    }
    const convertedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    // console.log(convertedData)
    this.setState({blogsData: convertedData})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(blogsData)
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="50px" width="50px" />
        ) : (
          blogsData.map(item => <BlogItem key={item.id} blogData={item} />)
        )}
      </div>
    )
  }
}

export default BlogsList
