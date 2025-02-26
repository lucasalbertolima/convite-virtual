

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="maria-gabriela.png">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-01.appspot.com/o/Maria%20Gabriela.mp4?alt=media&token=4fdc5038-6d7f-4e9a-b755-6fc04c60ce0a" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-02.appspot.com/o/Maria%20Gabriela.mp4?alt=media&token=43001886-8a9f-421c-ba28-1d5aabea0875" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}