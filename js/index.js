const oobButton = document.getElementById("oob-button");
const oobInput = document.getElementById("oob-input");
const inputBody = document.getElementById("input-body");
const oobBody = document.getElementById("oob-body");
const oobedName = document.getElementById("oobed-name");
const oobReset = document.getElementById("oob-reset");
const tweet = document.getElementById("oob-tweet");

const vowels = ["a", "e", "i", "o", "u"];

const prepareValue = value => {
  return [...value.toLowerCase().trim()];
};

const checkY = (value, index) => {
  return index !== 0 && value === "y";
};

const oobIt = value =>
  prepareValue(value)
    .map((v, i) => {
      if (vowels.includes(v) || checkY(v, i)) {
        return "oob";
      }
      return v;
    })
    .join("");

const hideToggler = () => {
  inputBody.classList.toggle("hidden");
  oobBody.classList.toggle("hidden");
};

oobButton.addEventListener("click", function() {
  value = oobInput.value;
  if (value.length > 0) {
    hideToggler();
    oobedName.innerHTML = oobIt(value);
    twttr.widgets.createShareButton("/", oobBody, {
      size: "large",
      text: `I oob'd ${value} and it turned into ${oobIt(value)}. Check out @deletethispod`,
      hashtags: "piples, oobThis"
    })
    .then( function( el ) {
  console.log('Tweet button added.');
});
  }
});

oobReset.addEventListener("click", function() {
  hideToggler();
  oobInput.value = "";
  const shareButton = document.getElementsByClassName('twitter-share-button')[0]
  shareButton.parentNode.removeChild(shareButton)
});