export async function sendMessage(origin: string, destination: string, content: string) {
    console.log('sendMessage', {
        origin,
        destination,
        content,
    });
    const body = {
        from: origin,
        to: destination,
        contents: [
            {
                type: 'text',
                text: content,
            },
        ],
    }

    if(process.env.ENV === 'local') {
        console.log('returning body');
        return body
    }
    
    try {
        const raw = await fetch('https://api.zenvia.com/v2/channels/whatsapp/messages', {
            method: 'POST',
            headers: {
                'X-API-TOKEN': 'Rj-XBpt65c9VRE2OZcdUDNWm0_B1bl6O4gNz',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const response = await raw.json();
        console.log('response', response)
        return;
    } catch (e) {
        console.log('error', e)  
        throw e;
    }
}