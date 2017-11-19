import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import Loading from './Loading';

class MovieSearch extends React.Component {
    state = {
        movie: [],
        state: false
    };

    componentWillMount() {
        this.onRequest();
    };

    onUserInput = (e) => {
        let value = e.target.value.replace(/[^a-zA-Z]+/g, '');
        this.onRequest(value);
    };

    onRequest = (value = 'fast') => {
        this.setState({state: true});
        fetch(`http://www.omdbapi.com/?t=${value}&apikey=969a0dc3`)
            .then(response => response.json())
            .then(json => this.setState({movie: json, state: false}));
    };

    render() {
        return(
            <div>
                { this.state.state ? <Loading /> : null }
                <h1>Movies</h1>
                <Movie {...this.state.movie}/>
                <input type="text" onChange={this.onUserInput}/>
            </div>
        )
    };
}

ReactDOM.render(<MovieSearch/>, document.getElementById('root'));
