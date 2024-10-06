let val=''
document.querySelector("#inputval").value=val;
function updatedvalue(){
    document.querySelector("#inputval").value=val;
}

const arr = ["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/","=","C"]

document.querySelector("#buttons").addEventListener('click',function(event){
    console.log(event.target.parentElement);
    if(arr.includes(event.target.getAttribute('data-value'))) {

        const buttonval= event.target.getAttribute('data-value');
        if(buttonval==='C'){
           val='';
        }
        else if(buttonval==='='){
           try {
                       val = eval(val);  // Evaluate the expression
                   } catch (error) {
                       val = 'invalid expression';  // Show error for invalid expressions
                   }
        }
        else{
            val+=buttonval;
        }
        updatedvalue();
    }
})



