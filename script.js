function appear() {
    document.getElementById('sidemenu').style.display = "flex";
}
function disappear() {
    document.getElementById('sidemenu').style.display = "none";
}
function header_fgv() {
    document.getElementById('header-one').style.opacity = 1;
    document.getElementById('header-two').style.opacity = 1;
    document.getElementById('header-three').style.opacity = 1;

}
function warning() {
    let result = confirm("The images on this page can be disturbing. Do you want to continue?");
    while (true) {

        if (result) {
            document.getElementsByClassName('flight-aa-img')[0].style.opacity = 1;
            break
        }
        else {
            document.location = "index.html";
            break
        }
    }
}
function calculateFuel() {

    const hours = Number(document.getElementById("hours").value);
    if (hours < 1 || hours > 16) {
        document.getElementById("result").innerHTML = "Please enter a valid number of hours (1-16).";
        return;
    }
    const boeing747FuelRate = 12473;
    const dc10FuelRate = 8782;
    const boeing747MaxFuel = 169000;
    const dc10MaxFuel = 30000;
    const boeing747Fuel = boeing747FuelRate * hours;
    const dc10Fuel = dc10FuelRate * hours;
    if (dc10Fuel > dc10MaxFuel && boeing747Fuel < boeing747MaxFuel) {
        document.getElementById("result").innerHTML = `
        For a flight duration of ${hours} hours:
        <hr>
        <ul>
            <li>Boeing 747: <strong>${boeing747Fuel} liters</strong></li>
            <hr>
            <li>DC-10: <strong>${dc10Fuel} liters</strong, however needs a refuel></li>
        </ul>
        <hr>
    `;
    }
    else if (dc10Fuel > dc10MaxFuel && boeing747Fuel > boeing747MaxFuel) {
        document.getElementById("result").innerHTML = `
        For a flight duration of ${hours} hours:
        <hr>
        <ul>
            <li>Boeing 747: <strong>${boeing747Fuel} liters</strong>, however needs a refuel</li>
            <hr>
            <li>DC-10: <strong>${dc10Fuel} liters</strong>, however needs a refuel</li>
        </ul>
        <hr>
        `;
    }
    else {
        document.getElementById("result").innerHTML = `
        For a flight duration of ${hours} hours:
        <hr>
        <ul>
            <li>Boeing 747: <strong>${boeing747Fuel} liters</strong></li>
            <hr>
            <li>DC-10: <strong>${dc10Fuel} liters</strong></li>
        </ul>
        <hr>
        `;
    }


}
function TermsConditions() {
    document.getElementById("terms-cond").innerHTML = `
    <h2>Terms and Conditions</h2>
    <br>
    <ol>
        <li><strong>Data Collection:</strong> By submitting this form, you agree to share your name, email address, and telephone number. This information will only be used for the purposes outlined below.</li>
        <li><strong>Purpose:</strong> Your personal data is collected to improve the website's functionality, provide feedback on the survey, and enhance user experience.</li>
        <li><strong>Privacy:</strong> Your personal data will be kept confidential and will not be shared with third parties without your explicit consent, except when required by law.</li>
        <li><strong>Data Retention:</strong> Your information will be stored securely for a maximum period of 12 months and then deleted unless continued consent is provided.</li>
        <li><strong>User Rights:</strong> You have the right to:
            <ul>
                <li>Request a copy of the information collected about you.</li>
                <li>Correct or delete your personal data at any time.</li>
                <li>Withdraw consent for data collection.</li>
            </ul>
        </li>
        <li><strong>Limitations:</strong> The website is not responsible for any misuse of data if the user provides false or inaccurate information.</li>
        <li><strong>Contact:</strong> For any inquiries or concerns about your data, you can contact us via website@master.com.</li>
    </ol>
    <br>
    <p><strong>By checking the box and submitting the form, you acknowledge that you have read, understood, and agreed to these terms and conditions.</strong></p>`















}