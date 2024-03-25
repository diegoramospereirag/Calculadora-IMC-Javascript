

function chargeColorsIphone(color) {
  let img = document.getElementById("cardBannerIphone");

  switch (color) {
    case "black":
      img.src = "img/Black.png";
      break;
    case "blue":
      img.src = "img/Blue.png";
      break;
    case "pink":
      img.src = "img/Pink.png";
      break;
    case "green":
      img.src = "img/Green.png";
      break;
    case "yellow":
      img.src = "img/Yellow.png";
      break;
      case "yellow":
        img.src = "img/Yellow.png";
        break;
        case "yellow":
          img.src = "img/Yellow.png";
          break;
          case "yellow":
            img.src = "img/Yellow.png";
            break;
            case "yellow":
              img.src = "img/Yellow.png";
              break;
              case "yellow":
                img.src = "img/Yellow.png";
                break;
    default:
    return 'Não existe essa cor do Produto!';
  }
}


function openModalCart() {
  let modal = document.getElementById('boxmodal');
  modal.classList.add('active'); 
}


function closeModalCart() {
  let modal = document.getElementById('boxmodal');
  modal.classList.remove('active');
}


function goToCart() {
  console.log('Redirecionando para o carrinho...');
}
function bodyColor() {
  let body = document.body;
  let icon = document.getElementById('toggle').querySelector('i');

  if (body.style.backgroundColor === 'black' || body.style.backgroundColor === '') {
    body.style.backgroundColor = '#333333';
    icon.classList.remove('fa-toggle-on');
    icon.classList.add('fa-toggle-off');
  } else {
    body.style.backgroundColor = 'black';
    icon.classList.remove('fa-toggle-off');
    icon.classList.add('fa-toggle-on');
  }
}


function toggleProductDetails() {
  let description = document.querySelector('.message');
  let button = document.querySelector('.details button');

  if (description.innerHTML === '') {
    description.innerHTML = 'Tela Oled, 128GB, Camera de 48MP, ';
    button.textContent = 'Ocultar Detalhes do Produto';
  } else {
    description.innerHTML = '';
    button.textContent = 'Ver Detalhes do Produto';
  }
}

let count = 0

function updateCartCount() {
  const itemCountElement = document.getElementById('item-count');
  itemCountElement.textContent = count;
}

function addItemCart(){
  count++
  updateCartCount()
}

function removeItemCart(){
  count--
  updateCartCount()
}