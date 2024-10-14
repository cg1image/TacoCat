
/* function userInput(){
    // Hide the elements before displaying any results
    document.getElementById("sorry").style.display = "none";
    document.getElementById("congrats").style.display = "none";
    let userText = document.getElementById('inputBox').value;
    generateText(userText);
    
}

function generateText(reverse){
    let array = [];
    for(let i = reverse.length -1; i >= 0; i--){
      array.push(reverse[i]);
    } 
    if (array.join('') != reverse){
        document.getElementById('sorry').style.display = "block";
    } else {
        document.getElementById('congrats').style.display = "block";
    }
    
} */

    function userInput() {
        // Hide the elements before displaying any results
        document.getElementById("sorry").style.display = "none";
        document.getElementById("congrats").style.display = "none"; 
        
        // Get the user's input
        const input = document.getElementById("inputBox").value;
        const normalizedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove spaces and punctuation, make it lowercase
        const reversedInput = normalizedInput.split('').reverse().join('');
        document.getElementById('results').innerHTML = reversedInput;
        // Check if it's a palindrome
        if (normalizedInput === reversedInput && normalizedInput.length > 0) {
            document.getElementById("congrats").style.display = "block";  // Show congrats if palindrome
        } else {
            document.getElementById("sorry").style.display = "block";  // Show sorry if not palindrome
        }
    }

