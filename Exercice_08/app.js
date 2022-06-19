
let tr =  document.getElementsByTagName('tr');

let td = document.getElementsByTagName('td');

let deleteBtn = document.getElementsByTagName('button');

let team = document.getElementById("deletedTeam");



console.log(tr);
console.log(td);
console.log(deleteBtn);


deleteBtn[0].addEventListener('click', function(){
    team.innerHTML = td[1].textContent;
    tr[1].remove();
})

deleteBtn[1].addEventListener('click', function(){
    team.innerHTML = td[5].textContent;
    tr[2].remove();
})

deleteBtn[2].addEventListener('click', function(){
    team.innerHTML = td[9].textContent;
    tr[3].remove();
})

deleteBtn[3].addEventListener('click', function(){
    team.innerHTML = td[13].textContent;
    tr[4].remove();
})