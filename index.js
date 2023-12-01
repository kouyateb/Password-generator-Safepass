
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
   'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']



var input1 = document.getElementById("letters");
var input2 = document.getElementById("numbers");
var input3 = document.getElementById("symbols");
var result = document.getElementById("res_div");
var button = document.getElementById("ent");
var del_button = document.getElementById("del");

const inputs = [input1,input2,input3]
var password = ""

function integer(value) {
   value = parseInt(value)
   return value
};

function randomf1() {
   var random1 = Math.floor(Math.random() * 52);
   return random1
};

function randomf2() {
   var random2 = Math.floor(Math.random() * 10);
   return random2
};

function randomf3() {
   var random3 = Math.floor(Math.random() * 9);
   return random3
};



function loop() {
   for (i = 0; i < integer(input1.value); i++) {
   letter = letters[randomf1()];
   password += letter;
   };

   for (i = 0; i < integer(input2.value); i++) {
   letter = numbers[randomf2()]
   password += letter
   };

   for (i = 0; i < integer(input3.value); i++) {
   letter = symbols[randomf3()]
   password += letter
   };
};

function shuffle(password){
   password = password.split("");
   password = password.sort(() => Math.random() - 0.5);
   password = password.join('');
   return password
};
 
function inputf(){
   input1.value = ""
   input2.value = ""
   input3.value = ""
   result.innerHTML = "Password:"
};


button.addEventListener("click", function(){
   if (isNaN(input1.value)) {
      result.innerHTML = "Please enter valid numbers for the amount of letters!";
      return;
  } if (isNaN(input2.value)) {
      result.innerHTML = "Please enter valid numbers for the amount of numbers!";
      return;
  } if (isNaN(input3.value)) {
      result.innerHTML = "Please enter valid numbers for the amount of symbols!";
      return;
  } else {
   integer();
   randomf1();randomf2();randomf3();
   loop();
   password = shuffle(password);
   result.innerHTML = password;
   if (input1.value == ""){
   result.innerHTML = "Please enter some numbers"
   } 
   password = ""
  }
   
}
);

del_button.addEventListener("click", inputf);

