class EasyHTTP {
    //http get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //http post request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
             body: JSON.stringify(data)
        })
            const resData = await response.json();
            return resData;
    }

    //http put request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }

    //http delete request
    async delete(url){
        const response = fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        const resData = await 'Resource Deleted!';
        return resData;
    }
}


export const http = new EasyHTTP();