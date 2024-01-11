
const calculate = document.getElementById("cal");
const dateEL = document.getElementById("date")
const result = document.getElementById("ageResult")


calculate.addEventListener("click", function(){
   const inputEL = dateEL.value
  
   
  const birthvalue = new Date(inputEL).getFullYear()
  console.log(birthvalue);

  const newdate =  new Date().getFullYear()
  console.log(newdate);

//   calculation of the new age

const Agevalue = newdate - birthvalue

console.log(Agevalue);

result.innerHTML = `You are :${Agevalue}  Years Old`
})

// function GetAge(inputEL)
// {

//     const datevalue = new Date() 
//     const birthvalue = inputEL(datevalue)
    
// }