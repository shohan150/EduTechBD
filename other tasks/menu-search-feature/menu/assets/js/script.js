document.addEventListener('DOMContentLoaded', () => {
   const searchBarContainer = document.getElementById('searchBarContainer');
   const coverImageContainer = document.getElementById('coverImageContainer');
   const showSearchBarButton = document.getElementById('showSearchBarButton');
   const toggleIcon = document.getElementById('toggleIcon');

   showSearchBarButton.addEventListener('click', () => {
       searchBarContainer.style.display = 'flex';
       coverImageContainer.style.display = 'none';
   });

   toggleIcon.addEventListener('click', () => {
       searchBarContainer.style.display = 'none';
       coverImageContainer.style.display = 'block';
   });
});
