const countdown = () => {
    const countDate = new Date('July 27, 2022 00:08:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the fuck does the time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Change the DOM
    document.getElementById("day").textContent = textDay;
    document.getElementById("hour").textContent = textHour;
    document.getElementById("minute").textContent = textMinute;
    document.getElementById("second").textContent = textSecond;
};

setInterval(countdown, 1000);

