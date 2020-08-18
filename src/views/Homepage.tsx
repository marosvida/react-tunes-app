import React, { useState } from 'react';

//styles
import './Homepage.scss'

//assets
import logo from '../assets/logo.svg'

interface Props {

}


const Homepage = (props: Props) => {
    const [title] = useState('React, wheee!');

    return (
        <div className="home">
            <img className="logo" src={logo} alt="react logo" />

            <h1>{title}</h1>

            <p>
                Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
                    href="https://reactjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    documentation
				</a>
				.
			</p>
        </div>
    )
}

export default Homepage
