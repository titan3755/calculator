let textOne = document.getElementsByClassName('text-1')
let textTwo = document.getElementsByClassName('text-2')
let textThree = document.getElementsByClassName('text-3')
let radioOne = document.getElementsByClassName('rd-1')
let radioTwo = document.getElementsByClassName('rd-2')
let radioThree = document.getElementsByClassName('rd-3')
let radioFour = document.getElementsByClassName('rd-4')
let output = document.getElementsByClassName('output-calc')
let datalistOne = document.getElementById('list-1')
let datalistTwo = document.getElementById('list-2')
textTwo[0].setAttribute('list', 'null')
function submitButton() {
    
    if(radioOne[0].checked == true){
        let result = textOne[0].value * textTwo[0].value
        output[0].value = 'Output: ' + result + ' Units'
        
    }
    else if(radioTwo[0].checked == true){
        let result = 0.5 * textOne[0].value * textTwo[0].value
        output[0].value = 'Output: ' + result + ' Units'
        
    }
    else if(radioThree[0].checked == true && textTwo[0].value.toLowerCase() == 'area'){
        let result = 4 * Math.PI * textOne[0].value * textOne[0].value
        output[0].value = 'Output: ' + result + ' Units'
        
    }
    else if(radioThree[0].checked == true && textTwo[0].value.toLowerCase() == 'volume'){
        let result = 4/3 * Math.PI * textOne[0].value * textOne[0].value * textOne[0].value
        output[0].value = 'Output: ' + result + ' Units'
        
    }
    else if(radioFour[0].checked == true && textThree[0].value.toLowerCase() == 'area'){
        let result = (2 * Math.PI * textOne[0].value * textTwo[0].value) + (2 * Math.PI * textOne[0].value * textOne[0].value)
        output[0].value = 'Output: ' + result + ' Units'
        
    }
    else if(radioFour[0].checked == true && textThree[0].value.toLowerCase() == 'volume'){
        let result = Math.PI * textOne[0].value * textOne[0].value * textTwo[0].value
        output[0].value = 'Output: ' + result + ' Units'
    }
}
function clickClearRec(){
    textOne[0].value = ''
    textTwo[0].value = ''
    textThree[0].value = ''
}
function clickRadio(){
    if (radioOne[0].checked == true){
        textOne[0].value = ''
        textTwo[0].value = ''
        textThree[0].value = ''
        textOne[0].placeholder = 'Length'
        textTwo[0].placeholder = 'Breadth'
        textThree[0].style.display = 'none'
        textTwo[0].setAttribute('list', 'null')
        
    }
    else if(radioTwo[0].checked == true){
        textOne[0].value = ''
        textTwo[0].value = ''
        textThree[0].value = ''
        textOne[0].placeholder = 'Base'
        textTwo[0].placeholder = 'Height'
        textThree[0].style.display = 'none'
        textTwo[0].setAttribute('list', 'null')
        
    }
    else if(radioThree[0].checked == true){
        textOne[0].value = ''
        textTwo[0].value = ''
        textThree[0].value = ''
        textOne[0].placeholder = 'Radius'
        textTwo[0].placeholder = 'Type "area" or "volume"'
        textThree[0].style.display = 'none'
        textTwo[0].setAttribute('list', 'list-1')
        
    }
    else if(radioFour[0].checked == true){
        textOne[0].value = ''
        textTwo[0].value = ''
        textThree[0].value = ''
        textOne[0].placeholder = 'Radius'
        textTwo[0].placeholder = 'Height'
        textThree[0].placeholder = 'Type "area" or "volume"'
        textThree[0].style.display = 'inline-block'
        textTwo[0].setAttribute('list', 'null')
    }
}