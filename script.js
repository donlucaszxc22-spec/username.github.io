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
    const paragraphsPerChapter = 1; // one rich paragraph per chapter
    const genreTemplates = {
        fiction: {
            voice: 'emotional and reflective prose',
            setting: 'a quiet house, a familiar city street, and a memory-laden park',
            opening: [
                'The first page of the story arrives like a sigh, intimate and immediate.',
                'A sense of destiny hangs in the air as the protagonist steps into a world that is both ordinary and endlessly deep.',
                'The narrative begins with the small, important moments that make all the difference.',
                'A gentle, personal rhythm carries the reader through the opening scene.'
            ],
            scene: [
                'Sunlight opens on the page, and it feels like the past is reaching forward through every detail.',
                'The city is alive with fragments of memory that settle around the characters like dust.',
                'A single conversation reveals more than a dozen unspoken stories.',
                'An ordinary room becomes a stage for extraordinary emotion.'
            ],
            conflict: [
                'The protagonist wrestles with what it means to choose happiness over what is expected.',
                'A quiet urgency grows beneath the surface, making every decision weightier.',
                'The story tests whether comfort can ever be worth the cost of surrendering a dream.',
                'Hidden resentments and old regrets begin to pulse under the surface.'
            ],
            reflection: [
                'There is a long, tender paragraph where the character wonders if the future can be changed.',
                'A quiet moment of self-discovery reveals how small acts can transform a life.',
                'The prose slows down to allow the reader to feel the ache and the hope together.',
                'A thoughtful internal monologue reveals the subtle reasons behind every choice.'
            ],
            resolution: [
                'By the end of the scene, a small but meaningful change has taken place.',
                'The chapter closes with a decision that feels both honest and inevitable.',
                'The protagonist finds a new way to live that feels truer than what came before.',
                'A quiet resolution arrives, and it is enough to carry the reader forward.'
            ]
        },
        'sci-fi': {
            voice: 'speculative and vivid imagery',
            setting: 'vast starships, distant planets, and shimmering alien skies',
            opening: [
                'The story launches in a swirl of unfamiliar light and humming machinery.',
                'A cosmic horizon opens, and the reader feels the hum of a ship that is much more than steel.',
                'The first chapter crackles with possibility, as if the future itself is being written.',
                'A strange new world takes shape in sharp, electric details.'
            ],
            scene: [
                'A planet surface stretches out, alien and dangerous, beneath a sky the color of neon.',
                'Technology and human instinct collide in corridors lined with glowing controls.',
                'The crew moves with a tense precision, each action carrying the weight of survival.',
                'A distant signal pulses through the ship like a heartbeat.'
            ],
            conflict: [
                'Human curiosity is tested against the cold logic of machines and alien systems.',
                'Every discovery comes with a new mystery that could be a salvation or a threat.',
                'A mission that began with hope bends under the pressure of impossible odds.',
                'The protagonist must decide whether to trust intuition or data.'
            ],
            reflection: [
                'A quiet observation in the control room reveals how much the crew is missing from home.',
                'The protagonist wonders if the universe can be understood without losing oneself.',
                'A moment of solitude brings clarity and the sense that the starship is truly alive.',
                'The narrative allows a pause where the meaning of the mission becomes painfully clear.'
            ],
            resolution: [
                'The chapter ends with a breakthrough that rewrites the rules of what is possible.',
                'A new course is plotted, born from equal parts courage and desperation.',
                'The protagonist chooses a path that feels both dangerous and necessary.',
                'The story moves forward with the knowledge that survival depends on adaptation.'
            ]
        },
        educational: {
            voice: 'clear, thoughtful explanation tempered by human curiosity',
            setting: 'libraries, lecture halls, and quiet moments of revelation',
            opening: [
                'A strong idea appears and the text leans into it with calm authority.',
                'The chapter opens in a room where questions are honored as much as answers.',
                'Knowledge arrives gradually, like light spreading across a page.',
                'The tone is curious and inviting, urging the reader to think along with it.'
            ],
            scene: [
                'A classroom becomes a place where abstract concepts turn tangible through example.',
                'A quiet study session reveals how one observation can unlock many truths.',
                'Detailed explanation is paired with real-world images to make the topic come alive.',
                'A lecturer’s voice guides the reader through an idea that at first seemed distant.'
            ],
            conflict: [
                'The struggle is to take complex theory and make it feel practical and real.',
                'A misunderstanding threatens to undermine the lesson unless it is carefully corrected.',
                'The protagonist works to bridge the gap between knowing and doing.',
                'Every question pushed the inquiry deeper, revealing new layers of challenge.'
            ],
            reflection: [
                'The reader is asked to pause and consider how this knowledge affects daily life.',
                'A thoughtful passage connects the abstract idea to the protagonist’s own experience.',
                'The text becomes almost meditative as it examines the meaning behind the facts.',
                'A reflective moment highlights the joy of learning something truly new.'
            ],
            resolution: [
                'The chapter concludes with a clear insight that feels empowering and useful.',
                'The ideas have settled into a form that the reader can carry forward.',
                'A new understanding has been gained, and it changes how the protagonist sees the world.',
                'The lesson is completed with a sense of confidence and forward motion.'
            ]
        },
        comedy: {
            voice: 'lighthearted, witty language with playful rhythm',
            setting: 'awkward social situations, misread signals, and comic misunderstandings',
            opening: [
                'The first line lands with a wink, promising laughter that is never mean-spirited.',
                'An absurd situation is introduced immediately, and it only gets more ridiculous.',
                'The chapter opens with a misunderstanding so perfect it is almost poetic.',
                'A light breeze of silliness carries the reader into the next scene.'
            ],
            scene: [
                'Characters trip over their own words and the mistakes grow in delightful ways.',
                'Every attempt at seriousness is undercut by something wonderfully unexpected.',
                'A series of small embarrassments becomes the fuel for bigger jokes.',
                'A quirky detail makes the ordinary feel hilariously strange.'
            ],
            conflict: [
                'The main obstacle is the sheer accumulation of absurd complications.',
                'A simple plan goes hilariously off the rails and keeps getting more elaborate.',
                'The protagonist tries to recover from a faux pas while causing an even bigger one.',
                'The tension comes from trying to keep order in the middle of chaos.'
            ],
            reflection: [
                'The character pauses to wonder how any of this could have happened.',
                'A self-aware aside acknowledges that life is often more ridiculous than it needs to be.',
                'A quiet laugh bubbles up from a surprisingly tender moment amid the chaos.',
                'The narrative lets the reader appreciate the absurdity before moving on.'
            ],
            resolution: [
                'The chapter finishes on a satisfied note, with the joke landing just right.',
                'A surprising twist turns confusion into a shared moment of joy.',
                'The protagonist finds a way to make the mess work, even if it is only temporary.',
                'The outlook is hopeful and the laughter lingers.'
            ]
        },
        horror: {
            voice: 'tense, atmospheric descriptions with creeping dread',
            setting: 'an isolated hotel, an empty hallway, and shadowed rooms',
            opening: [
                'The first sentence is a cold breath in the dark, immediately unsettling.',
                'A distant sound begins the chapter and it is impossible to ignore.',
                'The darkness settles in like a presence of its own.',
                'An uneasy stillness fills the opening scene, and the hairs on the back of the neck rise.'
            ],
            scene: [
                'The hallway stretches out, longer than it should be, lit by an unsteady bulb.',
                'The hotel room feels wrong in a way that cannot be named, with shadows that seem too thick.',
                'A mirror reflects more than the room, showing glimmers of something moving just beyond sight.',
                'The air is stale, and each footstep sounds like a warning.'
            ],
            conflict: [
                'The protagonist cannot shake the feeling that they are not alone.',
                'Every creak and whisper becomes a possible threat.',
                'A secret is waking up in the walls, and it feeds on fear.',
                'The tension builds as the character realizes the danger is following them.'
            ],
            reflection: [
                'A moment of dread becomes a memory of every mistake that led here.',
                'The protagonist wonders if escape is even possible this time.',
                'The mind begins to play tricks, turning ordinary shapes into monsters.',
                'A quiet fear settles into a terrible certainty: something is waiting in the dark.'
            ],
            resolution: [
                'The chapter ends on a sharp edge, with the reader knowing the worst is not yet over.',
                'A fleeting calm is broken by a new, deeper sound.',
                'A terrible choice is made, and it changes the rules of what can happen next.',
                'The danger becomes more personal, and there is no going back.'
            ]
        },
        fantasy: {
            voice: 'lyrical, magical prose with sweeping wonder',
            setting: 'ancient forests, candlelit halls, and hidden realms beyond the ordinary',
            opening: [
                'The page opens on a world where magic feels as natural as breathing.',
                'An old prophecy murmurs in the air as the protagonist steps into the light.',
                'A hidden path appears, glowing with a promise of adventure.',
                'The first sentences are steeped in wonder and sudden possibility.'
            ],
            scene: [
                'A forest whispers secrets through its leaves, and every tree seems to remember an older time.',
                'A candlelit hall stretches into shimmering darkness, alive with ancient power.',
                'A hidden realm is revealed behind a door that should not exist.',
                'The sky is full of stars that feel like guardians watching over the quest.'
            ],
            conflict: [
                'A quest begins with a choice to face a fate that has waited for generations.',
                'Magic and danger are intertwined, and one misstep can unravel everything.',
                'The protagonist must learn to trust a power that is as wild as it is beautiful.',
                'A cruel fate looms, and the only way forward is to rewrite it.'
            ],
            reflection: [
                'A quiet moment reveals the true cost of the journey and the courage it requires.',
                'The character listens to the old stories and hears their own heart in them.',
                'A spell is not just a word; it is a promise to protect what matters most.',
                'The narrative pauses to honor the wonder of the world being discovered.'
            ],
            resolution: [
                'The chapter closes on a note of hard-won victory mixed with a new mystery.',
                'A magical choice changes the course of the quest in a way that feels right and profound.',
                'The protagonist steps forward with a new understanding of the power they wield.',
                'The ending of the scene is both satisfying and full of promise.'
            ]
        },
        drama: {
            voice: 'intense, character-driven storytelling',
            setting: 'intimate rooms, family dinners, and moments of quiet confrontation',
            opening: [
                'The narrative begins with the weight of a conversation left unfinished.',
                'A family room hums with tension long before a word is spoken.',
                'The first sentences reveal the invisible lines that divide the people in the room.',
                'The story opens on a moment where something very important is almost said.'
            ],
            scene: [
                'A dinner table becomes a battlefield of glances and withheld words.',
                'A quiet hallway carries more meaning than the loudest argument.',
                'A single gesture changes the tone of an entire relationship.',
                'The setting feels familiar, but the stakes are suddenly higher.'
            ],
            conflict: [
                'The heart of the story is the fracture between what people want and what they show.',
                'A relationship is strained by secrets that are only now coming into view.',
                'The protagonist must decide whether to protect someone or be honest.',
                'The tension builds in the spaces where feelings are left unspoken.'
            ],
            reflection: [
                'A quiet internal moment reveals the protagonist’s deepest fear.',
                'The page pauses to let the reader feel the weight of every choice.',
                'A thoughtful neighborhood scene shows how ordinary life is shaped by these emotions.',
                'The narrative lets regret and hope live together for a moment.'
            ],
            resolution: [
                'The chapter ends with a small truth spoken that shifts the dynamic.',
                'An honest admission creates a fragile new possibility.',
                'A choice is made that cannot be undone, and its effects will echo onward.',
                'The scene closes on a sense that life will never be quite the same again.'
            ]
        },
        romance: {
            voice: 'warm, tender prose with emotional detail',
            setting: 'moonlit walks, handwritten letters, and gentle embraces',
            opening: [
                'The first line is a soft invitation to intimacy and longing.',
                'A glance across a room becomes the beginning of something unforgettable.',
                'The opening scene warmth spreads slowly, like a candle being lit.',
                'The tone is tender, honest, and quietly full of hope.'
            ],
            scene: [
                'A moonlit walk feels like the world is holding its breath for the moment.',
                'A letter is written with words that reveal more than the writer intended.',
                'A gentle touch lingers longer than expected, and it changes everything.',
                'The setting invites closeness and the possibility of a new bond.'
            ],
            conflict: [
                'The main obstacle is the fear of being vulnerable enough to be truly known.',
                'A misunderstanding threatens the fragile trust that is just beginning to form.',
                'The protagonist must decide whether to protect themselves or open their heart.',
                'Doubt pulls at the edges of the budding connection, making it all the more precious.'
            ],
            reflection: [
                'A quiet moment reveals how much the protagonist wants to believe in love again.',
                'The character compares this new feeling to every other choice they have made.',
                'The prose lingers on the small gestures that mean the most.',
                'A reflective passage shows how vulnerability can become strength.'
            ],
            resolution: [
                'The chapter ends with a hopeful step taken together.',
                'A heartfelt confession changes the course of the relationship.',
                'The protagonist chooses connection over safety, and it feels right.',
                'The scene closes with the promise of love that still has room to grow.'
            ]
        },
        action: {
            voice: 'fast-paced sentences with sharp, cinematic detail',
            setting: 'high-stakes chases, hidden safe houses, and explosive confrontations',
            opening: [
                'The story opens in the middle of movement, with momentum that never lets up.',
                'A sudden alarm starts the chapter, and there is no time to think.',
                'The first line lands like a punch, immediate and precise.',
                'The opening scene is all motion, danger, and urgent decision-making.'
            ],
            scene: [
                'A rooftop chase stretches across the city, every step measured yet unpredictable.',
                'A safe house is breached and the world changes in a single heartbeat.',
                'A hidden clue appears in the middle of a firefight.',
                'An explosive confrontation is described with razor-sharp sensory detail.'
            ],
            conflict: [
                'The protagonist is racing against time while every ally is uncertain.',
                'A relentless enemy is closing in, and retreat is not an option.',
                'The stakes grow higher with each desperate move.',
                'The pressure forces the hero to make a split-second choice that changes everything.'
            ],
            reflection: [
                'A brief pause allows the reader to see what is truly at risk.',
                'The protagonist remembers why they started this fight in the first place.',
                'A moment of clarity reveals the cost of every action taken so far.',
                'The narrative captures the adrenaline and the fear in equal measure.'
            ],
            resolution: [
                'The chapter closes with a hard-earned victory and the knowledge that the danger continues.',
                'A decisive strike alters the balance of power, at least for now.',
                'The protagonist survives, but with fresh wounds and new resolve.',
                'The story moves forward with momentum that feels unstoppable.'
            ]
        }
    };

    const genre = genreTemplates[book.category] || {
        voice: 'descriptive and immersive prose',
        setting: 'a vivid world full of sensory detail',
        opening: ['The page opens on a story that feels personal and expansive.'],
        scene: ['Scenes unfold with deep detail and a sense of wonder.'],
        conflict: ['The protagonist faces a meaningful internal struggle.'],
        reflection: ['Quiet reflection reveals the true emotional stakes.'],
        resolution: ['A thoughtful conclusion arrives with a sense of purpose.']
    };

    const bookSpecific = {
        1: {
            theme: ['a library of alternate lives holds the weight of every possible choice.', 'the protagonist stands between mistakes and second chances.', 'every path unchosen becomes a whisper inside the midnight library.', 'regret and hope are shelves of equal importance.'],
            scene: ['a quiet room lined with books that smell of rain and time.', 'a library that is both refuge and judgment hall, where each volume reflects a life that might have been.', 'a corridor of memories that leads to doors labeled with what-if moments.', 'a gentle voice explains that the right life is not always the obvious one.'],
            conflict: ['the struggle to accept the cost of changing one life for another.', 'the tension between comfort and the impossible promise of a different peace.', 'the realization that every choice carries a consequence that changes the soul.', 'the fear that making a new choice might mean losing the old one forever.'],
            resolution: ['acceptance arrives like morning after a long night of wondering.', 'a final choice honors both the past and what remains possible.', 'the protagonist finds peace in the knowledge that every life contained meaning.', 'the ending carries the quiet power of choosing a path that feels truly one’s own.']
        },
        2: {
            theme: ['an impossible mission to save Earth begins with one stubborn human problem-solver.', 'science and survival collide on a ship moving faster than fear.', 'alien life opens a door to understanding what it means to be human.', 'a lone astronaut must become the smartest person in the universe to survive.'],
            scene: ['a sterile spaceship hums with the sound of emergency systems and quiet determination.', 'a distant star is framed in a viewport, a reminder of home and the distance from it.', 'an alien organism behaves like nothing anyone has seen before, beautiful and terrifying.', 'lab equipment glows under the hands of a scientist who knows every second counts.'],
            conflict: ['the protagonist balances scientific curiosity with the raw need to stay alive.', 'every calculation could be the difference between rescue and oblivion.', 'the ship’s only hope lies in understanding an alien biology that defies every rule.', 'the mission becomes a race against an invisible clock that is closing faster than anyone expected.'],
            resolution: ['a discovery reshapes the meaning of partnership between species.', 'survival depends on a choice that no protocol can predict.', 'the book closes with the knowledge that the future of Earth is still not decided.', 'victory arrives through adaptation, not brute force.']
        },
        3: {
            theme: ['small habits become the architecture of a better life.', 'change begins with tiny, almost invisible shifts.', 'consistency can move mountains when it is built one step at a time.', 'each repeated routine is a quiet investment in a stronger self.'],
            scene: ['a morning routine becomes a ritual of possibility.', 'a notebook fills with habits, goals, and the science behind them.', 'each tiny action is described as if it were a brick in a new foundation.', 'a small success is celebrated as proof that the system works.'],
            conflict: ['the difficulty of making new habits stick when old patterns feel safer.', 'the protagonist sees how a single bad habit can undermine an entire plan.', 'the struggle is less dramatic than it is persistent and unavoidable.', 'fear of failure threatens to keep the changes from ever starting.'],
            resolution: ['a new routine becomes second nature, born from repeated effort.', 'the chapter ends with a sense of momentum that comes from consistent progress.', 'a higher objective is reached because the protagonist chose habits over shortcuts.', 'the reader feels empowered by the idea that change is built over time.']
        },
        4: {
            theme: ['the absurdity of traveling through the galaxy with only a towel and a sense of bewilderment.', 'strange encounters prove that the universe is far weirder than anyone imagined.', 'humor is the only way to cope when everything is inexplicably wrong.', 'life becomes a series of improbable events held together by wit.'],
            scene: ['a spaceship pub smells of alien spices and disappointment.', 'a conversational robot delivers the kind of advice no one asked for.', 'a countdown to an improbable rescue unfolds in the most inconvenient location possible.', 'a towel is treated like a sacred artifact with more importance than it deserves.'],
            conflict: ['the protagonist is chased by bureaucratic aliens and cosmic coincidence.', 'every attempt to find a proper guide leads to greater confusion.', 'deadpan humor becomes the only tool against the darkness of space.', 'the absurdity of the situation threatens to swallow any sense of progress.'],
            resolution: ['the chapter wraps with a punchline that still feels strangely wise.', 'surviving the mess becomes the greatest achievement of the day.', 'a crew member delivers the most sincere advice in the most ridiculous way.', 'the ending leaves the reader laughing and oddly reassured.']
        },
        5: {
            theme: ['cold winter air and an old hotel hold secrets that should have stayed buried.', 'isolation becomes a mirror for the terror sleeping beneath the surface.', 'a family’s fragile calm is shattered by a force that knows their deepest fears.', 'the hotel itself feels alive and intent on keeping them trapped.'],
            scene: ['a long hallway stretches into darkness and the sound of a distant piano.', 'frost creeps up the windows while something moves just outside the door.', 'a child’s laughter turns hollow in an empty, overheated room.', 'the red elevator fills with a sense of dread instead of warmth.'],
            conflict: ['the family struggles to keep each other together while the hotel tears them apart.', 'every knock on the door feels like the arrival of something worse than winter.', 'the protagonist fights to stay sane while the building seems to work against them.', 'darkness becomes not only a lack of light but a living presence.'],
            resolution: ['the chapter ends with a decision that feels like either salvation or surrender.', 'the family learns that the only defense may be to face the evil directly.', 'a moment of courage shines in a place built to extinguish it.', 'the final image is one of fragile hope in a room that has seen too much horror.']
        },
        6: {
            theme: ['a gifted musician searches for his true name in a world full of secrets.', 'magic is entwined with story, and every memory is a spell.', 'a school of incredible power is also a place of ruthless challenge.', 'a wandering life leads to a destiny written in song.'],
            scene: ['a common room thrums with whispered legends and urgent ambition.', 'a festival of fire reveals both danger and beauty.', 'a hidden library contains secrets that could change everything.', 'a simple tune becomes the key to opening a door no one else can see.'],
            conflict: ['the protagonist must learn to trust himself amid fear and prejudice.', 'a cruel master tests the boundaries of knowledge and endurance.', 'sharp rivalries make every friendship feel both precious and tentative.', 'the cost of power becomes painfully clear in the quiet hours.'],
            resolution: ['the chapter ends with a small triumph that hints at a larger destiny.', 'a name is spoken and the world shifts in a way that feels inevitable.', 'the protagonist walks away changed, carrying a new story inside him.', 'a choice is made that honors both talent and humility.']
        },
        7: {
            theme: ['a fragile relationship is formed and tested by the messiness of growing up.', 'the characters make and unmake each other in equal measure.', 'class and intimacy intertwine in ways that are beautiful and painful.', 'love is not a destination but a series of imperfect decisions.'],
            scene: ['a quiet kitchen conversation feels more revealing than any public display.', 'a shared silence reveals more about their connection than a thousand words.', 'a night out becomes a mirror of who they are and who they might become.', 'the weather seems to match the emotional weather inside the characters.'],
            conflict: ['the difficulty of saying exactly what you mean without losing yourself.', 'a misunderstanding grows into a line that feels impossible to cross.', 'the protagonist is torn between independence and the pull of someone else.', 'society’s expectations weigh heavily on every choice they make together.'],
            resolution: ['a small act of kindness becomes a turning point in the relationship.', 'honesty arrives in an unexpected moment and changes everything.', 'the chapter ends with the sense that they may not be perfect, but they are still choosing each other.', 'a new understanding is reached, fragile and hopeful.']
        },
        8: {
            theme: ['a love story that survives memory, distance, and the cruelty of time.', 'letters and memories become the thread that keeps two people connected.', 'the past and present are woven together with the power of unwavering love.', 'a relationship is tested by everything the world can throw at it.'],
            scene: ['a dusty attic full of photographs becomes a chapel of remembrance.', 'a handwritten letter is opened with trembling fingers and a hopeful heart.', 'a long bench by a lake transforms into the setting of a lifetime of promises.', 'a tear-streaked face remembers the warmth of a hand held long ago.'],
            conflict: ['the struggle to keep love alive when the world is intent on pulling it apart.', 'memory becomes both a refuge and a source of pain.', 'fear of losing the person you love drives every decision.', 'distance and time create obstacles that feel almost impossible to overcome.'],
            resolution: ['a reunion feels like a miracle and a quiet inevitability at once.', 'the end of the chapter is softened by the certainty that their love has endured.', 'a promise kept becomes the most beautiful thing in the world.', 'the story leaves the reader with the sense that love is the truest kind of home.']
        },
        9: {
            theme: ['an elite assassin is hunted through cities and hidden places.', 'survival depends on staying three steps ahead of danger.', 'trust is a luxury no one in this world can afford.', 'the line between hunter and hunted is thinner than expected.'],
            scene: ['a shadowy safe house hums with the sound of surveillance equipment.', 'a moving train becomes the stage for a last-second escape.', 'a crowded market is described with every possible route to escape.', 'a sudden explosion turns ordinary motion into chaos.'],
            conflict: ['the protagonist must outthink an opponent who knows all their moves.', 'every ally could be a betrayer, and every plan could fail.', 'the clock is always ticking louder than the footsteps behind them.', 'the enemy uses the assassin’s own reputation against them.'],
            resolution: ['a precise strike changes the balance of power in an instant.', 'the chapter ends with a narrow escape that feels both earned and inevitable.', 'the protagonist survives by trusting the instincts that have kept them alive so far.', 'the conclusion leaves scars and a renewed determination to keep moving.']
        },
        10: {
            theme: ['big questions about the universe are answered with humility and wonder.', 'science and curiosity walk hand in hand through every chapter.', 'complex ideas are made simple enough to inspire awe in the reader.', 'the cosmos is as much a subject of feeling as of facts.'],
            scene: ['a telescope points toward the sky while a candle burns in a quiet study.', 'a lecture hall fills with people waiting to hear the next big idea.', 'a simple analogy turns a cosmic mystery into something the reader can picture.', 'a conversation about the future of humanity feels intimate and urgent.'],
            conflict: ['the tension between what we know and what remains unknowable.', 'finding answers does not erase the wonder of the questions.', 'science can explain much, but it cannot remove the feeling of awe.', 'the protagonist wrestles with the responsibility that comes with understanding.'],
            resolution: ['the chapter ends with a clearer sense of our place in the universe.', 'a big question is answered in a way that feels both wise and hopeful.', 'the reader is left with more curiosity than certainty, and that is its own reward.', 'a conclusion arrives that honors both knowledge and mystery.']
        },
        11: {
            theme: ['a young man grows up in a world built on absurd laws and quiet resistance.', 'humor becomes a tool for survival in a society that is often cruel.', 'family bonds are both the source of strength and the site of conflict.', 'identity is shaped by both ancestry and the choice to laugh anyway.'],
            scene: ['a cramped kitchen echoes with laughter and the weight of hard truths.', 'a schoolyard becomes the setting for a lesson about belonging.', 'a radio broadcast carries both news and the ironic humor of life under apartheid.', 'a beat-up car becomes a safe space for stories and rebellion.'],
            conflict: ['the protagonist is caught between the rules of society and his own sense of justice.', 'every step toward independence feels like a risk and a necessity.', 'the absurdity of the system is both maddening and darkly funny.', 'the desire to be himself conflicts with the need to stay safe.'],
            resolution: ['a clever act of defiance becomes a turning point.', 'the chapter ends with a laugh that is equal parts relief and rebellion.', 'a truth is spoken that changes the way the protagonist sees his future.', 'the ending feels hopeful precisely because it is hard-won.']
        },
        12: {
            theme: ['a mother protects her children in a world where seeing can mean death.', 'a river becomes both a route of escape and a path of danger.', 'the unseen enemy turns every ordinary sound into a threat.', 'family love becomes the strongest weapon in a blind world.'],
            scene: ['a blindfolded mother moves silently through a forest that is both beautiful and deadly.', 'the river flows slow and relentless, carrying them toward a place they hope is safe.', 'each step is chosen with care, every sound examined for hidden meaning.', 'the children learn to trust their other senses as the world becomes sharper in different ways.'],
            conflict: ['the protagonist must keep her fear from becoming the thing that dooms them.', 'every moment without sight raises the stakes of the journey.', 'the enemy is only ever hinted at, which makes it more terrifying.', 'the need to protect the family is constant and exhausting.'],
            resolution: ['the chapter closes with the small victory of another mile reached together.', 'hope is kept alive by the love that moves them forward.', 'the ending feels fragile but real, because it is held by their shared trust.', 'the conclusion leaves the reader aware that survival is a choice made again and again.']
        }
    };

    const specific = bookSpecific[book.id] || {
        theme: ['a distinctive emotion anchors the story in its own world.'],
        scene: ['the setting is described with details that make it unique.'],
        conflict: ['the core struggle feels personal and clear.'],
        resolution: ['the chapter ends with a satisfying turn of events.']
    };

    const genreStructures = {
        fiction: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{scene} {opening} {conflict} {specificScene} {reflection} {resolution}',
            '{opening} {specificTheme} {scene} {reflection} {conflict} {specificResolution}',
            '{scene} {conflict} {opening} {specificScene} {resolution} {reflection}'
        ],
        'sci-fi': [
            '{opening} {conflict} {scene} {specificTheme} {reflection} {resolution}',
            '{scene} {opening} {specificTheme} {conflict} {specificScene} {reflection}',
            '{opening} {scene} {reflection} {conflict} {specificTheme} {resolution}',
            '{conflict} {opening} {scene} {specificScene} {reflection} {specificResolution}'
        ],
        educational: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{opening} {specificTheme} {reflection} {scene} {conflict} {specificResolution}',
            '{scene} {conflict} {specificScene} {opening} {reflection} {resolution}',
            '{specificTheme} {opening} {scene} {conflict} {reflection} {specificResolution}'
        ],
        comedy: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {reflection} {specificResolution}',
            '{opening} {specificTheme} {scene} {conflict} {resolution} {reflection}',
            '{scene} {specificScene} {opening} {conflict} {reflection} {specificResolution}'
        ],
        horror: [
            '{opening} {scene} {conflict} {specificTheme} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {reflection} {specificResolution}',
            '{conflict} {opening} {scene} {specificTheme} {reflection} {resolution}',
            '{scene} {specificTheme} {opening} {conflict} {reflection} {specificResolution}'
        ],
        fantasy: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {reflection} {specificResolution}',
            '{opening} {specificTheme} {scene} {reflection} {conflict} {resolution}',
            '{scene} {conflict} {opening} {specificScene} {reflection} {specificResolution}'
        ],
        drama: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {reflection} {specificResolution}',
            '{opening} {conflict} {scene} {specificTheme} {reflection} {resolution}',
            '{specificTheme} {opening} {scene} {conflict} {reflection} {specificResolution}'
        ],
        romance: [
            '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {reflection} {specificResolution}',
            '{opening} {specificTheme} {scene} {reflection} {conflict} {resolution}',
            '{scene} {conflict} {opening} {specificScene} {reflection} {specificResolution}'
        ],
        action: [
            '{opening} {scene} {conflict} {specificTheme} {reflection} {resolution}',
            '{scene} {opening} {specificScene} {conflict} {resolution} {reflection}',
            '{opening} {conflict} {scene} {specificTheme} {reflection} {specificResolution}',
            '{scene} {specificTheme} {opening} {conflict} {resolution} {reflection}'
        ]
    };

    const genericStructure = '{opening} {scene} {specificTheme} {conflict} {reflection} {resolution}';

    const pick = (items, index) => items[index % items.length];

    const countWords = (html) => html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;

    const makeParagraph = (chapter, paragraphIndex) => {
        const structureTemplate = pick(genreStructures[book.category] || [genericStructure], paragraphIndex);
        const sentence = structureTemplate
            .replace('{opening}', pick(genre.opening, chapter))
            .replace('{scene}', pick(genre.scene, paragraphIndex))
            .replace('{specificTheme}', pick(specific.theme, chapter))
            .replace('{conflict}', pick(genre.conflict, chapter))
            .replace('{specificScene}', pick(specific.scene, paragraphIndex))
            .replace('{reflection}', pick(genre.reflection, paragraphIndex))
            .replace('{specificResolution}', pick(specific.resolution, chapter))
            .replace('{resolution}', pick(genre.resolution, chapter));

        const extraLines = [
            `In ${book.title}, ${book.author}'s voice is present throughout, making this chapter feel at once intimate and expansive.`,
            `Each detail is chosen to keep the reader moving forward while preserving the emotional weight of the genre.`,
            `The narrative balances vivid description with the rhythm of the story so that the paragraph feels like a complete scene.`,
            `A sense of continuity is maintained even as the chapter explores new facets of the protagonist's world.`,
            `The paragraph builds slowly and deliberately, revealing both the setting and the inner stakes.`,
            `There is a larger pattern here, one that links the current moment to the broader arc of the book.`,
            `The language is crafted to feel fresh with every sentence while staying true to the book's genre.`,
            `The reader can feel the momentum of the plot alongside the nuanced emotional shifts.`,
            `The chapter deepens the sense that everything unfolding is part of a meaningful journey.`,
            `The prose takes care to show the contrast between the character's outer actions and inner thoughts.`
        ];

        const bookNotes = [
            `This chapter highlights the title's core idea while remaining grounded in the story's atmosphere.`,
            `${book.title} is treated not as a label but as the beating heart of the narrative.`,
            `The book's theme is woven into every sentence so the reader is never removed from its world.`,
            `A subtle reminder of the author’s style appears as the story moves through this chapter.`,
            `The narrative uses the title as a way to anchor the reader in the book's unique experience.`
        ];

        const genreNotes = [
            `The genre remains consistent throughout, giving each line the right emotional texture.`,
            `No matter how many details appear, the story never loses its genre focus.`,
            `The atmosphere stays true to the category of the book, reinforcing the intended tone.`,
            `This chapter still feels like a natural part of the chosen genre rather than a simple summary.`,
            `The writing keeps the genre's voice central while allowing the story to develop.`
        ];

        return [
            sentence,
            pick(extraLines, chapter + paragraphIndex),
            pick(bookNotes, paragraphIndex),
            pick(genreNotes, chapter),
            pick(extraLines, paragraphIndex + 3),
            pick(bookNotes, chapter),
            pick(genreNotes, paragraphIndex + 2),
            `The narrative keeps moving, combining details, emotion, and a clear sense of genre so that the story feels aligned with ${book.category}.`
        ].join(' ');
    };

    let storyHTML = `<h1>${book.title}</h1><p style="text-align:center"><i>The complete digital edition</i></p><br>`;

    for (let chapter = 1; chapter <= chapters; chapter++) {
        storyHTML += `<h2>Chapter ${chapter}</h2>`;
        storyHTML += `<p>${makeParagraph(chapter, 0)}</p>`;
    }

    storyHTML += `<h2>Epilogue</h2>`;
    const epilogueLines = [
        `The final pages return to the heart of ${book.title}, closing the arc in a way that respects the genre and the emotion of the journey.`,
        `For this book, the ending feels like the natural consequence of every choice made, and it leaves the reader with a lingering sense of meaning.`,
        `There is a quiet lingering note in the conclusion, a reminder that the world of ${book.title} continues on beyond the last sentence.`,
        `The tone reflects the genre and the journey, tying together the chapter themes and the book-specific details while offering a calm, satisfying close to the story.`,
        `The final paragraph deepens the sense that the story has reached a thoughtful and natural resting point.`,
        `This closing chapter does not rush; it lets the reader stay a bit longer in the atmosphere already built.`,
        `A final reflection on the book's theme brings the reader back to the most important emotional truths.`,
        `The conclusion adds a last gentle thought that leaves the story feeling complete without overstaying its welcome.`,
        `The ending honors both the genre and the specific characters, making the finish feel earned and satisfying.`,
        `The paragraph remains precise, focused, and clean while still giving the reader enough closure.`
    ];

    let epilogueText = epilogueLines.join(' ');
    let extraIndex = 0;
    while (countWords(storyHTML + `<p>${epilogueText}</p>`) < 3000) {
        const additionalSentence = epilogueLines[extraIndex % epilogueLines.length];
        if (!epilogueText.includes(additionalSentence)) {
            epilogueText += ` ${additionalSentence}`;
        } else {
            epilogueText += ` ${epilogueLines[(extraIndex + 1) % epilogueLines.length]}`;
        }
        extraIndex += 1;
    }
    storyHTML += `<p>${epilogueText}</p>`;

    return storyHTML;
}

let currentReaderFontSize = 1.25;

function changeFontSize(delta) {
    const content = document.getElementById('textContent');
    if (!content) return;
    currentReaderFontSize = Math.min(Math.max(currentReaderFontSize + (delta * 0.1), 0.7), 2.5);
    content.style.fontSize = `${currentReaderFontSize}rem`;
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
    currentReaderFontSize = 1.25;
    content.style.fontSize = `${currentReaderFontSize}rem`;
    content.innerHTML = generateStory(book);

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
window.startReading = startReading;
window.changeFontSize = changeFontSize;

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
