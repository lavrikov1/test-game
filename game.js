const _0x109246=_0x5623;(function(_0x3a6a8d,_0x547504){const _0x234239=_0x5623,_0x453202=_0x3a6a8d();while(!![]){try{const _0x47d7c9=parseInt(_0x234239(0x1b6))/0x1+-parseInt(_0x234239(0x18e))/0x2+parseInt(_0x234239(0x1a7))/0x3*(-parseInt(_0x234239(0x195))/0x4)+-parseInt(_0x234239(0x18d))/0x5*(parseInt(_0x234239(0x18c))/0x6)+-parseInt(_0x234239(0x1a6))/0x7+parseInt(_0x234239(0x1a0))/0x8*(parseInt(_0x234239(0x1e7))/0x9)+parseInt(_0x234239(0x1c8))/0xa*(parseInt(_0x234239(0x1e4))/0xb);if(_0x47d7c9===_0x547504)break;else _0x453202['push'](_0x453202['shift']());}catch(_0x3e97b6){_0x453202['push'](_0x453202['shift']());}}}(_0x1ccf,0x3563b),Telegram[_0x109246(0x1ba)]['expand']());let userMute=!0x1;function playAudio(_0x5e2904){const _0xd30a6c=_0x109246;new Audio(_0x5e2904)[_0xd30a6c(0x1f0)]();}let speed_alfred=0x1f4;const allEnemyCoin=[];function _0x5623(_0x5142dc,_0x5eb7ed){const _0x1ccfa8=_0x1ccf();return _0x5623=function(_0x56237f,_0x2adaf7){_0x56237f=_0x56237f-0x181;let _0x558299=_0x1ccfa8[_0x56237f];return _0x558299;},_0x5623(_0x5142dc,_0x5eb7ed);}var screenWidth=window[_0x109246(0x19c)]||document[_0x109246(0x1f8)][_0x109246(0x19b)]||document['body'][_0x109246(0x19b)],screenHeight=window['innerHeight']||document[_0x109246(0x1f8)]['clientHeight']||document['body'][_0x109246(0x1dc)];let maxScreenWidthToNumber=screenWidth-0x1e,maxScreenHeightToNumber=screenHeight-0x1e,minScreenWidthToNumber=screenWidth+0x1e,minScreenHeightToNumber=screenHeight+0x1e,speed_enemy_coin=0x12c,maxCountEnemyCoin=0x2,priceEnemyCoin=0x1,enemyCoinHeight=Math['round'](0.05*screenHeight);var container=document[_0x109246(0x199)](_0x109246(0x1cb));container['id']=_0x109246(0x1aa),container[_0x109246(0x1a4)][_0x109246(0x1e9)]=_0x109246(0x1f4),document['body']['appendChild'](container);let canvas=document[_0x109246(0x199)](_0x109246(0x1ee));canvas[_0x109246(0x1dd)]=screenWidth,canvas[_0x109246(0x1ae)]=screenHeight,container[_0x109246(0x18f)](canvas);let ctx=canvas['getContext']('2d'),imageEnemyCoin=new Image();imageEnemyCoin[_0x109246(0x1c4)]=_0x109246(0x19f);let sizeEnemy=0xf,alfredLogo=new Image();alfredLogo[_0x109246(0x1c4)]='img/alfred.png';let imageBullet=new Image();imageBullet['src']=_0x109246(0x184);let strike=!0x1,imageTarget=new Image();function checkEnemyTargetCollision(_0x3fed50,_0x4efe94){const _0x5f2608=_0x109246;let _0x3c03c7=Math[_0x5f2608(0x188)](Math[_0x5f2608(0x187)](_0x3fed50['x']-_0x4efe94['x'],0x2)+Math['pow'](_0x3fed50['y']-_0x4efe94['y'],0x2));return _0x3c03c7<_0x3fed50[_0x5f2608(0x1b4)]+_0x4efe94[_0x5f2608(0x1b4)];}imageTarget['src']=_0x109246(0x1ec),imageTarget['style']['width']=_0x109246(0x1d3),imageTarget[_0x109246(0x1a4)][_0x109246(0x1ae)]=_0x109246(0x1a2),imageTarget[_0x109246(0x1a4)]['top']=_0x109246(0x1b3),imageTarget[_0x109246(0x1a4)]['left']='50%';let logoWidth=0x184,logoHeight=0x1e0,logoX=screenWidth/0x2-logoWidth/0x2,logoY=screenHeight/0x2-logoHeight/0x2;function alfLogo(){const _0x272ac5=_0x109246;ctx[_0x272ac5(0x186)]=0.04,ctx[_0x272ac5(0x201)](alfredLogo,logoX,logoY,logoWidth,logoHeight),ctx['beginPath'](),ctx[_0x272ac5(0x1eb)]();}function enemyCoinLevel1(_0x1a08b4,_0x3003cf,_0x23fb3b){const _0x89281b=_0x109246;let _0x464ee3=screenWidth/sizeEnemy,_0xfcd9fc=screenWidth/sizeEnemy;ctx[_0x89281b(0x186)]=0x1,ctx[_0x89281b(0x201)](imageEnemyCoin,_0x1a08b4-_0x464ee3/0x2,_0x3003cf-_0xfcd9fc/0x2,_0x464ee3,_0xfcd9fc),ctx[_0x89281b(0x202)](),ctx[_0x89281b(0x183)](_0x1a08b4,_0x3003cf,_0x23fb3b,_0x23fb3b,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx[_0x89281b(0x1cd)]='#ff0000',ctx[_0x89281b(0x186)]=0x0,ctx[_0x89281b(0x1eb)]();}function target(_0x25021f,_0x39428c,_0x48de6c,_0xdedc45,_0x17d6ce){const _0x429b59=_0x109246;ctx[_0x429b59(0x1ff)](),ctx[_0x429b59(0x1b9)](_0x25021f,_0x39428c),ctx[_0x429b59(0x1cc)](Math[_0x429b59(0x1bb)](_0x17d6ce-_0x39428c,_0xdedc45-_0x25021f)+Math['PI']/0x2),ctx['globalAlpha']=0x1,ctx[_0x429b59(0x201)](imageTarget,-0x23,-0x27,0x46,0x4e),ctx[_0x429b59(0x1b0)](),color=_0x429b59(0x1e8),ctx['beginPath'](),ctx[_0x429b59(0x183)](_0x25021f,_0x39428c,_0x48de6c,_0x48de6c,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx['globalAlpha']=0x0,ctx[_0x429b59(0x1cd)]=color,ctx[_0x429b59(0x1eb)]();}function bullet(_0x368a3b,_0x1ae399,_0x26aa26,_0x509074,_0x3b2d46){const _0x583144=_0x109246;ctx[_0x583144(0x1ff)](),ctx['translate'](_0x368a3b,_0x1ae399),ctx['rotate'](Math[_0x583144(0x1bb)](_0x509074,_0x26aa26)+Math['PI']/0x2),ctx[_0x583144(0x186)]=0x1,ctx[_0x583144(0x201)](imageBullet,-0xa,-0xa,0x14,0x14),ctx['restore'](),ctx['beginPath'](),ctx[_0x583144(0x183)](_0x368a3b,_0x1ae399,_0x3b2d46,_0x3b2d46,Math['PI']/0x4,0x0,0x2*Math['PI']),ctx[_0x583144(0x1cd)]='#ff0000',ctx['globalAlpha']=0x0,ctx[_0x583144(0x1eb)]();}let enemyCoinObject={'x':0x14,'y':0x14,'dx':0x1,'dy':0x1,'radius':0x14},targetObject={'x':0xb4,'y':0x12c,'dx':0.8,'dy':0.4,'directionX':0x82,'directionY':0x50,'radius':0x24},bulletObject={'x':0x96,'y':0x96,'dx':0x1,'dy':0x1,'radius':0x5};function _0x1ccf(){const _0xd80f20=['10px','globalAlpha','pow','sqrt','touchend','absolute','img/user.png','339018WuuNTC','10PYNYaE','828426FJKFtW','appendChild','directionX','#E0FFFF','stringify','isArray','remove','1256XHjADi','sin','glassmorphism-container','position','createElement','alignItems','clientWidth','innerWidth','glassmorphism','50px','img/test-coin.svg','8nGGPtO','https://lavrikov1.github.io/test-game/pages/user.html','auto','HapticFeedback','style','toLocaleString','420791dfJpBy','501osNkDU','changedTouches','length','image-container','click','distance','neuronContainer','height','divider','restore','innerText','1001','50%','radius','hasOwnProperty','195524gFtlRb','touchstart','1030','translate','WebApp','atan2','glassmorphism-image','sendData','abs','rectangleHp4','#FF0000','rectangleHp2','floatingText','countCoin2','src','top','preventDefault','paddingLeft','1892410wMfttz','floor','cos','div','rotate','strokeStyle','charAt','getBoundingClientRect','load','type','location','10vh','getElementById','img/boost.png','display','rectangleHp3','35px','audio/kill-coin.ogg','countCoin','bottom','clientHeight','width','img','animationend','clientX','55px','impactOccurred','white','22gXSqpa','audio/kill-target.ogg','directionY','2560023hoePyo','#ff0000','backgroundColor','object','stroke','img/logo_for_site.png','touches','canvas','padding','play','rectangleHp','random','href','#181A20','15px','left','min','documentElement','img/neuron.png','heavy','className','color','addEventListener','medium','save','paddingRight','drawImage','beginPath','body','5px','zIndex','/\x201000','requestAnimationFrame','ellipse','img/bullet.png'];_0x1ccf=function(){return _0xd80f20;};return _0x1ccf();}const listEnemy={},listBullet={};let fireX=0x0,fireY=0x0,countDead=0xf4240,cheklLevel=0x0,countCoinToSecond=0x3;var shotsFired=0x0,maxShots=0x3e8;function onShotFired(){updateRectangleWidth(++shotsFired,maxShots);}var containerX=document[_0x109246(0x199)]('div');containerX['style'][_0x109246(0x198)]=_0x109246(0x18a),containerX[_0x109246(0x1a4)][_0x109246(0x1c5)]=_0x109246(0x185),containerX[_0x109246(0x1a4)][_0x109246(0x1f6)]=_0x109246(0x185),containerX[_0x109246(0x1a4)][_0x109246(0x205)]=_0x109246(0x1b8),containerX[_0x109246(0x1a4)][_0x109246(0x1d6)]='flex',containerX['style'][_0x109246(0x19a)]='center',containerX['id']=_0x109246(0x1ad),containerX['className']=_0x109246(0x19d);var neuronCount=document[_0x109246(0x199)](_0x109246(0x1de));neuronCount[_0x109246(0x1c4)]=_0x109246(0x1f9),neuronCount[_0x109246(0x1a4)][_0x109246(0x1dd)]=_0x109246(0x1d8),neuronCount[_0x109246(0x1a4)][_0x109246(0x1ae)]='35px',containerX[_0x109246(0x18f)](neuronCount);var textDiv=document['createElement'](_0x109246(0x1cb));textDiv['id']='neuronText',textDiv[_0x109246(0x1a4)][_0x109246(0x1fc)]=_0x109246(0x1e3),textDiv[_0x109246(0x1b1)]=countDead['toLocaleString']('en'),containerX[_0x109246(0x18f)](textDiv),document[_0x109246(0x203)][_0x109246(0x18f)](containerX);let homeRedirectUrl=_0x109246(0x1a1);containerX[_0x109246(0x1fd)](_0x109246(0x1ab),function(){const _0x574f85=_0x109246;Telegram[_0x574f85(0x1ba)][_0x574f85(0x1a3)][_0x574f85(0x1e2)](_0x574f85(0x1fa)),window['location'][_0x574f85(0x1f3)]=homeRedirectUrl;});let containerAccount=document[_0x109246(0x199)](_0x109246(0x1cb));containerAccount[_0x109246(0x1fb)]=_0x109246(0x197),containerAccount[_0x109246(0x1a4)][_0x109246(0x1ef)]=_0x109246(0x204),containerAccount[_0x109246(0x1a4)]['borderTopRightRadius']=_0x109246(0x185);let testIMG=document[_0x109246(0x199)]('img');testIMG[_0x109246(0x1c4)]=_0x109246(0x18b),testIMG[_0x109246(0x1fb)]='glassmorphism-image',testIMG[_0x109246(0x1a4)]['paddingLeft']=_0x109246(0x204),testIMG[_0x109246(0x1a4)]['paddingRight']='10px',testIMG[_0x109246(0x1fd)](_0x109246(0x1ab),function(){const _0xf06538=_0x109246;Telegram[_0xf06538(0x1ba)][_0xf06538(0x1a3)][_0xf06538(0x1e2)](_0xf06538(0x1fa)),window[_0xf06538(0x1d2)][_0xf06538(0x1f3)]=homeRedirectUrl;});let testIMG2=document[_0x109246(0x199)](_0x109246(0x1de));testIMG2[_0x109246(0x1c4)]=_0x109246(0x1d5),testIMG2[_0x109246(0x1fb)]=_0x109246(0x1bc),testIMG2[_0x109246(0x1a4)][_0x109246(0x1c7)]=_0x109246(0x204),testIMG2[_0x109246(0x1a4)][_0x109246(0x200)]=_0x109246(0x204);let dividerForBockAccount=document[_0x109246(0x199)](_0x109246(0x1cb));dividerForBockAccount[_0x109246(0x1fb)]=_0x109246(0x1af),containerAccount['appendChild'](testIMG),containerAccount[_0x109246(0x18f)](dividerForBockAccount),containerAccount[_0x109246(0x18f)](testIMG2),document['body'][_0x109246(0x18f)](containerAccount);var rectHp2=document[_0x109246(0x199)](_0x109246(0x1cb));rectHp2['id']=_0x109246(0x1c1),rectHp2['className']=_0x109246(0x1c1),container['appendChild'](rectHp2);var rectHp=document[_0x109246(0x199)](_0x109246(0x1cb));rectHp['id']='rectangleHp',rectHp['className']=_0x109246(0x1f1),rectHp2[_0x109246(0x18f)](rectHp);var textDivCountCoin=document[_0x109246(0x199)]('div');textDivCountCoin['id']=_0x109246(0x1da),textDivCountCoin[_0x109246(0x1a4)][_0x109246(0x198)]=_0x109246(0x18a),textDivCountCoin[_0x109246(0x1a4)][_0x109246(0x1db)]=_0x109246(0x1d8),textDivCountCoin['style'][_0x109246(0x1f6)]=_0x109246(0x1e1),textDivCountCoin[_0x109246(0x1a4)][_0x109246(0x1fc)]=_0x109246(0x1e3),textDivCountCoin[_0x109246(0x1a4)][_0x109246(0x205)]=_0x109246(0x1b2),textDivCountCoin[_0x109246(0x1fb)]=_0x109246(0x1d7),textDivCountCoin['innerText']=_0x109246(0x181),container[_0x109246(0x18f)](textDivCountCoin);let coinsLeft=0x3e8;var textDivCountCoin2=document[_0x109246(0x199)](_0x109246(0x1cb));textDivCountCoin2['id']=_0x109246(0x1c3),textDivCountCoin2[_0x109246(0x1a4)][_0x109246(0x198)]=_0x109246(0x18a),textDivCountCoin2[_0x109246(0x1a4)][_0x109246(0x1db)]=_0x109246(0x19e),textDivCountCoin2[_0x109246(0x1a4)][_0x109246(0x1f6)]=_0x109246(0x1e1),textDivCountCoin2['style'][_0x109246(0x1fc)]='white',textDivCountCoin2[_0x109246(0x1a4)][_0x109246(0x205)]=_0x109246(0x1b2),textDivCountCoin2[_0x109246(0x1fb)]=_0x109246(0x1bf),textDivCountCoin2[_0x109246(0x1b1)]=coinsLeft,container['appendChild'](textDivCountCoin2);var imgCoin=document['createElement'](_0x109246(0x1de));function createFloatingText(_0x57d112,_0x11eb73,_0x3150f9,_0x5e0c88=_0x109246(0x191)){const _0x3eeeea=_0x109246;var _0x2e12c5=document[_0x3eeeea(0x199)]('div');_0x2e12c5['textContent']=_0x57d112,_0x2e12c5['className']=_0x3eeeea(0x1c2),_0x2e12c5['style']['color']=_0x5e0c88,document[_0x3eeeea(0x203)][_0x3eeeea(0x18f)](_0x2e12c5);var _0x1b3cde=_0x2e12c5[_0x3eeeea(0x1cf)]();_0x11eb73=Math['min'](_0x11eb73,window[_0x3eeeea(0x19c)]-_0x1b3cde[_0x3eeeea(0x1dd)]),_0x3150f9=Math[_0x3eeeea(0x1f7)](_0x3150f9,window['innerHeight']-_0x1b3cde[_0x3eeeea(0x1ae)]),_0x2e12c5[_0x3eeeea(0x1a4)][_0x3eeeea(0x1f6)]=_0x11eb73+'px',_0x2e12c5['style']['top']=_0x3150f9+'px',_0x2e12c5[_0x3eeeea(0x1fd)](_0x3eeeea(0x1df),function(){const _0x43ee0c=_0x3eeeea;_0x2e12c5[_0x43ee0c(0x194)]();});}function sendScoreToBot(_0x1431fe){const _0x495474=_0x109246;let _0x1d3743=JSON[_0x495474(0x192)]({'score':_0x1431fe});Telegram[_0x495474(0x1ba)][_0x495474(0x1bd)](_0x1d3743);}function onScoreUpdate(_0x595b5e){sendScoreToBot(_0x595b5e);}function render(){const _0x6f0afa=_0x109246;ctx['clearRect'](0x0,0x0,canvas[_0x6f0afa(0x1dd)],canvas[_0x6f0afa(0x1ae)]),alfLogo();let _0x3d46c6={'x':0x0,'y':0x0,'distance':0x2710};for(let _0x18f3ce in listEnemy)if(listEnemy[_0x6f0afa(0x1b5)](_0x18f3ce)){let _0x1ee5b5=listEnemy[_0x18f3ce],_0x222c0e=_0x1ee5b5['x'],_0xb9a302=_0x1ee5b5['y'],_0xa0a1b9=moveObjectTowardsDirection(_0x1ee5b5['x'],_0x1ee5b5['y'],targetObject['x'],targetObject['y'],_0x1ee5b5['speedEnemy']);_0x1ee5b5['x']=_0xa0a1b9['x'],_0x1ee5b5['y']=_0xa0a1b9['y'],enemyCoinLevel1(_0x1ee5b5['x'],_0x1ee5b5['y'],_0x1ee5b5[_0x6f0afa(0x1b4)]['radius']),_0xa0a1b9[_0x6f0afa(0x1ac)]<_0x3d46c6[_0x6f0afa(0x1ac)]&&(_0x3d46c6={'x':_0x222c0e,'y':_0xb9a302,'distance':_0xa0a1b9[_0x6f0afa(0x1ac)]});}for(let _0x43ee3e in listBullet)if(listBullet[_0x6f0afa(0x1b5)](_0x43ee3e)){let _0x5a7ff4=listBullet[_0x43ee3e];for(let _0x5c3b28 in(_0x5a7ff4['x'],_0x5a7ff4['y'],_0x5a7ff4['x']+=0x14*_0x5a7ff4['dx'],_0x5a7ff4['y']+=0x14*_0x5a7ff4['dy'],bullet(_0x5a7ff4['x'],_0x5a7ff4['y'],_0x5a7ff4['dx'],_0x5a7ff4['dy'],_0x5a7ff4[_0x6f0afa(0x1b4)]),listEnemy))if(listEnemy['hasOwnProperty'](_0x5c3b28)){let _0x30f8e8=listEnemy[_0x5c3b28];checkEnemyTargetCollision(_0x5a7ff4,_0x30f8e8)&&listEnemy[_0x6f0afa(0x1b5)](_0x30f8e8['id'])&&(Telegram['WebApp'][_0x6f0afa(0x1a3)][_0x6f0afa(0x1e2)](_0x6f0afa(0x1fe)),onShotFired(),textDivCountCoin2[_0x6f0afa(0x1b1)]=coinsLeft-=0x1,createFloatingText('+1',_0x30f8e8['x'],_0x30f8e8['y']),playAudio(_0x6f0afa(0x1d9)),delete listEnemy[_0x30f8e8['id']],delete listBullet[_0x5a7ff4['id']],countDead+=0x1,textDiv[_0x6f0afa(0x1b1)]=countDead['toLocaleString']('en'));}}for(let _0x3690c9 in listEnemy)if(listEnemy[_0x6f0afa(0x1b5)](_0x3690c9)){let _0x59d3dd=listEnemy[_0x3690c9];checkEnemyTargetCollision(targetObject,_0x59d3dd)&&listEnemy[_0x6f0afa(0x1b5)](_0x59d3dd['id'])&&(Telegram['WebApp'][_0x6f0afa(0x1a3)][_0x6f0afa(0x1e2)](_0x6f0afa(0x1fa)),createFloatingText('-5',_0x59d3dd['x'],_0x59d3dd['y'],_0x6f0afa(0x1c0)),playAudio(_0x6f0afa(0x1e5)),onShotFired(),textDivCountCoin2['innerText']=coinsLeft-=0x1,delete listEnemy[_0x59d3dd['id']],countDead-=0x5,textDiv[_0x6f0afa(0x1b1)]=countDead[_0x6f0afa(0x1a5)]('en'),cheklLevel+=0x1);}let _0x11be0f=targetMoveObjectAwayFromDirection(targetObject['x'],targetObject['y'],_0x3d46c6['x'],_0x3d46c6['y'],0.8),_0xb7c78=_0x11be0f['x'],_0x4c5d4f=_0x11be0f['y'];targetObject['x']=_0xb7c78,targetObject['y']=_0x4c5d4f;let _0x35ee44=0.2*screenWidth,_0x5a11e0=_0x35ee44,_0x1173a3=screenWidth-_0x35ee44,_0x54de4a=0.2*screenHeight,_0x4537f=screenHeight-0.3*screenHeight;targetObject['y']+targetObject[_0x6f0afa(0x1b4)]>=_0x4537f?(targetObject['y']=_0x4537f-targetObject[_0x6f0afa(0x1b4)],targetObject['dy']*=-0x1):targetObject['y']-targetObject[_0x6f0afa(0x1b4)]<=_0x54de4a&&(targetObject['y']=_0x54de4a+targetObject[_0x6f0afa(0x1b4)],targetObject['dy']*=-0x1),targetObject['x']+targetObject['radius']>=_0x1173a3?(targetObject['x']=_0x1173a3-targetObject[_0x6f0afa(0x1b4)],targetObject['dx']*=-0x1):targetObject['x']-targetObject[_0x6f0afa(0x1b4)]<=_0x5a11e0&&(targetObject['x']=_0x5a11e0+targetObject[_0x6f0afa(0x1b4)],targetObject['dx']*=-0x1),target(targetObject['x'],targetObject['y'],targetObject[_0x6f0afa(0x1b4)],targetObject[_0x6f0afa(0x190)],targetObject[_0x6f0afa(0x1e6)]),checkEnemyTargetCollision(enemyCoinObject,targetObject);let _0x3532a4=moveObjectTowardsDirection(bulletObject['x'],bulletObject['y'],targetObject['x'],targetObject['y'],0.3);bulletObject['x']=_0x3532a4['x'],bulletObject['y']=_0x3532a4['y'],window[_0x6f0afa(0x182)](render);}function startAnimation(){const _0x421080=_0x109246;window[_0x421080(0x182)](render);}imgCoin[_0x109246(0x1c4)]=_0x109246(0x19f),imgCoin[_0x109246(0x1a4)][_0x109246(0x198)]=_0x109246(0x18a),imgCoin['id']='rotatingImage',imgCoin[_0x109246(0x1a4)][_0x109246(0x1dd)]='35px',imgCoin[_0x109246(0x1a4)][_0x109246(0x1ae)]=_0x109246(0x1d8),imgCoin['style'][_0x109246(0x1db)]='42px',imgCoin[_0x109246(0x1a4)][_0x109246(0x205)]='1010',imgCoin[_0x109246(0x1a4)][_0x109246(0x1f6)]=_0x109246(0x1f5),document['body'][_0x109246(0x18f)](imgCoin),window[_0x109246(0x1fd)](_0x109246(0x1d0),startAnimation),setInterval(function(){let _0x2f0e94=function _0x5807cc(_0x2096f1,_0x5c34dc,_0x5983a0,_0x576089){const _0x493d53=_0x5623;let _0x43dd77=Math[_0x493d53(0x1bb)](_0x576089-_0x5c34dc,_0x5983a0-_0x2096f1);return{'dx':Math[_0x493d53(0x1ca)](_0x43dd77),'dy':Math[_0x493d53(0x196)](_0x43dd77)};}(targetObject['x'],targetObject['y'],fireX,fireY);if(!0x0==strike){let _0x4b3845={'id':generateRandomEnemyName(0xf),'x':targetObject['x'],'y':targetObject['y'],'dx':_0x2f0e94['dx'],'dy':_0x2f0e94['dy'],'radius':0x5};listBullet[_0x4b3845['id']]=_0x4b3845;}},0x64);const element=document[_0x109246(0x1d4)](_0x109246(0x1aa));function handleTouch(_0x29ff93){const _0x5ce2d9=_0x109246;if(_0x29ff93[_0x5ce2d9(0x1c6)](),_0x5ce2d9(0x189)===_0x29ff93[_0x5ce2d9(0x1d1)]&&0x0===_0x29ff93[_0x5ce2d9(0x1ed)][_0x5ce2d9(0x1a9)]){strike=!0x1;return;}let _0x2cfb72=_0x5ce2d9(0x189)===_0x29ff93[_0x5ce2d9(0x1d1)]?_0x29ff93[_0x5ce2d9(0x1a8)][0x0]:_0x29ff93[_0x5ce2d9(0x1ed)][0x0],_0x14d199=_0x2cfb72[_0x5ce2d9(0x1e0)],_0x57eee9=_0x2cfb72['clientY'];fireX=_0x14d199,fireY=_0x57eee9,targetObject['directionX']=_0x14d199,targetObject[_0x5ce2d9(0x1e6)]=_0x57eee9,_0x29ff93[_0x5ce2d9(0x1d1)],strike=!0x0;}function moveObjectTowardsDirection(_0x356976,_0x23767f,_0x59d8c6,_0x52c936,_0xb39d94){const _0x4bc174=_0x109246;let _0x2ee9bd=_0x59d8c6-_0x356976,_0x2914a0=_0x52c936-_0x23767f,_0x5b20c8=Math[_0x4bc174(0x1bb)](_0x2914a0,_0x2ee9bd);return{'x':_0x356976+Math[_0x4bc174(0x1ca)](_0x5b20c8)*_0xb39d94,'y':_0x23767f+Math[_0x4bc174(0x196)](_0x5b20c8)*_0xb39d94,'distance':Math['abs'](_0x2ee9bd)+Math[_0x4bc174(0x1be)](_0x2914a0)};}function targetMoveObjectAwayFromDirection(_0x150fc7,_0x574b0f,_0xf9a114,_0x246897,_0x142004){const _0x20e120=_0x109246;let _0x178601=Math['atan2'](_0x246897-_0x574b0f,_0xf9a114-_0x150fc7);return{'x':_0x150fc7-Math[_0x20e120(0x1ca)](_0x178601)*_0x142004,'y':_0x574b0f-Math[_0x20e120(0x196)](_0x178601)*_0x142004};}function generateRandomEnemyName(_0x5e6569){const _0x39d9bc=_0x109246;for(var _0x1586e0='',_0x1b2052='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x337da2=_0x1b2052[_0x39d9bc(0x1a9)],_0x468df2=0x0;_0x468df2<_0x5e6569;_0x468df2++)_0x1586e0+=_0x1b2052[_0x39d9bc(0x1ce)](Math[_0x39d9bc(0x1c9)](Math[_0x39d9bc(0x1f2)]()*_0x337da2));return _0x1586e0;}function countNestedObjects(_0x189df0){const _0x4ab603=_0x109246;let _0x1c41ec=0x0;for(let _0x28a742 in _0x189df0)_0x4ab603(0x1ea)!=typeof _0x189df0[_0x28a742]||Array[_0x4ab603(0x193)](_0x189df0[_0x28a742])||(_0x1c41ec++,_0x1c41ec+=countNestedObjects(_0x189df0[_0x28a742]));return _0x1c41ec;}element['addEventListener'](_0x109246(0x1b7),handleTouch),element['addEventListener']('touchmove',handleTouch),element[_0x109246(0x1fd)]('touchend',handleTouch);let minSpeedEnemyCoin=0.4,maxSpeedEnemyCoin=1.6;function setSpeedEnemyCoin(){return Math['random']()*(maxSpeedEnemyCoin-minSpeedEnemyCoin)+minSpeedEnemyCoin;}setInterval(function(){cheklLevel<=0x3&&(cheklLevel=0x0,maxSpeedEnemyCoin+=0.4),maxSpeedEnemyCoin>=2.4&&maxSpeedEnemyCoin<=0x3&&0x3==maxCountEnemyCoin&&maxCountEnemyCoin<0x6&&(maxCountEnemyCoin+=0x1);},0x3a98),setInterval(function(){cheklLevel>=0x4&&(maxSpeedEnemyCoin=1.6,maxCountEnemyCoin=0x3,cheklLevel=0x0);},0xbb8),setInterval(function(){let _0x10c968=countNestedObjects(listEnemy);function _0x3550cc(){const _0x48ccd2=_0x5623;let _0x3d4da0=Math['floor'](0x4*Math[_0x48ccd2(0x1f2)]());0x0==_0x3d4da0?(x=0x0-screenWidth/sizeEnemy,y=Math[_0x48ccd2(0x1c9)](Math[_0x48ccd2(0x1f2)]()*(screenHeight-0x0+0x1))+0x0):0x1==_0x3d4da0?(x=Math[_0x48ccd2(0x1c9)](Math['random']()*(screenWidth-0x0+0x1))+0x0,y=0x0-screenHeight/sizeEnemy):0x3==_0x3d4da0?(x=screenWidth+screenWidth/sizeEnemy,y=Math[_0x48ccd2(0x1c9)](Math['random']()*(screenHeight-0x0+0x1))+0x0):(x=Math[_0x48ccd2(0x1c9)](Math[_0x48ccd2(0x1f2)]()*(screenWidth-0x0+0x1))+0x0,y=screenHeight+screenHeight/sizeEnemy);let _0x2e1bfc={'x':x,'y':y};return _0x2e1bfc;}for(let _0x3cc598=0x0;_0x3cc598<countCoinToSecond;_0x3cc598++)if(_0x10c968<0x14&&maxShots>0x0){let _0x157619=_0x3550cc(),_0x44aa5e={'id':generateRandomEnemyName(0xf),'x':_0x157619['x'],'y':_0x157619['y'],'dx':0x1,'dy':0x1,'speedEnemy':setSpeedEnemyCoin(),'radius':0x14};listEnemy[_0x44aa5e['id']]=_0x44aa5e;}},0x3e8);
