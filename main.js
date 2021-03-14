clicker = function(){
    let p = document.createElement('p');
    p.innerText = document.querySelector('textarea').value;
    document.querySelector('.news__brief').append(p);
    localStorage.setItem(`comment ${localStorage.getItem('i')}`, p.innerText);
    localStorage.setItem(`i`, `${Number(localStorage.getItem('i'))+1}`)
}
if(localStorage.getItem(`i`)==undefined) localStorage.setItem(`i`, '1');
for(let j = 1; j < localStorage.length;j++){
    let tex = document.createElement('p');
    tex.innerText = localStorage.getItem(`comment ${j}`);
    document.querySelector('.news__brief').append(tex);
}
document.querySelector('button').addEventListener('click', clicker);
