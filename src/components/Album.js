import React, { Component } from 'react';
import albumData from '../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {

    constructor(props) {
        super(props);

        // find 'album', if album.slug matches slug, return 'album'
        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false
        }

        // audio
        this.audioElement = document.createElement('audio');
        // plays first song of album
        this.audioElement.src = album.songs[0].audioSrc;
    }

    // Methods

    play() {
        this.audioElement.play();
        this.setState({
            isPlaying: true
        });
    }

    pause() {
        this.audioElement.pause();
        this.setState({
            isPlaying: false
        });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({
            currentSong: song
        });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;

        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play(newSong);
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex + 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play(newSong);
    }

    // HTML render
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

                    <tbody>
                        {
                            this.state.album.songs.map( (song, i) =>
                                <tr className='song'
                                    key={i}
                                    onClick={
                                        () => this.handleSongClick(song)
                                    }>
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

                <PlayerBar
                    isPlaying={this.state.isPlaying}
                    currentSong={this.state.currentSong}
                    handleSongClick={
                        () => this.handleSongClick(this.state.currentSong)
                    }
                    handlePrevClick={
                        () => this.handlePrevClick()
                    }
                    handleNextClick={
                        () => this.handleNextClick()
                    } />
            </section>
    )
}
}

export default Album;
