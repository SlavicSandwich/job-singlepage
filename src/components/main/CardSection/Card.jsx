export default function Card({image, span, bigText, smallText}) {
    return (
        <div
            className={"max-w-sm bg-opacity-60 bg-black border border-gray-200 rounded-xl shadow " + span}>
            <a href="#">
                <img className="rounded-t-lg rounded-b-2xl" src={image} alt=""/>
            </a>
            <div className="p-5 rounded-t-2xl">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {bigText}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white ">{smallText}</p>
            </div>
        </div>

    )
}