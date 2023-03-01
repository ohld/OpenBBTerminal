"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84047],{3905:(D,R,U)=>{U.d(R,{Zo:()=>G,kt:()=>r});var P=U(67294);function S(D,R,U){return R in D?Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}):D[R]=U,D}function A(D,R){var U=Object.keys(D);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(D);R&&(P=P.filter((function(R){return Object.getOwnPropertyDescriptor(D,R).enumerable}))),U.push.apply(U,P)}return U}function B(D){for(var R=1;R<arguments.length;R++){var U=null!=arguments[R]?arguments[R]:{};R%2?A(Object(U),!0).forEach((function(R){S(D,R,U[R])})):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(U)):A(Object(U)).forEach((function(R){Object.defineProperty(D,R,Object.getOwnPropertyDescriptor(U,R))}))}return D}function K(D,R){if(null==D)return{};var U,P,S=function(D,R){if(null==D)return{};var U,P,S={},A=Object.keys(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||(S[U]=D[U]);return S}(D,R);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(D);for(P=0;P<A.length;P++)U=A[P],R.indexOf(U)>=0||Object.prototype.propertyIsEnumerable.call(D,U)&&(S[U]=D[U])}return S}var N=P.createContext({}),e=function(D){var R=P.useContext(N),U=R;return D&&(U="function"==typeof D?D(R):B(B({},R),D)),U},G=function(D){var R=e(D.components);return P.createElement(N.Provider,{value:R},D.children)},t="mdxType",E={inlineCode:"code",wrapper:function(D){var R=D.children;return P.createElement(P.Fragment,{},R)}},n=P.forwardRef((function(D,R){var U=D.components,S=D.mdxType,A=D.originalType,N=D.parentName,G=K(D,["components","mdxType","originalType","parentName"]),t=e(U),n=S,r=t["".concat(N,".").concat(n)]||t[n]||E[n]||A;return U?P.createElement(r,B(B({ref:R},G),{},{components:U})):P.createElement(r,B({ref:R},G))}));function r(D,R){var U=arguments,S=R&&R.mdxType;if("string"==typeof D||S){var A=U.length,B=new Array(A);B[0]=n;var K={};for(var N in R)hasOwnProperty.call(R,N)&&(K[N]=R[N]);K.originalType=D,K[t]="string"==typeof D?D:S,B[1]=K;for(var e=2;e<A;e++)B[e]=U[e];return P.createElement.apply(null,B)}return P.createElement.apply(null,U)}n.displayName="MDXCreateElement"},64561:(D,R,U)=>{U.r(R),U.d(R,{assets:()=>N,contentTitle:()=>B,default:()=>E,frontMatter:()=>A,metadata:()=>K,toc:()=>e});var P=U(87462),S=(U(67294),U(3905));const A={title:"load",description:"OpenBB Terminal Function"},B="load",K={unversionedId:"reference/forex/load",id:"reference/forex/load",title:"load",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/forex/load.md",sourceDirName:"reference/forex",slug:"/reference/forex/load",permalink:"/terminal/reference/forex/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/load.md",tags:[],version:"current",frontMatter:{title:"load",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fwd",permalink:"/terminal/reference/forex/fwd"},next:{title:"calendar",permalink:"/terminal/reference/forex/oanda/calendar"}},N={},e=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],G={toc:e},t="wrapper";function E(D){let{components:R,...U}=D;return(0,S.kt)(t,(0,P.Z)({},G,U,{components:R,mdxType:"MDXLayout"}),(0,S.kt)("h1",{id:"load"},"load"),(0,S.kt)("p",null,"Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av"),(0,S.kt)("h3",{id:"usage"},"Usage"),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE] [-e END]\n")),(0,S.kt)("hr",null),(0,S.kt)("h2",{id:"parameters"},"Parameters"),(0,S.kt)("table",null,(0,S.kt)("thead",{parentName:"table"},(0,S.kt)("tr",{parentName:"thead"},(0,S.kt)("th",{parentName:"tr",align:null},"Name"),(0,S.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,S.kt)("th",{parentName:"tr",align:null},"Description"),(0,S.kt)("th",{parentName:"tr",align:null},"Default"),(0,S.kt)("th",{parentName:"tr",align:null},"Optional"),(0,S.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,S.kt)("tbody",{parentName:"table"},(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,S.kt)("td",{parentName:"tr",align:null},"Currency pair to load."),(0,S.kt)("td",{parentName:"tr",align:null},"None"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"USDAWG, EURCAD, PLNCZK, COPGBP, EURMAD, ZARKES, ETBEUR, PGKUSD, ZARMXN, JPYEGP, DKKUSD, INRCNY, AUDBRL, USDPEN, DKKNOK, THBGBP, HUFJPY, EURNGN, GBPBOB, IDRHKD, EURLAK, BGNCAD, EURILS, NZDKRW, YEREUR, ZARRUB, USDSZL, USDHUF, THBZAR, MXNDKK, TRYXAG, CADBRL, SZLCHF, EURQAR, CHFARE, USDBAM, BBDUSD, DKKBGN, EURLYD, SEKPLN, XAUSAR, GBPALL, NZDIDR, KRWXAG, USDQAR, COPBRL, EURSDG, USDBRL, VNDUSD, HKDUSD, CHFRUB, OSOUSD, GBPBHD, BRIUSD, FRNCHF, PHPEUR, COPEUR, COPZAR, OMRGBP, VRNCHF, UGXEUR, JPYTRY, GBPKRW, JPYGBP, USDAUN, ZARPKR, CHFDKK, EURTWD, THBHKD, EURMKD, BGNGBP, GBPSGD, TRYDKK, CHFIDR, USDTRY, GBPARS, FJDUSD, IDREUR, DKKGBP, EURLKR, INRSEK, XAUBRL, BRLCOP, NPREUR, IDRZAR, TZSUSD, PENGBP, CNYNZD, MWKUSD, HKDNZD, SGDIDR, USDCAD, NGNJPY, SEKDKK, MYRCAD, CHFNZD, BRICHF, NZDPKR, USDPHP, CNYUSD, ARSJPY, IDRMYR, USDPYG, THBPKR, SGDGBP, JODEUR, CHFTHB, ZAREUR, GBPSCR, USDBHD, HUFUSD, ZARSZL, GBPBND, GBPXPF, CHFBWP, CHFINR, USDBGN, CHFKRW, AEDEUR, XAGGBP, GBPMKD, IDRCAD, PLNZAR, TMTUSD, EURTHB, GBPVND, EURYER, MWKEUR, CHFVRL, AEDBHD, EURNZD, TWDCNY, SGDUSD, IDRNZD, AUDNOK, CHFMAL, AEDOMR, XPTEUR, GBPGNF, GBPXCD, ILSEUR, CADKRW, BBDBMD, GBPCNY, AUDSGD, GBPTND, PHPGBP, CHFZAR, CZKZAR, XAUHKD, CADJPY, HKDXAG, INRNZD, CNYMYR, JPYNGN, CHFNSO, RWFUSD, GBPPKR, SEKILS, GBPLAK, USDPLN, NZDCAD, USDTND, GBPXAU, INRNOK, TWDIDR, RONZAR, AMDGBP, EURSOS, NBLUSD, JPYRSD, PYGUSD, SGDKRW, EURDOP, DKKZAR, USDMWK, CADAUD, THBSGD, AEDQAR, KRWXAU, USDGNF, USDSLL, DKKAED, INRJPY, USDRWF, ARSZAR, JPYHKD, USDSVC, PLNUSD, BWPUSD, MADGBP, SGDARS, GBPDJF, XAGCNY, MADEUR, CHFAED, JPYKRW, KRWSEK, COPPEN, KRWTHB, NOKINR, USDBDT, KRWEUR, EURPEN, RUBGBP, PLNRUB, GBPKES, AUDPLN, NADEUR, THBJPY, EURZMW, SLLGBP, SARPKR, SGDSEK, CUPEUR, GBPAFN, GBPHUF, ZMWZAR, CADHRK, SARUSD, ILSSEK, SGDHKD, NOKDKK, DKKCAD, GBPMDL, SZLUSD, USDNPR, JPYXAG, AUDCZK, INRMYR, TWDTHB, TZSZAR, COPUSD, GBPUSD, EURARS, EURXAG, GBPBGN, EURTTD, CLPUSD, BMDEUR, MYRCHF, MADAUD, ARSBRL, CNYGBP, USDEGP, CHFKRU, USDKZT, PKRAED, AEDKWD, PKRJPY, PHPZAR, USDPGK, THBCHF, HNLUSD, NZDCZK, AEDINR, CNYEUR, USDTJS, AUNCHF, KZTEUR, UGXGBP, HUFCHF, GBPDKK, KESGBP, ZARPHP, KRWIDR, ARSCHF, TTDUSD, GBPCHF, GBPMXN, GBPJPY, EURPAB, GBPEUR, GBPCNH, EGPZAR, BRLCLP, DKKSGD, TWDGBP, EURCHF, VNDGBP, BIFEUR, MXNCOP, CNYXAG, USDCNY, MGAUSD, COPARS, SZLEUR, SEKNZD, NZDSGD, ZMWUSD, KRWSGD, BRLGBP, NZDEUR, BOBEUR, NZDAUD, ZARBRL, EURUGX, NOKRUB, DKKTRY, NZDAED, PLNNOK, XAUARS, INRXAU, USDHKD, HKDZAR, AUDXAG, ZARPLN, USDEUR, IDRUSD, PABGBP, EURMZN, GBPAUD, DKKJPY, EURUYU, GBPHRK, GBPDZD, GHSGBP, XAUKRW, HUFEUR, EURKHR, ILSNOK, BZDGBP, NSOCHF, KRWHKD, CDFGBP, EURMUR, HKDCNY, BAMUSD, BZDUSD, GBPMAD, DZDUSD, AUDEUR, SARGBP, DKKCZK, PKRDKK, USDOMR, TRYEUR, ILSJPY, USDUAH, GBPSLL, HKDARS, TRYAUD, IDRCHF, SAREUR, TWDDKK, SOSGBP, MXNCAD, BMDCAD, USDKYD, USDVND, USDSHP, USDETB, HTGGBP, NZDCNY, TWDCHF, TWDINR, JPYUSD, DKKSEK, USDLKR, XAUZAR, AEDSEK, NZDUSD, MXNCZK, JPYINR, HKDTWD, MUREUR, SGDCAD, TWDEUR, SGDNOK, SEKGBP, NZDDKK, BRLHKD, EURAUD, PKRZAR, UGXUSD, MXNUSD, EURDZD, SGDINR, JPYTHB, DOPEUR, EURSLL, XPFGBP, SDGUSD, DKKISK, PHPDKK, JPYPHP, FJDEUR, KRWCHF, AUDZAR, GBPMYR, UZSEUR, XAURUB, NZDCHF, AEDILS, GBPRON, USDYER, XAUUSD, KYDGBP, GBPBDT, JPYRUB, ZARNZD, CHFUSD, USDDKK, TZSEUR, XAGZAR, THBXAU, CLPEUR, IQDUSD, GYDUSD, BRLKRW, AEDNOK, CNYAUD, PGKAUD, QARAED, AUDHRK, GBPUYU, MWKZAR, GBPEGP, ILSZAR, EURKZT, EURKWD, CHFHUF, MXNBRL, NOKPLN, KRWINR, TWDSEK, MYRJPY, USDBZD, XPDEUR, SDGEUR, AUDTHB, QARPKR, GBPTWD, JPYAED, CADNZD, CADIDR, CZKPLN, NIOEUR, USDHRK, ARSXAG, BDTJPY, THBAUD, ZARUSD, RUBZAR, NSOUSD, SEKNOK, USDSCR, IQDEUR, USDTMT, CADINR, MDLUSD, USDMVR, USDKWD, BDTUSD, SEKAED, EURNIO, JPYEUR, SGDMYR, LRDGBP, USDSDG, CLPAUD, CHFBRL, EURZAR, EURNOK, PLNHRK, BBDGBP, CLPBRL, USDOSO, EURSCR, EURCZK, USDMGA, BSDGBP, ZARTRY, EURSGD, ZARLKR, INRAED, KRUUSD, GBPSVC, EURSZL, AEDCHF, JMDUSD, CUPUSD, CADBGN, EURUSD, ARSEUR, CNYKRW, ZARNGN, ZARMAD, GNFEUR, XAGARS, LSLUSD, DKKEUR, EGPPKR, BWPZAR, ARECHF, TWDUSD, QAREUR, NOKILS, SEKSGD, JPYVND, EURUZS, EURLRD, MMKEUR, RUBXAU, BHDGBP, KRWTWD, BRLZAR, AEDZAR, USDMAL, CNYTHB, MYRTHB, KRWMYR, KESZAR, EGPJPY, DKKPKR, PLNILS, DKKAUD, USDDJF, THBDKK, MOPGBP, TJSEUR, CADVND, PLNAUD, NOKGBP, GBPBBD, GBPBRL, OMRUSD, GBPRUB, RUBAUD, AUDLTL, AWGUSD, PKRSAR, ZARCOP, GBPZAR, ZARTND, NZDINR, USDJOD, SEKBRL, HKDSEK, INRXAG, JODAED, DKKCOP, KHRGBP, USDISK, USDMAD, INRSGD, RUBXAG, MYRHKD, AEDGBP, DKKPLN, ZARRON, BRLARS, ZARDKK, CADKYD, HNLGBP, SLLEUR, XPFUSD, INRCAD, CHFPLN, USDKMF, INREUR, PENUSD, EURBSD, ZARARS, SGDBRL, ILSPLN, KRWRUB, EURTZS, TNDEUR, USDXAU, XAGKRW, CADBMD, EURCNH, HKDBRL, AUDFJD, CDFEUR, EURKES, JPYSEK, GBPNZD, CADTHB, CZKUSD, LRDEUR, BRLXAG, ZARGBP, SGDJPY, ARSSGD, BRLEUR, SEKCAD, MYRINR, GHSEUR, SLLUSD, NOKNZD, MXNPLN, BOBGBP, USDINR, CHFTWD, USDRON, MDLGBP, USDCOP, AEDJPY, USDTTD, ZARSGD, SEKJPY, KRWZAR, OSOCHF, MXNRUB, PLNNZD, PGKGBP, MXNARS, CHFAUN, KRWGBP, CHFILS, NGNUSD, EURTRY, CZKEUR, JPYNZD, MYRCNY, HRKPLN, RUBKRW, CNHGBP, ZARCYP, ARSXAU, PENARS, CNYJPY, INRIDR, NZDMYR, BRLXAU, CNYZAR, MYRUSD, PKRBHD, UYUUSD, LAKGBP, USDCHF, BRLRSD, XPTUSD, AUDGBP, EUROMR, RONGBP, GBPHNL, CNYXAU, PKRHKD, THBUSD, MOPUSD, NIOUSD, CZKNZD, CNYIDR, JPYHUF, ZARBWP, SEKEUR, CHFFRN, CUPGBP, EURLSL, USDARS, LAKUSD, SGDNZD, MURUSD, MYRAUD, BRLMXN, EURHRK, CHFISK, CLPJPY, CZKDKK, GBPCAD, AUNUSD, INRUSD, IDRAUD, PABUSD, BOBUSD, KYDUSD, ZARINR, USDNSO, GBPKHR, GBPINR, MVRGBP, SGDAUD, XAUTRY, NZDHUF, EURKRW, DKKTWD, VNDCAD, EURCNY, PKRUSD, AUDUSD, MALCHF, AUDCNY, VNDEUR, AFNEUR, FJDGBP, EURCLP, EURNAD, CLPARS, AUDTRY, JPYMYR, GBPIQD, LBPGBP, GBPSOS, PKRSGD, EURINR, GBPMUR, EURBBD, ARSCAD, SEKHKD, TRYZAR, CADXAG, KWDPKR, JPYCNY, EURBGN, EURMGA, GBPPHP, AUDHKD, GBPMOP, JPYTWD, BSDUSD, BGNDKK, NADZAR, XPTGBP, CZKJPY, EGPUSD, RUBUSD, SZLGBP, XAUINR, CHFBRI, XAUGBP, EURHKD, BRLJPY, MXNSGD, CADILS, JPYILS, NZDPLN, USDMYR, TWDNZD, SCRGBP, EURAED, EURCUP, RUBPLN, GBPSEK, GBPMWK, CADTWD, GBPNOK, AUDKRW, SGDAED, AUDCHF, BRLSEK, CZKSEK, BMDKYD, XAUCAD, USDLYD, ZMWEUR, ZARKRW, GBPBTN, AUDRUB, RUBDKK, PLNEUR, AUDXAU, DKKMYR, KHRUSD, EURKYD, KYDEUR, AEDSGD, SEKUSD, MDLEUR, SARAED, CNYBGN, GBPSZL, DKKUAH, NOKCHF, HUFCAD, AUDILS, EURBWP, GBPMMK, XAGTRY, MVRUSD, UGXZAR, USDKRU, EURGNF, GBPGTQ, USDBOB, DKKHUF, LYDUSD, DKKMXN, GBPPEN, KZTUSD, ZARHUF, USDMXN, KRWAUD, USDLRD, USDGHS, SARKWD, EURXPD, HKDPLN, CNYINR, USDCLP, AEDDKK, MXNNZD, UAHEUR, MYRTWD, USDMUR, GBPIDR, XAUJPY, HUFGBP, AUDNZD, RUBEUR, NOKUSD, SGDMXN, USDNIO, ZARCZK, CNHUSD, THBEUR, BWPEUR, USDLBP, SEKCZK, EURIDR, XAUMXN, RSDEUR, CADHUF, THBCNY, AUDDKK, HUFPLN, HKDMXN, ZARAED, LKRUSD, CHFNBL, GBPPYG, TRYCHF, PKRQAR, DKKRUB, CHFSZL, CADMYR, PYGEUR, ZARGHS, CHFAUD, XAGSAR, MYRPKR, NOKSGD, HTGEUR, MOPEUR, YERGBP, NOKAUD, USDCVE, LYDGBP, CADMXN, EURIQD, SGDCNY, DJFGBP, AEDUSD, BNDEUR, USDHNL, HTGUSD, GBPBWP, USDBRI, MMKUSD, PLNDKK, MURGBP, GBPAMD, EURBOB, GBPYER, ZARIDR, CHFJPY, QARZAR, USDNBL, COPMXN, ZARTZS, PLNMXN, AUDPHP, KRWCNY, AUDCNH, GBPTRY, EGPGBP, GBPPGK, CNHAUD, THBINR, CHFVRN, GBPNIO, SVCUSD, JPYBDT, HKDTHB, GBPCOP, GBPCLP, MYREUR, CHFGBP, PKRAUD, GTQEUR, MYRDKK, BZDEUR, JPYAUD, DJFUSD, LYDEUR, JPYXAU, UAHUSD, GBPBZD, EURBND, NGNGBP, THBCAD, KHREUR, EURJOD, JODILS, EUREGP, NZDGBP, ZARTWD, KESUSD, EURRUB, PENBRL, AUDMAD, OMRAED, TRYJPY, KWDAED, USDBBD, ILSCHF, CVEUSD, MALUSD, BGNAUD, EURALL, GYDEUR, USDNGN, HUFAUD, KWDGBP, CHFDOE, ARSGBP, TRYUSD, HKDGBP, JPYCLP, LBPUSD, IDRCNY, AUDINR, SOSEUR, MYRZAR, DKKCHF, CADARS, GBPPAB, MVREUR, GBPXAG, GBPUGX, PHPAUD, NGNZAR, CADZAR, GBPGYD, CHFMXN, ARSMXN, CHFEUR, ALLEUR, AUDCLP, IQDGBP, RSDJPY, SEKAUD, EURJPY, SGDPKR, GNFGBP, TRYNZD, PLNTRY, IDRKRW, BRLUSD, KRWNZD, MZNEUR, DZDEUR, UAHGBP, EURBDT, ZARNOK, SGDEUR, EURSAR, USDXAG, NZDSEK, BRLCHF, MADZAR, TWDSGD, PHPUSD, ZARCNY, AUDHUF, TNDUSD, COPDKK, ZARXAG, ISKUSD, SGDZAR, BHDEUR, TJSUSD, INRZAR, PABEUR, GBPMVR, EURMDL, AUDCAD, GBPLKR, INRTHB, SOSUSD, NZDTWD, PLNGBP, EURRON, LSLGBP, LSLEUR, SGDPLN, USDIQD, EURGYD, VNDJPY, AFNGBP, ARSCOP, KRWJPY, EURBIF, ZARHKD, GBPKYD, EURAMD, HKDCAD, MXNGBP, RWFZAR, EURCOP, XAGHKD, TRYSGD, USDSEK, USDLAK, XAGUSD, USDTWD, XAUTHB, DJFEUR, PENEUR, SGDTHB, MYRSGD, GNFUSD, MYRKRW, MXNXAU, CDFUSD, HKDINR, USDGBP, TTDEUR, USDNOK, NZDHKD, GBPNPR, GBPRSD, EURPLN, RUBCHF, GBPBIF, USDZMW, OMRZAR, NOKJPY, EURISK, GBPAED, PLNCHF, PKREGP, HUFDKK, KRWUSD, BTNEUR, RWFEUR, DOECHF, HRKEUR, RSDBRL, SGDCHF, BIFGBP, ZARCHF, CNYDKK, IDRJPY, EURDJF, GBPLYD, ILSAED, GBPHTG, LKREUR, USDAUD, HUFZAR, SEKZAR, NOKZAR, DOPUSD, ZARILS, GBPHKD, EURPHP, EURUAH, EURRWF, BDTEUR, USDRUB, JPYBRL, GBPJOD, EURXAU, BMDGBP, IDRGBP, XAGINR, TNDZAR, KWDUSD, ARSPEN, MADUSD, NPRUSD, USDALL, JPYCHF, KYDCAD, AEDSAR, CADUSD, EURMMK, DKKHKD, EURBRL, GTQGBP, BHDUSD, USDDZD, MXNXAG, RUBMXN, EURMXN, LAKEUR, INRKRW, AWGGBP, ZARMYR, CLPGBP, INRTWD, USDDOP, USDRSD, GBPSAR, IDRINR, NZDJPY, USDSGD, TNDGBP, NADUSD, MXNCHF, USDMOP, KMFGBP, EURETB, MXNAUD, JPYNOK, EURLBP, EURMWK, MXNEUR, USDBIF, HKDCHF, NZDTRY, PLNHKD, ETBGBP, XPDGBP, ISKEUR, UYUGBP, GBPMGA, MXNJPY, USDXPD, GBPTTD, JODUSD, USDJMD, TWDKRW, XAGMXN, BRLSGD, RUBJPY, GBPCUP, VRLCHF, ILSCAD, CADHKD, NOKSEK, SEKCHF, BHDPKR, BHDAED, KRWBRL, BRLPEN, XAGAUD, MKDUSD, USDFJD, PENCLP, MYRIDR, GBPTHB, CADPEN, GBPCZK, EURHUF, CNYHKD, USDCUP, ZARSEK, EURPYG, RUBSEK, JPYSGD, BBDEUR, JMDEUR, PENCOP, CHFTRY, GBPAWG, USDCZK, RSDUSD, HRKAUD, DOEUSD, AUDBGN, ILSAUD, USDKES, BGNCNY, TWDPKR, THBTWD, JODGBP, GBPXPT, RWFGBP, GBPBSD, CHFARS, EURPKR, CLPPEN, JPYSAR, DZDGBP, GBPETB, HKDDKK, JPYCAD, UAHDKK, BRLCAD, DKKINR, ZARUGX, USDKRW, SARXAU, ZARJPY, GBPUAH, EURNPR, CZKMXN, QARUSD, MKDGBP, JPYZAR, CHFHKD, DKKNZD, GHSZAR, HKDXAU, CADDKK, EURSEK, HRKCAD, ZARZMW, MYRGBP, FJDAUD, MXNZAR, PLNSGD, GYDGBP, USDBSD, THBIDR, CHFSGD, ARSHKD, CHFMYR, MWKGBP, CADXAU, MXNCLP, USDDOE, EURGTQ, AUDIDR, GBPKMF, BNDGBP, BRLAUD, ARSUSD, BWPGBP, GBPXPD, USDUYU, DKKTHB, EURMVR, CNYSGD, ISKGBP, BTNGBP, BSDEUR, ZARRWF, JPYPLN, THBMYR, GBPOMR, XAUCNY, PKRTWD, NOKEUR, CYPZAR, TWDCAD, USDCNH, XAGJPY, EURTND, EURTJS, BAMGBP, CZKGBP, SGDTRY, CHFNOK, THBNZD, NOKAED, AEDCAD, KRWCAD, EURGBP, GBPLBP, CADAED, USDZAR, BWPCHF, AEDPKR, MYRNZD, PKREUR, ZARTHB, USDMKD, LTLAUD, TRYXAU, EURVND, ARSCLP, EURXPT, GBPBMD, MMKGBP, ZARQAR, XAGCAD, MXNPEN, USDGTQ, AUDPKR, LKRGBP, USDIDR, KMFUSD, HKDMYR, ZARAUD, GBPRWF, USDKHR, ETBUSD, AUDPGK, BGNUSD, USDHTG, JPYPKR, SEKRUB, UYUEUR, USDAED, GHSUSD, USDUGX, EURDKK, RSDGBP, ZARMWK, EURBTN, ZAREGP, HRKGBP, ZARXAU, NGNEUR, BNDUSD, KZTGBP, HKDAUD, PKRMYR, ILSJOD, HNLEUR, TTDGBP, AUDARS, NZDZAR, AUDSEK, IDRTHB, GBPILS, MGAGBP, AUDMXN, USDNZD, ALLGBP, MKDEUR, SCRUSD, NZDMXN, USDXPF, EURAFN, PKRKWD, EURHNL, GBPJMD, PENCAD, USDBND, THBKRW, LKRZAR, HUFNZD, EGPEUR, USDCDF, SVCGBP, SEKKRW, SARXAG, KYDBMD, USDJPY, TWDAUD, SHPUSD, PKRNZD, ARSAUD, ALLUSD, GTQUSD, TRYPLN, EURBZD, NBLCHF, USDNAD, ISKCHF, SCREUR, CNHEUR, AEDNZD, CHFRON, XAGBRL, KWDEUR, UZSUSD, USDBWP, NPRGBP, TWDMYR, GBPQAR, GBPKZT, AUDAED, EURMYR, NIOGBP, CADSGD, EURRSD, GBPFJD, SEKINR, TRYGBP, HRKUSD, HKDKRW, USDSOS, HKDIDR, KESEUR, PGKEUR, PENMXN, INRGBP, JPYDKK, CHFSEK, CLPMXN, KWDSAR, JMDGBP, USDPAB, CADGBP, EURHTG, IDRSGD, SZLZAR, PHPJPY, BGNEUR, TWDHKD, XAGEUR, MGAEUR, ILSUSD, EURMOP, XCDGBP, QARGBP, TWDZAR, XAUAUD, GBPGHS, GBPKWD, GBPNGN, AEDJOD, SGDDKK, YERUSD, USDTHB, PLNJPY, JPYARS, AUDJPY, NZDTHB, EURJMD, ILSGBP, SEKTWD, INRHKD, EURBHD, USDGYD, INRCHF, ZAROMR, HKDPKR, EURGHS, GBPPLN, JPYCZK, BMDBBD, XAUEUR, USDSAR, PKRTHB, XAGRUB, GBPLRD, HKDSGD, GBPDOP, LRDUSD, ZARCAD, USDUZS, TWDJPY, CADEUR, OMREUR, USDMMK, IDRTWD, PYGGBP, ISKDKK, CADSEK, XPDUSD, LBPEUR, CZKAUD, SARJPY, DKKPHP, DKKCNY, EURPGK, JPYIDR, BDTGBP, AUDTWD, GBPISK, USDMDL, GBPBAM, INRAUD, PLNSEK, NZDNOK, USDILS, CHFOSO, USDPKR, HKDEUR, HKDJPY, USDXPT, JPYMXN, RONCHF, DOPGBP, PKRGBP, EURFJD, EURCDF, RUBNOK, KRUCHF, SGDTWD, CNYTWD, ZARNAD, GBPCDF, USDTZS, USDLSL, RONEUR, AEDAUD, BIFUSD, INRDKK, RONUSD, AMDEUR, GBPLSL, EURBMD, MXNHKD, AUDMYR, PLNHUF")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"-r  --resolution"),(0,S.kt)("td",{parentName:"tr",align:null},"[Alphavantage only]"," Resolution of data. Can be intraday, daily, weekly or monthly"),(0,S.kt)("td",{parentName:"tr",align:null},"d"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"i, d, w, m")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"interval"),(0,S.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,S.kt)("td",{parentName:"tr",align:null},"Interval of intraday data. Options: ","[YahooFinance]"," 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. ","[AlphaVantage]"," 1min, 5min, 15min, 30min, 60min"),(0,S.kt)("td",{parentName:"tr",align:null},"1day"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"start_date"),(0,S.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,S.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"datetime.now() - timedelta(days=365)"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")),(0,S.kt)("tr",{parentName:"tbody"},(0,S.kt)("td",{parentName:"tr",align:null},"end"),(0,S.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,S.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the forex pair"),(0,S.kt)("td",{parentName:"tr",align:null},"2023-03-01"),(0,S.kt)("td",{parentName:"tr",align:null},"True"),(0,S.kt)("td",{parentName:"tr",align:null},"None")))),(0,S.kt)("hr",null))}E.isMDXComponent=!0}}]);