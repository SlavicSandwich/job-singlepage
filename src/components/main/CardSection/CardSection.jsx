import Card from "./Card.jsx";

export default function CardSection() {
    return (
        <section className="h-fit w-full text-black mt-20 mx-auto ">
            <div
                className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 my-48">
                <div className="w-full">
                    <div className={"-mx-4 flex-wrap p-8 flex"}>
                        <Card
                            smallText={"A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."}
                            bigText={"DAPP Development"}
                            image={"./src/img/index/ClipBoardCheck.svg"}/>
                        <Card
                            smallText={"A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."}
                            bigText={"DAPP Development"}
                            image={"./src/img/index/Charm.svg"}/>
                        <Card
                            smallText={"Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."}
                            bigText={"Web 3.0 Development"}
                            image={"./src/img/index/Checked.svg"}/>
                        <Card bigText={"Project Audit"}
                              smallText={"A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld."}
                              image={"./src/img/index/Happy.svg"}/>
                        <Card bigText={"Hacking / RE"}
                              smallText={"A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."}
                              image={"./src/img/index/Hashtag.svg"}/>
                        <Card bigText={"Bot/Script Development"}
                              smallText={"Bot development frameworks were created as advanced software tools eliminate a large"}
                              image={"./src/img/index/www.svg"}/>
                    </div>
                </div>
                <button type="button"
                        className="ml-auto mr-auto text-black text-center rounded-3xl text-2xl  w-fit hover:text-white border border-gray-800 hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium py-2.5 me-2">
                    Загрузить еще
                </button>
            </div>


        </section>
    )
}