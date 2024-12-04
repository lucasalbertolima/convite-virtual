

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="klara-beatriz.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-4-7d650.appspot.com/o/klarabeatrizvideo.mp4?alt=media&token=18d33815-2839-4559-bd9c-24c1151f45cc" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-5-cabe1.appspot.com/o/klarabeatrizvideo.mp4?alt=media&token=97b9a6c7-1038-4e6d-aac9-d9bce6689ba6" type="video/mp4" />
                </video>   
            </div>
        </main>
    )
    
}