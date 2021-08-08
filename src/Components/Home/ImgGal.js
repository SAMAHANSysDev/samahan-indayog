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
        let title = '';
        let description = '';
        switch (current) {
            case '2014':
                title = '66th Ateneo Fiesta';
                description = 'Inang Maria, Kasama Natin sa Paglalakbay Tungo sa Pagkakaisa, Kapayapaan, at Kaunlaran ng Mindanao at ng Buong Mundo';
                break;
            case '2015':
                title = '67th Ateneo Fiesta';
                description = 'Inang Maira, Gabay sa Pagbabalik-tanaw at Paglalakbay Tungo sa Pagkamit ng Kapayapaan sa Lipunan at Mindanao';
                break;
            case '2016':
                title = 'Hugyaw: 68th Ateneo Fiesta';
                description = 'Maria, Kasama Natin Tungo sa Pagbabago, Pagkakaisa, at Kapayapaan ng Mindanao at ng Buong Bansa';
                break;
            case '2017':
                title = '69th Ateneo Fiesta';
                description = 'Maria Among Inahan: Tigpanalipod, Tigpangaliya og Giya sa Among Tunguha ug Damgo nga Makab-ot ang Hingpit nga Kalinaw ug Kahiusa';
                break;
            case '2018':
                title = 'Sadya 2018: 70th Ateneo Fiesta';
                description = 'Inang Maria, Kaisa Natin sa Ika-70 Raong Pagdiriwang ng AdDU Tungo sa Mas higit Pang Pakikilahok sa Pagkamit ng Hustisyang Panlipunan para sa Pangkalahatang Kabutihan';
                break;
            case '2019':
                title = 'Saulog: 71st Ateneo Fiesta';
                description = 'Mother Mary: Companion of Every Beloved, Gifted, and Empowered Atenean in Mission for Mindanao';
                break;
            case '2020':
                title = 'Tayo, Tayo: 72nd Ateneo Fiesta';
                description = 'Igniting the Marian Spirit: Our Binding Force of Hope, Resilience, and Togetherness Despite Distance and Uncertainty ';
                break;
            default:
        }

        accumulator.push({
            original: `/assets/Photos/${current}/${i+1}.jpeg`,
            thumbnail: `/assets/Photos/${current}/${i+1}.jpeg`,
            title,
            description,
        });
    }
    return accumulator;
}, []);