if('serviceWorker' in navigator && 'Notification' in window) {
    window.onload = function() {
        navigator.serviceWorker.register('/my_projects/languages/html/serviceWorkers/sw.js')
        .then(function() {
            console.log("ServiceWorker registrado com sucesso!");
        }, function(err) {
            console.log("Error ao registrar o ServiceWorker: ");
            console.log(err);
        });

        Notification.requestPermission(function(permission) {
            if (permission == 'granted') {
                console.log("PERMITIDA!");
            } else {
                console.log("NEGADA!");
            }
        })
    };
}