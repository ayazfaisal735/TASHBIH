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
      addClass(takeElement("btn-details").childNodes[1] , "bg-green-500");
      count++;
      if(count >= target){
            addClass(countButton,"btn-disabled");
            addClass(resetButton,"disabled")
      }
})
let resetCount = 0;
resetButton.addEventListener("click",function(){
      count = 0;
      resetCount++;
      addInnerElement( countTasbih,count);
      removeClass(countButton,"btn-disabled");
      if(resetCount === 1){
            addClass(takeElement("btn-details").childNodes[3],"bg-green-500");
      }
      if(resetCount === 2){
            addClass(takeElement("btn-details").childNodes[5],"bg-green-500");
      }
      if(resetCount ===3){
            removeClass(takeElement("btn-details").childNodes[3],"bg-green-500");
            removeClass(takeElement("btn-details").childNodes[5],"bg-green-500");
            removeClass(takeElement("btn-details").childNodes[1],"bg-green-500");
      }
})
//  const btnDetails = takeElement("btn-details");
//  console.log(btnDetails.childNodes[3]);




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

