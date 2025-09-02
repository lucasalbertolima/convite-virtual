

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="gabrielle-maria.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-2.appspot.com/o/gabrielle-maria.mp4?alt=media&token=2059dfdc-709a-40d9-8037-3ae1a5954353" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3-de741.appspot.com/o/gabrielle-maria.mp4?alt=media&token=6c3832e2-69f3-4324-b3c9-bb03bf458b27" type="video/mov" />
                </video>    
            </div>
        </main>
    )
    
}