const _0x4437c4=_0x35bf;(function(_0x537667,_0x1b3e69){const _0x4ce8eb=_0x35bf,_0x13cbe3=_0x537667();while(!![]){try{const _0x478349=parseInt(_0x4ce8eb(0xcd))/0x1*(parseInt(_0x4ce8eb(0x81))/0x2)+-parseInt(_0x4ce8eb(0x93))/0x3+-parseInt(_0x4ce8eb(0xb0))/0x4*(-parseInt(_0x4ce8eb(0xd7))/0x5)+parseInt(_0x4ce8eb(0x74))/0x6*(parseInt(_0x4ce8eb(0xfb))/0x7)+-parseInt(_0x4ce8eb(0xf3))/0x8+-parseInt(_0x4ce8eb(0x9a))/0x9+parseInt(_0x4ce8eb(0x6f))/0xa;if(_0x478349===_0x1b3e69)break;else _0x13cbe3['push'](_0x13cbe3['shift']());}catch(_0x1f7911){_0x13cbe3['push'](_0x13cbe3['shift']());}}}(_0x1365,0x6bf35),(Telegram['WebApp'][_0x4437c4(0xed)](),Telegram['WebApp']['BackButton'][_0x4437c4(0x10d)]=!0x1));let pauseGame=!0x1,minSpeedEnemyCoin=0.4,maxSpeedEnemyCoin=1.6,tempMaxSpeedEnemyCoin=0x0;function setSpeedEnemyCoin(){return Math['random']()*(maxSpeedEnemyCoin-minSpeedEnemyCoin)+minSpeedEnemyCoin;}let boostSlowMotion=!0x1,speed_alfred=0x1f4,boostBar=!0x1;const allEnemyCoin=[];var screenWidth=window['innerWidth']||document[_0x4437c4(0x89)][_0x4437c4(0xb9)]||document['body']['clientWidth'],screenHeight=window[_0x4437c4(0x80)]||document['documentElement'][_0x4437c4(0xac)]||document[_0x4437c4(0xb3)][_0x4437c4(0xac)];let maxScreenWidthToNumber=screenWidth-0x1e,maxScreenHeightToNumber=screenHeight-0x1e,minScreenWidthToNumber=screenWidth+0x1e,minScreenHeightToNumber=screenHeight+0x1e,speed_enemy_coin=0x12c,maxCountEnemyCoin=0x2,priceEnemyCoin=0x1,enemyCoinHeight=Math[_0x4437c4(0x9e)](0.05*screenHeight);var container=document['createElement'](_0x4437c4(0x98));container['id']=_0x4437c4(0x114),container[_0x4437c4(0x108)][_0x4437c4(0x96)]=_0x4437c4(0xff),document[_0x4437c4(0xb3)]['appendChild'](container);let canvas=document['createElement'](_0x4437c4(0x110));canvas['width']=screenWidth,canvas[_0x4437c4(0x8d)]=screenHeight,container[_0x4437c4(0x87)](canvas);let ctx=canvas[_0x4437c4(0x118)]('2d'),imageEnemyCoin=new Image();imageEnemyCoin['src']=_0x4437c4(0x71);let sizeEnemy=0xf,imageEnemyBTC=new Image();imageEnemyBTC[_0x4437c4(0xfc)]=_0x4437c4(0x112);let sizeEnemyBTC=0x1e,alfredLogo=new Image();alfredLogo[_0x4437c4(0xfc)]=_0x4437c4(0x7c);let imageBullet=new Image();imageBullet[_0x4437c4(0xfc)]=_0x4437c4(0xf4);let strike=!0x1,imageTarget=new Image();function checkEnemyTargetCollision(_0xf33bb,_0x293d1b){const _0x3d315d=_0x4437c4;let _0x2ae490=Math[_0x3d315d(0xea)](Math['pow'](_0xf33bb['x']-_0x293d1b['x'],0x2)+Math[_0x3d315d(0xce)](_0xf33bb['y']-_0x293d1b['y'],0x2));return _0x2ae490<_0xf33bb['radius']+_0x293d1b['radius'];}imageTarget[_0x4437c4(0xfc)]=_0x4437c4(0x8b),imageTarget[_0x4437c4(0x108)][_0x4437c4(0x94)]=_0x4437c4(0x10c),imageTarget[_0x4437c4(0x108)][_0x4437c4(0x8d)]=_0x4437c4(0x113),imageTarget[_0x4437c4(0x108)][_0x4437c4(0x101)]=_0x4437c4(0xa6),imageTarget[_0x4437c4(0x108)][_0x4437c4(0xc0)]=_0x4437c4(0xa6);let logoWidth=0x184,logoHeight=0x1e0,logoX=screenWidth/0x2-logoWidth/0x2,logoY=screenHeight/0x2-logoHeight/0x2;function alfLogo(){const _0xe5f00a=_0x4437c4;ctx[_0xe5f00a(0x10f)]=0.04,ctx[_0xe5f00a(0x7f)](alfredLogo,logoX,logoY,logoWidth,logoHeight),ctx[_0xe5f00a(0x10a)](),ctx['stroke']();}function enemyCoinLevel1(_0x18ae20,_0x42bc57,_0xea2b07){const _0x2494ab=_0x4437c4;let _0x487cec=screenWidth/sizeEnemy,_0x34cba0=screenWidth/sizeEnemy;ctx[_0x2494ab(0x10f)]=0x1,ctx[_0x2494ab(0x7f)](imageEnemyCoin,_0x18ae20-_0x487cec/0x2,_0x42bc57-_0x34cba0/0x2,_0x487cec,_0x34cba0),ctx['beginPath'](),ctx[_0x2494ab(0xa8)](_0x18ae20,_0x42bc57,_0xea2b07,_0xea2b07,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx['strokeStyle']='#ff0000',ctx['globalAlpha']=0x0,ctx[_0x2494ab(0xe1)]();}function enemyCoinLevel2(_0x5a78a7,_0x1287cd,_0x20e088){const _0x261e4f=_0x4437c4;let _0xc149d8=screenWidth/sizeEnemy*0x2,_0x3663c6=screenWidth/sizeEnemy*0x2;ctx[_0x261e4f(0x10f)]=0x1,ctx[_0x261e4f(0x7f)](imageEnemyBTC,_0x5a78a7-_0xc149d8/0x2,_0x1287cd-_0x3663c6/0x2,_0xc149d8,_0x3663c6),ctx[_0x261e4f(0x10a)](),ctx[_0x261e4f(0xa8)](_0x5a78a7,_0x1287cd,_0x20e088,_0x20e088,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx['strokeStyle']=_0x261e4f(0xfd),ctx[_0x261e4f(0x10f)]=0x1,ctx[_0x261e4f(0xe1)]();}function target(_0x36cf01,_0x28768d,_0x10d915,_0x1a46c4,_0xde7db1){const _0x395649=_0x4437c4;ctx[_0x395649(0x106)](),ctx[_0x395649(0x115)](_0x36cf01,_0x28768d),ctx[_0x395649(0xa3)](Math[_0x395649(0x73)](_0xde7db1-_0x28768d,_0x1a46c4-_0x36cf01)+Math['PI']/0x2),ctx[_0x395649(0x10f)]=0x1,ctx[_0x395649(0x7f)](imageTarget,-0x23,-0x27,0x46,0x4e),ctx['restore'](),color=_0x395649(0x72),ctx['beginPath'](),ctx['ellipse'](_0x36cf01,_0x28768d,_0x10d915,_0x10d915,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx['globalAlpha']=0x0,ctx[_0x395649(0x86)]=color,ctx[_0x395649(0xe1)]();}function bullet(_0x76dc67,_0x34f08e,_0x4382bd,_0x203539,_0x3edbeb){const _0x164114=_0x4437c4;ctx[_0x164114(0x106)](),ctx['translate'](_0x76dc67,_0x34f08e),ctx[_0x164114(0xa3)](Math[_0x164114(0x73)](_0x203539,_0x4382bd)+Math['PI']/0x2),ctx[_0x164114(0x10f)]=0x1,ctx[_0x164114(0x7f)](imageBullet,-0xa,-0xa,0x14,0x14),ctx[_0x164114(0x78)](),ctx[_0x164114(0x10a)](),ctx[_0x164114(0xa8)](_0x76dc67,_0x34f08e,_0x3edbeb,_0x3edbeb,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx[_0x164114(0x86)]=_0x164114(0x72),ctx[_0x164114(0x10f)]=0x0,ctx[_0x164114(0xe1)]();}let enemyCoinObject={'x':0x14,'y':0x14,'dx':0x1,'dy':0x1,'radius':0x14},targetObject={'x':0xb4,'y':0x12c,'dx':0.8,'dy':0.4,'directionX':0x82,'directionY':0x50,'radius':0x20},bulletObject={'x':0x96,'y':0x96,'dx':0x1,'dy':0x1,'radius':0x5},cryptoCoinObject={'x':0x14,'y':0x14,'dx':0x1,'dy':0x1,'hp':0x1,'radius':0x3c};const listEnemy={},listBullet={},listCryptoCoin={};let fireX=0x0,fireY=0x0,cheklLevel=0x0,countCoinToSecond=0x3;function _0x35bf(_0x1f5480,_0x155cc1){const _0x1365e5=_0x1365();return _0x35bf=function(_0x35bf70,_0x51b35d){_0x35bf70=_0x35bf70-0x6f;let _0x2e3e41=_0x1365e5[_0x35bf70];return _0x2e3e41;},_0x35bf(_0x1f5480,_0x155cc1);}var shotsFired=0x0,maxShots=0x3e8;let countDead=0x0;var containerX=document[_0x4437c4(0xf0)](_0x4437c4(0x98));containerX['style']['position']=_0x4437c4(0xee),containerX[_0x4437c4(0x108)][_0x4437c4(0x101)]='10px',containerX[_0x4437c4(0x108)][_0x4437c4(0xb7)]='10px',containerX[_0x4437c4(0x108)][_0x4437c4(0x111)]=_0x4437c4(0xad),containerX[_0x4437c4(0x108)][_0x4437c4(0xbf)]='flex',containerX[_0x4437c4(0x108)][_0x4437c4(0xb2)]=_0x4437c4(0xa4),containerX['id']=_0x4437c4(0xf1),containerX[_0x4437c4(0xeb)]='glassmorphism';var neuronCount=document[_0x4437c4(0xf0)](_0x4437c4(0xca));neuronCount[_0x4437c4(0xfc)]=_0x4437c4(0xd9),neuronCount[_0x4437c4(0x108)][_0x4437c4(0x94)]=_0x4437c4(0xd8),neuronCount['style'][_0x4437c4(0x8d)]='35px';var textDiv=document[_0x4437c4(0xf0)](_0x4437c4(0x98));textDiv['id']=_0x4437c4(0xb5),textDiv[_0x4437c4(0x108)]['color']='white',textDiv[_0x4437c4(0x95)]=countDead[_0x4437c4(0x105)]('en'),containerX[_0x4437c4(0x87)](textDiv),containerX['appendChild'](neuronCount),document[_0x4437c4(0xb3)][_0x4437c4(0x87)](containerX);let homeRedirectUrl='https://lavrikov1.github.io/test-game/pages/user.html';containerX[_0x4437c4(0xf9)](_0x4437c4(0xcf),function(){const _0x121898=_0x4437c4;Telegram[_0x121898(0x107)][_0x121898(0xaf)]['impactOccurred'](_0x121898(0x9d)),window[_0x121898(0x10b)]['href']=homeRedirectUrl;});let key=_0x4437c4(0xbc);Telegram[_0x4437c4(0x107)][_0x4437c4(0xd3)]['getItem'](key,function(_0x590fa9,_0x10f0d2){const _0x25b44d=_0x4437c4;if(_0x590fa9)return;let _0x5c76c9;countDead=parseInt((_0x5c76c9=_0x10f0d2?JSON[_0x25b44d(0x82)](_0x10f0d2):{'score':0x0})[_0x25b44d(0xbb)]),textDiv['innerText']=countDead['toLocaleString']('en');});let containerAccount=document[_0x4437c4(0xf0)](_0x4437c4(0x98));containerAccount['className']=_0x4437c4(0xd1),containerAccount[_0x4437c4(0x108)][_0x4437c4(0xa2)]=_0x4437c4(0x11b),containerAccount['style']['borderTopRightRadius']='10px';let testIMG=document[_0x4437c4(0xf0)]('img');testIMG[_0x4437c4(0xfc)]=_0x4437c4(0xe2),testIMG[_0x4437c4(0xeb)]=_0x4437c4(0xa9),testIMG[_0x4437c4(0x108)][_0x4437c4(0x84)]='5px',testIMG[_0x4437c4(0x108)][_0x4437c4(0xe3)]=_0x4437c4(0xab),testIMG[_0x4437c4(0xf9)]('click',function(){const _0x3ffd71=_0x4437c4;Telegram['WebApp'][_0x3ffd71(0xaf)][_0x3ffd71(0x85)](_0x3ffd71(0x9d)),window[_0x3ffd71(0x10b)][_0x3ffd71(0x119)]=homeRedirectUrl;});let testIMGPause=document[_0x4437c4(0xf0)](_0x4437c4(0xca));testIMGPause[_0x4437c4(0xfc)]=_0x4437c4(0xe7),testIMGPause[_0x4437c4(0xeb)]=_0x4437c4(0xa9),testIMGPause[_0x4437c4(0x108)][_0x4437c4(0x84)]=_0x4437c4(0xab),testIMGPause[_0x4437c4(0x108)][_0x4437c4(0xe3)]='10px',testIMGPause[_0x4437c4(0xf9)](_0x4437c4(0xcf),function(){const _0xf8a1e0=_0x4437c4;if(Telegram['WebApp']['HapticFeedback'][_0xf8a1e0(0x85)](_0xf8a1e0(0x9d)),pauseGame)testIMGPause[_0xf8a1e0(0xfc)]=_0xf8a1e0(0xe7),pauseGame=!0x1;else{testIMGPause['src']=_0xf8a1e0(0xc5),pauseGame=!0x0;let _0x5515fd=JSON[_0xf8a1e0(0xc4)]({'score':countDead});Telegram[_0xf8a1e0(0x107)][_0xf8a1e0(0xd3)][_0xf8a1e0(0xf7)](_0xf8a1e0(0xbc),_0x5515fd,function(_0x1a4dfd){const _0x83eb10=_0xf8a1e0;_0x1a4dfd?console['error'](_0x83eb10(0x104),_0x1a4dfd):console[_0x83eb10(0xfe)](_0x83eb10(0xd2));});}});let testIMG2=document[_0x4437c4(0xf0)](_0x4437c4(0xca));testIMG2[_0x4437c4(0xfc)]=_0x4437c4(0xc8),testIMG2['className']=_0x4437c4(0xa9),testIMG2['id']='buttonBoost',testIMG2[_0x4437c4(0x108)]['paddingLeft']=_0x4437c4(0x11b),testIMG2[_0x4437c4(0x108)][_0x4437c4(0xe3)]='5px',testIMG2[_0x4437c4(0xf9)](_0x4437c4(0xcf),function(){const _0x13faa4=_0x4437c4;Telegram['WebApp'][_0x13faa4(0xaf)][_0x13faa4(0x85)](_0x13faa4(0x9d));});let dividerForBockAccount=document[_0x4437c4(0xf0)](_0x4437c4(0x98));dividerForBockAccount[_0x4437c4(0xeb)]=_0x4437c4(0xe4);let dividerForBockAccount2=document[_0x4437c4(0xf0)](_0x4437c4(0x98));dividerForBockAccount2[_0x4437c4(0xeb)]='divider',containerAccount[_0x4437c4(0x87)](testIMG),containerAccount[_0x4437c4(0x87)](dividerForBockAccount),containerAccount['appendChild'](testIMGPause),containerAccount[_0x4437c4(0x87)](dividerForBockAccount2),containerAccount['appendChild'](testIMG2),document[_0x4437c4(0xb3)][_0x4437c4(0x87)](containerAccount);let containerAccountBoost=document['createElement'](_0x4437c4(0x98));containerAccountBoost[_0x4437c4(0xeb)]='glassmorphism-container-vertical',containerAccountBoost[_0x4437c4(0x108)]['borderTopRightRadius']='10px',containerAccountBoost['style'][_0x4437c4(0xe5)]='10px';let testIMGV=document[_0x4437c4(0xf0)](_0x4437c4(0xca));testIMGV[_0x4437c4(0xfc)]=_0x4437c4(0xe9),testIMGV['className']='glassmorphism-image-vertical',testIMGV[_0x4437c4(0x108)][_0x4437c4(0x84)]=_0x4437c4(0xe8),testIMGV['style'][_0x4437c4(0xe3)]=_0x4437c4(0xe8),testIMGV[_0x4437c4(0x108)][_0x4437c4(0xdb)]=_0x4437c4(0x11a),testIMGV[_0x4437c4(0x108)][_0x4437c4(0xc3)]=_0x4437c4(0x11a);let testIMG2V=document['createElement'](_0x4437c4(0xca));function _0x1365(){const _0x420166=['1030','rgba(0,\x200,\x200,\x200)','HapticFeedback','365404OkyEeH','isActive','alignItems','body','countCoin','neuronText','55px','right','remove','clientWidth','rectangleHp4','score','playerScore','hasOwnProperty','type','display','left','divider-vertical','buttonBoost','paddingBottom','stringify','img/play.png','15px','radius','img/boost.png','directionY','img','fill','clearRect','1HxVtXt','pow','click','abs','glassmorphism-container','Данные\x20успешно\x20сохранены.','CloudStorage','touchmove','fillStyle','charAt','25MYzvSL','35px','img/neuron.png','random','paddingTop','1001','1010','load','directionX','rgba(255,\x20255,\x20255,\x200.5)','stroke','img/user.png','paddingRight','divider','borderTopLeftRadius','medium','img/pause.png','8px','img/wave.png','sqrt','className','rotatingImage','expand','absolute','fillRect','createElement','neuronContainer','innerWidth','813616GKyAeT','img/bullet.png','addColorStop','color','setItem','touches','addEventListener','sendData','35nilEib','src','#64ED9F','log','#181A20','getElementById','top','img/slow-motion.png','bottom','Ошибка\x20при\x20сохранении\x20данных:\x20','toLocaleString','save','WebApp','style','0px','beginPath','location','10vh','isVisible','length','globalAlpha','canvas','zIndex','img/btc.svg','auto','image-container','translate','floor','createLinearGradient','getContext','href','3px','5px','5904050Bwhjwd','min','img/test-coin.svg','#ff0000','atan2','610278HPMprY','touchstart','42px','requestAnimationFrame','restore','show-container','position','speedEnemy','img/alfred.png','classList','changedTouches','drawImage','innerHeight','735146COUxoM','parse','sin','paddingLeft','impactOccurred','strokeStyle','appendChild','distance','documentElement','cos','img/logo_for_site.svg','.glassmorphism-container-vertical','height','rectangleHp','/\x201000','touchend','borderTopRightRadius','rectangleHp2','1515000UBgidd','width','innerText','backgroundColor','isArray','div','#E0FFFF','7869879OlQZDZ','object','rgba(0,\x200,\x200,\x200.9)','heavy','round','rectangleHp3','floatingText','rgba(0,\x200,\x200,\x200.1)','padding','rotate','center','animationend','50%','getBoundingClientRect','ellipse','glassmorphism-image','white','10px','clientHeight'];_0x1365=function(){return _0x420166;};return _0x1365();}testIMG2V[_0x4437c4(0xfc)]=_0x4437c4(0x102),testIMG2V[_0x4437c4(0xeb)]='glassmorphism-image-vertical',testIMG2V[_0x4437c4(0x108)][_0x4437c4(0x84)]=_0x4437c4(0xe8),testIMG2V[_0x4437c4(0x108)][_0x4437c4(0xe3)]=_0x4437c4(0xe8),testIMG2V['style'][_0x4437c4(0xdb)]=_0x4437c4(0x11a),testIMG2V[_0x4437c4(0x108)][_0x4437c4(0xc3)]=_0x4437c4(0x11a);let dividerForBockAccountV=document[_0x4437c4(0xf0)](_0x4437c4(0x98));dividerForBockAccountV[_0x4437c4(0xeb)]=_0x4437c4(0xc1),containerAccountBoost['appendChild'](testIMGV),containerAccountBoost[_0x4437c4(0x87)](dividerForBockAccountV),containerAccountBoost['appendChild'](testIMG2V),document[_0x4437c4(0xb3)][_0x4437c4(0x87)](containerAccountBoost);const containerVerticalBoost=document['querySelector'](_0x4437c4(0x8c));function toggleBoostContainer(){const _0x2219d2=_0x4437c4;if(!0x0==boostBar){for(let _0x58c320 in(maxSpeedEnemyCoin=tempMaxSpeedEnemyCoin,listEnemy))listEnemy[_0x2219d2(0xbd)](_0x58c320)&&(listEnemy[_0x58c320][_0x2219d2(0x7b)]=setSpeedEnemyCoin());containerVerticalBoost[_0x2219d2(0x7d)][_0x2219d2(0xb8)]('show-container'),containerAccount[_0x2219d2(0x108)][_0x2219d2(0x91)]='10px',boostBar=!0x1;return;}for(let _0x39be5b in(boostBar=!0x0,listEnemy))listEnemy[_0x2219d2(0xbd)](_0x39be5b)&&(listEnemy[_0x39be5b]['speedEnemy']=0.2);tempMaxSpeedEnemyCoin=maxSpeedEnemyCoin,maxSpeedEnemyCoin=0.2,containerVerticalBoost[_0x2219d2(0x7d)]['add']('show-container'),setTimeout(()=>{const _0x4c3d1e=_0x2219d2;containerAccount[_0x4c3d1e(0x108)]['borderTopRightRadius']=_0x4c3d1e(0x109);},0xc8),setTimeout(()=>{const _0x8f1a4e=_0x2219d2;if(!0x0==boostBar){for(let _0x530073 in(maxSpeedEnemyCoin=tempMaxSpeedEnemyCoin,listEnemy))listEnemy[_0x8f1a4e(0xbd)](_0x530073)&&(listEnemy[_0x530073][_0x8f1a4e(0x7b)]=setSpeedEnemyCoin());containerVerticalBoost[_0x8f1a4e(0x7d)][_0x8f1a4e(0xb8)](_0x8f1a4e(0x79)),containerAccount[_0x8f1a4e(0x108)][_0x8f1a4e(0x91)]=_0x8f1a4e(0xab),boostBar=!0x1;}},0xfa0);}const showBoostsBtn=document[_0x4437c4(0x100)](_0x4437c4(0xc2));showBoostsBtn['addEventListener']('click',toggleBoostContainer);var rectHp2=document['createElement'](_0x4437c4(0x98));rectHp2['id']=_0x4437c4(0x92),rectHp2[_0x4437c4(0xeb)]=_0x4437c4(0x92),container[_0x4437c4(0x87)](rectHp2);var rectHp=document[_0x4437c4(0xf0)](_0x4437c4(0x98));rectHp['id']='rectangleHp',rectHp['className']=_0x4437c4(0x8e),rectHp2['appendChild'](rectHp);var textDivCountCoin=document[_0x4437c4(0xf0)]('div');textDivCountCoin['id']=_0x4437c4(0xb4),textDivCountCoin['style'][_0x4437c4(0x7a)]='absolute',textDivCountCoin[_0x4437c4(0x108)][_0x4437c4(0x103)]='35px',textDivCountCoin[_0x4437c4(0x108)]['left']='55px',textDivCountCoin['style']['color']='white',textDivCountCoin['style']['zIndex']=_0x4437c4(0xdc),textDivCountCoin[_0x4437c4(0xeb)]=_0x4437c4(0x9f),textDivCountCoin[_0x4437c4(0x95)]=_0x4437c4(0x8f),container[_0x4437c4(0x87)](textDivCountCoin);let coinsLeft=0x3e8;var textDivCountCoin2=document[_0x4437c4(0xf0)]('div');function onShotFired(){updateRectangleWidth(++shotsFired,maxShots);}textDivCountCoin2['id']='countCoin2',textDivCountCoin2[_0x4437c4(0x108)][_0x4437c4(0x7a)]='absolute',textDivCountCoin2[_0x4437c4(0x108)][_0x4437c4(0x103)]='50px',textDivCountCoin2[_0x4437c4(0x108)][_0x4437c4(0xc0)]=_0x4437c4(0xb6),textDivCountCoin2[_0x4437c4(0x108)][_0x4437c4(0xf6)]=_0x4437c4(0xaa),textDivCountCoin2['style']['zIndex']=_0x4437c4(0xdc),textDivCountCoin2[_0x4437c4(0xeb)]=_0x4437c4(0xba),textDivCountCoin2[_0x4437c4(0x95)]=coinsLeft,container['appendChild'](textDivCountCoin2),setInterval(function(){const _0x341ff1=_0x4437c4;shotsFired>=0x0&&updateRectangleWidth(--shotsFired,maxShots),coinsLeft<maxShots&&(textDivCountCoin2[_0x341ff1(0x95)]=coinsLeft+=0x1),console[_0x341ff1(0xfe)](shotsFired);},0x3e8);var imgCoin=document[_0x4437c4(0xf0)](_0x4437c4(0xca));function createFloatingText(_0x4098ea,_0x284e66,_0x49c521,_0x2ea3d8=_0x4437c4(0x99)){const _0x2b7915=_0x4437c4;var _0x5bcc40=document[_0x2b7915(0xf0)](_0x2b7915(0x98));_0x5bcc40['textContent']=_0x4098ea,_0x5bcc40[_0x2b7915(0xeb)]=_0x2b7915(0xa0),_0x5bcc40['style'][_0x2b7915(0xf6)]=_0x2ea3d8,document[_0x2b7915(0xb3)][_0x2b7915(0x87)](_0x5bcc40);var _0x543b4a=_0x5bcc40[_0x2b7915(0xa7)]();_0x284e66=Math['min'](_0x284e66,window[_0x2b7915(0xf2)]-_0x543b4a[_0x2b7915(0x94)]),_0x49c521=Math[_0x2b7915(0x70)](_0x49c521,window[_0x2b7915(0x80)]-_0x543b4a['height']),_0x5bcc40[_0x2b7915(0x108)][_0x2b7915(0xc0)]=_0x284e66+'px',_0x5bcc40[_0x2b7915(0x108)]['top']=_0x49c521+'px',_0x5bcc40[_0x2b7915(0xf9)](_0x2b7915(0xa5),function(){const _0x4900ee=_0x2b7915;_0x5bcc40[_0x4900ee(0xb8)]();});}function sendScoreToBot(_0x2801f7){const _0x29ea14=_0x4437c4;let _0x1da0e7=JSON[_0x29ea14(0xc4)]({'score':_0x2801f7});Telegram[_0x29ea14(0x107)][_0x29ea14(0xfa)](_0x1da0e7);}function onScoreUpdate(_0x5bae39){sendScoreToBot(_0x5bae39);}function addSemiTransparentOverlay(){const _0x523cf8=_0x4437c4;var _0x3283a6=canvas[_0x523cf8(0x94)],_0x52f9ef=canvas[_0x523cf8(0x8d)],_0x542cf9=ctx[_0x523cf8(0x117)](0x0,0x0,0x0,_0x52f9ef);_0x542cf9[_0x523cf8(0xf5)](0x0,_0x523cf8(0x9c)),_0x542cf9[_0x523cf8(0xf5)](0.45,_0x523cf8(0xae)),_0x542cf9[_0x523cf8(0xf5)](0.55,_0x523cf8(0xa1)),_0x542cf9[_0x523cf8(0xf5)](0x1,_0x523cf8(0x9c)),ctx[_0x523cf8(0xd5)]=_0x542cf9,ctx[_0x523cf8(0xef)](0x0,0x0,_0x3283a6,_0x52f9ef);}imgCoin['src']=_0x4437c4(0x71),imgCoin[_0x4437c4(0x108)][_0x4437c4(0x7a)]=_0x4437c4(0xee),imgCoin['id']=_0x4437c4(0xec),imgCoin[_0x4437c4(0x108)][_0x4437c4(0x94)]=_0x4437c4(0xd8),imgCoin[_0x4437c4(0x108)][_0x4437c4(0x8d)]=_0x4437c4(0xd8),imgCoin[_0x4437c4(0x108)]['bottom']=_0x4437c4(0x76),imgCoin[_0x4437c4(0x108)]['zIndex']=_0x4437c4(0xdd),imgCoin[_0x4437c4(0x108)][_0x4437c4(0xc0)]=_0x4437c4(0xc6),document['body'][_0x4437c4(0x87)](imgCoin);let growingCircle={'x':0x0,'y':0x0,'radius':0x0,'growthRate':0x0,'isActive':!0x1};function startGrowingCircle(_0x1be02a,_0x32a5b6,_0x4a1d58){const _0x3104a0=_0x4437c4;growingCircle['x']=_0x1be02a,growingCircle['y']=_0x32a5b6,growingCircle[_0x3104a0(0xc7)]=0x1,growingCircle['growthRate']=_0x4a1d58,growingCircle[_0x3104a0(0xb1)]=!0x0;}function drawGrowingCircle(){const _0x17ffe1=_0x4437c4;if(growingCircle[_0x17ffe1(0xb1)]){for(let _0x4817c2 in(ctx[_0x17ffe1(0x10a)](),ctx['arc'](growingCircle['x'],growingCircle['y'],growingCircle[_0x17ffe1(0xc7)],0x0,0x2*Math['PI']),ctx['fillStyle']=_0x17ffe1(0xe0),ctx[_0x17ffe1(0xcb)](),growingCircle[_0x17ffe1(0xc7)]+=growingCircle['growthRate'],(growingCircle['radius']+growingCircle['x']>1.3*screenWidth||growingCircle['x']-growingCircle[_0x17ffe1(0xc7)]<-screenWidth/1.3||growingCircle[_0x17ffe1(0xc7)]+growingCircle['y']>1.3*screenHeight||growingCircle['y']-growingCircle[_0x17ffe1(0xc7)]<-screenHeight/1.3)&&(growingCircle[_0x17ffe1(0xb1)]=!0x1),listEnemy))if(listEnemy['hasOwnProperty'](_0x4817c2)){let _0xdd7a8e=listEnemy[_0x4817c2];checkEnemyTargetCollision(growingCircle,_0xdd7a8e)&&listEnemy['hasOwnProperty'](_0xdd7a8e['id'])&&(Telegram[_0x17ffe1(0x107)][_0x17ffe1(0xaf)][_0x17ffe1(0x85)](_0x17ffe1(0x9d)),createFloatingText('+1',_0xdd7a8e['x'],_0xdd7a8e['y']),delete listEnemy[_0xdd7a8e['id']],countDead+=0x1,textDiv[_0x17ffe1(0x95)]=countDead[_0x17ffe1(0x105)]('en'));}}}function render(){const _0x3cc132=_0x4437c4;if(!pauseGame){ctx[_0x3cc132(0xcc)](0x0,0x0,canvas['width'],canvas[_0x3cc132(0x8d)]),alfLogo(),drawGrowingCircle();let _0x14edab={'x':0x0,'y':0x0,'distance':0x2710};for(let _0x463b6f in listEnemy)if(listEnemy[_0x3cc132(0xbd)](_0x463b6f)){let _0x218fee=listEnemy[_0x463b6f],_0x11b52a=_0x218fee['x'],_0x4faf7d=_0x218fee['y'],_0x2bc7c6=moveObjectTowardsDirection(_0x218fee['x'],_0x218fee['y'],targetObject['x'],targetObject['y'],_0x218fee[_0x3cc132(0x7b)]);_0x218fee['x']=_0x2bc7c6['x'],_0x218fee['y']=_0x2bc7c6['y'],enemyCoinLevel1(_0x218fee['x'],_0x218fee['y'],_0x218fee[_0x3cc132(0xc7)][_0x3cc132(0xc7)]),_0x2bc7c6[_0x3cc132(0x88)]<_0x14edab[_0x3cc132(0x88)]&&(_0x14edab={'x':_0x11b52a,'y':_0x4faf7d,'distance':_0x2bc7c6[_0x3cc132(0x88)]});}for(let _0x5bdbd3 in listCryptoCoin)if(listCryptoCoin[_0x3cc132(0xbd)](_0x5bdbd3)){let _0x2ee107=listCryptoCoin[_0x5bdbd3],_0x4e32dc=_0x2ee107['x'],_0x2bb775=_0x2ee107['y'],_0x50cc04=moveObjectTowardsDirection(_0x2ee107['x'],_0x2ee107['y'],targetObject['x'],targetObject['y'],_0x2ee107['speedEnemy']);_0x2ee107['x']=_0x50cc04['x'],_0x2ee107['y']=_0x50cc04['y'],enemyCoinLevel2(_0x2ee107['x'],_0x2ee107['y'],_0x2ee107[_0x3cc132(0xc7)]['radius']),_0x50cc04[_0x3cc132(0x88)]<_0x14edab[_0x3cc132(0x88)]&&(_0x14edab={'x':_0x4e32dc,'y':_0x2bb775,'distance':_0x50cc04[_0x3cc132(0x88)]});}for(let _0x1babdf in listBullet)if(listBullet[_0x3cc132(0xbd)](_0x1babdf)){let _0x156aaa=listBullet[_0x1babdf];for(let _0x4e60ed in(_0x156aaa['x'],_0x156aaa['y'],_0x156aaa['x']+=0x14*_0x156aaa['dx'],_0x156aaa['y']+=0x14*_0x156aaa['dy'],bullet(_0x156aaa['x'],_0x156aaa['y'],_0x156aaa['dx'],_0x156aaa['dy'],_0x156aaa[_0x3cc132(0xc7)]),listEnemy))if(listEnemy[_0x3cc132(0xbd)](_0x4e60ed)){let _0x27e07f=listEnemy[_0x4e60ed];checkEnemyTargetCollision(_0x156aaa,_0x27e07f)&&listEnemy[_0x3cc132(0xbd)](_0x27e07f['id'])&&(Telegram[_0x3cc132(0x107)]['HapticFeedback'][_0x3cc132(0x85)](_0x3cc132(0xe6)),createFloatingText('+1',_0x27e07f['x'],_0x27e07f['y']),delete listEnemy[_0x27e07f['id']],delete listBullet[_0x156aaa['id']],countDead+=0x1,textDiv[_0x3cc132(0x95)]=countDead[_0x3cc132(0x105)]('en'));}for(let _0x50eb24 in listCryptoCoin)if(listCryptoCoin[_0x3cc132(0xbd)](_0x50eb24)){let _0x534a41=listCryptoCoin[_0x50eb24];checkEnemyTargetCollision(_0x156aaa,_0x534a41)&&listCryptoCoin[_0x3cc132(0xbd)](_0x534a41['id'])&&(Telegram['WebApp']['HapticFeedback'][_0x3cc132(0x85)](_0x3cc132(0xe6)),_0x534a41['hp']>=0x2?(createFloatingText('+1',_0x534a41['x'],_0x534a41['y']),delete listBullet[_0x156aaa['id']],_0x534a41['hp']-=0x1,countDead+=0x1,textDiv[_0x3cc132(0x95)]=countDead[_0x3cc132(0x105)]('en')):(createFloatingText('+30',_0x534a41['x'],_0x534a41['y']),delete listCryptoCoin[_0x534a41['id']],delete listBullet[_0x156aaa['id']],countDead+=0x1e,textDiv[_0x3cc132(0x95)]=countDead[_0x3cc132(0x105)]('en')));}}for(let _0x13b6da in listEnemy)if(listEnemy[_0x3cc132(0xbd)](_0x13b6da)){let _0x2d3d6f=listEnemy[_0x13b6da];checkEnemyTargetCollision(targetObject,_0x2d3d6f)&&listEnemy['hasOwnProperty'](_0x2d3d6f['id'])&&(Telegram[_0x3cc132(0x107)][_0x3cc132(0xaf)][_0x3cc132(0x85)](_0x3cc132(0x9d)),createFloatingText('-5',_0x2d3d6f['x'],_0x2d3d6f['y'],'#FF0000'),delete listEnemy[_0x2d3d6f['id']],countDead-=0x5,textDiv['innerText']=countDead[_0x3cc132(0x105)]('en'),cheklLevel+=0x1);}let _0x2789ba=targetMoveObjectAwayFromDirection(targetObject['x'],targetObject['y'],_0x14edab['x'],_0x14edab['y'],0.8),_0x482a62=_0x2789ba['x'],_0x32719e=_0x2789ba['y'];targetObject['x']=_0x482a62,targetObject['y']=_0x32719e;let _0x8459c=0.2*screenWidth,_0x3a8524=_0x8459c,_0x1e3fdd=screenWidth-_0x8459c,_0x3a4d5f=0.2*screenHeight,_0x4b6f7a=screenHeight-0.3*screenHeight;targetObject['y']+targetObject['radius']>=_0x4b6f7a?(targetObject['y']=_0x4b6f7a-targetObject[_0x3cc132(0xc7)],targetObject['dy']*=-0x1):targetObject['y']-targetObject['radius']<=_0x3a4d5f&&(targetObject['y']=_0x3a4d5f+targetObject[_0x3cc132(0xc7)],targetObject['dy']*=-0x1),targetObject['x']+targetObject[_0x3cc132(0xc7)]>=_0x1e3fdd?(targetObject['x']=_0x1e3fdd-targetObject[_0x3cc132(0xc7)],targetObject['dx']*=-0x1):targetObject['x']-targetObject[_0x3cc132(0xc7)]<=_0x3a8524&&(targetObject['x']=_0x3a8524+targetObject[_0x3cc132(0xc7)],targetObject['dx']*=-0x1),target(targetObject['x'],targetObject['y'],targetObject[_0x3cc132(0xc7)],targetObject[_0x3cc132(0xdf)],targetObject[_0x3cc132(0xc9)]),checkEnemyTargetCollision(enemyCoinObject,targetObject);let _0x36f3ec=moveObjectTowardsDirection(bulletObject['x'],bulletObject['y'],targetObject['x'],targetObject['y'],0.3);bulletObject['x']=_0x36f3ec['x'],bulletObject['y']=_0x36f3ec['y'],!0x0==boostSlowMotion&&(ctx[_0x3cc132(0x10f)]=0x1,addSemiTransparentOverlay());}window['requestAnimationFrame'](render);}function startAnimation(){const _0x404f04=_0x4437c4;window[_0x404f04(0x77)](render);}window[_0x4437c4(0xf9)](_0x4437c4(0xde),startAnimation),setInterval(function(){let _0x403c4d=function _0x169a3c(_0x16ea0b,_0x39b9bb,_0x27145d,_0x49a6ca){const _0x33fe14=_0x35bf;let _0x39316a=Math[_0x33fe14(0x73)](_0x49a6ca-_0x39b9bb,_0x27145d-_0x16ea0b);return{'dx':Math[_0x33fe14(0x8a)](_0x39316a),'dy':Math[_0x33fe14(0x83)](_0x39316a)};}(targetObject['x'],targetObject['y'],fireX,fireY);if(!0x0==strike&&!pauseGame){let _0x1e8700={'id':generateRandomEnemyName(0xf),'x':targetObject['x'],'y':targetObject['y'],'dx':_0x403c4d['dx'],'dy':_0x403c4d['dy'],'radius':0x5};listBullet[_0x1e8700['id']]=_0x1e8700;}},0x64);const element=document[_0x4437c4(0x100)]('image-container');function handleTouch(_0x313793){const _0x25ef50=_0x4437c4;if(_0x313793['preventDefault'](),'touchend'===_0x313793[_0x25ef50(0xbe)]&&0x0===_0x313793[_0x25ef50(0xf8)][_0x25ef50(0x10e)]){strike=!0x1;let _0x3d557c=JSON[_0x25ef50(0xc4)]({'score':countDead});Telegram[_0x25ef50(0x107)]['CloudStorage'][_0x25ef50(0xf7)](_0x25ef50(0xbc),_0x3d557c,function(_0x2124a5){const _0x32516d=_0x25ef50;_0x2124a5?console['error'](_0x32516d(0x104),_0x2124a5):console['log'](_0x32516d(0xd2));});return;}let _0x3c0587=_0x25ef50(0x90)===_0x313793[_0x25ef50(0xbe)]?_0x313793[_0x25ef50(0x7e)][0x0]:_0x313793[_0x25ef50(0xf8)][0x0],_0x32a936=_0x3c0587['clientX'],_0x550d36=_0x3c0587['clientY'];if(fireX=_0x32a936,fireY=_0x550d36,targetObject[_0x25ef50(0xdf)]=_0x32a936,targetObject[_0x25ef50(0xc9)]=_0x550d36,_0x25ef50(0xd4)===_0x313793['type'])strike=!0x0;else{if(!0x0==boostBar&&!0x1==boostSlowMotion){for(let _0x255da9 in(maxSpeedEnemyCoin=tempMaxSpeedEnemyCoin,listEnemy))listEnemy[_0x25ef50(0xbd)](_0x255da9)&&(listEnemy[_0x255da9][_0x25ef50(0x7b)]=setSpeedEnemyCoin());containerVerticalBoost['classList'][_0x25ef50(0xb8)](_0x25ef50(0x79)),containerAccount[_0x25ef50(0x108)]['borderTopRightRadius']=_0x25ef50(0xab),boostBar=!0x1;}else!0x0==boostBar&&(containerVerticalBoost[_0x25ef50(0x7d)][_0x25ef50(0xb8)](_0x25ef50(0x79)),containerAccount[_0x25ef50(0x108)][_0x25ef50(0x91)]=_0x25ef50(0xab),boostBar=!0x1);strike=!0x0;}}function moveObjectTowardsDirection(_0xe8851c,_0x5bb38c,_0x2e06dc,_0x1f767b,_0xec73d9){const _0x180a4c=_0x4437c4;let _0x3218ed=_0x2e06dc-_0xe8851c,_0xf9a63=_0x1f767b-_0x5bb38c,_0x8a693e=Math[_0x180a4c(0x73)](_0xf9a63,_0x3218ed);return{'x':_0xe8851c+Math['cos'](_0x8a693e)*_0xec73d9,'y':_0x5bb38c+Math[_0x180a4c(0x83)](_0x8a693e)*_0xec73d9,'distance':Math['abs'](_0x3218ed)+Math[_0x180a4c(0xd0)](_0xf9a63)};}function targetMoveObjectAwayFromDirection(_0x12b623,_0x2fc56b,_0x277d38,_0x2f26e2,_0x15831d){const _0xbce9aa=_0x4437c4;let _0x2b1195=Math['atan2'](_0x2f26e2-_0x2fc56b,_0x277d38-_0x12b623);return{'x':_0x12b623-Math[_0xbce9aa(0x8a)](_0x2b1195)*_0x15831d,'y':_0x2fc56b-Math['sin'](_0x2b1195)*_0x15831d};}function generateRandomEnemyName(_0x261d6b){const _0x9e7ca5=_0x4437c4;for(var _0x5ad3e5='',_0x5468b0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x18dee3=_0x5468b0[_0x9e7ca5(0x10e)],_0x11bfec=0x0;_0x11bfec<_0x261d6b;_0x11bfec++)_0x5ad3e5+=_0x5468b0[_0x9e7ca5(0xd6)](Math[_0x9e7ca5(0x116)](Math[_0x9e7ca5(0xda)]()*_0x18dee3));return _0x5ad3e5;}function countNestedObjects(_0x3b42cd){const _0x4b98a7=_0x4437c4;let _0x10c273=0x0;for(let _0x551e9e in _0x3b42cd)_0x4b98a7(0x9b)!=typeof _0x3b42cd[_0x551e9e]||Array[_0x4b98a7(0x97)](_0x3b42cd[_0x551e9e])||(_0x10c273++,_0x10c273+=countNestedObjects(_0x3b42cd[_0x551e9e]));return _0x10c273;}function generateRandomEnemyName(_0x9e1784){const _0x381d13=_0x4437c4;for(var _0x5d5495='',_0x300828='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x372f8b=_0x300828[_0x381d13(0x10e)],_0x1135ec=0x0;_0x1135ec<_0x9e1784;_0x1135ec++)_0x5d5495+=_0x300828[_0x381d13(0xd6)](Math[_0x381d13(0x116)](Math[_0x381d13(0xda)]()*_0x372f8b));return _0x5d5495;}function countNestedObjects(_0xded414){const _0x132b90=_0x4437c4;let _0x32563b=0x0;for(let _0x4421cd in _0xded414)_0x132b90(0x9b)!=typeof _0xded414[_0x4421cd]||Array[_0x132b90(0x97)](_0xded414[_0x4421cd])||(_0x32563b++,_0x32563b+=countNestedObjects(_0xded414[_0x4421cd]));return _0x32563b;}function startPositionCryptoCoin(){const _0x3423a7=_0x4437c4;let _0xc739b2=Math[_0x3423a7(0x116)](0x4*Math[_0x3423a7(0xda)]());0x0==_0xc739b2?(x=0x0-screenWidth/sizeEnemy,y=Math[_0x3423a7(0x116)](Math['random']()*(screenHeight-0x0+0x1))+0x0):0x1==_0xc739b2?(x=Math[_0x3423a7(0x116)](Math[_0x3423a7(0xda)]()*(screenWidth-0x0+0x1))+0x0,y=0x0-screenHeight/sizeEnemy):0x3==_0xc739b2?(x=screenWidth+screenWidth/sizeEnemy,y=Math[_0x3423a7(0x116)](Math[_0x3423a7(0xda)]()*(screenHeight-0x0+0x1))+0x0):(x=Math[_0x3423a7(0x116)](Math[_0x3423a7(0xda)]()*(screenWidth-0x0+0x1))+0x0,y=screenHeight+screenHeight/sizeEnemy);let _0x4230c5={'x':x,'y':y};return _0x4230c5;}function getRandomCryptoTime(_0x1c380f,_0x283908){return Math['floor'](Math['random']()*(_0x283908-_0x1c380f+0x1))+_0x1c380f;}element['addEventListener'](_0x4437c4(0x75),handleTouch),element[_0x4437c4(0xf9)](_0x4437c4(0xd4),handleTouch),element[_0x4437c4(0xf9)](_0x4437c4(0x90),handleTouch),setInterval(function(){!pauseGame&&(cheklLevel<=0x3&&(cheklLevel=0x0,maxSpeedEnemyCoin+=0.4),maxSpeedEnemyCoin>=2.4&&maxSpeedEnemyCoin<=0x3&&0x3==maxCountEnemyCoin&&maxCountEnemyCoin<0x6&&(maxCountEnemyCoin+=0x1));},0x3a98),setInterval(function(){!pauseGame&&cheklLevel>=0x4&&(maxSpeedEnemyCoin=1.6,maxCountEnemyCoin=0x3,cheklLevel=0x0);},0xbb8),setInterval(function(){const _0x38a934=_0x4437c4;if(!pauseGame){let _0x9e4983=countNestedObjects(listEnemy);function _0x3c8467(){const _0x2c8004=_0x35bf;let _0x4532e8=Math[_0x2c8004(0x116)](0x4*Math[_0x2c8004(0xda)]());0x0==_0x4532e8?(x=0x0-screenWidth/sizeEnemy,y=Math['floor'](Math[_0x2c8004(0xda)]()*(screenHeight-0x0+0x1))+0x0):0x1==_0x4532e8?(x=Math['floor'](Math[_0x2c8004(0xda)]()*(screenWidth-0x0+0x1))+0x0,y=0x0-screenHeight/sizeEnemy):0x3==_0x4532e8?(x=screenWidth+screenWidth/sizeEnemy,y=Math['floor'](Math[_0x2c8004(0xda)]()*(screenHeight-0x0+0x1))+0x0):(x=Math[_0x2c8004(0x116)](Math[_0x2c8004(0xda)]()*(screenWidth-0x0+0x1))+0x0,y=screenHeight+screenHeight/sizeEnemy);let _0x8cf646={'x':x,'y':y};return _0x8cf646;}for(let _0x563bd4=0x0;_0x563bd4<countCoinToSecond;_0x563bd4++)if(_0x9e4983<0x14&&coinsLeft>0x0){let _0x1fd5df=_0x3c8467(),_0x30cfab={'id':generateRandomEnemyName(0xf),'x':_0x1fd5df['x'],'y':_0x1fd5df['y'],'dx':0x1,'dy':0x1,'speedEnemy':setSpeedEnemyCoin(),'radius':0x14};onShotFired(),textDivCountCoin2[_0x38a934(0x95)]=coinsLeft-=0x1,listEnemy[_0x30cfab['id']]=_0x30cfab;}}},0x3e8),setInterval(function(){!pauseGame&&(cheklLevel<=0x3&&(cheklLevel=0x0,maxSpeedEnemyCoin+=0.4),maxSpeedEnemyCoin>=2.4&&maxSpeedEnemyCoin<=0x3&&0x3==maxCountEnemyCoin&&maxCountEnemyCoin<0x6&&(maxCountEnemyCoin+=0x1));},0x3a98),setInterval(function(){!pauseGame&&cheklLevel>=0x4&&(maxSpeedEnemyCoin=1.6,maxCountEnemyCoin=0x3,cheklLevel=0x0);},0xbb8);const btcTime=getRandomCryptoTime(0x1388,0x3a98);setInterval(function(){if(!pauseGame){let _0x4bd7b4=startPositionCryptoCoin(),_0x47d929={'id':generateRandomEnemyName(0xf),'x':_0x4bd7b4['x'],'y':_0x4bd7b4['y'],'dx':0x1,'dy':0x1,'hp':0xa,'speedEnemy':setSpeedEnemyCoin(),'radius':0x14};onShotFired(),textDivCountCoin2['innerText']=coinsLeft-=0x1,listCryptoCoin[_0x47d929['id']]=_0x47d929;}},btcTime),testIMG2V[_0x4437c4(0xf9)](_0x4437c4(0xcf),function(){const _0x1ce43e=_0x4437c4;for(let _0x3095c9 in(Telegram[_0x1ce43e(0x107)][_0x1ce43e(0xaf)][_0x1ce43e(0x85)](_0x1ce43e(0x9d)),containerVerticalBoost['classList'][_0x1ce43e(0xb8)](_0x1ce43e(0x79)),containerAccount[_0x1ce43e(0x108)][_0x1ce43e(0x91)]='10px',boostBar=!0x1,boostSlowMotion=!0x0,maxSpeedEnemyCoin=0.3,countCoinToSecond=0x19,listEnemy))listEnemy[_0x1ce43e(0xbd)](_0x3095c9)&&(listEnemy[_0x3095c9][_0x1ce43e(0x7b)]=0.3);setTimeout(()=>{countCoinToSecond=0x3;},0x3e8),setTimeout(()=>{maxSpeedEnemyCoin=0x2,boostSlowMotion=!0x1;},0x1388);}),testIMGV[_0x4437c4(0xf9)](_0x4437c4(0xcf),function(){const _0x4a1869=_0x4437c4;Telegram['WebApp'][_0x4a1869(0xaf)]['impactOccurred'](_0x4a1869(0x9d)),containerVerticalBoost[_0x4a1869(0x7d)][_0x4a1869(0xb8)](_0x4a1869(0x79)),containerAccount['style'][_0x4a1869(0x91)]=_0x4a1869(0xab),growingCircle[_0x4a1869(0xb1)]=!0x1;for(let _0xa123d0=0x0;_0xa123d0<0xa;_0xa123d0++)setTimeout(()=>{startGrowingCircle(targetObject['x'],targetObject['y'],0xa);},0x7d0*_0xa123d0);});
