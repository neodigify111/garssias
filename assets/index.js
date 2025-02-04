$(function () {
    $(".btn-text").each(function () {
        let attributeValue = $(this).text().trim(); // Get the button's text

        if (attributeValue) {
            $(this).attr("data-attribute", attributeValue); // Assign the text to data-attribute
            
            // Convert text into a valid class name (remove special characters, replace spaces with '-')
            let formattedClass = attributeValue.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

            $(this).addClass(formattedClass); // Add the cleaned-up class
        }
    });
});
