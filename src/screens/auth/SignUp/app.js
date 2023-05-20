const First = document.getElementById("first")
const Last = document.getElementById("last")
const Mail = document.getElementById("mail")
const Pass = document.getElementById("password")
const ConPass = document.getElementById("con-password")
const EyePos = document.getElementById("eyes")
const ConEyePos = document.getElementById("coneyes")


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

function ShowConPass(){
    const InputType = document.querySelector("#con-pass");
    const Eye = document.querySelector("#coneyes");

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
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("pass").value;
    let ConPassword = document.getElementById("con-pass").value;
    let ErrorText = ""

    if(FirstName == ''){
        ErrorText = "Missing Input"
        First.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        First.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%%'
    }

    if(LastName == ''){
        ErrorText = `Missing Input`
        Last.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Last.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%'
    }

    if(Email == ''){
        ErrorText = `Missing Input`
        Mail.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Mail.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%'
    }

    if(Password == ''){
        ErrorText = `Missing Input`
        Pass.innerHTML = ErrorText
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Pass.innerHTML = ''
        ConEyePos.style.top = '67.5%'
    }
    
    if(ConPassword == ''){
        ErrorText = 'Missing Input'
        ConPass.innerHTML = ErrorText
        return
    }else{
        ConPass.innerHTML = ''
    }

    if(/\s/.test(Email) == true || /^.*@gmail.com$/.test(Email) == false){
        ErrorText = `Email in the wrong format!`
        Mail.innerHTML = ErrorText
        EyePos.style.top = '59.7%'
        ConEyePos.style.top = '70.3%'
        return
    }else{
        ConPass.innerHTML = ''
        EyePos.style.top = '57%'
        ConEyePos.style.top = '67.5%'
    }

    if(/[A-Z]\w*[0-9]\w*/.test(Password) == false || Password.length <= 6){
        ErrorText = `Password must contain more than 6 characters and at least 1 capital letter, 1 number and 1 normal letter`
        Pass.innerHTML = ErrorText
        ConEyePos.style.top = '70.3%'
        return
    }else{
        Pass.innerHTML = ''
        ConEyePos.style.top = '67.5%'
    }

    if(Password != ConPassword){
        ErrorText = `Password confirmation failed, please type again`
        ConPass.innerHTML = ErrorText
        return
    }else{
        Pass.innerHTML = ''
    }

    
}
