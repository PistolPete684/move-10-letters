function moveTen(s){
  return s.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 10) % 26) + 'a'.charCodeAt(0));
    } else if (char >= 'A' && char <= 'Z') {
         return String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 10) % 26) + 'A'.charCodeAt(0));
    }
    
    return char;
   }).join('');
}