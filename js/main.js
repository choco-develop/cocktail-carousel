const slides=document.querySelector('img')
const drinkName=document.querySelector('h2')
const drinkInstructions=document.querySelector('h3')
const next= document.querySelector('#next')
const prev= document.querySelector('#previous')


document.querySelector('.getDrink').addEventListener('click', bar) 

function bar(){
  let i=0
  slides.scr=""
  drinkName.innerText=""
  drinkInstructions.innerText=""
  document.querySelector('h4').innerText='Ingredients '
  document.querySelector('body').style.background='none'
  document.querySelector('h1').style.color='black'
  next.style.display='inline'
  prev.style.display='inline'
  let choiceDrink=document.querySelector('input').value
  let ingredient1=document.querySelector('#ing1')
  let ingredient2=document.querySelector('#ing2')
  let ingredient3=document.querySelector('#ing3')
  let ingredient4=document.querySelector('#ing4')
  let ingredient5=document.querySelector('#ing5')
  let ingredient6=document.querySelector('#ing6')
  let ingredient7=document.querySelector('#ing7')
  let ingredient8=document.querySelector('#ing8')

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choiceDrink}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.drinks)
      const arr=data.drinks.length-1
        slides.src=data.drinks[i].strDrinkThumb
        drinkName.innerText=data.drinks[i].strDrink
        drinkInstructions.innerText=data.drinks[i].strInstructions
        ingredient1.innerText=data.drinks[i].strIngredient1
        ingredient2.innerText=data.drinks[i].strIngredient2
        ingredient3.innerText=data.drinks[i].strIngredient3
        ingredient4.innerText=data.drinks[i].strIngredient4
        ingredient5.innerText=data.drinks[i].strIngredient5
        ingredient6.innerText=data.drinks[i].strIngredient6
        ingredient7.innerText=data.drinks[i].strIngredient7
        ingredient8.innerText=data.drinks[i].strIngredient8
        next.addEventListener('click', ()=>{
         i++
         if(i<=arr){
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
          ingredient1.innerText=data.drinks[i].strIngredient1
        ingredient2.innerText=data.drinks[i].strIngredient2
        ingredient3.innerText=data.drinks[i].strIngredient3
        ingredient4.innerText=data.drinks[i].strIngredient4
        ingredient5.innerText=data.drinks[i].strIngredient5
        ingredient6.innerText=data.drinks[i].strIngredient6
        ingredient7.innerText=data.drinks[i].strIngredient7
        ingredient8.innerText=data.drinks[i].strIngredient8
        }
         else{
          i=0
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
          ingredient1.innerText=data.drinks[i].strIngredient1
        ingredient2.innerText=data.drinks[i].strIngredient2
        ingredient3.innerText=data.drinks[i].strIngredient3
        ingredient4.innerText=data.drinks[i].strIngredient4
        ingredient5.innerText=data.drinks[i].strIngredient5
        ingredient6.innerText=data.drinks[i].strIngredient6
        ingredient7.innerText=data.drinks[i].strIngredient7
        ingredient8.innerText=data.drinks[i].strIngredient8
        }  
       } )
       prev.addEventListener('click',()=>{
        i--
         if(i<=arr){
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
          ingredient1.innerText=data.drinks[i].strIngredient1
        ingredient2.innerText=data.drinks[i].strIngredient2
        ingredient3.innerText=data.drinks[i].strIngredient3
        ingredient4.innerText=data.drinks[i].strIngredient4
        ingredient5.innerText=data.drinks[i].strIngredient5
        ingredient6.innerText=data.drinks[i].strIngredient6
        ingredient7.innerText=data.drinks[i].strIngredient7
        ingredient8.innerText=data.drinks[i].strIngredient8
        }
         else{
          i=0
          slides.src=data.drinks[i].strDrinkThumb
          drinkName.innerText=data.drinks[i].strDrink
          drinkInstructions.innerText=data.drinks[i].strInstructions
          ingredient1.innerText=data.drinks[i].strIngredient1
        ingredient2.innerText=data.drinks[i].strIngredient2
        ingredient3.innerText=data.drinks[i].strIngredient3
        ingredient4.innerText=data.drinks[i].strIngredient4
        ingredient5.innerText=data.drinks[i].strIngredient5
        ingredient6.innerText=data.drinks[i].strIngredient6
        ingredient7.innerText=data.drinks[i].strIngredient7
        ingredient8.innerText=data.drinks[i].strIngredient8

       }
      }
)

}
    )
}
