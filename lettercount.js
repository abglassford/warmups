function letterCount(word, letter) {
  if (word.includes(letter.toLowerCase())) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    console.log(count);
  } else {
    console.log('Not Found');
  }
}

letterCount('a;lsfjlasjdflkjsadlf xxxXX', 'x')
