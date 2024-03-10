import Card from "./Card.jsx";

export default function CardSection() {
    return (
        <section className="h-fit w-full text-black mt-20 mx-auto">
            {/*<div className="grid bg-gray-200 grid-cols-2 overflow-hidden rounded gap-1">*/}
            {/*    <Card/>*/}
            {/*    <Card/>*/}
            {/*    <Card/>*/}
            {/*    <Card/>*/}
            {/*</div>*/}
            <div
                className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 my-48">
                <div className="w-full">
                    <div className="flex flex-col w-full mb-10 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/ leading-tight2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 text-3xl font-bold text-gray-800">DAPP Development</h3>
                                    </div>
                                    <p className="mb-2 text-xl text-gray-600">A decentralized application (dapp) is an
                                        application built on a
                                        decentralized network that combines a smart contract and a frontend user
                                        interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2  rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">A decentralized application (dapp) is an
                                        application built on a
                                        decentralized network that combines a smart contract and a frontend user
                                        interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0
                                            Development</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet
                                        services that will
                                        focus on understanding and analyzing data to provide a semantic web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project,
                                        which is intended
                                        to assess the extent up to which project management standards are being
                                        upheld.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2  rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">A security hacker is someone who explores methods
                                        for breaching
                                        defenses and exploiting weaknesses in a computer system or network.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2  rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script
                                            Development</h3>
                                    </div>
                                    <p className="mb-2 text-gray-600">Bot development frameworks were created as
                                        advanced software tools
                                        that eliminate a large amount of manual work and accelerate the development
                                        process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}