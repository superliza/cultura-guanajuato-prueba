const ready = () => {
    getAPI();
    oauth2();
}

const getAPI = () => {
    // let near = 'Guanajuato';
    // let intent = 'checkin';
    // let categories = '4bf58dd8d48988d18f941735';
    // let radius = 250;

    let date = new Date();
    // console.log(date);
    
    let year = date.getFullYear();
    // console.log(year);
    
    let month = date.getMonth() + 1;
    // console.log(month);
    
    let day = date.getDay() + 1;
    // console.log(day);

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }
    
    fetch(`https://api.foursquare.com/v2/venues/search?ll=21.0185800,-101.2591000&client_id=BOBTTT04CAQHPKSQIWSQZVNI12QIBDRRZJ3FJ151BPVFXGQK&client_secret=OQTL0MPVUGC14F52B0EKPYLSXBXLB5YK04MJHY2HEPYLV4RM&v=${year}${month}${day}`)
    .then(status)
    .then(json)
    .then(data)
    .catch(error)
}

// const dates = () => {
//     let date = new Date();
//     // console.log(date);
    
//     let year = date.getFullYear();
//     // console.log(year);
    
//     let month = date.getMonth() + 1;
//     // console.log(month);
    
//     let day = date.getDay() + 1;
//     // console.log(day);

//     if (month < 10) {
//         month = "0" + month;
//     }

//     if (day < 10) {
//         day = "0" + day;
//     }
    
//     console.log(year+month+day);
    
//     return year+month+day;
// }

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

const json = response => {
    return response.json();
}

const data = places => {
    console.log(places);
    
}

const error = failed => {
    console.log('Request failed', error);
}

const oauth2 = () => {
    fetch(`https://foursquare.com/oauth2/authenticate?client_id=BOBTTT04CAQHPKSQIWSQZVNI12QIBDRRZJ3FJ151BPVFXGQK&response_type=code&redirect_uri=https://superliza.github.io/cultura-guanajuato-prueba/`)
    .then(status)
    .then(json)
    .then(post)
    .catch(error)
}

const post = (data) => {
    console.log(data);
    
}

window.onload = ready;
