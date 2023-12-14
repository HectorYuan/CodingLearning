const toggleButton = document.querySelector('.toggle-button');
const moreContent = document.querySelector('.more-content');

toggleButton.addEventListener('click', function() {
  moreContent.classList.toggle('show-more');
  if (moreContent.classList.contains('show-more')) {
    toggleButton.textContent = '隐藏';
  } else {
    toggleButton.textContent = '展示图片';
  }
});
