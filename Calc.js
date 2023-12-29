
const keys = document.querySelectorAll('button');
const result =  document.querySelector('#results');
const reference =  document.querySelector('#reference');
let num = [];
let op = [];

keys.forEach(key => {
    key.addEventListener('click', function(){
      
        const buttontext = key.innerText;
   
         if(buttontext==="=")
         {
              if(reference.innerText!="") {
            num.push(parseFloat(result.innerText));
              result.innerText = oper();
              num=[];
               op=[];
              reference.innerText=" = ";
              reference.innerText+=result.innerText;
              }
              else if(result.innerText==="" ||reference.innerText==="")
              {
                reference.innerText = "Refresh and perform arithmetic operations!"
              }
         }
 
        else if(buttontext==="C")
        {
            result.innerText ="";
            reference.innerText="";
              num=[];
               op=[];
        }
        else if(buttontext === "+" || buttontext === "-" || buttontext === "*" || buttontext === "/")
        {
            if (result.innerText !== "" || reference.innerText !== "" ) {
                
            num.push(parseFloat(result.innerText));
            result.innerText="";
            reference.innerText+=buttontext;
            op.push(buttontext);
          
            }
        }

       else {
       
        result.innerText+=buttontext;
        reference.innerText+=buttontext;
       }
    })

})



function oper()
{
     for(let i=0;i<num.length;i++)
     {
        console.log(num[i]);
     } 
  
     for(let i=0;i<op.length;i++)
     {
        console.log(op[i]);
     } 
  

  let sum = num[0];
  for(let i=0;i<op.length;i++) {
       const operator = op[i];
        const operand = num[i+1];
        
   switch(operator){
      case "+" : sum+= operand;
                     break;
      case "-" : sum-= operand;
                     break;
      case "*" : sum*=operand;
                   break;
      case "/" :sum/= operand;
                   break;
     default: return "Not a valid operator";
   }
   }
    return sum;
}