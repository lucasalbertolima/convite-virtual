

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="maite-moranguinho.png">
                    <source src="https://firebasestorage.googleapis.com/v0/b/apinoticias-with-next.appspot.com/o/Convite%20especial%20Moranguinho.mp4?alt=media&token=31e8593b-c553-4245-9560-a3fd68e57b5d" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-by-sarahjandira.appspot.com/o/Convite%20especial%20Moranguinho.mp4?alt=media&token=ea2d1545-3adb-499d-81f7-291234242002" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}