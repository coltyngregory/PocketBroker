define(['jquery'], ($) =>{
    class Utility {
        constructor(options) {
            
        }

        restServiceGet(url, obj) {
            return new Promise((resolve reject) => {
                $.ajax({
                    url: url,
                    success:function(data){
                        resolve(data);
                    },
                    error:function(err){
                        reject(err);
                        console.error(err);
                    }
                });
            }).catch((err) => {
                reject(err);
                console.error(err);
            });
        }

        restServicePost(url, obj) {
            
        }
    }

    return Application;

});