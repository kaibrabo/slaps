import React, { Component } from 'react';

class PlayerBar extends Component {

    render() {
        return (
            <div className='player-bar-container'>
                <section className='player-bar'>
                    <section className="buttons">

                        <i className="material-icons previous"
                            onClick={this.props.handlePrevClick}>
                        fast_rewind</i>


                        {this.props.isPlaying ?
                            <i className="material-icons play-pause"
                                onClick={this.props.handleSongClick}>
                            pause_circle_outline</i> :
                            <i className="material-icons play-pause"
                                onClick={this.props.handleSongClick}>
                            play_circle_outline</i>
                        }

                        <i className="material-icons next"
                            onClick={this.props.handleNextClick}>
                        fast_forward</i>
                    </section>

                    <section className="seek-bar-control">
                        <section className="time-control">
                            <div className="playerbar-album-details">
                                <div>
                                    {this.props.currentSong.title}
                                </div>
                            </div>
                            <input
                                type='range'
                                className='seek-bar'
                                value={(this.props.currentTime / this.props.duration) || 0}
                                max='1'
                                min='0'
                                step='0.01'
                                onChange={this.props.handleTimeChange}
                            />
                            <div className="current-time">
                                {this.props.formatTime(this.props.currentTime)} ... { this.props.formatTime(this.props.duration) }
                            </div>

                        </section>

                        <section className="volume-control">
                            <div className="icon ion-volume-high"></div>
                            <input
                                type='range'
                                className='seek-bar'
                                value={this.props.volume}
                                max='1'
                                min='0'
                                step='0.01'
                                onChange={this.props.handleVolumeChange}
                            />
                            <div>
                                {"  " + Math.floor(this.props.volume * 100)}
                            </div>
                        </section>
                    </section>

                </section>
            </div>
        );
    }
}

export default PlayerBar;
