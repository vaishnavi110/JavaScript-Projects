let button=document.querySelector('button')
button.addEventListener('click',display)
function display(){
    let input=document.getElementById("input")
    let city=input.options[input.selectedIndex].value
    console.log(city)
    let lang=' ',population=0,literacy=0;
    switch(city)
    {
        case 'Pune':
            population=4646732
            literacy=90.20
            lang='Marathi'
        break
        case 'Mumbai':
            population=8443675
            literacy=88.7
            lang='Marathi'
        break
        case 'Delhi':
            population=1678673
            literacy=89.20
            lang='Hindi'
        break
        case 'Banglore':
            population=67546732
            literacy=94.6
            lang='Kannada'
        break

    }
    let text=`The Indian Ciry of ${city} has population of ${population}, language spoken is ${lang} and literacy rate is ${literacy}%.`
    console.log(text) 
    document.getElementById('result').innerHTML=text
}   //another way:
    // let resultdiv=document.createElement('div')
    // resultdiv.id='result'
    // document.getElementById('wrapper').append(resultdiv)
    // document.getElementById('result').innerHTML=text