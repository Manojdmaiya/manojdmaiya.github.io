<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
     #box{
     border:2px solid ;
     width:500px;
     height:600px;
     background-color:black;
     border-radius:2%;
      margin:80px 500px 500px 500px;
}

#disply{
    border:2px solid ;
    width:400px;
    height:80px;
    background-color:rgb(197, 199, 201);
    border-radius:3%;
    margin:50px 50px 50px 50px;
    
}

#results{
    text-align:center;
}

button{
    width:70px;
    height:50px;
    border-radius: 10%;
    border: 5px transparent;
    font-weight: bold;
    font-size: 20px;
}


#set1{
   padding:10px 70px 10px 70px;
   margin-left: 0px;
   display:flex;
   justify-content: space-between;
}

#set2{
    padding:10px 70px 10px 70px;
    margin-left: 0px;
    display:flex;
    justify-content: space-between;
 }


#final{
    width:400px;
    border-radius: 2%;
    color:white;
    background-color: orange;
    font-size: 30px;
    text-align: center;
}
 
#C{ 
    color:white;
    background-color: orange;
   
}


button:hover{
    background-color: rgb(167, 158, 158);
}

#final:hover{
   
    background-color: rgb(192, 64, 21);
   
}
 
#C:hover{ 
 
    background-color:  rgb(192, 64, 21);

}

#reference{
      margin:-10px -100px -100px 10px;
      font-size: 20px;
}

@media(max-width:500px){
    #box {
    margin: 0px 0px 0px 0px;
    padding-left: 30px;
    width: 350px;
    height:500px;
    }

    
  #disply{
    border:2px solid ;
    width:300px;
    height:80px;
    background-color:rgb(197, 199, 201);
    border-radius:3%;
    margin:10px 10px 20px 10px;
    padding-top: 20px;
}


button{
    width:40px;
    height:45px;
    border-radius: 10%;
    border: 5px transparent;
    font-weight: bold;
    font-size: 10px;
}



#set1{
    padding:30px 10px 10px 30px;
    margin-left: 0px;
    display:flex;
    justify-content: space-between;
 }
 
 #set2{
     padding:30px 10px 10px 30px;
     margin-left: 0px;
     display:flex;
     justify-content: space-between;
  }
 
 
 #final{
     width:400px;
     border-radius: 2%;
     color:white;
     background-color: orange;
     font-size: 30px;
     text-align: center;
 }

   
}

</style>
</head>
<body>
    <div id="box">
       <section id="disply"> 
            <h1 id="results">Results are here!!</h1>
            <h2 id="reference"> reference </h2>
       </section>
       <section>
        <div id="set1">
           <button >1</button>
           <button>2</button>
           <button>3</button>
           <button>/</button>
        </div>
        <div id="set2">
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>*</button>
        </div> <div id="set2">
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>-</button>
        </div><div id="set2">
           <button>.</button>
           <button>0</button>
           <button>+</button>
           <button id="C">C</button>
        </div> <div id="set2">
           <button id="final">=</button>
        </div>
        </section>

      
    </div>
    <script src="Calc.js"></script>
</body>
</html>
