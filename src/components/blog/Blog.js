import React, { Component } from 'react';

import Select from '../select/Select';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            posts: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('https://itunes.apple.com/search?term=nirvana')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.results }));
    }

    handleChange(event){
        let term = event.target.value;
       let timeout = null;
       clearTimeout(timeout);
       timeout = setTimeout(() => {
        fetch(`https://itunes.apple.com/search?term=${term}`)
        .then(response => response.json())
        .then(data => this.setState({ posts: data.results }));
       }, 900);
    }

    renderPosts(posts){
        //artistName name, artworkUrl100 image, collectionName text, artistViewUrl link
        return posts.map((post, i) => {
            return (
                <div key={post.artistName+i} className="card" style={{width: '300px'}}>
                    <img 
                        className="card-img-top" 
                        src={post.artworkUrl100} 
                        alt={post.artistName}
                        style={{width: '100%', height: 'auto'}} />
                    <div className="card-body">
                        <h5 className="card-title">{post.artistName}</h5>
                        <p className="card-text">{post.collectionName}</p>
                        <audio controls style={{width: '100%'}}>
                            <source src={post.previewUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <a href={post.artistViewUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Checkout artist more</a>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log(this.state.posts);
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="term" placeholder="search for music rock band?" onChange={this.handleChange}/>
                    </div>
                </form>
                <Select />
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {this.renderPosts(this.state.posts)}
            </div>
            </div>
        )
    }
}

export default Blog;