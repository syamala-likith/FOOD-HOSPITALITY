function City(){
    return(
        <div className="home">
            <div id="sectionHome">

            <div className="col-12" style={{fontFamily:"Comic Sans MS",color:"white",textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", marginBottom:"20px"}}>
                {/* <h1>SELECT YOUR HOTEL</h1> */}
                SELECT YOUR CITY
            </div>

            <div style={{display:"flex"}} className="co">

                <div className="col-4">
                    <div className="card11">
                        <img src="https://dd0w3jaz1pep7.cloudfront.net/assets/images/tourism/poi/Vijayawada/prakasam-barrage-vijayawada-503c7dca77881b192c000917.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                            <a style={{textDecoration:"none"}} href="/vij" ><h1 className="para">Vijayawada</h1> </a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card1">
                        <img src="https://thrillingtravel.in/wp-content/uploads/2019/08/1024px-Charminar_india.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/hyd" ><h1 className="para">Hydrabad</h1></a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card1">
                        <img src="https://i.imgur.com/Ob2htqP.jpeg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/del" ><h1 className="para">Delhi</h1></a>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{display:"flex"}} className="co">

                <div className="col-4">
                    <div className="card11">
                        <img src="https://wallpaperaccess.com/full/1906271.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/ban" ><h1 className="para">Banglore</h1></a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card1">
                        <img src="https://2.bp.blogspot.com/_-RDMzGh16M0/S-qBdDQ9bbI/AAAAAAAAA6o/dz74ip4r3hU/s1600/s.JPG" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/viz" ><h1 className="para">Vizag</h1></a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card1">
                        <img src="https://easycowork.com/blog/wp-content/uploads/2019/09/cropped-ahmedabad-city.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/ahm" ><h1 className="para">Ahmedabad</h1></a>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="chat_bot_card">
                        <a href="/chat" ><img src="https://i.pinimg.com/564x/1e/1e/49/1e1e4996b0f17197b81e578450462c14.jpg" href="/chat" className="chat_bot_img" alt=""/> </a>
                    </div>
                </div>

            </div>

        </div>
    </div>
    );
}
export default City;