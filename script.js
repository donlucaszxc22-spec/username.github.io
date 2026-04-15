// Mock Book Data
const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", category: "fiction", img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg", desc: "A dazzling novel about all the choices that go into a life well lived." },
    { id: 2, title: "Project Hail Mary", author: "Andy Weir", category: "sci-fi", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg", desc: "A lone astronaut must save the earth from disaster in this propulsive SF thriller." },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "educational", img: "https://cdn.kobo.com/book-images/3e453d1c-61a3-4ed6-b5fe-6232d6483c08/1200/1200/False/atomic-habits-tiny-changes-remarkable-results.jpg", desc: "An easy & proven way to build good habits & break bad ones." },
    { id: 4, title: "The Hitchhiker's Guide", author: "Douglas Adams", category: "comedy", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg", desc: "A hilarious journey across the galaxy with Arthur Dent and his towel." },
    { id: 5, title: "The Shining", author: "Stephen King", category: "horror", img: "https://m.media-amazon.com/images/I/81ecUqCSEUL._AC_UF350,350_QL50_.jpg", desc: "A family heads to an isolated hotel for the winter where an evil spiritual presence lurks." },
    { id: 6, title: "The Name of the Wind", author: "Patrick Rothfuss", category: "fantasy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhBNv0GRANOxmpOhfArIHUB5bIIfOKXTQFg&s", desc: "The tale of Kvothe, from his childhood in a troupe of traveling players to his time at a magic school." },
    { id: 7, title: "Normal People", author: "Sally Rooney", category: "drama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulpGBbgj5Iuch8NcxbfKKKiYpFJMQ0TtAVA&s", desc: "A complex exploration of the relationship between two young people as they grow up." },
    { id: 8, title: "The Notebook", author: "Nicholas Sparks", category: "romance", img: "https://upload.wikimedia.org/wikipedia/en/d/d9/The_Notebook_Cover.jpg", desc: "A heart-wrenching love story that spans decades and defies the odds." },
    { id: 9, title: "The Gray Man", author: "Mark Greaney", category: "action", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1335649192i/6547865.jpg", desc: "A high-stakes thriller following an elite assassin on the run." },
    { id: 10, title: "Brief Answers to Big Questions", author: "Stephen Hawking", category: "educational", img: "https://upload.wikimedia.org/wikipedia/en/6/61/BriefAnswersToTheBigQuestions-BookCover.png", desc: "The world-famous cosmologist's final thoughts on the universe's biggest mysteries." },
    { id: 11, title: "Born a Crime", author: "Trevor Noah", category: "comedy", img: "https://cdn.kobo.com/book-images/48fc5df0-a8e0-4c24-8dd5-9d836d29296a/1200/1200/False/born-a-crime.jpg", desc: "A mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist." },
    { id: 12, title: "Bird Box", author: "Josh Malerman", category: "horror", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg", desc: "Five years after it began, a mother and her two children must navigate a river blindfolded." }
];


// ✅ MOVED OUTSIDE (GLOBAL)
function generateStory(book) {
    const chapters = 6;
    const paragraphsPerChapter = 8;
    let storyHTML = `<h1>${book.title}</h1><p style="text-align:center"><i>The complete digital edition</i></p><br>`;

    for (let i = 1; i <= chapters; i++) {
        storyHTML += `<h2>Chapter ${i}</h2>`;
        for (let j = 0; j < paragraphsPerChapter; j++) {
            storyHTML += `
            <p>The atmosphere of ${book.category} surrounded the protagonist as the events of ${book.title} began to unfold. It was a time of great uncertainty, yet the prose of ${book.author} guided the reader through every twist and turn.</p>
            <p>As the sun dipped below the horizon, the narrative deepened. The complexity of the plot thickened, weaving together subplots of ${book.category} and character arcs that demanded attention.</p>
            `;
        }
    }
    return storyHTML;
}


// ✅ MOVED OUTSIDE (GLOBAL)
function startReading(id) {
    const book = books.find(b => b.id === id);
    const overlay = document.getElementById('readerOverlay');

    document.getElementById('readingTitle').innerText = book.title;
    document.getElementById('readingAuthor').innerText = book.author;
    document.getElementById('textContent').innerHTML = generateStory(book);

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}


document.addEventListener('DOMContentLoaded', () => {

    // --- THEME LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.innerHTML = theme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }

    // --- BOOKS PAGE LOGIC ---
    const bookGrid = document.getElementById('bookGrid');
    const searchBar = document.getElementById('searchBar');
    const categoryFilter = document.getElementById('categoryFilter');

    if (bookGrid) {

        function Books(data) {
            bookGrid.innerHTML = data.map(book => `
                <div class="book-card">
                    <img src="${book.img}" alt="${book.title}" class="book-img">
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <div class="card-btns">
                            <button class="cta-btn" onclick="openModal(${book.id})">Details</button>
                            <button class="cta-btn read-btn" onclick="startReading(${book.id})">Read</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('exitReader').addEventListener('click', () => {
            document.getElementById('readerOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        Books(books);

        searchBar.addEventListener('input', () => {
            const term = searchBar.value.toLowerCase();
            const filtered = books.filter(b =>
                b.title.toLowerCase().includes(term) ||
                b.author.toLowerCase().includes(term)
            );
            Books(filtered);
        });

        categoryFilter.addEventListener('change', () => {
            const cat = categoryFilter.value;
            const filtered = cat === 'all'
                ? books
                : books.filter(b => b.category === cat);
            Books(filtered);
        });
    }

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('formStatus');
            status.innerHTML = `
                <p style="color: #10b981; margin-top: 15px; font-weight: bold;">
                    <i class="fas fa-check-circle"></i> Message sent successfully!
                </p>`;
            contactForm.reset();
        });
    }
});


// Modal
function openModal(id) {
    const book = books.find(b => b.id === id);
    const modal = document.getElementById('bookModal');
    const body = document.getElementById('modalBody');

    if (modal && body) {
        body.innerHTML = `
            <div class="modal-flex">
                <img src="${book.img}" style="width: 200px; border-radius: 10px;">
                <div>
                    <h2>${book.title}</h2>
                    <p><strong>By:</strong> ${book.author}</p>
                    <p style="margin-top: 15px;">${book.desc}</p>
                </div>
            </div>
        `;
        modal.style.display = "block";
    }
}

window.onclick = (event) => {
    const modal = document.getElementById('bookModal');
    if (event.target === modal || event.target.classList.contains('close-modal')) {
        modal.style.display = "none";
    }
};
