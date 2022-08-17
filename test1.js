describe('eMag.ro', () => {

    it('should load', async () => {
       await browser.url('http://www.emag.ro');
    });

});

// Orice test trebuie pus intr-o suita de teste - functia describe
// functia describe primeste doi parametrii separati prin virgula
// primul parametru este numele suitei, cum numim practic folder-ul care contine mai multe teste (deobicei aici se pune numele unei functionalitati, numele unei pagini)
// al doilea parametru este o functie anonima 
// => functia de arrow function
// {} corpul functiei unde punem toate testele noastre

// cum arata un singur test

describe('eMag.ro', () => {

    it('should load', async () => { });

});

// functia it defineste un test
// primul parametru este numele testului (ce trebuie sa faca testul)
// al doilea parametru este o functie anonima

// sync - functiile se executa pe rand (nu se pune nimic in fata functiei si/sau executiei)
// async - se executa in acelasi timp (de preferat)

// modul de lucru async foloseste niste lucruri care se numesc promisiuni
// adica exista ideea ca oricum pagina se va incarca
// pentru asta inainte definitiei functiei trebuie sa avem trecut cuvantul cheie async
// cuvantul cheie await inainte de executia functiei
// practic se genereaza niste fake-uri inainte pentru derularea codului mai rapid (nu e vizibil cu ochiul liber, se face in cateva de milisecunde)

// await browser.url('http://www.emag.ro') - url('http://www.emag.ro'), functie care vine din webdriver io, 2functie pe care noi doar o folosim
// browser. - reprezinta un obiect; cu "." luam practic lucruri dintr-un obiect (v. tema 2)
