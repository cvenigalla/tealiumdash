import React, { Component } from 'react';
import NewSingle from './NewSingle';

export default class News extends Component{

    constructor(props){
        super(props);
        this.state = {
            news: [],
        };
    }
    renderItems(){
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item}/>
        ));
    }

    componentDidMount(){
        const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-14&sortBy=publishedAt&apiKey=e1a558a424bf4307a756321226931450';

        fetch(url)
        .then ((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
    }

    render(){
        return(
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

//export default News;