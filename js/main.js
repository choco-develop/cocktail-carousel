const slides=document.querySelector('img')
const drinkName=document.querySelector('h2')
const drinkInstructions=document.querySelector('h3')
const next= document.querySelector('#next')
const prev= document.querySelector('#previous')
let i=0

document.querySelector('.getDrink').addEventListener('click', bar) 

function bar(){
  let choiceDrink=document.querySelector('input').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choiceDrink}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.drinks)
      const arr=data.drinks.length-1
        slides.src=data.drinks[i].strDrinkThumb
        drinkName.innerText=data.drinks[i].strDrink
        drinkInstructions.innerText=data.drinks[i].strInstructions
        next.addEventListener('click', ()=>{
         i++
         if(i< arr){
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
        }
         else{
          i=0
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
        }  
       } )
       prev.addEventListener('click',()=>{
        i--
         if(i<arr){
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
        }
         else{
          i=0
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions

       }
      }
)

}
    )
}
