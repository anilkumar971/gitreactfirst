import React from "react";
function About(){
    return(
        <div>
            <p>About You can now optionally start a new app from a template by appending --template [template-name] to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format cra-template-[template-name], however you only need to provide the [template-name] to the creation command.

npx create-react-app my-app --template [template-name]
You can find a list of available templates by searching for "cra-template-*" on npm.</p>
        </div>
    );
}
export default About;