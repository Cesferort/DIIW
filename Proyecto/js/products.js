const lista_dataVirus=
{
    "t-virus-1" :   {
        "name"      : "Regenerate-100",
        "price"     : 14.99,
        "desc"      : "Its formula contains hyaluronic acid, is oil-free and is suitable for sensitive skin. It quickly and safely removes impurities, traces of makeup or excess sebum from the skin. In addition, it provides extra hydration.<br><br>Regenerate is a registered trademark of the Umbrella Corporation."
    },
    "t-virus-2" :   {
        "name"      : "Regenerate-200",
        "price"     : 29.99,
        "desc"      : "Tightening pores, evening out skin tone and reducing visible blemishes. These are three challenges that this product will effectively solve. It is made from blue orchid oil and its treatment aims to restore vitality, radiance and freshness to the face. Easy to apply, it should be used before going to bed.<br><br>Regenerate is a registered trademark of the Umbrella Corporation."
    },
    "t-virus-3" :   {
        "name"      : "Regenerate-300",
        "price"     : 32.99,
        "desc"      : "The effects of pollution, stress and a busy lifestyle can set off alarm bells in our skin. To keep it well hydrated and glowing, it is essential to get a product like the one in the image. With a smooth texture, this cream is suitable for normal and dry skin. For daily use.<br><br>Regenerate is a registered trademark of the Umbrella Corporation."
    }
};

let lista_eleDiv_virus;
let eleDiv_productData;

window.onload 
{
    lista_eleDiv_virus=document.getElementsByClassName("virus");
    eleDiv_productData=document.getElementById("product_data");

    eventos();
}

function eventos()
{
    for(let i=0; i < lista_eleDiv_virus.length; i++)
    {
        lista_eleDiv_virus[i].addEventListener("mouseover", virusSeleccionado);
        lista_eleDiv_virus[i].addEventListener("click", virusSeleccionado);
    }
}

function virusSeleccionado(eventSource)
{
    let idVirus=eventSource.target.id;
    if(lista_dataVirus[idVirus] !== undefined)
    {
        let dataVirus=lista_dataVirus[idVirus];
        let name=dataVirus["name"];
        let price=dataVirus["price"];
        let desc=dataVirus["desc"];

        let eleP_dataVirus=document.createElement("p");
        eleP_dataVirus.innerHTML="<br>Name: "+name+"<br>Price: "+price+"€<br>Description: "+desc;
        eleDiv_productData.innerHTML="";
        eleDiv_productData.appendChild(eleP_dataVirus);
    }
}