{
    const status = "Connected";
    console.log(status);
    let s = 0;
    const x = document.getElementById("btn");
    console.log(x);
    function h(){
        
        if (s === 0) {
            console.log("working")
            x.innerHTML = "&times"
            x.style.fontSize = "xxx-large";
            s = 1;    
        } else {
            x.innerHTML = "☰"
            x.style.fontSize = "xx-large";
            s = 0;
        }


    }
}