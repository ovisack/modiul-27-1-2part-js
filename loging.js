// document.getElementById('button-loging').addEventListener('click', function(event){
    
//   event.preventDefault  
   
//     //stp-3: get the phon number
//   const phonNumber= document.getElementById('phon-number').value;

//    const pinNumber= document.getElementById('password-enter').value;
  
//   console.log(phonNumber,pinNumber);
  // this is tempuyari. you shold  do lik this 
// if(phonNumber === '5' && pinNumber==='1234'){
//     console.log('your are logd in ');
//     //step -5 : allow user to us the website

// }
// else{
//     alert('wrong phon number or pin ' )
// }

document.getElementById('button-loging')
addEventListener('click', function(event){
   event.preventDefault();
   //get phon Number and pin 
   const phonNumber= this.document.getElementById('phon-number').value;  
   const pinNumber= document.getElementById('password-enter').value;
   console.log(phonNumber,pinNumber);
   if(phonNumber === '5' && pinNumber ==='1234'){
    console.log('cart pin and number ');
    window.location.href= './dom.html';
    //step -5 : allow user to us the website

}
else{
    alert('wrong phon number or pin ' )
}
})