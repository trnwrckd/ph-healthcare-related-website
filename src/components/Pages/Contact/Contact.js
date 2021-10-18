import './Contact.css';
import React from 'react';

const Contact = () => {
	return (
		<div className="container-fluid bg-purple">
			<div className="container py-5 d-flex flex-column flex-column-reverse flex-md-row justify-content-between align-items-center">
			<div>
				<h2>This is contact</h2>
				<p>
					contact us becuase you can    
				</p>
			</div>
			<div className="d-flex flex-column align-items-center">
				<div class="form-floating">
					<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '300px', width: '300px'}}></textarea>
					<label for="floatingTextarea">Write your Email..</label>
				</div>
				<button className="w-100 mt-2">
					submit
				</button>
			</div>
			<div><img src="./images/contact.png" alt="" height="500px" width="500px" /></div>
			</div>
		</div>
	);
};

export default Contact;