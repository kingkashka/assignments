axios.get("https://api.vschool.io/pokemon")
    // .then(response => console.log(response))
        .then(response => {
        for (i=0; i < response.data.objects[0].pokemon.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = response.data.objects[0].pokemon[i].name
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))
    


    function print(response){
        for (i=0; i < response.data.objects[0].pokemon.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = response.data.objects[0].pokemon[i].name
            document.body.appendChild(h1)
        }
    }




    
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1
// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data)
//     }
// }


// function showData(arr){
//     for(let i = 0; i < arr.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }


// fetch("https://rickandmortyapi.com/api/character")
//     .then(res => res.json())
//     .then(res => {
        
//         for(let i = 0; i < res.results.length; i++){
//             const h1 = document.createElement('h1')
//             h1.textContent = res.results[i].name
//             document.body.appendChild(h1)
//         }
        
//     })
//     .catch(err => console.log(err))

// console.log(axios);
// Get requests with axios


// // Get All
// axios.get("https://api.vschool.io/nicholaskeyes/todo/")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
//     .catch(error => console.log(error))

// Get One
// axios.get("https://api.vschool.io/scrimbalessons/todo/656eba6278fe452c114abba1")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
//     .catch(error => console.log(error))

// Append to HTML
// axios.get("https://api.vschool.io/nicholaskeyes/todo")
//     .then(Response => {
//         for(let i=0; i < Response.data.length; i++){
//             const h1 = document.createElement("h1")
//             h1.textContent = Response.data[i].title
//             document.body.appendChild(h1)
//         }
//     })


// GET POST

    // const newTodo = {
    //     title: "My 3rd Todo",
    //     description: "This is my 3rd entry",
    //     imgUrl: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
    // }
    
    
    // axios.post("https://api.vschool.io/scrimbalessons/todo", newTodo)
    //     .then(response => console.log(response.data))
    //     .catch(error=> console.log(error))

    // DELETE request with AXIOS
    // Make sure to include ID in URL

    // axios.delete()
    // .then(response => console.log(response.data))
    // .catch(error=> console.log(error))
//     const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// PUT request with axios

// const updates = {
//     description: "I CHANGED THE DESCRIPTION!!!"
// }

// axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// function getData(){
//     axios.get("https://api.vschool.io/johnsmith2/todo")
//         .then(res => listData(res.data))
//         .catch(err => console.log(err))
// }


// LISTS THE TODO TITLES TO THE DOM
// function listData(data){
//     for(let i = 0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.getElementById('todo-list').appendChild(h1)
//     }
// }

        
    