// ─── DATOS COMPLETOS — Álbum Panini FIFA World Cup 2026 ──────────────────────
// 992 láminas base: 9 intro + 48 selecciones × 20 + 11 historia + 12 Coca-Cola
// players[0-10] → posiciones 2-12 (antes de foto grupal)
// players[11-17] → posiciones 14-20 (después de foto grupal)
;(function () {
  const RAW = [
    // GRUPO A
    { id:'mex', name:'México',              flag:'🇲🇽', conf:'CONCACAF', group:'A',
      players:['Luis Malagón','Johan Vásquez','Jorge Sánchez','César Montes','Jesús Gallardo','Israel Reyes','Diego Lainez','Carlos Rodríguez','Edson Álvarez','Orbelín Pineda','Marcel Ruiz','Érick Sánchez','Hirving Lozano','Santiago Giménez','Raúl Jiménez','Alexis Vega','Roberto Alvarado','César Huerta'] },
    { id:'rsa', name:'Sudáfrica',           flag:'🇿🇦', conf:'CAF',     group:'A',
      players:['Ronwen Williams','Sipho Chaine','Aubrey Modiba','Samukele Kabini','Mbekezeli Mbokazi','Khulumani Ndamane','Siyabonga Ngezana','Khuliso Mudau','Nkosinathi Sibisi','Teboho Mokoena','Thalente Mbatha','Bathasi Aubaas','Yaya Sithole','Sipho Mbule','Lyle Foster','Iqraam Rayners','Mohau Nkota','Oswin Appollis'] },
    { id:'kor', name:'Corea del Sur',       flag:'🇰🇷', conf:'AFC',     group:'A',
      players:['Hyeon-woo Jo','Seung-Gyu Kim','Min-jae Kim','Yu-min Cho','Young-woo Seol','Han-beom Lee','Tae-seok Lee','Myung-jae Lee','Jae-sung Lee','In-beom Hwang','Kang-in Lee','Seung-ho Paik','Jens Castrop','Dong-yeong Lee','Gue-sung Cho','Heung-min Son','Hee-chan Hwang','Hyeon-Gyu Oh'] },
    { id:'cze', name:'Chequia',             flag:'🇨🇿', conf:'UEFA',    group:'A',
      players:['Matej Kovar','Jindrich Stanek','Ladislav Krejci','Vladimir Coufal','Jaroslav Zeleny','Tomas Holes','David Zima','Michal Sadilek','Lukas Provod','Lukas Cerv','Tomas Soucek','Pavel Sulc','Matej Vydra','Vasil Kusej','Tomas Chory','Vaclav Cerny','Adam Hlozek','Patrik Schick'] },
    // GRUPO B
    { id:'can', name:'Canadá',              flag:'🇨🇦', conf:'CONCACAF', group:'B',
      players:['Dayne St. Clair','Alphonso Davies','Alistair Johnston','Samuel Adekugbe','Riche Larvea','Derek Cornelius','Moïse Bombito','Kamal Miller','Stephen Eustáquio','Ismaël Koné','Jonathan Osorio','Jacob Shaffelburg','Mathieu Choinière','Niko Sigur','Tajon Buchanan','Liam Millar','Cyle Larin','Jonathan David'] },
    { id:'bih', name:'Bosnia y Herzegovina',flag:'🇧🇦', conf:'UEFA',    group:'B',
      players:['Nikola Vasilj','Amer Dedic','Sead Kolasinac','Tarik Muharemovic','Nihad Mujakic','Nikola Katic','Amir Hadziahmetovic','Benjamin Tahirovic','Armin Gigovic','Ivan Sunjic','Ivan Basic','Dzenis Burnic','Esmir Bajraktarevic','Amar Memic','Ermedin Demirovic','Edin Dzeko','Samed Bazdar','Haris Tabakovic'] },
    { id:'qat', name:'Catar',               flag:'🇶🇦', conf:'AFC',     group:'B',
      players:['Meshaal Barsham','Sultan Albrake','Lucas Mendes','Homam Ahmed','Boualem Khoukhi','Pedro Miguel','Tarek Salman','Mohamed Al-Mannai','Karim Boudiaf','Assim Madibo','Ahmed Fatehi','Mohammed Waad','Abdulaziz Hatem','Hassan Al-Haydos','Edmilson Junior','Akram Hassan Afif','Ahmed Al Ganehi','Almoez Ali'] },
    { id:'sui', name:'Suiza',               flag:'🇨🇭', conf:'UEFA',    group:'B',
      players:['Gregor Kobel','Yvon Mvogo','Manuel Akanji','Ricardo Rodríguez','Nico Elvedi','Aurèle Amenda','Silvan Widmer','Granit Xhaka','Denis Zakaria','Remo Freuler','Fabian Rieder','Ardon Jashari','Johan Manzambi','Michel Aebischer','Breel Embolo','Ruben Vargas','Dan Ndoye','Zeki Amdouni'] },
    // GRUPO C
    { id:'bra', name:'Brasil',              flag:'🇧🇷', conf:'CONMEBOL', group:'C',
      players:['Alisson','Bento','Marquinhos','Éder Militão','Gabriel Magalhães','Danilo','Wesley','Lucas Paquetá','Casemiro','Bruno Guimarães','Luiz Henrique','Vinícius Júnior','Rodrygo','João Pedro','Matheus Cunha','Gabriel Martinelli','Raphinha','Estévão'] },
    { id:'mar', name:'Marruecos',           flag:'🇲🇦', conf:'CAF',     group:'C',
      players:['Yassine Bounou','Munir El Kajoui','Achraf Hakimi','Noussair Mazraoui','Nayef Aguerd','Roman Saiss','Jawad El Yamiq','Adam Masina','Sofyan Amrabat','Azzedine Ounahi','Eliesse Ben Seghir','Bilal El Khannouss','Ismael Saibari','Youssef En-Nesyri','Abde Ezzalzouli','Soufiane Rahimi','Brahim Díaz','Ayoub El Kaabi'] },
    { id:'hai', name:'Haití',               flag:'🇭🇹', conf:'CONCACAF', group:'C',
      players:['Johny Placide','Carlens Arcus','Martin Expérience','Jean-Kevin Duverne','Ricardo Adé','Duke Lacroix','Garven Metusala','Hannes Delcroix','Leverton Pierre','Danley Jean Jacques','Jean-Ricner Bellegarde','Christopher Attys','Derrick Etienne Jr','Josue Casimir','Ruben Providence','Duckens Nazon','Louicius Deedson','Frantzdy Pierrot'] },
    { id:'sco', name:'Escocia',             flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', conf:'UEFA',    group:'C',
      players:['Angus Gunn','Jack Hendry','Kieran Tierney','Aaron Hickey','Andrew Robertson','Scott McKenna','John Souttar','Anthony Ralston','Grant Hanley','Scott McTominay','Billy Gilmour','Lewis Ferguson','Ryan Christie','Kenny McLean','John McGinn','Lyndon Dykes','Che Adams','Ben Gannon-Doak'] },
    // GRUPO D
    { id:'usa', name:'Estados Unidos',      flag:'🇺🇸', conf:'CONCACAF', group:'D',
      players:['Matt Freese','Chris Richards','Tim Ream','Mark McKenzie','Alex Freeman','Antonee Robinson','Tyler Adams','Tanner Tessmann','Weston McKennie','Christian Roldan','Timothy Weah','Diego Luna','Malik Tillman','Christian Pulisic','Brenden Aaronson','Ricardo Pepi','Haji Wright','Folarin Balogun'] },
    { id:'par', name:'Paraguay',            flag:'🇵🇾', conf:'CONMEBOL', group:'D',
      players:['Roberto Fernández','Orlando Gill','Gustavo Gómez','Fabián Balbuena','Juan José Cáceres','Omar Alderete','Junior Alonso','Mathías Villasanti','Diego Gómez','Damián Bobadilla','Andres Cubas','Matias Galarza Fonda','Julio Enciso','Alejandro Romero Gamarra','Miguel Almirón','Ramon Sosa','Ángel Romero','Antonio Sanabria'] },
    { id:'aus', name:'Australia',           flag:'🇦🇺', conf:'AFC',     group:'D',
      players:['Mathew Ryan','Joe Gauci','Harry Souttar','Alessandro Circati','Jordan Bos','Aziz Behich','Cameron Burgess','Lewis Miller','Milos Degenek','Jackson Irvine','Riley McGree',"Aiden O'Neill",'Connor Metcalfe','Patrick Yazbek','Craig Goodwin','Kusini Vengi','Nestory Irankunda','Mohamed Touré'] },
    { id:'tur', name:'Türkiye',             flag:'🇹🇷', conf:'UEFA',    group:'D',
      players:['Ugurcan Cakir','Mert Muldur','Zeki Celik','Abdulkerim Bardakci','Caglar Soyuncu','Merih Demiral','Ferdi Kadioglu','Kaan Ayhan','Ismail Yuksek','Hakan Calhanoglu','Orkun Kokcu','Arda Guler','Irfan Can Kahveci','Yunus Akgun','Can Uzun','Baris Alper Yilmaz','Kerem Akturkoglu','Kenan Yildiz'] },
    // GRUPO E
    { id:'ger', name:'Alemania',            flag:'🇩🇪', conf:'UEFA',    group:'E',
      players:['Marc-André ter Stegen','Jonathan Tah','David Raum','Nico Schlotterbeck','Antonio Rüdiger','Waldemar Anton','Ridle Baku','Maximilian Mittelstadt','Joshua Kimmich','Florian Wirtz','Felix Nmecha','Leon Goretzka','Jamal Musiala','Serge Gnabry','Kai Havertz','Leroy Sane','Karim Adeyemi','Nick Woltemade'] },
    { id:'cuw', name:'Curazao',             flag:'🇨🇼', conf:'CONCACAF', group:'E',
      players:['Eloy Room','Armando Obispo','Sherel Floranus','Jurien Gaari','Joshua Brenet','Roshon Van Eijma','Shurandy Sambo','Livano Comenencia','Godfried Roemeratoe','Juninho Bacuna','Leandro Bacuna','Tahith Chong','Kenji Gorre','Jearl Margaritha','Jurgen Locadia','Jeremy Antonisse','Gervane Kastaneer','Sontje Hansen'] },
    { id:'civ', name:'Costa de Marfil',     flag:'🇨🇮', conf:'CAF',     group:'E',
      players:['Yahia Fofana','Ghislain Konan','Wilfried Singo','Odilon Kossounou','Evan Ndicka','Willy Boly','Emmanuel Agbadou','Ousmane Diomande','Franck Kessie','Seko Fofana','Ibrahim Sangare','Jean-Philippe Gbamin','Amad Diallo','Sébastien Haller','Simon Adingra','Yan Diomande','Evann Guessand','Oumar Diakite'] },
    { id:'ecu', name:'Ecuador',             flag:'🇪🇨', conf:'CONMEBOL', group:'E',
      players:['Hernán Galíndez','Gonzalo Valle','Piero Hincapié','Pervis Estupiñán','Willian Pacho','Ángelo Preciado','Joel Ordóñez','Moisés Caicedo','Alan Franco','Kendry Páez','Pedro Vite','John Yeboah','Leonardo Campana','Gonzalo Plata','Nilson Angulo','Alan Minda','Kevin Rodríguez','Enner Valencia'] },
    // GRUPO F
    { id:'ned', name:'Países Bajos',        flag:'🇳🇱', conf:'UEFA',    group:'F',
      players:['Bart Verbruggen','Virgil van Dijk','Micky van de Ven','Jurrien Timber','Denzel Dumfries','Nathan Aké','Jeremie Frimpong','Jan Paul van Hecke','Tijjani Reijnders','Ryan Gravenberch','Teun Koopmeiners','Frenkie de Jong','Xavi Simons','Justin Kluivert','Memphis Depay','Donyell Malen','Wout Weghorst','Cody Gakpo'] },
    { id:'jpn', name:'Japón',               flag:'🇯🇵', conf:'AFC',     group:'F',
      players:['Zion Suzuki','Henry Heroki Mochizuki','Ayumu Seko','Junnosuke Suzuki','Shogo Taniguchi','Tsuyoshi Watanabe','Kaishu Sano','Yuki Soma','Ao Tanaka','Daichi Kamada','Takefusa Kubo','Ritsu Doan','Keito Nakamura','Takumi Minamino','Shuto Machino','Junya Ito','Koki Ogawa','Ayase Ueda'] },
    { id:'swe', name:'Suecia',              flag:'🇸🇪', conf:'UEFA',    group:'F',
      players:['Victor Johansson','Isak Hien','Gabriel Gudmundsson','Emil Holm','Victor Nilsson Lindelöf','Gustaf Lagerbielke','Lucas Bergvall','Hugo Larsson','Jesper Karlström','Yasin Ayari','Mattias Svanberg','Daniel Svensson','Ken Sema','Roony Bardghji','Dejan Kulusevski','Anthony Elanga','Alexander Isak','Viktor Gyökeres'] },
    { id:'tun', name:'Túnez',               flag:'🇹🇳', conf:'CAF',     group:'F',
      players:['Bechir Ben Said','Aymen Dahmen','Yan Valery','Montassar Talbi','Yassine Meriah','Ali Abdi','Dylan Bronn','Ellyes Skhiri','Aissa Laidouni','Ferjani Sassi','Mohamed Ali Ben Romdhane','Hannibal Mejbri','Elias Achouri','Elias Saad','Hazem Mastouri','Ismael Gharbi','Sayfallah Ltaief','Naim Sliti'] },
    // GRUPO G
    { id:'bel', name:'Bélgica',             flag:'🇧🇪', conf:'UEFA',    group:'G',
      players:['Thibaut Courtois','Arthur Theate','Timothy Castagne','Zeno Debast','Brandon Mechele','Maxim De Cuyper','Thomas Meunier','Youri Tielemans','Amadou Onana','Nicolas Raskin','Alexis Saelemaekers','Hans Vanaken','Kevin De Bruyne','Jérémy Doku','Charles De Ketelaere','Leandro Trossard','Loïs Openda','Romelu Lukaku'] },
    { id:'egy', name:'Egipto',              flag:'🇪🇬', conf:'CAF',     group:'G',
      players:['Mohamed El Shenawy','Mohamed Hany','Mohamed Hamdy','Yasser Ibrahim','Khaled Sobhi','Ramy Rabia','Hossam Abdelmaguid','Ahmed Fatouh','Marwan Attia','Zizo','Hamdy Fathy','Mohamed Lasheen','Emam Ashour','Osama Faisal','Mohamed Salah','Mostafa Mohamed','Trezeguet','Omar Marmoush'] },
    { id:'irn', name:'Irán',                flag:'🇮🇷', conf:'AFC',     group:'G',
      players:['Alireza Beiranvand','Morteza Pouraliganji','Ehsan Hajsafi','Milad Mohammadi','Shojae Khalilzadeh','Ramin Rezaeian','Hossein Kanaani','Sadegh Moharrami','Saleh Hardani','Saeed Ezatolahi','Saman Ghoddos','Omid Noorafkan','Roozbeh Cheshmi','Mohammad Mohebi','Sardar Azmoun','Mehdi Taremi','Alireza Jahanbakhsh','Ali Gholizadeh'] },
    { id:'nzl', name:'Nueva Zelanda',       flag:'🇳🇿', conf:'OFC',     group:'G',
      players:['Max Crocombe Payne','Alex Paulsen','Michael Boxall','Liberato Cacace','Tim Payne','Tyler Bindon','Francis de Vries','Finn Surman','Joe Bell','Sarpreet Singh','Ryan Thomas','Matthew Garbett','Marko Stamenić','Ben Old','Chris Wood','Elijah Just','Callum McCowatt','Kosta Barbarouses'] },
    // GRUPO H
    { id:'esp', name:'España',              flag:'🇪🇸', conf:'UEFA',    group:'H',
      players:['Unai Simon','Robin Le Normand','Aymeric Laporte','Dean Huijsen','Pedro Porro','Dani Carvajal','Marc Cucurella','Martín Zubimendi','Rodri','Pedri','Fabián Ruiz','Mikel Merino','Lamine Yamal','Dani Olmo','Nico Williams','Ferran Torres','Álvaro Morata','Mikel Oyarzabal'] },
    { id:'cpv', name:'Cabo Verde',          flag:'🇨🇻', conf:'CAF',     group:'H',
      players:['Vozinha','Logan Costa','Pico','Diney','Steven Moreira','Wagner Pina','Joao Paulo','Yannick Semedo','Kevin Pina','Patrick Andrade','Jamiro Monteiro','Deroy Duarte','Garry Rodrigues','Jovane Cabral','Ryan Mendes','Dailon Livramento','Willy Semedo','Bebe'] },
    { id:'ksa', name:'Arabia Saudita',      flag:'🇸🇦', conf:'AFC',     group:'H',
      players:['Nawaf Alaqidi','Abdulrahman Al-Sanbi','Saud Abdulhamid','Nawaf Bouwashl','Jihad Thakri','Moteb Al-Harbi','Hassan Altambakti','Musab Aljuwayr','Ziyad Aljohani','Abdullah Alkhaibari','Nasser Aldawsari','Saleh Abu Alshamat','Marwan Alsahafi','Salem Aldawsari','Abdulrahman Al-Aboud','Feras Akbrikan','Saleh Alshehri','Abdullah Al-Hamdan'] },
    { id:'uru', name:'Uruguay',             flag:'🇺🇾', conf:'CONMEBOL', group:'H',
      players:['Sergio Rochet','Santiago Mele','Ronald Araujo','José María Giménez','Sebastian Caceres','Mathías Olivera','Guillermo Varela','Nahitan Nandez','Federico Valverde','Giorgian De Arrascaeta','Rodrigo Bentancur','Manuel Ugarte','Nicolás de la Cruz','Maxi Araujo','Darwin Núñez','Federico Viñas','Rodrigo Aguirre','Facundo Pellistri'] },
    // GRUPO I
    { id:'fra', name:'Francia',             flag:'🇫🇷', conf:'UEFA',    group:'I',
      players:['Mike Maignan','Theo Hernandez','William Saliba','Jules Kounde','Ibrahima Konate','Dayot Upamecano','Lucas Digne','Aurélien Tchouaméni','Eduardo Camavinga','Manu Koné','Adrien Rabiot','Michael Olise','Ousmane Dembele','Bradley Barcola','Désiré Doué','Kingsley Coman','Hugo Ekitike','Kylian Mbappé'] },
    { id:'sen', name:'Senegal',             flag:'🇸🇳', conf:'CAF',     group:'I',
      players:['Edouard Mendy','Yehvann Diouf','Moussa Niakhaté','Abdoulaye Seck','Ismail Jakobs','El Hadji Malick Diouf','Kalidou Koulibaly','Idrissa Gana Gueye','Pape Matar Sarr','Pape Gueye','Habib Diarra','Lamine Camara','Sadio Mane','Ismaïla Sarr','Boulaye Dia','Iliman Ndiaye','Nicolas Jackson','Krepin Diatta'] },
    { id:'irq', name:'Irak',                flag:'🇮🇶', conf:'AFC',     group:'I',
      players:['Jalal Hassan','Rebin Sulaka','Hussein Ali','Akam Hashem','Merchas Doski','Zaid Tahseen','Manaf Younis','Zidane Iqbal','Amir Al-Ammari','Ibrahim Bavesh','Ali Jasim','Youssef Amyn','Aimar Sher','Marko Farji','Osama Rashid','Ali Al-Hamadi','Aymen Hussein','Mohanad Ali'] },
    { id:'nor', name:'Noruega',             flag:'🇳🇴', conf:'UEFA',    group:'I',
      players:['Orjan Nyland','Julian Ryerson','Leo Ostigård','Kristoffer Vassbakk Ajer','Marcus Holmgren Pedersen','David Møller Wolfe','Torbjørn Heggem','Morten Thorsby','Martin Ødegaard','Sander Berge','Andreas Schjelderup','Patrick Berg','Erling Haaland','Alexander Sørloth','Aron Dønnum','Jorgen Strand Larsen','Antonio Nusa','Oscar Bobb'] },
    // GRUPO J
    { id:'arg', name:'Argentina',           flag:'🇦🇷', conf:'CONMEBOL', group:'J',
      players:['Emiliano Martinez','Nahuel Molina','Cristian Romero','Nicolas Otamendi','Nicolas Tagliafico','Leonardo Balerdi','Enzo Fernandez','Alexis Mac Allister','Rodrigo De Paul','Exequiel Palacios','Leandro Paredes','Nico Paz','Franco Mastantuono','Nico González','Lionel Messi','Lautaro Martinez','Julián Álvarez','Giuliano Simeone'] },
    { id:'alg', name:'Argelia',             flag:'🇩🇿', conf:'CAF',     group:'J',
      players:['Alexis Guendouz','Ramy Bensebaini','Youcef Atal','Rayan Aït-Nouri','Mohamed Amine Tougai','Aïssa Mandi','Ismael Bennacer','Houssem Aquar','Hicham Boudaoui','Ramiz Zerrouki','Nabil Bentalab','Farés Chaibi','Riyad Mahrez','Said Benrahma','Anis Hadj Moussa','Amine Gouiri','Baghdad Bounedjah','Mohammed Amoura'] },
    { id:'aut', name:'Austria',             flag:'🇦🇹', conf:'UEFA',    group:'J',
      players:['Alexander Schlager','Patrick Pentz','David Alaba','Kevin Danso','Philipp Lienhart','Stefan Posch','Phillipp Mwene','Alexander Prass','Xaver Schlager','Marcel Sabitzer','Konrad Laimer','Florian Grillitsch','Nicolas Seiwald','Romano Schmid','Patrick Wimmer','Christoph Baumgartner','Michael Gregoritsch','Marko Arnautović'] },
    { id:'jor', name:'Jordania',            flag:'🇯🇴', conf:'AFC',     group:'J',
      players:['Yazeed Abulaila','Ihsan Haddad','Mohammad Abu Hashish','Yazan Al-Arab','Abdallah Nasib','Saleem Obaid','Mohammad Abualnadi','Ibrahim Saadeh','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mohannad Abu Taha','Amer Jamous','Musa Al-Taamari','Yazan Al-Naimat','Mahmoud Al-Mardi','Ali Olwan','Mohammad Abu Zrayq','Ibrahim Sabra'] },
    // GRUPO K
    { id:'por', name:'Portugal',            flag:'🇵🇹', conf:'UEFA',    group:'K',
      players:['Diogo Costa','Jose Sa','Ruben Dias','João Cancelo','Diogo Dalot','Nuno Mendes','Gonçalo Inácio','Bernardo Silva','Bruno Fernandes','Ruben Neves','Vitinha','João Neves','Cristiano Ronaldo','Francisco Trincao','João Félix','Gonçalo Ramos','Pedro Neto','Rafael Leão'] },
    { id:'cod', name:'RD Congo',            flag:'🇨🇩', conf:'CAF',     group:'K',
      players:['Lionel Mpasi','Aaron Wan-Bissaka','Axel Tuanzebe','Arthur Masuaku','Chancel Mbemba','Joris Kayembe','Charles Pickel',"Ngal'ayel Mukau",'Edo Kayembe','Samuel Moutoussamy','Noah Sadiki','Théo Bongonda','Meschak Elia','Yoane Wissa','Brian Cipenga','Fiston Mayele','Cédric Bakambu','Nathanaël Mbuku'] },
    { id:'uzb', name:'Uzbekistán',          flag:'🇺🇿', conf:'AFC',     group:'K',
      players:['Utkir Yusupov','Farrukh Savfiev','Sherzod Nasrullaev','Umar Eshmurodov','Husniddin Aliqulov','Rustamjon Ashurmatov','Khojiakbar Alijonov','Abdukodir Khusanov','Odiljon Hamrobekov','Otabek Shukurov','Jamshid Iskanderov','Azizbek Turgunboev','Khojimat Erkinov','Eldor Shomurodov','Oston Urunov','Jaloliddin Masharipov','Igor Sergeev','Abbosbek Fayzullaev'] },
    { id:'col', name:'Colombia',            flag:'🇨🇴', conf:'CONMEBOL', group:'K',
      players:['Camilo Vargas','David Ospina','Dávinson Sánchez','Yerry Mina','Daniel Munoz','Johan Mojica','Jhon Lucumí','Santiago Arias','Jefferson Lerma','Kevin Castaño','Richard Rios','James Rodriguez','Juan Fernando Quintero','Jorge Carrascal','Jon Arias','Jhon Cordova','Luis Suárez','Luis Díaz'] },
    // GRUPO L
    { id:'eng', name:'Inglaterra',          flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', conf:'UEFA',    group:'L',
      players:['Jordan Pickford','John Stones','Marc Guéhi','Ezri Konsa','Trent Alexander-Arnold','Reece James','Dan Burn','Jordan Henderson','Declan Rice','Jude Bellingham','Cole Palmer','Morgan Rogers','Anthony Gordon','Phil Foden','Bukayo Saka','Harry Kane','Marcus Rashford','Ollie Watkins'] },
    { id:'cro', name:'Croacia',             flag:'🇭🇷', conf:'UEFA',    group:'L',
      players:['Dominik Livaković','Duje Caleta-Car','Josko Gvardiol','Josip Stanišić','Luka Vušković','Josip Sutalo','Kristijan Jakic','Luka Modrić','Mateo Kovacic','Martin Baturina','Lovro Majer','Mario Pasalic','Petar Sucic','Ivan Perišić','Marco Pasalic','Ante Budimir','Andrej Kramarić','Franjo Ivanovic'] },
    { id:'gha', name:'Ghana',               flag:'🇬🇭', conf:'CAF',     group:'L',
      players:['Lawrence Ati Zigi','Tariq Lamptey','Mohammed Salisu','Alidu Seidu','Alexander Djiku','Gideon Mensah','Caleb Yirenkyi','Abdul Issahaku Fatawu','Thomas Partey','Salis Abdul Samed','Kamaldeen Sulemana','Mohammed Kudus','Inaki Williams','Jordan Ayew','Andrew Ayew','Joseph Paintsil','Osman Bukari','Antoine Semenyo'] },
    { id:'pan', name:'Panamá',              flag:'🇵🇦', conf:'CONCACAF', group:'L',
      players:['Orlando Mosquera','Luis Mejia','Fidel Escobar','Andres Andrade','Michael Amir Murillo','Eric Davis','Jose Cordoba','Cesar Blackman','Cristian Martínez','Aníbal Godoy','Adalberto Carrasquilla','Édgar Bárcenas','Carlos Harvey','Ismael Díaz','José Fajardo','Cecilio Waterman','José Luiz Rodríguez','Alberto Quintero'] },
  ]

  // ── Stickers introductorios (00 + FWC1-FWC8) ───────────────────────────
  const INTRO = [
    { num:0, code:'00',    type:'special', label:'Logotipo de Panini — FOIL',               special:true },
    { num:1, code:'FWC1',  type:'special', label:'Emblema oficial — FOIL',                  special:true },
    { num:2, code:'FWC2',  type:'special', label:'Emblema oficial — FOIL',                  special:true },
    { num:3, code:'FWC3',  type:'special', label:'Mascotas oficiales — FOIL',               special:true },
    { num:4, code:'FWC4',  type:'special', label:'Eslogan oficial — FOIL',                  special:true },
    { num:5, code:'FWC5',  type:'special', label:'Balón oficial — FOIL',                    special:true },
    { num:6, code:'FWC6',  type:'stadium', label:'Canadá — Países y ciudades anfitrionas FOIL', special:true },
    { num:7, code:'FWC7',  type:'stadium', label:'México — Países y ciudades anfitrionas FOIL', special:true },
    { num:8, code:'FWC8',  type:'stadium', label:'EE.UU. — Países y ciudades anfitrionas FOIL', special:true },
  ]

  // ── Stickers de historia (FWC9-FWC19) ───────────────────────────────────
  const HISTORY = [
    { num:969, code:'FWC9',  type:'history', label:'Italia 1934 — Museo de la FIFA FOIL' },
    { num:970, code:'FWC10', type:'history', label:'Uruguay 1950 — Museo de la FIFA FOIL' },
    { num:971, code:'FWC11', type:'history', label:'Alemania Occidental 1954 — Museo de la FIFA FOIL' },
    { num:972, code:'FWC12', type:'history', label:'Brasil 1962 — Museo de la FIFA FOIL' },
    { num:973, code:'FWC13', type:'history', label:'Alemania Occidental 1974 — Museo de la FIFA FOIL' },
    { num:974, code:'FWC14', type:'history', label:'Argentina 1986 — Museo de la FIFA FOIL' },
    { num:975, code:'FWC15', type:'history', label:'Brasil 1994 — Museo de la FIFA FOIL' },
    { num:976, code:'FWC16', type:'history', label:'Brasil 2002 — Museo de la FIFA FOIL' },
    { num:977, code:'FWC17', type:'history', label:'Italia 2006 — Museo FIFA FOIL' },
    { num:978, code:'FWC18', type:'history', label:'Alemania 2014 — Museo FIFA FOIL' },
    { num:979, code:'FWC19', type:'history', label:'Argentina 2022 — Museo FIFA FOIL' },
  ]

  // ── Stickers Coca-Cola (CC1-CC12, exclusivos) ────────────────────────────
  const COCACOLA = [
    { num:980, code:'CC1',  type:'special', label:'Lamine Yamal — España',         special:true },
    { num:981, code:'CC2',  type:'special', label:'Joshua Kimmich — Alemania',      special:true },
    { num:982, code:'CC3',  type:'special', label:'Harry Kane — Inglaterra',        special:true },
    { num:983, code:'CC4',  type:'special', label:'Santiago Giménez — México',      special:true },
    { num:984, code:'CC5',  type:'special', label:'Antonee Robinson — EE.UU.',      special:true },
    { num:985, code:'CC6',  type:'special', label:'Jefferson Lerma — Colombia',     special:true },
    { num:986, code:'CC7',  type:'special', label:'Edson Álvarez — México',         special:true },
    { num:987, code:'CC8',  type:'special', label:'Virgil van Dijk — Países Bajos', special:true },
    { num:988, code:'CC9',  type:'special', label:'Alphonso Davies — Canadá',       special:true },
    { num:989, code:'CC10', type:'special', label:'Weston McKennie — EE.UU.',       special:true },
    { num:990, code:'CC11', type:'special', label:'Lautaro Martínez — Argentina',   special:true },
    { num:991, code:'CC12', type:'special', label:'Gabriel Magalhães — Brasil',     special:true },
  ]

  // ── Set de Actualización (118 láminas — números pendientes de Panini) ────
  // reemplaza_a: null → se llenará cuando Panini publique la lista oficial
  const UPDATE_SET = [
    { country:'Argelia',              name:'Luca Zidane',                  reemplaza_a:null },
    { country:'Argelia',              name:'Rafik Belghali',                reemplaza_a:null },
    { country:'Argelia',              name:'Ibrahim Maza',                  reemplaza_a:null },
    { country:'Argelia',              name:'Farès Ghedjemis',               reemplaza_a:null },
    { country:'Argelia',              name:'Adil Boulbina',                 reemplaza_a:null },
    { country:'Argentina',            name:'Giovani Lo Celso',              reemplaza_a:null },
    { country:'Australia',            name:'Paul Izzo',                     reemplaza_a:null },
    { country:'Australia',            name:'Jason Geria',                   reemplaza_a:null },
    { country:'Australia',            name:'Paul Okon-Engstler',            reemplaza_a:null },
    { country:'Australia',            name:'Ajdin Hrustic',                 reemplaza_a:null },
    { country:'Australia',            name:'Nishan Velupillay',             reemplaza_a:null },
    { country:'Bélgica',              name:'Dodi Lukébakio',                reemplaza_a:null },
    { country:'Brasil',               name:'Weverton',                      reemplaza_a:null },
    { country:'Brasil',               name:'Alex Sandro',                   reemplaza_a:null },
    { country:'Brasil',               name:'Endrick',                       reemplaza_a:null },
    { country:'Brasil',               name:'Neymar Jr',                     reemplaza_a:null },
    { country:'Brasil',               name:'Igor Thiago',                   reemplaza_a:null },
    { country:'Cabo Verde',           name:'Laros Duarte',                  reemplaza_a:null },
    { country:'Cabo Verde',           name:'Nuno Da Costa',                 reemplaza_a:null },
    { country:'Canadá',               name:'Joel Waterman',                 reemplaza_a:null },
    { country:'Canadá',               name:'Alfie Jones',                   reemplaza_a:null },
    { country:'Costa de Marfil',      name:'Guéla Doué',                   reemplaza_a:null },
    { country:'Costa de Marfil',      name:'Elye Wahi',                    reemplaza_a:null },
    { country:'Costa de Marfil',      name:'Nicolas Pépé',                 reemplaza_a:null },
    { country:'Croacia',              name:'Nikola Vlašić',                 reemplaza_a:null },
    { country:'Croacia',              name:'Igor Matanović',                reemplaza_a:null },
    { country:'Chequia',              name:'Vladimír Darida',               reemplaza_a:null },
    { country:'Chequia',              name:'David Douděra',                 reemplaza_a:null },
    { country:'Chequia',              name:'Mojmír Chytil',                 reemplaza_a:null },
    { country:'Ecuador',              name:'Anthony Valencia',              reemplaza_a:null },
    { country:'Egipto',               name:'Mohamed Abdelmonem',            reemplaza_a:null },
    { country:'Egipto',               name:'Mahmoud Sabre',                 reemplaza_a:null },
    { country:'Egipto',               name:'Haissem Hassan',                reemplaza_a:null },
    { country:'Egipto',               name:'Ibrahim Adel',                  reemplaza_a:null },
    { country:'Inglaterra',           name:"Nico O'Reilly",                 reemplaza_a:null },
    { country:'Inglaterra',           name:'Eberechi Eze',                  reemplaza_a:null },
    { country:'Inglaterra',           name:'Noni Madueke',                  reemplaza_a:null },
    { country:'Francia',              name:"N'Golo Kanté",                  reemplaza_a:null },
    { country:'Francia',              name:'Rayan Cherki',                  reemplaza_a:null },
    { country:'Francia',              name:'Marcus Thuram',                 reemplaza_a:null },
    { country:'Alemania',             name:'Manuel Neuer',                  reemplaza_a:null },
    { country:'Alemania',             name:'Malick Thiaw',                  reemplaza_a:null },
    { country:'Alemania',             name:'Aleksandar Pavlović',           reemplaza_a:null },
    { country:'Alemania',             name:'Angelo Stiller',                reemplaza_a:null },
    { country:'Alemania',             name:'Deniz Undav',                   reemplaza_a:null },
    { country:'Ghana',                name:'Benjamin Asare',                reemplaza_a:null },
    { country:'Ghana',                name:'Jonas Adjetey',                 reemplaza_a:null },
    { country:'Ghana',                name:'Kojo Peprah Oppong',            reemplaza_a:null },
    { country:'Ghana',                name:'Kwasi Sibo',                    reemplaza_a:null },
    { country:'Ghana',                name:'Christopher Bonsu Baah',        reemplaza_a:null },
    { country:'Ghana',                name:'Ernest Nuamah',                 reemplaza_a:null },
    { country:'Ghana',                name:'Brandon Thomas-Asante',         reemplaza_a:null },
    { country:'Ghana',                name:'Prince Adu',                    reemplaza_a:null },
    { country:'Haití',                name:'Wilguens Paugain',              reemplaza_a:null },
    { country:'Haití',                name:'Wilson Isidor',                 reemplaza_a:null },
    { country:'Irán',                 name:'Arya Yousefi',                  reemplaza_a:null },
    { country:'Irán',                 name:'Ali Nemati',                    reemplaza_a:null },
    { country:'Irán',                 name:'Amirmohammad Razzaghinia',      reemplaza_a:null },
    { country:'Irán',                 name:'Ali Alipour',                   reemplaza_a:null },
    { country:'Irán',                 name:'Amirhossein Hosseinzadeh',      reemplaza_a:null },
    { country:'Irak',                 name:'Kevin Yakob',                   reemplaza_a:null },
    { country:'Japón',                name:'Hiroki Ito',                    reemplaza_a:null },
    { country:'Japón',                name:'Wataru Endo',                   reemplaza_a:null },
    { country:'Japón',                name:'Yuito Suzuki',                  reemplaza_a:null },
    { country:'Japón',                name:'Daizen Maeda',                  reemplaza_a:null },
    { country:'Jordania',             name:'Odeh Fakhoury',                 reemplaza_a:null },
    { country:'Corea del Sur',        name:'Taehyeon Kim',                  reemplaza_a:null },
    { country:'Corea del Sur',        name:'Moonhwan Kim',                  reemplaza_a:null },
    { country:'México',               name:'Guillermo Ochoa',               reemplaza_a:null },
    { country:'México',               name:'Érik Lira',                     reemplaza_a:null },
    { country:'México',               name:'Álvaro Fidalgo',                reemplaza_a:null },
    { country:'México',               name:'Brian Gutiérrez',               reemplaza_a:null },
    { country:'México',               name:'Gilberto Mora',                 reemplaza_a:null },
    { country:'México',               name:'Armando González',              reemplaza_a:null },
    { country:'Marruecos',            name:'Issa Diop',                     reemplaza_a:null },
    { country:'Marruecos',            name:'Anass Salah-Eddine',            reemplaza_a:null },
    { country:'Marruecos',            name:'Chadi Riad',                    reemplaza_a:null },
    { country:'Marruecos',            name:'Neil El Aynaoui',               reemplaza_a:null },
    { country:'Marruecos',            name:'Chemsdine Talbi',               reemplaza_a:null },
    { country:'Países Bajos',         name:'Quinten Timber',                reemplaza_a:null },
    { country:'Países Bajos',         name:'Noa Lang',                      reemplaza_a:null },
    { country:'Noruega',              name:'Jens Petter Hauge',             reemplaza_a:null },
    { country:'Paraguay',             name:'Braian Ojeda',                  reemplaza_a:null },
    { country:'Paraguay',             name:'Álex Arce',                     reemplaza_a:null },
    { country:'Catar',                name:'Ayoub Aloui',                   reemplaza_a:null },
    { country:'Catar',                name:'Jassem Gaber',                  reemplaza_a:null },
    { country:'Catar',                name:'Mohammed Muntari',              reemplaza_a:null },
    { country:'Arabia Saudita',       name:'Abdulelah Alamri',              reemplaza_a:null },
    { country:'Arabia Saudita',       name:'Ali Majrashi',                  reemplaza_a:null },
    { country:'Arabia Saudita',       name:'Mohamed Kanno',                 reemplaza_a:null },
    { country:'Arabia Saudita',       name:'Sultan Mandash',                reemplaza_a:null },
    { country:'Escocia',              name:'Nathan Patterson',              reemplaza_a:null },
    { country:'Senegal',              name:'Ibrahim Mbaye',                 reemplaza_a:null },
    { country:'Sudáfrica',            name:'Ime Okon',                      reemplaza_a:null },
    { country:'Sudáfrica',            name:'Jayden Adams',                  reemplaza_a:null },
    { country:'Sudáfrica',            name:'Themba Zwane',                  reemplaza_a:null },
    { country:'Sudáfrica',            name:'Relebohile Mofokeng',           reemplaza_a:null },
    { country:'España',               name:'Pau Cubarsí',                   reemplaza_a:null },
    { country:'España',               name:'Alejandro Grimaldo',            reemplaza_a:null },
    { country:'España',               name:'Marcos Llorente',               reemplaza_a:null },
    { country:'España',               name:'Yeremy Pino',                   reemplaza_a:null },
    { country:'Suecia',               name:'Carl Starfelt',                 reemplaza_a:null },
    { country:'Suecia',               name:'Besfort Zeneli',                reemplaza_a:null },
    { country:'Suecia',               name:'Alexander Bernhardsson',        reemplaza_a:null },
    { country:'Suecia',               name:'Benjamin Nygren',               reemplaza_a:null },
    { country:'Túnez',                name:'Abdelmouhib Chamakh',           reemplaza_a:null },
    { country:'Túnez',                name:'Omar Rekik',                    reemplaza_a:null },
    { country:'Túnez',                name:'Anis Ben Slimane',              reemplaza_a:null },
    { country:'Túnez',                name:'Rani Khedira',                  reemplaza_a:null },
    { country:'Túnez',                name:'Mohamed Belhadj Mahmoud',       reemplaza_a:null },
    { country:'Túnez',                name:'Mortadha Ben Ouanes',           reemplaza_a:null },
    { country:'Túnez',                name:'Sebastian Tounekti',            reemplaza_a:null },
    { country:'Uruguay',              name:'Matías Viña',                   reemplaza_a:null },
    { country:'EE.UU.',               name:'Gio Reyna',                     reemplaza_a:null },
    { country:'EE.UU.',               name:'Sebastian Berhalter',           reemplaza_a:null },
    { country:'Uzbekistán',           name:'Jakhongir Urozov',              reemplaza_a:null },
    { country:'Uzbekistán',           name:'Akmal Mozgovoy',                reemplaza_a:null },
    { country:'Uzbekistán',           name:'Azizjon Ganiev',                reemplaza_a:null },
  ]

  // ── Generar numeración correcta por equipo ───────────────────────────────
  // Estructura de cada selección (20 láminas):
  //   XX1  = Logo del equipo FOIL  (badge)
  //   XX2–XX12  = 11 jugadores     (players[0..10])
  //   XX13 = Foto del equipo       (team)
  //   XX14–XX20 = 7 jugadores      (players[11..17])
  let nextNum = INTRO.length  // empieza en 9
  const COUNTRIES = RAW.map(c => {
    const CC = c.id.toUpperCase()
    const stickers = []
    let pos = 1
    // pos 1: escudo FOIL
    stickers.push({ num: nextNum++, code:`${CC}${pos++}`, type:'badge',  label:`Logo — ${c.name}`, special:true })
    // pos 2-12: primeros 11 jugadores
    c.players.slice(0, 11).forEach(p =>
      stickers.push({ num: nextNum++, code:`${CC}${pos++}`, type:'player', label:p, special:false })
    )
    // pos 13: foto grupal
    stickers.push({ num: nextNum++, code:`${CC}${pos++}`, type:'team', label:`Foto del equipo — ${c.name}`, special:false })
    // pos 14-20: últimos 7 jugadores
    c.players.slice(11).forEach(p =>
      stickers.push({ num: nextNum++, code:`${CC}${pos++}`, type:'player', label:p, special:false })
    )
    return { ...c, stickers, start: stickers[0].num, end: stickers[stickers.length-1].num }
  })

  window.ALBUM = {
    intro:      INTRO,
    countries:  COUNTRIES,
    history:    HISTORY,
    cocacola:   COCACOLA,
    updateSet:  UPDATE_SET,
    total: INTRO.length + COUNTRIES.reduce((s,c)=>s+c.stickers.length,0) + HISTORY.length + COCACOLA.length,
  }
})()
