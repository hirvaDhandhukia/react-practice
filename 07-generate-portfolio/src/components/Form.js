// functional component
import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ FormData, onChange }) => {
    // form data is an object here
    const Desc = {
        FullName: [
            "text",
            "Full Name",
            // "This is your full name. It is generated from your first and last names."
        ],
        FirstName: [
            "text",
            "First Name",
            // "Please enter your first name here."
        ],
        LastName: [
            "text",
            "Last Name",
            // "Please enter your surname here."
        ],
        Thumbnail: [
            "text",
            "Your Photo",
            "Please upload your photo in a CDN (eg. Imgur) and paste the Direct Image URL here."
        ],
        URL: [
            "text",
            "website link",
            "Please enter the URL of your website, where the page is going to be hosted."
        ],
        Description: [ 
            "text",
            "About you",
            // "introduce yourself"
        ],
        KeyWords: [
            "text",
            "Keywords",
            "enter keywords about you or your work."
        ],
        Address: [  
            "text",
            "Address",
            // "Type in your full address here."
        ],
        Phone: [
            "text",
            "Phone Number",
            // "enter your contact number."
        ],
        Email: [
            "email",
            "Email Address",
            // "Enter your email address for contacting you."
        ]
    };

    return (
        <div className="Form">
            <h3>Basic Info</h3>
            <p>
            {Object.keys(FormData).map(
                fd =>
                    Object.keys(Desc).includes(fd) && (
                        <FormGroup 
                            key={fd}
                            Label={Desc[fd][1]}
                            Type={Desc[fd][1]}
                            Id={fd}
                            Desc={Desc[fd][2]}
                            Value={FormData[fd]}
                            Placeholder={'Enter something for ${Desc[fd][1]}'}
                            onChange={fd === "FullName" ? () => {} : onChange}
                            readOnly={fd === "FullName" ? true : undefined}
                        />
                    )
            )}
            </p>
        </div>
    );
};

export default Form;


//  Difference btwn class and funcitional components in react:- 
// let there be 2 components C1 & C2, 
// let's say the C2 wants the input from outside sources(from C1) through props. This makes C2 as a functional component
// if C1 wants to store some data inside itself, then we use class components
// if you are using some life cycle methods like ajax loading or something, then you can use classcomponent also, !! by using hooks, you can use ajax etc in the functional components also
// so, using hooks, we can completely depend our web app on functional components