// import { display } from "@mui/system";
// import axios from "axios";
// import { useState } from "react";

// function Homeowner(props){

//     const [r,setR] = useState(null);

//     const isDict = dict => {
//         return typeof dict === "object" && !Array.isArray(dict);
//     };

//     function showAll() {
//         console.log("showall")
//         axios.get('http://localhost:1011/show_all_users', {params:{

//         }}).then((response)=>{
//             console.log(response.data[0].fn)
//             setR(response.data)
//         })
//     }

//     if(r==null){
//         return(
//             <div className="home">
//                 <button onClick={()=>showAll()}> Display All User Details</button>
//             </div>
//         );
//     }
//     else {
//         if(isDict(r)) {
//             return (
//                 <div  className="home" style={{display:"flex"}}>
//                     <table border="1" style={{marginLeft:"400px"}}>
//                         <tr>
//                             <th> First Name </th> 
//                             <th> Last Name </th>
//                             <th> Email </th>  
//                         </tr>
//                         <tr>
//                             <td> {r.fn} </td>
//                             <td> {r.ln} </td>
//                             <td> {r.email} </td>
//                         </tr>
//                     </table>
//                 </div>
//             );
        
//         }
//         else 
//         {
//             console.log(r);
//             console.log("in list")
//             return (
//                 <div  className="home" style={{display:"flex"}}>
//                     <table border="1" style={{marginLeft:"400px"}}>
//                         <tr>
//                             <th> First Name </th> 
//                             <th> Last Name </th>
//                             <th> Email </th>  
//                         </tr>
//                         {r.map((obj)=>{
//                             // console.log(r.fn);
//                             return(
//                                 <tr>
//                                     <td> {obj.fn} </td>
//                                     <td> {obj.ln} </td>
//                                     <td> {obj.email} </td>
//                                 </tr>
//                             );
//                         })}
//                     </table>
//                 </div>
//             );
//         }
//     }
// }
// export default Homeowner;

function Homeowner(){

    function removeVij(){
        let div=document.getElementById("c1");
        let div2=document.getElementById("vij");
        div.removeChild(div2);
    }

    function removeHyd(){
        let div=document.getElementById("c1");
        let div2=document.getElementById("hyd");
        div.removeChild(div2);
    }

    function removeDel(){
        let div=document.getElementById("c1");
        let div2=document.getElementById("del");
        div.removeChild(div2);
    }

    function removeBan(){
        let div=document.getElementById("c2");
        let div2=document.getElementById("ban");
        div.removeChild(div2);
    }

    function removeViz(){
        let div=document.getElementById("c2");
        let div2=document.getElementById("viz");
        div.removeChild(div2);
    }

    function removeAhm(){
        let div=document.getElementById("c2");
        let div2=document.getElementById("ahm");
        div.removeChild(div2);
    }

    let counter=1;
    function addCity()
    {
        let div=document.getElementById("add");

        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");

        let p1=document.createElement("p");

        let img=document.createElement("img");

        let userInputName=document.getElementById("userInputName");
        let userInputImage=document.getElementById("userInputImage");

        p1.textContent=userInputName.value;
        let str=p1.textContent;

        str=str.toLocaleLowerCase();
        
        img.src=userInputImage.value;
        if(counter===1)
        {
            img.classList.add("card1_img");

            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(p1);

            div1.classList.add("col-4");
            div2.classList.add("card11");
            div3.classList.add("para_card");

            div.appendChild(div1);
            counter=counter+1;        
        }
        else{
            img.classList.add("card1_img");

            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(p1);

            div1.classList.add("col-4");
            div2.classList.add("card1");
            div3.classList.add("para_card");

            div.appendChild(div1);
            counter=counter+1;   
        }


    }
    return(
        <div className="homeOwner">
            <div id="sectionHome">

            <div className="col-12" style={{fontFamily:"Comic Sans MS",color:"white",textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", marginBottom:"20px"}}>
                {/* <h1>SELECT YOUR HOTEL</h1> */}
                SELECT YOUR CITY
            </div>

            <div style={{display:"flex"}} className="co" id="c1">

                <div className="col-4" id="vij">
                    <div className="card11">
                        <img src="https://dd0w3jaz1pep7.cloudfront.net/assets/images/tourism/poi/Vijayawada/prakasam-barrage-vijayawada-503c7dca77881b192c000917.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                            <a style={{textDecoration:"none"}} href="/vij" ><h1 className="para">Vijayawada</h1> </a>
                            <button onClick={removeVij} >Remove City</button>
                        </div>
                    </div>
                </div>

                <div className="col-4" id="hyd">
                    <div className="card1">
                        <img src="https://thrillingtravel.in/wp-content/uploads/2019/08/1024px-Charminar_india.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/hyd" ><h1 className="para">Hydrabad</h1></a>
                        <button onClick={removeHyd} >Remove City</button>
                        </div>
                    </div>
                </div>

                <div className="col-4" id="del">
                    <div className="card1">
                        <img src="https://i.imgur.com/Ob2htqP.jpeg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/del" ><h1 className="para">Delhi</h1></a>
                        <button onClick={removeDel} >Remove City</button>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{display:"flex"}} className="co" id="c2">

                <div className="col-4" id="ban">
                    <div className="card11">
                        <img src="https://wallpaperaccess.com/full/1906271.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/ban" ><h1 className="para">Banglore</h1></a>
                        <button onClick={removeBan} >Remove City</button>
                        </div>
                    </div>
                </div>

                <div className="col-4" id="viz">
                    <div className="card1">
                        <img src="https://2.bp.blogspot.com/_-RDMzGh16M0/S-qBdDQ9bbI/AAAAAAAAA6o/dz74ip4r3hU/s1600/s.JPG" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/viz" ><h1 className="para">Vizag</h1></a>
                        <button onClick={removeViz} >Remove City</button>
                        </div>
                    </div>
                </div>

                <div className="col-4" id="ahm">
                    <div className="card1">
                        <img src="https://easycowork.com/blog/wp-content/uploads/2019/09/cropped-ahmedabad-city.jpg" className="card1_img" alt="" />
                        <div className="para_card">
                        <a style={{textDecoration:"none"}} href="/ahm" ><h1 className="para">Ahmedabad</h1></a>
                        <button onClick={removeAhm} >Remove City</button>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="chat_bot_card">
                        <a href="/chat" ><img src="https://i.pinimg.com/564x/1e/1e/49/1e1e4996b0f17197b81e578450462c14.jpg" href="/chat" className="chat_bot_img" alt=""/> </a>
                    </div>
                </div>

            </div>

            <div style={{display:"flex"}} className="co" id="add"></div>

            <div className="col-4" style={{marginLeft:"570px"}}>
                <div className="card1">
                    <img src="https://earth3dmap.com/wp-content/uploads/2022/04/new-york-city-3d-maps.jpg" className="card1_img" alt="" />
                    <div className="para_card" style={{height:"150px"}}>
                        Enter City name and Image URL to add<br/>
                        Name: <input id="userInputName" /><br/>
                        Image Url: <input id="userInputImage" />
                        <button onClick={addCity}>Add City</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Homeowner;