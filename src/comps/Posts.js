import React from 'react'
import Post from './Post'

const Posts = ({persons}) => {
    const data=persons.map((data)=>{
        const name=data.fields.name
        const image=data.fields.featuredImage.fields.file.url
        const detail=data.fields.description
        return(
            {name,image,detail}
        )
    })
    return (
        <div>
            {data && data.map((data,index) =>(
                <Post  person={data} key={index}/>
            ))}
        </div>
    )
}

export default Posts
