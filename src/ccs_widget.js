
let ccs_widget_testMode = false;
let ccs_widget_template = undefined;

const ccs_widget_templateParts = [
   `<div class="ccs-widget" id="ccsWidgetDiv"><img class="hide-ccs-widget" src="images/ccs_close_black.svg" id="hideCcsWidget"><img class="ccs-widget-img" src="images/ccs_widget.svg" id="ccsWidget"></div>`,

   `<div class="ccs-popup-background" id="ccsPopupBackground"><div class="ccs-popup"><p class="ccs-promotion-title">CONDIÇÃO ESPECIAL<br><span>Assinante Estética Experts</span></p><img class="ccs-popup-img" src="images/ccs_popup_image.png" alt="Logo da Comunidade da Clínica Sortuda"><div class="ccs-popup-content"><img class="ccs-popup-close" src="images/ccs_close.svg" id="ccsPopUpClose"><h2 class="ccs-popup-title">Aproveite 1 ano de Clínica Experts + Comunidade da Clínica Sortuda</h1><p class="ccs-popup-subtitle">Gerencie seu negócio de estética com o melhor sistema da estética e participe da comunidade da clínica sortuda com aulas semanais sobre marketing, gestão e empreendedorismo.</p><div class="ccs-popup-buttons"><a href="https://tiagomario.com.br/comunidade-da-clinica-sortuda/" target="_blank"><button class="ccs-popup-button"><img src="images/whatsapp_black.svg" alt="Logo Whatsapp">Fale com um consultor </button></a></div></div></div></div>`,
];

function ccs_widget_setup() {
	ccs_widget_renderTemplate();

   if (!ccs_widget_testMode) {
		let node = document.createElement("div");
		node.id = "CCS Widget";
		node.innerHTML = ccs_widget_template;
		document.body.appendChild(node);
	}

	const ccsPopupBackground = document.getElementById('ccsPopupBackground');
   const ccsWidgetDiv = document.getElementById('ccsWidgetDiv');

   let hideCcsWidget = getCookie('hideCcsWidget');
   ccsWidgetDiv.style.display = hideCcsWidget == 1 ? "none" : "flex";

   document.addEventListener('click', function(e) {

      if (e.target.id == "ccsPopupBackground" || e.target.id == "ccsPopUpClose") {
         ccsPopupBackground.classList.remove('opened');
         ccsWidgetDiv.style.display = "flex";
      }

      if (e.target.id == "ccsWidget") {
         ccsPopupBackground.classList.add('opened');
         ccsWidgetDiv.style.display = "none";
      }

      if (e.target.id == "hideCcsWidget") {
         let tomorrow = new Date();
         tomorrow.setDate(tomorrow.getDate() + 1);
         document.cookie = 'hideCcsWidget=1; expires=' + tomorrow + ';';
         ccsWidgetDiv.style.display = "none";
      }

   });
}

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

