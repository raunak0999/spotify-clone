console.log("lets write java script")

async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let  div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs=[]
 for (let index = 0; index < as.length; index++) {
        const element = array[index];
        if(element.herf.endsWith(".mp3")){
            songs.push(element.herf)
        }
    }
    return songs
}

async function main(){
    // get the list of all  the songs 
    let songs = await getSongs()
    console.log(songs)

    // play the first songs 
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("loadeddata",() => {
        let duration = audio.duration;
        console.log(duration)
        // the duraation varible now holds the duration ( in seconds ) of audio clips 
    });

}

main()
