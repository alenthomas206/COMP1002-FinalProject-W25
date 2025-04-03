// Inject global header with logo
const header = document.getElementById('header');
header.innerHTML = `
    <header>
        <img src="images/logo.jpg" alt="Fax Machine Revival Logo" class="logo">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

// Inject global footer
const footer = document.getElementById('footer');
footer.innerHTML = `
    <footer>
        <p>© 2025 Fax Machine Revival. All rights reserved.</p>
    </footer>
`;