




function checkusername() {

}

function onfocususername(){
    var usernameborder=document.getElementById("username");
    usernameborder.style.borderColor="gray";
    var warninginfo=document.getElementById("usernameinfo");
    warninginfo.innerText="输入8个以上英文字母或数字";
    warninginfo.style.color="gray";

}
function blurusername(){
    var user=document.getElementById("username").value;
    var usernameborder=document.getElementById("username");
    var warninginfo=document.getElementById("usernameinfo");
    if(!user){
        usernameborder.style.borderColor="red";
        warninginfo.innerText="用户名不能为空!";
        warninginfo.style.color="red";
    }
    else{
        usernameborder.style.borderColor="gainsboro";
    }
}

function onfocuspassword(){
    var passwordborder=document.getElementById("password");
    passwordborder.style.borderColor="gray";
    var warninginfo=document.getElementById("passwordinfo");
    warninginfo.innerText="输入6个以上英文字母或数字";
    warninginfo.style.color="gray";
}
function blurpassword(){
    var user=document.getElementById("password").value;
    var passwordborder=document.getElementById("password");
    var warninginfo=document.getElementById("passwordinfo");
    if(!user){
        passwordborder.style.borderColor="red";
        warninginfo.innerText="密码不能为空!";
        warninginfo.style.color="red";
    }
    else{
        passwordborder.style.borderColor="gainsboro";
    }
}

function onfocuspasswordRepeat(){
    var passwordconborder=document.getElementById("passwordcon");
    passwordconborder.style.borderColor="gray";
    var warninginfo=document.getElementById("passwordconinfo");
    warninginfo.innerText="再次输入密码";
    warninginfo.style.color="gray";
}
function blurpasswordRepeat(){
    var formerpassword=document.getElementById("password").value;
    var repeatpassword=document.getElementById("passwordcon").value;
    var passwordconborder=document.getElementById("passwordcon");
    var warninginfo=document.getElementById("passwordconinfo");
    if(!repeatpassword){
        passwordconborder.style.borderColor="red";
        warninginfo.innerText="重复密码不能为空!";
        warninginfo.style.color="red";
    }
    else if(formerpassword!==repeatpassword){
        passwordconborder.style.borderColor="red";
        warninginfo.innerText="两次密码不一致!!";
        warninginfo.style.color="red";

    }
    else{
        passwordconborder.style.borderColor="gainsboro";
    }
}