function ccs_widget_renderTemplate(){
	const ccs_widget_style =
	`<style>
      :root, body {
         font-family: 'Barlow', sans-serif !important;
      }
      @media (max-width: 568px) {
         .ccs-popup {
            right: calc((100vw - 376px) / 2) !important;
         }
         .ccs-widget {
            right: 10px !important;
            bottom: 10px !important;
            width: 80px !important;
            height: 80px !important;
         }
         .hide-ccs-widget {
            width: 9px !important;
            height: 9px !important;
            bottom: 90px !important;
            right: 10px !important;
         }
      }
      @media (max-width: 375px) {
         .ccs-widget {
            right: 10px !important;
            bottom: 10px !important;
            width: 70px !important;
            height: 70px !important;
         }
         .ccs-popup {
            width: 310px !important;
            bottom: 50px !important;
            right: calc((100vw - 310px) / 2) !important;
         }
         .ccs-popup-close {
            top: 15px !important;
            right: 15px !important; 
            width: 12.5px !important;
            height: 12.5px !important;
         }
         .ccs-promotion-title {
            font-size: 23px !important;
            top: 20px !important;
            right: 30px !important;
         }
         .ccs-promotion-title span{
            font-size: 21px !important; 
         }
         .ccs-popup-title {
            font-size: 23px !important;
         }
         .ccs-popup-subtitle {
            font-size: 16px !important;
         }
         .ccs-popup-button {
            width: 250px !important;
         }
         .hide-ccs-widget {
            width: 9px !important;
            height: 9px !important;
            bottom: 80px !important;
            right: 7.5px !important;
         }
      }
      @media (max-width: 360px) {
         .ccs-popup {
            bottom: 20px !important;
         }
      }
      @media (max-width: 320px) {
         .ccs-promotion-title {
            font-size: 22px !important;
            right: 45px !important;
         }
         .ccs-promotion-title span{
            font-size: 19px !important; 
         }
         .ccs-popup-title {
            font-size: 21px !important;
         }
         .ccs-popup-subtitle {
            font-size: 15px !important;
         }
         .ccs-popup-button {
            font-size: 15px !important;
         }
      }
      .hide-ccs-widget {
         width: 12.5px;
         height: 12.5px;
         position: fixed;
         bottom: 165px;
         right: 30px;
      }
      .ccs-widget {
         display: none;
         cursor: pointer;
         position: fixed;
         right: 35px;
         bottom: 35px;
         width: 125px;
         height: 125px;
      }
      .ccs-widget-img {
         animation: shake 3s;
         animation-iteration-count: infinite;
      }
      .ccs-popup-background {
         display: none;
         width: 100vw;
         height: 100vh;
         background-color: rgb(71,74,89, .5);
         cursor: pointer;
         position: fixed;
         bottom: 0;
         left: 0;
      }
      .ccs-popup-background.opened {
         display: flex;
      }
      .ccs-popup {
         width: 376px;
         height: auto;
         background-color: white;
         position: fixed;
         bottom: 35px;
         right: 35px;
         border-radius: 16px;
         z-index: 1000;
      }
      .ccs-popup-close {
         position: absolute;
         top: 15px;
         right: 15px;
         color: white;
         width: 15px;
         height: 15px;
      }
      .ccs-promotion-title {
         color: white;
         font-size: 26px;
         top: 30px;
         right: 50px;
         text-align: center;
         position: absolute;
         font-weight: 700;
      }
      .ccs-promotion-title span{
         color: #AFAFAF;
         font-weight: 200;
         font-size: 24px; 
      }
      .ccs-popup-img {
         border-top-left-radius: 14px;
         border-top-right-radius: 14px;
         height: auto;
         width: 100%;
      }
      .ccs-popup-content {
         padding: 0px 20px;
      }
      .ccs-popup-title {
         font-size: 26px;
         margin-top: -10px;
      }
      .ccs-popup-subtitle {
         margin-top: -10px;
         font-size: 18px;
         color: #707070;
         line-height: 1.175em;
      }
      .ccs-popup-buttons {
         margin: 20px 0px;
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .ccs-popup-button {
         width: 300px;
         height: 40px;
         text-align: center;
         border-radius: 6px;
         border: solid 2px #4CED6B;
         background-color: #4CED6B;
         font-size: 16px;
         font-weight: 600;
         cursor: pointer;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .ccs-popup-button img{
         width: 37.5px;
         height: auto;
      }
      @keyframes shake {
         0%   { transform: translate(2px, 2px) rotate(0deg); }
         10%  { transform: translate(-2px, -3px) rotate(-1deg); }
         20%  { transform: translate(-4px, -1px) rotate(1deg); }
         30%  { transform: translate(4px, 3px) rotate(0deg); }
         40%  { transform: translate(2px, -2px) rotate(1deg); }
         50%  { transform: translate(-2px, 3px) rotate(-1deg); }
         60%  { transform: translate(-4px, 2px) rotate(0deg); }
         70%  { transform: translate(4px, 2px) rotate(-1deg); }
         80%  { transform: translate(-2px, -2px) rotate(1deg); }
         90%  { transform: translate(2px, 2px) rotate(0deg); }
         100% { transform: translate(2px, -3px) rotate(-1deg); }
      }
	</style>`;
   const ccs_widget_normalize = 
   `<style>
      
 html {
   line-height: 1.15;
   -webkit-text-size-adjust: 100%;
 }
 
 body {
   margin: 0;
 }
 
 main {
   display: block;
 }
 
 h1 {
   font-size: 2em;
   margin: 0.67em 0;
 }
 
 p {
   margin: 0;
 }

 hr {
   box-sizing: content-box;
   height: 0;
   overflow: visible;
 }

 pre {
   font-family: monospace, monospace;
   font-size: 1em;
 }
 
 ul {
   margin: 0;
   padding: 0;
 }
 
 li {
   list-style: none;
 }
 
 a {
   background-color: transparent;
   text-decoration: none;
   color: currentColor;
 }
 
 abbr[title] {
   border-bottom: none;
   text-decoration: underline;
   -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
 }
 
 b,
 strong {
   font-weight: bolder;
 }

 code,
 kbd,
 samp {
   font-family: monospace, monospace;
   font-size: 1em;
 }
 small {
   font-size: 80%;
 }

 sub,
 sup {
   font-size: 75%;
   line-height: 0;
   position: relative;
   vertical-align: baseline;
 }
 
 sub {
   bottom: -0.25em;
 }

 sup {
   top: -0.5em;
 }
 
 img {
   border-style: none;
 }
 
 button,
 input,
 optgroup,
 select,
 textarea {
   font-family: inherit;
   font-size: 100%;
   line-height: 1.15;
   margin: 0;
 }
 

 button,
 input {
   overflow: visible;
 }
 button,
 select {
   text-transform: none;
 }

 button,
 [type=button],
 [type=reset],
 [type=submit] {
   -webkit-appearance: button;
 }
 
 button::-moz-focus-inner,
 [type=button]::-moz-focus-inner,
 [type=reset]::-moz-focus-inner,
 [type=submit]::-moz-focus-inner {
   border-style: none;
   padding: 0;
 }
 
 button:-moz-focusring,
 [type=button]:-moz-focusring,
 [type=reset]:-moz-focusring,
 [type=submit]:-moz-focusring {
   outline: 1px dotted ButtonText;
 }

 fieldset {
   padding: 0.35em 0.75em 0.625em;
 }

 legend {
   box-sizing: border-box;
   color: inherit;
   display: table;
   max-width: 100%;
   padding: 0;
   white-space: normal;
 }
 
 progress {
   vertical-align: baseline;
 }
 
 textarea {
   overflow: auto;
 }
 
 [type=checkbox],
 [type=radio] {
   box-sizing: border-box;
   padding: 0;
 }
 [type=number]::-webkit-inner-spin-button,
 [type=number]::-webkit-outer-spin-button {
   height: auto;
 }
 
 
 [type=search] {
   -webkit-appearance: textfield;
   outline-offset: -2px;
 }
 
 [type=search]::-webkit-search-decoration {
   -webkit-appearance: none;
 }
 
 ::-webkit-file-upload-button {
   -webkit-appearance: button;
   font: inherit;
 }

 details {
   display: block;
 }
 
 summary {
   display: list-item;
 }

 template {
   display: none;
 }

 [hidden] {
   display: none;
 }
   </style>`;
   
	ccs_widget_template = ccs_widget_normalize + ccs_widget_style + ccs_widget_templateParts[0];
	ccs_widget_template += ccs_widget_templateParts[1];
};

window.addEventListener('DOMContentLoaded', () => {
	
   console.log('CCS Widget');
   ccs_widget_setup();

});
