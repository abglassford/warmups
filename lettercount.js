function letterCount(word, letter){
  var count = 0
  for(var i = 0; i < word.length; i++){
    if(word[i].toLowerCase() === letter.toLowerCase()){
      count++
    }
  }
  if(count === 0){
    console.log('Not Found')
  }else{
    console.log(count);
  }
}

letterCount('Taco xxxxx bell is terrible for you.', 'X')
