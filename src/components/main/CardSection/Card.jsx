export default function({image, bigText, smallText}){
    return (
        <div className="w-full mb-10 sm:mb-0 sm:w-1/ leading-tight2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                    <div className="flex items-center -mt-1">
                        <h3 className="my-2 text-3xl font-bold text-gray-800">{bigText}</h3>
                    </div>
                    <p className="mb-2 text-xl text-gray-600">{smallText}</p>
                </div>
            </div>
        </div>
    )
}