import React, {useState, useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const PostsComponent = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>{
            setPosts(data)
        })
        }, [])
        console.log(posts)
    
    let postsUsers
    if (!posts){
        return <h1>Loading...</h1>
    }else{
        [postsUsers] = posts
    }
    
    return (<>
        <div>
           <div className="App">
                <header className="App-header">
                    <FaBeer />
                    {
                    posts.map((posts)=>
                        <li key={posts.id}><Link to={`posts/${posts.id}/comments`}>{posts.title}</Link></li>)
                    }
                </header>
            </div>
        </div></>
    )
}
