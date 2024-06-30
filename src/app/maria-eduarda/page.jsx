

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="maria-eduarda.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convitevirtual-7554a.appspot.com/o/video%20maria%20eduarda.mp4?alt=media&token=6cfe0bb9-bcca-46ef-9d2a-4b113ef10069" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/phd-global.appspot.com/o/video%20maria%20eduarda.mp4?alt=media&token=29925ba1-edf6-4ef7-8556-98c611db689b" type="video/mp4" />
                </video> 
            </div>
        </main>
    )
    
}