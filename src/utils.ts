export function diagonalDifference(matrix: number[][]): number {
  const n: number = matrix.length;
  let primarySum = 0;
  let secondarySum = 0;

  for (let i=0; i<n; i++){
    primarySum += matrix[i][i];
    secondarySum += matrix[i][n-1-i];
  }
  return Math.abs(primarySum - secondarySum);
}

export function reverseWords(s: string): string {
  let words: string[] = [];
  let currentWord = '';
  //trim the string
  for(let i=0; i< s.length; i++){
    if(s[i] === ' ' ){
      if(currentWord !== ''){
        words[words.length] = currentWord;
        currentWord = ''; 
      }
    }
    else{
        currentWord += s[i];
    }
  }
  if(currentWord !== '') words[words.length] = currentWord;
  
  if (words.length === 0) return '';

  let reversedWords: string[] = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords[reversedWords.length] = words[i];
  }
  
  let result = '';
  for (let i = 0 ; i < reversedWords.length; i++){
    if(reversedWords[i] != '') result += reversedWords[i];
    if (i < reversedWords.length - 1) result += ' ';
  }
  return result;
}



// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
// export function getFinalOpenedDoors(numDoors: number){
//   // Initialize an array to represent the door is closed
//   const doors: boolean[] = new Array(numDoors).fill(false);
// }

// Initial solution (simplified example)
export function getFinalOpenedDoors(numDoors: number) {
    let doors = new Array(numDoors + 1).fill(false);
    for (let i = 1; i <= numDoors; i++) {
        for (let j = i; j <= numDoors; j += i) {
            doors[j] = !doors[j];
        }
    }
    let result = [];
    for (let i = 1; i <= numDoors; i++) {
        if (doors[i]) result.push(i);
    }
    return result;
}