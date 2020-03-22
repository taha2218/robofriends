import React, {Component} from 'react' ;
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll' ;
import './App.css'

class App extends Component{ 
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }

    render()
    {
        const filterRobots = this.state.robots.filter(
            robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className = 'tc'>
                <div className = 'buffer'>
                    <h1 className = 'navy'>ROBOFREINDS</h1>
                    <SearchBox searchChange = {this.onSearchChange}/> 
                </div>
                <Scroll>
                    <CardList robots = {filterRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App ;