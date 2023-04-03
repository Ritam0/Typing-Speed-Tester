const setWords=["The quick brown fox jumps over the lazy dog.",
"Jackdaws love my big sphinx of quartz.",
"How vexingly quick daft zebras jump!",
"My ex pub quiz crowd gave joyful thanks.",
"Waltz, nymph, for quick jigs vex Bud.",
"Sphinx of black quartz, judge my vow.",
"Pack my box with five dozen liquor jugs.",
"The five boxing wizards jump quickly.",
"Jaded zombies acted quaintly but kept driving their oxen forward.",
"Quick wafting zephyrs vex bold Jim."];

const msg=document.getElementById('msg');
const typedWord=document.getElementById('myWords');
const btn=document.getElementById('btn');
let startTime,endTime;
typedWord.disabled=true;

const playGame = ()=>{
    let randomS=Math.floor(Math.random()*setWords.length);
    msg.innerText=setWords[randomS];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText='Done';
}
const endGame = ()=>{
    let date2=new Date();
    endTime=date2.getTime();
    let totalTime=((endTime-startTime)/1000);
    
    let totalStr=typedWord.value;
    let wordcount=wordCounter(totalStr);

    let speed=Math.round((wordcount/totalTime)*60);
    let final="Your Writting speed is "+ speed +" words per munite ";

    final+=compare(msg.innerText,totalStr);

    msg.innerText=final;
    
}

const compare=(str1,str2)=>{
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let cnt=0;

    word1.forEach(function(items,index) {
        if(items==word2[index]){
            cnt++;
        }
    });
    
    let errorWord=(word1.length-cnt);
    return(cnt + " words correct out of" + word1.length + "words and the number of error words are "+errorWord+" .");
}

const wordCounter = (str) =>{
    let response=str.split(" ").length;
    return response;
}

btn.addEventListener('click' , function(){
    if(this.innerText=='Start'){
        typedWord.disabled=false;
        typedWord.value="";
        playGame();
    }
    else if(this.innerText=='Done'){
        typedWord.disabled=true;
        btn.innerText='Start';
        endGame();
    }
})