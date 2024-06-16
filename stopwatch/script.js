let count= 0;
let hours=0;
let mins=0;
let second=0;
let timer;
let startbtn=document.getElementById('start')
let stopbtn=document.getElementById('stop')
let resetbtn=document.getElementById('reset')

startbtn.addEventListener('click',function(){
    timer=true;
    stopWatch()
});

stopbtn.addEventListener("click",function(){
    timer=false;
});

resetbtn.addEventListener('click',function(){
    timer=false;
    hours=0;
    mins=0;
    second=0;
    count=0
    document.getElementById('hours').innerHTML="00:";
    document.getElementById('mins').innerHTML="00:";
    document.getElementById('second').innerHTML="00:";
    document.getElementById('count').innerHTML="00";
});

function stopWatch(){
    if(timer)
        {
            count++;
            if(count==100)
                {
                    second++;
                    count=0;
                }
            else if(second==60)
                {
                    mins++;
                    second=0;
                }
            else if(mins==60)
                {
                    hours++;
                    mins=0;
                    second=0;
                }
                let hrString = hours; 
                let minString = mins; 
                let secString = second; 
                let countString = count; 
                if (hours < 10) { 
                    hrString = "0" + hrString; 
                } 
          
                if (mins < 10) { 
                    minString = "0" + minString; 
                } 
          
                if (second < 10) { 
                    secString = "0" + secString; 
                } 
          
                if (count < 10) { 
                    countString = "0" + countString; 
                } 
          
                document.getElementById('hours').innerHTML = hrString+':'; 
                document.getElementById('mins').innerHTML = minString+':'; 
                document.getElementById('second').innerHTML = secString+':'; 
                document.getElementById('count').innerHTML = countString; 
                setTimeout(stopWatch, 10); 
        }
}