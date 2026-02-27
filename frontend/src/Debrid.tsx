import { useState, useEffect } from 'react'
import alldebridIcon from '/alldebrid-icon.webp'

export default function Debrid(){
    const [links, setLinks] = useState('')
    const [downloadLink, setDownloadLinks] = useState('Initial download link')

    async function handleClick() {
        const res = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ link: links})
        })
        const data = await res.json()
        setDownloadLinks(data.message)
    }

    return(
        <div>
            <h1>Debrids downloader</h1>
            <input 
                type='text'
                value={links}
                onChange={e => setLinks(e.target.value)}
            >
            </input>
            <button onClick={handleClick}>
                Get Download Links
            </button>
            <div>
                <p>{links}</p>
                <p>{downloadLink}</p>
            </div>
        </div>
    )
}