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
 
  if (sameArrays(userInputs, konami)) {
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

    if (password == '1234') {
      swal({type: 'success', title: "You've enabled the online map!"});
      $(".main").moveTo(3);
    } else {
      swal({type: 'error', title: "Incorrect password"});
    }
    return array = [];
  }
});