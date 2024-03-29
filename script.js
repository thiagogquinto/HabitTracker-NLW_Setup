const form = document.querySelector("form")
const button =  document.querySelector("header button")
const nlwSetup = new NLWSetup(form)

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists =  nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Day already exists')
  } else{
    nlwSetup.addDay(today)
  }
}

function save(){
  localStorage.setItem("NLW@HabitsTracker", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLW@HabitsTracker')) || {};
nlwSetup.setData(data)
nlwSetup.load()
