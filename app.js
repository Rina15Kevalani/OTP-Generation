

const inputs = document.querySelectorAll('input'),
  button = document.querySelector('button'),
  mobile = document.getElementById('mobile'),
  expire = document.getElementById('expire');

 let OTP = '' ,  expireInterval = '';


 function generateOTP(){
   OTP = 
    Math.floor(Math.random()*10) + "" +
    Math.floor(Math.random()*10) + "" +
    Math.floor(Math.random()*10) + "" +
    Math.floor(Math.random()*10)
    alert('Your OTP is :  ' + OTP);

    inputs[0].focus();
    expire.innerText = 10;
    expireInterval = setInterval(function () {
        expire.innerText-- ;
        if(expire.innerText === 0){
            clearInterval(expireInterval);
        }
    },1000);
 }


 function clearOTP(){
    inputs.forEach((input)=>{
       input.value = '';
       input.setAttribute('disabled',true);
    });
    clearInterval(expireInterval);
    expire.innerText = 0;

}
    inputs.forEach((input,index)=>{
       input.addEventListener('keyup',function(e){
        const currentInput = index;
        nextInput = input.nextElementSibling;
         prevInput = input.previousElementSibling;

        // console.log(currentIndex,nextInput,prevInput);

        if(
            nextInput &&
            nextInput.hasAttribute('disabled',true) &&
            currentInput.value !== ''
        ){
            nextInput.removeAttribute('disabled',true);
            nextInput.focus();  
        }

        if(e.key === 'Backspace'){
            inputs.forEach((input,index1)=>{
                if(index <= index1 && prevInput){
                    input.setAttribute('disabled',true);
                    prevInput.focus();
                    prevInput.value = '';
                }
            });
        }

        if(inputs[3].disabled && inputs[3].value !== ''){
            inputs[3].blur();
            button.classList.add('active');
            return;
        }
        button.classList.remove('active');
       });
    });


    window.addEventListener('load',()=>{
        let x = prompt('Please Enter your mobile number to verify accounnt:');
        if(x.length === 10 && x.length <= 10){
            mobile.innerText =  x;
            generateOTP();
        }else{
                alert('pls put 10digit mobile number.check Your number');
            }
    });

    button.addEventListener('click',()=>{
        let verify = '';
        inputs.forEach((input)=>{
            verify += input.value;
        });
        if(verify === OTP){
            alert('Your account has been verified successfully!');
            clearOTP();
        }else{
            alert('Your Verification Failed!');
        }
    });
 

    // function generateOTP(){
//     let digits  = '0123456789';
//     let OTP = '';
//     for(let i = 0; i<4;i++){
//         OTP += [Math.floor(Math.random()*10)]
//     }
//     return OTP;
// }
// console.log('OTP of 4 digits: ');
// console.log(generateOTP());