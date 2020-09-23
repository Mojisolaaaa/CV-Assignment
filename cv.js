function submitCv() {
    document.getElementById("CVForm");
    var Firstname = document.getElementById("fname");
    var Middlename = document.getElementById("mname");
    var Lastname = document.getElementById("lname");
    var Gender = document.getElementById("gender");
    var Phonenumber = document.getElementById("phonenumber");
    var Email = document.getElementById("email");
    var Address = document.getElementById("address");
    console.log(Firstname + Middlename + Lastname + Gender + Phonenumber + Email + Address)
    var Fullname = Firstname.value + " " + Middlename.value + " " + Lastname.value
    localStorage.setItem("Fullname", Fullname)
    localStorage.setItem("Phonenumber", Phonenumber.value)
    localStorage.setItem("Email", Email.value)
    localStorage.setItem("Address", Address.value)
    if (Firstname.value === "") { Firstname.classList.add("invalid-input") };
    window.location.pathname = "/cv.html"

}

function getcvdetails() {
    const Fullname = localStorage.getItem("Fullname")
    const Phonenumber = localStorage.getItem("Phonenumber")
    const Email = localStorage.getItem("Email")
    const Address = localStorage.getItem("Address")
    document.getElementById("CVname ").innerhtml = Fullname.toString()
    document.getElementById("CVphonenumber").innerhtml = Phonenumber
    document.getElementById("CVemail").innertext = Email
    document.getElementById("CVaddress").innertext = Address
}
document.addEventListener('DOMContentLoaded', (event) => {
    getcvdetails()
})