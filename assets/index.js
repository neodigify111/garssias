document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".btn-text").forEach(button => {
          const attributeValue = button.textContent.trim(); // Get the button's text
  
          if (attributeValue) {
              button.setAttribute("data-attribute", attributeValue); // Assign the text to data-attribute
              
              // Convert text into a valid class name (remove special characters, replace spaces with '-')
              const formattedClass = attributeValue.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
              
              button.classList.add(formattedClass); // Add the cleaned-up class
          }
      });
  });
  