// LOCAL STORAGE
/*
localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser
with no expiration date. This means the data stored persists even after the user closes the browser or 
restarts the computer.
*/

localStorage.setItem('Name' , 'Bob');
//console.log(localStorage.getItem('Name'));
// Updating the Value
localStorage.setItem('Name' , 'Nishant');
localStorage.removeItem('Name');

// SESSION STORAGE
/*
The read-only sessionStorage property accesses a session Storage object for the current origin.
sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire, 
data in sessionStorage is cleared when the page session ends.
*/

sessionStorage.setItem('Name','John');
//console.log(sessionStorage.getItem('Name'));
//Updating the value
sessionStorage.setItem('Name','Bob');
sessionStorage.removeItem('Name');