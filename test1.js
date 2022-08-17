describe('eMag.ro', () => {

    it('should load', async () => {
       await browser.url('http://www.emag.ro');

       const searchBox = await $('#searchboxTrigger');

       const helpLink = await $('.navbar-aux-help-link');

       const firstButton = await $('/html/body/div[3]/div[1]/div/div[1]/ul/li[5]');

       helpLink.click();
    });

});

/* 

Orice test trebuie pus intr-o suita de teste - functia describe
Functia describe primeste doi parametrii separati prin virgula
Primul parametru este numele suitei, cum numim practic folder-ul care contine mai multe teste (deobicei aici se pune numele unei functionalitati, numele unei pagini)
Al doilea parametru este o functie anonima 
=> functia de arrow function
{} corpul functiei unde punem toate testele noastre

*/

// cum arata un singur test

describe('eMag.ro', () => {

    it('should load', async () => { });

});

/*

Functia "it" defineste un test
Primul parametru este numele testului (ce trebuie sa faca testul)
Al doilea parametru este o functie anonima

- sync - functiile se executa pe rand (nu se pune nimic in fata functiei si/sau executiei)
- async - se executa in acelasi timp (de preferat)

Modul de lucru async foloseste niste lucruri care se numesc promisiuni
Adica exista ideea ca oricum pagina se va incarca
Pentru asta inainte definitiei functiei trebuie sa avem trecut cuvantul cheie async
Cuvantul cheie await inainte de executia functiei
Practic se genereaza niste fake-uri inainte pentru derularea codului mai rapid (nu e vizibil cu ochiul liber, se face in cateva de milisecunde)

await browser.url('http://www.emag.ro') - url('http://www.emag.ro'), functie care vine din webdriver io, 2functie pe care noi doar o folosim
browser. - reprezinta un obiect; cu "." luam practic lucruri dintr-un obiect (v. tema 2)

*/


/*
SELECTORI


id - este unic (cel mai bun selector) - la id trebuie un # in fata selectorului
class - clasa nu trebuie sa fie neaparat unica - la clasa trebuie un . in fata selectorului
text - poate fi unic, de multe ori nu ai doua butoane cu acelasi text
alt atribut - fiecare tag are mai multe atribute
xpath - cale, locatie a unui element in pagina - grija mare la el

Un selector este pus intr-o constanta, cu dolar in fata, intre paranteze rotunde si intre ghilimele simple.

*/
/*

const elem = await $('h2.subheading a')
elem.click()

cu o constanta putem face tot felul de lucruri (v sus expl)
$('h2.subheading a') - acesta este selectorul
obligatoriu $ in fata selectorului

*/

