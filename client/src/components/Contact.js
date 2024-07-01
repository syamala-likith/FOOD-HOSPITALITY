import './Contactus.css';
import axios from 'axios';
export default function Contact(){
    const validateForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name=data.get('name');// I added this for alert conditon
        const email=data.get('email');// I added this for alert conditon
        const phno=data.get('phno');// I added this for alert conditon
        const query=data.get('query');// I added this for alert conditon
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        const check=regexExp.test(email);
        if(name!=="" &&  email!=="" && phno!=="" && query!=="" && check===true){// I added this for alert conditon
               console.log({
                 Name: data.get('name'),
                 Email: data.get('email'),
                 PhoneNumber: data.get('phno'),
                 Query: data.get('query')
               });
               axios.post("http://localhost:1011/contact",{
                Name: data.get('name'),
                Email: data.get('email'),
                PhoneNumber: data.get('phno'),
                Query: data.get('query')
               }).then((response)=>{
                 console.log(response.data);
               });
               alert("SUBMISSION SUCCESSFULL\nWe will reach you soon");// I added this for alert conditon
           }
       else{// I added this for alert conditon
         alert("ENTER ALL THE DETAILS CORRECTLY");
       }
       };
     
    
    return(
        <div className='content2'>
           <img src="https://www.zestindia.co.in/wp-content/uploads/2019/11/ContactUsbanner-zest-india.jpg" style={{width :"400px",height:"490px"}}className="img"/>
           <div className='content1'>
          <form onSubmit={validateForm}>
             *Name:<input className='input_box' type="text" name="name"></input><br/>
             <br/>
             <br/>
             *Email:<input className='input_box' type="text" name="email"></input><br/>
             <br/>
             <br/>
             *Mobile Number:<input className='input_box' name="phno"></input><br/>
             <br/>
             <br/>
             *Type Your Query:<input className='input_box' name="query"></input><br/>
             <br/>
             <br/>
             <input type="submit" value="SUBMIT" style={{color:"white" , backgroundColor:"red", height:"40px",width:"70px"}}/>
          </form>
          </div>
        </div>
    )
}