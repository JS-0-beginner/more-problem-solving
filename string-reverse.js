/// node string-reverse.js \\\

console.log('');

var greetings = "Welcome to Java Script";

function reverseString(text)
{
    let reverse = '';

    // Extra
    let normal = greetings;
    console.log('Normal-Form');
    console.log(normal);
    console.log('');
    console.log('Reversed-Form');
    // Extra
    
    for(const char of text)
    {
        // console.log(char);
        // reverse = reverse + char;
        
        reverse = char + reverse;
        
    }
    return reverse;
}

const reverseThem = reverseString(greetings);
console.log(reverseThem);