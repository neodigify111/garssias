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

// Force CSS reflow when resizing the window
  $(window).on('resize', function () {
    $('body').toggleClass('resized');
  });

  // Disable cache for CSS updates
  $('link[rel="stylesheet"]').each(function () {
    let href = $(this).attr('href');
    $(this).attr('href', href + '?v=' + new Date().getTime());
  });

  // Ensure the viewport meta tag exists
  if ($('meta[name="viewport"]').length === 0) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
  }
});

