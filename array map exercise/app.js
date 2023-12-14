let arr = [2, 5, 100]

    let newArr = arr.map(numb =>{
        final = numb * 2
        return final
})
console.log(newArr);
  
    let newArr1 = arr.map(numb => {
        final = numb.toString()
        return final
    })
  
  
  console.log(newArr1); 
  // ["2", "5", "100"]

  
    let fameArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

        let newfame = fameArr.map(person => {
        final = person.charAt(0).toUpperCase()
        // final = person.split()
        
        return final
    })
  
  
  console.log(newfame); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
  function namesOnly(arr){
    // your code here
  }
   
let people = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]

  let nameOnlyNew =  people.map(person=> {
        final = person.name
        return final
  })

  console.log(nameOnlyNew);
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
   
 let stringArr = people.map(person => {
    if (person.age < 18){
        return `${person.name} is under age`
    }
    else{
        return `${person.name} can go to watch the Matrix`
    }
 })

 console.log(stringArr);

// function title(){
//     let title = people.map(person => {
//         return person.name
//     })
//     let h1 = document.createElement("h1")
//     h1.textContent = title
//     document.body.appendChild(h1)
//     let age = people.map(person => {
//         return person.age
//     })
//     let h2 = document.createElement("h2")
//     h2.textContent = age
//     document.body.appendChild(h2)
// }
// title()