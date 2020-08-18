import React, { useState } from 'react'
import axios from 'axios'

import { Song } from '../types'
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';

interface Props {}

interface SongFromITunes {
    trackId: number
    artistName: string
    previewUrl: string
    artworkUrl100?: string
    trackName: string
    collectionName: string
    kind?: string
}


const Tunes = (props: Props) => {

    const [songs, setsongs] = useState([])

    const handleSearch = (query: string) => {
        console.log(encodeURI(query))
        axios
            .get(`
                https://itunes.apple.com/search?term=${encodeURI(query)}&entity=musicTrack&limit=5`
            )
            .then(response => {
                console.log(response)
                let iTunesSongs = response.data.results
                    .filter((song: any) => song.kind === 'song')
                    .map( (song: any) => extractData(song))

                setsongs(iTunesSongs)

            })
    }

    const extractData = ({
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album
    }: SongFromITunes) => {
        return { id, artist, audioFile, artwork, title, album } as Song
    }


    return (
        <div className='home'>

            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch} />
            <TunesList songs={songs} />

        </div>
    )
}

export default Tunes