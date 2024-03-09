export default function Hero(){
    return (
        <div className={"w-full h-lvh box-border leading-relaxed text-5xl relative z-10 text-white text-center"}>
            <div className={"absolute right-0 left-0 pt-20 flex flex-col gap-10"}>
                <img src={"./src/img/index/0_oko_ 3.svg"} alt={"eye logo here"} className="ml-auto mr-auto w-1/5"/>
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