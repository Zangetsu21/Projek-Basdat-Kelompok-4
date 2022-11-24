import React from "react";
import '../App.css';
import {Button} from "./Button";
import './Intro.css';

function Intro () 
{
    return(
        <div className = "intro-fonter">
                    <div className="intro-btns">
                        <Button 
                        className="btns" 
                        buttonStyle="btn--outlone"
                        buttonSize="btn--large">
                            Buah
                        </Button>
                        <Button 
                        className="btns" 
                        buttonStyle="btn--primary"
                        buttonSize="btn--large">
                            Sayur
                        </Button>
                    </div>
        </div>
    )
}

export default Intro;