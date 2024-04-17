console.log("Welcome to Spotify");

//Initialize the variable.
let songIndex=0;
let audioElement=new Audio('song/song1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let MasterSongName= document.getElementById('MasterSongName');



let songs=[
    {songName: "Mujhe Pyaar Hua Tha" , filePath: "song/song1.mp3" , coverPath: "cover/cover2.jpg"},
    {songName: "Perfect" , filePath: "song/song2.mp3" , coverPath: "cover/cover1.jpg"},
    {songName: "Hamdard" , filePath: "song/song3.mp3" , coverPath: "cover/cover3.jpg"},
    {songName: "Muskurane Ki Wajah Tum Ho" , filePath: "song/song4.mp3" , coverPath: "cover/cover2.jpg"},
    {songName: "Thodi Jagah" , filePath: "song/song5.mp3" , coverPath: "cover/cover1.jpg"},
    {songName: "Tum Hi Aana" , filePath: "song/song6.mp3" , coverPath: "cover/cover2.jpg"},
    {songName: "Sawan Aaya Hai" , filePath: "song/song7.mp3" , coverPath: "cover/cover.jpg"},
    {songName: "Mast Magan" , filePath: "song/song8.mp3" , coverPath: "cover/cover1.jpg"},
    {songName: "Mann Mera Mann" , filePath: "song/song9.mp3" , coverPath: "cover/cover2.jpg"},
    {songName: "Aaina" , filePath: "song/song10.mp3" , coverPath: "cover/cover3.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})


//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        //audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=1;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
   //update SeekBar
 progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value=progress;
})

myProgressBar.addEventListener('change' ,()=>{
   audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
           console.log(e.target);
           makeAllplays();
           songIndex=parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src=`song/song${songIndex}.mp3`;
           MasterSongName.innerText=songs[songIndex].songName;
           audioElement.currentTime=0;
           audioElement.play();
           gif.style.opacity=1;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`song/song${songIndex}.mp3`;
    MasterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`song/song${songIndex}.mp3`;
    MasterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "#77B0AA";
    } else {
      document.body.style.backgroundColor = "#DAFFFB";
    }
  }

  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes