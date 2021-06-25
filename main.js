var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };

  
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  var myButton = document.getElementById('btnshort');
        myButton.addEventListener('click', ButtonTes);
        
        function ButtonTes(){
        fetch('https://api.shrtco.de/v2/shorten?url='+ 
        document.getElementById('textinput').value)
        .then(Response => Response.json()).then(
              data => {
                document.getElementById("myInput").value = data.result.short_link
                 console.log(data.result.short_link)
              }
          )
      }

      var closePopup = document.getElementById("popupclose");
      var overlay = document.getElementById("overlay");
      var popup = document.getElementById("popup");
      var button = document.getElementById("btnshort");
      // Close Popup Event
      overlay.onclick = function() {
          overlay.className = '';
          popup.className = '';
      };
      // Close Popup Event
      closePopup.onclick = function() {
          overlay.className = '';
          popup.className = '';
      };
      // Show Overlay and Popup
      button.onclick = function() {
          overlay.className = 'show';
          popup.className = 'show';

        var timeleft = 10;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
          }
          document.getElementById("progressBar").value = 10 - timeleft;
          timeleft -= 1;
        }, 1000);
      }

      function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
      }
      
      function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }

      