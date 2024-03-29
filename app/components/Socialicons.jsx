export default function SocialIcons() {
  return (
    <div class="m-8">
      <div className="space-x-2 flex items-center justify-evenly">

        <a href="#" class="text-neutral-600 hover:text-[#be3a3b]">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
          </span>
        </a>

        {/* <a href="#" class="text-[#be3a3b] opacity-80 hover:text-red-300"> */}
        <a href="#" class="text-neutral-600 hover:text-[#be3a3b]">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
            </svg>
          </span>
        </a>

        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </span>
        </a> */}

        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title>Email</title>
              <path d="M255.46,48.74c-114.84,0-208,93.11-208,208s93.12,208,208,208,208-93.12,208-208S370.31,48.74,255.46,48.74ZM380.28,252c-2.85,32.63-16.79,49.7-28,58.26S327.61,322.58,316,320.5a41.61,41.61,0,0,1-26.82-17.19,62.06,62.06,0,0,1-44,17.57,51.66,51.66,0,0,1-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23,3-35,30.91-57.39,56.87-61.48,27.2-4.29,52.23,6.54,62.9,19.46l3.85,4.66-6.34,50.38c-1.19,14.34,3.28,23.48,12.29,25.1,2.39.42,8.1-.13,14.37-4.93,6.72-5.15,15.14-16,17.1-38.47C354.7,223,348,200.35,333.1,184.05c-15.49-16.9-39.09-25.84-68.23-25.84-54,0-101.81,44.43-106.58,99-2.28,26.2,5.67,50.68,22.4,68.93C197.05,344,220,353.88,245.35,353.88c19,0,30.61-2.05,49.48-8.78a14,14,0,0,1,9.4,26.38c-21.82,7.77-36.68,10.4-58.88,10.4-33.28,0-63.57-13.06-85.3-36.77C138,321,127.42,288.94,130.4,254.82c2.91-33.33,18.45-64.63,43.77-88.12s57.57-36.49,90.7-36.49c37.2,0,67.93,12.08,88.87,34.93C373.83,187.05,383.25,217.89,380.28,252Z"/><path d="M252.57,221c-14.83,2.33-31.56,15.84-33.34,36.26-1,11.06,2,21.22,8.07,27.87a23.65,23.65,0,0,0,17.91,7.75c20.31,0,34.73-14.94,36.75-38.06a14,14,0,0,1,.34-2.07l3.2-25.45a49.61,49.61,0,0,0-32.93-6.3Z"/>
            </svg>
          </span>
        </a> */}

        {/* <a href="#" class="text-[#be3a3b] opacity-80 hover:text-red-300"> */}
        <a href="#" class="text-neutral-600 hover:text-[#be3a3b]">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 30 20.66">
              <title>Email</title>
              <path d="M2.48,4.1a.6.6,0,0,1,.64-.65c.25,0,10,6.17,10.56,6.53l1.53,1c.47-.32,1-.59,1.46-1,1-.66,10.1-6.54,10.35-6.54a.62.62,0,0,1,.65.65c0,.44-.84.87-1.39,1.21C22.83,7.4,19.39,9.69,16,11.87c-.2.14-.59.42-.87.38s-10.22-6.4-12-7.46c-.28-.15-.61-.3-.61-.69ZM0,2.59V19.74a1.57,1.57,0,0,0,.45,1.18,1.58,1.58,0,0,0,1.15.51H28.37A1.62,1.62,0,0,0,30,19.74V2.59A1.65,1.65,0,0,0,28.37.78H1.61a1.65,1.65,0,0,0-1.2.55A1.67,1.67,0,0,0,0,2.59Z" fill-rule="evenodd"></path>
            </svg>
          </span>
        </a>

        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Pinterest</title>
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
          </span>
        </a> */}

        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
              <title>Print</title>
              <rect x="5" width="14" height="5"/><rect x="6" y="15" width="12" height="9"/><path d="M21,7H3a3,3,0,0,0-3,3V20H4V13H20v7h4V10A3,3,0,0,0,21,7Zm-2,4H15V9h4Z"/>
            </svg>
          </span>
        </a> */}


        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <title>Email</title>
            <svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24">
              <path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/>
            </svg>
          </span>
        </a> */}

        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <title>Twitter2</title>
            <svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
              <path d="M7.514116,21.297744 C9.055546,22.284972 10.88566,22.86234 12.851206,22.86234 C19.255714,22.86234 22.759126,17.555544 22.759126,12.95442 C22.759126,12.804732 22.755562,12.653262 22.748434,12.505356 C23.429158,12.013524 24.019,11.400516 24.485884,10.701972 C23.862184,10.978182 23.19037,11.165292 22.48648,11.250828 C23.204626,10.819584 23.757046,10.137078 24.017218,9.324486 C23.343622,9.721872 22.598746,10.012338 21.805756,10.169154 C21.171364,9.491994 20.266108,9.06966 19.264624,9.06966 C17.341846,9.06966 15.782596,10.62891 15.782596,12.549906 C15.782596,12.824334 15.81289,13.089852 15.871696,13.344678 C12.97951,13.198554 10.41343,11.81394 8.695582,9.705834 C8.396206,10.220832 8.223352,10.819584 8.223352,11.455758 C8.223352,12.663954 8.838142,13.731372 9.773692,14.355072 C9.20167,14.337252 8.665288,14.180436 8.196622,13.918482 C8.19484,13.93452 8.19484,13.948776 8.19484,13.963032 C8.19484,15.650586 9.395908,17.058366 10.989016,17.377344 C10.696768,17.457534 10.388482,17.500302 10.071286,17.500302 C9.846754,17.500302 9.62935,17.477136 9.417292,17.43615 C9.859228,18.820764 11.145832,19.827594 12.669442,19.856106 C11.477284,20.789874 9.97684,21.345858 8.344528,21.345858 C8.064754,21.345858 7.786762,21.32982 7.514116,21.297744"/>
            </svg>
          </span>
        </a> */}
        
        {/* <a href="#" class="text-gray-500 hover:text-orange-800">
          <span className=" bg-gray-300 inline-block rounded-full bg-opacity-5">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a> */}

      </div>
    </div>
  );
}
