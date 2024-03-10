export default function Footer() {
    return (
        <footer className="bg-black relative z-10">
            <div className="mx-auto min-h-fit w-lvw max-w-screen-xl flex flex-col justify-between pt-20" >
                <div
                    className=" flex pb-60 w-full justify-center align-middle flex-col gap-16 md:grid-cols-4">
                    <img src={"./src/img/index/oko.svg"} alt={"eye logo here"} className="w-1/5 mx-auto"/>
                    <p className="leading-tight text-center text-4xl font-bold text-gray-900 uppercase dark:text-white">Давайте
                        работать вместе.</p>
                    <div className="flex justify-center gap-8 align-middle ">
                        <button type="button"
                                className="text-center rounded-3xl text-2xl  w-fit text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium py-2.5 me-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Свяжитесь с нами
                        </button>
                        <button type="button"
                                className=" text-center rounded-3xl text-2xl w-fit  text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium py-2.5 me-2 mb-2 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Узнать больше
                        </button>
                    </div>
                </div>
                <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-between border-t-2 border-t-gray-500">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">©
                        2024 Oko™. Все права защищены.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="#"
                           className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Дизайн от TitanTech
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}