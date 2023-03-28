const apikey = '4zYvx4TJDZ8ZBwXtBc2o8gyxGqnUqqXh&q'

export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}=${category}&limit=10`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized.url
    }))



    return gifs;
}
