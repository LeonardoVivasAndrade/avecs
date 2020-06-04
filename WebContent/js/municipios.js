function change(departamento, municipio){
    departamento = document.getElementById(departamento);
    municipio = document.getElementById(municipio);
    municipio.value ="";
    municipio.innerHTML = "";
    if(departamento.value == "Antioquia"){
        var optionArray = ["|","Valle de Aburrá|Valle de Aburrá","Barbosa|Barbosa","Girardota|Girardota"];
        } else if(departamento.value =="Atlantico"){
          var optionArray=["|","Barranquilla|Barranquilla","Baranoa|Baranoa", "Campo de la Cruz|Campo de la Cruz"];
        }else if(departamento.value =="Bolivar"){
          var optionArray=["|","Cartagena|Cartagena"];
        }else if(departamento.value =="Boyaca"){
          var optionArray=["|","Tunja|Tunja","Almedia|Almedia","Arquitania|Arquitania"];
        }else if(departamento.value =="Caldas"){
          var optionArray=["|","Manizales|Manizales","Aguadas|Aguadas","Anserma|Anserma"];
        }
    
    console.log(departamento.value);
    
    if(departamento.value==5){
    	var optionArray = ["|","768|Sabanalarga","1|Abriaquí","772|Sabaneta","519|Maceo","1031|Uramita","1034|Urrao","267|Cáceres","781|Salgar","1037|Valdivia","1043|Valparaiso","20|Alejandria","276|Dabeiba","1045|Vegachí","790|San Andrés de Cuerquía","1047|Venecia","281|Don Matías","538|Marinilla","285|Ebéjico","30|Amagá","286|El Bagre","1054|Vigía del Fuerte","31|Amalfi","800|San Carlos","547|Medellín","36|Andes","37|Angelópolis","38|Angostura","40|Anorí","810|San Francisco","44|Anzá","45|Apartadó","816|San Jerónimo","820|San José de Montaña","57|Arboletes","569|Montebello","1081|Yalí","1082|Yarumal","1083|Yolombó","60|Argelia","1084|Yondó (Casabe)","831|San Juan de Urabá","65|Armenia","1091|Zaragoza","836|San Luís","584|Murindó","329|Entrerríos","585|Mutatá","330|Envigado","589|Nariño","81|Barbosa","593|Nechí","594|Necoclí","851|San Pedro","855|San Pedro de Urabá","857|San Rafael","858|San Roque","91|Bello","92|Belmira","348|Fredonia","861|San Vicente","350|Frontino","867|Santa Bárbara","100|Betania","102|Betulia","615|Olaya","872|Santa Fé de Antioquia","110|Bolívar","371|Giraldo","883|Santa Rosa de Osos","116|Briceño","373|Girardota","377|Granada","892|Santo Domingo","894|Santuario","129|Burítica","387|Guadalupe","902|Segovia","135|Caicedo","399|Guarne","144|Caldas","656|Peque","401|Guatapé","659|Peñol","151|Campamento","416|Gómez Plata","928|Sonsón","929|Sopetrán","162|Caracolí","163|Caramanta","165|Carepa","422|Heliconia","168|Carmen de Viboral","425|Hispania","170|Carolina","177|Caucasia","689|Pueblorrico","178|Cañasgordas","437|Itagüí","438|Ituango","694|Puerto Berrío","442|Jardín","444|Jericó","190|Chigorodó","707|Puerto Nare","965|Tarazá","967|Tarso","457|La Ceja","716|Puerto Triunfo","463|La Estrella","217|Cisneros","477|La Pintada","222|Cocorná","991|Titiribí","738|Remedios","996|Toledo","229|Concepción","485|La Unión","231|Concordia","743|Retiro","239|Copacabana","504|Liborina","1017|Turbo","764|Ríonegro","1022|Támesis"];
    }else if(departamento.value==8) {
    	var optionArray=["|"
    	,"513|Luruaco","769|Sabanalarga","1036|Usiacuri","527|Malambo","529|Manatí","78|Baranoa","88|Barranquilla","362|Galapa","876|Santa Lucía","637|Palmar de Varela","893|Santo Tomás","152|Campo de la Cruz","156|Candelaria","668|Piojo","925|Soledad","677|Polonuevo","678|Ponedera","938|Suan","698|Puerto Colombia","449|Juan de Acosta","740|Repelón","1009|Tubará","767|Sabanagrande"];}else if(departamento.value==11) {
    	var optionArray=["|"
    	,"107|Bogotá D.C."];}else if(departamento.value==13) {
    	var optionArray=["|"
    	,"5|Achí","522|Magangué","524|Mahates","273|Córdoba","537|Margarita","28|Altos del Rosario","545|María la Baja","293|El Carmen de Bolívar","805|San Cristobal","808|San Estanislao","1064|Villanueva","809|San Fernando","814|San Jacinto","815|San Jacinto del Cauca","305|El Guamo","565|Mompós","310|El Peñon","570|Montecristo","59|Arenal","828|San Juan de Nepomuceno","575|Morales","64|Arjona","1088|Zambrano","68|Arroyohondo","842|San Martín de Loba","848|San Pablo","87|Barranco de Loba","603|Norosí","871|Santa Catalina","880|Santa Rosa","885|Santa Rosa del Sur","141|Calamar","913|Simití","667|Pinillos","158|Cantagallo","418|Hatillo de Loba","930|Soplaviento","171|Cartagena","959|Talaigua Nuevo","214|Cicuco","221|Clemencia","990|Tiquisio (Puerto Rico)","737|Regidor","1015|Turbaco","1016|Turbaná","762|Río Viejo"];}else if(departamento.value==15) {
    	var optionArray=["|"
    	,"258|Cuitiva","517|Macanal","773|Saboyá","782|Samacá","272|Cómbita","24|Almeida","1049|Ventaquemada","283|Duitama","539|Maripí","1058|Villa de Leiva","807|San Eduardo","297|El Cocuy","556|Miraflores","303|El Espino","48|Aquitania","1074|Viracachá","821|San José de Pare","566|Mongua","567|Monguí","568|Moniquirá","58|Arcabuco","581|Motavita","837|San Luís de Gaceno","1093|Zetaquirá","587|Muzo","843|San Mateo","1099|Úmbita","846|San Miguel de Sema","336|Firavitoba","850|San Pablo de Borbur","340|Floresta","600|Nobsa","94|Belén","606|Nuevo Colón","99|Berbeo","101|Beteitiva","614|Oicatá","360|Gachantivá","105|Boavita","878|Santa María","367|Garagoa","623|Otanche","625|Pachavita","115|Boyacá","884|Santa Rosa de Viterbo","117|Briceño","631|Paipa","887|Santa Sofía","632|Pajarito","888|Santana","121|Buenavista","381|Guacamayas","130|Busbanza","900|Sativanorte","645|Panqueba","901|Sativasur","649|Pauna","905|Siachoque","650|Paya","652|Paz de Río","145|Caldas","658|Pesca","404|Guateque","919|Soatá","408|Guayatá","920|Socha","154|Campohermoso","410|Guicán","922|Socotá","923|Sogamoso","669|Pisva","414|Gámeza","927|Somondoco","932|Sora","933|Soracá","934|Sotaquirá","181|Cerinza","949|Susacón","950|Sutamarchán","439|Izá","695|Puerto Boyacá","952|Sutatenza","443|Jenesano","956|Sáchica","445|Jericó","194|Chinavita","200|Chiquinquirá","456|La Capilla","968|Tasco","202|Chiscas","203|Chita","205|Chitaraque","206|Chivatá","975|Tenza","212|Chíquiza","724|Páez","980|Tibaná","213|Chívor","981|Tibasosa","218|Ciénaga","732|Quipama","988|Tinjacá","989|Tipacoque","735|Ramiriquí","992|Toca","995|Toguí","489|La Uvita","1001|Topagá","492|La Victoria","1005|Tota","240|Coper","497|Labranzagrande","755|Rondón","245|Corrales","1013|Tunja","758|Ráquira","1014|Tunungua","248|Covarachía","1018|Turmequé","1019|Tuta","1020|Tutasá","254|Cubará","255|Cucaita"];}else if(departamento.value==17) {
    	var optionArray=["|"
    	,"776|Salamina","10|Aguadas","784|Samaná","532|Manizales","534|Manzanares","541|Marmato","542|Marquetalia","544|Marulanda","1063|Villamaría","41|Anserma","50|Aranzazu","818|San José","1076|Viterbo","334|Filadelfia","595|Neira","90|Belalcázar","602|Norcasia","634|Palestina","655|Pensilvania","946|Supía","195|Chinchiná","461|La Dorada","723|Pácora","470|La Merced","493|La Victoria","750|Risaralda","761|Río Sucio"];}else if(departamento.value==18) {
    	var optionArray=["|"
    	,"264|Curillo","14|Albania","1044|Valparaiso","555|Milán","300|El Doncello","308|El Paujil","823|San José del Fragua","577|Morelia","338|Florencia","862|San Vicente del Caguán","98|Belén de los Andaquíes","924|Solano","926|Solita","172|Cartagena del Chairá","710|Puerto Rico","472|La Montañita"];}else if(departamento.value==19) {
    	var optionArray=["|"
    	,"516|López (Micay)","23|Almaguer","1057|Villa Rica","553|Mercaderes","558|Miranda","61|Argelia","576|Morales","321|El Tambo","76|Balboa","339|Florencia","859|San Sebastián","111|Bolívar","881|Santa Rosa","627|Padilla","889|Santander de Quilichao","125|Buenos Aires","384|Guachené","648|Patía (El Bordo)","139|Cajibío","397|Guapí","910|Silvia","146|Caldono","660|Piamonte","149|Caloto","663|Piendamó","679|Popayán","935|Sotara (Paispamba)","941|Sucre","432|Inzá","440|Jambaló","953|Suárez","715|Puerto Tejada","720|Puracé (Coconuco)","725|Páez (Belalcazar)","986|Timbiquí","987|Timbío","482|La Sierra","490|La Vega","1003|Toribío","1006|Totoró","242|Corinto","756|Rosas"];}else if(departamento.value==20) {
    	var optionArray=["|"
    	,"8|Aguachica","266|Curumaní","12|Agustín Codazzi","1042|Valledupar","531|Manaure Balcón del Cesar","787|San Alberto","806|San Diego","299|El Copey","307|El Paso","69|Astrea","840|San Martín","89|Becerríl","366|Gamarra","114|Bosconia","629|Pailitas","375|Gonzalez","654|Pelaya","686|Pueblo Bello","192|Chimichagua","960|Tamalameque","201|Chiriguaná","465|La Gloria","466|La Jagua de Ibirico","475|La Paz (Robles)","763|Río de oro"];}else if(departamento.value==23) {
    	var optionArray=["|"
    	,"774|Sahagún","1038|Valencia","789|San Andrés Sotavento","791|San Antero","798|San Bernardo del Viento","801|San Carlos","564|Momil","822|San José de Uré","571|Montelíbano","573|Monteria","582|Moñitos","72|Ayapel","856|San Pelayo","122|Buenavista","155|Canalete","674|Planeta Rica","687|Pueblo Nuevo","180|Cereté","700|Puerto Escondido","704|Puerto Libertador","193|Chimá","452|La Apartada y La Frontera","197|Chinú","722|Purísima","984|Tierralta","220|Ciénaga de Oro","1010|Tuchín","247|Cotorra","507|Lorica","508|Los Córdobas"];}else if(departamento.value==25) {
    	var optionArray=["|"
    	,"256|Cucunubá","1024|Ubalá","1025|Ubaque","1026|Ubaté","1028|Une","7|Agua de Dios","520|Machetá","521|Madrid","270|Cáqueza","17|Albán","533|Manta","1048|Venecia (Ospina Pérez)","793|San Antonio de Tequendama","1050|Vergara","796|San Bernardo","1053|Viani","33|Anapoima","803|San Cayetano","548|Medina","1061|Villagómez","39|Anolaima","298|El Colegio","811|San Francisco","1068|Villapinzón","46|Apulo","1072|Villeta","1073|Viotá","54|Arbeláez","1078|Yacopí","312|El Peñón","318|El Rosal","830|San Juan de Río Seco","579|Mosquera","1094|Zipacón","1095|Zipaquirá","332|Facatativá","1100|Útica","590|Nariño","597|Nemocón","598|Nilo","599|Nimaima","601|Nocaima","346|Fosca","93|Beltrán","354|Funza","355|Fusagasugá","356|Fómeque","357|Fúquene","358|Gachalá","359|Gachancipá","104|Bituima","361|Gachetá","108|Bojacá","365|Gama","626|Pacho","372|Girardot","630|Paime","378|Granada","385|Guachetá","131|Cabrera","899|Sasaima","644|Pandi","134|Cachipay","390|Guaduas","646|Paratebueno","647|Pasca","903|Sesquilé","906|Sibaté","140|Cajicá","909|Silvania","400|Guasca","912|Simijaca","402|Guataquí","403|Guatavita","406|Guayabal de Siquima","918|Soacha","407|Guayabetal","411|Gutiérrez","160|Caparrapí","931|Sopó","167|Carmen de Carupa","940|Subachoque","944|Suesca","945|Supatá","948|Susa","951|Sutatausa","185|Chaguaní","957|Tabio","446|Jerusalén","450|Junín","198|Chipaque","455|La Calera","713|Puerto Salgar","970|Tausa","972|Tena","718|Pulí","974|Tenjo","208|Choachí","209|Chocontá","211|Chía","979|Tibacuy","982|Tibirita","471|La Mesa","727|Quebradanegra","728|Quetame","473|La Palma","476|La Peña","733|Quipile","224|Cogua","993|Tocaima","994|Tocancipá","744|Ricaurte","1002|Topaipí","491|La Vega","246|Cota","502|Lenguazaque"];}else if(departamento.value==27) {
    	var optionArray=["|"
    	,"3|Acandí","1029|Unguía","1030|Unión Panamericana (ÁNIMAS)","271|Cértegui","27|Alto Baudó (Pie de Pato)","292|El Carmen de Atrato","549|Medio Atrato","550|Medio Baudó","551|Medio San Juan (ANDAGOYA)","825|San José del Palmar","71|Atrato (Yuto)","73|Bagadó","74|Bahía Solano (Mútis)","75|Bajo Baudó (Pizarro)","604|Novita","96|Belén de Bajirá","608|Nuquí","873|Santa Genoveva de Docorodó","109|Bojayá (Bellavista)","916|Sipí","159|Cantón de San Pablo","169|Carmen del Darién (CURBARADÓ)","436|Istmina","958|Tadó","451|Juradó","729|Quibdó","233|Condoto","759|Río Iró","760|Río Quito","506|Lloró","765|Ríosucio"];}else if(departamento.value==41) {
    	var optionArray=["|"
    	,"4|Acevedo","6|Agrado","775|Saladoblanco","13|Aipe","786|San Agustín","22|Algeciras","26|Altamira","1071|Villavieja","1080|Yaguará","326|Elías","1098|Íquira","79|Baraya","596|Neiva","609|Nátaga","618|Oporapa","879|Santa María","368|Garzón","369|Gigante","628|Paicol","633|Palermo","635|Palestina","388|Guadalupe","153|Campoalegre","670|Pital","671|Pitalito","426|Hobo","939|Suaza","435|Isnos","453|La Argentina","966|Tarqui","971|Tello","977|Teruel","978|Tesalia","985|Timaná","478|La Plata","225|Colombia","751|Rivera"];}else if(departamento.value==44) {
    	var optionArray=["|"
    	,"1033|Uribia","1035|Urumita","525|Maicao","15|Albania","530|Manaure","278|Dibulla","279|Distracción","1065|Villanueva","306|El Molino","832|San Juan del Cesar","86|Barrancas","344|Fonseca","421|Hatonuevo","467|La Jagua del Pilar","749|Riohacha"];}else if(departamento.value==47) {
    	var optionArray=["|"
    	,"771|Sabanas de San Angel (SAN ANGEL)","777|Salamina","21|Algarrobo","287|El Banco","49|Aracataca","313|El Piñon","316|El Retén","63|Ariguaní (El Difícil)","1090|Zapayán (PUNTA DE PIEDRAS)","1096|Zona Bananera (PRADO - SEVILLA)","860|San Sebastián de Buenavista","605|Nueva Granada","352|Fundación","864|San Zenón","866|Santa Ana","870|Santa Bárbara de Pinto","877|Santa Marta","393|Guamal","653|Pedraza","917|Sitionuevo","665|Pijiño","672|Pivijay","675|Plato","690|Puebloviejo","183|Cerro San Antonio","973|Tenerife","207|Chivolo","219|Ciénaga","739|Remolino","232|Concordia"];}else if(departamento.value==50) {
    	var optionArray=["|"
    	,"2|Acacías","259|Cumaral","1032|Uribe","536|Mapiripan","289|El Calvario","802|San Carlos de Guaroa","294|El Castillo","554|Mesetas","301|El Dorado","1070|Villavicencio","1075|Vista Hermosa","826|San Juan de Arama","833|San Juanito","841|San Martín","84|Barranca de Upía","351|Fuente de Oro","379|Granada","133|Cabuyaro","394|Guamal","176|Castilla la Nueva","699|Puerto Concordia","701|Puerto Gaitán","705|Puerto Lleras","706|Puerto López","711|Puerto Rico","469|La Macarena","741|Restrepo","501|Lejanías","253|Cubarral"];}else if(departamento.value==52) {
    	var optionArray=["|"
    	,"261|Cumbal","262|Cumbitara","523|Magüi (Payán)","783|Samaniego","528|Mallama (Piedrancha)","18|Albán (San José)","274|Córdoba","797|San Bernardo","34|Ancuya","296|El Charco","309|El Peñol","55|Arboleda (Berruecos)","1079|Yacuanquer","829|San Juan de Pasto","319|El Rosario","320|El Tablón de Gómez","322|El Tambo","834|San Lorenzo","580|Mosquera","591|Nariño","80|Barbacoas","849|San Pablo","854|San Pedro de Cartago","347|Francisco Pizarro","95|Belén","353|Funes","865|Sandoná","869|Santa Bárbara (Iscuandé)","616|Olaya Herrera","622|Ospina","126|Buesaco","383|Guachavés","896|Sapuyes","386|Guachucal","391|Guaitarilla","392|Gualmatán","676|Policarpa","936|Sotomayor (Los Andes)","681|Potosí","684|Providencia","430|Iles","431|Imúes","434|Ipiales","692|Puerres","184|Chachaguí","962|Taminango","963|Tangua","459|La Cruz","719|Pupiales","464|La Florida","468|La Llanada","228|Colón (Génova)","484|La Tola","486|La Unión","745|Ricaurte","235|Consaca","236|Contadero","752|Roberto Payán (San José)","500|Leiva","1012|Tumaco","505|Linares","252|Cuaspud (Carlosama)","1023|Túquerres"];}else if(departamento.value==54) {
    	var optionArray=["|"
    	,"512|Lourdes","257|Cucutilla","778|Salazar","268|Cáchira","269|Cácota","275|Cúcuta","284|Durania","799|San Calixto","1056|Villa Caro","290|El Carmen","1059|Villa del Rosario","804|San Cayetano","56|Arboledas","323|El Tarra","324|El Zulia","1097|Ábrego","586|Mutiscua","612|Ocaña","106|Bochalema","119|Bucarasica","376|Gramalote","890|Santiago","642|Pamplona","898|Sardinata","643|Pamplonita","908|Silos","417|Hacarí","423|Herrán","196|Chinácota","714|Puerto Santander","204|Chitagá","462|La Esperanza","976|Teorama","983|Tibú","734|Ragonvalia","479|La Playa","997|Toledo","238|Convención","496|Labateca","510|Los Patios"];}else if(departamento.value==63) {
    	var optionArray=["|"
    	,"780|Salento","572|Montenegro","66|Armenia","335|Filandia","123|Buenavista","143|Calarcá","664|Pijao","415|Génova","216|Circasia","730|Quimbaya","483|La Tebaida","241|Cordobá"];}else if(departamento.value==66) {
    	var optionArray=["|"
    	,"282|Dos Quebradas","543|Marsella","47|Apía","559|Mistrató","77|Balboa","97|Belén de Umbría","882|Santa Rosa de Cabal","895|Santuario","657|Pereira","412|Guática","688|Pueblo Rico","458|La Celia","731|Quinchía","495|La Virginia"];}else if(departamento.value==68) {
    	var optionArray=["|"
    	,"518|Macaravita","9|Aguada","265|Curití","1039|Valle de San José","16|Albania","788|San Andrés","794|San Benito","1052|Vetas","546|Matanza","291|El Carmen","1066|Villanueva","813|San Gíl","304|El Guacamayo","817|San Joaquín","562|Mogotes","51|Aratoca","563|Molagavita","819|San José de Miranda","1077|Vélez","311|El Peñon","314|El Playón","1089|Zapatoca","327|Encino","328|Enciso","588|Málaga","844|San Miguel","82|Barbosa","83|Barichara","85|Barrancabermeja","342|Floridablanca","343|Florián","863|San Vicente del Chucurí","611|Ocamonte","868|Santa Bárbara","613|Oiba","103|Betulia","617|Onzaga","874|Santa Helena del Opón","364|Galán","112|Bolívar","118|Bucaramanga","374|Girón","380|Guaca","636|Palmar","638|Palmas del Socorro","132|Cabrera","389|Guadalupe","396|Guapota","911|Simacota","147|California","405|Guavatá","661|Pie de Cuesta","409|Guepsa","921|Socorro","666|Pinchote","413|Gámbita","161|Capitanejo","419|Hato","164|Carcasí","937|Suaita","942|Sucre","179|Cepita","691|Puente Nacional","947|Suratá","182|Cerrito","188|Charalá","189|Charta","191|Chima","447|Jesús María","448|Jordán","709|Puerto Parra","454|La Belleza","199|Chipatá","717|Puerto Wilches","726|Páramo","215|Cimitarra","474|La Paz","230|Concepción","1000|Tona","234|Confines","746|Rio Negro","237|Contratación","498|Landázuri","243|Coromoro","499|Lebrija","766|Sabana de Torres","511|Los Santos"];}else if(departamento.value==70) {
    	var optionArray=["|"
    	,"526|Majagual","785|Sampués","795|San Benito Abad","827|San Juan de Betulia","317|El Roble","578|Morroa","839|San Marcos","847|San Onofre","852|San Pedro","363|Galeras (Nueva Granada)","624|Ovejas","124|Buenavista","640|Palmito","137|Caimito","398|Guaranda","914|Sincelejo","915|Sincé","943|Sucre","186|Chalán","226|Colosó (Ricaurte)","998|Tolú","487|La Unión","999|Tolú Viejo","244|Corozal","249|Coveñas","509|Los Palmitos"];}else if(departamento.value==73) {
    	var optionArray=["|"
    	,"514|Lérida","515|Líbano","263|Cunday","779|Saldaña","1040|Valle de San Juan","1046|Venadillo","280|Dolores","792|San Antonio","25|Alpujarra","540|Mariquita","29|Alvarado","32|Ambalema","1062|Villahermosa","552|Melgar","43|Anzoátegui","1069|Villarrica","67|Armero (Guayabal)","835|San Luis","70|Ataco","583|Murillo","331|Espinal","333|Falan","592|Natagaima","337|Flandes","349|Fresno","875|Santa Isabel","621|Ortega","641|Palocabildo","138|Cajamarca","395|Guamo","662|Piedras","673|Planadas","166|Carmen de Apicalá","424|Herveo","427|Honda","683|Prado","428|Ibagué","429|Icononzo","175|Casabianca","954|Suárez","187|Chaparral","721|Purificación","223|Coello","747|Rioblanco","754|Roncesvalles","757|Rovira","250|Coyaima"];}else if(departamento.value==76) {
    	var optionArray=["|"
    	,"1027|Ulloa","19|Alcalá","277|Dagua","1051|Versalles","1055|Vijes","288|El Cairo","35|Andalucía","295|El Cerrito","42|Ansermanuevo","302|El Dovio","62|Argelia","1086|Yotoco","1087|Yumbo","1092|Zarzal","325|El Águila","341|Florida","853|San Pedro","610|Obando","113|Bolívar","370|Ginebra","120|Buenaventura","382|Guacarí","127|Buga","639|Palmira","128|Bugalagrande","136|Caicedonia","904|Sevilla","148|Calima (Darién)","150|Calí","157|Candelaria","682|Pradera","173|Cartago","441|Jamundí","460|La Cumbre","742|Restrepo","488|La Unión","748|Riofrío","1004|Toro","494|La Victoria","1008|Trujillo","753|Roldanillo","1011|Tulúa"];}else if(departamento.value==81) {
    	var optionArray=["|"
    	,"52|Arauca","53|Arauquita","345|Fortúl","897|Saravena","961|Tame","712|Puerto Rondón","251|Cravo Norte"];}else if(departamento.value==85) {
    	var optionArray=["|"
    	,"770|Sabanalarga","11|Aguazul","535|Maní","1067|Villanueva","1085|Yopal","574|Monterrey","838|San Luís de Palenque","607|Nunchía","620|Orocué","651|Paz de Ariporo","420|Hato Corozal","680|Pore","955|Sácama","969|Tauramena","210|Chámeza","736|Recetor","481|La Salina","1007|Trinidad","1021|Támara"];}else if(departamento.value==86) {
    	var optionArray=["|"
    	,"1041|Valle del Guamuez","1060|Villagarzón","812|San Francisco","561|Mocoa","845|San Miguel","619|Orito","891|Santiago","907|Sibundoy","693|Puerto Asís","696|Puerto Caicedo","702|Puerto Guzmán","703|Puerto Leguízamo","227|Colón"];}else if(departamento.value==88) {
    	var optionArray=["|"
    	,"685|Providencia"];}else if(departamento.value==91) {
    	var optionArray=["|"
    	,"708|Puerto Nariño","503|Leticia"];}else if(departamento.value==94) {
    	var optionArray=["|"
    	,"433|Inírida"];}else if(departamento.value==95) {
    	var optionArray=["|"
    	,"557|Miraflores","824|San José del Guaviare","315|El Retorno","142|Calamar"];}else if(departamento.value==97) {
    	var optionArray=["|"
    	,"560|Mitú","174|Carurú","964|Taraira"];}else if(departamento.value==99) {
    	var optionArray=["|"
    	,"260|Cumaribo","886|Santa Rosalía","697|Puerto Carreño"];}

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    municipio.options.add(newOption);
  };    
}