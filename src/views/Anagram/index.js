import React from 'react'
import {sortBy} from 'lodash'
export default function Anagram(strs=['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']) {
    let result = {};
    for (let word of strs) {
        let words=word.split("")
        let clean=sortBy(words,[text=>text.toLocaleLowerCase()],['asc'])
        if (result[clean]) {
        result[clean].push(word);
        } else {
        result[clean] = [word];
        }
    }
    console.log('Object.values', Object.values(result))

    return Object.values(result);
    
}
