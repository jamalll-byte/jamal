document.addEventListener("DOMContentLoaded", function () {
    alert("selamat datang di portofolio perang dunia 2");

    // Animasi muncul saat sroll
    const events = document.querySelectorAll('.event');

    function checkscroll() {
        let triggerBottom = window.innerHeight * 0.85;

        events.forEach(event => ) {
            event.getBoundingClientRect().top; if (eventTop < triggerBottom) {

                event.classList.add("show");
            }
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});





