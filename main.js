const cells = document.querySelectorAll('.cell')
const resetBtn = document.getElementById('reset-button')
const sound = document.getElementById('sound')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let turn = 0;

cells.forEach(cell => {
	function makeMove(e) { }
	cell.addEventListener
		('click', function makeMove(e) {
			sound.play()
			if (e.target.className == 'cell') {
				if (turn % 2 == 0) {
					e.target.innerHTML = 'X'
				} else {
					e.target.innerHTML = 'O'
					e.target.style.textShadow = '0px 0px 1px #fff, 0px 0px 5px #fff, 0px 0px 5px #99ff00, 0px 0px 10px #99FF00'
				}
				turn++
			}
			determineWinner()
		}, { once: true })
})

function determineWinner() {
	if (cells[0].innerHTML != '' && cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[2].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[3].innerHTML != '' && cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[4].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[6].innerHTML != '' && cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[8].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[0].innerHTML != '' && cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[6].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[1].innerHTML != '' && cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[7].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[2].innerHTML != '' && cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[8].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[0].innerHTML != '' && cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[8].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[2].innerHTML != '' && cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML) {
		winningMessageTextElement.innerText = `The winner is ${cells[6].innerHTML}`
		winningMessageElement.classList.add('show')
	} else if (cells[0].innerHTML != '' && cells[1].innerHTML != '' && cells[2].innerHTML != ''
		&& cells[3].innerHTML != '' && cells[4].innerHTML != ''
		&& cells[5].innerHTML != '' && cells[6].innerHTML != ''
		&& cells[7].innerHTML != '' && cells[8].innerHTML != '') {
		winningMessageTextElement.innerText = `Draw`
		winningMessageElement.classList.add('show')
	}
}

resetBtn.addEventListener('click', function () {
	location.reload()
})




