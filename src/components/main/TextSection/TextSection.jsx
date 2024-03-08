import AchievementCard from "./AchievementCard.jsx";

export default function TextSection() {
    return (
        <section className="mt-96">
            <div className="text-black">
                <p className="text-4xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus dolor nec risus placerat
                    rutrum porta sit amet nibh. Etiam bibendum tempor sem, in elementum diam dignissim vitae. Ut
                    tristique placerat ullamcorper. Donec porttitor porttitor ex ac cursus. Phasellus at dolor blandit,
                    hendrerit est at, rhoncus arcu. Pellentesque tincidunt ligula vitae odio scelerisque, at facilisis
                    tellus laoreet. Sed in sagittis nibh.
                </p>
                <div className="flex justify-evenly mx-52 align-middle mt-40 gap-96">
                    <AchievementCard
                        headerText={"4"} lowerText={"Больших компании"}/>
                    <AchievementCard
                         headerText={"2"} lowerText={"Года в бизнесе"}/>
                </div>
            </div>
        </section>
    )
}