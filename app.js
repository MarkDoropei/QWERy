    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

function highlightWord() {

  const word = document.getElementById('searchInput').value.trim();
  if (!word) return;

  const body = document.body;

  const regex = new RegExp(`(${word})`, 'gi');

  function traverse(node) {
    if (node.nodeType === 3) {
      if (regex.test(node.nodeValue)) {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, '<mark>$1</mark>');
        node.parentNode.replaceChild(span, node);
      }
    } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i]);
      }
    }
  }
  traverse(body);
}

function clearHighlights() {
  document.querySelectorAll('mark').forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
  });
}

function sorry(){
  alert('sorry this feauture temporary unworking')
}

function show_infoBromo(){
  const myElement = document.getElementById('bromo__info');
  myElement.classList.add('active');
  const myBodyElement = document.body;
  myBodyElement.classList.add('activebody');
}

function show_infoKomodo(){
  const myElement = document.getElementById('komodo__info');
  myElement.classList.add('active');
  const myBodyElement = document.body;
  myBodyElement.classList.add('activebody');
}

function show_infoNusa(){
  const myElement = document.getElementById('nusa-tegara__info');
  myElement.classList.add('active');
  const myBodyElement = document.body;
  myBodyElement.classList.add('activebody');
}

function removeBromo(){
    const myElement = document.getElementById('bromo__info');
    myElement.classList.remove('active');
    const myBodyElement = document.body;
    myBodyElement.classList.remove('activebody');
}
function removeKomodo(){
    const myElement = document.getElementById('komodo__info');
    myElement.classList.remove('active');
    const myBodyElement = document.body;
    myBodyElement.classList.remove('activebody');
}
function removeNusaTegara(){
    const myElement = document.getElementById('nusa-tegara__info');
    myElement.classList.remove('active');
    const myBodyElement = document.body;
    myBodyElement.classList.remove('activebody');
}