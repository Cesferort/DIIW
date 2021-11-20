let lista_eleSpan_hideAlbertWesker;
let eleDiv_albertWesker;

window.onload 
{
    lista_eleSpan_hideAlbertWesker=document.getElementsByClassName("text-container")[1].getElementsByTagName("span");
    eleDiv_albertWesker=document.getElementById("albertWesker");
    
    mostrarAvisoLegal();
    eventos();
}

function mostrarAvisoLegal()
{
    let eleDiv_avisoLegal=document.createElement("div");
    eleDiv_avisoLegal.className="aviso-legal";
    eleDiv_avisoLegal.innerHTML="<p>This website uses own and third party cookies for strictly functional purposes, allowing its use, as well as analytical, to show you advertising related to your browsing preferences.</p>";
    
    let eleButton_aceptarCookies=document.createElement("button");
    eleButton_aceptarCookies.innerText="Enable Cookies";
    eleButton_aceptarCookies.value="1";
    eleButton_aceptarCookies.addEventListener("click", cerrarAvisoCookies);
    let eleButton_denegarCookies=document.createElement("button");
    eleButton_denegarCookies.innerText="Do Not Allow Cookies";
    eleButton_denegarCookies.value="0";
    eleButton_denegarCookies.style.color="white";
    eleButton_denegarCookies.style.backgroundColor="red";
    eleButton_denegarCookies.addEventListener("click", cerrarAvisoCookies);

    eleDiv_avisoLegal.appendChild(eleButton_aceptarCookies);
    eleDiv_avisoLegal.appendChild(eleButton_denegarCookies);
    document.body.appendChild(eleDiv_avisoLegal);
}
function eventos()
{
    eleDiv_albertWesker.addEventListener("mouseover", listenerMouseOver_AlbertWesker);
    eleDiv_albertWesker.addEventListener("mouseout", listenerMouseOut_AlbertWesker);
}

function listenerMouseOver_AlbertWesker()
{
    for(let i=0; i < lista_eleSpan_hideAlbertWesker.length; i++)
    {
        let eleSpan_hideAlbertWesker=lista_eleSpan_hideAlbertWesker[i];
        eleSpan_hideAlbertWesker.style.backgroundColor="black";
        eleSpan_hideAlbertWesker.style.color="red";
    }
}
function listenerMouseOut_AlbertWesker()
{
    for(let i=0; i < lista_eleSpan_hideAlbertWesker.length; i++)
    {
        let eleSpan_hideAlbertWesker=lista_eleSpan_hideAlbertWesker[i];
        eleSpan_hideAlbertWesker.style.backgroundColor="white";
        eleSpan_hideAlbertWesker.style.color="white";
    }
}
function cerrarAvisoCookies()
{
    document.getElementsByClassName("aviso-legal")[0].remove();
}