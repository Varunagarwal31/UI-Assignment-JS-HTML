document.addEventListener('DOMContentLoaded', function() {
  const arrowButton = document.querySelector('.arrow-button');
  const progressBar = document.querySelector('.progress-bar');
  const progressPercentage = document.querySelector('.progress-percentage');
  const popupText = document.querySelector('.popupContent')
  const startButton = document.getElementById('startButton');
  const footer = document.querySelector('.footerDiv');
  const modal = document.querySelector('.modalPopup');

  let progress = 0;
  let intervalId;

  function startProgressBar() {
    progressBar.style.display = 'block';
    progressPercentage.style.display = 'block';
    popupText.style.display = 'block';
    progressBar.style.width = `${progress}%`;
    progressPercentage.textContent = `${progress}%`;
    intervalId = setInterval(incrementProgress, 500);
  }

  function incrementProgress() {
    progress += 5;
    if (progress > 100) {
      clearInterval(intervalId);
      progressBar.style.display = 'none';
      popupText.style.display = 'none';
      progressPercentage.style.display = 'none';
      footer.style.display = 'block';
      arrowButton.innerHTML = `<i class="bi bi-caret-down-square"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
      <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
         <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
   </svg>
    `;
    modal.style.display = 'block'
    alert('Migrating process has been completed')
      return;
    }
    progressBar.style.width = `${progress}%`;
    progressPercentage.textContent = `${progress}%`;
  }

  startButton.addEventListener('click', function() {
    startProgressBar();
    startButton.style.display = 'none';
    footer.style.display = 'none';
    arrowButton.style.display = 'block';
    arrowButton.innerHTML = `<i class="bi bi-caret-down-square"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
          </svg>
  `;
  });

  arrowButton.addEventListener('click', function() {
    if (arrowButton.innerHTML.includes('bi-caret-down-square')) {
      footer.style.display = 'block';
      progressBar.style.display = 'none';
      popupText.style.display = 'none';
      progressPercentage.style.display = 'none' 
      arrowButton.innerHTML =  `<i class="bi bi-caret-up-square"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
     </svg>`;
    } else {
      footer.style.display = 'none';
      progressBar.style.display = 'block';
      popupText.style.display = 'block';
      progressPercentage.style.display = 'block' 
      arrowButton.innerHTML = `<i class="bi bi-caret-down-square"></i>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
           <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg>
         `;
    }
  });

  progressBar.style.display = 'none';
  popupText.style.display = 'none';
  progressPercentage.style.display = 'none';
  arrowButton.style.display = 'none';
});

function popHide(){
  const modalClose = document.querySelector('.modalPopup')
  modalClose.style.display = 'none';
}
