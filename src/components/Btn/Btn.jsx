import React from 'react'
import classes from './btn.module.css'
import { useEffect, useState } from 'react'
import {FaArrowUp}  from 'react-icons/fa'


const {btn,myBtn}=classes
  const Btn = ( {btnValue}) => {
return (
  <>
    <button className={btn}> {btnValue}  </button>
  </>
)
}

export default Btn




// export const moveToTopBtn = ( ) => {
//   const {myBtn}=classes

//   // Get the button:
// let mybutton=  useRef()
// // let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
// return (
//   <>
//     <button ref={mybutton} onclick={topFunction} id={myBtn} title="Go to top">Top</button>
//   </>
// )
// }











export function ScrollToTopButton() {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', scrollFunction);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const scrollFunction = () => {
    // Check the scroll position and update the state
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };

  const topFunction = () => {
    // Scroll to the top of the document
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {displayButton && (
        <button id={myBtn} onClick={topFunction} style={{ display: 'block' }}>
         <FaArrowUp/>
        </button>
      )}
    </div>
  );
}




