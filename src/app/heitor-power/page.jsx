

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="heitor-power.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-2.appspot.com/o/power-rangers.mp4?alt=media&token=5e3d11dd-5889-49f2-9466-85c462c5d871" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-10-307ef.appspot.com/o/power-rangers.mp4?alt=media&token=ec7d24ef-d554-45ac-ace7-a8cd605d151f" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}