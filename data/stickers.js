// ─── DATOS COMPLETOS — Álbum Panini FIFA World Cup 2026 ──────────────────────
// 980 láminas: 9 intro + 48 selecciones × 20 + 11 historia
;(function () {
  // ── 48 selecciones en orden oficial de sorteo ────────────────────────────
  const RAW = [
    // GRUPO A
    { id:'mex', name:'México',           flag:'🇲🇽', conf:'CONCACAF', group:'A',
      players:['Guillermo Ochoa','Jesús Corona','Rodolfo Cota','Jorge Sánchez','Kevin Álvarez','César Montes','Johan Vásquez','Néstor Araujo','Jesús Gallardo','Edson Álvarez','Carlos Rodríguez','Héctor Herrera','Roberto Alvarado','Érick Gutiérrez','Uriel Antuna','Hirving Lozano','Raúl Jiménez','Henry Martín'] },
    { id:'rsa', name:'Sudáfrica',         flag:'🇿🇦', conf:'CAF',     group:'A',
      players:['Ronwen Williams','Bruce Bvuma','Veli Mothwa','Siyanda Xulu','Mothobi Mvala','Nkosinathi Sibisi','Grant Kekana','Terrence Mashego','Teboho Mokoena','Bongani Zungu','Sipho Mbule','Percy Tau','Keagan Dolly','Themba Zwane','Sibongakonke Mbatha','Evidence Makgopa','Lyle Foster','Bradley Grobler'] },
    { id:'kor', name:'Corea del Sur',     flag:'🇰🇷', conf:'AFC',     group:'A',
      players:['Kim Seung-gyu','Jo Hyeon-woo','Song Bum-keun','Kim Tae-hwan','Kim Young-gwon','Lee Young-jae','Kim Min-jae','Lee Yong','Hwang In-beom','Jung Woo-young','Lee Jae-sung','Paik Seung-ho','Lee Kang-in','Kwon Chang-hoon','Na Sang-ho','Heung-min Son','Hwang Hee-chan','Hwang Ui-jo'] },
    { id:'cze', name:'República Checa',   flag:'🇨🇿', conf:'UEFA',    group:'A',
      players:['Jiří Pavlenka','Tomáš Vaclík','Jindřich Staněk','Vladimír Coufal','Tomáš Souček','Jan Bořil','Ondřej Kúdela','David Zima','Jakub Jankto','Lukáš Provod','Antonín Barák','Ladislav Krejčí','Marek Havlík','Michal Sadílek','Daniel Červ','Patrick Schick','Adam Hložek','Tomáš Chorý'] },
    // GRUPO B
    { id:'can', name:'Canadá',            flag:'🇨🇦', conf:'CONCACAF', group:'B',
      players:['Milan Borjan','Maxime Crépeau','Dayne St. Clair','Richie Laryea','Kamal Miller','Steven Vitória','Alistair Johnston','Samuel Adekugbe','Stephen Eustaquio','Ismael Koné','Mark-Anthony Kaye','Jonathan David','Cyle Larin','Alphonso Davies','Tajon Buchanan','Liam Millar','Theo Corbeanu','Charles-Andreas Brym'] },
    { id:'bih', name:'Bosnia y Herzegovina', flag:'🇧🇦', conf:'UEFA', group:'B',
      players:['Ibrahim Šehić','Kenan Pirić','Nikola Vasilj','Sead Kolašinac','Ognjen Vranješ','Ermin Bičakčić','Anel Ahmedhodžić','Miralem Pjanić','Armin Hodžić','Haris Duljevič','Edin Višća','Ermedin Demirović','Muamer Tankovic','Amar Rahimić','Nedim Bajrić','Edin Džeko','Haris Tabak','Deni Miličević'] },
    { id:'qat', name:'Catar',             flag:'🇶🇦', conf:'AFC',     group:'B',
      players:['Meshaal Barsham','Yousef Hassan','Khalid Baloul','Pedro Miguel','Bassam Al-Rawi','Boualem Khoukhi','Ismail Mohamad','Karim Boudiaf','Abdulaziz Hatem','Hassan Al-Haydos','Assim Madibo','Khalid Salman','Ahmed Alaaeldin','Yousuf Abdurisag','Homam Al-Amin','Almoez Ali','Mohammed Muntari','Akram Afif'] },
    { id:'sui', name:'Suiza',             flag:'🇨🇭', conf:'UEFA',    group:'B',
      players:['Yann Sommer','Gregor Kobel','Jonas Omlin','Silvan Widmer','Manuel Akanji','Fabian Schär','Ricardo Rodríguez','Nico Elvedi','Granit Xhaka','Remo Freuler','Michel Aebischer','Xherdan Shaqiri','Fabian Rieder','Christian Fassnacht','Ardon Jashari','Breel Embolo','Ruben Vargas','Dan Ndoye'] },
    // GRUPO C
    { id:'bra', name:'Brasil',            flag:'🇧🇷', conf:'CONMEBOL', group:'C',
      players:['Alisson','Ederson','Weverton','Danilo','Marquinhos','Thiago Silva','Alex Sandro','Eder Militão','Casemiro','Bruno Guimarães','Lucas Paquetá','Raphinha','Rodrygo','Vinícius Jr.','Gabriel Martinelli','Endrick','Richarlison','Gabriel Jesus'] },
    { id:'mar', name:'Marruecos',         flag:'🇲🇦', conf:'CAF',     group:'C',
      players:['Yassine Bounou','Munir Mohamedi','Ahmed Tagnaouti','Achraf Hakimi','Noussair Mazraoui','Romain Saïss','Jawad El Yamiq','Nayef Aguerd','Azzedine Ounahi','Selim Amallah','Sofyan Amrabat','Hakim Ziyech','Sofiane Boufal','Abde Ezzalzouli','Ilias Chair','Youssef En-Nesyri','Ayoub El Kaabi','Ryan Mmaee'] },
    { id:'hai', name:'Haití',             flag:'🇭🇹', conf:'CONCACAF', group:'C',
      players:['Josué Duverger','Hervé Lollichon','Sébastien Lordeus','Mechack Jérôme','Andrew Jean-Baptiste','Defly Fabius','Carlo Marcelin','Kervens Belfort','Jeff Louis','Florentino Ibarra','Duckens Nazon','Frantzdy Pierrot','Wilde Donald Guerrier','Joathe Coicou','Chris Leidner','Damus Steeven','Rony Alexandre','Orlandi Méndez'] },
    { id:'sco', name:'Escocia',           flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', conf:'UEFA',    group:'C',
      players:['Angus Gunn','Craig Gordon','Zander Clark','Aaron Hickey','Grant Hanley','Kieran Tierney','Andy Robertson','Jack Hendry','Ryan Christie','John McGinn','Callum McGregor','Billy Gilmour','Scott McTominay','Stuart Armstrong','Kenny McLean','Che Adams','Lyndon Dykes','Lawrence Shankland'] },
    // GRUPO D
    { id:'usa', name:'Estados Unidos',    flag:'🇺🇸', conf:'CONCACAF', group:'D',
      players:['Matt Turner','Patrick Schulte','Ethan Horvath','Sergiño Dest','Walker Zimmerman','Chris Richards','Antonee Robinson','Joe Scally','Tyler Adams','Weston McKennie','Yunus Musah','Brenden Aaronson','Giovanni Reyna','Christian Pulisic','Timothy Weah','Josh Sargent','Folarin Balogun','Ricardo Pepi'] },
    { id:'par', name:'Paraguay',          flag:'🇵🇾', conf:'CONMEBOL', group:'D',
      players:['Antony Silva','Gastón Olveira','Alfredo Aguilar','Robert Rojas','Gustavo Gómez','Junior Alonso','Blas Riveros','Fabián Balbuena','Miguel Almirón','Matías Rojas','Richard Sánchez','Ángel Romero','Alejandro Romero Gamarra','Iván Piris','Jorge Morel','Antonio Sanabria','Julio Enciso','Lautaro Acosta'] },
    { id:'aus', name:'Australia',         flag:'🇦🇺', conf:'AFC',     group:'D',
      players:['Mat Ryan','Danny Vukovic','Andrew Redmayne','Harry Souttar','Bailey Wright','Ryan McGowan','Joel King','Nathaniel Atkinson','Jackson Irvine','Aaron Mooy','Riley McGree','Ajdin Hrustic','Mathew Leckie','Craig Goodwin','Cameron Devlin','Mitchell Duke','Martin Boyle','Jason Cummings'] },
    { id:'tur', name:'Turquía',           flag:'🇹🇷', conf:'UEFA',    group:'D',
      players:['Altay Bayındır','Uğurcan Çakır','Mert Günok','Zeki Çelik','Merih Demiral','Samet Akaydın','Ferdi Kadıoğlu','Abdülkerim Bardakcı','Hakan Çalhanoğlu','Salih Özcan','Orkun Kökçü','Arda Güler','Kenan Yıldız','Barış Alper Yılmaz','Kerem Aktürkoğlu','Cenk Tosun','Berat Djimsiti','Semih Kılıçsoy'] },
    // GRUPO E
    { id:'ger', name:'Alemania',          flag:'🇩🇪', conf:'UEFA',    group:'E',
      players:['Manuel Neuer','Marc-André ter Stegen','Oliver Baumann','Joshua Kimmich','Antonio Rüdiger','Jonathan Tah','David Raum','Niklas Süle','Robert Andrich','Pascal Groß','Aleksandar Pavlović','Florian Wirtz','Jamal Musiala','Leroy Sané','Serge Gnabry','Thomas Müller','Kai Havertz','Niclas Füllkrug'] },
    { id:'cur', name:'Curazao',           flag:'🇨🇼', conf:'CONCACAF', group:'E',
      players:['Eloy Room','Shiloh Winkel','Etienne Vaessen','Cuco Martina','Leandro Bacuna','Ryan Donk','Darryl Lachman','Gilson Tavares','Juninho Bacuna','Jarchinio Antonia','Rangelo Janga','Richie Musaba','Elson Hooi','Quiñcy Promes','Brandley Kuwas','Myron Boadu','Reiner Ferrier','Furdjel Narsingh'] },
    { id:'civ', name:'Costa de Marfil',   flag:'🇨🇮', conf:'CAF',     group:'E',
      players:['Yahia Fofana','Badra Ali Sangaré','Sylvain Gbohouo','Simon Deli','Wilfried Singo','Odilon Kossounou','Ghislain Konan','Serge Aurier','Franck Kessié','Ibrahim Sangaré','Seko Fofana','Maxwel Cornet','Nicolas Pépé','Jean-Philippe Krasso','Karim Konaté','Sebastién Haller','Wilfried Zaha','Oumar Diakité'] },
    { id:'ecu', name:'Ecuador',           flag:'🇪🇨', conf:'CONMEBOL', group:'E',
      players:['Alexander Domínguez','Hernán Galíndez','Máximo Banguera','Angelo Preciado','Piero Hincapié','Robert Arboleda','Pervis Estupiñán','Diego Palacios','Carlos Gruezo','Moisés Caicedo','Alan Franco','Gonzalo Plata','Djorkaeff Reasco','Romario Ibarra','Jeremy Sarmiento','Enner Valencia','Michael Estrada','Kevin Rodríguez'] },
    // GRUPO F
    { id:'ned', name:'Países Bajos',      flag:'🇳🇱', conf:'UEFA',    group:'F',
      players:['Bart Verbruggen','Mark Flekken','Remko Pasveer','Denzel Dumfries','Virgil van Dijk','Matthijs de Ligt','Nathan Aké','Stefan de Vrij','Frenkie de Jong','Tijjani Reijnders','Teun Koopmeiners','Xavi Simons','Steven Bergwijn','Donyell Malen','Wout Weghorst','Cody Gakpo','Memphis Depay','Brian Brobbey'] },
    { id:'jpn', name:'Japón',             flag:'🇯🇵', conf:'AFC',     group:'F',
      players:['Shuichi Gonda','Zion Suzuki','Daniel Schmidt','Hiroki Sakai','Maya Yoshida','Ko Itakura','Yuto Nagatomo','Shogo Taniguchi','Wataru Endo','Hidemasa Morita','Sho Ito','Daichi Kamada','Junya Ito','Ritsu Doan','Takefusa Kubo','Ayase Ueda','Kaoru Mitoma','Koki Ogawa'] },
    { id:'swe', name:'Suecia',            flag:'🇸🇪', conf:'UEFA',    group:'F',
      players:['Robin Olsen','Karl-Johan Johnsson','Andreas Linde','Emil Krafth','Victor Nilsson Lindelöf','Carl Starfelt','Ludwig Augustinsson','Mikael Lustig','Albin Ekdal','Jens-Lys Cajuste','Kristoffer Olsson','Dejan Kulusevski','Emil Forsberg','Mattias Svanberg','Samuel Adegbenro','Alexander Isak','Viktor Gyökeres','Marcus Danielson'] },
    { id:'tun', name:'Túnez',             flag:'🇹🇳', conf:'CAF',     group:'F',
      players:['Aymen Dahmen','Bechir Ben Said','Mouez Hassen','Wajdi Kechrida','Montassar Talbi','Dylan Bronn','Ali Abdi','Mohamed Dräger','Ellyes Skhiri','Anis Ben Slimane','Hannibal Mejbri','Hamza Rafia','Youssef Msakni','Naïm Sliti','Saîf-Eddine Khaoui','Wahbi Khazri','Seifeddine Jaziri','Taha Yassine Khenissi'] },
    // GRUPO G
    { id:'bel', name:'Bélgica',           flag:'🇧🇪', conf:'UEFA',    group:'G',
      players:['Koen Casteels','Thibaut Courtois','Matz Sels','Timothy Castagne','Jan Vertonghen','Wout Faes','Arthur Theate','Zeno Debast','Kevin De Bruyne','Axel Witsel','Youri Tielemans','Charles De Ketelaere','Jérémy Doku','Leandro Trossard','Johan Bakayoko','Romelu Lukaku','Lois Openda','Dries Mertens'] },
    { id:'egy', name:'Egipto',            flag:'🇪🇬', conf:'CAF',     group:'G',
      players:['Mohamed El-Shenawy','Ahmed El-Shenawy','Mahmoud Gaber','Mohamed Abdelmonem','Ahmed Hegazi','Ayman Ashraf','Baher El-Mohamady','Akram Tawfik','Tarek Hamed','Amr El-Sulaya','Emam Ashour','Omar Marmoush','Mohamed Salah','Trezeguet','Ahmed Sayed Zizo','Mostafa Mohamed','Marwan Hamdy','Kahraba'] },
    { id:'irn', name:'Irán',              flag:'🇮🇷', conf:'AFC',     group:'G',
      players:['Alireza Beiranvand','Hossein Hosseini','Payam Niazmand','Shoja Khalilzadeh','Milad Mohammadi','Majid Hosseini','Ramin Rezaeian','Morteza Pouraliganji','Ahmad Noorollahi','Ali Gholizadeh','Mohammad Mohebi','Saman Ghoddos','Saeid Ezatolahi','Mehdi Torabi','Vahid Amiri','Sardar Azmoun','Mehdi Taremi','Allahyar Sayyadmanesh'] },
    { id:'nzl', name:'Nueva Zelanda',     flag:'🇳🇿', conf:'OFC',     group:'G',
      players:['Oliver Sail','Stefan Marinovic','Michael Woud','Liberato Cacace','Winston Reid','Nando Pijnaker','Michael Boxall','Myer Bevan','Joe Bell','Clayton Lewis','Matthew Garbett','Sarpreet Singh','Alex Greive','Marko Stamenic','Tim Payne','Chris Wood','Callan Elliot','Dane Ingham'] },
    // GRUPO H
    { id:'esp', name:'España',            flag:'🇪🇸', conf:'UEFA',    group:'H',
      players:['Unai Simón','David Raya','Álex Remiro','Dani Carvajal','Aymeric Laporte','Pau Cubarsí','Alejandro Grimaldo','Robin Le Normand','Rodri','Fabián Ruiz','Martín Zubimendi','Pedri','Gavi','Dani Olmo','Fermín López','Lamine Yamal','Nico Williams','Álvaro Morata'] },
    { id:'cpv', name:'Cabo Verde',        flag:'🇨🇻', conf:'CAF',     group:'H',
      players:['Vozinha','Edu Água','Cláudio Filipe','Stopira','Marco Moreno','Dylan Tavares','Roberto','Filipe Moreira','Jamiro Monteiro','Ryan Mendes','Garry Rodrigues','Fali Candé','Nuno Tavares','Kenny Rocha','Lúcio Antunes','Jovane Cabral','Júlio Tavares','Bruno Lopes'] },
    { id:'ksa', name:'Arabia Saudí',      flag:'🇸🇦', conf:'AFC',     group:'H',
      players:['Mohammed Al-Owais','Fawaz Al-Qarni','Nawaf Al-Aqidi','Sultan Al-Ghannam','Ali Al-Bulayhi','Hassan Al-Tambakti','Abdulelah Al-Amri','Sami Al-Najei','Mohamed Kanno','Nawaf Al-Abed','Sami Al-Naji','Saleh Al-Shehri','Salem Al-Dawsari','Hattan Bahebri','Nasser Al-Dawsari','Firas Al-Buraikan','Abdullah Al-Hamdan','Musab Al-Juwayr'] },
    { id:'uru', name:'Uruguay',           flag:'🇺🇾', conf:'CONMEBOL', group:'H',
      players:['Fernando Muslera','Sebastián Sosa','Martín Campaña','Guillermo Varela','Diego Godín','Sebastián Coates','Mathías Olivera','Ronald Araújo','Lucas Torreira','Manuel Ugarte','Rodrigo Bentancur','Federico Valverde','Nicolás De La Cruz','Maxi Gómez','Brian Rodríguez','Luis Suárez','Darwin Núñez','Facundo Torres'] },
    // GRUPO I
    { id:'fra', name:'Francia',           flag:'🇫🇷', conf:'UEFA',    group:'I',
      players:["Mike Maignan","Alphonse Areola","Brice Samba","William Saliba","Raphaël Varane","Lucas Digne","Theo Hernández","Ibrahima Konaté","N'Golo Kanté","Aurélien Tchouaméni","Adrien Rabiot","Antoine Griezmann","Ousmane Dembélé","Kingsley Coman","Marcus Thuram","Kylian Mbappé","Randal Kolo Muani","Bradley Barcola"] },
    { id:'sen', name:'Senegal',           flag:'🇸🇳', conf:'CAF',     group:'I',
      players:['Edouard Mendy','Alfred Gomis','Seny Dieng','Bouna Sarr','Kalidou Koulibaly','Abdou Diallo','Ismail Jakobs','Formose Mendy','Nampalys Mendy','Pape Gueye','Lamine Camara','Ismaila Sarr','Krepin Diatta','Iliman Ndiaye','Nicolas Jackson','Sadio Mané','Bamba Dieng','Habib Diallo'] },
    { id:'irq', name:'Irak',              flag:'🇮🇶', conf:'AFC',     group:'I',
      players:['Jalal Hassan','Mohammed Hameed','Fahad Thaeir','Ali Adnan','Saad Natiq','Bassam Rashid','Ahmed Ibrahim','Ali Faez','Humam Tariq','Alaa Abbas','Amjad Attwan','Mohanad Ali','Safaa Hadi','Ayman Hussein','Ali Jasim','Ahmed Yasin','Aiham Ousso','Dundar Hasrat'] },
    { id:'nor', name:'Noruega',           flag:'🇳🇴', conf:'UEFA',    group:'I',
      players:['Ørjan Nyland','Rune Jarstein','Jørgen Strand Larsen','Birger Meling','Kristoffer Ajer','Stefan Strandberg','Olav Bjørn Moen','Leo Østigård','Sander Berge','Patrick Berg','Fredrik Aursnes','Martin Ødegaard','Morten Thorsby','Mathias Normann','Mohamed Elyounoussi','Erling Haaland','Alexander Sørloth','Antonio Nusa'] },
    // GRUPO J
    { id:'arg', name:'Argentina',         flag:'🇦🇷', conf:'CONMEBOL', group:'J',
      players:['Emiliano Martínez','Gerónimo Rulli','Juan Musso','Nahuel Molina','Cristian Romero','Nicolás Otamendi','Nicolás Tagliafico','Lisandro Martínez','Rodrigo De Paul','Enzo Fernández','Leandro Paredes','Alexis Mac Allister','Giovani Lo Celso','Ángel Di María','Alejandro Garnacho','Lionel Messi','Lautaro Martínez','Julián Álvarez'] },
    { id:'alg', name:'Argelia',           flag:'🇩🇿', conf:'CAF',     group:'J',
      players:["Raïs M'Bolhi",'Alexandre Oukidja','Yassine Chourar','Ramy Bensebaini','Aïssa Mandi','Mohamed Fares','Djamel Benlamri','Yacine Adli','Nabil Bentaleb','Ismaël Bennacer','Sofiane Feghouli','Riyad Mahrez','Andy Delort','Said Benrahma','Islam Slimani','Baghdad Bounedjah','Youcef Belaïli','Amar Bendjama'] },
    { id:'aut', name:'Austria',           flag:'🇦🇹', conf:'UEFA',    group:'J',
      players:['Patrick Pentz','Heinz Lindner','Alexander Schlager','Stefan Posch','David Alaba','Maximilian Wöber','Philipp Mwene','Kevin Danso','Florian Grillitsch','Konrad Laimer','Nicolas Seiwald','Marcel Sabitzer','Florian Kainz','Christoph Baumgartner','Romano Schmid','Michael Gregoritsch','Marko Arnautović','Patrick Wimmer'] },
    { id:'jor', name:'Jordania',          flag:'🇯🇴', conf:'AFC',     group:'J',
      players:['Yahia Nader','Mohammad Al-Shagran','Amer Shafi','Yazan Al-Naimat','Baha Faisal','Anas Bani Yaseen','Badr Naji','Yosef Alamarat','Ahmad Sarour','Mahmoud Almardi','Yazan Al-Arab','Musa Al-Tamari','Mohammad Abu Zema','Hamza Al-Dardour','Oday Dabbagh','Motaz Nouri','Zaid Al-Rashdan','Ahmad Rawabdeh'] },
    // GRUPO K
    { id:'por', name:'Portugal',          flag:'🇵🇹', conf:'UEFA',    group:'K',
      players:['Rui Patrício','Diogo Costa','José Sá','João Cancelo','Rúben Dias','Pepe','Nuno Mendes','António Silva','João Palhinha','Vitinha','Bruno Fernandes','Bernardo Silva','Rafael Leão','Pedro Neto','João Félix','Cristiano Ronaldo','Gonçalo Ramos','Francisco Conceição'] },
    { id:'cod', name:'RD Congo',          flag:'🇨🇩', conf:'CAF',     group:'K',
      players:['Joël Kiassumbua','Leyden Dieu-Merci','Lionel Mpasi','Chancel Mbemba','Arthur Masuaku','Marcel Tisserand','Fiston Mayele','Nathan Ngoy','Samuel Bastien','Silas Mvumpa','Théo Bongonda','Yannick Bolasie','Firmin Mubele','Gaël Kakuta','Jonathan Bolingi','Cédric Bakambu','Benik Afobe','Dieumerci Mbokani'] },
    { id:'uzb', name:'Uzbekistán',        flag:'🇺🇿', conf:'AFC',     group:'K',
      players:['Abduvohid Nishonov','Jasurbek Yakhshiboev','Dilshod Yusupov','Khusan Murodov','Sanjar Tursunov','Otabek Shukurov','Nodir Ahmedov','Javokhir Sidiqov','Bobur Abdullaev','Jaloliddin Masharipov','Otabek Rakhimov','Sardor Rashidov','Farrukh Tashkentov','Sherzod Nazarov','Husan Hatamov','Eldor Shomurodov','Abbosbek Fayzullaev','Dostonbek Khamdamov'] },
    { id:'col', name:'Colombia',          flag:'🇨🇴', conf:'CONMEBOL', group:'K',
      players:['David Ospina','Camilo Vargas','Kevin Mier','Santiago Arias','Dávinson Sánchez','Yerry Mina','William Tesillo','Daniel Muñoz','Wilmar Barrios','Mateus Uribe','Richard Ríos','Juan Cuadrado','James Rodríguez','Jhon Arias','Jhon Córdoba','Luis Díaz','Rafael Santos Borré','Radamel Falcao'] },
    // GRUPO L
    { id:'eng', name:'Inglaterra',        flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', conf:'UEFA',    group:'L',
      players:['Jordan Pickford','Aaron Ramsdale','Dean Henderson','Kieran Trippier','John Stones','Marc Guehi','Luke Shaw','Ezri Konsa','Declan Rice','Kobbie Mainoo','Trent Alexander-Arnold','Jude Bellingham','Phil Foden','Bukayo Saka','Marcus Rashford','Harry Kane','Ollie Watkins','Cole Palmer'] },
    { id:'cro', name:'Croacia',           flag:'🇭🇷', conf:'UEFA',    group:'L',
      players:['Dominik Livaković','Ivo Grbić','Lovre Kalinić','Josip Juranović','Joško Gvardiol','Duje Ćaleta-Car','Borna Sosa','Martin Erlić','Luka Modrić','Marcelo Brozović','Mateo Kovačić','Mario Pašalić','Ivan Perišić','Lovro Majer','Nikola Vlašić','Andrej Kramarić','Bruno Petković','Ante Budimir'] },
    { id:'gha', name:'Ghana',             flag:'🇬🇭', conf:'CAF',     group:'L',
      players:['Lawrence Ati-Zigi','Joseph Wollacott','Richard Ofori','Daniel Amartey','Thomas Partey','Tariq Lamptey','Gideon Mensah','Alexander Djiku','Baba Rahman','Daniel Kofi Kyereh','Elisha Owusu','Mohammed Kudus','Andre Ayew','Jordan Ayew','Osman Bukari','Antoine Semenyo','Inaki Williams','Kamaldeen Sulemana'] },
    { id:'pan', name:'Panamá',            flag:'🇵🇦', conf:'CONCACAF', group:'L',
      players:['Luis Mejía','Orlando Mosquera','Gianluca Busio','Fidel Escobar','Éric Davis','Roderick Miller','Harold Cummings','Andrés Andrade','José Fajardo','Adalberto Carrasquilla','Aníbal Godoy','Rolando Blackburn','Édgar Yoel Bárcenas','Ismael Díaz','Cristian Martínez','Cecilio Waterman','Alberto Quintero','Gabriel Torres'] },
  ]

  // ── Generar numeración correcta ──────────────────────────────────────────
  // Estructura: 00(0) + FWC1-8(1-8) + 48×20(9-968) + FWC9-19(969-979)
  const INTRO = [
    { num:0,   code:'00',     type:'special', label:'Portada Oficial — FIFA World Cup 2026™',   special:true },
    { num:1,   code:'FWC 1',  type:'special', label:'Bienvenida al Mundial 2026',                special:true },
    { num:2,   code:'FWC 2',  type:'special', label:'Logo Oficial y Mascota "Striker"',          special:true },
    { num:3,   code:'FWC 3',  type:'special', label:'Trofeo Copa del Mundo FIFA™',               special:true },
    { num:4,   code:'FWC 4',  type:'stadium', label:'MetLife Stadium — East Rutherford (Final)', special:false },
    { num:5,   code:'FWC 5',  type:'stadium', label:'Estadio Azteca — Ciudad de México',         special:false },
    { num:6,   code:'FWC 6',  type:'stadium', label:'Rose Bowl — Los Ángeles',                   special:false },
    { num:7,   code:'FWC 7',  type:'stadium', label:'AT&T Stadium — Dallas/Arlington',           special:false },
    { num:8,   code:'FWC 8',  type:'stadium', label:'Hard Rock Stadium — Miami',                 special:false },
  ]

  const HISTORY = [
    { num:969, code:'FWC 9',  type:'history', label:'FIFA World Cup History — 1930–1950' },
    { num:970, code:'FWC 10', type:'history', label:'FIFA World Cup History — 1954–1966' },
    { num:971, code:'FWC 11', type:'history', label:'FIFA World Cup History — 1970–1978' },
    { num:972, code:'FWC 12', type:'history', label:'FIFA World Cup History — 1982–1990' },
    { num:973, code:'FWC 13', type:'history', label:'FIFA World Cup History — 1994–1998' },
    { num:974, code:'FWC 14', type:'history', label:'FIFA World Cup History — 2002–2006' },
    { num:975, code:'FWC 15', type:'history', label:'FIFA World Cup History — 2010–2014' },
    { num:976, code:'FWC 16', type:'history', label:'FIFA World Cup History — 2018–2022' },
    { num:977, code:'FWC 17', type:'history', label:'Leyendas del Fútbol Mundial',       special:true },
    { num:978, code:'FWC 18', type:'history', label:'Balones Históricos del Mundial' },
    { num:979, code:'FWC 19', type:'history', label:'Sede — USA · Canadá · México 2026' },
  ]

  let nextNum = INTRO.length  // empieza en 9
  const COUNTRIES = RAW.map(c => {
    const CC = c.id.toUpperCase()
    const stickers = []
    let pos = 1
    // 1 = escudo (foil/badge), 2 = foto grupal (team), 3-20 = jugadores
    stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'badge',  label:`Escudo — ${c.name}`,      special:true  })
    stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'team',   label:`Foto Grupal — ${c.name}`, special:false })
    c.players.forEach(p => {
      stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'player', label: p, special:false })
    })
    return { ...c, stickers, start: stickers[0].num, end: stickers[stickers.length-1].num }
  })

  window.ALBUM = {
    intro: INTRO,
    countries: COUNTRIES,
    history: HISTORY,
    total: 980,
  }
})()
