let Nome = "Jose"
var XP = 9366
let Rank = "null"
if(XP <= 1000) {
    Rank = "Ferro"
}   else if (XP <= 2000){
    Rank = "Bronze"
}   else if (XP <= 5000){
    Rank = "Prata"
}   else if (XP <= 7000){
    Rank = "Ouro"
}   else if( XP <= 8000){
    Rank = "Platina"
}   else if ( XP <= 9000) {
    Rank = "Ascendente"
}   else if (XP <= 10000) {
    Rank = "Imortal"
}
else {
    Rank = "Radiante"
}

console.log("O herói "+Nome+" está no nível "+Rank)