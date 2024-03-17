import AchievementCard from "./AchievementCard.jsx";

export default function TextSection() {
    return (
        <section className="w-3/4 mx-auto mt-48 sm:mt-96">
            <div className="text-black">
                <p className="text-2xl text-center sm:text-left sm:text-4xl ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus dolor nec risus placerat
                    rutrum porta sit amet nibh. Etiam bibendum tempor sem, in elementum diam dignissim vitae. Ut
                    tristique placerat ullamcorper. Donec porttitor porttitor ex ac cursus. Phasellus at dolor blandit,
                    hendrerit est at, rhoncus arcu. Pellentesque tincidunt ligula vitae odio scelerisque, at facilisis
                    tellus laoreet. Sed in sagittis nibh.
                </p>
                <div className="flex justify-evenly mx-16 sm:mx-52 align-middle mt-40 gap-10 sm:gap-96">
                    <AchievementCard
                        headerText={"4"} lowerText={"Больших компании"}/>
                    <AchievementCard
                         headerText={"2"} lowerText={"Года в бизнесе"}/>
                </div>
            </div>
        </section>
    )
}