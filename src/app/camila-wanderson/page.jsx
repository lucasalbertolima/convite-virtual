

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="camila-wanderson.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-6-6f46d.appspot.com/o/camila-wanderson.mp4?alt=media&token=d2f2a03c-a2ce-4d69-afab-a1f9f211ed82" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-7-441ce.appspot.com/o/camila-wanderson.mp4?alt=media&token=6c5599a1-9fbb-4f4c-8490-9ab5d9b1a4cd" type="video/mp4" />
                </video>   
            </div>
        </main>
    )
    
}