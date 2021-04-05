let textOne = document.getElementsByClassName('text-1')
let textTwo = document.getElementsByClassName('text-2')
let radioOne = document.getElementsByClassName('rd-1')
let radioTwo = document.getElementsByClassName('rd-2')
let output = document.getElementsByClassName('output-calc')
function submitButton() {
    
    if(radioOne[0].checked == true){
        let result = textOne[0].value * textTwo[0].value
        output[0].value = 'Output: ' + result
    }
    else if(radioTwo[0].checked == true){
        let result = 0.5 * textOne[0].value * textTwo[0].value
        output[0].value = 'Output: ' + result
    }
}
function clickClearRec(){
    textOne[0].value = ''
    textTwo[0].value = ''
}
function clickRadio() {
    if (radioOne[0].checked == true){
        textOne[0].placeholder = 'Length'
        textTwo[0].placeholder = 'Breadth'
    }
    else if(radioTwo[0].checked == true){
        textOne[0].placeholder = 'Base'
        textTwo[0].placeholder = 'Height'
    }
}