export const getRandomJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const { joke } = await res.json()
    return joke
}


export const searchJokes = async (term) => {
    const res = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await res.json()
    return data.results
}