

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="davi.png">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/Convite%20Especial%20Davi.mp4?alt=media&token=6758cb19-997d-4db4-a090-bc7aa07d9133" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-5.appspot.com/o/Convite%20Especial%20Davi.mp4?alt=media&token=2d378e35-3798-4dc2-9c07-803e2d8d44b7" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}