/*import React from 'react'
 
 import PhoneInput from 'react-phone-input-2'
 import 'react-phone-input-2/lib/style.css'
 import "./styles.css"

 function App(){
    return(
        <div className='phone-signin'>
            <PhoneInput
            country={"us"}
            //value={}
            //onChange={}
             />
        </div>
    )
 }

 export default App*/

 import React from "react";
 import * as StylingComponents from '../components/StylingComponents';
 import {Link} from "react-router-dom"
//  import firebase from './firebase'
//  import { getAuth, RecaptchaVerifier, signInWithEmailAndPassword } from "firebase/auth"; // Combine the import statements

 function App() {
    
   /*
    const configureCaptcha = () =>{
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            },
            defaultCountry: "IN"

          });
    }
    const onSignInSubmit = () => {
        try {
            const auth = getAuth();
            const phone = ''; // Get email from your input field
            const password = ''; // Get password from your input field
            
            // Sign in successful, perform any additional actions
        } catch (error) {
            // Handle sign-in error
            console.error('Sign-in error:', error.message);
        }
    }*/

     const [signIn, toggle] = React.useState(true);
      return(
          <div className="login">
            
          <StylingComponents.Container>
              <StylingComponents.SignUpContainer signinIn={signIn}>
                  <StylingComponents.Form>
                      <StylingComponents.Title>Create Account</StylingComponents.Title>
                      <StylingComponents.Input type='text' placeholder='Name'  />
                      <StylingComponents.Input type='phone' placeholder='Phone'  onChange/>
                      <StylingComponents.Input type='OTP' placeholder='OTP'  />
                      <StylingComponents.Button><Link to="/driver">Sign Up</Link></StylingComponents.Button>
                  </StylingComponents.Form>
              </StylingComponents.SignUpContainer>

              <StylingComponents.SignInContainer signinIn={signIn}>
                   <StylingComponents.Form>
                       <StylingComponents.Title>Sign in</StylingComponents.Title>
                       <StylingComponents.Input type='phone' placeholder='Phone'  />
                       <StylingComponents.Input type='password' placeholder='Password' />
                       <StylingComponents.Anchor href='#'>Forgot your password?</StylingComponents.Anchor>
                       <StylingComponents.Button><Link to="/user">Sign In</Link></StylingComponents.Button>
                   </StylingComponents.Form>
              </StylingComponents.SignInContainer>

              <StylingComponents.OverlayContainer signinIn={signIn}>
                  <StylingComponents.Overlay signinIn={signIn}>

                  <StylingComponents.LeftOverlayPanel signinIn={signIn}>
                      <StylingComponents.Title>Hello, rider!</StylingComponents.Title>
                      <StylingComponents.Paragraph>
                          Sign in as a User
                      </StylingComponents.Paragraph>
                      <StylingComponents.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </StylingComponents.GhostButton>
                      </StylingComponents.LeftOverlayPanel>

                      <StylingComponents.RightOverlayPanel signinIn={signIn}>
                        <StylingComponents.Title>Hello, driver!</StylingComponents.Title>
                        <StylingComponents.Paragraph>
                            Start your journey with us
                        </StylingComponents.Paragraph>
                            <StylingComponents.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </StylingComponents.GhostButton> 
                      </StylingComponents.RightOverlayPanel>
  
                  </StylingComponents.Overlay>
              </StylingComponents.OverlayContainer>

          </StylingComponents.Container>
          </div>
      )
 }

 export default App;