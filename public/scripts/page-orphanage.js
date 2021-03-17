const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}


//create map
const map = L.map('mapid', options).setView([-20.2957845,-40.3022047], 15);


//create titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//create and add marker
L.marker([-20.2957845,-40.3022047],{icon})
.addTo(map)

/*image gallery*/

function selectImage(event){
  const button = event.currentTarget

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  //selecionar a imagem clicada
  // o botão tem um filho, que é a imagem, como é feito no html
  /*
  <button>
    <img>
  </button>
  */
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //adicionar a classe .active para o botão clicado
  button.classList.add("active")

}
