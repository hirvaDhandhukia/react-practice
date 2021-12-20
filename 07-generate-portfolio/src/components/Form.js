// functional component
const Form = () => {
    return (
        <div className="Form">
            Form Here..
        </div>
    )
}

export default Form;


//  Difference btwn class and funcitional components in react:- 
// let there be 2 components C1 & C2, 
// let's say the C2 wants the input from outside sources(from C1) through props. This makes C2 as a functional component
// if C1 wants to store some data inside itself, then we use class components
// if you are using some life cycle methods like ajax loading or something, then you can use classcomponent also, !! by using hooks, you can use ajax etc in the functional components also
// so, using hooks, we can completely depend our web app on functional components