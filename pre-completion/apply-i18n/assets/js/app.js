i18next.init({
   lng: 'en', // Default language
   resources: {
     en: {
       translation: {
         school: "School",
         verticalForm: "Vertical Form",
         breadcrumb: "<span class='text-muted fw-light'>Employee/</span> Progress Tracker",
         title: 'Welcome to the i18next Example',
         content: 'This is a simple example demonstrating how to use i18next for language localization.',
         footer: 'Thank you for visiting!',
       },
     },
     bn: {
       translation: {
         school: "স্কুল",
         verticalForm: "লম্ব ফর্ম",
         breadcrumb: "<span class='text-muted fw-light'>উপদেশ/</span> যোগাযোগ প্রক্রিয়া",
         title: 'i18next উদাহরণে স্বাগতম',
         content: 'এটি একটি সহজ উদাহরণ যা ভাষা স্থানীয়করণের জন্য i18next ব্যবহার দেখায়।',
         footer: 'ভিজিট করার জন্য ধন্যবাদ!',
       },
     },
   },
 });
 
 // Function to update the text based on the current language
 function updateContent() {
   document.querySelectorAll('[data-i18n]').forEach((element) => {
     const key = element.getAttribute('data-i18n');
     element.innerHTML = i18next.t(key);
   });
 }
 
 // Initial render
 updateContent();

// Handle toggle logic
const toggle = document.getElementById('languageToggle');
const enOption = document.querySelectorAll('.language-option')[0];
const bnOption = document.querySelectorAll('.language-option')[1];

// Event listener for the toggle switch
toggle.addEventListener('click', () => {
  const newLang = i18next.language === 'en' ? 'bn' : 'en';

  // Change the language
  i18next.changeLanguage(newLang, () => {
    updateContent();
  });

  // Save the selected language to localStorage
  localStorage.setItem('selectedLanguage', newLang);

  // Update toggle state
  if (newLang === 'en') {
    toggle.classList.remove('active');
    enOption.classList.add('active');
    bnOption.classList.remove('active');
  } else {
    toggle.classList.add('active');
    enOption.classList.remove('active');
    bnOption.classList.add('active');
  }
});

// On page load: Retrieve the saved language from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English if not set

  // Set i18next to the saved language
  i18next.changeLanguage(savedLanguage, () => {
    updateContent();
  });

  // Update UI based on the saved language
  if (savedLanguage === 'en') {
    toggle.classList.remove('active');
    enOption.classList.add('active');
    bnOption.classList.remove('active');
  } else {
    toggle.classList.add('active');
    enOption.classList.remove('active');
    bnOption.classList.add('active');
  }
});
