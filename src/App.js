import React, { Component } from 'react'; // eslint-disable-next-line
import { Route, Link } from 'react-router-dom'; 
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div className='App'>
			    <Header />

                <main className="main-container">
                    <Route exact path='/' component={Landing} />
                    <Route path='/library' component={Library} />
                    <Route path='/album/:slug' component={Album} />
                </main>
                
			</div>
		);
	}
}

export default App;
