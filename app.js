const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImg = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="imgs/${randomNum(12)}.jpeg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `
}

function randomNum(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImg.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () =>
  [randomNum(4), randomNum(4)]).concat([[1, 1], [1, 1],
    [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
    [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
    [1, 1], [1, 1]]);

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);