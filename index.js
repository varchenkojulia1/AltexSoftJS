const alphabet = ['A','B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R' ,'S', 'T', 'U','V','W','X','Y','Z']

let random = new Set();
while (random.size < 5) {
    let i = Math.round(Math.random() * 25);
    random.add(alphabet[i])
}

let select = document.querySelector('#root > select');
let option = ['<option disabled selected></option>'];
random.forEach(elem => option.push(`<option value = ${elem}>${elem}</option>`))
select.innerHTML = option.join('');

const showSelection = (e) => {

    document.getElementById('result').innerHTML  = '';
    let chosenLetter = e.target.value;
    let resultArr = []
    let result = dataList.map(user => {
        let letter = user.name[0];
       letter === chosenLetter ? resultArr.push(user.name) : null;
    })
    showResult(resultArr)
}

select.addEventListener('change', showSelection);

const showResult = (arr) => {
    let innerRes = arr.length !== 0 ? arr.map(item => `<li>${item}</li>`) : `<li>No matches</li>`;
    document.getElementById('result').innerHTML = typeof innerRes === 'string'? innerRes: innerRes.join('')
}

let dataList = [];

async function _getList() {
    const response = await fetch('./list.json', { method: 'GET'});
    const data = await response.json();
    dataList = [...data];
  }
_getList();