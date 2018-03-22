import React, { Component } from 'react';
import albumData from '../data/albums';

class Album extends Component {

    constructor(props) {
        super(props);

        // find 'album', if album.slug matches slug, return 'album'
        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album
        }
    }

    render() {
        return (
            <section className="album">
                <section id='album-info'>
                    <img id='album-cover-art'
                        alt='album-cover'
                        src={ this.state.album.albumCover }/>

                    <div className='album-details'>
                        <h1 id='album-title'>
                            { this.state.album.title }
                        </h1>
                        <h2 className='artist'>
                            { this.state.album.artist }
                        </h2>
                        <div id='release-info'>
                            { this.state.album.releaseInfo }
                        </div>
                    </div>
                </section>

                <table id='song-list'>
                    <colgroup>
                        <col id='song-number-column'/>
                        <col id='song-title-column'/>
                        <col id='song-duration-column'/>
                    </colgroup>

                    <tbody className='song'>
                        {
                            this.state.album.songs.map( (song, i) =>
                                <tr key={i}>
                                    <td>
                                        {/*<i class="icon ion-play"></i>*/}
                                        {/*<i class="icon ion-pause"></i>*/}

                                        {i+1}
                                    </td>
                                    <td>
                                        {song.title}
                                    </td>
                                    <td>
                                        {
                                            Math.floor(song.duration / 60)
                                            + ':' +
                                            Math.floor(song.duration % 60)
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Album;
