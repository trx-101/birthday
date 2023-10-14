(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());

        document.addEventListener('DOMContentLoaded', function () {
          let timerInterval;
          let secondsLeft = 8; // Set the initial number of seconds
          
          Swal.fire({
            title: '<span style="color: #FF5733;">' + secondsLeft + ' seconds left</span>', // Custom title color
            html: '<span style="color: #0074FF;">Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!</span><br>' +
                  '<img src="https://usagif.com/wp-content/uploads/tort-86.gif" style="width: 100px;">', // Custom HTML color and GIF
            timerProgressBar: true,
            timer: secondsLeft * 1000, // Convert seconds to milliseconds
            allowOutsideClick: false,
            showConfirmButton: false, // Hide the "OK" button
            background: 'rgb(235,245,219)', // Add a semi-transparent background
            didOpen: () => {
              Swal.showLoading();
              const title = Swal.getTitle();
              timerInterval = setInterval(() => {
                secondsLeft--; // Decrement the remaining seconds
                title.innerHTML = '<span style="color: #FF5733;">' + secondsLeft + ' seconds left</span>'; // Update the title
                if (secondsLeft === 0) {
                  clearInterval(timerInterval);
                }
              }, 1000); // Update every 1 second (1000 milliseconds)
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
          
        });
   