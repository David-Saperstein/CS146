const titles = document.getElementsByTagName("h1");
console.log(titles);
for(let i = 0; i < titles.length; i++){
    titles[i].style.transform = `rotate(${i % 2 == 0 ? '' : '-'}5deg)`;
}