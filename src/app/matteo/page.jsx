

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="matteo.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-11.appspot.com/o/convite%201%20aninho%20matteo.mp4?alt=media&token=16ec033f-b456-4100-9937-502c989ca2e1" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-12.appspot.com/o/convite%201%20aninho%20matteo.mp4?alt=media&token=8c5ff035-f305-43a4-8e95-498a307de969" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}