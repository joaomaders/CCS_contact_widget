let ccs_widget_testMode = false;
let ccs_widget_template = undefined;

const ccs_widget_templateParts = [
   `<div class="ccs-widget" id="ccsWidgetDiv">
   <div class="hide-ccs-widget-parent">
      <svg class="hide-ccs-widget" id="hideCcsWidget" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 19.827 18.827">
         <g id="Grupo_4714" data-name="Grupo 4714" transform="translate(-317.586 -92.586)">
           <path id="Caminho_579" data-name="Caminho 579" d="M-1459.5-62l17-16" transform="translate(1778.5 172)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
           <path id="Caminho_637" data-name="Caminho 637" d="M-1442.5-62l-17-16" transform="translate(1778.5 172)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
         </g>
      </svg>
   </div>
   <svg class="ccs-widget-img" viewBox="0 0 107.251 107.252" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(98.251 9) rotate(90)" fill="#4ced6b">
      <path id="ccsWidget" d="m34.059 93.751l-0.027615-1.5259e-5c-2.2422-0.0037537-4.447-0.43457-6.5559-1.2805-2.0785-0.83368-3.9668-2.0314-5.6123-3.5598l-0.0021992-0.0020447-0.0021839-0.0020523c-1.725-1.6065-3.0847-3.4941-4.0413-5.6102-1.0253-2.266-1.5446-4.6984-1.5427-7.2283 0.001791-1.1025 0.092913-2.2245 0.27272-3.3637-1.1433 0.18028-2.2678 0.27113-3.3675 0.27148h-0.0067387c-2.531 0-4.9611-0.5196-7.2227-1.5444-3.1332-1.4187-5.781-3.7346-7.6561-6.6967-1.826-2.8881-2.792-6.1783-2.7949-9.5169-7.3862e-4 -3.4307 0.62838-6.6382 1.8699-9.5365 0.15169-0.35422 0.3153-0.70723 0.49025-1.058-1.5546-3.1555-2.3639-6.7643-2.3594-10.593 0.0037689-2.2416 0.4344-4.4462 1.2799-6.555 0.83371-2.0792 2.0315-3.9677 3.5601-5.613l0.0018154-0.0019531 0.0018154-0.001955c1.6064-1.7249 3.4939-3.0846 5.6102-4.0413 2.2619-1.0235 4.6899-1.5428 7.2152-1.5428h0.013169c1.1029 0.001791 2.2252 0.092981 3.3649 0.27293-0.17981-1.1386-0.27091-2.2597-0.27271-3.361-0.0018463-2.534 0.51743-4.9664 1.5434-7.2339 0.95528-2.1132 2.3147-4.0004 4.0398-5.6079l0.0026455-0.0024616 0.0026608-0.0024769c1.6457-1.5285 3.534-2.7262 5.6125-3.5598 2.1092-0.84589 4.3142-1.2765 6.5536-1.2798l0.032909-1.5259e-5c3.8158 0 7.4133 0.80906 10.56 2.3588 0.34979-0.17407 0.70332-0.33738 1.0622-0.49082 2.8938-1.2395 6.0994-1.8686 9.5249-1.8686h0.0065689c3.3391 0.0018768 6.6295 0.96789 9.517 2.7936 2.9631 1.875 5.2791 4.5225 6.699 7.6572 1.026 2.2653 1.5458 4.6978 1.5448 7.2298-7.4005e-4 1.1003-0.091682 2.2245-0.27174 3.367 1.1382-0.17965 2.2588-0.27067 3.3598-0.27246h0.017189c2.5258 0 4.9538 0.51937 7.2166 1.5437 2.1159 0.95657 4.0038 2.3166 5.6091 4.0414 1.5313 1.6478 2.7294 3.5364 3.5633 5.6158 0.84564 2.1087 1.2763 4.3134 1.2801 6.5528 0.0037689 3.8313-0.80556 7.4402-2.3598 10.595 0.17531 0.35163 0.33913 0.70544 0.49104 1.0607 1.2401 2.8952 1.8694 6.1024 1.8694 9.5301-0.0028 3.3422-0.96874 6.6324-2.7934 9.5186-1.8765 2.9643-4.5243 5.2802-7.6586 6.6994-2.2619 1.0244-4.6918 1.5439-7.222 1.5439h-4.5013e-4 -0.0069427c-1.0988-3.5858e-4 -2.2227-0.091148-3.3652-0.27123 0.17994 1.1418 0.27082 2.2653 0.27156 3.3644 9.3842e-4 2.5334-0.5188 4.9659-1.5448 7.2311-1.4192 3.1341-3.7352 5.7818-6.6975 7.6564-2.8876 1.8265-6.1783 2.7927-9.5172 2.7944h-0.0085106c-3.4251 0-6.6304-0.62908-9.527-1.8698-0.35424-0.15148-0.70736-0.31499-1.0584-0.48999-3.1469 1.5505-6.7458 2.3598-10.564 2.3598zm20.623-13.075c0.17679 0.006546 0.35622 0.0099411 0.53843 0.010193l0.0025063 1.5259e-5h0.0025101l0.0092125 1.5259e-5c1.1224 0 2.3668-0.51122 3.2475-1.3341l0.0021706-0.0020294 0.002182-0.0020294c0.45092-0.42021 0.80103-0.90217 1.0406-1.4325 0.25813-0.57082 0.38322-1.1734 0.38322-1.844v-0.0061417l1.5259e-5 -0.006134c0.0047531-1.7393-0.67126-3.9974-1.9035-6.3586l-0.0022011-0.0041962-0.002182-0.0042191c-1.8218-3.5089-4.9673-7.4239-8.4142-10.473l-0.0020599-0.0018311-0.0020752-0.0018311c-1.4715-1.3048-2.9604-2.4148-4.1926-3.1256-0.31426-0.18174-0.57026-0.31336-0.7673-0.40683-0.17257 0.081722-0.38146 0.18834-0.62145 0.32393l-0.0048904 0.0027695-0.0049095 0.0027542c-1.3134 0.73772-2.9801 1.985-4.5729 3.4219-2.8217 2.5422-5.3749 5.5713-7.1914 8.5313-0.96317 1.5667-1.699 3.0743-2.1889 4.4841-0.46642 1.339-0.70186 2.5547-0.70092 3.6167 3.3951e-4 0.67377 0.12572 1.2777 0.38332 1.8481 0.36217 0.80123 0.97786 1.4936 1.78 2.0011 0.77257 0.48983 1.6909 0.76943 2.5231 0.7694h0.002079 0.0069389c0.17873-6.1035e-5 0.35529-0.0033188 0.5299-0.0097733-0.99633-2.3886-1.5161-4.9009-1.5208-7.4069l-1.5259e-5 -0.0058746v-0.0058746c0.001091-1.486 0.19237-2.9182 0.56852-4.2567 0.67538-2.3997 1.9496-4.4627 3.6854-5.9679 1.0069-0.87269 2.1503-1.5445 3.3993-1.9977h-3.8147e-6c1.2351-0.45014 2.5546-0.67837 3.9218-0.67837h0.0099602l0.011745-1.5259e-5c1.8111 0 3.5863 0.41796 5.1345 1.2088 1.1541 0.58742 2.1916 1.3767 3.084 2.3461l0.0019073 0.0020752 0.0019073 0.002079c1.1633 1.2668 2.0426 2.7969 2.6135 4.548l8.7738e-4 0.0027084 8.9264e-4 0.0027237c0.48331 1.4888 0.72837 3.1008 0.72837 4.7915-0.0010338 2.3756-0.47079 4.7642-1.3962 7.1012-0.041672 0.10514-0.084248 0.21004-0.12761 0.31441zm1.0015-36.052c0.09304 0.19617 0.2237 0.45028 0.40356 0.76104l0.0018311 0.0031548 0.0018158 0.0031548c0.71092 1.2329 1.8206 2.7211 3.1245 4.1902l0.0026894 0.0030327 0.0026932 0.0030289c3.0486 3.4474 6.9633 6.5931 10.472 8.4146l0.0041962 0.0021706 0.0042038 0.0022011c2.3521 1.2275 4.6049 1.9035 6.3435 1.9035l0.016403-1.5259e-5 0.0043335-1.5259e-5h0.0043411c0.67286-3.5477e-4 1.2761-0.12542 1.8441-0.38237 0.53259-0.24046 1.0143-0.59042 1.4346-1.0414l0.0023651-0.0025368 0.0023727-0.0025406c0.8253-0.88288 1.3362-2.1308 1.3334-3.2567-2.594e-4 -0.18366-0.0036926-0.36452-0.010307-0.54262-0.10393 0.043167-0.20835 0.085548-0.31303 0.12704-2.339 0.926-4.7275 1.3957-7.1007 1.3966-1.6928-0.0010147-3.303-0.24572-4.7902-0.72735l-0.0041885-0.0013542-0.0041809-0.0013695c-1.7509-0.5708-3.2811-1.4501-4.548-2.6134l-0.0021362-0.0019684-0.00214-0.0019684c-0.96712-0.89035-1.756-1.9271-2.3446-3.0814-0.79356-1.5529-1.212-3.3347-1.2102-5.1537-5.9128e-4 -1.3685 0.22742-2.6891 0.67778-3.9252 0.45416-1.2506 1.126-2.3943 1.9969-3.3995 1.507-1.7375 3.5701-3.0117 5.9678-3.6864 1.3404-0.37669 2.7726-0.56799 4.2583-0.56898h0.0051117 0.0050888c2.5057 0.0039978 5.0187 0.52378 7.4081 1.5205 0.0064392-0.17436 0.0096893-0.35089 0.0097351-0.52934 0.0010834-0.83834-0.2785-1.7587-0.76706-2.5298-0.5092-0.80421-1.202-1.4203-2.0045-1.783-0.56947-0.25717-1.1741-0.38281-1.8469-0.38351h-0.00103c-1.0623 0-2.2774 0.23568-3.6114 0.70048l-0.0027695 9.6893e-4 -0.0027542 9.5367e-4c-1.4092 0.48892-2.9161 1.2243-4.4788 2.1856l-0.0022964 0.0014153-0.0023041 0.0014153c-2.9584 1.815-5.9872 4.3681-8.5287 7.1889-1.4375 1.5934-2.685 3.2607-3.4247 4.5765l-0.0027657 0.004921-0.0027695 0.0049095c-0.13511 0.23895-0.24152 0.44747-0.32318 0.62009zm-47.109 10.058c-0.0064764 0.1762-0.0098085 0.35493-0.010018 0.5365v0.0030632l-1.5259e-5 0.0030746c-0.0028305 1.1258 0.50814 2.3737 1.3335 3.2566l0.0023232 0.002491 0.0023232 0.0024757c0.42031 0.45102 0.90208 0.801 1.4319 1.0402 0.5708 0.25817 1.1738 0.38325 1.8461 0.3836h0.0043392l0.0043383 1.5259e-5 0.016399 1.5259e-5c1.7391 0 3.9922-0.67601 6.3442-1.9035l0.0040627-0.0021248 0.0040455-0.0021057c3.5091-1.8223 7.4239-4.968 10.472-8.4148l0.0023232-0.0026283 0.0023232-0.0026169c1.3042-1.4701 2.4138-2.9586 3.1246-4.1912l0.0026741-0.0046463 0.0026932-0.004631c0.17847-0.30781 0.30891-0.56147 0.40221-0.75824-0.081444-0.17189-0.18753-0.37952-0.32217-0.6173l-0.0038643-0.006813-0.0038452-0.0068474c-0.73858-1.3149-1.9856-2.9815-3.4213-4.5723-2.5424-2.8227-5.5711-5.3757-8.531-7.192-1.5679-0.96424-3.075-1.6997-4.483-2.1882l-0.0027218-9.5367e-4 -0.002739-9.5367e-4c-1.3341-0.4648-2.5492-0.70048-3.6115-0.70048-0.67414 6.9237e-4 -1.2784 0.1262-1.8482 0.38369-0.80206 0.36251-1.495 0.97868-2.0035 1.7818-0.48989 0.77266-0.76948 1.6927-0.76843 2.5264 4.7684e-5 0.18011 0.0033503 0.35826 0.0098896 0.53415 2.3902-0.99714 4.903-1.5169 7.4088-1.5209h0.0050917 0.0051079c1.4863 9.9945e-4 2.9185 0.19238 4.257 0.56883 2.3998 0.67531 4.4633 1.9499 5.968 3.686 0.87177 1.0047 1.5453 2.1512 2.0001 3.4055 0.44736 1.2304 0.67521 2.5491 0.67588 3.9157h1.9073e-6c0.0024109 1.8206-0.41634 3.604-1.211 5.1578-0.58834 1.1552-1.3778 2.1925-2.3468 3.0834-1.2676 1.1649-2.7985 2.0447-4.551 2.6156l-0.0033073 0.0010757-0.0033226 0.0010757c-1.4868 0.48182-3.097 0.72663-4.7858 0.72765-2.3772-9.5367e-4 -4.7658-0.47055-7.1038-1.3958-0.10527-0.04174-0.21021-0.084351-0.31469-0.12778zm25.451-46.118c-0.83252 0-1.751 0.27958-2.5199 0.76709-0.80548 0.51002-1.4216 1.2027-1.7841 2.0046-0.25706 0.56917-0.38245 1.1731-0.38279 1.8452-9.3842e-4 1.0637 0.23449 2.2794 0.69977 3.615 0.49052 1.4121 1.2264 2.9201 2.1886 4.4857 1.8181 2.9619 4.3714 5.9909 7.1907 8.531 1.595 1.4389 3.2618 2.6861 4.5752 3.424l0.004631 0.0026169 0.004631 0.0026131c0.24036 0.13577 0.44948 0.24249 0.62219 0.32427 0.19633-0.093006 0.45034-0.22353 0.76012-0.40296l0.0034142-0.0019722 0.003418-0.0019684c1.2322-0.71083 2.7212-1.8208 4.1926-3.1256l0.0021248-0.0018768 0.0021057-0.0018768c3.4467-3.0486 6.5923-6.9635 8.4143-10.472l0.002121-0.0040932 0.00214-0.004076c1.2322-2.3611 1.9083-4.6196 1.9035-6.3593l-1.5259e-5 -0.0061388v-0.0061378c0-0.67037-0.12497-1.2724-0.38203-1.8406-0.24084-0.53358-0.59035-1.0148-1.0405-1.4339l-0.0031242-0.0029068-0.0031204-0.002924c-0.88046-0.82297-2.1256-1.3342-3.2495-1.3342h-0.0080605c-0.1834 2.5368e-4 -0.36407 0.0036812-0.54194 0.010292 0.043171 0.10393 0.08556 0.20836 0.12705 0.31305 0.92601 2.3394 1.3957 4.728 1.3967 7.1012 0 1.6922-0.24506 3.304-0.7284 4.7928-0.57257 1.7573-1.4524 3.2883-2.6166 4.5548-0.88968 0.96787-1.9257 1.7568-3.0795 2.3452-1.5494 0.79363-3.3288 1.213-5.1465 1.213h-0.009552-0.005722c-1.3667-6.4087e-4 -2.6855-0.22849-3.9198-0.67725-1.248-0.45245-2.3936-1.1252-3.4012-1.9983-1.7365-1.5049-3.011-3.5683-3.6863-5.9675-0.37663-1.3402-0.56791-2.7721-0.569-4.2576v-0.0058775l1.5259e-5 -0.0058613c0.0047035-2.506 0.52468-5.0189 1.5209-7.4076-0.17459-0.0064688-0.35121-0.0097322-0.52989-0.0097837h-0.0087395z"/>
      <path id="ccsWidget" d="m34.059 89.251c4.2657 0 7.8291-1.187 10.574-3.0616 0.86382 0.5879 1.7971 1.1177 2.8205 1.5553 2.2302 0.95526 4.8283 1.5063 7.7553 1.5063h0.0060501c2.5204-0.0013428 4.9899-0.7539 7.1132-2.097 2.1227-1.3433 3.9091-3.2907 5.0048-5.7105 0.72978-1.6112 1.1446-3.4296 1.1439-5.3715-0.0014572-2.1609-0.4426-4.3232-1.1766-6.4331-0.49714-1.4262-1.1304-2.8303-1.8624-4.2012 1.3709 0.73112 2.7751 1.3651 4.2013 1.8616 2.1106 0.73396 4.2721 1.1758 6.4331 1.1765h0.0053329c1.9398 0 3.7563-0.41413 5.3661-1.1432 2.4197-1.0957 4.368-2.8828 5.7112-5.0047 1.3424-2.1234 2.0949-4.5927 2.097-7.1139 0-2.9291-0.55104-5.5289-1.507-7.7608-0.43761-1.0234-0.96738-1.9567-1.5553-2.8204 1.8779-2.7496 3.0658-6.3211 3.0616-10.597-0.0056381-3.3601-1.3333-6.6309-3.6374-9.1103-1.1531-1.239-2.558-2.2786-4.1708-3.0077-1.6079-0.72783-3.4237-1.1432-5.361-1.1432-0.0033188 0-0.0064621 1.9073e-6 -0.0097809 3.8147e-6 -3.5154 0.0057201-7.0203 1.1553-10.33 2.8744-0.10206 0.053221-0.20278 0.11066-0.30428 0.16458 0.73198-1.371 1.3652-2.7751 1.8624-4.202 0.73396-2.1098 1.1751-4.2715 1.1766-6.4331 7.2479e-4 -1.941-0.41414-3.7601-1.1439-5.3714-1.0957-2.419-2.8821-4.3672-5.0048-5.7104-2.1233-1.3426-4.5928-2.0957-7.1132-2.0971-0.0017891-4.2725e-7 -0.003788-6.25e-7 -0.0055733-6.25e-7 -2.9275 0-5.5253 0.55092-7.7558 1.5063-1.0234 0.43756-1.9567 0.96808-2.8205 1.5552-2.7438-1.8733-6.3066-3.0609-10.57-3.0609-0.0088654 0-0.017353 4.7949e-6 -0.026226 1.4922e-5 -3.3602 5e-3 -6.6303 1.3333-9.1103 3.6368-1.2382 1.1538-2.2787 2.558-3.0077 4.1707-0.72908 1.6113-1.1446 3.4297-1.1432 5.3715 0.0056992 3.5147 1.1553 7.0196 2.8744 10.329 0.053141 0.10288 0.11064 0.20354 0.1652 0.30568-0.10212-0.05456-0.20284-0.112-0.3049-0.16522-3.3105-1.7191-6.8154-2.8687-10.33-2.8744-0.0031996-1.9073e-6 -0.0065813-3.8147e-6 -0.0097809-3.8147e-6 -1.9381 0-3.753 0.41537-5.3616 1.1432-1.6127 0.72908-3.017 1.7687-4.1708 3.0077-2.3035 2.4794-3.6311 5.7502-3.6368 9.1103-0.00492 4.2757 1.1837 7.8472 3.0609 10.597-0.5872 0.86376-1.1169 1.797-1.5552 2.8204-0.95602 2.2318-1.507 4.8317-1.5064 7.7608 0.00218 2.5211 0.7546 4.9905 2.0971 7.1139 1.3432 2.1219 3.2914 3.9091 5.7112 5.0047 1.609 0.72904 3.4264 1.1432 5.3653 1.1432h0.0053329c2.1616-7.019e-4 4.3233-0.44254 6.4338-1.1765 1.4262-0.49648 2.8303-1.1305 4.2019-1.8624-0.05456 0.10208-0.11206 0.2028-0.1652 0.30498-1.7191 3.3098-2.8687 6.8146-2.8744 10.329-0.0014 1.9418 0.41416 3.7602 1.1432 5.3715 0.729 1.6127 1.7694 3.0176 3.0077 4.1708 2.48 2.3035 5.7501 3.6318 9.1103 3.6374 0.0075684 7.6294e-6 0.015461 1.5259e-5 0.023026 1.5259e-5m10.581-24.394c-0.0049629 0-0.0098 7.6294e-6 -0.014763 1.5259e-5h-0.0071487c-0.83435 0-1.6395 0.13616-2.3808 0.40632-0.74324 0.26882-1.4184 0.67234-1.9921 1.1695-1.1539 1.0006-1.895 2.3417-2.3014 3.7856-0.27164 0.9666-0.39992 1.99-0.4007 3.0425 0.0050011 2.653 0.80568 5.514 2.4361 8.1174 0.43122 0.6879 0.92764 1.3553 1.4801 1.9949-0.4021 0.22696-0.81774 0.44396-1.2624 0.63477-1.7042 0.72908-3.7368 1.1772-6.1615 1.178-0.0034256 7.6294e-6 -0.0069084 7.6294e-6 -0.010334 7.6294e-6 -1.6974 1.5259e-5 -3.4379-0.5211-4.9292-1.4666-1.4964-0.9468-2.731-2.3056-3.475-3.9516-0.49648-1.0993-0.78152-2.3283-0.78222-3.6964-0.0014191-1.5999 0.3326-3.3246 0.95026-5.0977 0.61558-1.7716 1.5142-3.5878 2.6042-5.3608 2.1779-3.5488 5.1267-6.9188 8.0124-9.5187 1.9205-1.7326 3.8204-3.1261 5.3835-4.0041 0.89004-0.5029 1.673-0.83262 2.2191-0.97586 0.28016-0.075897 0.49148-0.099998 0.60348-0.10076h0.013542c0.0049744-1.297e-4 0.010208-1.9836e-4 0.01564-1.9836e-4 0.17191 0 0.57149 0.065815 1.0851 0.25554 0.5318 0.19292 1.1893 0.50494 1.914 0.9241 1.4532 0.83826 3.1765 2.102 4.9296 3.6565 3.5127 3.107 7.1543 7.3934 9.4266 11.77 1.5219 2.9162 2.4212 5.8544 2.4141 8.4528 0 1.3674-0.2851 2.5972-0.78216 3.6964-0.49584 1.0978-1.2085 2.0659-2.0738 2.8722-1.723 1.6099-4.0583 2.546-6.3197 2.546-0.0069237 0-0.013519-1.5259e-5 -0.020443-3.0518e-5 -3.0595-0.0042419-5.4863-0.7142-7.4274-1.8141 1.2468-1.4432 2.1935-3.0389 2.8389-4.6673 0.7192-1.8162 1.0794-3.675 1.0802-5.4444 0-1.1843-0.16106-2.3318-0.50848-3.402-0.34826-1.0681-0.88442-2.0659-1.6497-2.8992-0.50988-0.55386-1.1205-1.0305-1.8162-1.3844-0.92139-0.47161-1.9828-0.71838-3.0915-0.71838m-0.014763 4.0637c0.4028 6.2561e-4 0.72478 0.063805 0.9993 0.16235 0.27368 0.099937 0.50488 0.23828 0.7219 0.42406 0.42768 0.36808 0.8092 0.96668 1.0475 1.8134 0.1581 0.56034 0.24824 1.2199 0.24748 1.9404 0.004982 1.8184-0.5808 4.0013-1.8134 5.955-0.3503 0.55674-0.7553 1.0915-1.207 1.6028-0.98014-1.1112-1.7184-2.3502-2.2184-3.6104-0.53968-1.3589-0.79496-2.7368-0.79426-3.9474-7.019e-4 -0.80994 0.11346-1.5439 0.3099-2.1461 0.19644-0.6049 0.47022-1.0723 0.77512-1.4034 0.20496-0.22202 0.42338-0.388 0.67086-0.51494 0.33056-0.16662 0.72274-0.27306 1.261-0.2758m31.441-44.082c0.0019531 0 0.0036392 0 0.0055923 1.9073e-6 1.3674 0.0014 2.5964 0.2865 3.6957 0.78292 1.646 0.74394 3.0048 1.9787 3.9522 3.475 0.94682 1.4942 1.4681 3.2381 1.4659 4.9395-6.4087e-4 2.4248-0.44884 4.4566-1.1779 6.1615-0.19082 0.44468-0.40712 0.85954-0.63478 1.2623-0.63898-0.55244-1.3063-1.0489-1.9942-1.4801-2.6042-1.6304-5.465-2.4319-8.1181-2.4361-1.0525 7.1716e-4 -2.0758 0.12912-3.0424 0.40076-1.444 0.40634-2.785 1.1475-3.7857 2.3013-0.49712 0.5738-0.89994 1.249-1.1694 1.9921-0.27094 0.74326-0.4071 1.551-0.40634 2.3878-0.0014572 1.1141 0.2446 2.1801 0.71838 3.1063 0.3546 0.69574 0.83044 1.3064 1.3843 1.8163 0.83332 0.76518 1.8311 1.3014 2.8992 1.6496 1.0709 0.34678 2.2177 0.50774 3.402 0.50846 1.7694-7.2098e-4 3.6283-0.36102 5.4445-1.0801 1.6284-0.64534 3.224-1.5921 4.6672-2.8389 1.1 1.9404 1.8099 4.3679 1.8142 7.4267 0.0056381 2.2686-0.93044 4.6125-2.5461 6.3409-0.80626 0.86518-1.7743 1.5779-2.8722 2.0736-1.0992 0.4972-2.3283 0.78158-3.6964 0.78228-0.0090408 2.2888e-5 -0.018372 3.8147e-5 -0.02742 3.8147e-5 -2.5917 0-5.5193-0.89749-8.4254-2.4141-4.3764-2.2723-8.6621-5.914-11.769-9.4274-1.5553-1.7523-2.819-3.4757-3.6573-4.9295-0.4191-0.72414-0.73112-1.3816-0.9241-1.9135-0.19566-0.53046-0.25952-0.93828-0.25524-1.1007v-0.013458c7.2098e-4 -0.11206 0.024841-0.32336 0.10066-0.60354 0.14394-0.54602 0.47302-1.3297 0.97584-2.219 0.87864-1.563 2.2716-3.463 4.0041-5.3835 2.5999-2.8857 5.9699-5.8352 9.5187-8.0125 1.7731-1.0907 3.5893-1.9892 5.3616-2.6041 1.7708-0.61697 3.4931-0.95102 5.092-0.95102m-70.187 22.949c1.4425 1.2468 3.0389 2.1936 4.6665 2.8389 1.817 0.71906 3.6751 1.0794 5.4452 1.0801 1.1843-7.2098e-4 2.3311-0.16168 3.4012-0.50846 1.0687-0.34818 2.0666-0.88442 2.8992-1.6496 0.55456-0.50988 1.0305-1.1205 1.3843-1.8163 0.4745-0.9262 0.7207-1.9921 0.71922-3.1063 0-0.83684-0.13618-1.6446-0.4064-2.3878-0.26946-0.74318-0.67228-1.4183-1.1702-1.9921-0.99994-1.1538-2.3417-1.8949-3.7857-2.3013-0.96584-0.27164-1.9893-0.40004-3.0416-0.40076-2.6538 0.0042381-5.514 0.80568-8.1182 2.4361-0.68786 0.4312-1.3553 0.92762-1.9943 1.4801-0.22766-0.4028-0.44396-0.81766-0.6347-1.2623-0.72906-1.7049-1.178-3.7367-1.1787-6.1615-0.00212-1.7014 0.51918-3.4453 1.4666-4.9395 0.94758-1.4964 2.3063-2.7311 3.9523-3.475 1.0986-0.49642 2.3283-0.78152 3.6956-0.78292 0.0018559-1.9073e-6 0.0037374-1.9073e-6 0.0055943-1.9073e-6 1.5991 0 3.3212 0.33402 5.0921 0.95102 1.7722 0.6149 3.5879 1.5134 5.3615 2.6041 3.548 2.1772 6.9188 5.1267 9.5181 8.0125 1.7332 1.9205 3.1261 3.8205 4.0041 5.3835 0.5036 0.8893 0.83256 1.673 0.97654 2.219 0.07584 0.28018 0.09996 0.49148 0.09996 0.60354v0.013458c0.004303 0.1624-0.058857 0.57022-0.25458 1.1007-0.19364 0.53186-0.50488 1.1893-0.92476 1.9135-0.83832 1.4538-2.1021 3.1772-3.6566 4.9295-3.107 3.5134-7.3934 7.1551-11.769 9.4274-2.9059 1.5165-5.8338 2.4141-8.4262 2.4141-0.0092096 0-0.018229-1.5259e-5 -0.02743-3.8147e-5 -1.3673-6.9427e-4 -2.5963-0.28508-3.6956-0.78228-1.0978-0.4957-2.0659-1.2084-2.8722-2.0736-1.6155-1.7283-2.5518-4.0722-2.5461-6.3409 0.00352-3.0588 0.7142-5.4863 1.8141-7.4267m41.793-0.11482c-0.46592-0.1951-0.92622-0.36172-1.3822-0.48442-0.3241-0.086559-0.64888-0.15034-0.97802-0.19152l-0.07156-0.047501h-0.6156c-0.85672 0.003521-1.6602 0.20138-2.4893 0.4993-0.18366 0.06662-0.36882 0.14112-0.55526 0.21914 0.19432-0.46384 0.36024-0.9227 0.48296-1.3772 0.085777-0.32416 0.15028-0.64894 0.19078-0.97796l0.048161-0.07238v-0.61484c-0.0042381-0.85748-0.20208-1.6603-0.49924-2.4893-0.066677-0.18226-0.14046-0.36594-0.21778-0.55104 0.18444 0.077343 0.36812 0.15176 0.55038 0.21844 0.82904 0.29716 1.6325 0.495 2.4893 0.49924h0.6156l0.07156-0.048222c0.32914-0.0411 0.65392-0.10494 0.97802-0.19144 0.45454-0.12198 0.91346-0.28798 1.3779-0.4823-0.077961 0.1858-0.15316 0.37164-0.21984 0.55532-0.2978 0.82904-0.49572 1.6318-0.4993 2.4893v0.61484l0.047577 0.07238c0.041142 0.32902 0.10494 0.6538 0.19142 0.97796 0.12272 0.45596 0.2894 0.91622 0.48444 1.3822m25.58-6.0636c0.0027161 0 0.0053177 0 0.0080338 3.8147e-6 0.0034027-3.8147e-6 0.0069046-3.8147e-6 0.010307-3.8147e-6 1.2088 0 2.5821 0.25606 3.937 0.79422 1.2602 0.49928 2.4999 1.2375 3.6105 2.2184-0.51058 0.45108-1.046 0.85666-1.6027 1.2071-1.9456 1.2274-4.1179 1.8134-5.9324 1.8134-0.0076752 0-0.015083-1.1444e-5 -0.022743-3.0518e-5 -0.72054 0-1.3801-0.089359-1.9403-0.24752-0.84678-0.23902-1.4453-0.62054-1.8135-1.0475-0.18578-0.21702-0.32406-0.44822-0.42408-0.72202-0.098541-0.27446-0.16092-0.59644-0.16171-0.99926 0.002182-0.5382 0.10857-0.93044 0.27525-1.2609 0.12694-0.24746 0.29285-0.4666 0.51488-0.67086 0.33112-0.30498 0.7985-0.57872 1.4035-0.77518 0.60068-0.19576 1.3313-0.30984 2.1379-0.30984m-57.272 0c0.0034771 0 0.0068312 0 0.010306 3.8147e-6 0.0026693-3.8147e-6 0.0053654-3.8147e-6 0.0080328-3.8147e-6 0.80667 0 1.5371 0.11407 2.138 0.30984 0.60496 0.19646 1.0716 0.4702 1.4035 0.77518 0.22132 0.20426 0.388 0.4234 0.51488 0.67086 0.16662 0.3305 0.27306 0.72274 0.27524 1.2609-7.8011e-4 0.40282-0.06316 0.7248-0.16246 0.99926-0.09996 0.2738-0.2376 0.505-0.4234 0.72202-0.36812 0.42692-0.96662 0.80844-1.8135 1.0475-0.5602 0.15816-1.2204 0.24752-1.9403 0.24752-0.0075502 1.9073e-5 -0.01518 3.0518e-5 -0.022742 3.0518e-5 -1.8145 0-3.9866-0.58599-5.9331-1.8134-0.55596-0.35042-1.0914-0.756-1.6021-1.2071 1.1106-0.98084 2.3495-1.7191 3.6098-2.2184 1.3556-0.53813 2.729-0.79422 3.9378-0.79422m18.046-37.544c0.0033226 0 0.0066261 1.9073e-6 0.0099487 6.1989e-6 2.4247 7.1955e-4 4.4573 0.44968 6.1615 1.1787 0.44462 0.19008 0.86026 0.4071 1.2624 0.6347-0.55244 0.63906-1.0489 1.3064-1.4801 1.9942-1.6304 2.6042-2.4311 5.4643-2.4361 8.1182 7.782e-4 1.0525 0.12906 2.0751 0.4007 3.0417 0.4064 1.4439 1.1475 2.7857 2.3014 3.7857 0.57364 0.49706 1.2488 0.90064 1.9921 1.1701 0.7433 0.27024 1.551 0.4064 2.3879 0.4064 0.0031967 3.8147e-6 0.0063934 7.6294e-6 0.0095863 7.6294e-6 1.1106 0 2.1738-0.24601 3.0967-0.71909 0.69572-0.35396 1.3063-0.82972 1.8162-1.3844 0.76524-0.83254 1.3014-1.8304 1.6497-2.8992 0.34742-1.0701 0.50848-2.2169 0.50848-3.4012-8.0109e-4 -1.7702-0.36096-3.6283-1.0802-5.4452-0.64536-1.6284-1.5921-3.224-2.8389-4.6672 1.941-1.0999 4.3679-1.8099 7.4274-1.8141 0.0059547-1.3351e-5 0.011913-1.955e-5 0.017864-1.955e-5 2.2624 0 4.5985 0.93548 6.3223 2.5467 0.86526 0.80568 1.5779 1.7737 2.0738 2.8723 0.49706 1.0985 0.78216 2.3283 0.78216 3.6956 0.0070953 2.5992-0.89218 5.5374-2.4141 8.4536-2.2723 4.3757-5.9139 8.6621-9.4266 11.769-1.7531 1.5546-3.4764 2.8183-4.9296 3.6566-0.72476 0.4198-1.3822 0.73118-1.914 0.9241-0.51362 0.18967-0.91325 0.25549-1.0851 0.25549-0.0054245 0-0.010609-6.485e-5 -0.015572-1.9455e-4h-0.013542c-0.112-7.2098e-4 -0.32332-0.024178-0.60348-0.10074-0.5461-0.14322-1.329-0.47308-2.2191-0.97584-1.563-0.878-3.463-2.2716-5.3835-4.0041-2.8857-2.5999-5.8345-5.97-8.0124-9.5181-1.09-1.7737-1.9886-3.5892-2.6042-5.3615-0.61766-1.773-0.95168-3.4971-0.95026-5.0977 7e-4 -1.3674 0.28574-2.5971 0.78222-3.6963 0.74402-1.6461 1.9786-3.0041 3.475-3.9516 1.4914-0.94559 3.2321-1.4666 4.9296-1.4666m10.595 4.3672c0.45172 0.51128 0.85672 1.0467 1.207 1.6028 1.2326 1.9539 1.8184 4.1367 1.8134 5.9558 7.6294e-4 0.71978-0.089378 1.3801-0.24748 1.9403-0.2383 0.84608-0.61982 1.4453-1.0475 1.8127-0.21702 0.1858-0.44822 0.32416-0.7219 0.42416-0.27452 0.099241-0.5965 0.16162-0.9993 0.16234-0.53828-0.0021191-0.93046-0.10918-1.261-0.27582-0.24748-0.127-0.4659-0.29292-0.67086-0.51424-0.3049-0.3319-0.57868-0.7992-0.77512-1.4042-0.19644-0.60214-0.3106-1.3354-0.3099-2.1453-7.019e-4 -1.2113 0.25458-2.5886 0.79426-3.9481 0.50002-1.2602 1.2383-2.4991 2.2184-3.6105m-10.562 89.819l-0.03812-4.5776e-5c-5.6294-0.0094376-11.035-2.1556-15.22-6.0431-2.1727-2.0235-3.8802-4.3954-5.0838-7.058-1.1039-2.4396-1.742-5.0295-1.9021-7.7147-2.6917-0.16103-5.2827-0.79977-7.7215-1.9048-3.9344-1.7815-7.2551-4.6826-9.6012-8.3888-2.2822-3.6096-3.489-7.7299-3.4926-11.92-8.2016e-4 -3.7723 0.65214-7.3339 1.9421-10.604-1.2831-3.2636-1.9457-6.8466-1.9414-10.592 0.0094995-5.6358 2.1557-11.041 6.0433-15.226 2.0222-2.1715 4.394-3.879 7.0568-5.0827 2.4397-1.1039 5.0295-1.742 7.7148-1.9022 0.16066-2.6883 0.79879-5.2768 1.9031-7.7173 1.2014-2.6577 2.9082-5.0289 5.0718-7.045 4.1968-3.898 9.6027-6.0439 15.232-6.0523 3.7578-1.3351e-5 7.3377 0.66265 10.594 1.9417 3.265-1.2886 6.8259-1.9423 10.592-1.9423 4.1981 0.0023203 8.3212 1.2092 11.929 3.4901 3.7086 2.3468 6.61 5.6672 8.3932 9.6039 1.1061 2.4421 1.745 5.0337 1.9054 7.7222 2.6938 0.16181 5.2812 0.79994 7.718 1.903 2.6608 1.2029 5.0332 2.911 7.0473 5.0751 3.8931 4.1892 6.0399 9.5951 6.0493 15.227 0.0037079 3.7499-0.65893 7.3337-1.9418 10.597 1.2888 3.2661 1.9426 6.8281 1.9426 10.596-0.0035248 4.1973-1.2103 8.3176-3.4898 11.923-2.3489 3.7105-5.6696 6.6116-9.606 8.394-2.4401 1.1051-5.0311 1.7437-7.7197 1.9042-0.16072 2.6892-0.7996 5.2803-1.9052 7.7213-1.7823 3.936-4.6838 7.2567-8.3903 9.6023-3.6084 2.2825-7.7301 3.4897-11.921 3.4919-3.7721 0-7.3331-0.65295-10.601-1.9419-3.2535 1.2792-6.8252 1.9419-10.559 1.9419z" fill="#000"/>
      </g>
   </svg>
</div>`,

   `<div class="ccs-popup-background" id="ccsPopupBackground"> <div class="ccs-popup"> <p class="ccs-promotion-title"> CONDIÇÃO ESPECIAL <br><span>Assinante Estética Experts</span> </p><img class="ccs-popup-img" src="https://blog.clinicaexperts.com.br/wp-content/uploads/2021/06/ccs_popup_image.png" alt="Logo da Comunidade da Clínica Sortuda" > <div class="ccs-popup-content"> <div class="ccs-popup-close-parent" id="ccsPopUpClose"> <p class="ccs-popup-close" id="ccsPopUpClose">x</p> </div><g id="Grupo_4714" data-name="Grupo 4714" transform="translate(-317.586 -92.586)"> <path id="Caminho_579" data-name="Caminho 579" d="M-1459.5-62l17-16" transform="translate(1778.5 172)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/> <path id="Caminho_637" data-name="Caminho 637" d="M-1442.5-62l-17-16" transform="translate(1778.5 172)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/> </g> </svg> <h2 class="ccs-popup-title">Aproveite 1 ano de Clínica Experts + Comunidade da Clínica Sortuda</h2> <p class="ccs-popup-subtitle">Gerencie seu negócio de estética com o melhor sistema da estética e participe da comunidade da clínica sortuda com aulas semanais sobre marketing, gestão e empreendedorismo.</p><div class="ccs-popup-buttons"> <a href="http://app.clinicaexperts.com.br/suporte/wa-clinica-sortuda" target="_blank"> <button class="ccs-popup-button"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 720.000000" preserveAspectRatio="xMidYMid meet"> <metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata> <g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M6255 6844 c-540 -35 -1107 -229 -1555 -532 -473 -320 -848 -752 -1091 -1256 -133 -276 -216 -536 -273 -856 -43 -240 -52 -602 -22 -880 40 -374 177 -822 362 -1188 l53 -103 -123 -367 c-68 -202 -191 -570 -274 -818 -84 -249 -152 -459 -152 -469 0 -9 13 -22 29 -28 26 -10 29 -14 24 -45 -6 -32 -5 -34 18 -27 41 13 936 298 1314 420 198 63 368 115 378 115 9 0 52 -17 95 -39 366 -184 756 -294 1171 -332 164 -14 498 -7 659 16 954 132 1766 659 2266 1468 163 264 318 632 401 952 79 307 117 688 96 982 -54 781 -356 1473 -881 2017 -509 527 -1157 853 -1895 952 -108 14 -482 26 -600 18z m391 -684 c357 -29 650 -108 959 -259 419 -206 770 -514 1030 -906 200 -301 323 -625 371 -979 23 -168 23 -508 0 -680 -163 -1209 -1161 -2141 -2372 -2217 -427 -26 -824 44 -1212 214 -107 47 -284 143 -339 183 -17 13 -39 24 -49 24 -9 0 -222 -65 -472 -145 -250 -80 -456 -145 -457 -143 -2 2 62 197 141 433 79 237 144 442 144 458 0 16 -18 53 -44 90 -418 599 -554 1426 -351 2127 45 152 82 245 155 390 200 391 505 732 880 982 473 316 1064 472 1616 428z"/> <path d="M5323 5236 c-23 -7 -56 -23 -75 -34 -51 -32 -199 -190 -245 -262 -147 -229 -180 -534 -92 -832 67 -225 149 -397 299 -629 190 -292 313 -450 510 -653 296 -305 545 -476 927 -635 282 -118 490 -185 607 -197 81 -8 258 20 362 58 144 52 309 168 373 262 64 96 130 313 138 457 l6 95 -31 36 c-22 24 -112 78 -294 176 -432 232 -487 254 -555 218 -17 -8 -81 -73 -141 -143 -178 -207 -215 -243 -245 -243 -38 0 -287 127 -403 205 -135 92 -223 166 -334 281 -132 137 -275 333 -355 486 l-18 36 72 79 c95 101 134 162 172 268 39 108 37 141 -20 290 -51 133 -92 243 -163 434 -58 157 -101 221 -161 240 -57 17 -287 22 -334 7z"/> </g> </svg> Fale com um consultor </button> </a> </div></div></div></div>`,
];

