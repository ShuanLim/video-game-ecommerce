const db = require('./connection');
const { User, Game, Genre, Platform, Cart } = require('../models');

db.once('open', async () => {
    await Genre.deleteMany();

    const genres = await Genre.insertMany([
        { genreName: 'Action-Adventure' },
        { genreName: 'Shooter' },
        { genreName: 'Puzzle'},
        { genreName: 'Sports' },
        { gameGenre: 'Simulation' },
        { gameGenre: 'Racing' },
        { gameGenre: 'Fighting'},
        { gameGenre: 'MMORPG'}
    ]);

    console.log('genres seeded');

    await Platform.deleteMany();

    const platforms = await Platform.insertMany([
        { platformName: 'Nintendo' },
        { platformName: 'XBox' },
        { platformName: 'PC'},
        { platformName: 'PlayStation'}
    ]);

    console.log('platforms seeded');

    await Game.deleteMany();
    const games = await Game.insertMany([
        {
            gameName: 'Battlefield 2042',
            description: "Battlefield 2042 marks the return to the iconic all-out warfare of the franchise. Adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal. With support for 128 players*, prepare for unprecedented scale on vast environments. Take on massive experiences, from updated multiplayer modes like Conquest and Breakthrough to the all-new Battlefield™ Hazard Zone.",
            image: 'bf2042.png',
            price: '39.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Borderlands 3',
            description: "At the hard edge of the galaxy lies a group of planets ruthlessly exploited by militarized corporations. Brimming with loot and violence, this is your home—the Borderlands. Now, a crazed cult known as The Children of the Vault has emerged and is spreading like an interstellar plague. Play solo or co-op as one of four unique Vault Hunters, score loads of loot, and save the galaxy from this fanatical threat.",
            image: 'borderlands3.png',
            price: '39.99',
            quantity: '15',
            platform: platforms[3]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Fallout 3',
            description: "Fallout 3 is an action role-playing game set in the barren wasteland of a post-apocalyptic society. Players assume the role of a resident of an underground complex who emerges from a vault to explore a wasteland universe through a series of quests/missions.",
            image: 'fallout3.png',
            price: '29.99',
            quantity: '5',
            platform: platforms[1]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Far Cry 3',
            description: "Far Cry 3 is a first-person shooter set on the fictional Rook Islands, a tropical archipelago somewhere in the Pacific, controlled by pirates and mercenaries. Players control Jason Brody and can approach missions and objectives in a variety of ways.",
            image: 'farcry.png',
            price: '29.99',
            quantity: '20',
            platform: platforms[1]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Ghostbusters: The Video Game',
            description: "The game is a third-person shooter, placing players in the role of a new recruit to the Ghostbusters team known as the Rookie. Players control the Rookie's movements as he explores the environments of each level, seeking out paranormal activities and ghosts, either alone or in conjunction with the other Ghostbusters. Players can switch to a first-person perspective by equipping the Rookie with a PKE Meter and goggles. In this mode, paranormal items are highlighted and the PKE Meter helps direct players to ghosts or haunted artifacts.",
            image: 'ghostbusters.png',
            price: '19.99',
            quantity: '5',
            platform: platforms[3]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'God of War',
            description: "Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats, and a second chance at being a father. Together with his son Atreus, the pair will venture into the brutal Norse wilds and fight to fulfill a deeply personal quest.",
            image: 'godsofwar.png',
            price: '49.99',
            quantity: '10',
            platform: platforms[3]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Halo 4',
            description: "Witness the Master Chief’s triumphant return to battle an ancient evil bent on vengeance and annihilation. Shipwrecked on a mysterious world, faced with new enemies and deadly technology, the universe will never be the same.",
            image: 'halo4.png',
            price: '29.99',
            quantity: '10',
            platform: platforms[1]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Lego Star Wars',
            description: "Lego Star Wars: The Video Game (sometimes simply called Lego Star Wars) is a Lego-themed, action-adventure video game based on the Lego Star Wars line of toys, and the first installment in the Lego video game franchise developed by Traveller's Tales, which would develop all future Lego titles from that point on.",
            image: 'legostarwars.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[3]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Madden 2002',
            description: "Madden NFL 2002 is a game in the Madden NFL series. It is the first game in the Madden NFL series to appear on the GameCube, Xbox, and Game Boy Advance game consoles. It is also the first game to feature the Houston Texans team.",
            image: 'madden2002.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[1]._id,
            genre: genres[3]._id
        },
        {
            gameName: 'Super Mario Galaxy',
            description: "Super Mario Galaxy is set in outer space, where Mario travels through different galaxies to collect Power Stars, earned by completing missions, defeating a boss, or reaching a particular area. Each galaxy contains planetoids and orbiting structures for the player to explore.",
            image: 'mariogalaxy.png',
            price: '19.99',
            quantity: '15',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Animal Crossing',
            description: "The game follows a villager customized by the player, who, after purchasing a getaway package from Tom Nook, moves into a deserted island. After Tom Nook gives the player essentials, such as a tent, the game proceeds in a non-linear fashion, allowing for the player to play the game as they choose.",
            image: 'nintendoanimalcrossing.png',
            price: '19.99',
            quantity: '15',
            platform: platforms[0]._id,
            genre: genres[4]._id
        },
        {
            gameName: 'Battletoads',
            description: "Battletoads is a video game media franchise by Rare that began with the original beat 'em up game Battletoads in 1991. Starring three anthropomorphic toads named after skin conditions, Rash, Zitz, and Pimple, the series was created to rival the Teenage Mutant Ninja Turtles games series.",
            image: 'nintendobattletoads.png',
            price: '19.99',
            quantity: '1',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Battletoads',
            description: "Battletoads is a video game media franchise by Rare that began with the original beat 'em up game Battletoads in 1991. Starring three anthropomorphic toads named after skin conditions, Rash, Zitz, and Pimple, the series was created to rival the Teenage Mutant Ninja Turtles games series.",
            image: 'nintendobattletoads.png',
            price: '19.99',
            quantity: '1',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Coraline',
            description: "Coraline, also known as Coraline: The Game, is a 2009 game based on the film of the same name. It was released on January 27, 2009, in close proximity to the film's theatrical release.",
            image: 'nintendocaroline.png',
            price: '19.99',
            quantity: '5',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Cool World',
            description: "Cool World is an action game video game developed by British studio Painting By Numbers and released by Ocean Software in 1993 for the Super Nintendo Entertainment System. It is loosely based on the 1992 movie of the same name.",
            image: 'nintendocoolworld.png',
            price: '19.99',
            quantity: '3',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Duck Hunt',
            description: "Duck Hunt is a 1984 light gun shooter video game developed and published by Nintendo for the Nintendo Entertainment System video game console and the Nintendo Vs. System arcade hardware.",
            image: 'nintendoduckhunt.png',
            price: '19.99',
            quantity: '2',
            platform: platforms[0]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Excitebike',
            description: "Excitebike is a motocross racing video game developed and published by Nintendo.",
            image: 'nintendoexcitabkie.png',
            price: '19.99',
            quantity: '2',
            platform: platforms[0]._id,
            genre: genres[5]._id
        },
        {
            gameName: 'Jumanji',
            description: "Unite in adventure and laughter in the action-packed game of Jumanji, the ultimate team challenge for those seeking to leave their world behind.",
            image: 'nintendojumanji.png',
            price: '29.99',
            quantity: '10',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'The Lego Movie 2 Videogame',
            description: "The Lego Movie 2 Videogame is a Lego-themed action-adventure video game developed by Traveller's Tales and published by Warner Bros. Interactive Entertainment.",
            image: 'nintendolegomovie.png',
            price: '29.99',
            quantity: '5',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Mario Kart',
            description: "In Super Mario Kart, the player takes control of one of eight Mario series characters, each with differing capabilities. In single player mode players can race against computer-controlled characters in multi-race cups over three difficulty levels. During the races, offensive and speed boosting power-ups can be used to gain an advantage. Alternatively players can race against the clock in a Time Trial mode. In multiplayer mode two players can simultaneously take part in the cups or can race against each other one-on-one in Match Race mode. In a third multiplayer mode – Battle Mode – the aim is to defeat the other players by attacking them with power-ups, destroying balloons which surround each kart.",
            image: 'nintendomariokartoriginal.png',
            price: '19.99',
            quantity: '3',
            platform: platforms[0]._id,
            genre: genres[5]._id
        },
        {
            gameName: 'Mario Super Sluggers',
            description: "Mario Super Sluggers stars the ever-lovable Mario and his crew of friends. It builds on the social-gaming fun and movements people learned in Wii Sports and turns them into a full-fledged baseball game that can be played by every member of the household. Players make a throwing motion with the Wii Remote controller to pitch the baseball and make a swinging motion to swing at the pitch. The game boasts more than 30 playable Nintendo characters and all the madness of a Mario sports game. Just like Mario Kart Wii, it bridges the gap between experienced players and those new to the Wii console, with fun challenges and beautiful graphics.",
            image: 'nintendomariosupersluggers.png',
            price: '39.99',
            quantity: '10',
            platform: platforms[0]._id,
            genre: genres[3]._id
        },
        {
            gameName: 'NCAA Football 2004',
            description: "NCAA Football 2004 is an American football video game released in 2003 by Tiburon. It is the successor to NCAA Football 2003 in the NCAA Football series. The player on the cover is former USC quarterback Carson Palmer.",
            image: 'nintendoncaafootball2004.png',
            price: '19.99',
            quantity: '5',
            platform: platforms[0]._id,
            genre: genres[3]._id
        },
        {
            gameName: 'One Piece: Grand Battle',
            description: "One Piece: Grand Battle, is a fighting game made in Japan based on the anime and manga series One Piece. It is the fourth and final game in One Piece's Grand Battle series and the nineteenth One Piece video game released.",
            image: 'nintendoonepiece.png',
            price: '19.99',
            quantity: '5',
            platform: platforms[0]._id,
            genre: genres[6]._id
        },
        {
            gameName: 'Rampage',
            description: "Rampage is a 1986 arcade game by Bally Midway.[2] Players take control of a trio of gigantic monsters trying to survive against onslaughts of military forces. Each round is completed when a particular city is completely reduced to rubble.",
            image: 'nintendorampage.png',
            price: '19.99',
            quantity: '3',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Sonic: Lost World',
            description: "Sonic Lost World is a platform game with action-adventure elements, in which the player controls Sonic the Hedgehog as he travels across the Lost Hex in order to rescue captured animals and stop the Deadly Six.",
            image: 'nintendosoniclostworld.png',
            price: '24.99',
            quantity: '5',
            platform: platforms[0]._id,
            genre: genres[0]._id
        },
        {
            gameName: 'Nintendo World Cup',
            description: "Eight students known as Atsushi, Genei, Hiroyuki, Kunio, Masa, Masahiro, Susumu and Takashi compete in a soccer tournament against 13 other high schools.",
            image: 'nintendoworldcup.png',
            price: '19.99',
            quantity: '3',
            platform: platforms[0]._id,
            genre: genres[3]._id
        },
        {
            gameName: 'Pac-Man Collection',
            description: "Pac-Man Collection is a collection of Pac-Man games",
            image: 'pacman.png',
            price: '19.99',
            quantity: '7',
            platform: platforms[0]._id,
            genre: genres[2]._id
        },
        {
            gameName: 'Battlefield 2 Deluxe Edition',
            description: "Battlefield 2 is a first-person shooter video game, developed by DICE and published by Electronic Arts for Microsoft Windows in June 2005 as the third game in the Battlefield series.",
            image: 'pcbf2.png',
            price: '29.99',
            quantity: '5',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Destiny 2',
            description: "Destiny 2 is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie.",
            image: 'pcdestiny2.png',
            price: '59.99',
            quantity: '15',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Halo: Combat Evolved',
            description: "Halo: Combat Evolved is a 2001 first-person shooter science-fiction video game developed by Bungie Studios and the first game in the Halo series. It focuses on John-117 and the crew of the UNSC Pillar of Autumn who, fleeing from the Fall of Reach, stumble on the Forerunner Halo Installation 04, only to be forced into a desperate battle against the Covenant and the Flood.",
            image: 'pcdoom3.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Battlefield 4',
            description: "Fueled by the next-generation power and fidelity of Frostbite™ 3, Battlefield 4 provides a visceral, dramatic experience unlike any other. Only in Battlefield can you demolish the buildings shielding your enemy. Only in Battlefield will you lead an assault from the back of a gun boat. Do more and be more by playing to your strengths and carving your own path to victory. In addition to its hallmark multiplayer, Battlefield 4 features an intense, dramatic, character-driven campaign that starts with the evacuation of American VIPs from Shanghai and follows your squad’s struggle to find its way home. Immerse yourself in the glorious chaos of all-out war, found only in Battlefield.",
            image: 'pcbf4.png',
            price: '34.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: 'Battlefield 1942',
            description: "Battlefield 1942 (also known as BF1942) is the first installment in the Battlefield series and was developed by DICE. It was released for PC in 2002 and was later made the AIAS and IGN Game of the Year. ",
            image: 'pcbf1942.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: "Doom: Collector's Edition",
            description: "Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using DOOM SnapMap game editor to easily create, play, and share your content with the world.",
            image: 'pcdoomcollectorsedition.png',
            price: '49.99',
            quantity: '3',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: "Everquest",
            description: "EverQuest is a 3D fantasy-themed massively multiplayer online role-playing game originally developed by Verant Interactive and 989 Studios for Windows PCs.",
            image: 'pceverquest.png',
            price: '19.99',
            quantity: '3',
            platform: platforms[2]._id,
            genre: genres[7]._id
        },
        {
            gameName: "Far Cry",
            description: "Set on a mysterious tropical archipelago, the game follows Jack Carver, a former American special forces operative, as he searches for the female journalist, Valerie Constantine, who accompanied him to the islands but went missing after their boat was destroyed by mercenaries. As Jack explores the islands, he begins to discover the horrific genetic experiments being conducted on the local wildlife and must confront the mad scientist behind them.",
            image: 'pcfarcry.png',
            price: '19.99',
            quantity: '5',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: "Far Cry 5",
            description: "Far Cry comes to America in the latest installment of the award-winning franchise. Welcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.",
            image: 'pcfarcry5.png',
            price: '49.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: "Just Cause 2",
            description: "Dive into an adrenaline-fuelled free-roaming adventure. As agent Rico Rodriguez, your orders are to find and kill your friend and mentor who has disappeared on the island paradise of Panau. There, you must cause maximum chaos by land, sea and air to shift the balance of power. With the unique grapple and parachute combo, BASE jump, hijack and create your own high-speed stunts. With 400 square miles of rugged terrain and hundreds of weapons and vehicles, Just Cause 2 defies gravity and belief.",
            image: 'pcjustcause2.png',
            price: '39.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[1]._id
        },
        {
            gameName: "Lego Star Wars",
            description: "Lego Star Wars: The Video Game (sometimes simply called Lego Star Wars) is a Lego-themed, action-adventure video game based on the Lego Star Wars line of toys, and the first installment in the Lego video game franchise developed by Traveller's Tales, which would develop all future Lego titles from that point on.",
            image: 'pclegostarwars.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[0]._id
        },
        {
            gameName: "Mass Effect",
            description: "As Commander Shepard, you lead an elite squad on a heroic, action-packed adventure throughout the galaxy. Discover the imminent danger from an ancient threat and battle the traitorous Saren and his deadly army to save civilization. The fate of all life depends on your actions!",
            image: 'pcmasseffect.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[0]._id
        },
        {
            gameName: "The Elder Scrolls 4: Oblivion",
            description: "The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created. With a powerful combination of freeform gameplay and unprecedented graphics, you can unravel the main quest at your own pace or explore the vast world and find your own challenges.",
            image: 'pcoblivian.png',
            price: '19.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[0]._id
        },
        {
            gameName: "Red Dead Redemption",
            description: "When federal agents threaten his family, former outlaw John Marston is sent across the American frontier to help bring the rule of law. Experience intense gun battles, dramatic train robberies, bounty hunting and duels during a time of violent change.",
            image: 'pcreddeadredemption.png',
            price: '39.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[0]._id
        },
        {
            gameName: "Star Trek",
            description: "Star Trek is a third-person action-adventure Star Trek video game. It was developed by Digital Extremes and co-published by Namco Bandai Games and Paramount Pictures in association with CBS Studios International.",
            image: 'pcstartrek.png',
            price: '34.99',
            quantity: '10',
            platform: platforms[2]._id,
            genre: genres[0]._id
        },
        {
            gameName: "World of Warcraft",
            description: "Join thousands of mighty heroes in Azeroth, a world of magic and limitless adventure.",
            image: 'pcwow.png',
            price: '19.99',
            quantity: '15',
            platform: platforms[2]._id,
            genre: genres[7]._id
        },
        {
            gameName: "Pikmin",
            description: "Pikmin is a real-time strategy and puzzle video game series created by Shigeru Miyamoto, and published by Nintendo",
            image: 'pikman.png',
            price: '19.99',
            quantity: '7',
            platform: platforms[2]._id,
            genre: genres[2]._id
        },
    ]);

    console.log('games seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email:'pamela@testmail.com',
        password: 'password12345',
        carts: [
            {
                games: [games[0]._id, games[2]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@fake.com',
        password: 'password12345'
    });

    console.log('users seeded');
    await Cart.deleteMany();
    console.log('carts clean');
    process.exit();
});