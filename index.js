//'gatting all the value 




//add even listener for calculate button





const calculateButton =document.getElementById('calculate')
calculateButton.addEventListener("click",function(){
  


const  income =parseFloat(document.getElementById('income').value);
    const  software =parseFloat(document.getElementById('software').value);
    const  courses=parseFloat(document.getElementById('courses').value);
    const  internet=parseFloat(document.getElementById('internet').value);




    const totalExprs=software+courses+ internet;

    const balance=income-totalExprs  ;


const totalExprsElement =document.getElementById('total-expenses')
totalExprsElement.innerText =totalExprs.toFixed(2);


const balanceElement =document.getElementById('balance')
balanceElement.innerText =balance.toFixed(2);

const results =document.getElementById('results')
results.classList.remove('hidden');







   // console.table({totalExprs, balance});
    
   // console.table( { income,software,courses,internet});

});



// Calculate Savings Button 

const CalculateSavingsButton = document.getElementById('calculate-savings')
CalculateSavingsButton.addEventListener('click',function(){


    //const savingPercentace =document.getElementById('savings').value;
  
  const savingPercentace =parseFloat(document.getElementById('savings').value);
    

const  income =parseFloat(document.getElementById('income').value);
const  software =parseFloat(document.getElementById('software').value);
const  courses=parseFloat(document.getElementById('courses').value);
const  internet=parseFloat(document.getElementById('internet').value);

    const totalExprs=software+courses+ internet;

    const balance=income-totalExprs  ;
const savingAmount= (savingPercentace*balance)/100;
//console.log(savingAmount);

const remainingBalance = balance -savingAmount;



const savingElement = document.getElementById('savings-amount')
savingElement.innerText =savingAmount.toFixed(2);

const remainingElement = document.getElementById('remaining-balance')
remainingElement.innerText =remainingBalance .toFixed(2);
 })
//
 const makeBlueButton=document.getElementById('make-blue')
 makeBlueButton.onclick=makeBlue;
 function makeBlue(){
     document.body.style.backgroundColor='blue';
 }
 
 function makeRed(){
     document.body.style.backgroundColor='red';
 }
//