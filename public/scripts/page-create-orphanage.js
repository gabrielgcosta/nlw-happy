//create map
const map = L.map('mapid').setView([-20.2957845,-40.3022047], 15);

//create titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //tipo de seletor que pega onde o name da tag for igual ao valor informado
  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove marker
  // verifica se existe um valor em marker
  marker && map.removeLayer(marker)

  //add icon layer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)

})

// adicionar o campo de fotos
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da última img adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)
  //verificar se o campo está vazio, se sim, não inserir um novo campo
  const input = newFieldContainer.children[0]

  if(input.value == ""){
    //finaliza a função retornando nada
    return 
  }
  //limpar o campo
  //pega uma lista com os filhos do container, nesse caso seria [input, span]
  newFieldContainer.children[0].value = ""
  // add o clone ao container de #images
  // acrescenta um filho
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1){
    span.parentNode.children[0].value = ""
    //limpar o valor do campo

    return
  }

  //deletar o campo
  //pegar o pai do container escolhido
  span.parentNode.remove()

}

//selecionar botão sim ou não
function toggleSelect(event){
  // retirar a classe active dos botões
  document.querySelectorAll('.button-select button')
  // maneira de definir uma função que tenha apenas um parametro e uma linha
  .forEach(button => button.classList.remove('active'))

  // colocar a classe .active
  const button = event.currentTarget
  button.classList.add('active')

  
  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open-on-weekends"]')
  
  //verificar se o botão selecionado é sim ou não

  input.value = button.dataset.value
  
}
