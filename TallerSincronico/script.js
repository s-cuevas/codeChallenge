document.getElementById('sendBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/users'
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('date').value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };
    console.log(data)
    //Fetch para enviar data al url por metodo POST
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-type': "application/json; charset=UTF-8"
        }
    })
    
        .then((response) => response.json())
        .catch((error) => console.error("Ocurrio un Error:", error))
        .then((response) => {
            console.log("Exitoso", response);
            alert("Exitoso");
        })
});
