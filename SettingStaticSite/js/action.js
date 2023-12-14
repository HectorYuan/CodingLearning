window.addEventListener('load', function() {
  alert('欢迎访问个人简介页面！');
});


const toggleButtons = document.querySelectorAll('.toggle-button');



toggleButtons.forEach(function(toggleButton) {
  toggleButton.addEventListener('click', function() {
    const moreContent = this.parentElement.querySelector('.more-content');
    moreContent.classList.toggle('show-more');

    if (moreContent.classList.contains('show-more')) {
      toggleButton.textContent = '隐藏';
      moreContent.style.display = 'block';
    } else {
      toggleButton.textContent = '展示图片';
      moreContent.style.display = 'none';
    }
  });
  
});


