function togglemenu() {
    const links = document.getElementById("navlinks");
    links.classList.toggle("active");
    console.log("toggled")
}

document.getElementById("proceedBtn").addEventListener("click", function(event) {
    event.preventDefault(); 

    const formData = {
      name: document.getElementById("name").value,
      fatherName: document.getElementById("father-name").value,
      gender: document.querySelector('input[name="gender"]:checked')?.value || "",
      age: document.getElementById("age").value,
      dob: document.getElementById("dob").value,
      state: document.getElementById("state").value,
      qualification: document.getElementById("qualification").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      department: document.getElementById("department").value
    };

   
    localStorage.setItem("formData", JSON.stringify(formData));

    
    window.location.href = "sec5.html"; 
  });