const MailBox = document.getElementById("email-text")
const PassBox = document.getElementById("pass-text")
const EyePos = document.getElementById("eyes")

function ShowPass(){
    const InputType = document.querySelector("#pass");
    const Eye = document.querySelector("#eyes");

    const eyeclose = document.createElement("img");
    eyeclose.src = "../../../../assets/icon/Line\ 130.svg";

    if(InputType.getAttribute("type") == "password"){
        InputType.setAttribute("type", "text");
        Eye.appendChild(eyeclose);
    }else{
        InputType.setAttribute("type", "password");
        Eye.innerHTML = ' '
    }
}

function check(){
    let Mail = document.getElementById("email").value;
    let Pass = document.getElementById("pass").value;

    if(Mail != 'cacahoangkhai@gmail.com'){
        MailBox.innerHTML = 'Wrong Email'
        EyePos.style.top = '38.5%'
        return
    }else{
        MailBox.innerHTML = ''
        EyePos.style.top = '36%'
    }

    if(Pass != '1234'){
        PassBox.innerHTML = 'Wrong Password'
        return
    }else{
        PassBox.innerHTML = ''
    }

    location.replace("../../Home/index.html")
}