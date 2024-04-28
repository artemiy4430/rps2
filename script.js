// const triArtema = {
//   name : 'Artem', 
//   number: 3 ,
//   options: [1, 2, 3]
// }
// const  setI = localStorage.setItem(JSON.stringify(triArtema))

// const savedOptions = localStorage.getItem(JSON.parse(setI)); 

// localStorage.removeItem('name')

// localStorage.clear("")



// const load = key => {
//   try {
// 		const getI = localStorage.getItem(key)
// 		if (getI === 0) {
// 			return undefined
// 		} else {
// 			return JSON.getI
// 		}
// 	} 
//   catch (err) {
// 		console.log(`${err} 'tyt pomilka'`)
// 	}
// }

// try {
// 	// on user land
// 	document.getElementById('main').innerHTML = localStorage.getItem('textarea')
// } catch (_) {}
// document.getElementById('main').addEventListener(
// 	'input',
// 	_.debounce(() => {
// 		localStorage.setItem('textarea', document.getElementById('main').value)
// 	}, 250)
// )



// const form = document.getElementById('myForm'); 
// document.addEventListener('DOMContentLoaded', () => {
//      const formData = JSON.parse(localStorage.getItem('formData'))
// 			if (formData) {
// 				document.getElementById('name').value = formData.name
// 				document.getElementById('email').value = formData.email
// 				document.getElementById('comments').value = formData.comments
// 			}
// })
// form.addEventListener('input', (event)=> {
//   const formData = {
// 		name: document.getElementById('name').value,
// 		email: document.getElementById('email').value,
// 		comments: document.getElementById('comments').value
// 	}
//   localStorage.setItem('formData', JSON.stringify(formData)); 
// })









// document.addEventListener('DOMContentLoaded', ()=> {
// const form = document.querySelector('.form') ;
// const button = document.querySelector('.button'); 
// const ClearB = document.querySelector('.buttonClear') 

// let savedName = localStorage.getItem('name'); 
// let savedEmail = localStorage.getItem('email'); 
// let savedPassword = localStorage.getItem('password') 

// if(password && email ){
// document.getElementById('name').value = JSON.parse(savedName)
// document.getElementById('email').value = JSON.parse(savedEmail)
// document.getElementById('password').value = JSON.parse(savedPassword)
// }
// ClearB.addEventListener('click', ()=> {
// 	localStorage.clear()

// })


// button.addEventListener('click', (event) => {
// event.preventDefault()
// let formName = document.getElementById('name').value; 
// let formEmail = document.getElementById('email').value;
// let formPassword= document.getElementById('password').value; 
// localStorage.setItem('name', JSON.stringify(formName)); 
// localStorage.setItem('email', JSON.stringify(formEmail)); 
// localStorage.setItem('password', JSON.stringify(formPassword)); 
// })
// })



let button = document.getElementById('button').addEventListener('click', () => outcome())
let result = document.getElementById('result')
function updateResult() {
	result.innerText = `Wins: ${localStorage.wins || 0}, Losses: ${
		localStorage.losses || 0
	}, Ties: ${localStorage.ties || 0}`
}

function outcome() {
	let outcomes = ['win', 'lose', 'tie']
	let randomIndex = Math.floor(Math.random() * outcomes.length)
	let textResult = outcomes[randomIndex];
	
	if (textResult === 'win') {
		localStorage.wins = Number(localStorage.wins || 0) + 1
	} else if (textResult === 'lose') {
		localStorage.losses = Number(localStorage.losses || 0) + 1
	} else {
		localStorage.ties = Number(localStorage.ties || 0) + 1
	}
	updateResult()
}


updateResult()