export default function Home() {

    return(
        <main>
            <div className="w-full h-screen lg:w-1/4 lg:mx-auto lg:flex lg:justify-center lg:items-center">
                <video controls poster="malu-alex.jpg">
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos.appspot.com/o/malu-alex.mp4?alt=media&token=9640ec83-784b-4998-808e-ade70ca360bc" type="video/mp4" />
                    <source src="https://firebasestorage.googleapis.com/v0/b/convite-virtual-videos-2.appspot.com/o/malu-alex.mp4?alt=media&token=188250b0-7d42-4c75-8680-ea26b4e1645c" type="video/mp4" />
                </video>    
            </div>
        </main>
    )
    
}