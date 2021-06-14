const ccsPopupBackground = document.getElementById('ccsPopupBackground');
const ccsWidgetDiv = document.getElementById('ccsWidgetDiv');

document.addEventListener('click', function(e) {

   if (e.target.id == "ccsPopupBackground" || e.target.id == "ccsPopUpClose") {
      ccsPopupBackground.classList.remove('opened');
   }

   if (e.target.id == "ccsWidget") {
      ccsPopupBackground.classList.add('opened');
   }

   if (e.target.id == "hideCcsWidget") {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      document.cookie = 'hideCcsWidget=1; expires=' + tomorrow + ';';
      ccsWidgetDiv.style.display = "none";
   }

});

function getCookie(name) {
   let cookies = document.cookie;
   let prefix = name + "=";
   let begin = cookies.indexOf("; " + prefix);

   if (begin == -1) {
      begin = cookies.indexOf(prefix);

      if (begin != 0) {
         return null;
      }
   } else {
      begin += 2;
   }

   let end = cookies.indexOf(";", begin);
   if (end == -1) {
      end = cookies.length;                        
   }

   return unescape(cookies.substring(begin + prefix.length, end));
   }

   let hideCcsWidget = getCookie('hideCcsWidget');
   if (hideCcsWidget == 1) {
   ccsWidgetDiv.style.display = "none";
}