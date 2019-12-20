console.log("we in here");
console.log(moment().subtract(10, 'days').calendar());
//near the top of the calendar, the app will display the current date
$(document).ready(function () {
    // This displays today's date in the jumbotron header
    var displayDate = document.getElementById("header-date");
    console.log(displayDate);
    $(displayDate).text("Today is " + moment().format('LL'));



    function showTimes() {
        //dynamically add html
        // for each number in the timesArray array
        timesArray.forEach(number => {
            // set todoText to the value at number of localStorage, or nothing
            var todoText = localStorage.getItem(number) || "";
            // set the HTML here
            html = `<div class="row">
        <div class="col-md-1 date">
            <p id="eleven">${number}</p>
        </div>
        <input class="form-control form-control-lg col-md-10  ${number}" type="text" id="input-${number}" value=${todoText}>

        <button class="col-md-1 btn btn-success far fa-save time-save" data-id=${number}></button>

        </div>`

            $("#timeslots").append(html);


        })
    }
    showTimes();

    function checkTime() {
        timesArray.forEach(number => {
            var hour = parseInt(moment().format('H'));
            console.log(hour)
            console.log(hour, number);
            if (hour === number) {
                $(`#input-${number}`).attr("style", "background-color:pink");
                console.log("it's working!")
            } else if (hour > number) {
                console.log("it's later!")
                $(`#input-${number}`).attr("style", "background-color:darkgrey");
            } else if (hour === 0) {
                clearTasks();
            }

        });
    }

    function clearTasks() {
        timesArray.forEach(number => {
            localStorage.setItem(number, "");
        })
    }

    checkTime();


});

$('#timeslots').on('click', '.time-save', function (event) {
    event.preventDefault();
    console.log("It works")
    var i = parseInt(this.dataset.id);
    var value = $(`#input-${i}`).val()
    //store in local storage
    localStorage.setItem(i, value);
})


var timesArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]





