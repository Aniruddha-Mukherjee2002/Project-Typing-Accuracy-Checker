//object structure
const user = {
  password : "",
  email: "",
  wpm:"",
  mistakes:""
}
// fetching the data from the paragraph.
localStorage.setItem('1',"The quick")
const rcvdTxt = localStorage.getItem('1')
const showPara = document.getElementById('content')
showPara.innerText = rcvdTxt

//for counting how many green letters
let countGreen = 0
// for counting how many red letters
let countRed = 0
//for indexing the word length array
let index = 0
//global variable for indexing
let x = 0
// for counting spaces in the sentence.
let space = 0;
//
let totalCount = 0;
//correct keystrokes
let correctKeyStrokes = 0

// storing by separating the words
let words = rcvdTxt.split(' ')

//creating a new array to store the length of the word
let lengths = new Array()
for (const element of words) {
  lengths.push(element.length)
}
let arr = new Array()
for(let i = 0; i<rcvdTxt.length; ++i) {
  arr.push(rcvdTxt[i])
}

let wordCount = 0

let isShiftKey = false
document.addEventListener('keydown',(e)=>{
  if(e.key==='Shift'){
    isShiftKey=true
    return
  }
})
// this code is just detecting the correct and incorrect keystrokes
document.addEventListener('keyup', (event) => {
if(event.key==='Shift'){
  return
}

// counting words by backspace and terminal of the string
if(event.key===' '&&countGreen!=lengths[index]) {
  index++;
  countGreen = 0
  
}
if(event.key===' ' && countGreen == lengths[index] || event.key==='.' && countGreen == lengths[index])  {
  wordCount++
  console.log(wordCount+` ${countGreen}`)
  correctKeyStrokes+=countGreen
  countGreen=0
  index++
  
}

if(isShiftKey){
  isShiftKey=false
  event.key = event.key.toUpperCase()
}
  const typed = document.getElementById('typing-content')
  const mistake = document.getElementById('mistake')
  if(event.key == arr[x]){
    const para = document.getElementById('content')
    const colorText = para.textContent
    if(x>=0 && x<colorText.length)  {
        const text = colorText.slice(0,x)+`<span style="color: green">${colorText[x]}</>`+`<span style="color: black">${colorText.slice(x+1)}</span>`
        typed.innerText+=event.key
        para.innerHTML = text
        typed.style.color = "green"
        countGreen++
       if(event.key===' ' && event.key == arr[x]){
        countGreen++;
       }
       
    }
  } 
  else{
    const para = document.getElementById('content')
    const colorText = para.textContent
    if(x>=0 && x<colorText.length)  {
        const text = colorText.slice(0,x)+`<span style="color: red">${colorText[x]}</>`+`<span style="color: black">${ colorText.slice(x+1)}</span>`
        para.innerHTML = text
        mistake.innerText += event.key
        mistake.style.color = "red"
        countRed++;
  }
  }
x++
totalCount++;
})
document.addEventListener('keyup',(event)=>{
  if(event.key === 'Enter') {
    // showing the accuracy
    const words = document.getElementById('words')
    const wks = document.getElementById('wks')
    const accuracy = document.getElementById('accuracy')
    let acc = (correctKeyStrokes/totalCount)*100
    
    words.innerText = String(wordCount)
    wks.innerText = String(countRed)
    accuracy.innerText = `${acc}%`
  }
})

