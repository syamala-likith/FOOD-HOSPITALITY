import './Abo.css';
function About(){
    return(
        <div className='class1'>
            <section>
            <div className = "image">
               <img src="https://nrai.org/wp-content/uploads/2018/01/hospitality-industry-food-wastage-660x400.jpg" />
            </div>

            <div className = "content">
                <h2>About Us</h2>
                {/* <span><!-- line here --></span> */}
                <p> The main moto of our website is to provide the platform to growing food and hospitatlity industry. We provide our best service to you.</p>

                <ul className = "icons">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className = "fa fa-github"></i>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
            </section>
        </div>
    );
}

export default About;