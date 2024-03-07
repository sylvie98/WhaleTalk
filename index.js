const input ='a whale of a deal!';
const vowel = ['a', 'e', 'i', 'o','u'];
const resultarray = [];
for(let a=0; a < input.length; a++){
    let word=input[a];
    console.log("Position", a ,":", 'there letter is ', word);
   for(let b=0; b < vowel.length; b++){
        let letter =vowel[b];
        if (word === letter) {
            console.log('vowels in string is'+' '+ letter.toUpperCase());
            console.log(word, ' is',b);
           resultarray.push(letter);
          
        } 
       // if(word ==='e'){
           // resultarray.push(word);
        //}
        if(word ==='u'){
            resultarray.push(word);
        }
        
        
    }
}
console.log(resultarray);
const resultString=resultarray.join(' ').toUpperCase();
console.log(resultString);

