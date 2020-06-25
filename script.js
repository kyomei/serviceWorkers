function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if('serviceWorker' in navigator && 'Notification' in window) {
    window.onload = function() {
        navigator.serviceWorker.register('/my_projects/languages/html/serviceWorkers/sw.js')
        .then(function() {
            console.log("ServiceWorker registrado com sucesso!");
        }, function(err) {
            console.log("Error ao registrar o ServiceWorker: ");
            console.log(err);
        });

        navigator.serviceWorker.ready
        .then(function(serviceWorkerRegistration) {

            serviceWorkerRegistration.pushManager.getSubscription()
            .then(function(subscription) {
                subscription.unsubscribe()
                .then(function() {
                    console.log("Unsubscribe OK");
                })
                .catch(function() {
                    console.log("Unsubscribe FAIL");
                })
            })


        })

        Notification.requestPermission(function(permission) {
            if (permission == 'granted') {
                console.log("PERMITIDA!");
            } else {
                console.log("NEGADA!");
            }
        })
    };
}