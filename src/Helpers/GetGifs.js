

export const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=YRLXd79mz3RzRWa9L1C447X0OV5E237V`;
    const resp = await fetch( url );
    //Sin desestructurar la data(data.data)
    // const data = await resp.json();
    //Desestructurada
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}