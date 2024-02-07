

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="lara.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-8-e213a.appspot.com/o/lara.mp4?alt=media&token=b5af51e5-9206-4270-8413-9960d2dcf6a1" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-9-fff65.appspot.com/o/lara.mp4?alt=media&token=72d9a473-16ef-47dd-900f-f3d18189090a" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}