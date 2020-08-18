import React, { useRef } from 'react'
import { debounce } from 'lodash-es'

import './TunesSearchForm.scss';

interface Props {
    onSearch: (query: string) => void
}

const TunesSearchForm = (props: Props) => {
    const searchInput = useRef<HTMLInputElement>(null);


    const handleInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic();
    }, 500)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchForMusic();
    }

    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if(searchString) props.onSearch(searchString)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                autoFocus
                ref={searchInput}
                className='search'
                type='text'
                onChange={handleInput}
            />
        </form>
    )
}

export default TunesSearchForm
