(function (count = 20) {
    let CurrentYear = new Date().getFullYear();
    let leapYears = [];
    const counting = setInterval(() => {
        if (leapYears.length < count) {
            CurrentYear % 4 ? '' : console.log(`${leapYears.push(CurrentYear)}.`, CurrentYear);
            CurrentYear++
        } else {
            clearInterval(counting);
        }
    })
})()