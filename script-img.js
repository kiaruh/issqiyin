//option 1

// fetch('homer.jpg')
//     .then(response => response.blob())
//     .then(blob => {
//         const img = document.getElementById('homer')
//         img.src = URL.createObjectURL(blob)
//         console.log(blob)
//     })
//     .catch(err => console.log(err))

//option 2

async function catchHomer(){
    const response = await fetch('homer.jpg')
    const blob  = await response.blob()
    document.getElementById('homer').src = URL.createObjectURL(blob)

}

catchHomer().then( ()=> console.log('fetched')).catch(err => console.log(err))