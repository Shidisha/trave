let frmInsc = document.getElementById("frm_Cnx");
frmInsc.addEventListener('submit', function(e){
    let champEmail = document.getElementById('ipt_Email');
    if(champEmail.value.trim == " ") {
        let erreur = document.getElementById('msg_Email')
        erreur.innerHTML="Veuillez saisir votre adresse email";
    }
        e.preventDefault()
})
//code génerateur des citations
function generatCitations (){
const citations = ["l'amitiéL'amour est le sel de l'existence, s'il vient manquer, la vie n'est que grisaille.",
 "L'amour est une liqueur qui brouille l'esprit, et trouble le coeur.", 
 "L'amour est une passion meprisable qui te promet tout, et mais ne tient.", 
 "L'amour, sans confiance ni distance, est l'unique esperance pour un amaisnité",
 "L'amour, comme le vin, tourne souvent au vinaigre", 
 "L'amour, s'il n'est pas extreme, est honteux et coupable."];
    const index = Math.floor(Math.random() * citations.length);
    const citation = citations[index];
    console.log(citations[index]);
    document.getElementById("poeme").textContent = citation + "generatColor";
}
generatCitations();

function generatColor(){
    let x = Math.floor(Math.random()* 256);
    let y = Math.floor(Math.random()* 256);
    let z = Math.floor(Math.random()* 256);
    let fontColor = "rgb("+x+", "+y+", "+z+")";
    console.log("fontColor");
    document.getElementById("poeme").style.color = fontColor;
}
