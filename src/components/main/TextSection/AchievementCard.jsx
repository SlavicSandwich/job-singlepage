export default function AchievementCard({headerText, lowerText}) {
    return (
        <div className="ml-auto mr-auto ">
            <p className="text-6xl text-blue-500">{headerText}</p>
            <p className={"text-2xl"}>{lowerText}</p>
        </div>
    )
}