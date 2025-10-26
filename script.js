function clock() {

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();

  
    document.getElementById('date').innerHTML = (
        dayNames[today.getDay()] + " " + 
        today.getDate() + " " + 
        monthNames[today.getMonth()] + " " + 
        today.getFullYear()
    );

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? "PM" : 'AM';
    h = h%12;
    h=h?h :12


    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hour').innerHTML = h;
   
    document.getElementById('minut').innerHTML = m; 
    document.getElementById('second').innerHTML = s;
    document.getElementById("ampm").innerHTML=ampm;

  }
clock();
var inter = setInterval(clock, 1000);