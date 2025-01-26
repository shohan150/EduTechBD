// Initialize i18next with language resources
i18next.init({
   lng: 'en', // Default language
   resources: {
     en: {
       translation: {
         title: 'Welcome to the i18next Example',
         content: 'This is a simple example demonstrating how to use i18next for language localization.',
         footer: 'Thank you for visiting!',
       },
     },
     bn: {
       translation: {
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
     element.textContent = i18next.t(key);
   });
 }
 
 // Initial render
 updateContent();
 
 // Handle language switching
 document.getElementById('languageToggle').addEventListener('click', () => {
   // Toggle language between 'en' and 'bn'
   const newLang = i18next.language === 'en' ? 'bn' : 'en';
   i18next.changeLanguage(newLang, () => {
     updateContent(); // Re-render the content
   });
 });
 