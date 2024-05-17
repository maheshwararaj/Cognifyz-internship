const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index page
app.get('/', (req, res) => {
    // Here you can dynamically generate data to pass to the template
    const username = "John"; // Example dynamic data
    
    // Render the index.ejs template with dynamic data
    res.render('index', { username: username });
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can handle the form submission, for example, saving data to a database
    console.log(`Received form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    res.render("success",{name:name})
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
