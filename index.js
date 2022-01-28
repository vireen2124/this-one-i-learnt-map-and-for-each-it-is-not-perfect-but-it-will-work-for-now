const showBtn=document.querySelector(".show-btn");
const textDiv=Array.from(document.querySelectorAll(".question-text-container"));
const answers=document.querySelectorAll(".answer");
// showBtn.map((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const show=e.currentTarget.parentElement.parentElement.lastElementChild  
//         btn.classList.toggle("showing")
//         if(btn===e.currentTarget){
//             show.classList.toggle("is-active")
//         }else{
//             show.classList.remove("is-active")
//         }

//         })
// })
//i practiced using map and for each loop see the difference between map and for each
//you must use the arrayfrom method then only you can use map but in
//for each you dont need

textDiv.map(div=>{
   const btn=div.querySelector(".show-btn");
   const answer=document.querySelectorAll(".answer");
   btn.addEventListener("click",(e)=>{
       answer.forEach(ans=>{
          if(e.currentTarget.parentElement.parentElement===ans.parentElement){
              ans.classList.toggle("is-active")
          }else{
            ans.classList.remove("is-active")
          }
       })
   })    
})