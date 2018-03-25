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
            currentTime: 0,
            currentSong: album.songs[0],
            duration: album.songs[0].duration,
            volume: 0,
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

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({ volume: newVolume });
    }

    componentDidMount() {
        this.eventListeners = {

            timeupdate: e => {
                this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationChange: e => {
                this.setState({ duration: this.audioElement.duration });
            },
            volumecontrol: e => {
                this.setState({ volume: this.audioElement.volume });
            }
        };

        this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.addEventListener('volumecontrol', this.eventListeners.volumecontrol);
    }

    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.removeEventListener('volumecontrol', this.eventListeners.volumecontrol);

    }

    formatTime(n) {
        let m = Math.floor(n / 60);
        let s = Math.floor(n % 60);
        if (n) {
            s = s < 10 ? '0' + s : s;
            return n = m + ':' + s;
        } else {
            return n = "-:--";
        }
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
                                            this.formatTime(song.duration)
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
                    currentTime={this.audioElement.currentTime}
                    duration={this.audioElement.duration}
                    volume={this.audioElement.volume}
                    handleSongClick={
                        () => this.handleSongClick(this.state.currentSong)
                    }
                    handlePrevClick={
                        () => this.handlePrevClick()
                    }
                    handleNextClick={
                        () => this.handleNextClick()
                    }
                    handleTimeChange={
                        (e) => this.handleTimeChange(e)
                    }
                    formatTime={
                        (n) => this.formatTime(n)
                    }
                    handleVolumeChange={
                        (e) => this.handleVolumeChange(e)
                    }
                />
            </section>
    )
}
}

export default Album;
