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


    $("#save-nine").on("click", function (event) {
        event.preventDefault();
        console.log("It works")
        storedTodos[0] = $(nineInput).val();
        console.log(storedTodos);
        storeTodos();
        $(nineInput).attr("placeholder", storedTodos[0]);
    })

    $("#save-ten").on("click", function (event) {
        event.preventDefault();
        console.log("It works")
        storedTodos[1] = $(tenInput).val();
        console.log(storedTodos);
        storeTodos();
        $(tenInput).attr("placeholder", storedTodos[1]);
    })

    $("#save-eleven").on("click", function (event) {
        event.preventDefault();
        console.log("It works")
        storedTodos[2] = $(elevenInput).val();
        console.log(storedTodos);
        storeTodos();
        $(elevenInput).attr("placeholder", storedTodos[2]);
    })


});



// don't forget preventDefault()
// when you click on the adjacent save button
// the value of the form (with appropriate ID) is stored along with the time slot to storedTodos
// 

// function