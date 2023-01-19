const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-03'],
  water: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
  exercise: ['01-02', '01-04', '01-06'],
  sleep: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
  walkDog: ['01-03', '01-06'],
  healthyFood: ['01-02', '01-04', '01-06']
}

nlwSetup.setData(data)

nlwSetup.load()