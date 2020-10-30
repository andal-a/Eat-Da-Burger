$(document).ready(function() {
    // devour button
    $(".devourBtn").on("click", function(event) {
        // get ID of burger
        var id = $(this).data("id");
        var devouredBurger = { 
            devoured: true,
            id: id
        };                               

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log("Yummy yummy in my tummy!", devouredBurger);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
    // delete button
    $(".deleteBtn").on("click", function(event) {

        // get ID of burger
        var id = $(this).data("id");

        // Send the DELETE requestwhen button pushed
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // ADD button
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Create object for POST request
        let burgerName = { name: $("#burgerName").val().trim()};                               

        // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: burgerName
        }).then(function() {
            console.log("New burger added to grill");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

}); // Ending of Ready Function