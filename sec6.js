
function showFileConfirmation(storageKey, label, elementId, showImage = false) {
    const fileData = JSON.parse(localStorage.getItem(storageKey));
    const target = document.getElementById(elementId);
    if (target) {
        if (fileData) {
            target.innerHTML = `✅ <strong>${label}:</strong> ${fileData.name || "File uploaded"}`;
            if (showImage && fileData.type?.startsWith("image/")) {
                const img = document.createElement("img");
                img.src = fileData.content;
                img.width = 150;
                img.style.display = "block";
                img.style.marginTop = "8px";
                target.appendChild(img);
            }
        } else {
            target.innerHTML = `❌ <strong>${label}:</strong> Not uploaded`;
        }
    }
}

const idCardbtn = document.getElementById('idcardbtn');
const confirmbtn = document.getElementById('confirmbtn');
const contentDiv = document.getElementById('content');

function loadContent(contentType) {
    let contentHTML = '';
    switch (contentType) {
        case 'idcard':
            contentHTML = `
                <div class="heading">
                      <p>  Welcome Emmployee <br> Temporary ID Generation </p>
                </div>
                <div class="id-card">
                    <div class="id-card-header">
                        <img src="rinlproject.png" alt="RINL Logo" class="logo">
                        <div class="header-text">
                            <h1>RINL Visakhapatnam Steel Plant</h1>
                            <h2>Employee Identification Card</h2>
                        </div>
                    </div>
                    <div class="id-card-body">
                        <div class="photo-section">
                            <img id="employeePhoto" src="https://via.placeholder.com/100x120" alt="Employee Photo" class="photo">
                        </div>
                        <div class="details-section">
                            <span id="name" class="mainname"></span>
                            <p><strong>Father's Name:</strong> <span id="fatherName"></span></p>
                            <p><strong>Gender:</strong> <span id="gender"></span></p>
                            <p><strong>Age:</strong> <span id="age"></span></p>
                            <p><strong>Date of Birth:</strong> <span id="dob"></span></p>
                            <p><strong>State:</strong> <span id="state"></span></p>
                        </div>
                         <div class="id-card-footer">
                            <p>Authorized by HR Department</p>
                            <p>Valid until: 31 Dec 2025</p>
                         </div>
                    </div>
                   
                </div>
                
            `;
            break;
        case 'confirm':
            contentHTML = `
                <div class="heading">
                    <p>  Welcome Emmployee ... <br> Temporary ID Generation </p>
                </div>
                <div class="content-section">
                    <h2>Uploaded Documents Confirmation</h2>
                    <p>Check the status of your uploaded documents below.</p>
                    <ul id="fileList">
                        <li id="aadharConfirmation"></li>
                        <li id="panCardConfirmation"></li>
                        <li id="resumeConfirmation"></li>
                        <li id="educationConfirmation"></li>
                        <li id="idCardConfirmation"></li>
                    </ul>
                </div>
            `;
            break;
        default:
            contentHTML = `
                <div class="heading">
                    <p> Welcome to RINL Employee Verification System </p>
                </div>
                <div class="content-section">
                    <h2>Error</h2>
                    <p>Content not found.</p>
                </div>
            `;
    }
    contentDiv.innerHTML = contentHTML;

    if (contentType === 'idcard') {
        const userDetails = JSON.parse(localStorage.getItem('formData'));
        if (userDetails) {
            document.getElementById('name').textContent = userDetails.name;
            document.getElementById('fatherName').textContent = userDetails.fatherName;
            document.getElementById('gender').textContent = userDetails.gender;
            document.getElementById('age').textContent = userDetails.age;
            document.getElementById('dob').textContent = userDetails.dob;
            document.getElementById('state').textContent = userDetails.state;
        }
        loadUploadedPhoto();
        showFileConfirmation('uploadedAadhar', 'Aadhar Card', 'aadharConfirmation');
        showFileConfirmation('uploadedPAN', 'PAN Card', 'panCardConfirmation');
        showFileConfirmation('uploadedResume', 'Resume/CV', 'resumeConfirmation');
        showFileConfirmation('uploadedEducation', 'Education Certificate', 'educationConfirmation');
        showFileConfirmation('uploadedIdCard', 'Photo for ID Card', 'idCardConfirmation', true);
    }
    if (contentType === 'confirm') {
        showFileConfirmation('uploadedAadhar', 'Aadhar Card', 'aadharConfirmation');
        showFileConfirmation('uploadedPAN', 'PAN Card', 'panCardConfirmation');
        showFileConfirmation('uploadedResume', 'Resume/CV', 'resumeConfirmation');
        showFileConfirmation('uploadedEducation', 'Education Certificate', 'educationConfirmation');
        showFileConfirmation('uploadedIdCard', 'Photo for ID Card', 'idCardConfirmation', true);
    }
}

function generateIdCard() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const tempId = document.getElementById('temp-id').value;
    const preview = document.getElementById('id-card-preview');
    if (name && dob && tempId) {
        preview.innerHTML = `
            <h3>Temporary ID Card</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Temporary ID:</strong> ${tempId}</p>
        `;
    } else {
        preview.innerHTML = '<p style="color: red;">Please fill all fields.</p>';
    }
}

function loadUploadedPhoto() {
    const photoImg = document.getElementById('employeePhoto');
    if (photoImg) {
        const photoData = JSON.parse(localStorage.getItem('uploadedIdCard'));
        if (photoData && photoData.type?.startsWith('image/') && photoData.content) {
            photoImg.src = photoData.content;
        }
    }
}

function togglemenu() {
    const navLinks = document.getElementById('navlinks');
    navLinks.classList.toggle('active');
}

idCardbtn.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('idcard');
});

confirmbtn.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('confirm');
});

loadContent('idcard');