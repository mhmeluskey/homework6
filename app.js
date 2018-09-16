$("#find-new-gifs").on("click", function (event) {
    //create variable for q which stands for query string of what kind of gif is searched for
    var q = $("#animal-input").val().trim();
    console.log(q);
    //takes away button default behavior 
    event.preventDefault();
    //empty out the value after clicking
    $("#animal-input").on("#animal-input").val("");


    //create buttons


    console.log("This is your " + q);
    var animal = q;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=9HWw2KaZlCDRlatDiVSxja1B2XreCRHU&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var rating = response.data[i].rating;
            var newDiv = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
                '" data-still=" ' + response.data[i].images.fixed_height_still.url +
                ' " data-animate=" ' + response.data[i].images.fixed_height.url +
                '" data-state="still" class = "animate">';


            $("#gif-form").append(newDiv);


        }//for




    })//then
   

    $(document).on('click', ".animate", function () {
        var move = $(this).attr('data-state');
        if (move == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');

        }//else

    });

});









































