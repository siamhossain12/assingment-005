// function for coin

function callnow(id,number,historyName,hnumber){
   
             let value=parseInt(document.getElementById(id).innerText) 
             const numberr=document.getElementById(number).innerText;
             console.log(value)

              if(value>19) {
                 value=value-20;
                 alert("you are calling at "+numberr )
                 history(historyName,hnumber);
                 return value;
              }
             else{
                alert("you have not enoufgh coin !!!")
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
        


        //   function call for calling

        document.getElementById('call1').addEventListener("click",function(){
            const newValue = callnow('coinvalue','number1','historyName','number1');
           coinvalue.innerText=newValue;
           
           
        })
        //  function caii for copy

     document