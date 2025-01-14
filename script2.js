document.body.style.overflow="hidden"
document.addEventListener('keydown', (e)=>{
if(e.key == 'ArrowUp' || e.key == 'ArrowDown'){
  document.body.style.overflow="auto"
}
})
document.addEventListener('keyup', (e)=>{
  if(e.key == 'ArrowUp'|| e.key == 'ArrowDown'){
    document.body.style.overflow="hidden"
  }
  })


//Store the paragraph into localStorage
localStorage.setItem('1',"The quick brown fox jumps over the lazy dog swiftly.")
//

//fetch the paragraph form localStorage and show the text on the p tag id=content
const receivedText = localStorage.getItem('1')
const showArea = document.getElementById('content')
showArea.innerText = receivedText

// creating an array to store the text after splitting by space.
let withoutSpace = receivedText.split(' ')

//creating some global variables
let wrongKeyStrokes = 0 // to know the wrong keyStrokes
let correctKeyStrokes = 0 // to know the wrong keyStrokes
let wordsIndex = 0 // to point the withoutSpace array
let correctWordCount = 0 // count co
let greenIndex = 0 // to know the coorect key strokes
let currentWord = "" // the word string,to check and match from the withoutSace array.
//assigning two variables to reflect the live update
const typed = document.getElementById('typing-content')
const mistake = document.getElementById('mistake')

//Checking the correct or incorrect keystrokes using keyup and keydown event listeners.
// Below code to prevent the shift keystroke

document.addEventListener('keydown',(e)=>{
  if(e.key==='Shift'){
    return
  }
})
document.addEventListener('keyup', (event) => {
if(event.key==='Shift'){
  event.key = event.key.toUpperCase()
  return
}
if(event.key==='backspace'){
  return
}

//Detecting the keystrokes , if correct then green or red
if(greenIndex>=0 && greenIndex<=receivedText.length && receivedText[greenIndex] === event.key){
  if(event.key === 'Space' && liveText[greenIndex] === event.key){
    greenIndex++;
    correctKeyStrokes++
    return
  }
  else if(event.key === 'Space' && liveText[greenIndex] !== event.key){
    return
  }
  const liveText = document.getElementById('content').innerText
const liveUpdate = document.getElementById('content')
  const text = liveText.slice(0,greenIndex)+`<span style="color: green">${liveText[greenIndex]}</>`+`<span style="color: black">${liveText.slice(greenIndex+1)}</span>`
  typed.innerText+=event.key
  liveUpdate.innerHTML = text
  typed.style.color = "green"
  currentWord+=liveText[greenIndex]
  greenIndex++;
  correctKeyStrokes++
  
  
} else  {
  const liveText = document.getElementById('content').innerText
    const liveUpdate = document.getElementById('content')
  if(greenIndex>=0 && greenIndex<liveText.length)  {  
    const text = liveText.slice(0,greenIndex)+`<span style="color: red">${liveText[greenIndex]}</>`+`<span style="color: black">${ liveText.slice(greenIndex+1)}</span>`
    liveUpdate.innerHTML = text
    mistake.innerText += ` ${event.key}`
    mistake.style.color = "red"
    greenIndex++
    wrongKeyStrokes++
    
}
}
if(event.key === 'Enter' && greenIndex == receivedText.length){
  
        // Scroll to the very bottom of the page
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth", // Smooth scrolling
        });
    

  const words = document.getElementById('words')
  const wks =  document.getElementById('wks')
  const accuracy = document.getElementById('accuracy')

  wks.innerText = `Wrong keystrokes : ${wrongKeyStrokes}`
  const acc = Math.floor((correctKeyStrokes/greenIndex)*100)
  accuracy.innerText = `Accuracy : ${acc}%`
  
  if(user.best < acc) {
    user.best = acc
    const getObj = localStorage.getItem(String(id))
    const finalObj = JSON.parse(getObj)
    finalObj.best = user.best
    localStorage.setItem(finalObj.email,JSON.stringify(finalObj))
  }
  const bestScore = document.getElementById('best-acc')
  bestScore.innerText = `Best accuracy : ${user.best}%`
}
})
/*
  <div class="result-container">
                <p id="words"></p>
                <p id="wks"></p>
                <p id="accuracy"></p>
            </div>
*/
console.log(id)


