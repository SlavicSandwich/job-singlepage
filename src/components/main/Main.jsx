import TextSection from "./TextSection/TextSection.jsx";
import CardSection from "./CardSection/CardSection.jsx";

export default function Main() {
    return (
        <div className={"p-sketch-index"}>
            <TextSection/>
            <CardSection />
        </div>
    )
}


// <div className={"p-sketch-index"}>
//     <div className={"p-sketch-index__item js-smooth-item js-scroll-item"}>
//         <div className={"p-sketch-index__item-thumb"}
//              style={{backgroundImage: "src/img/index/man.png"}}>
//             <div className="p-sketch-index__item-thumb-label"><span
//                 className="js-split-str">s</span><span className="js-split-str">h</span><span
//                 className="js-split-str">o</span><span className="js-split-str">w</span><span
//                 className="js-split-str">&nbsp</span><span className="js-split-str">t</span><span
//                 className="js-split-str">h</span><span className="js-split-str">i</span><span
//                 className="js-split-str">s</span>
//             </div>
//         </div>
//         <div className={"p-sketch-index__item-title"}>
//             <span className={"js-split-str"}>w</span>
//             <span className={"js-split-str"}>a</span>
//             <span className={"js-split-str"}>t</span>
//             <span className={"js-split-str"}>e</span>
//             <span className={"js-split-str"}>r</span>
//         </div>
//     </div>
// </div>