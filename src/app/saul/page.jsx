

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="saul.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-6-6f46d.appspot.com/o/saul-video.mp4?alt=media&token=32d1aa92-4041-4a2b-a1ce-f4d09834ef57" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-7-441ce.appspot.com/o/saul-video.mp4?alt=media&token=b72a8a92-8cd9-4c0f-b40a-9d593b7a3ce7" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}