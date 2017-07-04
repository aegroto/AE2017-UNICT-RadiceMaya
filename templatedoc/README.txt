            Contenuti e organizzazione della directory templatedoc 
 
**Sommario** 

  Gli schemi (_template_) raccolti in questa collezione mirano ad 
offrire un aiuto al conseguimento di un buon grado di uniformita` 
e completezza nella documentazione di corredo a prodotti software 
maturi, realizzati in progetti di Architettura degli elaboratori, 
nonostante le prevedibilmente molteplici differenze fra i prodotti. 


**1. Organizzazione degli schemi di documentazione** 

  Gli schemi sono organizzati per permettere una rapida pubblicazione 
del software e della documentazione prodotta, sia in versioni preliminari 
(possibilmente incomplete) che in versione finale, nello spazio web del 
progetto sul server Galileo. Per le versioni preliminari, se si desidera 
riservare l'accesso ai componenti del gruppo si possono usare in alternativa 
il repository SVN e/o il Wiki del progetto sullo stesso server. 

  Si prevedono due tipologie principali di progetti e, ortogonalmente, 
due schemi di distribuzione dei relativi prodotti, il che da` luogo a 
quattro varianti della directory radice, a partire dalla quale gli schemi 
vanno istanziati per realizzare la documentazione essenziale sui prodotti 
distribuiti.

  Con riguardo agli schemi di distribuzione (dei contenuti, nella subdirectory 
download), si prevedono due opzioni: 
 o  *distribuzione singola*, cioe` in un unico archivio compresso, 
    di tutti i contenuti che costituiscono il prodotto (sorgenti, 
    eseguibili, documentazione); 
 o  *distribuzione tripla*, cioe` in tre archivi distinti, di: 
     1. tutto, 
     2. sorgenti + documentazione, 
     3. eseguibili (+ guida di utente). 

  Con riguardo alle tipologie di progetti, si distingue fra: 
 o  *nuovi prodotti*, di cui si rilascia la prima versione; 
 o  *revisioni di prodotti* gia` esistenti, ovvero nuove versioni 
    di questi, per migliorarne alcune caratteristiche di qualita`. 

  Naturalmente, possono sussistere progetti di tipologia o con schema 
di distribuzione diversi da quelli qui contemplati. Si invitano gli 
studenti ad adottare gli schemi piu` prossimi alle proprie esigenze, 
adattandoli a esse ma mantenendo fermo l'obiettivo di non far mancare, 
pur se diversamente organizzata, la documentazione minima, qui 
schematizzata attraverso varie note. 

   *N.B.* Questo e` piu` importante del rispetto della presente struttura 
   di documentazione e distribuzione: se ne puo` preferire una diversa per 
   buoni motivi, _e.g._ mantenere la struttura di una versione precedente 
   del prodotto, ma il contenuto minimo di documentazione deve in ogni caso 
   essere reso disponibile ai destinatari del prodotto.

  La combinazione ortogonale delle due suddette opzioni da` luogo 
alle quattro subdirectory seguenti, ciascuna delle quali puo` fungere 
da directory radice di una istanza di questi schemi: 

 o  singledistro/newproject10/ 
 o  singledistro/revprojectvn/ 
 o  tripledistro/newproject10/ 
 o  tripledistro/revprojectvn/ 


**2. Contenuti degli schemi, convenzioni e requisiti per la loro istanziazione**

  Nella directory radice, prescelta fra le quattro suddette, vanno 
istanziati i file-schema index.html e index-en.html (versione inglese 
del precedente: *non* si richiede che la documentazione sia bilingue, 
che comunque raramente lo sara` tutta, ma e` utile che lo sia 
almeno la 'vetrina' di presentazione del prodotto). L'istanziazione 
e` facilitata dalla seguente convenzione: 

   Stringhe di testo nello schema delimitate da una coppia di caratteri 
   di sottolinea ("_") sono *variabili di schema*, che vanno rimpiazzate 
   (sottolinea incluse) da stringhe appropriate all'istanza.   

  Si suggerisce di visualizzare il file-schema index.html prima di 
procedere alla sua istanziazione, cosi` ci si rende subito conto delle 
poche modifiche da apportare. La visualizzazione puo` essere effettuata 
con un navigatore seguendo il link relativo allo schema di interesse: 

 o  _singledistro/newproject10/_ URL: singledistro/newproject10/index.html
 o  _singledistro/revprojectvn/_ URL: singledistro/revprojectvn/index.html
 o  _tripledistro/newproject10/_ URL: tripledistro/newproject10/index.html
 o  _tripledistro/revprojectvn/_ URL: tripledistro/revprojectvn/index.html

  La commutazione di lingua puo` essere effettuata puntando il mouse 
sulla bandierina in alto a destra, mentre le altre tre icone in basso 
a destra servono alla verifica on-line della conformita` agli standard 
HTML e CSS e alla visualizzazione delle condizioni di licenza libera 
(GPL v. 3).

  La verifica di conformita` e` importante, non tanto per gli schemi 
forniti (gia` verificata), quanto per le loro istanze, che potrebbero 
essere non conformi per qualche disattenzione nell'editing.

  Valgono in generale (e non solo per le istanze dello schema in questione) 
