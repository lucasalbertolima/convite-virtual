

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="ana-sofia.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-8-e213a.appspot.com/o/Convite%20Especial%20Ana%20Sofia.mp4?alt=media&token=e18af1ca-c45f-4926-8faa-27958c51346f" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-9-fff65.appspot.com/o/Convite%20Especial%20Ana%20Sofia.mp4?alt=media&token=eb0b6d0b-7b17-4490-a240-da4866996b6a" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}