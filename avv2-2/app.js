var app = (function(){
	"use strict";
	//bron: https://www.google.nl/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&ved=0ahUKEwj7-LX2xMfLAhWjE5oKHZzIAasQFgg-MAM&url=https%3A%2F%2Fmoz.com%2Ftop500&usg=AFQjCNFHZHcFRyxaLzN7rGOW032n_3MKCQ&bvm=bv.117218890,d.bGs&cad=rja
	var _data=[{Rank:"1",URL:"facebook.com/"},{Rank:"2",URL:"twitter.com/"},{Rank:"3",URL:"google.com/"},{Rank:"4",URL:"youtube.com/"},{Rank:"5",URL:"wordpress.org/"},{Rank:"6",URL:"linkedin.com/"},{Rank:"7",URL:"sedo.com/"},{Rank:"8",URL:"sedoparking.com/"},{Rank:"9",URL:"wikipedia.org/"},{Rank:"10",URL:"blogspot.com/"},{Rank:"11",URL:"adobe.com/"},{Rank:"12",URL:"pinterest.com/"},{Rank:"13",URL:"hugedomains.com/"},{Rank:"14",URL:"wordpress.com/"},{Rank:"15",URL:"instagram.com/"},{Rank:"16",URL:"tumblr.com/"},{Rank:"17",URL:"amazon.com/"},{Rank:"18",URL:"yahoo.com/"},{Rank:"19",URL:"microsoft.com/"},{Rank:"20",URL:"whoisprivacyprotect.com/"},{Rank:"21",URL:"apple.com/"},{Rank:"22",URL:"networkadvertising.org/"},{Rank:"23",URL:"flickr.com/"},{Rank:"24",URL:"vimeo.com/"},{Rank:"25",URL:"youtu.be/"},{Rank:"26",URL:"reddit.com/"},{Rank:"27",URL:"bit.ly/"},{Rank:"28",URL:"w3.org/"},{Rank:"29",URL:"society3.com/"},{Rank:"30",URL:"weebly.com/"},{Rank:"31",URL:"goo.gl/"},{Rank:"32",URL:"buydomains.com/"},{Rank:"33",URL:"qq.com/"},{Rank:"34",URL:"nytimes.com/"},{Rank:"35",URL:"addthis.com/"},{Rank:"36",URL:"parallels.com/"},{Rank:"37",URL:"myspace.com/"},{Rank:"38",URL:"godaddy.com/"},{Rank:"39",URL:"statcounter.com/"},{Rank:"40",URL:"blogger.com/"},{Rank:"41",URL:"jimdo.com/"},{Rank:"42",URL:"digg.com/"},{Rank:"43",URL:"bbc.co.uk/"},{Rank:"44",URL:"vk.com/"},{Rank:"45",URL:"feedburner.com/"},{Rank:"46",URL:"stumbleupon.com/"},{Rank:"47",URL:"wix.com/"},{Rank:"48",URL:"google.de/"},{Rank:"49",URL:"bluehost.com/"},{Rank:"50",URL:"cnn.com/"},{Rank:"51",URL:"ovh.net/"},{Rank:"52",URL:"gov.uk/"},{Rank:"53",URL:"secureserver.net/"},{Rank:"54",URL:"imdb.com/"},{Rank:"55",URL:"huffingtonpost.com/"},{Rank:"56",URL:"europa.eu/"},{Rank:"57",URL:"msn.com/"},{Rank:"58",URL:"macromedia.com/"},{Rank:"59",URL:"t.co/"},{Rank:"60",URL:"nih.gov/"},{Rank:"61",URL:"issuu.com/"},{Rank:"62",URL:"e-recht24.de/"},{Rank:"63",URL:"go.com/"},{Rank:"64",URL:"mozilla.org/"},{Rank:"65",URL:"creativecommons.org/"},{Rank:"66",URL:"theguardian.com/"},{Rank:"67",URL:"slideshare.net/"},{Rank:"68",URL:"wsj.com/"},{Rank:"69",URL:"sourceforge.net/"},{Rank:"70",URL:"delicious.com/"},{Rank:"71",URL:"forbes.com/"},{Rank:"72",URL:"yandex.ru/"},{Rank:"73",URL:"miibeian.gov.cn/"},{Rank:"74",URL:"mail.ru/"},{Rank:"75",URL:"free.fr/"},{Rank:"76",URL:"wp.com/"},{Rank:"77",URL:"ameblo.jp/"},{Rank:"78",URL:"ebay.com/"},{Rank:"79",URL:"yahoo.co.jp/"},{Rank:"80",URL:"fc2.com/"},{Rank:"81",URL:"yelp.com/"},{Rank:"82",URL:"about.com/"},{Rank:"83",URL:"google.co.jp/"},{Rank:"84",URL:"livejournal.com/"},{Rank:"85",URL:"joomla.org/"},{Rank:"86",URL:"icio.us/"},{Rank:"87",URL:"domainname.ru/"},{Rank:"88",URL:"washingtonpost.com/"},{Rank:"89",URL:"typepad.com/"},{Rank:"90",URL:"amazon.de/"},{Rank:"91",URL:"cpanel.net/"},{Rank:"92",URL:"aol.com/"},{Rank:"93",URL:"weibo.com/"},{Rank:"94",URL:"namejet.com/"},{Rank:"95",URL:"telegraph.co.uk/"},{Rank:"96",URL:"reuters.com/"},{Rank:"97",URL:"cpanel.com/"},{Rank:"98",URL:"webs.com/"},{Rank:"99",URL:"1und1.de/"},{Rank:"100",URL:"usatoday.com/"},{Rank:"101",URL:"networksolutions.com/"},{Rank:"102",URL:"dailymotion.com/"},{Rank:"103",URL:"amazon.co.uk/"},{Rank:"104",URL:"dailymail.co.uk/"},{Rank:"105",URL:"gnu.org/"},{Rank:"106",URL:"homestead.com/"},{Rank:"107",URL:"amazonaws.com/"},{Rank:"108",URL:"bing.com/"},{Rank:"109",URL:"miitbeian.gov.cn/"},{Rank:"110",URL:"guardian.co.uk/"},{Rank:"111",URL:"time.com/"},{Rank:"112",URL:"constantcontact.com/"},{Rank:"113",URL:"hostnet.nl/"},{Rank:"114",URL:"bbb.org/"},{Rank:"115",URL:"rambler.ru/"},{Rank:"116",URL:"amazon.co.jp/"},{Rank:"117",URL:"addtoany.com/"},{Rank:"118",URL:"bloomberg.com/"},{Rank:"119",URL:"cdc.gov/"},{Rank:"120",URL:"51.la/"},{Rank:"121",URL:"hatena.ne.jp/"},{Rank:"122",URL:"soundcloud.com/"},{Rank:"123",URL:"latimes.com/"},{Rank:"124",URL:"adition.com/"},{Rank:"125",URL:"opera.com/"},{Rank:"126",URL:"npr.org/"},{Rank:"127",URL:"wikimedia.org/"},{Rank:"128",URL:"google.co.uk/"},{Rank:"129",URL:"one.com/"},{Rank:"130",URL:"blogspot.co.uk/"},{Rank:"131",URL:"apache.org/"},{Rank:"132",URL:"photobucket.com/"},{Rank:"133",URL:"geocities.com/"},{Rank:"134",URL:"eepurl.com/"},{Rank:"135",URL:"harvard.edu/"},{Rank:"136",URL:"wired.com/"},{Rank:"137",URL:"etsy.com/"},{Rank:"138",URL:"hibu.com/"},{Rank:"139",URL:"deviantart.com/"},{Rank:"140",URL:"cnet.com/"},{Rank:"141",URL:"archive.org/"},{Rank:"142",URL:"mit.edu/"},{Rank:"143",URL:"imgur.com/"},{Rank:"144",URL:"crazydomains.com/"},{Rank:"145",URL:"homes.ru/"},{Rank:"146",URL:"away.ru/"},{Rank:"147",URL:"eventbrite.com/"},{Rank:"148",URL:"histats.com/"},{Rank:"149",URL:"rakuten.co.jp/"},{Rank:"150",URL:"php.net/"},{Rank:"151",URL:"technorati.com/"},{Rank:"152",URL:"stanford.edu/"},{Rank:"153",URL:"tripadvisor.com/"},{Rank:"154",URL:"scribd.com/"},{Rank:"155",URL:"nasa.gov/"},{Rank:"156",URL:"domainname.de/"},{Rank:"157",URL:"taobao.com/"},{Rank:"158",URL:"mapquest.com/"},{Rank:"159",URL:"github.com/"},{Rank:"160",URL:"bandcamp.com/"},{Rank:"161",URL:"google.it/"},{Rank:"162",URL:"google.fr/"},{Rank:"163",URL:"1and1.fr/"},{Rank:"164",URL:"live.com/"},{Rank:"165",URL:"ok365.com/"},{Rank:"166",URL:"ca.gov/"},{Rank:"167",URL:"businessinsider.com/"},{Rank:"168",URL:"mashable.com/"},{Rank:"169",URL:"feedsportal.com/"},{Rank:"170",URL:"cbsnews.com/"},{Rank:"171",URL:"barnesandnoble.com/"},{Rank:"172",URL:"ted.com/"},{Rank:"173",URL:"acquirethisname.com/"},{Rank:"174",URL:"list-manage.com/"},{Rank:"175",URL:"pbs.org/"},{Rank:"176",URL:"berkeley.edu/"},{Rank:"177",URL:"elegantthemes.com/"},{Rank:"178",URL:"a8.net/"},{Rank:"179",URL:"independent.co.uk/"},{Rank:"180",URL:"vkontakte.ru/"},{Rank:"181",URL:"foxnews.com/"},{Rank:"182",URL:"jdoqocy.com/"},{Rank:"183",URL:"ibm.com/"},{Rank:"184",URL:"nationalgeographic.com/"},{Rank:"185",URL:"bbc.com/"},{Rank:"186",URL:"sakura.ne.jp/"},{Rank:"187",URL:"loopia.se/"},{Rank:"188",URL:"un.org/"},{Rank:"189",URL:"blogspot.com.es/"},{Rank:"190",URL:"techcrunch.com/"},{Rank:"191",URL:"phoca.cz/"},{Rank:"192",URL:"github.io/"},{Rank:"193",URL:"disqus.com/"},{Rank:"194",URL:"who.int/"},{Rank:"195",URL:"visma.se/"},{Rank:"196",URL:"enom.com/"},{Rank:"197",URL:"themeforest.net/"},{Rank:"198",URL:"wiley.com/"},{Rank:"199",URL:"epa.gov/"},{Rank:"200",URL:"nifty.com/"},{Rank:"201",URL:"usda.gov/"},{Rank:"202",URL:"buzzfeed.com/"},{Rank:"203",URL:"clickbank.net/"},{Rank:"204",URL:"noaa.gov/"},{Rank:"205",URL:"blogspot.de/"},{Rank:"206",URL:"theatlantic.com/"},{Rank:"207",URL:"ocn.ne.jp/"},{Rank:"208",URL:"blogspot.ca/"},{Rank:"209",URL:"geocities.jp/"},{Rank:"210",URL:"engadget.com/"},{Rank:"211",URL:"1and1.com/"},{Rank:"212",URL:"webmd.com/"},{Rank:"213",URL:"google.es/"},{Rank:"214",URL:"cornell.edu/"},{Rank:"215",URL:"spiegel.de/"},{Rank:"216",URL:"amzn.to/"},{Rank:"217",URL:"ft.com/"},{Rank:"218",URL:"loc.gov/"},{Rank:"219",URL:"ow.ly/"},{Rank:"220",URL:"wp.me/"},{Rank:"221",URL:"businessweek.com/"},{Rank:"222",URL:"100ye.com/"},{Rank:"223",URL:"163.com/"},{Rank:"224",URL:"whitehouse.gov/"},{Rank:"225",URL:"hp.com/"},{Rank:"226",URL:"blogspot.fr/"},{Rank:"227",URL:"nps.gov/"},{Rank:"228",URL:"nature.com/"},{Rank:"229",URL:"sfgate.com/"},{Rank:"230",URL:"home.pl/"},{Rank:"231",URL:"cbc.ca/"},{Rank:"232",URL:"weather.com/"},{Rank:"233",URL:"bizjournals.com/"},{Rank:"234",URL:"uk2.net/"},{Rank:"235",URL:"wikia.com/"},{Rank:"236",URL:"livedoor.jp/"},{Rank:"237",URL:"sciencedirect.com/"},{Rank:"238",URL:"cbslocal.com/"},{Rank:"239",URL:"economist.com/"},{Rank:"240",URL:"meetup.com/"},{Rank:"241",URL:"fda.gov/"},{Rank:"242",URL:"fb.me/"},{Rank:"243",URL:"hostgator.com/"},{Rank:"244",URL:"oracle.com/"},{Rank:"245",URL:"imageshack.us/"},{Rank:"246",URL:"ustream.tv/"},{Rank:"247",URL:"usnews.com/"},{Rank:"248",URL:"irs.gov/"},{Rank:"249",URL:"gizmodo.com/"},{Rank:"250",URL:"nydailynews.com/"},{Rank:"251",URL:"slate.com/"},{Rank:"252",URL:"nbcnews.com/"},{Rank:"253",URL:"cargocollective.com/"},{Rank:"254",URL:"quantcast.com/"},{Rank:"255",URL:"linksynergy.com/"},{Rank:"256",URL:"springer.com/"},{Rank:"257",URL:"naver.com/"},{Rank:"258",URL:"t-online.de/"},{Rank:"259",URL:"goo.ne.jp/"},{Rank:"260",URL:"sohu.com/"},{Rank:"261",URL:"ifeng.com/"},{Rank:"262",URL:"chicagotribune.com/"},{Rank:"263",URL:"skype.com/"},{Rank:"264",URL:"google.ca/"},{Rank:"265",URL:"squarespace.com/"},{Rank:"266",URL:"mysql.com/"},{Rank:"267",URL:"prnewswire.com/"},{Rank:"268",URL:"about.me/"},{Rank:"269",URL:"mozilla.com/"},{Rank:"270",URL:"newyorker.com/"},{Rank:"271",URL:"umich.edu/"},{Rank:"272",URL:"safedog.cn/"},{Rank:"273",URL:"dreamhost.com/"},{Rank:"274",URL:"bigcartel.com/"},{Rank:"275",URL:"abc.net.au/"},{Rank:"276",URL:"wunderground.com/"},{Rank:"277",URL:"state.gov/"},{Rank:"278",URL:"dedecms.com/"},{Rank:"279",URL:"alexa.com/"},{Rank:"280",URL:"house.gov/"},{Rank:"281",URL:"marriott.com/"},{Rank:"282",URL:"phpbb.com/"},{Rank:"283",URL:"rs6.net/"},{Rank:"284",URL:"ed.gov/"},{Rank:"285",URL:"paypal.com/"},{Rank:"286",URL:"booking.com/"},{Rank:"287",URL:"youronlinechoices.com/"},{Rank:"288",URL:"jiathis.com/"},{Rank:"289",URL:"marketwatch.com/"},{Rank:"290",URL:"zdnet.com/"},{Rank:"291",URL:"yellowbook.com/"},{Rank:"292",URL:"paginegialle.it/"},{Rank:"293",URL:"studiopress.com/"},{Rank:"294",URL:"netcraft.com/"},{Rank:"295",URL:"xing.com/"},{Rank:"296",URL:"columbia.edu/"},{Rank:"297",URL:"shinystat.com/"},{Rank:"298",URL:"dropbox.com/"},{Rank:"299",URL:"washington.edu/"},{Rank:"300",URL:"detik.com/"},{Rank:"301",URL:"senate.gov/"},{Rank:"302",URL:"youku.com/"},{Rank:"303",URL:"icann.org/"},{Rank:"304",URL:"unesco.org/"},{Rank:"305",URL:"xinhuanet.com/"},{Rank:"306",URL:"alibaba.com/"},{Rank:"307",URL:"cnbc.com/"},{Rank:"308",URL:"hilton.com/"},{Rank:"309",URL:"shopify.com/"},{Rank:"310",URL:"register.it/"},{Rank:"311",URL:"debian.org/"},{Rank:"312",URL:"samsung.com/"},{Rank:"313",URL:"mlb.com/"},{Rank:"314",URL:"people.com.cn/"},{Rank:"315",URL:"last.fm/"},{Rank:"316",URL:"odnoklassniki.ru/"},{Rank:"317",URL:"myshopify.com/"},{Rank:"318",URL:"sciencedaily.com/"},{Rank:"319",URL:"exblog.jp/"},{Rank:"320",URL:"indiatimes.com/"},{Rank:"321",URL:"xiti.com/"},{Rank:"322",URL:"nic.tel/"},{Rank:"323",URL:"sogou.com/"},{Rank:"324",URL:"nazwa.pl/"},{Rank:"325",URL:"enable-javascript.com/"},{Rank:"326",URL:"list-manage1.com/"},{Rank:"327",URL:"prweb.com/"},{Rank:"328",URL:"umn.edu/"},{Rank:"329",URL:"mac.com/"},{Rank:"330",URL:"ftc.gov/"},{Rank:"331",URL:"istockphoto.com/"},{Rank:"332",URL:"ovh.com/"},{Rank:"333",URL:"behance.net/"},{Rank:"334",URL:"businesswire.com/"},{Rank:"335",URL:"theverge.com/"},{Rank:"336",URL:"fastcompany.com/"},{Rank:"337",URL:"houzz.com/"},{Rank:"338",URL:"nhs.uk/"},{Rank:"339",URL:"1688.com/"},{Rank:"340",URL:"surveymonkey.com/"},{Rank:"341",URL:"netscape.com/"},{Rank:"342",URL:"wordpress-fr.net/"},{Rank:"343",URL:"cloudfront.net/"},{Rank:"344",URL:"ructg.com/"},{Rank:"345",URL:"telnic.org/"},{Rank:"346",URL:"google.nl/"},{Rank:"347",URL:"ewebdevelopment.com/"},{Rank:"348",URL:"amazon.fr/"},{Rank:"349",URL:"census.gov/"},{Rank:"350",URL:"scientificamerican.com/"},{Rank:"351",URL:"dell.com/"},{Rank:"352",URL:"umblr.com/"},{Rank:"353",URL:"doi.org/"},{Rank:"354",URL:"prestashop.com/"},{Rank:"355",URL:"intel.com/"},{Rank:"356",URL:"att.com/"},{Rank:"357",URL:"spotify.com/"},{Rank:"358",URL:"lemonde.fr/"},{Rank:"359",URL:"globo.com/"},{Rank:"360",URL:"web.de/"},{Rank:"361",URL:"cyberchimps.com/"},{Rank:"362",URL:"example.com/"},{Rank:"363",URL:"windowsphone.com/"},{Rank:"364",URL:"drupal.org/"},{Rank:"365",URL:"cafepress.com/"},{Rank:"366",URL:"usa.gov/"},{Rank:"367",URL:"cisco.com/"},{Rank:"368",URL:"gesetze-im-internet.de/"},{Rank:"369",URL:"worldbank.org/"},{Rank:"370",URL:"allaboutcookies.org/"},{Rank:"371",URL:"fb.com/"},{Rank:"372",URL:"com.com/"},{Rank:"373",URL:"fotolia.com/"},{Rank:"374",URL:"liveinternet.ru/"},{Rank:"375",URL:"stackoverflow.com/"},{Rank:"376",URL:"tkqlhce.com/"},{Rank:"377",URL:"opensource.org/"},{Rank:"378",URL:"inc.com/"},{Rank:"379",URL:"sun.com/"},{Rank:"380",URL:"target.com/"},{Rank:"381",URL:"jugem.jp/"},{Rank:"382",URL:"redcross.org/"},{Rank:"383",URL:"cmu.edu/"},{Rank:"384",URL:"aliyun.com/"},{Rank:"385",URL:"hhs.gov/"},{Rank:"386",URL:"shinobi.jp/"},{Rank:"387",URL:"entrepreneur.com/"},{Rank:"388",URL:"dandomain.dk/"},{Rank:"389",URL:"aboutcookies.org/"},{Rank:"390",URL:"dot.gov/"},{Rank:"391",URL:"doubleclick.net/"},{Rank:"392",URL:"bund.de/"},{Rank:"393",URL:"yumi.com/"},{Rank:"394",URL:"dribbble.com/"},{Rank:"395",URL:"woothemes.com/"},{Rank:"396",URL:"aboutads.info/"},{Rank:"397",URL:"artisteer.com/"},{Rank:"398",URL:"accuweather.com/"},{Rank:"399",URL:"heise.de/"},{Rank:"400",URL:"admin.ch/"},{Rank:"401",URL:"oecd.org/"},{Rank:"402",URL:"hotlog.ru/"},{Rank:"403",URL:"desdev.cn/"},{Rank:"404",URL:"sitemeter.com/"},{Rank:"405",URL:"japanpost.jp/"},{Rank:"406",URL:"tucows.com/"},{Rank:"407",URL:"google.pl/"},{Rank:"408",URL:"shop-pro.jp/"},{Rank:"409",URL:"discuz.net/"},{Rank:"410",URL:"tripadvisor.co.uk/"},{Rank:"411",URL:"comsenz.com/"},{Rank:"412",URL:"aruba.it/"},{Rank:"413",URL:"line.me/"},{Rank:"414",URL:"hexun.com/"},{Rank:"415",URL:"chronoengine.com/"},{Rank:"416",URL:"adweek.com/"},{Rank:"417",URL:"forpsi.com/"},{Rank:"418",URL:"ieee.org/"},{Rank:"419",URL:"blackberry.com/"},{Rank:"420",URL:"gpo.gov/"},{Rank:"421",URL:"symantec.com/"},{Rank:"422",URL:"hubspot.com/"},{Rank:"423",URL:"venturebeat.com/"},{Rank:"424",URL:"msu.edu/"},{Rank:"425",URL:"oreilly.com/"},{Rank:"426",URL:"disclaimer.de/"},{Rank:"427",URL:"bola.net/"},{Rank:"428",URL:"jalbum.net/"},{Rank:"429",URL:"mailchimp.com/"},{Rank:"430",URL:"20minutos.es/"},{Rank:"431",URL:"export.gov/"},{Rank:"432",URL:"g.co/"},{Rank:"433",URL:"bahn.de/"},{Rank:"434",URL:"wufoo.com/"},{Rank:"435",URL:"webmasterplan.com/"},{Rank:"436",URL:"zanox.com/"},{Rank:"437",URL:"warnerbros.com/"},{Rank:"438",URL:"ietf.org/"},{Rank:"439",URL:"dmoz.org/"},{Rank:"440",URL:"nielsen.com/"},{Rank:"441",URL:"areasnap.com/"},{Rank:"442",URL:"afternic.com/"},{Rank:"443",URL:"energy.gov/"},{Rank:"444",URL:"w3schools.com/"},{Rank:"445",URL:"teamviewer.com/"},{Rank:"446",URL:"sec.gov/"},{Rank:"447",URL:"toplist.cz/"},{Rank:"448",URL:"google.com.br/"},{Rank:"449",URL:"mapy.cz/"},{Rank:"450",URL:"cntv.cn/"},{Rank:"451",URL:"java.com/"},{Rank:"452",URL:"mixi.jp/"},{Rank:"453",URL:"uspto.gov/"},{Rank:"454",URL:"msdn.com/"},{Rank:"455",URL:"undeveloped.com/"},{Rank:"456",URL:"active24.cz/"},{Rank:"457",URL:"openstreetmap.org/"},{Rank:"458",URL:"tuttocitta.it/"},{Rank:"459",URL:"android.com/"},{Rank:"460",URL:"i2i.jp/"},{Rank:"461",URL:"viadeo.com/"},{Rank:"462",URL:"mhlw.go.jp/"},{Rank:"463",URL:"arsys.es/"},{Rank:"464",URL:"web.com/"},{Rank:"465",URL:"prezi.com/"},{Rank:"466",URL:"zenfolio.com/"},{Rank:"467",URL:"tmall.com/"},{Rank:"468",URL:"nginx.org/"},{Rank:"469",URL:"opencart.com/"},{Rank:"470",URL:"wn.com/"},{Rank:"471",URL:"hbr.org/"},{Rank:"472",URL:"olark.com/"},{Rank:"473",URL:"computerworld.com/"},{Rank:"474",URL:"legifrance.gouv.fr/"},{Rank:"475",URL:"etracker.de/"},{Rank:"476",URL:"nist.gov/"},{Rank:"477",URL:"indeed.com/"},{Rank:"478",URL:"lerelaisinternet.com/"},{Rank:"479",URL:"starwoodhotels.com/"},{Rank:"480",URL:"jquery.com/"},{Rank:"481",URL:"google.ru/"},{Rank:"482",URL:"libsyn.com/"},{Rank:"483",URL:"iso.org/"},{Rank:"484",URL:"justice.gov/"},{Rank:"485",URL:"wowslider.com/"},{Rank:"486",URL:"mlit.go.jp/"},{Rank:"487",URL:"bloglines.com/"},{Rank:"488",URL:"j.mp/"},{Rank:"489",URL:"xbox.com/"},{Rank:"490",URL:"adage.com/"},{Rank:"491",URL:"ticketmaster.com/"},{Rank:"492",URL:"ok.ru/"},{Rank:"493",URL:"moodle.org/"},{Rank:"494",URL:"yudu.com/"},{Rank:"495",URL:"isimtescil.net/"},{Rank:"496",URL:"gartner.com/"},{Rank:"497",URL:"bigcommerce.com/"},{Rank:"498",URL:"fcc.gov/"},{Rank:"499",URL:"python.org/"},{Rank:"500",URL:"gmx.de/"}],
		_rankingList = document.getElementById('list'),
		_favoriteList = document.getElementById('fav-list'),
		_loading = document.getElementById('loading'),
		_buttonFav = document.getElementById('add'),
		_buttonNext = document.getElementById('next'),
		_lsMessage = document.getElementById('message'),
		_downloadLink = document.getElementById('download'),
		_field = document.getElementById('field'),
		_lsExists;

	var _favs = [],
		_passed = [];

	var _moveToArray = function(oldArray, newArray){
		var value = oldArray[0];
		newArray.push(value);
		oldArray.shift();
		saving.setItem();
		var itemToRemove = _rankingList.firstChild;
		_rankingList.removeChild(itemToRemove);
		_rankingList.firstChild.classList.remove('hidden');
		_rankingList.firstChild.classList.add('active');
		saving.download();
		// if(window.Blob===undefined){
		// 	var fieldValue = _prettifyJSON(_favs);
		// 	_field.value = fieldValue;
		// }
	};

	var _addFav = function(){
		_moveToArray(_data, _favs);
		console.log(_favs);
		var num = _favs.length - 1;
		console.log(num);
		_createLi(_favs, num , _favoriteList, true);
	};

	var _createLi = function(array, num, list, favs){
		var li = document.createElement('li');

		if(!favs){
			li.innerHTML =  array[num].Rank + '. www.'+ array[num].URL;
		} else {
			li.innerHTML = array[num].URL;
		}
			
		var a = document.createElement('a');
			a.href = "http://" + array[num].URL;

		if(num === 0 && !favs){
			a.classList.add('active');
		} else if(!favs) {
			a.classList.add('hidden');
		}

		a.appendChild(li);
		list.appendChild(a);

	};

	var _showData = function(){
		for(var i = 0, len = _data.length; i < len; i++) {
			_createLi(_data, i, _rankingList);
		}

		for(var j = 0, leng = _favs.length; j < leng; j++){
			_createLi(_favs, j, _favoriteList, true);
		}
		_loading.parentNode.removeChild(_loading);
	};

	var _prettifyJSON = function(string, blob){
		var counter = 0;
		var str = JSON.stringify(string);
		return str.replace(/\[/g, '')
			.replace(/\]/g, '')
			.replace(/\{/g, '')
			.replace(/\}/g, '')
			.replace(/\,/g, '')
			//thanks to http://stackoverflow.com/a/10585234, lets replace every 4th occurence of a " with a linebreak
			.replace(/\"/g, function (match, i, original) {
			    counter++;
			    return (counter % 4 === 0) ? " " : match;
			})
			//lets do the same for every 2nd space
			.replace(/\ /g, function (match, i, original) {
			    counter++;
			    if(blob){
				    return (counter % 2 === 0) ? "\r\n" : match;	
			    } else {
			    	return (counter % 2 === 0) ? "\n" : match;
				}
			})
			.replace(/\"/g, '');
	};

	var saving = {
		isAvailable : function(){
			if(window.localStorage!==undefined){
				_lsExists = true;
			} else {
				_lsExists = false;
			}
		},
		setItem : function(){
			if(_lsExists){
				var obj = {};
				obj.favs = _favs;
				obj.passed = _passed;
				obj.data = _data;
				localStorage.favList = JSON.stringify(obj);	
			}
		},
		getItem : function(){
			//no need to check _lsExists, cause it will return false if localstorage doesnt exist
			if(localStorage.favList){
				var obj = JSON.parse(localStorage.favList);
				console.log(obj);
				_favs = obj.favs;
				_passed = obj.passed;
				_data = obj.data;
			}
		},
		download : function(){
			//check if the browser supports blob, so the user can download the file
			if(window.Blob!==undefined){
				//
				return function(){
					var file = _prettifyJSON(_favs, true);
					
					var blob = new Blob([file], {
					    type: "text/plain;charset=utf-8"
					});

					var url = URL.createObjectURL(blob);

					_downloadLink.download = "favoritelist.txt";
					_downloadLink.href = url;	
				}();
			} else {
				var value = _prettifyJSON(_favs);
				_field.value = value;
			}

		}
	};

	var exportApp = {
		init : function(){
			saving.isAvailable();
			if(_lsExists){
				saving.getItem();
				_lsMessage.innerHTML = 'Your browser supports localstorage! You can leave this page and comback and your favourites will be intact.';	
			} else {
				window.onbeforeunload = function() {
          			return "Als je weg gaat verdwijnen je favorieten! Weet je zeker dat je ze hebt gekopieeërd of gedownload?"
      			}
			}

			if(window.Blob===undefined){
				_field.classList.remove('hidden');
				_lsMessage.innerHTML += '<br/> Your browser doesnt support blob, instead you can copy your list from here:';
			} else {
				_downloadLink.classList.remove('hidden');
			}
			saving.download();
			_showData();
			_buttonFav.addEventListener('click', _addFav);
			_buttonNext.addEventListener('click', function(){_moveToArray(_data, _passed);});
		}
	};


	return exportApp;
}());

(function(){app.init();}());
