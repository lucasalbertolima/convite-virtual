

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="joaquim-maria.png">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-11.appspot.com/o/Joaquim%20e%20Maria.mp4?alt=media&token=32793950-7eb9-48ba-aafd-a708a860f08f" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-10.appspot.com/o/Joaquim%20e%20Maria.mp4?alt=media&token=934d8e21-e360-481b-9cc4-95bda655be4b" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}