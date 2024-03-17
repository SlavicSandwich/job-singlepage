export default function({image, bigText, smallText}){
    return (
        // <div className="w-full mb-10 sm:mb-0 sm:w-1/ leading-tight">
        //     <div className="relative h-full ml-0 mr-0 sm:mr-10">
        //                         <span
        //                             className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
        //         <div className="relative h-full p-5 bg-white border-2 rounded-lg">
        //             <img src={"./src/img/index/ClipBoardCheck.svg"} alt={"eye logo here"} className="mx-auto mb-7 inline-block w-1/5"/>
        //             <div className="flex items-center -mt-1">
        //                 <h3 className="my-2 text-3xl font-bold text-gray-800">{bigText}</h3>
        //             </div>
        //             <p className="mb-2 text-xl text-gray-600">{smallText}</p>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 h-[400px]  bg-white rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block">
                    <img src={image} className={"w-12"}/>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                        {bigText}
                    </h3>
                    <p className="text-base font-medium text-body-color">{smallText}</p>
                </div>
            </div>
        </div>
    )
}