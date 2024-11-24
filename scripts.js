function frenzy(){
    document.body.style.background = "cyan";
    document.body.style.fontSize = "60px"
}
function toWhite(){
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000"
}

function toDark(){
    document.body.style.backgroundColor = "#000";
    document.body.style.fontSize = "30px"
    document.body.style.color = "white"
}
/*
var cow = prompt('Enter name: ');
if (cow ==='Hafsa'){
    alert('Weirdo get off my site');
    document.body.innerHTML = 'HAFSA GET TF OFF MY SITE';
}else if (cow === 'hafsa'){
    alert('I know its you Hafsa capitalicize your first letter');
    prompt('Enter your name properly you unhealthy cretin: ');
}else {
    alert('Welcome you beautiful human');
}
*/

function myName(){
    var weirdo = prompt('Whats your name:');
    if (weirdo === 'hafsa'){
        alert('Dumbass put your first letter in caps. It is a name ffs ati "hafsa" have some respect for your name.');
        weirdo = prompt('Enter your name correctly: ');
            if (weirdo === 'Hafsa'){
                alert('Yeah no this is not for you')
                document.body.innerHTML = "GET TF OFF MY SITE"
                document.body.style.textAlign = "center";
                document.body.style.paddingTop = "25%";
                document.body.style.fontSize = "60px";
            }
    }else if (weirdo === 'Hafsa'){
        alert('Yeah no this is not for you')
        document.body.innerHTML = "GET TF OFF MY SITE"
        document.body.style.textAlign = "center";
        document.body.style.paddingTop = "25%";
        document.body.style.fontSize = "60px";
    }else {
        alert('Welcome you beautiful Human')
    };
};
