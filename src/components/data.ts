export async function getCat() {
    try {
        const cat = await fetch ("https://cataas.com/cat").then(res=>res.json())
        return cat
    } catch (error) {
        console.log(error)
    }
}


export async function getFact() {
    try {
        const fact = await fetch (`https://catfact.ninja/fact`).then(res=>res.json())
        return fact
    } catch (error) { 
        console.log(error)
    }
}