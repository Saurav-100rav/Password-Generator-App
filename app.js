const slider = document.getElementById("mySlider");
const passwordSize = document.getElementById("password-size");

slider.addEventListener("input",()=>{
    passwordSize.innerText = slider.value;
})

const passwordbox = document.getElementById('password');

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number  = "0123456789";
const symbol ="!@#$%^&*()-_=+/?[]\'.,{}|:;<>";
const all = uppercase+lowercase+number+symbol;

// const pwdlimit=12;
function showpassword(){
    let pwd="";
    const pwdlimit=slider.value;
    pwd += uppercase[Math.floor(Math.random()*uppercase.length)];
    pwd += lowercase[Math.floor(Math.random()*lowercase.length)];
    pwd += number[Math.floor(Math.random()*number.length)];
    pwd += symbol[Math.floor(Math.random()*symbol.length)];

    while(pwd.length < pwdlimit){
        pwd+=all[Math.floor(Math.random() * all.length)];
    }
    passwordbox.value=pwd;
    // return pwd;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}

