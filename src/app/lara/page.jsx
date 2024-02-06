

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="lara.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-8-e213a.appspot.com/o/Convite%20Especial%20Lara.mp4?alt=media&token=e56dec70-0fe4-4f64-ae2f-14c119e64c07" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-9-fff65.appspot.com/o/Convite%20Especial%20Lara.mp4?alt=media&token=d5222051-456d-4033-bb0c-eda4877ded12" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}