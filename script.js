let myDate = new Date();
console.log(myDate.getTime());
myD.value = localStorage.getItem('birth');
myD.onchange = function(){
    localStorage.setItem('birth', myD.value);
    if(myD.value != '') {
        setInterval(function(){
            let ms = new Date(myD.value).getTime();
            let cur = new Date();
            let diff = cur - ms;
            let days = Math.floor(diff/(24*60*60*1000));
            let daysms = diff%(24*60*60*1000);
            let hoursInfo = Math.floor(daysms/(60*60*1000));
            let hoursms = diff%(60*60*1000);
            let minutesInfo = Math.floor(hoursms/(60*1000));
            let minutesms = diff%(60*1000);
            let sec = Math.floor(minutesms/1000);
            console.log(days+':'+hoursInfo+':'+minutesInfo+':'+sec);   
            let mainInf = days+':'+hoursInfo+':'+minutesInfo+':'+sec;
            $('.main').text(mainInf);
            console.log('ok')
        },1000);
    } else {
       console.log('err')
    }
};

if(myD.value != '') {
        setInterval(function(){
        let ms = new Date(myD.value).getTime();
        let cur = new Date();
        let diff = cur - ms;
        let days = Math.floor(diff/(24*60*60*1000));
        let daysms = diff%(24*60*60*1000);
        let hoursInfo = Math.floor(daysms/(60*60*1000));
        let hoursms = diff%(60*60*1000);
        let minutesInfo = Math.floor(hoursms/(60*1000));
        let minutesms = diff%(60*1000);
        let sec = Math.floor(minutesms/1000);
        console.log(days+':'+hoursInfo+':'+minutesInfo+':'+sec);   
        let mainInf = days+':'+hoursInfo+':'+minutesInfo+':'+sec;
        $('.main').text(mainInf);
        console.log('ok')
    },1000);
} else {
    console.log('err');
}

function dateToMiliseconds(year, mounth, date, hours=0, minutes=0, seconds=0) {
    let mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let m = mounths[mounth-1];
    let ms = new Date(mounth + ' ' + date + ',' + year + ' ' + hours+ ':' + minutes + ':' + seconds).getTime();
    let cur = new Date();
    let diff = cur - ms;
    let days = Math.floor(diff/(24*60*60*1000));
    let daysms = diff%(24*60*60*1000);
    let hoursInfo =Math.floor(daysms/(60*60*1000));
    let hoursms= diff%(60*60*1000);
    let minutesInfo =Math.floor(hoursms/(60*1000));
    let minutesms= diff%(60*1000);
    let sec = Math.floor(minutesms/1000);
    return days+':'+hoursInfo+':'+minutesInfo+':'+sec;
};
console.log(myD.value)
