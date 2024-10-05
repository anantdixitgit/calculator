let val=''
document.querySelector("#inputval").value=val;
function updatedvalue(){
    document.querySelector("#inputval").value=val;
}

document.querySelector("#buttons").addEventListener('click',function(event){
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
})



