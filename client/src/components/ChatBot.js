function ChatBot(){
    let last_statement=0;
    let problem_explained=0;

    function sendMsg() {
        let chatContainer = document.getElementById("chatContainer");
        let userInput = document.getElementById("userInput");

        // console.log("hello")
        let div1 = document.createElement("div");
    
        let div2 = document.createElement("div");
    
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.classList.add("msg-to-chatbot");
        p2.classList.add("msg-from-chatbot");
    
        div1.appendChild(p1);
        div2.appendChild(p2);
        div1.classList.add("msg-to-chatbot-container");
        div2.classList.add("msg-from-chatbot-container");
    
        p1.textContent = userInput.value;
        userInput.value = "";
        chatContainer.appendChild(div1);

        let str=p1.textContent;

        str=str.toLowerCase();
        let str2="Haven't understood your Query"
        if(str==="hi" || str==="hello")
        {
            str2="Hi, How can i Help You";
            p2.textContent = str2;
            chatContainer.appendChild(div2);

            let div3 = document.createElement("div");
            let p3 = document.createElement("p");
            div3.classList.add("msg-from-chatbot-container");
            p3.classList.add("msg-from-chatbot");
            div3.appendChild(p3);

            str2="Select Your Query";
            p3.textContent = str2;
            chatContainer.appendChild(div3);

            let div4 = document.createElement("div");
            let p4 = document.createElement("p");
            div4.classList.add("msg-from-chatbot-container");
            p4.classList.add("msg-from-chatbot");
            div4.appendChild(p4);

            str2="1.Query on Food";
            p4.textContent = str2;
            chatContainer.appendChild(div4);

            let div5 = document.createElement("div");
            let p5 = document.createElement("p");
            div5.classList.add("msg-from-chatbot-container");
            p5.classList.add("msg-from-chatbot");
            div5.appendChild(p5);

            str2="2.Query on Hospitality";
            p5.textContent = str2;
            chatContainer.appendChild(div5);
        }
        else if(str==="1"|| str==="query on food")
        {
            str2="Explain your problem In detail";
            p2.textContent = str2;
            chatContainer.appendChild(div2);
            problem_explained=1;
        }
        else if(str==="2" || str==="query on hospitality")
        {
            str2="Explain your problem In detail";
            p2.textContent = str2;
            chatContainer.appendChild(div2);
            problem_explained=1;
        }
        else{
            if(problem_explained===0)
            {
                str2="Explain your problem In detail";
                p2.textContent = str2;
                chatContainer.appendChild(div2);
            }
            else if(last_statement===1)
            {
                let div4 = document.createElement("div");
                let p4 = document.createElement("p");
                div4.classList.add("msg-from-chatbot-container");
                p4.classList.add("msg-from-chatbot");
                div4.appendChild(p4);
    
                str2="Thank You for raching our ChatBot";
                p4.textContent = str2;
                chatContainer.appendChild(div4);
    
                let div5 = document.createElement("div");
                let p5 = document.createElement("p");
                div5.classList.add("msg-from-chatbot-container");
                p5.classList.add("msg-from-chatbot");
                div5.appendChild(p5);
    
                str2="We will reach you as fast as possible";
                p5.textContent = str2;
                chatContainer.appendChild(div5);
            }
            else
            {
                str2="Please Enter your Name, Mobile Number and Email In same formate"
                p2.textContent = str2;
                chatContainer.appendChild(div2);
                last_statement=1;
            }
        }
    };

    return(
        <div className="chat_home">
                {/* <h1 style={{height:"5px",color:"black"}}>Welcome To Food And Hospitality ChatBot</h1> */}
                <div className="chat_in">
                    <div className="left_and_right_border">
                        <div className="top">
                            <p style={{color:"white", textAlign:"left", marginLeft:"20px"}}>ChatBot</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="chat">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png" className="chat_img" />
                        </div>
                        <div id="chatContainer" class="chat-container"></div>
                        <div className="user">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png" className="chat_img" />
                        </div>

                        <div class="d-flex flex-row justify-content-center fixed-bottom">
                            <input id="userInput" class="user-input" />
                            <button class="send-msg-btn" id="sendMsgBtn" onClick={sendMsg}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="top"></div>
                    </div>
                </div>
            <a href="/cit"><button>Back</button></a>
        </div>
    );
}

export default ChatBot;