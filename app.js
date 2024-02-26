const btn = document.querySelector('button')
const input = document.querySelector('input')
const span = document.querySelector('.error')

function validateEmail(inputText) {
    let mailFormat =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(inputText==""){
        return false;
    }else{
        if (inputText.match(mailFormat)) {
            return true;
          } else {
            return false;
          }
    }
    
  }

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const text = input.value;
    const bool = validateEmail(text);
    console.log(bool)
    if(bool==false){
        input.classList.add("error-input");
        span.style.visibility="visible";
    }else{
        input.classList.remove("error-input");
        span.style.visibility="hidden";
        window.location.replace("http://127.0.0.1:5501/success.html");
    }
    
})