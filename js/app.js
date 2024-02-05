setInterval(function(){
    let date = new Date(); 

    let hour = document.querySelector('.hour');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    let am = document.querySelector('.am');

    
    let hour_now = date.getHours();
    let min_now = date.getMinutes();
    let sec_now = date.getSeconds();

    

    hour.innerText = hour_now > 12 ? hour_now - 12 : hour_now; 
    am.innerText = hour_now > 12 ? 'pm' : 'am'; 
    min.innerText = min_now<10 ? '0'+ min_now : min_now;
    sec.innerText = sec_now<10 ? '0'+ sec_now: sec_now;



},1000);

if(localStorage.getItem('mode') === 'dark'){
    document.documentElement.classList.add("dark");
    document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
}
document.querySelector("#btn").addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-sun"></i>'
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("mode");
    } else {
        document.documentElement.classList.add("dark");
        document.querySelector('#btn').innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.setItem("mode", "dark");
    }
});

let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');


function displayTime(){
 let date = new Date();
  
 let hh = date.getHours();
 let mn = date.getMinutes();
 let sc = date.getSeconds();
  
 let hRotation = 30*hh + mn/2;
 let mRotation = 6*mn;
 let sRotation = 6*sc;


 hour.style.transform = `rotate(${hRotation}deg)`;
 min.style.transform = `rotate(${mRotation}deg)`;
 sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);