let corectshoe =[
    "CALL IT SPRING","VALENCIA","VALENCIAA","VENATINIS","DON LOUIS","DON LOUISS","SON LOAIS","TALENCIAA","GON LOUIS","VEATINIS","MICHAEL KORS",
    "UICY COUTURE","PRADA","ALDO","SAM ADELMAN","LUIS VITON"]
    for(let i=0; i<corectshoe.length;i++)
    {
        if(sessionStorage.getItem(corectshoe[i])!=null)
        sessionStorage.removeItem(corectshoe[i])
    }
function sign()
{
    let alld=document.getElementsByTagName('input')
    let newuser={
        email:alld[0].value,
        password:alld[1].value,
        name:alld[2].value,
        phone:alld[3].value,
        address:alld[4].value
    }
    if(newuser.email==""||newuser.password==""||newuser.name==""||newuser.phone==""||newuser.address=="")
    {
        alert("אחד או יותר מהפרטים חסרים")
    }
    else
    {
        localStorage.setItem(newuser.password,JSON.stringify(newuser))
        alert("הפרטים שלך נשמרו בהצלחה!")
        sessionStorage.setItem('cart', 0)
        window.location='./proj.html'

    }
}
