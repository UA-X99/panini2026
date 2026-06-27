// ─── DATOS COMPLETOS — Álbum Panini FIFA World Cup 2026 ──────────────────────
// 992 láminas: 9 intro + 48 selecciones × 20 + 11 historia + 12 Coca-Cola (USA)
// Actualizado con la lista de verificación oficial Panini (junio 2026)
;(function () {
  // ── 48 selecciones en orden oficial de sorteo ────────────────────────────
  // players: 18 nombres por selección, EN ORDEN DE LÁMINA:
  //   posiciones 2-12 (11 jugadores) → posición 13 = Foto de equipo (se inserta sola) → posiciones 14-20 (7 jugadores)
  const RAW = [
    // GRUPO A
    { id:'mex', name:'México',           flag:'🇲🇽', conf:'CONCACAF', group:'A',
      players:['Luis Malagón','Johan Vasquez','Jorge Sánchez','Cesar Montes','Jesus Gallardo','Israel Reyes','Diego Lainez','Carlos Rodriguez','Edson Alvarez','Orbelin Pineda','Marcel Ruiz','Érick Sánchez','Hirving Lozano','Santiago Giménez','Raúl Jiménez','Alexis Vega','Roberto Alvarado','Cesar Huerta'] },
    { id:'rsa', name:'Sudáfrica',         flag:'🇿🇦', conf:'CAF',     group:'A',
      players:['Ronwen Williams','Sipho Chaine','Aubrey Modiba','Samukele Kabini','Mbekezeli Mbokazi','Khulumani Ndamane','Siyabonga Ngezana','Khuliso Mudau','Nkosinathi Sibisi','Teboho Mokoena','Thalente Mbatha','Bathasi Aubaas','Yaya Sithole','Sipho Mbule','Lyle Foster','Iqraam Rayners','Mohau Nkota','Oswin Appollis'] },
    { id:'kor', name:'Corea del Sur',     flag:'🇰🇷', conf:'AFC',     group:'A',
      players:['Hyeon-woo Jo','Seung-Gyu Kim','Min-jae Kim','Yu-min Cho','Young-woo Seol','Han-beom Lee','Tae-seok Lee','Myung-jae Lee','Jae-sung Lee','In-beom Hwang','Kang-in Lee','Seung-ho Paik','Jens Castrop','Dongg-yeong Lee','Gue-sung Cho','Heung-min Son','Hee-chan Hwang','Hyeon-Gyu Oh'] },
    { id:'cze', name:'República Checa',   flag:'🇨🇿', conf:'UEFA',    group:'A',
      players:['Matej Kovar','Jindrich Stanek','Ladislav Krejci','Vladimir Coufal','Jaroslav Zeleny','Tomas Holes','David Zima','Michal Sadilek','Lukas Provod','Lukas Cerv','Tomas Soucek','Pavel Sulc','Matej Vydra','Vasil Kusej','Tomas Chory','Vaclav Cerny','Adam Hlozek','Patrik Schick'] },
    // GRUPO B
    { id:'can', name:'Canadá',            flag:'🇨🇦', conf:'CONCACAF', group:'B',
      players:['Dayne St.Clair','Alphonso Davies','Alistair Johnston','Samuel Adekugbe','Riche Larvea','Derek Cornelius','Moïse Bombito','Kamal Miller','Stephen Eustáquio','Ismaël Koné','Jonathan Osorio','Jacob Shaffelburg','Mathieu Choinière','Niko Sigur','Tajon Buchanan','Liam Millar','Cyle Larin','Jonathan David'] },
    { id:'bih', name:'Bosnia y Herzegovina', flag:'🇧🇦', conf:'UEFA', group:'B',
      players:['Nikola Vasilj','Amer Dedic','Sead Kolasinac','Tarik Muharemovic','Nihad Mujakic','Nikola Katic','Amir Hadziahmetovic','Benjamin Tahirovic','Armin Gigovic','Ivan Sunjic','Ivan Basic','Dzenis Burnic','Esmir Bajraktarevic','Amar Memic','Ermedin Demirovic','Edin Dzeko','Samed Bazdar','Haris Tabakovic'] },
    { id:'qat', name:'Catar',             flag:'🇶🇦', conf:'AFC',     group:'B',
      players:['Meshaal Barsham','Sultan Albrake','Lucas Mendes','Homam Ahmed','Boualem Khoukhi','Pedro Miguel','Tarek Salman','Mohamed Al-Mannai','Karim Boudiaf','Assim Madibo','Ahmed Fatehi','Mohammed Waad','Abdulaziz Hatem','Hassan Al-Haydos','Edmilson Junior','Akram Hassan Afif','Ahmed Al Ganehi','Almoez Ali'] },
    { id:'sui', name:'Suiza',             flag:'🇨🇭', conf:'UEFA',    group:'B',
      players:['Gregor Kobel','Yvon Mvogo','Manuel Akanji','Ricardo Rodríguez','Nico Elvedi','Aurèle Amenda','Silvan Widmer','Granit Xhaka','Denis Zakaria','Remo Freuler','Fabian Rieder','Ardon Jashari','Johan Manzambi','Michel Aebischer','Breel Embolo','Ruben Vargas','Dan Ndoye','Zeki Amdouni'] },
    // GRUPO C
    { id:'bra', name:'Brasil',            flag:'🇧🇷', conf:'CONMEBOL', group:'C',
      players:['Alisson','Bento','Marquinhos','Éder Militão','Gabriel Magalhães','Danilo','Wesley','Lucas Paquetá','Casemiro','Bruno Guimarães','Luiz Henrique','Vinicius Júnior','Rodrygo','João Pedro','Matheus Cunha','Gabriel Martinelli','Raphinha','Estévão'] },
    { id:'mar', name:'Marruecos',         flag:'🇲🇦', conf:'CAF',     group:'C',
      players:['Yassine Bounou','Munir El Kajoui','Achraf Hakimi','Noussair Mazraoui','Nayef Aguerd','Roman Saiss','Jawad El Yamio','Adam Masina','Sofyan Amrabat','Azzedine Ounahi','Eliesse Ben Seghir','Bilal El Khannouss','Ismael Saibari','Youssef En-Nesyri','Abde Ezzalzouli','Soufiane Rahimi','Brahim Diaz','Ayoub El Kaabi'] },
    { id:'hai', name:'Haití',             flag:'🇭🇹', conf:'CONCACAF', group:'C',
      players:['Johny Placide','Carlens Arcus','Martin Expérience','Jean-Kevin Duverne','Ricardo Adé','Duke Lacroix','Garven Metusala','Hannes Delcroix','Leverton Pierre','Danley Jean Jacques','Jean-Ricner Bellegarde','Christopher Attys','Derrick Etienne Jr','Josue Casimir','Ruben Providence','Duckens Nazon','Louicius Deedson','Frantzdy Pierrot'] },
    { id:'sco', name:'Escocia',           flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', conf:'UEFA',    group:'C',
      players:['Angus Gunn','Jack Hendry','Kieran Tierney','Aaron Hickey','Andrew Robertson','Scott McKenna','John Souttar','Anthony Ralston','Grant Hanley','Scott McTominay','Billy Gilmour','Lewis Ferguson','Ryan Christie','Kenny McLean','John McGinn','Lyndon Dykes','Che Adams','Ben Gannon-Doak'] },
    // GRUPO D
    { id:'usa', name:'Estados Unidos',    flag:'🇺🇸', conf:'CONCACAF', group:'D',
      players:['Math Freese','Chris Richards','Tim Ream','Mark McKenzie','Alex Freeman','Antonee Robinson','Tyler Adams','Tanner Tessmann','Weston McKenny','Christian Roldan','Timothy Weah','Diego Luna','Malik Tillman','Christian Pulisic','Brenden Aaronson','Ricardo Pepi','Haji Wright','Folarin Balogun'] },
    { id:'par', name:'Paraguay',          flag:'🇵🇾', conf:'CONMEBOL', group:'D',
      players:['Roberto Fernández','Orlando Gill','Gustavo Gomez','Fabián Balbuena','Juan José Cáceres','Omar Alderete','Junior Alonso','Mathías Villasanti','Diego Gomez','Damián Bobadilla','Andres Cubas','Matias Galarza Fonda','Julio Enciso','Alejandro Romero Gamarra','Miguel Almirón','Ramon Sosa','Angel Romero','Antonio Sanabria'] },
    { id:'aus', name:'Australia',         flag:'🇦🇺', conf:'AFC',     group:'D',
      players:['Mathew Ryan','Joe Gauci','Harry Souttar','Alessandro Circati','Jordan Bos','Aziz Behich','Cameron Burgess','Lewis Miller','Milos Degenek','Jackson Irvine','Riley McGree',"Aiden O'Neill",'Connor Metcalfe','Patrick Yazbek','Craig Goodwin','Kusini Vengi','Nestory Irankunda','Mohamed Touré'] },
    { id:'tur', name:'Turquía',           flag:'🇹🇷', conf:'UEFA',    group:'D',
      players:['Ugurcan Cakir','Mert Muldur','Zeki Celik','Abdulkerim Bardakci','Caglar Soyuncu','Merih Demiral','Ferdi Kadioglu','Kaan Ayhan','Ismail Yuksek','Hakan Calhanoglu','Orkun Kokcu','Arda Guler','Irfan Can Kahveci','Yunus Akgun','Can Uzun','Baris Alper Yilmaz','Kerem Akturkoglu','Kenan Yildiz'] },
    // GRUPO E
    { id:'ger', name:'Alemania',          flag:'🇩🇪', conf:'UEFA',    group:'E',
      players:['Marc-André ter Stegen','Jonathan Tah','David Raum','Nico Schlotterbeck','Antonio Rüdiger','Waldemar Anton','Ridle Baku','Maximilian Mittelstadt','Joshua Kimmich','Florian Wirtz','Felix Nmecha','Leon Goretzka','Jamal Musiala','Serge Gnabry','Kai Havertz','Leroy Sane','Karim Adeyemi','Nick Woltemade'] },
    { id:'cur', name:'Curazao',           flag:'🇨🇼', conf:'CONCACAF', group:'E',
      players:['Eloy Room','Armando Obispo','Sherel Floranus','Jurien Gaari','Joshua Brenet','Roshon Van Eijma','Shurandy Sambo','Livano Comenencia','Godfried Roemeratoe','Juninho Bacuna','Leandro Bacuna','Tahith Chong','Kenji Gorre','Jearl Margaritha','Jurgen Locadia','Jeremy Antonisse','Gervane Kastaneer','Sontje Hansen'] },
    { id:'civ', name:'Costa de Marfil',   flag:'🇨🇮', conf:'CAF',     group:'E',
      players:['Yahia Fofana','Ghislain Konan','Wilfried Singo','Odilon Kossounou','Evan Ndicka','Willy Boly','Emmanuel Agbadou','Ousmane Diomande','Franck Kessie','Seko Fofana','Ibrahim Sangare','Jean-Philippe Gbamin','Amad Diallo','Sébastien Haller','Simon Adingra','Yan Diomande','Evann Guessand','Oumar Diakite'] },
    { id:'ecu', name:'Ecuador',           flag:'🇪🇨', conf:'CONMEBOL', group:'E',
      players:['Hernán Galíndez','Gonzalo Valle','Piero Hincapié','Pervis Estupiñán','Willian Pacho','Ángelo Preciado','Joel Ordóñez','Moisés Caicedo','Alan Franco','Kendry Paez','Pedro Vite','John Yeboah','Leonardo Campana','Gonzalo Plata','Nilson Angulo','Alan Minda','Kevin Rodriguez','Enner Valencia'] },
    // GRUPO F
    { id:'ned', name:'Países Bajos',      flag:'🇳🇱', conf:'UEFA',    group:'F',
      players:['Bart Verbruggen','Virgil van Dijk','Micky van de Ven','Jurrien Timber','Denzel Dumfries','Nathan Aké','Jeremie Frimpong','Jan Paul van Hecke','Tijjani Reijnders','Ryan Gravenberch','Teun Koopmeiners','Frenkie de Jong','Xavi Simons','Justin Kluivert','Memphis Depay','Donyell Malen','Wout Weghorst','Cody Gakpo'] },
    { id:'jpn', name:'Japón',             flag:'🇯🇵', conf:'AFC',     group:'F',
      players:['Zion Suzuki','Henry Heroki Mochizuki','Ayumu Seko','Junnosuke Suzuki','Shogo Taniguchi','Tsuyoshi Watanabe','Kaishu Sano','Yuki Soma','Ao Tanaka','Daichi Kamada','Takefusa Kubo','Ritsu Doan','Keito Nakamura','Takumi Minamino','Shuto Machino','Junya Ito','Koki Ogawa','Ayase Ueda'] },
    { id:'swe', name:'Suecia',            flag:'🇸🇪', conf:'UEFA',    group:'F',
      players:['Victor Johansson','Isak Hien','Gabriel Gudmundsson','Emil Holm','Victor Nilsson Lindelöf','Gustaf Lagerbielke','Lucas Bergvall','Hugo Larsson','Jesper Karlström','Yasin Ayari','Mattias Svanberg','Daniel Svensson','Ken Sema','Roony Bardghji','Dejan Kulusevski','Anthony Elanga','Alexander Isak','Viktor Gyökeres'] },
    { id:'tun', name:'Túnez',             flag:'🇹🇳', conf:'CAF',     group:'F',
      players:['Bechir Ben Said','Aymen Dahmen','Yan Valery','Montassar Talbi','Yassine Meriah','Ali Abdi','Dylan Bronn','Ellyes Skhiri','Aissa Laidouni','Ferjani Sassi','Mohamed Ali Ben Romdhane','Hannibal Mejbri','Elias Achouri','Elias Saad','Hazem Mastouri','Ismael Gharbi','Sayfallah Ltaief','Naim Sliti'] },
    // GRUPO G
    { id:'bel', name:'Bélgica',           flag:'🇧🇪', conf:'UEFA',    group:'G',
      players:['Thibaut Courtois','Arthur Theate','Timothy Castagne','Zeno Debast','Brandon Mechele','Maxim De Cuyper','Thomas Meunier','Youri Tielemans','Amadou Onana','Nicolas Raskin','Alexis Saelemaekers','Hans Vanaken','Kevin De Bruyne','Jérémy Doku','Charles De Ketelaere','Leandro Trossard','Loïs Openda','Romelu Lukaku'] },
    { id:'egy', name:'Egipto',            flag:'🇪🇬', conf:'CAF',     group:'G',
      players:['Mohamed El Shenawy','Mohamed Hany','Mohamed Hamdy','Yasser Ibrahim','Khaled Sobhi','Ramy Rabia','Hossam Abdelmaguid','Ahmed Fatouh','Marwan Attia','Zizo','Hamdy Fathy','Mohamed Lasheen','Emam Ashour','Osama Faisal','Mohamed Salah','Mostafa Mohamed','Trezeguet','Omar Marmoush'] },
    { id:'irn', name:'Irán',              flag:'🇮🇷', conf:'AFC',     group:'G',
      players:['Alireza Beiranvand','Morteza Pouraliganji','Ehsan Hajsafi','Milad Mohammadi','Shojae Khalilzadeh','Ramin Rezaeian','Hossein Kanaani','Sadegh Moharrami','Saleh Hardani','Saeed Ezatolahi','Saman Ghoddos','Omid Noorafkan','Roozbeh Cheshmi','Mohammad Mohebi','Sardar Azmoun','Mehdi Taremi','Alireza Jahanbakhsh','Ali Gholizadeh'] },
    { id:'nzl', name:'Nueva Zelanda',     flag:'🇳🇿', conf:'OFC',     group:'G',
      players:['Max Crocombe Payne','Alex Paulsen','Michael Boxall','Liberato Cacace','Tim Payne','Tyler Bindon','Francis de Vries','Finn Surman','Joe Bell','Sarpreet Singh','Ryan Thomas','Matthew Garbett','Marko Stamenić','Ben Old','Chris Wood','Elijah Just','Callum McCowatt','Kosta Barbarouses'] },
    // GRUPO H
    { id:'esp', name:'España',            flag:'🇪🇸', conf:'UEFA',    group:'H',
      players:['Unai Simon','Robin Le Normand','Aymeric Laporte','Dean Huijsen','Pedro Porro','Dani Carvajal','Marc Cucurella','Martín Zubimendi','Rodri','Pedri','Fabián Ruiz','Mikel Merino','Lamine Yamal','Dani Olmo','Nico Williams','Ferran Torres','Álvaro Morata','Mikel Oyarzabal'] },
    { id:'cpv', name:'Cabo Verde',        flag:'🇨🇻', conf:'CAF',     group:'H',
      players:['Vozinha','Logan Costa','Pico','Diney','Steven Moreira','Wagner Pina','Joao Paulo','Yannick Semedo','Kevin Pina','Patrick Andrade','Jamiro Monteiro','Deroy Duarte','Garry Rodrigues','Jovane Cabral','Ryan Mendes','Dailon Livramento','Willy Semedo','Bebe'] },
    { id:'ksa', name:'Arabia Saudí',      flag:'🇸🇦', conf:'AFC',     group:'H',
      players:['Nawaf Alaqidi','Abdulrahman Al-Sanbi','Saud Abdulhamid','Nawaf Bouwashl','Jihad Thakri','Moteb Al-Harbi','Hassan Altambakti','Musab Aljuwayr','Ziyad Aljohani','Abdullah Alkhaibari','Nasser Aldawsari','Saleh Abu Alshamat','Marwan Alsahafi','Salem Aldawsari','Abdulrahman Al-Aboud','Feras Akbrikan','Saleh Alshehri','Abdullah Al-Hamdan'] },
    { id:'uru', name:'Uruguay',           flag:'🇺🇾', conf:'CONMEBOL', group:'H',
      players:['Sergio Rochet','Santiago Mele','Ronald Araujo','José María Giménez','Sebastian Caceres','Mathías Olivera','Guillermo Varela','Nahitan Nandez','Federico Valverde','Giorgian De Arrascaeta','Rodrigo Bentancur','Manuel Ugarte','Nicolás de la Cruz','Maxi Araujo','Darwin Núñez','Federico Viñas','Rodrigo Aguirre','Facundo Pellistri'] },
    // GRUPO I
    { id:'fra', name:'Francia',           flag:'🇫🇷', conf:'UEFA',    group:'I',
      players:['Mike Maignan','Theo Hernandez','William Saliba','Jules Kounde','Ibrahima Konate','Dayot Upamecano','Lucas Digne','Aurélien Tchouaméni','Eduardo Camavinga','Manu Kone','Adrien Rabiot','Michael Olise','Ousmane Dembele','Bradley Barcola','Désiré Doué','Kingsley Coman','Hugo Ekitike','Kylian Mbappe'] },
    { id:'sen', name:'Senegal',           flag:'🇸🇳', conf:'CAF',     group:'I',
      players:['Edouard Mendy','Yehvann Diouf','Moussa Niakhaté','Abdoulaye Seck','Ismail Jakobs','El Hadji Malick Diouf','Kalidou Koulibaly','Idrissa Gana Gueye','Pape Matar Sarr','Pape Gueye','Habib Diarra','Lamine Camara','Sadio Mane','Ismaïla Sarr','Boulaye Dia','Iliman Ndiaye','Nicolas Jackson','Krepin Diatta'] },
    { id:'irq', name:'Irak',              flag:'🇮🇶', conf:'AFC',     group:'I',
      players:['Jalal Hassan','Rebin Sulaka','Hussein Ali','Akam Hashem','Merchas Doski','Zaid Tahseen','Manaf Younis','Zidane Iqbal','Amir Al-Ammari','Ibrahim Bavesh','Ali Jasim','Youssef Amyn','Aimar Sher','Marko Farji','Osama Rashid','Ali Al-Hamadi','Aymen Hussein','Mohanad Ali'] },
    { id:'nor', name:'Noruega',           flag:'🇳🇴', conf:'UEFA',    group:'I',
      players:['Orjan Nyland','Julian Ryerson','Leo Ostigård','Kristoffer Vassbakk Ajer','Marcus Holmgren Pedersen','David Møller Wolfe','Torbjørn Heggem','Morten Thorsby','Martin Ødegaard','Sander Berge','Andreas Schjelderup','Patrick Berg','Erling Haaland','Alexander Sørloth','Aron Dønnum','Jorgen Strand Larsen','Antonio Nusa','Oscar Bobb'] },
    // GRUPO J
    { id:'arg', name:'Argentina',         flag:'🇦🇷', conf:'CONMEBOL', group:'J',
      players:['Emiliano Martinez','Nahuel Molina','Cristian Romero','Nicolas Otamendi','Nicolas Tagliafico','Leonardo Balerdi','Enzo Fernandez','Alexis Mac Allister','Rodrigo De Paul','Exequiel Palacios','Leandro Paredes','Nico Paz','Franco Mastantuono','Nico González','Lionel Messi','Lautaro Martinez','Julian Alvarez','Giuliano Simeone'] },
    { id:'alg', name:'Argelia',           flag:'🇩🇿', conf:'CAF',     group:'J',
      players:['Alexis Guendouz','Ramy Bensebaini','Youcef Atal','Rayan Aït-Nouri','Mohamed Amine Tougai','Aïssa Mandi','Ismael Bennacer','Houssem Aquar','Hicham Boudaoui','Ramiz Zerrouki','Nabil Bentalab','Farés Chaibi','Riyad Mahrez','Said Benrahma','Anis Hadj Moussa','Amine Gouiri','Baghdad Bounedjah','Mohammed Amoura'] },
    { id:'aut', name:'Austria',           flag:'🇦🇹', conf:'UEFA',    group:'J',
      players:['Alexander Schlager','Patrick Pentz','David Alaba','Kevin Danso','Philipp Lienhart','Stefan Posch','Phillipp Mwene','Alexander Prass','Xaver Schlager','Marcel Sabitzer','Konrad Laimer','Florian Grillitsch','Nicolas Seiwald','Romano Schmid','Patrick Wimmer','Christoph Baumgartner','Michael Gregoritsch','Marko Arnautović'] },
    { id:'jor', name:'Jordania',          flag:'🇯🇴', conf:'AFC',     group:'J',
      players:['Yazeed Abulaila','Ihsan Haddad','Mohammad Abu Hashish','Yazan Al-Arab','Abdallah Nasib','Saleem Obaid','Mohammad Abualnadi','Ibrahim Saadeh','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mohannad Abu Taha','Amer Jamous','Musa Al-Taamari','Yazan Al-Naimat','Mahmoud Al-Mardi','Ali Olwan','Mohammad Abu Zrayq','Ibrahim Sabra'] },
    // GRUPO K
    { id:'por', name:'Portugal',          flag:'🇵🇹', conf:'UEFA',    group:'K',
      players:['Diogo Costa','Jose Sa','Ruben Dias','João Cancelo','Diogo Dalot','Nuno Mendes','Gonçalo Inácio','Bernardo Silva','Bruno Fernandes','Ruben Neves','Vitinha','João Neves','Cristiano Ronaldo','Francisco Trincao','João Felix','Gonçalo Ramos','Pedro Neto','Rafael Leão'] },
    { id:'cod', name:'RD Congo',          flag:'🇨🇩', conf:'CAF',     group:'K',
      players:['Lionel Mpasi','Aaron Wan-Bissaka','Axel Tuanzebe','Arthur Masuaku','Chancel Mbemba','Joris Kayembe','Charles Pickel',"Ngal'ayel Mukau",'Edo Kayembe','Samuel Moutoussamy','Noah Sadiki','Théo Bongonda','Meschak Elia','Yoane Wissa','Brian Cipenga','Fiston Mayele','Cédric Bakambu','Nathanaël Mbuku'] },
    { id:'uzb', name:'Uzbekistán',        flag:'🇺🇿', conf:'AFC',     group:'K',
      players:['Utkir Yusupov','Farrukh Savfiev','Sherzod Nasrullaev','Umar Eshmurodov','Husniddin Aliqulov','Rustamjon Ashurmatov','Khojiakbar Alijonov','Abdukodir Khusanov','Odiljon Hamrobekov','Otabek Shukurov','Jamshid Iskanderov','Azizbek Turgunboev','Khojimat Erkinov','Eldor Shomurodov','Oston Urunov','Jaloliddin Masharipov','Igor Sergeev','Abbosbek Fayzullaev'] },
    { id:'col', name:'Colombia',          flag:'🇨🇴', conf:'CONMEBOL', group:'K',
      players:['Camilo Vargas','David Ospina','Dávinson Sánchez','Yerry Mina','Daniel Munoz','Johan Mojica','Jhon Lucumí','Santiago Arias','Jefferson Lerma','Kevin Castaño','Richard Rios','James Rodriguez','Juan Fernando Quintero','Jorge Carrascal','Jon Arias','Jhon Cordova','Luis Suárez','Luis Díaz'] },
    // GRUPO L
    { id:'eng', name:'Inglaterra',        flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', conf:'UEFA',    group:'L',
      players:['Jordan Pickford','John Stones','Marc Guéhi','Ezri Konsa','Trent Alexander-Arnold','Reece James','Dan Burn','Jordan Henderson','Declan Rice','Jude Bellingham','Cole Palmer','Morgan Rogers','Anthony Gordon','Phil Foden','Bukayo Saka','Harry Kane','Marcus Rashford','Ollie Watkins'] },
    { id:'cro', name:'Croacia',           flag:'🇭🇷', conf:'UEFA',    group:'L',
      players:['Dominik Livaković','Duje Caleta-Car','Josko Gvardiol','Josip Stanišić','Luka Vušković','Josip Sutalo','Kristijan Jakic','Luka Modrić','Mateo Kovacic','Martin Baturina','Lovro Majer','Mario Pasalic','Petar Sucic','Ivan Perišić','Marco Pasalic','Ante Budimir','Andrej Kramarić','Franjo Ivanovic'] },
    { id:'gha', name:'Ghana',             flag:'🇬🇭', conf:'CAF',     group:'L',
      players:['Lawrence Ati Zigi','Tariq Lamptey','Mohammed Salisu','Alidu Seidu','Alexander Djiku','Gideon Mensah','Caleb Yirenkyi','Abdul Issahaku Fatawu','Thomas Partey','Salis Abdul Samed','Kamaldeen Sulemana','Mohammed Kudus','Inaki Williams','Jordan Ayew','Andrew Ayew','Joseph Paintsil','Osman Bukari','Antoine Semenyo'] },
    { id:'pan', name:'Panamá',            flag:'🇵🇦', conf:'CONCACAF', group:'L',
      players:['Orlando Mosquera','Luis Mejia','Fidel Escobar','Andres Andrade','Michael Amir Murillo','Eric Davis','Jose Cordoba','Cesar Blackman','Cristian Martínez','Aníbal Godoy','Adalberto Carrasquilla','Édgar Bárcenas','Carlos Harvey','Ismael Díaz','José Fajardo','Cecilio Waterman','José Luiz Rodríguez','Alberto Quintero'] },
  ]

  // ── Generar numeración correcta ──────────────────────────────────────────
  // Estructura: 00(0) + FWC1-8(1-8) + 48×20(9-968) + FWC9-19(969-979) + CC1-12(980-991)
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

  // ── Set Coca-Cola USA (oficial, 12 láminas) ───────────────────────────────
  const COCACOLA = [
    { num:980, code:'CC 1',  type:'special', label:'Lamine Yamal — España',             special:true },
    { num:981, code:'CC 2',  type:'special', label:'Joshua Kimmich — Alemania',         special:true },
    { num:982, code:'CC 3',  type:'special', label:'Harry Kane — Inglaterra',           special:true },
    { num:983, code:'CC 4',  type:'special', label:'Santiago Giménez — México',         special:true },
    { num:984, code:'CC 5',  type:'special', label:'Antonee Robinson — Estados Unidos', special:true },
    { num:985, code:'CC 6',  type:'special', label:'Jefferson Lerma — Colombia',        special:true },
    { num:986, code:'CC 7',  type:'special', label:'Edson Álvarez — México',            special:true },
    { num:987, code:'CC 8',  type:'special', label:'Virgil van Dijk — Países Bajos',   special:true },
    { num:988, code:'CC 9',  type:'special', label:'Alphonso Davies — Canadá',          special:true },
    { num:989, code:'CC 10', type:'special', label:'Weston McKennie — Estados Unidos',  special:true },
    { num:990, code:'CC 11', type:'special', label:'Lautaro Martínez — Argentina',      special:true },
    { num:991, code:'CC 12', type:'special', label:'Gabriel Magalhães — Brasil',        special:true },
  ]

  // ── Lista de Verificación de Actualización (118 láminas) ──────────────────
  // former = nombre EXACTO en c.players → resuelve automáticamente el code/num
  const UPDATE_RAW = [
    { id:'mex', former:'Luis Malagón',            label:'Guillermo Ochoa' },
    { id:'mex', former:'Diego Lainez',            label:'Gilberto Mora' },
    { id:'mex', former:'Carlos Rodriguez',        label:'Álvaro Fidalgo' },
    { id:'mex', former:'Marcel Ruiz',             label:'Érik Lira' },
    { id:'mex', former:'Érick Sánchez',           label:'Brian Gutiérrez' },
    { id:'mex', former:'Hirving Lozano',          label:'Armando González' },
    { id:'rsa', former:'Siyabonga Ngezana',       label:'Ime Okon' },
    { id:'rsa', former:'Bathasi Aubaas',          label:'Themba Zwane' },
    { id:'rsa', former:'Sipho Mbule',             label:'Jayden Adams' },
    { id:'rsa', former:'Mohau Nkota',             label:'Relebohile Mofokeng' },
    { id:'kor', former:'Yu-min Cho',              label:'Moonhwan Kim' },
    { id:'kor', former:'Myung-jae Lee',           label:'Taehyeon Kim' },
    { id:'cze', former:'Matej Vydra',             label:'David Douděra' },
    { id:'cze', former:'Vasil Kusej',             label:'Vladimír Darida' },
    { id:'cze', former:'Vaclav Cerny',            label:'Mojmír Chytil' },
    { id:'can', former:'Samuel Adekugbe',         label:'Joel Waterman' },
    { id:'can', former:'Kamal Miller',            label:'Alfie Jones' },
    { id:'qat', former:'Tarek Salman',            label:'Ayoub Aloui' },
    { id:'qat', former:'Mohammed Waad',           label:'Jassem Gaber' },
    { id:'qat', former:'Ahmed Al Ganehi',         label:'Mohammed Muntari' },
    { id:'bra', former:'Bento',                   label:'Weverton' },
    { id:'bra', former:'Éder Militão',            label:'Alex Sandro' },
    { id:'bra', former:'Rodrygo',                 label:'Neymar Jr' },
    { id:'bra', former:'João Pedro',              label:'Endrick' },
    { id:'bra', former:'Estévão',                 label:'Igor Thiago' },
    { id:'mar', former:'Roman Saiss',             label:'Issa Diop' },
    { id:'mar', former:'Jawad El Yamio',          label:'Anass Salah-Eddine' },
    { id:'mar', former:'Adam Masina',             label:'Chadi Riad' },
    { id:'mar', former:'Eliesse Ben Seghir',      label:'Neil El Aynaoui' },
    { id:'mar', former:'Youssef En-Nesyri',       label:'Chemsdine Talbi' },
    { id:'hai', former:'Garven Metusala',         label:'Wilguens Paugain' },
    { id:'hai', former:'Christopher Attys',       label:'Wilson Isidor' },
    { id:'sco', former:'Billy Gilmour',           label:'Nathan Patterson' },
    { id:'usa', former:'Tanner Tessmann',         label:'Gio Reyna' },
    { id:'usa', former:'Diego Luna',              label:'Sebastian Berhalter' },
    { id:'par', former:'Mathías Villasanti',      label:'Braian Ojeda' },
    { id:'par', former:'Angel Romero',            label:'Álex Arce' },
    { id:'aus', former:'Joe Gauci',               label:'Paul Izzo' },
    { id:'aus', former:'Lewis Miller',            label:'Jason Geria' },
    { id:'aus', former:'Riley McGree',            label:'Ajdin Hrustic' },
    { id:'aus', former:'Patrick Yazbek',          label:'Paul Okon-Engstler' },
    { id:'aus', former:'Craig Goodwin',           label:'Nishan Velupillay' },
    { id:'ger', former:'Marc-André ter Stegen',   label:'Manuel Neuer' },
    { id:'ger', former:'Ridle Baku',              label:'Malick Thiaw' },
    { id:'ger', former:'Maximilian Mittelstadt',  label:'Angelo Stiller' },
    { id:'ger', former:'Serge Gnabry',            label:'Aleksandar Pavlović' },
    { id:'ger', former:'Karim Adeyemi',           label:'Deniz Undav' },
    { id:'civ', former:'Willy Boly',              label:'Guéla Doué' },
    { id:'civ', former:'Jean-Philippe Gbamin',    label:'Nicolas Pépé' },
    { id:'civ', former:'Sébastien Haller',        label:'Elye Wahi' },
    { id:'ecu', former:'Leonardo Campana',        label:'Anthony Valencia' },
    { id:'ned', former:'Jeremie Frimpong',        label:'Quinten Timber' },
    { id:'ned', former:'Xavi Simons',             label:'Noa Lang' },
    { id:'jpn', former:'Henry Heroki Mochizuki',  label:'Hiroki Ito' },
    { id:'jpn', former:'Yuki Soma',               label:'Wataru Endo' },
    { id:'jpn', former:'Takumi Minamino',         label:'Daizen Maeda' },
    { id:'jpn', former:'Shuto Machino',           label:'Yuito Suzuki' },
    { id:'swe', former:'Emil Holm',               label:'Carl Starfelt' },
    { id:'swe', former:'Hugo Larsson',            label:'Besfort Zeneli' },
    { id:'swe', former:'Roony Bardghji',          label:'Benjamin Nygren' },
    { id:'swe', former:'Dejan Kulusevski',        label:'Alexander Bernhardsson' },
    { id:'tun', former:'Bechir Ben Said',         label:'Abdelmouhib Chamakh' },
    { id:'tun', former:'Yassine Meriah',          label:'Omar Rekik' },
    { id:'tun', former:'Aissa Laidouni',          label:'Rani Khedira' },
    { id:'tun', former:'Ferjani Sassi',           label:'Anis Ben Slimane' },
    { id:'tun', former:'Mohamed Ali Ben Romdhane',label:'Mohamed Belhadj Mahmoud' },
    { id:'tun', former:'Sayfallah Ltaief',        label:'Sebastian Tounekti' },
    { id:'tun', former:'Naim Sliti',              label:'Mortadha Ben Ouanes' },
    { id:'bel', former:'Loïs Openda',             label:'Dodi Lukébakio' },
    { id:'egy', former:'Mohamed Hamdy',           label:'Mohamed Abdelmonem' },
    { id:'egy', former:'Khaled Sobhi',            label:'Mahmoud Sabre' },
    { id:'egy', former:'Osama Faisal',            label:'Ibrahim Adel' },
    { id:'egy', former:'Mostafa Mohamed',         label:'Haissem Hassan' },
    { id:'irn', former:'Morteza Pouraliganji',    label:'Arya Yousefi' },
    { id:'irn', former:'Sadegh Moharrami',        label:'Ali Nemati' },
    { id:'irn', former:'Omid Noorafkan',          label:'Amirmohammad Razzaghinia' },
    { id:'irn', former:'Sardar Azmoun',           label:'Ali Alipour' },
    { id:'irn', former:'Ali Gholizadeh',          label:'Amirhossein Hosseinzadeh' },
    { id:'esp', former:'Robin Le Normand',        label:'Pau Cubarsí' },
    { id:'esp', former:'Dean Huijsen',            label:'Alejandro Grimaldo' },
    { id:'esp', former:'Dani Carvajal',           label:'Marcos Llorente' },
    { id:'esp', former:'Álvaro Morata',           label:'Yeremy Pino' },
    { id:'cpv', former:'Patrick Andrade',         label:'Laros Duarte' },
    { id:'cpv', former:'Bebe',                    label:'Nuno Da Costa' },
    { id:'ksa', former:'Abdulrahman Al-Sanbi',    label:'Abdulelah Alamri' },
    { id:'ksa', former:'Saleh Abu Alshamat',      label:'Mohamed Kanno' },
    { id:'ksa', former:'Marwan Alsahafi',         label:'Ali Majrashi' },
    { id:'ksa', former:'Abdulrahman Al-Aboud',    label:'Sultan Mandash' },
    { id:'uru', former:'Nahitan Nandez',          label:'Matías Viña' },
    { id:'fra', former:'Eduardo Camavinga',       label:"N'Golo Kanté" },
    { id:'fra', former:'Kingsley Coman',          label:'Rayan Cherki' },
    { id:'fra', former:'Hugo Ekitike',            label:'Marcus Thuram' },
    { id:'sen', former:'Boulaye Dia',             label:'Ibrahim Mbaye' },
    { id:'irq', former:'Osama Rashid',            label:'Kevin Yakob' },
    { id:'nor', former:'Aron Dønnum',             label:'Jens Petter Hauge' },
    { id:'arg', former:'Franco Mastantuono',      label:'Giovani Lo Celso' },
    { id:'alg', former:'Alexis Guendouz',         label:'Luca Zidane' },
    { id:'alg', former:'Youcef Atal',             label:'Rafik Belghali' },
    { id:'alg', former:'Ismael Bennacer',         label:'Ibrahim Maza' },
    { id:'alg', former:'Said Benrahma',           label:'Adil Boulbina' },
    { id:'alg', former:'Baghdad Bounedjah',       label:'Farès Ghedjemis' },
    { id:'jor', former:'Yazan Al-Naimat',         label:'Odeh Fakhoury' },
    { id:'uzb', former:'Husniddin Aliqulov',      label:'Jakhongir Urozov' },
    { id:'uzb', former:'Azizbek Turgunboev',      label:'Azizjon Ganiev' },
    { id:'uzb', former:'Khojimat Erkinov',        label:'Akmal Mozgovoy' },
    { id:'eng', former:'Trent Alexander-Arnold',  label:"Nico O'Reilly" },
    { id:'eng', former:'Cole Palmer',             label:'Eberechi Eze' },
    { id:'eng', former:'Phil Foden',              label:'Noni Madueke' },
    { id:'cro', former:'Lovro Majer',             label:'Nikola Vlašić' },
    { id:'cro', former:'Franjo Ivanovic',         label:'Igor Matanović' },
    { id:'gha', former:'Tariq Lamptey',           label:'Benjamin Asare' },
    { id:'gha', former:'Mohammed Salisu',         label:'Kojo Peprah Oppong' },
    { id:'gha', former:'Alexander Djiku',         label:'Jonas Adjetey' },
    { id:'gha', former:'Salis Abdul Samed',       label:'Kwasi Sibo' },
    { id:'gha', former:'Mohammed Kudus',          label:'Christopher Bonsu Baah' },
    { id:'gha', former:'Andrew Ayew',             label:'Ernest Nuamah' },
    { id:'gha', former:'Joseph Paintsil',         label:'Brandon Thomas-Asante' },
    { id:'gha', former:'Osman Bukari',            label:'Prince Adu' },
  ]

  // ── Stickers "Exclusivas Internacionales" (eBay, sin numeración oficial) ──
  const EXCLUSIVE = [
    'Achraf Hakimi - Marruecos','Alphonso Davies - Canadá','Christian Pulisic - Estados Unidos',
    'Cody Gakpo - Países Bajos','Cristiano Ronaldo - Portugal','Erling Haaland - Noruega',
    'Federico Valverde - Uruguay','Florian Wirtz - Alemania','Heung-min Son - Corea del Sur',
    'Jérémy Doku - Bélgica','Jude Bellingham - Inglaterra','Kylian Mbappé - Francia',
    'Lamine Yamal - España','Lionel Messi - Argentina','Luis Díaz - Colombia',
    'Luka Modrić - Croacia','Mohamed Salah - Egipto','Moisés Caicedo - Ecuador',
    'Raúl Jiménez - México','Vinícius Júnior - Brasil',
  ]

  let nextNum = INTRO.length  // empieza en 9
  const COUNTRIES = RAW.map(c => {
    const CC = c.id.toUpperCase()
    const stickers = []
    let pos = 1
    // posición 1 = escudo (foil/badge)
    stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'badge', label:`Escudo — ${c.name}`, special:true })
    // posiciones 2-12 = jugadores 1-11, posición 13 = foto de equipo, posiciones 14-20 = jugadores 12-18
    c.players.forEach((p, i) => {
      stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'player', label: p, special:false })
      if (i === 10) {
        stickers.push({ num: nextNum++, code: `${CC} ${pos++}`, type:'team', label:`Foto Grupal — ${c.name}`, special:false })
      }
    })
    return { ...c, stickers, start: stickers[0].num, end: stickers[stickers.length-1].num }
  })

  // ── Resolver el Update Set contra las láminas reales (code/num exactos) ───
  let updNum = 1
  const UPDATE_SET = UPDATE_RAW.map(u => {
    const country = COUNTRIES.find(c => c.id === u.id)
    const match = country && country.stickers.find(s => s.type === 'player' && s.label === u.former)
    if (!match) {
      console.warn('[update-set] no se encontró la lámina original para', u.id, u.former)
    }
    return {
      code: `UPD ${updNum++}`,
      label: u.label,
      country: country ? country.name : u.id,
      former: u.former,
      replaces: match ? { code: match.code, num: match.num } : null,
    }
  })

  window.ALBUM = {
    intro:     INTRO,
    countries: COUNTRIES,
    history:   HISTORY,
    cocacola:  COCACOLA,
    updateSet: UPDATE_SET,
    exclusive: EXCLUSIVE,
    total: 992,  // 9 intro + 960 países + 11 historia + 12 Coca-Cola
  }
})()
