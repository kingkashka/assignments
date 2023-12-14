// submit event

const form = document["my-form"]

form.addeventlistener("submit1", function(event) {
    event.preventDefault()
    alert("its working")

    const name = form.firstName.value
    form.firstName.value = ""
} )
console.log(form)