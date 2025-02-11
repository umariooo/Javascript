

function GeneratePassword(){

    const passwordLength =15;
    const UpperCase = ["A", "B", "C" ,"D", "E", "F" ,"G" ,"H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const LowerCase = ["a", "b", "c", "d", "e" ,"f" ,"g", "h", "i", "j" ,"k", "l", "m", "n", "o" ,"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const Symbols = ["!", "@", "#", "$", "^", "&,", "*", "(", ")", "-", "_", "+", "="];
    const allCharacters = UpperCase.concat(LowerCase, Numbers, Symbols);

    let password = [];

    
    password.push(UpperCase[Math.floor(Math.random() * UpperCase.length)]);
    password.push(LowerCase[Math.floor(Math.random() * LowerCase.length)]);
    password.push(Numbers[Math.floor(Math.random() * Numbers.length)]);
    password.push(Symbols[Math.floor(Math.random() * Symbols.length)]);
    //console.log(password);

    for(let i = password.length; i < passwordLength; i++)
    {
        password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }
    console.log(password);  
    return password.join("");
   

    
}

    function displayPassword(){
        const GeneratedPassword = GeneratePassword();

        document.getElementById("NewPassword").textContent = GeneratedPassword;

    }






















