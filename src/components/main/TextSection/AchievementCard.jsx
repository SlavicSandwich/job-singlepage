export default function AchievementCard({headerText, lowerText}) {
    return (
        <div className="ml-auto mr-auto ">
            <p className="text-6xl text-blue-500 text-center sm:text-left">{headerText}</p>
            <p className={"text-2xl text-center sm:text-left"}>{lowerText}</p>
        </div>
    )
}