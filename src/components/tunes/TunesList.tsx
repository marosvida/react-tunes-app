import React from 'react'

import './TunesList.scss';
import { Song } from '../../types'

import TunesSong from './TunesSong';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface Props {
    songs: Song[]
}

const TunesList = (props: Props) => {
    const { songs } = props;

    return (
        <TransitionGroup component='ul' className='tunes-list'>
            {songs.map(song => (
                <CSSTransition key={song.id} timeout={200} classNames='song'>
                    <li key={song.id}>
                        <TunesSong song={song} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default TunesList