function ccs_widget_setup() {
	ccs_widget_renderTemplate();

   if (!ccs_widget_testMode) {
		let node = document.createElement("div");
		node.id = "ccsWidget";
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

function ccs_widget_renderTemplate() {
   const ccs_widget_normalize = 
   `<style> 
      .ccs-popup h1{font-size:2em;margin:.67em 0}.ccs-popup p{margin:0}.ccs-popup a{background-color:transparent;text-decoration:none;color:currentColor}.ccs-popup strong,b{font-weight:bolder}.ccs-popup img{border-style:none}.ccs-popup textarea,button,input,optgroup,select{font-family:inherit;font-size:100%;line-height:1.15;margin:0}.ccs-popup input,button{overflow:visible}.ccs-popup select,button{text-transform:none}.ccs-popup button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}.ccs-popup button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}.ccs-popup button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}
   </style>`;
	const ccs_widget_style =
	`<style>
      @media (max-width:568px){.ccs-popup-close-parent{top:5px!important;right:5px!important}.ccs-popup{right:calc((100vw - 376px)/ 2)!important}.ccs-widget{right:10px!important;bottom:10px!important;width:80px!important;height:80px!important}.hide-ccs-widget-parent{width:9px!important;height:9px!important;bottom:97.5px!important;right:10px!important}.hide-ccs-widget{width:9px!important;height:9px!important}}@media (max-width:375px){.ccs-widget{right:10px!important;bottom:10px!important;width:70px!important;height:70px!important}.ccs-popup{width:310px!important;bottom:50px!important;right:calc((100vw - 310px)/ 2)!important}.ccs-promotion-title{font-size:23px!important;top:20px!important;right:30px!important}.ccs-promotion-title span{font-size:21px!important}.ccs-popup-title{font-size:23px!important}.ccs-popup-subtitle{font-size:16px!important}.ccs-popup-button{width:250px!important}.hide-ccs-widget-parent{width:9px!important;height:9px!important;bottom:87.5px!important;right:7.5px!important}.hide-ccs-widget{width:9px!important;height:9px!important}}@media (max-width:360px){.ccs-popup{bottom:20px!important}}@media (max-width:320px){.ccs-promotion-title{font-size:22px!important;right:45px!important}.ccs-promotion-title span{font-size:19px!important}.ccs-popup-title{font-size:21px!important}.ccs-popup-subtitle{font-size:15px!important}.ccs-popup-button{font-size:15px!important}}.hide-ccs-widget-parent{width:12.5px;height:12.5px;position:fixed;bottom:165px;right:30px;z-index:99999;margin:0;padding:0}.hide-ccs-widget{width:12.5px;height:12.5px}.ccs-widget{display:none;cursor:pointer;position:fixed;right:35px;bottom:35px;width:125px;height:125px;z-index:99999}.ccs-widget-img{animation:shake 3s;animation-iteration-count:infinite}.ccs-popup-background{font-family:Barlow,sans-serif!important;display:none;width:100vw;height:100vh;background-color:rgb(71,74,89,.5);cursor:pointer;position:fixed;bottom:0;left:0;z-index:99999}.ccs-popup-background.opened{display:flex}.ccs-popup{cursor:default;width:376px;height:auto;background-color:#fff;position:fixed;bottom:35px;right:35px;border-radius:16px;z-index:99999}.ccs-popup-close-parent{font-size:1.4rem;position:absolute;top:15px;right:15px;width:20px;height:20px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;cursor:pointer}.ccs-promotion-title{font-weight:600;color:#fff;font-size:26px;top:30px;right:50px;text-align:center;position:absolute;font-weight:700;line-height:1.6rem}.ccs-promotion-title span{color:#afafaf;font-weight:200;font-size:24px}.ccs-popup-img{border-top-left-radius:14px;border-top-right-radius:14px;height:auto;width:100%}.ccs-popup-content{padding:0 20px}.ccs-popup-title{color:#000;line-height:1.6rem;font-weight:600;font-size:26px;margin-top:-10px;margin-bottom:10px}.ccs-popup-subtitle{line-height:1.2rem;margin-top:5px;font-size:18px;color:#707070;line-height:1.175em}.ccs-popup-buttons{margin:20px 0;width:100%;display:flex;justify-content:center;align-items:center}.ccs-popup-button{width:300px;height:40px;text-align:center;border-radius:6px;border:solid 2px #4ced6b;background-color:#4ced6b;font-size:16px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center}.ccs-popup-button svg{width:37.5px;height:auto}@keyframes shake{0%{transform:translate(2px,2px) rotate(0)}10%{transform:translate(-2px,-3px) rotate(-1deg)}20%{transform:translate(-4px,-1px) rotate(1deg)}30%{transform:translate(4px,3px) rotate(0)}40%{transform:translate(2px,-2px) rotate(1deg)}50%{transform:translate(-2px,3px) rotate(-1deg)}60%{transform:translate(-4px,2px) rotate(0)}70%{transform:translate(4px,2px) rotate(-1deg)}80%{transform:translate(-2px,-2px) rotate(1deg)}100%{transform:translate(2px,2px) rotate(0)}}
   </style>`;
   
	ccs_widget_template = ccs_widget_normalize + ccs_widget_style + ccs_widget_templateParts[0];
	ccs_widget_template += ccs_widget_templateParts[1];
};

window.addEventListener('DOMContentLoaded', function() {	
   console.log('CCS Widget added');
   ccs_widget_setup();
});
setTimeout(() => {
    if (ccs_widget_template == undefined) {
        ccs_widget_setup();
    }
}, 5000);

