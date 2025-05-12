

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="hugo-luana.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-3.appspot.com/o/hugo-luana.mp4?alt=media&token=9ac70836-92e6-4346-b591-6835a1d89da9" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-4.appspot.com/o/hugo-luana.mp4?alt=media&token=df86a798-f06d-4471-9f14-012d4444bbc2" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}