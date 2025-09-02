// function for coin

function callnow(id,number,historyName,hnumber){
   
             let value=parseInt(document.getElementById(id).innerText) 
             const numberr=document.getElementById(number).innerText;
             

              if(value>19) {
                 value=value-20;
                 history(historyName,hnumber);
                 alert("you are calling at "+numberr )
                 
                 return value;
              }
             else{
                alert("you have not enough coin !!!")
                return 0;
             }
            
          }
      
        //   for history add
          function history(name,numbere){
           
           
            let parenthistory=document.getElementById('history');
            
            const entry=document.createElement('div');
            entry.classList.add(
  "w-full",
  "h-[85px]",
  "mt-2",
  "rounded-xl",
  "flex",
  "justify-between",
  "bg-[#fafafa]",
  "p-2.5"
);

            
 const creteHistoryname=document.createElement('h2');
 creteHistoryname.classList.add(
  
  "mt-2",
  "font-bold"
  
);


            const creteHistorynumber=document.createElement('p');
       creteHistorynumber.classList.add(
  "text-[#5c5c5cb3]"  
  
);

            const newDiv=document.createElement('div');
            newDiv.appendChild(creteHistoryname);
             newDiv.appendChild(creteHistorynumber);

    const realtime=document.createElement('p');
     realtime.classList.add(
  
  "mt-4"
  
  
);
    realtime.innerText=document.getElementById('clock').innerText;
             
              
            creteHistoryname.innerText=document.getElementById(name).innerText;
             creteHistorynumber.innerText=document.getElementById(numbere).innerText;
              
             entry.appendChild(newDiv);
            
               entry.appendChild(realtime);
              

            parenthistory.appendChild(entry);
            


          }

        //  function of copy
         function copyed(id){
            let value=parseInt(document.getElementById(id).innerText) 
             value=value+1;
             alert("you have copyed the number");

             return value;

         }
               //  function of heart
         function heart(id){
            let value=parseInt(document.getElementById(id).innerText) 
             value=value+1;
             return value;

         }
        
        // function for clear history
function clearHistory() {
  const parent = document.getElementById("history");
  const children = parent.children; 

  
  for (let i = children.length - 1; i > 1; i--) {
    parent.removeChild(children[i]);
  }
  return;
}

// for copy in keybord

function copyNumber(numberId, buttonId) {
  const numberEl = document.getElementById(numberId);
  const copyBtn = document.getElementById(buttonId);

 
  if (!numberEl || !copyBtn) return;

  const text = numberEl.innerText.trim();

  
  navigator.clipboard.writeText(text).then(() => {
    
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
    }, 1200);
  }).catch(() => {
    alert("Failed to copy!");
  });
}



// ..........................for card-1.........................................................

        //   function call for calling

        document.getElementById('call1').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number1','historyName','number1');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy1').addEventListener("click",function(){
        if (document.getElementById("number1")) {
    copyNumber("number1", "copy1");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart1').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

    //  function call for clear
document.getElementById('clear-btn').addEventListener("click",function(){
          clearHistory();

     })
    
// ...............................for card-2.....................................................

        //   function call for calling

        document.getElementById('call2').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number2','historyName2','number2');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy2').addEventListener("click",function(){
        if (document.getElementById("number2")) {
    copyNumber("number2", "copy2");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart2').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

  // ...............................for card-3.....................................................

        //   function call for calling

        document.getElementById('call3').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number3','historyName3','number3');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy3').addEventListener("click",function(){
        if (document.getElementById("number3")) {
    copyNumber("number3", "copy3");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart3').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

    // ...............................for card-4.....................................................

        //   function call for calling

        document.getElementById('call4').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number4','historyName4','number4');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy4').addEventListener("click",function(){
        if (document.getElementById("number4")) {
    copyNumber("number4", "copy4");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart4').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

         // ...............................for card-5.....................................................

        //   function call for calling

        document.getElementById('call5').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number5','historyName5','number5');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy5').addEventListener("click",function(){
        if (document.getElementById("number5")) {
    copyNumber("number5", "copy5");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart5').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

   
      // ...............................for card-6.....................................................

        //   function call for calling

        document.getElementById('call6').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number6','historyName6','number6');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy6').addEventListener("click",function(){
        if (document.getElementById("number6")) {
    copyNumber("number6", "copy6");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart6').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

           // ...............................for card-7.....................................................

        //   function call for calling

        document.getElementById('call7').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number7','historyName7','number7');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy7').addEventListener("click",function(){
        if (document.getElementById("number7")) {
    copyNumber("number7", "copy7");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart7').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

           // ...............................for card-8.....................................................

        //   function call for calling

        document.getElementById('call8').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number8','historyName8','number8');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy8').addEventListener("click",function(){
        if (document.getElementById("number8")) {
    copyNumber("number8", "copy8");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart8').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

            // ...............................for card-9.....................................................

        //   function call for calling

        document.getElementById('call9').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number9','historyName9','number9');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document.getElementById('copy9').addEventListener("click",function(){
        if (document.getElementById("number9")) {
    copyNumber("number9", "copy9");
  }
          const newVale = copyed('copy');
          document.getElementById('copy').innerText=newVale;
          

     })

        //  function caii for heart

     document.getElementById('heart9').addEventListener("click",function(){
          const newVale = heart('heart');
          document.getElementById('heart').innerText=newVale;
          

     })

