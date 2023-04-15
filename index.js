let display = document.getElementById("header")
let sentence=["This is an Autotyping Project.",
"Hi, I’m Peter, a frontend developer, based in Nigeria.",
"I loves creating scalable frontend products with great user experiences.",
];
let wordindex=0;
let sentenceindex=0;

let i=0;

function auto(){
    display.innerHTML+= sentence[sentenceindex][wordindex]

    wordindex++
    setTimeout(function(){
        if (sentence[sentenceindex][wordindex]){
            auto();
            
            
        } else{
            deletee();
        }
    },100)  
}

auto();
function deletee(){
if(display.innerHTML==""){
    if(sentence[sentenceindex+1]){
        sentenceindex++;
        wordindex=0;
        auto();
    } else{
        sentenceindex=0;
        wordindex=0;
        auto();
    }
    return;
}
display.innerHTML=display.innerHTML.slice(0,-1);
setTimeout(function(){
    deletee();
},1)
}