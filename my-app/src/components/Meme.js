import React from 'react'
import '../index.css'

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }


    function handleText(event) {
        const {name, value} = event.target
        setMemeImage(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }


    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleText} />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleText} />
                <button
                    className="form--button"
                    onClick={getMemeImage}>
                    GET A NEW MEME IMAGE
                </button>
            </div>
            <div className="meme">
                <img
                    src={memeImage.randomImage}
                    alt=""
                    className="meme--image"></img>
                <h2 className='meme--text top'>{memeImage.topText}</h2>
                <h2 className='meme--text bottom'>{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}
