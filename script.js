console.log("we in here");
console.log(moment().subtract(10, 'days').calendar());
//near the top of the calendar, the app will display the current date
$(document).ready(function () {
    // This displays today's date in the jumbotron header
    var displayDate = document.getElementById("header-date");
    console.log(displayDate);
    $(displayDate).text("Today is " + moment().format('LL'));

    var storedTodos = []

    $("#save-nine").on("click", function (event) {
        event.preventDefault();
        console.log("It works")
        storedTodos.push(["9am", $("#nine-input").val()]);
        console.log(storedTodos);
        storeTodos();

    })

    function storeTodos() {
        localStorage.setItem("todos", JSON.stringify(storedTodos));
    }

    // when the save-nine button is clicked
    // push the text in nine-input to the storedTodos array
    //return the storedTodos array

});

// don't forget preventDefault()
// when you click on the adjacent save button
// the value of the form (with appropriate ID) is stored along with the time slot to storedTodos
// 