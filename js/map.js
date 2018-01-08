// Check if map is enabled
var enableMap = localStorage.getItem("enableMap");

if (enableMap === null) {
  enableMap = false;
} else {
  enableMap = JSON.parse(enableMap);
}

if (enableMap) {
  addMap();
}
initPage();

let userInputs = [];
const konami = [
  38, 38, // ↑ ↑
  40, 40, // ↓ ↓ 
  37, 39, // ← → 
  37, 39, // ← → 
  66, 65, // B A
  ];
 
const sameArrays = function(a, b) {
  if (a.length !== b.length) { return false; }
 
  for (let index = 0; index < a.length; index++) {
    const value = a[index];
    if (value !== b[index]) { return false; }
  }
 
  return true;
};


$(document).on('keyup', async function(e) {
  const key = e.which;

  if (key === konami[userInputs.length]) {
    userInputs.push(key);
  } else {
    userInputs = [];
  }

  if (!enableMap && sameArrays(userInputs, konami)) {
    let array;
    const {value: password} = await swal({
      title: 'Please enter your unique pin',
      input: 'text',
      inputPlaceholder: 'Enter your 4 digit pin',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    });
    if (isValid(password)) {
      localStorage.enableMap = true;
      swal({type: 'success', title: "You've enabled the online map!", text: "The page will now reload."}).then((result) => {
        location.reload();
      });
    } else {
      swal({type: 'error', title: "Sorry, you have entered an invalid pin"});
    }
    return array = [];
  } else if (enableMap && sameArrays(userInputs, konami)) {
    swal({type: 'info', title: "You have already enabled the online map!"});
  }
});


function isValid(input) {
  // TODO: implement Luhn's algorithm or smth
  return input == '1234';
}

function addMap() {
  $(document).ready(function(){
    $("head").append('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCAtnFRjxQp16q7glc6rEl8XQHtTmqnU&callback=initMap"><\/script>');
    $(".map_container").wrap('<section class="page4"></section>');
    $(".page4").insertBefore($(".page5"));
  });
}

function initPage() {
  $(document).ready(function(){
    $(".main").onepage_scroll({
      sectionContainer: "section",
      responsiveFallback: 500,
      loop: true,
      keyboard: true
    });
  });
}

function initMap() {
  var stc = {lat: 43.776056, lng: -79.257944};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: stc
  });
  var marker = new google.maps.Marker({
    map: map,
    title: 'Scarborough Town Centre',
    position: stc
  });
}