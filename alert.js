let passwordInput = document.querySelector('.password-input');



let sizeSetting = document.querySelector('.size-setting');
let pixels = document.querySelector('.pixels');
let IncludeUppercase = document.querySelector('.Include-Uppercase');
let IncludeLowercase = document.querySelector('.Include-Lowercase');
let IncludeNumbers = document.querySelector('.Include-Numbers');
let IncludeSymbols = document.querySelector('.Include-Symbols');
let generatorButton = document.querySelector('.generator-button');


sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  passwordInput.length = sizeSetting.value;
  passwordInput.value = "";

};
generatorButton.onclick = function () {

  passwordInput.value = "";
    let arr =[];
    
    StringTextUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    StringTextLowerCase = "abcdefghijklmnopqrstuvwxyz";
    StringNumbers = "1234567890";
    StringSymbols = "!№;%:?*()_+=";

            if (IncludeUppercase.checked) {arr.unshift('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')};
            
            if (IncludeLowercase.checked) {arr.unshift('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')};
            
            if (IncludeNumbers.checked) {arr.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9)};
            
            if (IncludeSymbols.checked) {arr.unshift('!', '@', '#', '$', '%', '?', '-', '+', '=', '~')}; 
            

        CountRandom = sizeSetting.value;
    for (var i = 0; i<CountRandom; i++) {
             Random = Math.round(Math.random()*(arr.length-1));
             
            passwordInput.value += arr[Random];
            
            
    }
    
  };

  

          