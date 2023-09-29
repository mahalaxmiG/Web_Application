

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
let loginSuccessful = false; // Initialize login success status
let signupSuccessful = false; // Initialize signup success status
const chooseOptionSection = document.getElementById('chooseOption');
const loginSection = document.getElementById('login');
const signupSection = document.getElementById('signup');
const chatContainer = document.getElementById('chat-container');

const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');

loginButton.addEventListener('click', () => {
    chooseOptionSection.style.display = 'none';
    loginSection.style.display = 'block';
    signupSection.style.display = 'none';
    chatContainer.style.display = 'none';
});

signupButton.addEventListener('click', () => {
    chooseOptionSection.style.display = 'none';
    loginSection.style.display = 'none';
    signupSection.style.display = 'block';
    chatContainer.style.display = 'none';
});

// Chat bot section (if needed)
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatIcon = document.getElementById('chat-icon');
const closeButton = document.getElementById('close-button');

chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});


closeButton.addEventListener('click', () => {
    chatContainer.style.display = 'none'; // Hide chatbot chatbox when close button is clicked
});

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    displayMessage(userMessage, 'user');

    // Process userMessage and generate a bot response
    const botResponse = generateBotResponse(userMessage);
    displayMessage(botResponse.message, botResponse.sender);

    userInput.value = '';
});

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
}

function generateBotResponse(userMessage) {
    // Define predefined responses for specific user inputs
    const responses = {
      'hi|^hello|^howdy': 'Hello!',
      'how are you': 'I am just a bot, but thanks for asking!',
      'your website is very pleasing': 'Thank you for noticing and letting me know',
    };
  
    // Check if userMessage matches a predefined response
    for (const keyword in responses) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (regex.test(userMessage)) {
        return { message: responses[keyword], sender: 'bot' };
      }
    }

    // Handle irrelevant messages
    return { message: 'I didn\'t quite understand that. Do you need any other help?', sender: 'bot' };
}
// Chat bot section end

// Login Form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault()

  try {
    // Get input values
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Perform login validation and authentication here
    // You can send a request to your server for validation

    // Example validation (replace with your logic)
    if (loginUsername === 'maha' && loginPassword === 'maha123') {
        loginSuccessful = true;
        alert('Login successful!'); // Replace with your desired action
      // Hide the login and signup sections
      document.getElementById('login').style.display = 'none';
      document.getElementById('signup').style.display = 'none';
      // Show the portfolio content
      document.getElementById('portfolio').style.display = 'block';

      // Log the value of the loginSuccessful variable
      console.log('loginSuccessful:', loginSuccessful);
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    alert(error.message);
  }

  // Clear input fields
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
});
// Signup Form
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  try {
    // Get input values
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;

    // Perform signup logic and user registration here
    // You can send a request to your server for registration

    // Example registration (replace with your logic)
    signupSuccessful = true; 
    alert(`User ${signupUsername} registered successfully!`); // Replace with your desired action
    // Hide the login and signup sections
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    // Show the portfolio content
    document.getElementById('portfolio').style.display = 'block';
  } catch (error) {
    alert(error.message);
  }

  // Clear input fields
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupPassword').value = '';
});
// Login and Signup section end

// If login or signup is successful, hide the welcome section and show the portfolio section
const welcomeParallaxElement = document.querySelector('#welcome-parallax');
const portfolioElement = document.querySelector('#portfolio');

if (loginSuccessful || signupSuccessful) {
//   console.log('Login or signup successful');
  welcomeParallaxElement.style.display = 'none';
  portfolioElement.style.display = 'block';
}

// JavaScript code to add the "active" class when the element is in the viewport
const aboutMeText = document.querySelector('.about-me-text');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust this value as needed
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once the element is visible
        }
    });
}, options);

observer.observe(aboutMeText);



