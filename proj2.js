//בזמן טעינה
//שליפת המוצר מהמחסנית
//המרה לאובייקט
//הצגת הנתונים על המסך

function display1()
{
    let count =0
    let catgrysh=sessionStorage.getItem("catsheo")
    catgrysh=JSON.parse(catgrysh)

    let s=document.getElementById('p')

    
    let nam=document.createElement('lable')
    nam.innerHTML=catgrysh.name
    s.appendChild(nam)
    nam.className='nam'

    let br=document.createElement('br')
    s.appendChild(br)

    let ctgr=document.createElement('lable')
    ctgr.innerHTML="category: "+catgrysh.catagory
    s.appendChild(ctgr)
    ctgr.className='dt2'

    let br2=document.createElement('br')
    s.appendChild(br2)

    let prc=document.createElement('lable')
    prc.innerHTML="price: "+catgrysh.cost
    s.appendChild(prc)
    prc.className='dt3'

    let br3=document.createElement('br')
    s.appendChild(br3)

    
    let clr=document.createElement('lable')
    clr.innerHTML="color: "+catgrysh.color
    s.appendChild(clr)
    clr.className='dt'

    let br4=document.createElement('br')
    s.appendChild(br4)

    let pc=document.createElement('img')
    pc.src=catgrysh.img
    s.appendChild(pc)
    pc.className='img'

     br4=document.createElement('br')
    s.appendChild(br4)


    let ip=document.createElement('button')
    ip.innerHTML="+"
    s.appendChild(ip)
    

    ip.addEventListener('click',plus.bind(null, catgrysh.name))
    


    let lbl=document.createElement('lable')
    lbl.className='lb'
    lbl.innerHTML=0
    s.appendChild(lbl)
    


    let im=document.createElement('button')
    im.innerHTML="-"
    s.appendChild(im)
    im.addEventListener('click',minus.bind(null, catgrysh.name))

    let br5=document.createElement('br')
    s.appendChild(br5)

    let cartbtn=document.createElement('button')
    cartbtn.innerHTML='ADD TO CART'
    s.appendChild(cartbtn)
    cartbtn.className='cartbt'
    cartbtn.addEventListener('click',addcart.bind(null, catgrysh))
    let q=document.getElementById('name')
    q.innerHTML= "שלום " +localStorage.getItem("savedName")

}

function plus(name){
    // let p=JSON.parse( localStorage.getItem(name))
    // p.count
    // localStorage.setItem(name,  count+1)
    
    let lbl = document.getElementsByClassName('lb')[0]
    lbl.innerHTML=+(lbl.innerHTML)+1
 
  }
  
  function minus(name){
    let lbl = document.getElementsByClassName('lb')[0]

     if(lbl.innerHTML>0)
     
     {
    lbl.innerHTML=+(lbl.innerHTML)-1
 
       
     }
     

   }
   function addcart(s)
    {
        debugger
        alert('added to cart succsesfully')
        let count = +(sessionStorage.getItem('cart'))
        sessionStorage.setItem('cart', count+1)
        document.getElementById('cartamount').innerHTML = sessionStorage.getItem('cart')
        sessionStorage.setItem(s.name, JSON.stringify(s))
    }