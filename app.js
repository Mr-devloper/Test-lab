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
// Menu bar js
{
    let menutoggle = document.querySelector('.toggle');
    menutoggle.onclick = function(){
        menutoggle.classList.toggle('active')
        
    }
}
{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e1) => observer.observe(e1));
}

{
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0; 
    let progressEndValue = 65;
    let speed = 50; 
    
    let progress = setInterval( () => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
            #4d5bf9 ${progressValue * 3.6}deg,
            #cadcff ${progressValue * 3.6}deg
        )`;
        if(progressValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}