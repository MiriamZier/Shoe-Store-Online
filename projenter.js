function save()
{
    let alld=document.getElementsByTagName('input')
    //שמירת נתונים
    let newuser={
    name:alld[0].value,
    password:alld[1].value,
    mail:alld[2].value
}
if(localStorage.getItem(newuser.name)==null)
{
    // localStorage.setItem(newuser.name,JSON.stringify(newuser))
    window.location.href='./signin.html'
    
}

else 
{
    let u=JSON.parse(localStorage.getItem(newuser.name))
    if(newuser.password==u.password)
    {
        sessionStorage.setItem('cart', 0)

        // let d=document.getElementById('name')

        // d.innerHTML='Hello:'+newuser.name
        localStorage.setItem("savedName", newuser.name)
        window.location.href='./proj.html'   
     }
    else
    {
        alert('error')
       }  

 }
}
