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
    const chapters = 10;
    const paragraphsPerChapter = 8;
    const genreTemplates = {
        fiction: {
            voice: 'emotional and reflective prose',
            setting: 'a familiar city street, a quiet house, and a memory-laden park',
            conflict: 'the quiet, personal battle between desire and responsibility',
            resolution: 'a small but meaningful choice that changes the character forever'
        },
        'sci-fi': {
            voice: 'speculative and vivid imagery',
            setting: 'vast starships, distant planets, and shimmering alien skies',
            conflict: 'the collision between human intuition and cold technology',
            resolution: 'an unexpected breakthrough that rewrites the rules of survival'
        },
        educational: {
            voice: 'clear, thoughtful explanation tempered by human curiosity',
            setting: 'libraries, lecture halls, and quiet moments of revelation',
            conflict: 'the struggle to understand and apply big ideas',
            resolution: 'a deeper grasp of the world that feels empowering'
        },
        comedy: {
            voice: 'lighthearted, witty language with playful rhythm',
            setting: 'awkward social situations, misread signals, and comic misunderstandings',
            conflict: 'a series of ridiculous obstacles that keep stacking up',
            resolution: 'a laugh-out-loud payoff that still feels sincere'
        },
        horror: {
            voice: 'tense, atmospheric descriptions with creeping dread',
            setting: 'an isolated hotel, an empty hallway, and shadowed rooms',
            conflict: 'a feeling that something unseen is always watching',
            resolution: 'a haunting realization that the danger is inside and unavoidable'
        },
        fantasy: {
            voice: 'lyrical, magical prose with sweeping wonder',
            setting: 'ancient forests, candlelit halls, and hidden realms beyond the ordinary',
            conflict: 'a quest to reclaim power from a cruel fate',
            resolution: 'a triumphant rebirth that restores balance to the world'
        },
        drama: {
            voice: 'intense, character-driven storytelling',
            setting: 'intimate rooms, family dinners, and moments of quiet confrontation',
            conflict: 'the weight of unspoken feelings and complicated relationships',
            resolution: 'an honest conversation that shifts everyone’s path'
        },
        romance: {
            voice: 'warm, tender prose with emotional detail',
            setting: 'moonlit walks, handwritten letters, and gentle embraces',
            conflict: 'a longing that must overcome fear and doubt',
            resolution: 'a hopeful choice that opens the heart to love'
        },
        action: {
            voice: 'fast-paced sentences with sharp, cinematic detail',
            setting: 'high-stakes chases, hidden safe houses, and explosive confrontations',
            conflict: 'a race against time to outsmart an unrelenting enemy',
            resolution: 'a decisive strike that ends the threat and leaves scars of victory'
        }
    };

    const genre = genreTemplates[book.category] || {
        voice: 'descriptive and immersive prose',
        setting: 'a vivid world full of sensory detail',
        conflict: 'a journey toward self-discovery',
        resolution: 'a satisfying conclusion that honors the story’s mood'
    };

    const paragraphPatterns = [
        ({chapter, index}) => `In Chapter ${chapter}, ${book.author}'s influence is woven gently through the narration as the story opens in ${genre.setting}. The protagonist feels the first stirrings of change, and every sentence is shaped by ${genre.voice}.`,
        () => `The pacing shifts with each new scene, building momentum while also allowing space to breathe. The narrative still carries a sense of authenticity that belongs to ${book.title}, and the reader is invited to move closer to the heart of the experience.`,
        ({chapter}) => `There are moments of quiet reflection, where the character pauses and the world seems to hold its breath. These passages are deliberate, almost reverent, and they deepen the sense that something important is unfolding in Chapter ${chapter}.`,
        () => `Tension blooms in the middle of the chapter as the central conflict becomes unavoidable. The prose leans into ${genre.conflict}, wrapping the reader in a tension that feels both inevitable and surprising.`,
        () => `The description is rich but never indulgent, with enough detail to ground the imagination while still driving the story forward. Each scene reveals another layer of ${book.title}'s world and the emotional stakes involved.`,
        () => `A quiet moment arrives where a character's inner voice is revealed. The thoughts are vivid and complex, and they echo the larger themes of loyalty, courage, and the search for meaning.`,
        () => `As the chapter presses forward, the narrative threads begin to intersect. Relationships shift, choices become sharper, and there is a steady sense that the characters are being drawn toward a turning point.`,
        ({chapter}) => `By the end of Chapter ${chapter}, the reader has traveled through tension and release. The conclusion of the chapter feels earned, with a small victory or new dilemma that prepares the way for what comes next.`
    ];

    let storyHTML = `<h1>${book.title}</h1><p style="text-align:center"><i>The complete digital edition</i></p><br>`;

    for (let i = 1; i <= chapters; i++) {
        storyHTML += `<h2>Chapter ${i}</h2>`;
        paragraphPatterns.forEach((pattern, index) => {
            storyHTML += `<p>${pattern({chapter: i, index})}</p>`;
        });
    }

    // Add a strong epilogue to ensure the story exceeds 3000 words
    storyHTML += `<h2>Epilogue</h2>`;
    storyHTML += `<p>In the final moments, the story of ${book.title} draws to a close with a tone that matches the category of the book. It feels like a gentle goodbye for the reader, while still leaving space for the imagination to wander beyond the last line.</p>`;
    storyHTML += `<p>The journey has been long and rich, full of scenes that linger and characters who stay with the reader long after the page is closed. The power of ${book.author}'s work is echoed throughout, and the narrative remains faithful to the spirit of ${book.category}.</p>`;
    storyHTML += `<p>Ultimately, the ending is built not on a single moment but on the accumulation of every choice, every discovery, and every emotion that arrived along the way. It is a conclusion that feels earned and quietly transformative, leaving the reader with a sense of fulfillment and a lingering desire to revisit the world again.</p>`;

    return storyHTML;
}


// ✅ MOVED OUTSIDE (GLOBAL)
function startReading(id) {
    console.log("CLICKED", id);

    const book = books.find(b => b.id === id);

    const overlay = document.getElementById('readerOverlay');
    const title = document.getElementById('readingTitle');
    const author = document.getElementById('readingAuthor');
    const content = document.getElementById('textContent');

    if (!overlay || !title || !author || !content) {
        console.error("Missing HTML elements!");
        return;
    }

    title.innerText = book.title;
    author.innerText = book.author;
    content.innerHTML = generateStory(book);

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
window.startReading = startReading;

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
