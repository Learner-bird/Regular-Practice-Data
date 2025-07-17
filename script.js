function dataFetch() {
    const container = document.querySelector('.data-container')
    console.log(container)

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {

                const postDiv = document.createElement("div")
                postDiv.className ="post"
                const idDiv = document.createElement("div")
                const titlediv = document.createElement("div")
                const bodyDiv = document.createElement("div")

               
                idDiv.innerText = element.id
                titlediv.innerText = element.title
                bodyDiv.innerText = element.body

                container.appendChild(postDiv)
                postDiv.appendChild(idDiv)
                postDiv.appendChild(titlediv)
                postDiv.appendChild(bodyDiv)


            });
        })
}