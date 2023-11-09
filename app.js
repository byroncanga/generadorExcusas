const excusa = document.getElementById('excuse');

let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const excuseGen = function(){
    const whoNum = Math.floor(Math.random() * who.length); 
    const actionNum = Math.floor(Math.random() * action.length)
    const  whatNum = Math.floor(Math.random() * what.length) 
    const whenNum = Math.floor(Math.random() * when.length)

    const ExcusaCompleta = `${who[whoNum]} ${action[actionNum]} ${what[whatNum]} ${when[whenNum]}`

    return ExcusaCompleta
}

excusa.innerHTML = excuseGen();
