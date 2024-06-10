const body = JSON.stringify({
    from: 'jolly-rover',
    to: '5534999359410',
    contents: [
        {
            type: 'text',
            text: 'this is a test. will it finally work?',
        },
    ],
})

async function main() {
    try {
        const raw = await fetch('https://api.zenvia.com/v2/channels/whatsapp/messages', {
            method: 'POST',
            headers: {
                'X-API-TOKEN': 'Rj-XBpt65c9VRE2OZcdUDNWm0_B1bl6O4gNz',
                'Content-Type': 'application/json'
            },
            body
        })

        const response = await raw.json();
        console.log('response', response)
    } catch (e) {
        console.log('error', e)  
    }
}

main();

// post({
//     uri: ,
//     ,
//     body: ,
//     json: true,
// })
//     .then((response) => {
//         console.log('Response:', response)
//     })
//     .catch((error) => {
//         console.log('Error:', error)
//     })