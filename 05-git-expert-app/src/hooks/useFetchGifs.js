import { useState, useEffect } from "react"
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const img = await getGifts(category)
        setInterval(() => {
            setImages(img)
            setIsLoading(false)

        }, 2000)
    }

    useEffect(() => {
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}
