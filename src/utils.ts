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