const catalogoMuebles = [{
    id:1,
    nombre: "Sofa",
    precio: 300,
    img: "https://www.google.com/imgres?q=sofa&imgurl=https%3A%2F%2Fwww.abita.com.ar%2F619-large_default%2Fsofa-cama-paris.jpg&imgrefurl=https%3A%2F%2Fwww.abita.com.ar%2Fsillones%2F88-sofa-cama-paris.html&docid=pFm4Vqdc4alb-M&tbnid=bFI0wFcpj1uB4M&vet=12ahUKEwjl6OuB49CPAxWxpZUCHYFTMN0QM3oECG0QAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjl6OuB49CPAxWxpZUCHYFTMN0QM3oECG0QAA"
},
{
    id: 2,
    nombre: "Mesa",
    precio: 250,
    img: "https://www.google.com/imgres?q=mesa&imgurl=https%3A%2F%2Fmueblesalgarrobo.com.ar%2Fwp-content%2Fuploads%2F2023%2F10%2FMesa-Redonda-de-Algarrobo.jpg&imgrefurl=https%3A%2F%2Fmueblesalgarrobo.com.ar%2Fmesas%2Fmesa-redonda-nordica%2F&docid=-X4ku5KfwW6PNM&tbnid=g-h7xShXtVtkIM&vet=12ahUKEwiA4-Da49CPAxX9HLkGHdDdIMgQM3oECE8QAA..i&w=700&h=700&hcb=2&ved=2ahUKEwiA4-Da49CPAxX9HLkGHdDdIMgQM3oECE8QAA"
}];

const productContainer = document.querySelector('#product-container');

catalogoMuebles.forEach(e => {
    const productDiv = document.createElement('div');
    
    const productH3 =  document.createElement('h3');
    productH3.textContent = e.nombre;
    productDiv.appendChild(productH3);

    const productP = document.createElement('p');
    productP.textContent = e.precio;
    productDiv.appendChild(productP);

    const productIMG = document.createElement('img');
    productIMG.src = e.img;
    productDiv.appendChild(productIMG);

    productContainer.appendChild(productDiv);
})