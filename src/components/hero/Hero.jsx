import logo from "/src/img/index/logo.gif"
export default function Hero(){
    return (
        <div className={"w-full sm:text-5xl h-lvh box-border leading-relaxed text-2xl relative z-10 text-white text-center"}>
            <div className={"absolute right-0 left-0 pt-20 flex flex-col gap-10"}>
                <img src={logo} alt={"eye logo here"} className="ml-auto mr-auto w-1/2 md:w-1/3 xl:w-1/6"/>
                <div>
                    <div>
                        Всевидящее Око
                    </div>
                    <div>
                        к вашим услугам.
                    </div>
                </div>
            </div>
        </div>
    )
}