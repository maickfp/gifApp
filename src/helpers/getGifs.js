
const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=4&api_key=trp36JabydOcMrWTsOYU4o1D0nRLPHmT`;

    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs = data.map(( gifObj ) => {
        return {
            id: gifObj.id,
            title: gifObj.title,
            url: gifObj.images.downsized_medium.url
        };
    });

    return gifs;

};

export {
    getGifs as default
};