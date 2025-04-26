import Button from "../../components/Button/Button"

const GamesFavorites = () => {
    return (
        <main className="h-[100vh]">
            <section>
                <div>
                    <Button text={"Favs"} icon={"❤️"}/>
                </div>
                <div className="text-white">
                    <h1>List Favorites</h1>
                    <div>
                        {/* <CardRow/> */}
                        <div className="flex flex-row justify-between items-end p-4 m-4 border border-dark">
                            <div><img src="" alt="" /></div>
                            <div>Nombre del juego</div>
                            <div>precio</div>
                            <div>❤️</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GamesFavorites