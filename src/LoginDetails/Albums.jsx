import React from 'react'
import { useGetAlbumsDetailsByIdQuery } from '../services/albumsApi'
import { useParams } from 'react-router-dom'
import { useGetAllPhotosQuery } from '../services/photosApi'


function Albums() {
    var p = useParams()
    console.log(p)
    //var x = useGetAlbumsDetailsByIdQuery(p.id)
    //console.log(x)
    //var x = useGetAllAlbumsQuery()
    //console.log(x)
    var {isLoading,data} = useGetAlbumsDetailsByIdQuery(p.id)
    console.log(data)
    //var albums = data
    var {isLoading,data} = useGetAllPhotosQuery()
    var photos = data
    return (
      <div></div>
    )
}
 
export default Albums