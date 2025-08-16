

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="vivi-carlos.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-8-e213a.appspot.com/o/video.mp4?alt=media&token=219a91d4-0557-446e-86ee-6aeb4c52c9ec" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-7-441ce.appspot.com/o/video.mp4?alt=media&token=5d049fd6-595d-4cbb-91b2-b645784f872b" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}