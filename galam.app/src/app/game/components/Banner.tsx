export default function Banner() {
    return(
        <div className="w-full h-186 pt-40 bg-[url('/images/game.png')] bg-cover">
          <div className=" flex items-center gap-50 justify-center">
            <div className="w-60 h-70 bg-[red] rounded-[5%] ">

            </div>

            <div className="w-80 h-90 bg-[red] rounded-[5%]">

            </div>

            <div className="w-60 h-70 bg-[red] rounded-[5%]">

            </div>

          </div>

          <div className="block text-white">
            <button className="text-center w-15 h-5">DOWNLOAD FOR PC</button>
            <button>DOWNLOAD FOR ANDROID</button>
          </div>

        </div>
        
    )
}