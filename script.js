const convertButton = document.getElementById('button')
const resetButton = document.getElementById('reset')

resetButton.addEventListener('click', (e) => {
    document.getElementById('input').value = ''
    document.getElementById('output').value = ''
   
})

convertButton.addEventListener('click',(e) => {
    spongeBob()
})


function spongeBob() {
    const inputText = document.getElementById('input').value
    const outputField = document.getElementById('output')
    const arr = inputText.split('');
    for(let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    spongeJoined = arr.join('')
    
    outputField.value = `${spongeJoined}`
}