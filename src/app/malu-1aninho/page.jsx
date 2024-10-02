

export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="malu-1aninho.jpeg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-01.appspot.com/o/CONVITE%20(3).mp4?alt=media&token=46bb67f0-3d12-463c-8496-80702ce71952" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-sarah-02.appspot.com/o/CONVITE%20(3).mp4?alt=media&token=9f73e32a-780e-4e89-ae37-a86bdb3abd24" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}