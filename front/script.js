async function loadApi() {
    const response = await fetch("http://127.0.0.1:3000/");
    const jsonData = await response.json();
    return jsonData;
}

loadApi().then(data => {
    console.log(data);
    document.getElementById("nome").innerText = data.name;
    document.getElementById("idade").innerText = data.age;

    const divCarro = document.getElementById("carros");

    let carrosHtml = ""
    data.cars.forEach(car => {
        carrosHtml += '<div class="carro" style="border: 1px solid red;">'
        carrosHtml += '<h6>'+ car.name +'</h6>'
        carrosHtml += '<img width="100" src="'+ car.image +'"></ima>'
        carrosHtml += '</div>'
    })

    divCarro.innerHTML = carrosHtml;
}).catch(err => {
    alert('api fora do ar')
})



{/* <div class="carro" style="border: 1px solid red;">
<h6>BMW</h6>
<img width="100" src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"></ima>
</div> */}