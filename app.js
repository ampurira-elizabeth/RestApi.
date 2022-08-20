const products= document.getElementById("products");
const fruits=document.getElementById("fruList");
const vegetables=document.getElementById("vegList");

async function getallmykiosks(item,element){
    const response= await fetch("http://localhost:5000/"+item).then((response)=>{
        return response.json();
    }).then((data)=>{
        data.forEach((greenKiosk) => {
            const li= document.createElement("li");
            li.innerHTML=greenKiosk["name"].concat("<br/>").concat(greenKiosk["category"]);
            element.appendChild(li)   
        });
    })
}

getallmykiosks("products",products);
getallmykiosks("products/fruits",fruits);
getallmykiosks("products/vegetables",vegetables);
