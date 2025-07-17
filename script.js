function dataFetch(){
    const container = document.querySelector('.data-container')
    console.log(container)

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {

            const idDiv = document.createElement("div")
            idDiv.innerText = element.id

            const titlediv = document.createElement("div")
            titlediv.innerText = element.title

            const bodyDiv = document.createElement("div")
            bodyDiv.innerText = element.body


           container.appendChild(idDiv)
           container.appendChild(titlediv)
           container.appendChild(bodyDiv)

        }); 
    })
}