const moneyEl = document.getElementById('money')
const selectMoneyEl = document.getElementById('select-money')

const action = () => {
    selectMoneyEl.classList.toggle('active')
}

moneyEl.addEventListener('click', action)
