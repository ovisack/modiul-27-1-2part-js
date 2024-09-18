document.getElementById('button-loging').addEventListener('click', function(event){
    
  event.preventDefault  
    console.log('loing butn klick');
    //stp-3: get the phon number
  const phonNumber= document.getElementById('phon-number').value;
  console.log(phonNumber);
})