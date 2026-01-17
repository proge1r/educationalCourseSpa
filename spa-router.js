const viewport = document.getElementById('app-viewport');
let registrationStore = {
    name: '',
    email: '',
    phone: ''
};

const pages = {
    '#home': () => `
        <div class="section-container" style="text-align: center;">
            <h1>Advanced Fullstack Course</h1>
            <p>Master modern web development in 16 weeks.</p>
            <h2 style="color: var(--primary-color);">$499.00</h2>
            <button class="btn-nav" style="border:none; cursor:pointer;" onclick="location.hash = '#register'">Enroll Now</button>
        </div>`,
    
    '#about': () => `
        <div class="section-container">
            <h2>Course Details</h2>
            <p><strong>Instructor:</strong> Senior Software Architect</p>
            <p><strong>Curriculum:</strong> Node.js, React, Docker, and System Design.</p>
            <p><strong>Duration:</strong> 4 months, 2 sessions per week.</p>
        </div>`,

    '#reviews': () => `
        <div class="section-container">
            <h2>Student Testimonials</h2>
            <blockquote style="border-left: 4px solid var(--primary-color); padding-left: 15px;">
                "The best technical investment I've made this year. High quality content."
                <br><strong>- Michael Brown, Software Engineer</strong>
            </blockquote>
        </div>`,

    '#register': () => `
        <div class="section-container">
            <h2>Registration Form</h2>
            <form id="reg-form">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="field-name" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="field-email" placeholder="john@example.com" required>
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="field-phone" placeholder="+1 (555) 000-0000" required>
                </div>
                <button type="submit">Complete Registration</button>
            </form>
        </div>`,

    '#thanks': () => `
        <div class="section-container" style="text-align: center;">
            <h2 style="color: var(--success-color);">Thank You for Registering!</h2>
            <p>We have received your application. Please verify your details below:</p>
            <div style="background: var(--bg-light); padding: 20px; border-radius: 12px; text-align: left;">
                <p><strong>Name:</strong> ${registrationStore.name}</p>
                <p><strong>Email:</strong> ${registrationStore.email}</p>
                <p><strong>Phone:</strong> ${registrationStore.phone}</p>
            </div>
            <br>
            <a href="#home" style="color: var(--primary-color); font-weight: 600;">Go back to Home</a>
        </div>`
};

function navigate() {
    const currentHash = location.hash || '#home';
    const renderContent = pages[currentHash] || pages['#home'];
    
    viewport.innerHTML = renderContent();

    if (currentHash === '#register') {
        const form = document.getElementById('reg-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            registrationStore = {
                name: document.getElementById('field-name').value,
                email: document.getElementById('field-email').value,
                phone: document.getElementById('field-phone').value
            };
            
            location.hash = '#thanks';
        });
    }
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);