//timing
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var day = days[date.getDay()]
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = day + "<br>" + time;
    
    setTimeout(showTime, 1000);
}

showTime();

hours = new Date().getHours();
// between 7pm to 7am display night
if (hours >= 19 || hours <= 7){
    night_cat_moon()
}

//toggle switch
const toggle = document.getElementById('toggle');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    night_cat_moon()
}

toggle.addEventListener('input', (e) => {
    const isChecked = e.target.checked;

    if(isChecked) {
        night_cat_moon()
    //document.getElementById("internships").classList = 'm-4 table table-striped'
    //document.getElementById("projects").classList = 'm-4 table table-striped'
    } else {
        day_cat_sun()
    //document.getElementById("internships").classList = 'm-4 table table-striped'
    //document.getElementById("projects").classList = 'm-4 table table-striped'
    }
});

function day_cat_sun(){
    document.getElementById("profile_row").style.backgroundColor = "rgb(114, 183, 211)"
    document.getElementById("title").style.color = "black"
    document.getElementById("MyClockDisplay").style.color = "#CEEB87"
    document.getElementById("sun_moon").classList.replace("moon", "sun")
    document.getElementById("sun_moon").style.background = "radial-gradient(yellow, orange)"
    //toggle button
    document.getElementById('toggle').setAttribute("checked", "true")
    document.getElementById("bio").classList.remove('dark-mode');
    $(".toggle-switch").css({
        "background-position": "100% 100%",
        "box-shadow": "0 0 15px 10px hsl(0,0,0,0.1) inset"
    });
}

function night_cat_moon(){
    document.getElementById("profile_row").style.backgroundColor = "#222222"
    document.getElementById("title").style.color = "white"
    document.getElementById("MyClockDisplay").style.color = "white"
    document.getElementById("sun_moon").classList.replace("sun", "moon")
    document.getElementById("sun_moon").style.background = "#666666"
    
    //toggle button
    document.getElementById('toggle').setAttribute("checked", "true")
    document.getElementById("bio").classList.add('dark-mode');
    $(".toggle-switch").css({
        "background-position": "5% 100%",
        "box-shadow": "0 0 15px 10px hsl(0,0,0,0.1) inset"
    });
}



