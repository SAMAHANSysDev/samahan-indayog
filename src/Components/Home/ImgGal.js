const imageLibrary = {
    '2014': 6,
    '2015': 4,
    '2016': 4,
    '2017': 3,
    '2018': 5,
    '2019': 3,
    '2020': 2
}


// image gallery
export const ImgGal = Object.keys(imageLibrary).reduce((accumulator, current) => {
    for (let i = 0; i < imageLibrary[current]; i++) {
        accumulator.push({
            original: `/assets/Photos/${current}/${i+1}.jpeg`,
            thumbnail: `/assets/Photos/${current}/${i+1}.jpeg`
        });
    }
    return accumulator;
}, []);