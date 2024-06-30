

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="maria-liz-fazendinha.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/Convite%20especial%20maria%20Liz.mp4?alt=media&token=5f2593e2-4ec3-4427-b7e9-b5c0bb4dd382" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3.appspot.com/o/Convite%20especial%20maria%20Liz.mp4?alt=media&token=3ffe4e03-58db-4ed0-98c3-25529afa5f84" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}