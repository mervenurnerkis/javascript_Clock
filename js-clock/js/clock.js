function showTime() {
	let clockEl = document.getElementById('myClock') 

   	setInterval(() => {
   		let dateObj = new Date()
   		
   		let time = dateObj.toLocaleTimeString('tr-TR')
   		
   		let options = { weekday: 'long' }
   		let date = dateObj.toLocaleDateString('tr-TR', options)

   		clockEl.innerHTML = `${time} ${date}`
   }, 999)
}

(function() {
	let name = ''
	do {
   		name = prompt('Adınızı girin!')
	} while (name == '')

   nameEl = document.getElementById('myName')
   nameEl.innerHTML = name
   
   let clockEl = document.getElementById('myClock') 
   
   clockEl.addEventListener('onload', clockEl.onload())

})();