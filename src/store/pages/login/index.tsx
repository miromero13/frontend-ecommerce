const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      {/* <div className="max-w-screen-xl m-0 sm:m-10 bg-light-bg-primary shadow sm:rounded-lg flex justify-center flex-1"> */}
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold text-light-text-primary">
            Regístrate
          </h1>
          <div className="w-full flex-1 mt-8">
            {/* <div className="mx-auto max-w-xs mb-4">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-light-bg-secondary border border-light-border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Número de télefono" />
              </div> */}
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-light-bg-secondary text-light-text-secondary flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div className="bg-light-bg-primary p-2 rounded-full">
                  {/* +591 */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/800px-Flag_of_Bolivia.svg.png" alt="Bolivia" className="w-6 h-auto rounded-md" />
                  {/* <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4" />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853" />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04" />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335" />
                    </svg> */}
                </div>
                <span className="ml-4">
                  Regístrese con su teléfono
                </span>
              </button>
            </div>

            <div className="my-12 border-b text-center border-light-border">
              <div
                className="leading-none px-2 inline-block text-sm text-light-text-secondary tracking-wide font-medium bg-white transform translate-y-1/2">
                O regístrese con el correo electrónico
              </div>
            </div>

            <div className="mx-auto max-w-xs">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-light-bg-secondary border border-light-border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email" placeholder="Email" />
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-light-bg-secondary border border-light-border placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password" placeholder="Password" />
              <button
                className="mt-5 tracking-wide font-semibold bg-light-action text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                  Regístrate
                </span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Estoy de acuerdo en cumplir con los
                <a href="#" className="border-b border-gray-500 border-dotted px-1">
                  Términos y Condiciones
                </a>
                y su
                <a href="#" className="border-b border-gray-500 border-dotted px-1">
                  Política de Privacidad
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-light-bg-secondary text-center hidden lg:flex p-20">
        <img className="w-full object-contain"
          src="/images/login-shop.svg">
        </img>
      </div>
      {/* </div> */}
    </div>
  )
}

export default LoginPage