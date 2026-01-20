function togglemenu() {
    const links = document.getElementById("navlinks");
    links.classList.toggle("active");
    console.log("toggled")
}

let idCardFile = null;


document.getElementById("idCardInput").addEventListener("change", function () {
    idCardFile = this.files[0];
});

function storeFileData() {
    if (idCardFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileData = {
                label: "Photo for ID Card",
                name: idCardFile.name,
                type: idCardFile.type,
                size: idCardFile.size,
                content: e.target.result
            };
            localStorage.setItem("uploadedIdCard", JSON.stringify(fileData));
            alert('✅ Photo for ID Card uploaded successfully!');
        };
        reader.readAsDataURL(idCardFile);
    } else {
        alert("⚠️ Please select a file first.");
    }
}

function saveAadharFile() {
  const file = document.getElementById("aadharInput").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileData = {
        name: file.name,
        type: file.type,
        content: e.target.result
      };
      localStorage.setItem("uploadedAadhar", JSON.stringify(fileData));
      alert("Aadhar card uploaded!");
    };
    reader.readAsDataURL(file);
  }
}