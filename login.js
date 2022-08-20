function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
   
    if(username === "shubham" && password === "khapekar"){
        alert('login successfully!');
        
    }else{
        alert('login failed!');
    }
}
