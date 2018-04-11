import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
                    <nav>
						<div className='home-button'>
							<h3>
								Slaps
								<Link to='/'></Link>
							</h3>
						</div>

						<div className='library-button'>
							<Link to='/library'>
								<i class="material-icons">library_music</i>
							</Link>
						</div>
                    </nav>
				</header>

                <main>
                    <Route exact path='/' component={Landing} />
                    <Route path='/library' component={Library} />
                    <Route path='/album/:slug' component={Album} />
                </main>
			</div>
		);
	}
}

export default App;
