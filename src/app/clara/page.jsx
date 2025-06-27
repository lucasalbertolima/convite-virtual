

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="davi.png">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-2.appspot.com/o/Convite%20especial%20Clara%20(1).mp4?alt=media&token=37a8a1e9-add6-431c-a725-c710e01a4e60" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3-de741.appspot.com/o/Convite%20especial%20Clara%20(1).mp4?alt=media&token=02927d2e-47bc-4169-8adf-51e503862047" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}