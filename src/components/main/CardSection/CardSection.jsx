import Card from "./Card.jsx";

export default function CardSection(){
    return (
        <section className="h-fit w-full text-black mt-96 ">
            <div className="flex justify-center align-middle">
                <div className="grid grid-cols-8 grid-rows-6 gap-28">
                    <Card image={"src/img/index/man.png"}
                          span="col-start-1 col-span-4 row-start-1 row-span-2"
                          bigText={"Применяем ИИ"}
                          smallText={"Для быстрого поиска и сверки данных мы используем Искусственный Интелект, что ускоряет процесс в десятки раз"}/>
                    <Card image={"src/img/index/man.png"}
                          span="col-start-5 col-span-4 row-start-2 row-span-2"
                          bigText={"Применяем ИИ"}
                          smallText={"Для быстрого поиска и сверки данных мы используем Искусственный Интелект, что ускоряет процесс в десятки раз"}/>
                    <Card image={"src/img/index/man.png"}
                          span="col-start-1 col-span-4 row-start-3 row-span-2"
                          bigText={"Применяем ИИ"}
                          smallText={"Для быстрого поиска и сверки данных мы используем Искусственный Интелект, что ускоряет процесс в десятки раз"}/>
                    <Card image={"src/img/index/man.png"}
                          span="col-start-5 col-span-4 row-start-4 row-span-2"
                          bigText={"Применяем ИИ"}
                          smallText={"Для быстрого поиска и сверки данных мы используем Искусственный Интелект, что ускоряет процесс в десятки раз"}/>
                    </div>
            </div>
        </section>
    )
}