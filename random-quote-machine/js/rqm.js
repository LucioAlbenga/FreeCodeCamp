/**
 * It gets a list of quotes from an URL via ajax and then calls updateQuote
 * passing to it one of this quotes selected randomly.
 */
function newQuote() {
    $.ajax({
        url: './js/quotes.json',
        dataType: 'json',
        timeout: 500,
        success: function (data) {
            updateQuote(data[(Math.floor(Math.random()*data.length))]);
        },
        error: function (jqXhr, textStatus, errorMessage) {
            updateQuote("ERROR " + errorMessage)
        }
    });
}

/**
 * Update the quote and the background and buttons colors.
 * Quote is an object containing 2 elements: text and author.
 * @param {*} quote 
 */
function updateQuote(quote) {
    const twitterURI = "https://twitter.com/intent/tweet?hashtags=quotes&via=LucioAlbenga"
    if (jQuery.type(quote) === "object") {
        $("body").animate(
            { opacity: 0 },
            700,
            function() {
                $("#text").html(quote.text);
                $("#author").html("- " + quote.author);
                $("#tweet-quote").attr("href", twitterURI + "&text= " + encodeURIComponent('"' + quote.text + '" ' + quote.author));
                updateColor();
            }
        );
        $("body").animate({opacity: "1"}, 1500);
    } else { // Error msg
        $("#text").html(quote);
        $("#author").html("Something went wrong try again later.");
    }
}

/**
 * Generates a random color and updates background-color property
 * of class .bgcolor with this random color.
 */
function updateColor() {
    const SATURATION = "10%";
    const LIGHTNESS = "60%";
    let randomColor = (Math.floor(Math.random()*360));
    $(".bgcolor").css("background-color", "hsl(" + randomColor + ", " + SATURATION + ", " + LIGHTNESS +")");
}

$( document ).ready(function() {
    $(".new-quote").click(function(event){
        newQuote();
    });
    newQuote(); // Load a quote on first run
});
