let calVal = localStorage.getItem('savedVal')||'';
displayResult();

function btn_fn(val){
  calVal+=val;
  displayResult();
  savedVal();  
}

function resetVal(){
  calVal='';
  displayResult();
  savedVal();
}

function evalVal(){
  calVal=eval(calVal);
  displayResult();
  savedVal();
}

function displayResult(){
  const result = document.querySelector('.js-display-result')
  result.innerHTML = calVal;
}

function savedVal(){
  localStorage.setItem('savedVal',calVal);
}

function btn_press(event,btn){
  if(event.key===btn)
  {
    btn_fn(btn);
  }
  }