le seguenti *prescrizioni importanti:* 

 1. Il software prodotto va rilasciato nel pubblico dominio, sorgenti inclusi, 
    alle condizioni d'uso stabilite dalla licenza libera GPL v. 3.

 2. Tutti i file HTML prodotti per la documentazione devono essere conformi allo
    standard HTML del W3C, e allo standard CSS se fanno uso di fogli di stile. 

  Si raccomanda pertanto, ad esempio, di evitare di produrre file HTML 
mediante mera esportazione da programmi di editing (_e.g._ Word) noti per 
produrre disastri rispetto al requisito di conformita` qui prescritto. 
Gli autori di documenti HTML possono verificarne on-line la conformita` 
allo standard anche senza averli pubblicati su web. Questo servizio e` 
disponibile all'URI: 

   _http://validator.w3.org_ URL: http://validator.w3.org

  Il servizio permette il caricamento del file HTML da verificare 
("Validate by File Upload"). Lo stesso vale per la verifica di 
conformita` CSS, non necessaria per lo stile impiegato negli schemi 
qui forniti, ma che puo` esserlo in caso di adozione di stili diversi. 
L'URI di questo servizio e`: 

   _http://jigsaw.w3.org/css-validator_ URL: http://jigsaw.w3.org/css-validator

  Gli altri file-schema qui forniti (oltre a icone, stili CSS ecc.), tutti 
collocati nella subdirectory doc/ della radice prescelta, sono in formato 
testo semplice.

  Tranne il file license.txt, che *non* va modificato, i file di testo nella 
directory doc/ contengono linee guida relative al contenuto minimo dei 
rispettivi tipi di documento, e in qualche caso anche a eventuali ulteriori 
contenuti desiderabili. Non e` necessario fornire tali informazioni in formato 
testo semplice: i contenuti dei presenti schemi sono rivolti agli autori, non 
agli utenti dei prodotti. Gli autori possono scegliere anche altri formati, 
ma nel caso di tali scelte, e/o di diversa collocazione dei file di 
documentazione, occorre coerentemente modificare i collegamenti locali 
nei file index.html e index-en.html, nella directory radice prescelta. 

  I formati raccomandati per i file di documentazione sono .txt, .html 
e .pdf. Per il formato .html, valgono i requisiti di conformita` W3C 
stabiliti sopra, mentre: 

   Per il formato .txt, va rispettata la conformita` della codifica 
   di carattere allo standard UTF-8.  

Soddisfare questo requisito mette al riparo da differenze di codifica 
testuale che caratterizzano le piu` comuni piattaforme, per esempio 
rispetto a caratteri con segni diacritici (accenti ecc.), nella 
visualizzazione del file di testo attraverso un navigatore o altro 
programma  di lettura che riconosce UTF-8. 


**3. Confezione del prodotto da pubblicare e costruzione delle distribuzioni**

  Quando tutti i contenuti sono pronti, incluse le istanze degli schemi 
indicati, occorre procedere alla costruzione degli archivi da inserire 
nella subdirectory download/. Per tutti gli archivi in questione e` 
preferibile il formato di compressione .zip, il piu` diffuso fra 
sistemi diversi, sebbene non il piu` efficiente quanto a rapporto 
medio di compressione. Inoltre, la decompressione di ciascun archivio 
dovrebbe generare un'unica cartella che contiene tutto il resto. 
Per esempio, se in un sistema Unix "radice/" e` la directory radice 
dell'archivio da generare, cio` puo` ottenersi eseguendo nella 
directory che contiene "radice/" il comando 

   zip -r radice.zip radice 

  Alcune delle distribuzioni previste, e certamente quella completa, 
prevedono l'inclusione della documentazione nella distribuzione. In 
tal caso la radice dell'archivio dovrebbe contenere una copia esatta 
della subdirectory doc/ con i suoi contenuti. Si raccomanda di *non* 
usare link simbolici a tal fine: zip non li riconosce, e soprattutto 
la documentazione in una distribuzione deve essere consultabile 
indipendentemente dalla sua presenza in un contesto esterno, quale 
in questo caso e` la directory doc/ rispetto a download/, che contiene 
la/e distribuzione/i del prodotto. 


**4.  Evoluzione di questo documento**

  Gli schemi qui proposti sono una seconda approssimazione, perfettibile 
come tutte le cose umane. Commenti e suggerimenti in base all'esperienza 
d'uso che se ne fa sono molto apprezzati, e possono essere comunicati 
e discussi nel Forum dell'insegnamento, in risposta al post di apertura 
del relativo topic. Eventuali nuove versioni di queste distribuzioni 
saranno rese disponibili allo stesso modo, ovvero via download dalle 
rispettive pagine degli schemi di documentazione di cui sopra, oltre che 
nel _repository SVN del (meta)progetto *ae2017guidelines*_, 
URL: http://galileo.dmi.unict.it/svn/ae2017guidelines/
  __

--

   Data: Sabato 29 Aprile 2017
   Autore: _G. Scollo_                 URL: http://www.dmi.unict.it/~scollo 
   Versione: 0.6 
   _Progetto linee-guida AE 2017_
   URL: ../index.html
   Formati di questo documento: _Testo semplice_ URL: ./README.txt
   _HTML_ URL: ./README.html
   _PDF_ URL: ./README.pdf

