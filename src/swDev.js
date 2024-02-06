export default function swDev() {

    function urlBase64toUint8Array(base64String){
        const padding = '='.repeat((4-base64String.length %4)%4);
        const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/\_/g, '/')

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for(let i=0; i< rawData.length; ++i){
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
        
    }

    function determineAppServerKey(){
        var vapiPublicKey = '0123456789012345678901234567890123456789012345678901234567890123'
        return urlBase64toUint8Array(vapiPublicKey)
    }

    let swURL = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swURL).then((res) => {
        // console.log("Response: ", res)
        // return res.pushManager.getSubscription().then(function(subscription){
        //     return res.pushManager.subscribe({
        //         userVisibleOnly:true,
        //         applicationServerKey: determineAppServerKey()
        //     })
        // })
    })
}