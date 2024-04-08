console.log("from script file");
function validateForm() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');
    
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return false;
    }
    
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      return false;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      return false;
    }
  
    return true;
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-section');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = button.id.replace('btn-', '');
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
