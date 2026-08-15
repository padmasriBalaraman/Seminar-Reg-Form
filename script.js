// ==========================================
// SEMINAR REGISTRATION - JAVASCRIPT
// ==========================================


// ===============================
// GET HTML ELEMENTS
// ===============================

const form = document.getElementById("seminarForm");

const formContainer =
    document.getElementById("formContainer");

const successMessage =
    document.getElementById("successMessage");

const registrationId =
    document.getElementById("registrationId");

const newRegistration =
    document.getElementById("newRegistration");

const teamNameSection =
    document.getElementById("teamNameSection");

const teamName =
    document.getElementById("teamName");

const phone =
    document.getElementById("phone");

const registrationTypes =
    document.querySelectorAll(
        'input[name="registrationType"]'
    );


// ===============================
// TEAM / INDIVIDUAL SELECTION
// ===============================

registrationTypes.forEach(function (type) {

    type.addEventListener("change", function () {

        if (this.value === "Team") {

            // Show Team Name field
            teamNameSection.style.display = "block";

            // Make Team Name required
            teamName.required = true;

        } else {

            // Hide Team Name field
            teamNameSection.style.display = "none";

            // Remove required
            teamName.required = false;

            // Clear previous value
            teamName.value = "";
        }

    });

});


// ===============================
// PHONE NUMBER VALIDATION
// ===============================

phone.addEventListener("input", function () {

    // Allow only numbers
    this.value = this.value.replace(/[^0-9]/g, "");

    // Maximum 10 digits
    if (this.value.length > 10) {

        this.value = this.value.slice(0, 10);

    }

});


// ===============================
// FORM SUBMISSION
// ===============================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // ===============================
    // PHONE VALIDATION
    // ===============================

    if (phone.value.length !== 10) {

        alert("Please enter a valid 10-digit phone number.");

        phone.focus();

        return;

    }


    // ===============================
    // GET SELECTED REGISTRATION TYPE
    // ===============================

    const selectedType =
        document.querySelector(
            'input[name="registrationType"]:checked'
        );


    if (!selectedType) {

        alert("Please select a registration type.");

        return;

    }


    // ===============================
    // TEAM VALIDATION
    // ===============================

    if (
        selectedType.value === "Team" &&
        teamName.value.trim() === ""
    ) {

        alert("Please enter your team name.");

        teamName.focus();

        return;

    }


    // ===============================
    // GENERATE REGISTRATION ID
    // ===============================

    const randomNumber =
        Math.floor(
            10000 + Math.random() * 90000
        );


    const generatedId =
        "SEM-" + randomNumber;


    // Display Registration ID
    registrationId.textContent =
        "Registration ID: " + generatedId;


    // ===============================
    // HIDE FORM
    // ===============================

    formContainer.style.display = "none";


    // ===============================
    // SHOW SUCCESS MESSAGE
    // ===============================

    successMessage.style.display = "block";


    // ===============================
    // SCROLL TO TOP
    // ===============================

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// NEW REGISTRATION
// ===============================

newRegistration.addEventListener("click", function () {

    // Reset complete form
    form.reset();


    // Hide success message
    successMessage.style.display = "none";


    // Show form
    formContainer.style.display = "block";


    // Hide team name section
    teamNameSection.style.display = "none";


    // Make Team Name optional again
    teamName.required = false;


    // Clear Team Name
    teamName.value = "";


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});