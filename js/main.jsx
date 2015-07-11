let React = require('react');
let NavBar = require('./components/NavBar.jsx');

let nav = document.getElementById('nav');
let content = document.getElementById('content');

React.render(<NavBar/>, nav);
