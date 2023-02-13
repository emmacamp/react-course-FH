const APIKEY = 'ol1QLIpL31EbMdpbosKvC8yetUmW0U3Z';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`)

export const getImage = async () => {
  try {

    const res = await peticion;
    const { data } = await res.json();
    const { url } = data.images.original;

    return url;

  } catch (error) {
    console.error(error)
    return 'No se enciontro la imagen'
  }

}

// getImage()