    // DropDown
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }

      // smoothanimation Scrool
    function scrollTo(id) {
        const target = document.getElementById(id);
        target.scrollIntoView({
            behavior: 'smooth'
        });
        }

        const BtnRumah = document.getElementById('btnRumah');
        BtnRumah.addEventListener('click', function(event) {
            event.preventDefault();
            scrollTo('rumah');
        });

        const BtnKonsultasi = document.getElementById('btnKonsultasi');
        BtnKonsultasi.addEventListener('click', function(event) {
            event.preventDefault();
            scrollTo('konsultasi');
        });

        const BtnInfo = document.getElementById('btnInfo');
        BtnInfo.addEventListener('click', function(event) {
            event.preventDefault();
            scrollTo('info');
        });

