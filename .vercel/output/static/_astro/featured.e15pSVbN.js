import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.BVOCwoKb.js";function i(){const s=[{name:"DESCUBRE",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuadc4t8BUdWKHfOIM621lGQbSXNs5CArhFxzP"},{name:"NUESTROS",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE7uIFunNQ3G5DiXUHsPJjl4xCBKmyotakWeF"},{name:"TALLERES",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE5VH1YNQ3G5DiXUHsPJjl4xCBKmyotakWeFZ"},{name:"ESTRELLA",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuyl3MHoRAsabYELF97nAUxrDB0CiN83WOwfRJ"},{name:"DEL",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuUSfmULWcIwjqbxDBoXO9VQtFgSlpMK64yH35"},{name:"MES.",imageUrl:"https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibursc6VD106UMnlq97hFP5WBS8o4GATz1XcRHd"}];return e.jsxs("div",{className:"w-full overflow-hidden bg-gray-50 py-4",children:[e.jsx("div",{className:"w-full flex items-center justify-center px-4 md:px-8 mb-4",children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row items-start md:items-center justify-between",children:[e.jsx(a,{text:"¡Inscríbete ya!",className:"mb-2 md:mb-0"}),e.jsx(a,{text:"Nuevos talleres",className:"mb-2 md:mb-0"}),e.jsx(a,{text:"Chefs invitados",className:"mb-2 md:mb-0"}),e.jsx(a,{text:"Sorteos"})]})}),e.jsxs("div",{className:"marquee-container",children:[e.jsx("div",{className:"marquee-content",children:s.map((t,l)=>e.jsx(m,{item:t},`item1-${l}`))}),e.jsx("div",{className:"marquee-content",children:s.map((t,l)=>e.jsx(m,{item:t},`item2-${l}`))})]}),e.jsx("style",{jsx:!0,children:`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `})]})}function a({text:s,className:t=""}){return e.jsxs("a",{href:"/",className:`flex flex-row gap-1 items-center ${t}`,children:[e.jsx("h2",{className:"text-gray-700 font-medium text-base md:text-lg lg:text-xl",children:s}),e.jsx("div",{className:"text-gray-700",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 17 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.1836 26.0662C6.32574 20.7266 11.2081 16.5218 16.4082 13.2568C11.1598 10.0406 6.48457 5.68956 3.19051 0.447478L0.0552734 0.447478C3.34243 5.52248 7.30636 9.93614 12.1957 13.2568C7.29945 16.6262 3.1836 21.0886 2.47955e-05 26.0662L3.1905 26.0662L3.1836 26.0662Z",fill:"currentColor"})})})]})}function m({item:s}){return e.jsxs("div",{className:"marquee-item flex items-center",children:[e.jsx("img",{src:s.imageUrl,alt:s.name,className:"h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 object-cover"}),e.jsx("h2",{className:"text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 mx-2 md:mx-6 lg:mx-10",children:s.name})]})}export{i as default};
