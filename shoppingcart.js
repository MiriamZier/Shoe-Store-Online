let corectshoe =[
    "CALL IT SPRING","VALENCIA","VALENCIAA","VENATINIS","DON LOUIS","DON LOUISS","SON LOAIS","TALENCIAA","GON LOUIS","VEATINIS","MICHAEL KORS",
    "UICY COUTURE","PRADA","ALDO","SAM ADELMAN","LUIS VITON"]

function showcart()
{
    let s=document.getElementById('fullcart')
    s.className='s'
    // window.location.href='./shoppingcart.html'
    for(let i=0; i<corectshoe.length; i++){

    let cs=sessionStorage.getItem(corectshoe[i])
    if(cs!=null)
    {
        
    cs=JSON.parse(cs) 

    let dv=document.createElement('div')
    s.appendChild(dv)
    dv.className='divful'

    let dvl=document.createElement('div')
    dv.appendChild(dvl)
    dvl.className='divl'

    let dvim=document.createElement('div')
    dv.appendChild(dvim)
    dvim.className='divim'

    let names=document.createElement('lable')
    names.innerHTML=cs.name
    dvl.appendChild(names)
    names.className='names'

    let b=document.createElement('br')
    dvl.appendChild(b)

    let categors=document.createElement('lable')
    categors.innerHTML=cs.catagory
    dvl.appendChild(categors)
    categors.className='dt2'
    let b2=document.createElement('br')
    dvl.appendChild(b2)

    let prices=document.createElement('lable')
    prices.innerHTML=cs.cost
    dvl.appendChild(prices)
    prices.className='dt3'
    let b3=document.createElement('br')
    dvl.appendChild(b3)
    
    let colors=document.createElement('lable')
    colors.innerHTML="color: "+cs.color
    dvl.appendChild(colors)
    colors.className='dt'

    let b4=document.createElement('br')
    dvl.appendChild(b4)

    let pics=document.createElement('img')
    pics.src=cs.img
    dvim.appendChild(pics)
    pics.className='img'

    }
    let q=document.getElementById('name')
    q.innerHTML= "שלום " +localStorage.getItem("savedName")
}
}

