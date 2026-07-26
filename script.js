// HTML'deki id="slider" olan div'i seçiyoruz.
// Bu div'in içinde Genel2 ve Genel3 bulunuyor.
const slider = document.getElementById("slider");


// id="ileri1" olan butonu buluyoruz.
// (Genel2'deki sağ ok)
document.getElementById("ileri1").onclick = function () {

    // Slider'ı ekran genişliği (100vw) kadar sola kaydırıyoruz.
    // Böylece Genel3 ekrana geliyor.
    slider.style.transform = "translateX(-100vw)";
};


// id="geri2" olan butonu buluyoruz.
// (Genel3'teki sol ok)
document.getElementById("geri2").onclick = function () {

    // Slider'ı tekrar başlangıç konumuna getiriyoruz.
    // Böylece Genel2 tekrar ekrana geliyor.
    slider.style.transform = "translateX(0)";
};