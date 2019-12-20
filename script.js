console.log("we in here");
console.log(moment().subtract(10, 'days').calendar());
//near the top of the calendar, the app will display the current date
$(document).ready(function () {
    // This displays today's date in the jumbotron header
    var displayDate = document.getElementById("header-date");
    console.log(displayDate);
    $(displayDate).text("Today is " + moment().format('LL'));

    var storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    var nineInput = $("#nine-input");
    $(nineInput).attr("placeholder", (storedTodos[0] || "9am"));
    var tenInput = $("#ten-input");
    $(tenInput).attr("placeholder", (storedTodos[1] || "10am"));
    var elevenInput = $("#eleven-input");
    $(elevenInput).attr("placeholder", (storedTodos[2] || "11am"));

    function storeTodos() {
        localStorage.setItem("todos", JSON.stringify(storedTodos));
    }


    function showTimes() {
        //dynamically add html
        timesArray.forEach(number => {
            var todoText = localStorage.getItem(number) || "";
            html = `<div class="row">
        <div class="col-md-1 date">
            <p id="eleven">${number}</p>
        </div>
        <input class="form-control form-control-lg col-md-10" type="text" id="input-${number}" value=${todoText}>

        <button class="col-md-1 btn btn-success far fa-save time-save" data-id=${number}></button>

        </div>`

            $("#timeslots").append(html);
        })


    }

    showTimes();
});

$('#timeslots').on('click', '.time-save', function (event) {
    event.preventDefault();
    console.log("It works")
    var i = parseInt(this.dataset.id);
    var value = $(`#input-${i}`).val()
    //store in local storage
    localStorage.setItem(i, value);

    // storedTodos[i];
    // console.log(storedTodos);
    // storeTodos();
    //$(`input-${i}`).attr("placeholder", storedTodos[2]);
})


var timesArray = [9, 10, 11, 12, 1, 2, 3, 4, 5]


