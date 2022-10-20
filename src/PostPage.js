import React from 'react'
import { useParams,Link } from 'react-router-dom'
const PostPage = ({items}) => {
  const {id} = useParams()
  const post = items.find(item => (item.char_id).toString() === id)
  console.log(post)
  return (
    post && (
        <main className='PostPage'>
      <div className='post'>
       
          <div className='Left'>
          <img
            src={post.img}
            alt=''
            onError={(e: any) =>
              (e.target.src = 'https://via.placeholder.com/300')
            }
          />
          </div>
          <div className='Right'>
            <h1>{post.name}</h1>
            <p className='postDate'>{post.portrayed}</p>
            <p className='postBody'>{post.nickname}</p>
         </div>
      </div>
    </main>
    )
  )
}

export default PostPage