import './Contact.css';
import React from 'react';

const Contact = () => {
	return (
		<div className="container-fluid contact mt-nav">
			<div className="container py-5 d-flex flex-column  flex-lg-row justify-content-around align-items-center">
			<div>
				<h2>Contact Us</h2>
				<p className="p-3">
					We love to hear your opinions,<br /> because that is the only way we can ever improve. 
				</p>
				<button className= "btn-generic">
					Make a Donation
				</button>
			</div>
			<div className="d-flex flex-column flex-column-reverse flex-lg-row align-items-center">
				<div><img src="./images/contact.png" alt="" height="500px" width="500px" className="img-fluid"  /></div>
				<div className="d-flex flex-column align-items-center">
					<div class="form-floating">
						<textarea class="form-control text-area" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '300px', width: '300px'}}></textarea>
						<label for="floatingTextarea">Write your Email..</label>
					</div>
					<button className="w-100 mt-3 btn-generic">
						Send
					</button>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Contact;