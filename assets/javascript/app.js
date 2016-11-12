// Try to work with working movie app solved

    // Set var for animal and query url

    // var movieAnimal = $(this).data('movieAnimal');

    $(document).on("click", ".gif", function(){
        var state = $(this).attr('data-state');
        if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
    })

    // Initial array of movies I mean animals
    var moviesAnimals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle'];

    // ========================================================

    // displayMovieInfo function now re-renders the HTML to display the appropriate content. 
    function displayMovieAnimalInfo(){

    var buttonValue = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonValue + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Delete MovieInfo var/query url

        // var movie = $(this).attr('data-name');
        // var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
        
        // Creates AJAX call for the specific movie being 
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            // in dynamicelements you made a variable named results and set it equal to response.data, then did a for loop, so I'm going to try that

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

            var movieAnimalDiv = $('<div>');

                    var movieAnimalImage = $('<img>').addClass("gif");
                    movieAnimalImage.attr('src', results[i].images.fixed_height_still.url);
                    movieAnimalImage.attr("data-state", "still");
                    movieAnimalImage.attr("data-still", results[i].images.fixed_height_still.url);
                    movieAnimalImage.attr("data-animate", results[i].images.fixed_height.url);

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    movieAnimalDiv.append(p);
                    movieAnimalDiv.append(movieAnimalImage);

                    $('#gifsAppearHere').prepend(movieAnimalDiv);
                    //--------------------------------
                }


            // Creates a generic div to hold the movie
            // var movieAnimalDiv = $('<div class="movieAnimal">');

            // Retrieves the Rating Data
            // var rating = response.rating;

            // Creates an element to have the rating displayed
            // var pOne = $('<p>').text( "Rating: " + rating);

            // Displays the rrating
            // movieAnimalDiv.append(pOne);

            // // var movieAnimalImage = $('<img>');
            //         movieAnimalImage.attr('src', results[i].images.fixed_height.url);

            //         movieAnimalDiv.append(p);
            //         movieAnimalDiv.append(movieAnimalImage);

            // // Puts the entire Movie above the previous movies.
            // $('#moviesAnimalsView').prepend(movieAnimalDiv);
        });

    }

            // Retrieves the release year
            // Not needed
            // var released = response.Released;

            // Creates an element to hold the release year
            // I don't need that stuff
            // var pTwo = $('<p>').text( "Released: " + released);

            // Displays the release year
            // Now why would I want to do that?
            // movieAnimalDiv.append(pTwo);

            // Retrieves the plot
            // Nah son
            // var plot = response.Plot;

            // Creates an element to hold the plot
            // Again, nah
            // var pThree = $('<p>').text( "Plot: " + plot);

            // Appends the plot
            // movieAnimalDiv.append(pThree);

            // Creates an element to hold the image 
            // I'm gonna try this instead
            // var image = $('<img>').attr("src", response.Poster);

            // Appends the image
            // movieDiv.append(image);


    // ========================================================

    // Generic function for displaying movie data 
    function renderButtons(){ 

        // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#buttonsView').empty();

        // Loops through the array of movies
        for (var i = 0; i < moviesAnimals.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('movieAnimal'); // Added a class 
            a.attr('data-name', moviesAnimals[i]); // Added a data-attribute
            a.text(moviesAnimals[i]); // Provided the initial button text
            $('#buttonsView').append(a); // Added the button to the HTML
        }
    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addMovieAnimal').on('click', function(){

        // This line of code will grab the input from the textbox
        var movieAnimal = $('#movie-er-animal-input').val().trim();

        // The movie from the textbox is then added to our array
        moviesAnimals.push(movieAnimal);
        
        // Our array then runs which handles the processing of our movie array
        renderButtons();

        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })

    // ========================================================

    // Generic function for displaying the movieInfo
    $(document).on('click', '.movieAnimal', displayMovieAnimalInfo);


    // ========================================================

    // This calls the renderButtons() function
    renderButtons();




// throw some old js stuff up there so buttons get gifs on screen like in dynamic elements solution (note that I at least realize that dc6zaTOxFJmzC is that young API)
// I don't like that anymore. Try movieapp.
// $('button').on('click', function() {
//         var animal = $(this).data('animal');
//         var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//         $.ajax({
//                 url: queryURL,
//                 method: 'GET'
//             })
//             .done(function(response) {
//                 // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

//                 console.log(queryURL);

//                 console.log(response)

//                 // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

//                 //------------put step 2 in between these dashes--------------------
//                 var results = response.data;
//                 //--------------------------------

//                 for (var i = 0; i < results.length; i++) {

//                      step 3: 
//                         * uncomment the for loop above and the closing curly bracket below
//                         * make a div and reference it in a variable named animalDiv
//                         * make a paragraph tag and put it in a variable named p
//                             * set the text of the paragraph to the rating of the image in results[i]
//                         * make an image and reference it in a variable named animalImage
//                         * set the image's src to results[i]'s fixed_height.url 

//                         * append the p variable to the animalDiv variable
//                         * append the animalImage variable to the animalDiv variable

//                         * prepend the animalDiv variable to the element with an id of gifsAppearHere

                    

//                     //------------put step 3 in between these dashes--------------------
//                     var animalDiv = $('<div>');

//                     var p = $('<p>').text("Rating: " + results[i].rating);

//                     var animalImage = $('<img>');
//                     animalImage.attr('src', results[i].images.fixed_height.url);

//                     animalDiv.append(p);
//                     animalDiv.append(animalImage);

//                     $('#gifsAppearHere').prepend(animalDiv);
//                     //--------------------------------
//                 }

//             });
//     });

// throw some old js stuff up in there to pause those gifs like in pausing gifs solution
// that shit didn't work. I quit

// $('.button').on('click', function(){
//             //STEP ONE: study the html above. Look at all the data attributes. Run the file in the browser. Look at the images. After you fill in steps 1 and 2 you'll be able to pause gifs from giphy.

//             //STEP TWO: make a variable named state and then reference the button's data-state into it. Do not use .data('state'). It won't work the way we expect.

//             //---------------FILL IN CODE HERE FOR STEP TWO----------------------------
//             var state = $(this).attr('data-state');
//             //----------------------------------------------------

//             STEP THREE:
//                 * if variable state is equal to 'still' then
//                     * update the src attribute of this image that you clicked on to what data-animate is equal to for this image
//                     * and update the data-state attribute to 'animate'
//                 * if state does not equal 'still' then
//                     * update the src attribute of this image that you clicked on to what data-still is equal to for this image
//                     * and update the data-state attribute to 'still'
            

//             //---------------FILL IN CODE HERE FOR STEP THREE----------------------------
//             if ( state == 'still'){
//                 $(this).attr('src', $(this).data('animate'));
//                 $(this).attr('data-state', 'animate');
//             }else{
//                 $(this).attr('src', $(this).data('still'));
//                 $(this).attr('data-state', 'still');
//             }
//             //----------------------------------------------------

//             //STEP FOUR: open the file in the browser and click on the images. Then click again to pause.
//         });