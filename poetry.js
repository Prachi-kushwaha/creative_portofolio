
const modal = document.getElementById("poetryModal");

const closeButton = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");

const modalChapter = document.getElementById("modalChapter");

const modalPoem = document.getElementById("modalPoem");

const chapterLinks = document.querySelectorAll(".chapter-link");

const backdrop = document.querySelector(".modal-backdrop");


/* YOUR POEMS */

const poems = {

    "Acchi Ladki": `
        Bachpan se humein ek hi kahani sunayi jaati hai...
        Achhi ladki bano.
        Zyada mat bolo.
        Seedha chalo.
        Sar jhukakar baat karo.
        Sabki baat maan lo.
        Aur pata hi nahi chalta...
        kab "achha insaan" banne ki chahat,
        "khud ko kho dene" mein badal jaati hai.
        ......
        Maine bhi koshish ki thi.
        School mein achhe number laaye.
        Kabhi kisi se badtameezi nahi ki.
        Mehman aaye to muskurayi.
        Rishta aaye to chai bhi le gayi.
        Har us jagah "haan" kahi,
        jahaan mera dil "nahin" kehna chahta tha.
        Aur sab kehte the...
        "Kitni samajhdaar ladki hai."
        Lekin...
        kisi ne kabhi yeh nahi poocha...
        ki mujhe samajhne ki koshish kisne ki?
        ...

        Mujhe yaad hai...
        ek din school ki copy ke aakhri panne par maine likha tha—
        "Main badi hokar kya banna chahti hoon?"
        Us din maine doctor nahi likha.
        Engineer nahi.
        Teacher nahi.
        Maine sirf ek lafz likha tha...
        "Azaad."

        Us waqt mujhe us lafz ka matlab bhi nahi maloom tha.
        Bas itna jaanti thi...
        ki kuch tha...
        jo mujhe andar hi andar pukarta tha.
        ...

        Ghar mein sab mujhe samajhte the.
        Mohalle wale mujhe jaante the.
        Rishta-daar meri tareef karte the.
        Lekin...
        har raat diary ka ek safha mujhe dekhkar poochhta tha—
        "Aur tum?
        Tum khud ko jaanti ho?"
        ...
    `,

    "Kyun?": `
        Kehte hain...
        har insaan ki zindagi mein ek aisa din aata hai,
        jab woh pehli baar...
        "kyun?" poochhta hai.
        Aur us ek lafz ke baad,
        woh kabhi pehle jaisa nahi rehta.
        ...
        Bachpan mein humein sawaal poochhna sikhaya jaata hai.
        Lekin jaise-jaise hum bade hote hain...
        humein jawaab maan lena sikhaya jaata hai.
        "Ye mat pehno."
        "Kyun?"
        "Bas."
        "Wahan mat jao."
        "Kyun?"
        "Log kya kahenge."
        "Raat ko bahar mat niklo."
        "Kyun?"
        "Tum ladki ho."
        ...
        Ajeeb baat hai na...
        "Tum ladki ho."
        Jaise ye ek wajah ho.
        Jaise is ek jumle ke baad,
        har aur sawaal poochhne ka haq khatam ho jaata ho.
        ...

        Us din maine pehli baar
        jawab nahi...
        wajah maangi thi.
        Aur shayad...
        logon ko mere sawaal se zyada,
        meri himmat buri lagi.
        Kyuki sadiyon se
        unhone mujhe farmaan sunaya tha
        bdle me mai bs hn krti thi, kabhi sawal nhi
        ...
        Maine us din koi inquilab nahi kiya tha.
        Main ghar chhodkar nahi gayi.
        Main cheekhi bhi nahi.
        Main bas...
        khamoshi se ek lafz ke saath khadi ho gayi—
        "Kyun?"
        Kabhi socha hai...
        satta ko sabse zyada darr kis se lagta hai?
        Talwaron se?
        Nahi.
        Bheed se?
        Nahi.
        Usse darr lagta hai
        ek insaan ke poochhe hue
        pehle "kyun?" se.
        Kyuki har badlav,
        har baghawat,
        har azaadi...
        isi ek lafz se paida hoti hai.
        ...
        Us din mujhe samajh aa gaya—
        Logon ko meri baat se masla nahi tha.
        Masla ye tha...
        ki maine pehli baar
        unki baat maan lene se inkaar kar diya tha.
        Aur inkaar...
        aksar awaaz se nahi,
        ek sawaal se shuru hota hai.
...
    `,

    "Bigdi Ladki": `
        Ajeeb baat hai...
        Jab tak tum sabki baat maante rehte ho,
        tum "samajhdaar" kehlate ho.
        Aur jis din tum apni baat keh do...
        usi din tum "bigdi hui" ho jaate ho.
        ...
        Maine apni awaaz buland nahi ki thi.
        Bas...
        use dabaana chhod diya tha.
        Farq sirf itna tha.
        Magar logon ko ye farq bahut bada laga.
        ...
        Ab har baat par ek naya jumla sunne ko milta tha.
        "Pehle to aisi nahi thi..."
        "Bahut badal gayi hai."
        "Zyada padh-likh jao, to yahi hota hai."
        "Ladki ke liye itni zidd achhi nahi."
        Main sochti thi...
        Badli main thi,
        ya unki aadat?
        ...
        Sach kahun...
        Baghawat ki sabse badi qeemat
        taane nahi hote.
        Tanhai hoti hai.
        Woh tanhai...
        jab tumhare apne bhi
        tumhe samajhne ke bajaye
        tumhe samjhaane lagte hain.
        ...
        Kabhi-kabhi
        main bhi dar jaati thi.
        Sochti thi...
        Shayad waqai meri hi ghalti hai.
        Shayad mujhe waise hi rehna chahiye tha
        jaise sab chahte the.
        Phir ek din
        maine aaine mein khud ko dekha.
        Aur ek sawaal poocha—
        "Agar sab ko khush karte-karte...
        khud ko hi kho doon,
        toh jeet kis baat ki?"
        ....
        Us din samajh aaya...
        Log tumhari parwaaz se kam,
        tumhari aadat badalne se zyada ghabraate hain.
        Unhe tumhari udaan se masla nahi hota.
        Masla ye hota hai
        ki tumne unki mutthi mein rehna chhod diya.
        ...
        Main buri nahi bani thi.
        Main sirf
        apni ho gayi thi.
        Aur is duniya mein,
        apna hona...
        aksar sabse badi baghawat hoti hai.
        Ek din log tumhe
        "Bigad gayi."
        "Ziddi.“
        Sab kuch kahenge.
        Magar yaad rakhna...
        Jo aurat har kisi ke liye aasaan ho,
        aksar usne khud ke liye jeena chhod diya hota hai.
    `,

    "Khwaab": `
        Bachpan mein...
        khwaab bahut saste hua karte the.
        Ek kagaz...
        ek qalam...
        aur poori duniya apni lagti thi.
        Tab nahi pata tha...
        ki bade hote-hote
        khwaabon ki qeemat badh jaati hai.
        ...
        Ek umr ke baad,
        har sapne ke saamne
        ek sawaal khada kar diya jaata hai.
        "Isse ghar kaise chalega?"
        "Log kya kahenge?"
        "Shaadi kab karogi?"
        "Itna sochna ladkiyon ko shobha nahi deta."
        Aur dheere-dheere...
        insaan apne khwaabon ka hisaab dene lagta hai.
        ...
        Maine bhi ek roz
        apni diary kholi.
        Usme bachpan wale kuch khwaab the.
        Kuch par waqt ki gard jam chuki thi.
        Kuch par logon ki rai.
        Aur kuch...
        maine khud kaat diye the.
        Kyunki mujhe sikhaya gaya tha—
        Har khwaab dekhna zaroori nahi hota.
        ...
        Lekin ek baat
        aaj tak samajh nahi aayi.
        Hum bachchon se poochhte hain—
        "Bade hokar kya banoge?"
        Phir bade hote hi
        unhe batane lagte hain—
        "Ye mat banna."
        ...
        Us din maine faisla kiya...
        Main har khwaab poora kar paaun,
        ye zaroori nahi.
        Magar kisi aur ke darr ki wajah se
        apna khwaab chhod doon...
        ye bhi manzoor nahi.
        ...
        Khwaab sirf manzil ka naam nahi hote.
        Khwaab...
        woh wajah hote hain
        jinki wajah se aadmi subah uthta hai.
        Aur jis din
        insaan apne khwaab se samjhauta kar leta hai,
        us din
        woh zinda zaroor rehta hai...
        magar jeena thoda kam kar deta hai.
        ...
        Main jeetna chahti hoon.
        Magar sabse pehle...
        apne khwaabon ko zinda rakhna chahti hoon.
        Chahe duniya unhe
        zid kahe...
        baghawat kahe...
        ya bewakoofi.
        Kyuki kuch log
        rozi kamaane ke liye jeete hain.
        Aur kuch...
        jeene ki wajah dhoondhne ke liye.
        Main doosri waali hoon.

    `,

    "Tanhai": `
        Log samajhte hain...
        baghawat bahut shor machati hogi.
        Magar sach kahun...
        baghawat ki sabse gehri awaaz,
        khamoshi hoti hai.
        ...
        Ek waqt tha,
        jab mere aas-paas bahut log the.
        Har baat par mashwara dene wale.
        Har faisle par rai rakhne wale.
        Aur aaj...
        sab kuch utna hi hai.
        Bas...
        meri baaton se zyada,
        meri khamoshiyon ko log padhne lage hain.
        ...
        Tanhai ajeeb cheez hoti hai.
        Ye sirf tab nahi aati,
        jab tumhare paas koi na ho.
        Ye tab bhi aati hai,
        jab tumhare aas-paas sab hon,
        magar tumhari baat sunne wala koi na ho.
        ...
        Kabhi-kabhi
        maine bhi socha...
        Kya itna mushkil tha
        waise hi jee lena,
        jaise sab jeete hain?
        Na sawaal.
        Na baghawat.
        Na tanha raaten.
        ...
        Lekin phir
        maine apni hi aankhon mein dekha.
        Wahan thakan thi...
        magar sharmindagi nahi.
        Aansu the...
        magar pachtawa nahi.
        Aur mujhe samajh aa gaya...
        Galat raaste par chalna
        utna dard nahi deta,
        jitna
        apna raasta chhod dena.
        ...
        Har azaad insaan
        ek daur se guzarta hai,
        jahaan use lagta hai—
        shayad
        poori duniya theek hai...
        aur sirf woh hi ghalat.
        Magar waqt
        ek ajeeb ustad hai.
        Woh dheere-dheere sikha deta hai,
        ki bheed ka sahi hona,
        zaroori nahi.
        Aaj bhi
        kabhi-kabhi tanhai darwaza khatkhatati hai.
        Main use andar aane deti hoon.
        Kyunki usne hi mujhe sikhaya...
        Apni sohbat se mohabbat karna.
        Aur jis din
        insaan khud ka saathi ban jaata hai,
        us din
        duniya ka akela kar dena bhi
        use hara nahi sakta.
    `,

    "Apna Raasta": `
        Ek din...
        maine mehsoos kiya,
        ki main poori zindagi
        logon ko galat sabit karne mein lagi rahi.
        Aur isi chakkar mein,
        khud ko sahi jeena bhool gayi.
        ...
        Baghawat ka matlab
        har baat ka virodh karna nahi hota.
        Baghawat ka matlab hai...
        apni zindagi ka faisla
        khud karna.
        ...
        Us din maine
        kisi se ijazat nahi maangi.
        Na chalne ki.
        Na rukne ki.
        Na sapne dekhne ki.
        Aur ajeeb baat ye thi...
        aasmaan wahi tha,
        hawa bhi wahi thi.
        Badla sirf itna tha,
        ki pehli baar
        maine apni nazron se duniya dekhi.
        ...
        Log kehte the,
        "Raaste bane-banaye milte hain."
        Mujhe hamesha lagta tha,
        agar har koi
        bani hui sadkon par hi chalega...
        toh naye raaste kab paida honge?
        ...
        Raaste banana
        aasaan nahi hota.
        Patthar bhi milte hain.
        Kaante bhi.
        Kabhi apne bhi kehte hain—
        "Wapas aa jao."
        Magar jo safar
        khud chuna ho,
        usme thakaan bhi
        apni lagti hai.
        ...
        Aaj bhi
        mujhe nahi maloom
        meri manzil kya hai.
        Magar itna zaroor maloom hai...
        main kisi aur ki manzil ki taraf
        nahi chal rahi.
        ...
        Mujhe woh zindagi nahi chahiye
        jahan har cheez mukammal ho.
        Mujhe woh zindagi chahiye
        jahan har faisla
        mera ho.
        Kyuki jeet ka maza
        abhi hai,
        jab safar bhi
        tumhara apna ho.
        ...
        Aaj log phir poochte hain—
        "Aakhir tum chahti kya ho?"
        Main muskura deti hoon.
        Kyuki kuch khwahishon ko
        lafzon mein nahi,
        zindagi mein likha jaata hai.
        Main duniya badalne nahi nikli.
        Main bas itna chahti hoon...
        ki jab meri kahani khatam ho,
        toh usme
        ek bhi safha
        kisi aur ki marzi se na likha gaya ho.

    `,

    "Parwaaz": `
        Kab tak
        apne hi seene mein
        ek aasmaan chhupa kar rakhti?
        Ek roz...
        maine apne darr ki
        aakhri khidki bhi khol di.
        Hawa andar aayi.
        Aur main samajh gayi—
        qaid sirf deewaron ki nahi hoti,
        khayalon ki bhi hoti hai.
        ...
        Maine jab pehli baar
        apne lafzon ko awaaz di,
        toh kuch chehre muskura diye,
        kuch chehre badal gaye.
        Sach hamesha
        taaliyan nahi paata,
        kabhi-kabhi
        tane bhi uska istiqbaal karte hain.
        ...
        Mujhe rokne wale kehte rahe—
        "Udna har parinde ke naseeb mein nahi hota."
        Main hans padi.
        Parindon se zyada
        insaanon ne
        aasmaan baant rakha hai.
        ...
        Main kisi ka takht nahi chahti,
        na kisi ka taaj.
        Bas itni si zid hai...
        mere hisse ka aasmaan
        mere naam se pukara jaaye.
        ...
        Ab main
        ijazat ki muntazir nahi.
        Na taaliyon ki.
        Na tasdeeq ki.
        Main bas chal rahi hoon...
        jaise dariya
        samandar ka pata poochhe bina
        behta rehta hai.
        ...
        Aur agar meri raah mein
        patthar rakhoge,
        toh yaad rakhna—
        patthar deewarein bhi banate hain,
        aur raaste bhi.
        Ye faisla
        patthar ka nahi,
        chalne wale ka hota hai.

    `,

    "Qeemat": `
        Kehte hain...
        har cheez ki ek qeemat hoti hai.
        Mohabbat ki.
        Khwaabon ki.
        Azaadi ki.
        Aur baghawat ki bhi.
        ...
        Maine jab apna raasta chuna,
        toh sirf raaste nahi badle...
        kuch log bhi peeche reh gaye.
        Kuch rishte
        sirf meri khamoshi tak the.
        Meri awaaz tak aate-aate
        toot gaye.
        ...
        Ek waqt tha,
        jab mujhe har kisi ka apna hona zaroori lagta tha.
        Aaj samajh aaya—
        har kisi ka saath,
        har safar ke liye nahi hota.
        ...
        Mujhe khone walon ne
        ye samjha,
        ki main haar gayi.
        Aur maine paane walon se jaana,
        kabhi-kabhi
        khud ko paane ke liye
        logon ko khona padta hai.
        ...
        Ab koi mujhe
        ziddi kehta hai,
        koi bigdi hui,
        koi beparwah.
        Main bas muskura deti hoon.
        Naam badalte rehte hain...
        fitrat nahi.
        ...
        Maine apni zanjeeren
        tod di hain.
        Magar kalaiyon par
        unke nishaan
        ab bhi baaki hain.
        Shayad...
        azaadi ka matlab
        nishaan mit jaana nahi,
        unke saath jeena seekh lena hai.
        ...
        Main aaj bhi
        waisi hi ladki hoon.
        Bas farq itna hai—
        pehle logon ke faislon se
        apni pehchaan banati thi,
        aaj
        apni pehchaan se
        logon ke faisle sun leti hoon.
    `,

    "Khauf": `
        Ek umr tak...
        main samajh se ladti rahi.
        Phir ek roz
        ehsaas hua...
        samajh se zyada,
        main uske khauf se lad rahi thi.
        ...
        Khauf...
        logon ki baaton ka.
        Unki nazron ka.
        Un faislon ka,
        jo kabhi mere the hi nahi.
        ...
        Ajeeb qaid thi.
        Darwaza khula tha,
        magar pair
        meri hi dehleez se bandhe the.
        ...
        Ek din
        maine khud se poocha—
        "Agar duniya waise bhi baat karegi...
        toh phir main apni marzi se kyun na jeeyun?"
        Us sawaal ke baad,
        andar kuch toot bhi gaya...
        aur kuch janm bhi le liya.
        ...
        Us din
        maine kisi se jeetne ki koshish nahi ki.
        Na samajh se.
        Na riwaazon se.
        Na un logon se
        jo mujhe samajh hi nahi paaye.
        Maine sirf
        apne khauf ko hara diya.
        ...
        Aur yaqeen maano...
        Insaan
        duniya se nahi haarta.
        Woh us din haarta hai,
        jab apne hi darr ko
        apna muqaddar maan leta hai.
        ...
        Ab bhi
        log wahi hain.
        Baatein wahi hain.
        Nigaahein bhi nahi badli.
        Badla hai...
        toh bas itna,
        ki ab unki awaazon se
        meri khamoshi nahi toot'ti.
        ...
        Main baghi isliye nahi hoon
        ki mujhe riwaazon se nafrat hai.
        Main baghi isliye hoon...
        kyunki mujhe
        apni rooh se mohabbat hai.
        Aur jo insaan
        apni rooh se wafa kar le,
        use duniya ki tasdeeq ki zarurat nahi rehti.

    `,

    "Mere Hisse Ka Aasmaan": `
        Kabhi socha tha...
        manzil ek din
        taaliyon ke shor mein milegi.
        Phir samajh aaya...
        kuch safar
        khamoshi mein mukammal hote hain.
        ...
        Main wahi ladki hoon...
        jise kabhi
        ziddi kaha gaya,
        bigdi hui kaha gaya,
        haath se nikli hui bhi.
        Aaj unhi lafzon ko
        muskurakar sunti hoon.
        Kyunki ab
        woh meri pehchaan nahi,
        sirf kisi aur ki rai hain.
        ...
        Maine duniya nahi badli.
        Na riwaaz badle.
        Na log.
        Na unki soch.
        Magar ek cheez zaroor badal gayi—
        ab meri zindagi ka qalam
        mere hi haath mein hai.
        ...
        Ab mujhe
        ijazat ki zarurat nahi.
        Tasdeeq ki bhi nahi.
        Main apni haar bhi
        khud chunungi,
        aur apni jeet bhi.
        Kyunki
        udhaar ki kamyabi se,
        apni nakaami behtar hoti hai.
        ...
        Aaj jab aasmaan ko dekhti hoon,
        toh use jeetne ka khayal nahi aata.
        Bas itna lagta hai...
        iske ek kone par
        mera bhi naam likha hai.
        Na kisi ne bakhsha.
        Na kisi ne cheena.
        Bas...
        maine dhoondh liya.
        ...
        Shayad
        baghawat ka matlab
        duniya ke khilaaf khada hona nahi tha.
        Baghawat ka matlab tha—
        har us darr ke saamne muskura dena,
        jo kehta tha,
        "Tum nahi kar paogi."
        ...
        Aur agar
        kabhi kisi raaste par
        tumhe mere qadam dikh jaayein,
        toh un par chalna mat.
        Apna raasta banana.
        Kyuki meri jeet
        mere jaisa koi banne mein nahi,
        balki
        tumhara
        apne jaisa banne mein hai.

    `

};


/* OPEN MODAL */

chapterLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const title = this.dataset.title;

        const chapter = this.dataset.chapter;

        modalTitle.textContent = title;

        modalChapter.textContent = `${chapter} / 10`;

        modalPoem.textContent = poems[title] || "Poem coming soon.";

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        closeButton.focus();

    });

});


/* CLOSE MODAL */

function closePoetryModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* CROSS BUTTON */

closeButton.addEventListener("click", closePoetryModal);


/* CLICK OUTSIDE THE PANEL */

backdrop.addEventListener("click", closePoetryModal);


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePoetryModal();

    }

});
