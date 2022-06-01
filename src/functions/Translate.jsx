import React from 'react';
import tuluwords from '../utils/tuluwords.json';

export function translateWord(flw, fl, tl){
  let len = flw.length;
  let engv = `${toLang}-english`;
  const word = tuluwords.find((w) => w[fl] === flw.toLowerCase().trim());
  if(len != 0){
    if(word){
      let tw = word[tl];
      if(tw){
        let engvword = word[engv];
        if(engvword){
          return {tw, engvword};
        }
        else {
          let engverror = "English pronounciation for this word is not yet available";
          return {tw, engverror};
        }
      }
      else {
        let error = "Translation is not available for this word in the requested langauge";
        return error;
      }
    }
    else {
      let error = "Translation is not available for this word at the moment and will be available soon";
      return error;
    }
  }
}

