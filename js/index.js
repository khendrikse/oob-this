const valueButton = document.getElementById('value-button');
const valueInput = document.getElementById('value-input');
const cardBody = document.getElementById('card-body');
const resultBody = document.getElementById('result-body');
const result = document.getElementById('result');
const resultReset = document.getElementById('result-reset');
const vowels = ['a', 'e', 'i', 'o', 'u'];

const prepareValue = value => {
  return [...value.toLowerCase().trim()];
};

const checkY = (value, index) => {
  return index !== 0 && value === 'y';
};

const replaceVowels = value =>
  prepareValue(value)
    .map((v, i) => {
      if (vowels.includes(v) || checkY(v, i)) {
        return 'oob';
      }
      return v;
    })
    .join('');

const hideToggler = () => {
  cardBody.classList.toggle('hidden');
  resultBody.classList.toggle('hidden');
};

valueInput.addEventListener('keyup', function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    valueButton.click();
  }
});

valueButton.addEventListener('click', function () {
  value = valueInput.value;
  if (value.length > 0) {
    hideToggler();
    result.innerHTML = replaceVowels(value);
    twttr.widgets.createShareButton('/', resultBody, {
      size: 'large',
      text: `I oob'd ${value} and it turned into ${replaceVowels(value)}. Check out @deletethispod and oob your own stuff at https://oob-this.netlify.com/.`,
      hashtags: 'piples, oobThis'
    })
  }
});

resultReset.addEventListener('click', function () {
  hideToggler();
  valueInput.value = '';
  const shareButton = document.getElementsByClassName('twitter-share-button')[0]
  shareButton.parentNode.removeChild(shareButton)
});
