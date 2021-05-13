import React from "react";
import marked from 'marked'

const Post = ({ person }) => {
    const detail= person && person.detail && marked(person.detail)
  return (
    <div className="post">
      {person?.name && <h1 className="title">{person.name}</h1>}
      {person?.image && <img className="featuredImage" alt={person.name} src={person.image}/>}
      {person?.detail && <section dangerouslySetInnerHTML={{__html:detail}} />}
    </div>
  );
};

export default Post;
