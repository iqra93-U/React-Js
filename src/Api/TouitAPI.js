class TouitAPI {
    // for getting tuits
    static getTouits(timestamp, callback) {
        const request = new XMLHttpRequest();
        request.open("GET", "http://touiteur.cefim-formation.org/list?ts=" + encodeURIComponent(timestamp), true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    callback(response);
                } else {
                    // Erreur HTTP
                }
            }
        });
        request.send();
    }
    // for getting treding words
    static getTrending(callback) {
        const request = new XMLHttpRequest();
        request.open("GET", "http://touiteur.cefim-formation.org/trending", true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    callback(response);
                } else {
                    // Erreur HTTP
                }
            }
        });
        request.send();
    }
    // for sending tuits
    static sendTouit(name, message, onSuccess, onError) {
        const request = new XMLHttpRequest();
        request.open("POST", "http://touiteur.cefim-formation.org/send", true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    if (response.hasOwnProperty("success")) {
                        onSuccess();
                    } else if (response.hasOwnProperty("error")) {
                        onError(response.error);
                    } else {
                        onError("Unknown error");
                    }
                } else {
                    // Erreur HTTP
                }
            }
        });
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
    }
    // for likes on all buttons
    static sendLikes(id,callback) {
        const request = new XMLHttpRequest();
        request.open("PUT", "http://touiteur.cefim-formation.org/likes/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText)
                    TouitAPI.singleLike(id,callback)
                } else {
                    // Erreur HTTP
                }
            }
        });
        request.send('message_id='+ encodeURIComponent(id));
    }
    static singleLike(id,callback){
        const request = new XMLHttpRequest();
        request.open("GET", "http://touiteur.cefim-formation.org/get?id="+id, true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText)
                    callback(response)
                } else {
                    // Erreur HTTP
                }console.log("blah")
            }
        });
        request.send();

    }
}



export default TouitAPI;
// class TouitAPI{
//     static getTouits(){
//         let response = await fetch ('http://touiteur.cefim-formation.org/list');
//         console.log(response.status);  //200
//         console.log(response.statusText); // OK
//         if(response.status === 200){
//         let data = await response.json();
//         console.log(data);
     
//      }
//         request.send();
//     }
           
// }
                
    