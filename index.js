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

  // ✅ Check if elements exist
  if (!numberEl || !copyBtn) return;

  const text = numberEl.innerText.trim();

  // ✅ Copy to clipboard
  navigator.clipboard.writeText(text).then(() => {
    // ✅ Feedback to user
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
    }, 1200);
  }).catch(() => {
    alert("Failed to copy!");
  });
}





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
    



   


