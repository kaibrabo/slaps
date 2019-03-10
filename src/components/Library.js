import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './library.css';

class Library extends Component {

    constructor(props) {
        super(props);
        this.state = {albums: albumData};
    }

    render() {
        return (
            <section className="library">
                {
                    this.state.albums.map( (album, index) =>
                        <Link to={`/album/${album.slug}`}
                              key={index}
                              className="album-item">
                            <div className="album-container">
                                <img src={album.albumCover} alt={album.title} />
                                <div className="album-details">
                                    <div>{album.title}</div>
                                    <div>{album.artist}</div>
                                    <div>{album.songs.length} songs</div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </section>
        )
    }
}

export default Library;
