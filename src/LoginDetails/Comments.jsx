import React from 'react'
import { useGetPostsDetailsByIdQuery } from '../services/postsApi'
import { useParams } from 'react-router-dom'
import { useGetAllCommentsQuery } from '../services/commentsApi'

function Comments() {
    var p = useParams()
    console.log(p)

  // var x = useGetPostsDetailsByIdQuery(p.id)
   //console.log(x)
   var {isLoading,data} = useGetPostsDetailsByIdQuery(p.id)
   console.log(data)
   var posts = data
   console.log(posts)
   var {isLoading,data} = useGetAllCommentsQuery()
   var comments = data
   console.log(comments)
  return (
    <div className='row'>
    <div className='col-md-2 col-lg-2'></div>
    <div className='col-md-10 col-lg-10'>
    <div className='card  ml-3 mb-3 mt-3 mr-3 row-auto row-md-2 min-hh-100 min-vh-60 w-100'>
        <div className='card-body'>
        {/*<h3>{posts.title}</h3>
        <p align="justify">{posts.body}</p>
        </div>
  <div className='card-footer'>*/}
  <h4>Comments</h4><hr />
    {
    isLoading && <h4>Loading...</h4>
    }
    {
      
    !isLoading && comments.map((comment)=>{
       // alert(comment.postId+" "+p.id)
        if(comment.postId==p.id){
            return (
        
            <dl>
                <dt>{comment.name}</dt>
                <dd>{comment.body}</dd>
            </dl>


        
        
            
            )

        }
    })
    }
    </div>
    </div>
    </div>  
    </div>  
  )
}

export default Comments