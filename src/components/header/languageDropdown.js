import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import i18n from "../../setup/i18n";

const LanguageDropDown = () => {
    const getCurrentLang = i18n.language;

   const [selectedLanguage, setSelectedLanguage] = useState(getCurrentLang)
    const handleChange =(event)=>{
        const language = event.target.value
        console.log("language" , event.target.value)
        i18n.changeLanguage(language)
        setSelectedLanguage(language)
    }
    return (
        <Form.Select onChange={handleChange} value={selectedLanguage} >
          <option value="chi">Chines</option>
          <option value="en">English</option>
        </Form.Select>
      );

};
export default LanguageDropDown;
