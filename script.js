var sound1 = new Audio ("audio/jump-scare_1-66858.mp3")
var sound2 = new Audio ("audio/cartoon-jump-6462.mp3")
var sound3 = new Audio ("audio/swoosh-142322.mp3")
var sound4 = new Audio ("audio/whoosh-transitions-sfx-03-118230.mp3")
var sound5 = new Audio ("audio/male-scream-in-fear-123079.mp3")
var sound6 = new Audio ("audio/claps-44774.mp3")
var sound7 = new Audio ("audio/no-luck-too-bad-disappointing-sound-effect-112943.mp3")
var sound8 = new Audio ("audio/boo-36556 (2).mp3")



function checkValue(){
    if (num.value != ""){
        if (num.value >= 0 && num.value < 30){
            show.innerHTML = "F9😂, Dullard go and study"
            console.log("F😂, Dullard go and study");
            sound5.play()
            sound2.pause()
            sound3.pause()
            sound4.pause()
            sound1.pause()
            sound6.pause()
            sound8.pause()

            

        }
        else if (num.value >= 30 && num.value < 45){
            show.innerHTML = "E8😂, Ogbon dey play"
            sound1.play()
            sound2.pause()
            sound3.pause()
            sound4.pause()
            sound5.pause()
            sound6.pause()
            sound8.pause()

        }
        else if (num.value >= 45 && num.value < 60){
            show.innerHTML = "C4😂, Oya nah omo oba"
            sound1.pause()
            sound2.pause()
            sound3.play()
            sound4.pause()
            sound5.pause()
            sound6.pause()
            sound8.pause()

        }
        else if (num.value >= 60 && num.value < 70){
            show.innerHTML = "B3😂, you try mate"
            sound1.pause()
            sound2.pause()
            sound3.pause()
            sound4.play()
            sound5.pause()  
            sound6.pause()
            sound8.pause()

        }
        else if (num.value >= 70 && num.value < 80){
            show.innerHTML = "B2😂, you're almost there"
            sound1.pause()
            sound2.play()
            sound3.pause()
            sound4.pause()
            sound5.pause()
            sound6.pause()
            sound8.pause()

        }
        else if (num.value >= 80 && num.value <= 100){
            show.innerHTML = "A1🫡, Respect"
            sound1.pause()
            sound2.pause()
            sound3.pause()
            sound4.pause()
            sound5.pause()
            sound6.play()
            sound8.pause()


        }
        else if (num.value > 100 ){
            show.innerHTML = "Alaye, enter a valid score🤒"
            sound1.pause()
            sound2.pause()
            sound3.pause()
            sound4.pause()
            sound5.pause()
            sound6.pause()
            sound7.play()
            sound8.pause()

    }
    else if (num.value < 0 ){
        show.innerHTML = "Alaye, enter a valid score🤒"
        sound1.pause()
        sound2.pause()
        sound3.pause()
        sound4.pause()
        sound5.pause()
        sound6.pause()
        sound7.pause()
        sound8.play()

}
        
       
     }
     else{
        show.innerHTML = "Input a score, joor😌"

     }
}


