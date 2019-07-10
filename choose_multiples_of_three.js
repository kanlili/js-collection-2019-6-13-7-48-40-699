'use strict';

function choose_multiples_of_three(collection) {
  let result=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%3==0){
    result.push(collection[i]);
    }
  }
  //implement here
  return result;
}

module.exports = choose_multiples_of_three;
