
import {React , useEffect} from 'react';
import validator from 'validator';
import passwordValidator  from 'password-validator';





    export const validateEmail=(email)=>{

        if (validator.isEmail(email)) {
            return true
          } else {
            return false
          }
    }

    export const validatePassword=(password)=>{
        var schema = new passwordValidator();

            // Add properties to it
            schema
            .is().min(8)                                    // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits(1)                                // Must have at least 1 digit
            .has().not().spaces()                           // Should not have spaces
            .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

            return schema.validate(password);
    }

    
     

    
    
