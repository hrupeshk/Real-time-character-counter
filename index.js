const textareaEl=document.getElementById("textarea");
const total_counterEl=document.getElementById("total-counter");
const remaining_counterEl=document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})
updateCounter();
function updateCounter(){
    total_counterEl.innerText=textareaEl.value.length;
    remaining_counterEl.innerText=textareaEl.getAttribute("maxLength")-textareaEl.value.length;
}
