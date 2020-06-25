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
            const appCode = 'BLHeKLzTgsslWFtglNCCaD9tMgNmrevzJajVGkyznQJxASqxygt5bcPKw-fVoJay570u06oPzhzjcKlg8xOgX3Y';
            /**
             * Private Key
             * GUpLDVn_XSgdi9qtEWjcCa0Js4rbf1Yz9INW44mcH-o
             */
            const options = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(appCode)
            };

            serviceWorkerRegistration.pushManager.subscribe(options)
            .then(function(pushSubscription) {
                console.log(pushSubscription)
            })
            .catch(function(error) {
                console.log(error.message);
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