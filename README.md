# HCI

# Uvod

U okviru ovog seminara izrađena je web aplikacija hotela. Pritom za izradu korišteni su Excalidraw, alat za izradu sitemape i low fidelity prototipa, Figma za izradu high fidelity prototipa, te Next.js za implementaciju same aplikacije. Cilj web aplikacije je omogućiti korisnicima detaljan prikaz hotela i njegovih usluga, s ciljom modernizacije marketinga i povećanja noćenja. Ovaj izještaj sadrži opis osnovnih značajki aplikacije, sitemapu, low i high fidelity prototip aplikacije uz priložene slike, te samu analizu aplikacije i performansi koristeći različite dizajnerske principe, heuristike i alate.

## Stanje na tržištu

Na tržištu trenutno postoji niz sličnih web sustava, međutim prilikom njihovog korištenja primjećen je niz nedostataka i problema kod dizajna korisničkog sustava.

Neki primijećeni nedostaci su:

- Zastarjeli dizajn
- Nepreglednost stranice
- Prenatrpanost sadržaja, pa se važne informacije ne ističu
- Responzivnost
- Neintiutivni navigation bar

Cilj je osmisliti web dizajn aplikacije koji će povećati korisničko iskustvo i riješiti prethodno navedene nedostatke, a pritom korisniku pružiti sve potrebne funkcionalnosti.

## Očekivani tip korisnika

Web aplikacija namijenjena je širokom krugu korisnika, ponajprije stranim, a i domaćim turistima koji su potencijalni gosti hotela. Pritom je i namijenjena za više govornih područija.

## Ograničenja korištenja sustava

Da bi korisnik mogao koristiti web aplikaciju mora:

- Imati pristup internetu
- Imati uređaj s web preglednikom
- Razumjeti jedan od korištenih jezika
- Osnovno informatičko znanje

## Zahtjevi i zadaće

Zahtjevi i zadaće koje web stranica mora imat:

- Osnovne informaciji o hotelu i usluzi, uključuje slike
- Aplikacija će se koristiti iz web preglednika
- Aplikacija će se koristiti na uređajima različitih veličina (različita razlučivost)
- Korisnik koristi aplikaciju kao gost
- Broj javnih stranica je minimalno 5
- Prikaz sadržaja na više jezika

U budućnosti se web aplikacija može proširiti implementacijom sustava rezervacije.

## Arhitektura aplikacije

Web aplikacija razvijana je koristeći Next.js, Typescript i TailwindCSS za izradu stila. Kod aplikacije nalazi se u repozitoriju na Githubu, te je tako aplikacija deployana na Vercel. Vercel automatski pokreće produkcijsku verziju aplikacije svaki put kad se nova promjena pusha u main branch Github repozitorija.

# Low Fidelity

Prvi korak u izradi aplikacije bila je izrada sitemape u Excalidraw alatu.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled.png)

Drugi korak prilikom izrade aplikacije je izrada low fidelity prototipa. Prototip je izrađen u alatu Excalidraw te su priložene slike desktop i mobilne verzije.

## Desktop verzija

![test1.png](HCI%2080e3bb606b32418392af3584098a1627/test1.png)

## Mobilna verzija

![test2.png](HCI%2080e3bb606b32418392af3584098a1627/test2.png)

# High Fidelity

Idući korak pri izradi web aplikacije je izrada high fidelity prototipa u Figmi. Nad takvim prototipom vrši se evaluacija zbog detekcije potencijalnih pogrešaka i propusta u dizajnu.

## Desktop verzija

### Home page

![Home.png](HCI%2080e3bb606b32418392af3584098a1627/Home.png)

### Rooms page

![Rooms.png](HCI%2080e3bb606b32418392af3584098a1627/Rooms.png)

### Villas page

![Villas.png](HCI%2080e3bb606b32418392af3584098a1627/Villas.png)

### Services page

![Services.png](HCI%2080e3bb606b32418392af3584098a1627/Services.png)

### Contact page

![Contact.png](HCI%2080e3bb606b32418392af3584098a1627/Contact.png)

### Menu

![Menu.png](HCI%2080e3bb606b32418392af3584098a1627/Menu.png)

## Mobilna verzija

### Home page

![Mobile Home.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Home.png)

### Rooms page

![Mobile Rooms.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Rooms.png)

### Villas page

![Mobile Villas.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Villas.png)

### Services page

![Mobile Services.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Services.png)

### Contact page

![Mobile Contact.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Contact.png)

### Menu

![Mobile Menu.png](HCI%2080e3bb606b32418392af3584098a1627/Mobile_Menu.png)

# Evaluacija prototipa

Zatim u ovom poglavlju izvršena je evaluacija prototipa, te su navedene heuristike i principi dobrog dizajna uz priložene primjere.

