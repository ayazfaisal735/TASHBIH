// ----------------font page--------------------
const startButton = takeElement("start-btn");
const frontPage = startButton.parentNode;
startButton.addEventListener("click", function(){
      frontPage.style.display = "none";
      middlePage.classList.remove("hidden");
})




// ------------------middle page----------------
const middlePage = takeElement("middle-page");
const leftArrow = takeElement("left-arrow");
const rightArrow = takeElement("right-arrow");
const countTasbih = takeElement("count-tasbih");
const countButton = takeElement("count-btn");
const resetButton = takeElement("reset-btn");
leftArrow.addEventListener("click",function(){
      addClass(middlePage,"hidden");
      frontPage.style.display = "block";
});
let count = 0;
const target = 34;
countButton.addEventListener("click",function(){
      addInnerElement(countTasbih,count);
      count++;
      if(count >= target){
            addClass(countButton,"btn-disabled")
      }
})
resetButton.addEventListener("click",function(){
      count = 0;
      addInnerElement( countTasbih,count);
      removeClass(countButton,"btn-disabled");
})




// -------------------last page--------------------








// -----------utility function------------
function takeElement(id){
      const getElement = document.getElementById(id);
      return getElement;
      
}
function addInnerElement(id , value ){
       id.innerText = value;
       return id;
}
function addClass(id,value){
      id.classList.add(value);
}
function removeClass(id,value){
      id.classList.remove(value);
}

