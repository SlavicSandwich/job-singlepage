export default function Hero(){
    return (
        <div className={"p-introduction"}>
            <div className={"p-introduction__wrap flex flex-col gap-60"}>
                <img src={"./src/img/index/0_oko_ 3.svg"} alt={"eye logo here"} className="p-introduction__img"/>
                <div>
                    <div className={"p-introduction__row.js-transition-intro"}>
                        Всевидящее Око
                    </div>
                    <div className={"p-introduction__row.js-transition-intro"}>
                        к вашим услугам.
                    </div>
                </div>
            </div>
        </div>
    )
}