## Heuristike

Heuristička evaluacija je najbolji način evaluacije dizajna. Heuristike koje su navedene u ovom poglavlju pomažu pri testiranju sučelja i otklanjanju greški bez pomoći evaluatora.

### Match between system and the real world

Navedena heuristika definira jezik kojim se stranica pisala, a on mora biti razumljiv običnom korisniku. Potrebno je izbjegavati tehnički žargon pri komunikaciji s korisnikom. Aplikacije je napisana na engleskom jeziku, a vokabular je jednostavan i razumije ga svaki korisnik. Primjer ove heuristike je jednostavan jezik izbornika i footera, dostupan na svim stranicama.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%201.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%202.png)

### Consistency and standard

Navedena heuristika odnosi se na konzistentnost u aplikaciji. Konzistentnost je zadržana koristeći iste fontove na svim komponentama, iste stilove lista, iste stilove buttona na svim stranicama i slično. Konzistentnost i standard aplikacije su postignuti definiranjem layouta koji je isti za sve stranice, na vrhu stranice se nalazi navigation bar, na sredini je sadržaj, a na dnu stranice se nalazi footer.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%203.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%204.png)

### Visibility of system status

Navedena heuristika kaže da bi sustav uvijek trebao informirati korisnika o tome što se događa, preko prikladnih povratnih informacija i u razumnom vremenskom okviru. Korisnik vidi na kojoj se trenutno stranici nalazi jer je njezin naziv stranice podebljan u komponenti izbornika. Također se i prikazuje breadcrumbs komponenta koja ukazuje na to.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%201.png)

### User control and freedom

Navedena heuristika odnosi se na izlazak korisnika iz neželjenih stanja bez potrebe za prolaskom kroz ekscesivni dijalog. Pomoću izbornika i navigacije iz footera, korisnik može pristupiti bilo kojem dijelu aplikacije. Time je korsniku omogućena potupna sloboda korištenja svih funckionalnosti aplikacije. Također korisniku je omogućen povratak na početnu stranicu pomoću breadcrumbs komponente. Izbornik je moguće otvarati, a potom i zatvoriti pritiskom na “x” u gornjem lijevom kutu izbornika.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%201.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%205.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%202.png)

### Help users recognize, diagnose and recover from errors

Navedena heuristika definira pristup obaviještavanja korisnika o greškama. Prikaz problema treba biti očit, nedvosmislen i uključivati potencijalni način rješavanja problema. Postoji mogućnost da se aplikacije ne može učitati zbog nedostatka internetskog pristupa ili iz nekog drugog razloga. S obzirom da se aplikacija pokreće u Internet pregledniku, tako on ujedno informira korisnika o grešci.

### Recognition rather than recall

Navedena heuristika nalaže da je potrebno minimizirati korisničko opterećenje memorije na način da se objekti, akcije i opcije učine vidljivima. Korisnik se ne bi trebao prisjećati informacija s jednog kraja dijaloga na drugi. Upute za korištenje sustava trebale bi biti vidljive ili lako dohvatljive kada god se za to ukaže potreba. Primjer implementacije su ikone društvenih mreža, korisnik kad vidi ikonu, zna da klikom na nju može pogledati profil odabrane društvene mreže hotela.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%206.png)

### Flexibility and efficiency of use

Navedena heuristika postiže se dodavanjem akceleratora za uobičajne naredbe. Primjer implementacije je dodavanje buttona za automatski povratak na početak stranice, a button se pojavljuje nakon što korisnik scrolla dolje stranicu. Također u footeru stranice se nalazi navigacija stranica tako da korisnik ne mora trošiti vrijeme otvarajući izbornik. Klikom na logo u headeru i footeru, korisnik se vraća na početnu stranicu.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%207.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%208.png)

### Aesthetic and minimalist design

Navedena heuristika nalaže da stranica ne bi trebala sadržavati informacije koje se rijetko koriste ili u tom trenutku nisu bitne. Treba prikazivati ograničenu količinu informacije te ne zamarati korisnika s prevelikom količinom sadržaja. Cijeli dizajn aplikacije je minimalistički, a primjer implementacije ove heuristike su sobe hotela. Na početku stranice nalazi se kratki showcase soba, a ukoliko korisnika zanima detaljniji pregled sobe, klikom na odabranu sobu stranica se scrolla na detaljan opis sobe uz odgovarajuće slike. Sve sobe nalaze se jedna ispod druge. Isti dizajn implementiran je i na stranicu vila i usluga.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%209.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2010.png)

### Help and documentation

