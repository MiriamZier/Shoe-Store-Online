let shoes =[
    {img:"pics/shoe1.jpg",name:"CALL IT SPRING",cost:179,catagory:"Call It S pring Black Velvet Leather Flat",color:"Black Velvet"},
    {img:"pics/shoe2.jpg",name:"VALENCIAA",cost:550,catagory:"Valencia Taupe Ballet Flat",color:"Beig"},
    {img:"pics/shoes3.jpg",name:"VENATINIS",cost:420,catagory:"Vanetinis White Laser Cut Ballet Flat",color:"whhite"},
    {img:"pics/shoes5.jpg",name:"DON LOUIS",cost:560,catagory:"Don Louis Denim Penny Loafer",color:"Deenim"},
    {img:"pics/shoe5.jpg",name:"DON LOUISS",cost:400,catagory:"Don Louis Taupe Studded Loafer" ,color:"Cream"},
    {img:"pics/shoe6.jpg",name:"SON LOAIS",cost:750,catagory:"Don Louis Neon Pink Penny Loafer",color:"Orange"},
    {img:"pics/shoe7.jpg",name:"TALENCIAA",cost:450,catagory:"Valencia Denim Ballet Flat",color:"Light Blue"},
    {img:"pics/shoe8.jpg",name:"GON LOUIS",cost:300,catagory:"Gon Louis Black and White Sling Back",color:"white and black"},
    {img:"pics/shoe9.jpg",name:"VEATINIS",cost:120,catagory:"Valenia White Ballet Flat",color:"white"},
    {img:"pics/shoe10.jpg",name:"MICHAEL KORS",cost:165,catagory:"Michael Kors Blue Studded Pointed Flat",color:"Blue"},
    {img:"pics/shoe11.jpg",name:"UICY COUTURE",cost:149,catagory:"UICY COUTURE Camel Ballet Flat",color: "Camel"},
    {img:"pics/shoe12.jpg",name:"PRADA",cost:189,catagory:"DPraa Gold Flower Loafer",color:"white and yellow"},
    {img:"pics/shoe13.jpg",name:"ALDO",cost:245,catagory:"Alo White Buckle Flat",color:"white"},
    {img:"pics/shoe14.jpg",name:"SAM ADELMAN",cost:100,catagory:"Sam Adelman Brown Snake Ballet Flat",color:"snake black and brown"},
    {img:"pics/shoe15.jpg",name:"LUIS VITON",cost:165,catagory:"Louis Vitun Black Leather Penny Loafer ",color:" Black "},
    {img:"pics/shoe1.jpg",name:"VALENCIA",cost:640 ,catagory:"Valencia Taupe Pointed Flat",color:"Beig"},


]
    
  
    function show (){
    
    
    //נתפוס את הדיב עליו יוצגו כל המוצרים
    let d=document.getElementById('allP')
        for(let index=0; index<shoes.length; index++)
    {
        let s=document.createElement('div')
        s.className='chosenshoe'
    //נוסיף את המוצר הנוכחי לדיב הכללי
    d.appendChild(s)
    
    let pic=document.createElement('img')
    pic.src=shoes[index].img
    s.appendChild(pic)
    pic.className='picc'

    let br=document.createElement('br')
    s.appendChild(br)
    
    let sname =document.createElement('lable')
    sname.innerHTML =shoes[index].name
    s.appendChild(sname)
    
    let b=document.createElement('br')
    s.appendChild(b)
    
    let scost =document.createElement('lable')
    scost.innerHTML =shoes[index].cost
    s.appendChild(scost)
    
    let brr=document.createElement('br')
    s.appendChild(brr)

    let btn=document.createElement('button')
    btn.innerHTML="פרטים נוספים"
    s.appendChild(btn)
    btn.className='btn'

    let br2=document.createElement('br')
    s.appendChild(br2)

    let adcart=document.createElement('button')
    adcart.innerHTML="הוסף לסל"
    s.appendChild(adcart)
    adcart.className='adcr'

    btn.addEventListener('click',detales.bind(null,shoes[index]))
    adcart.addEventListener('click',addcart.bind(null,shoes[index]))


    }
    let q=document.getElementById('name')
    q.innerHTML= "שלום " +localStorage.getItem("savedName")

    }
    
    
    function detales(s){

    //המרת האובייקט לJSON
    // let dtls= JSON.parse(localStorage.getItem(s.catagory))
    
    //שמירת אוביקט הJSON בSTORAGE
    sessionStorage.setItem('catsheo',JSON.stringify(s))
    //העברה לדף אחר
    window.location.href='./proj2.html'
    }


    function addcart(s)
    {
        alert('added to cart succsesfully')
        let count = +(sessionStorage.getItem('cart'))
        sessionStorage.setItem('cart', count+1)
        document.getElementById('cartamount').innerHTML = sessionStorage.getItem('cart')

        sessionStorage.setItem(s.name, JSON.stringify(s))
    }

   

  