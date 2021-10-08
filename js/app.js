const cities = '../node_modules/cities.json/cities.json';

function getJSON(url){
    let result = {};
    return fetch(url)
    .then(response=>{
       if(response.ok){
        return response.json();
       }else{
           throw Error(response.statusText);
       }
    })
    .then(response=>{
        result.status = 'ok';
        result.data = response;
        return result;
    })
    .catch(err=>{
        result.status = 'error';
        result.data = err;
        return result;
    });
};