Navedena heuristika kaže da bi bilo bolje kada bi se sustav mogao koristiti bez dokumentacije, no ponekad je potrebno pružiti pomoć i dokumentaciju. Bilo koja takva informacija trebala bi biti jednostavna za pronaći, fokusirana na korisnikov zadatak, izlistati konkretne korake i ne biti prevelika. Aplikacije je jednostavna i intuitivna za korištenje te nije bilo potrebe za izradom dokumentacije. Implementirana je Contact stranica, koja pruža kontakt za razne upite.

## CRAP principi

Prilikom izrade prototipa primijenjeni su CRAP. principi kako bi se postigao što
bolji vizualni dizajn.

### Contrast

Vizualni elementi s drukčijom svrhom trebali bi izgledati drugačije. Također, kontrast može istaknuti određene elemente. Primjer implementacije su kartice koje pružaju kratki pregled soba hotela. Slika odnosno pozadina je dodatno potamnjena od kraja prema vrhu, kako bi se kreirao kontrast između teksta i pozadine, te tako istaknuo tekst. Također u izborniku, naslov aktivne stranice je podebljan kako bi se stvorio kontrast u odnosu na ostale stranice koje su u tom trenutku neaktivne. Također kontrast je postignut u odabiru boja, te je tako povećana vidljivost elemenata.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2011.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2012.png)

### Repetition

Repetition princip se odnosi na to da elementi sučelja koji su od iste važnosti trebaju biti na isti način prikazani. Tako se postiže konzistentnost aplikacije. Prilikom izrade aplikacije korištene su svega 2 boje i njihove nijanse. Tako su svi buttoni obojeni nijansom plave boje. Osim toga koristi se jedan font, i određene veličine koje predstavljaju naslove, odnosno sam tekst opisa. Također koristi se isti layout za više stranica.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2013.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2014.png)

### Alignment

Svaki element na stranici trebao bi biti poravnat s ostalim elementima na stranici. Tekstovi unutar stranice su justified. Za tekst unutar izbornika se se koristi left alignment. Također kratki pregled soba, vila i usluga realiziran je u stupcima i redcima. Sekcije unutar stranica međusobno su pomjerene.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2015.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2016.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2017.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2018.png)

### Proximity

Elementi koji su povezani trebali bi biti grupirani, a oni koji nisu povezani trebali bi biti razdvojeni. Primjer su imena stranica i linkovi društvenih mreža u izborniku, koji su grupirani u dvije grupe. Opisi vila su također grupirani po kategorijama.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2012.png)

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2019.png)

## Teorije niske razine

Teorije niske razine definiraju pravila za olakšavanje čovjekovog snalaženja u sustavu. U nastavku se navode dvije najpoznatije teorije niske razine, Fittsov zakon i Hickov zakon.

### Fittsov zakon

Prema Fittsovom zakonu, brzina pomaka miša do elementa određena je udaljenošću miša do tog elementa i o širini samoga elementa. Na buttone u izborniku dodan je padding, tako da su oni klikabilni i šire od samog područja teksta.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2020.png)

### Hickov zakon

Hickov zakon nastoji informacije podijeliti u logičke kategorije koje ubrzavaju odabir korisnika i smanjuju broj opcija. Na taj način stranice su podijeljene s obizrom na sadržaj hotela, npr. korisnik otvara stranicu soba, a također i sobe su dalje kategorizirane prema uređenju i usluzi.

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2021.png)

# Implementacija prototipa

Nakon evaluacije dizajna i eventualnih promjena, posljednja faza je faza implementacije. Web aplikacija je izrađena koristeći Next.js i Tailwind, a stranica je postavljena na Vercel platformu. Za testiranje performansi aplikacije korištenje je Google Lighthouse alat, a mjerene metrike su: Performance, Accessibility, Best Practices, SEO i Progressive Web App. Ovaj alat korišten je paralelno uz razvoj aplikacije, kako bi se svaka metrika optimizirala u svrhu podizanja performansi aplikacije. Nakon implementacije aplikacije i poboljšanja svih metrika dobiveni su sljedeći rezultati:

![Untitled](HCI%2080e3bb606b32418392af3584098a1627/Untitled%2022.png)

# Zaključak

Dizajniranje aplikacije predstavljao je najveći izazov, a nešto manje i sama implementacija aplikacije. Prvi korak je bio izrada sitemape aplikacije, a zatim na temelju njega izrađen je low fidelity prototip. Low fidelity prototip nije zahtjevan i služi kao temelj i vodič za izradu high fidelity prototipa, a i samog razvoja stranice. Prilikom svakog koraka, bilo je potrebno primijeniti i poznavati principe i zakone dizajna, a konačno izvršena je evaluacija, koja je rezultirala konačnim promjenama u dizajnu aplikacije. Konačno kao suma svega implementirana je aplikacija koja stavlja naglasak na minimalistički dizajn i jednostavno korištenje.