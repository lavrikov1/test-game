eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('j 1R(n){d t=1f 3k(n);t.32()}j 1q(n,t){g i=9.33(9.2f(n.x-t.x,2)+9.2f(n.y-t.y,2));G i<n.k+t.k}j 2j(){a.M=.34;a.1l(1B,29,2v,1y,25);a.1m();a.1s()}j 2k(n,t,i){d r=v/S,u=v/S;a.M=1;a.1l(1z,n-r/2,t-u/2,r,u);a.1m();a.1V(n,t,i,i,9.L/4,0,2*9.L);a.1S="#1N";a.M=0;a.1s()}j 1K(n,t,i,r,u){d o=9.18(u-t,r-n)+9.L/2;a.2c();a.2b(n,t);a.28(o);d f=35,e=37;a.M=1;a.1l(N,-f/2,-e/2,f,e);a.27();13="#1N";a.1m();a.1V(n,t,i,i,9.L/4,0,2*9.L);a.M=0;a.1S=13;a.1s()}j 1I(n,t,i,r,u){d f=20,e=20,o=9.18(r,i)+9.L/2;a.2c();a.2b(n,t);a.28(o);a.M=1;a.1l(1C,-f/2,-e/2,f,e);a.27();a.1m();a.1V(n,t,u,u,9.L/4,0,2*9.L);a.1S="#1N";a.M=0;a.1s()}j 1M(){1n++;38(1n,1p)}j 1Q(n,t,i,r="#39"){1H u=m.I("O"),f;u.31=n;u.16="3a";u.b.13=r;m.17.J(u);f=u.3c();t=9.2e(t,V.2r-f.1c);i=9.2e(i,V.2p-f.19);u.b.12=t+"2i";u.b.1E=i+"2i";u.1h("3e",j(){u.3f()})}j 24(){a.3g(0,0,K.1c,K.19);2j();d n={x:0,y:0,Z:2Y};T(g t 1b q)Q(q.W(t)){g i=q[t];d u=i.x,f=i.y;g r=21(i.x,i.y,7.x,7.y,i.2F);i.x=r.x;i.y=r.y;2k(i.x,i.y,i.k.k);r.Z<n.Z&&(n={x:u,y:f,Z:r.Z})}T(g n 1b Y)Q(Y.W(n)){g t=Y[n];d i=t.x,r=t.y;t.x+=t.F*20;t.y+=t.D*20;1I(t.x,t.y,t.F,t.D,t.k);T(g n 1b q)Q(q.W(n)){g i=q[n];1q(t,i)&&q.W(i.p)&&(1M(),B.P=1r-=1,1Q("+1",i.x,i.y),1R("2l/2n-1A.2o"),26 q[i.p],26 Y[t.p],z.P=1w+=1)}}T(g n 1b q)Q(q.W(n)){g t=q[n];1q(7,t)&&q.W(t.p)&&(1Q("-5",t.x,t.y,"#2Z"),1R("2l/2n-1K.2o"),1M(),B.P=1r-=1,26 q[t.p],z.P=1w-=5,14+=1)}g t=2u(7.x,7.y,n.x,n.y,.8);d s=t.x,h=t.y;7.x=s;7.y=h;g i=v*.2,c=w*.2,l=w*.3,r=i,u=v-i,f=c,e=w-l;7.y+7.k>=e?(7.y=e-7.k,7.D*=-1):7.y-7.k<=f&&(7.y=f+7.k,7.D*=-1);7.x+7.k>=u?(7.x=u-7.k,7.F*=-1):7.x-7.k<=r&&(7.x=r+7.k,7.F*=-1);1K(7.x,7.y,7.k,7.1x,7.1D);1q(2x,7);g o=21(1e.x,1e.y,7.x,7.y,.3);1e.x=o.x;1e.y=o.y;V.2z(24)}j 1u(n){Q(n.2N(),n.22==="1P"&&n.2s.2t===0){1v=!1;G}d t=n.22==="1P"?n.2O[0]:n.2s[0];g i=t.2P,r=t.2R;1W=i;1X=r;7.1x=i;7.1D=r;1v=n.22==="2H"?!0:!0}j 21(n,t,i,r,u){g f=i-n,e=r-t;d s=9.2g(f)+9.2g(e);g o=9.18(e,f),h=n+9.1Z(o)*u,c=t+9.1Y(o)*u;G{x:h,y:c,Z:s}}j 2u(n,t,i,r,u){g e=i-n,o=r-t,f=9.18(o,e),s=n-9.1Z(f)*u,h=t-9.1Y(f)*u;G{x:s,y:h}}j 1U(n){T(1H t="",i="2V",u=i.2t,r=0;r<n;r++)t+=i.2W(9.U(9.R()*u));G t}j 1L(n){d t=0;T(g i 1b n)3i n[i]!="3l"||3m.3G(n[i])||(t++,t+=1L(n[i]));G t}j 2G(){G 9.R()*(11-1O)+1O}1H v,w,A,1n,1p,z,H,E,B,C;d 3H=!1;d 3I=3K;g 3L=[];v=V.2r||m.2m.2q||m.17.2q;w=V.2p||m.2m.2h||m.17.2h;d 3Q=v-30,3R=w-30,3S=v+30,3T=w+30,3n=2L,1d=2,3o=1,3p=9.3q(5/2K*w);A=m.I("O");A.p="2B-A";A.b.3r="#3s";m.17.J(A);d K=m.I("K");K.1c=v;K.19=w;A.J(K);d a=K.3w("2d"),1z=1f 1o;1z.1a="X/2I-1A.2D";d S=15,1B=1f 1o;1B.1a="X/3x.1F";d 1C=1f 1o;1C.1a="X/1I.1F";d 1v=!1,N=1f 1o;N.1a="X/3B.1F";N.b.1c="3C";N.b.19="3D";N.b.1E="2a%";N.b.12="2a%";d 1y=3E,25=3M,29=v/2-1y/2,2v=w/2-25/2;d 2x={x:20,y:20,F:1,D:1,k:20},7={x:2U,y:2L,F:.8,D:.4,1x:3J,1D:3u,k:36},1e={x:2w,y:2w,F:1,D:1,k:5};g q={},Y={};d 1W=0,1X=0,1w=0,14=0,2E=3;1n=0;1p=1J;z=m.I("O");z.p="3A-3z";z.b.1j="1i";z.b.1E="23";z.b.12="23";z.b.13="1G";z.b.1k="10";z.16="3y";z.P=1w;A.J(z);H=m.I("O");H.p="2M";H.16="2M";A.J(H);H=m.I("O");H.p="2y";H.16="2y";A.J(H);E=m.I("O");E.p="3v";E.b.1j="1i";E.b.1T="3t";E.b.12="2C";E.b.13="1G";E.b.1k="2J";E.16="3P";E.P="/ 3O";A.J(E);d 1r=1J;B=m.I("O");B.p="3F";B.b.1j="1i";B.b.1T="3N";B.b.12="2C";B.b.13="1G";B.b.1k="2J";B.16="3j";B.P=1r;A.J(B);C=m.I("X");C.1a="X/2I-1A.2D";C.b.1j="1i";C.p="2Q";C.b.1c="2A";C.b.19="2A";C.b.1T="2T";C.b.1k="2S";C.b.12="23";m.17.J(C);V.2z(24);1t(j(){j t(n,t,i,r){g f=i-n,e=r-t,u=9.18(e,f);G{F:9.1Z(u),D:9.1Y(u)}}g n=t(7.x,7.y,1W,1X);Q(1v==!0){g t={p:1U(15),x:7.x,y:7.y,F:n.F,D:n.D,k:5};Y[t.p]=t}},2K);g 1g=m.2X("2B-A");1g.1h("3b",1u);1g.1h("2H",1u);1g.1h("1P",1u);d 1O=.4,11=1.6;1t(j(){14<=3&&(14=0,11+=.4);11>=2.4&&11<=3&&1d==3&&1d<6&&(1d+=1)},3h);1t(j(){14>=4&&(11=1.6,1d=3,14=0)},3d);1t(j(){j t(){d n=9.U(9.R()*4);n==0?(x=0-v/S,y=9.U(9.R()*(+w+1))+0):n==1?(x=9.U(9.R()*(+v+1))+0,y=0-w/S):n==3?(x=v+v/S,y=9.U(9.R()*(+w+1))+0):(x=9.U(9.R()*(+v+1))+0,y=w+w/S);G{x:x,y:y}}d n=1L(q);T(d i=0;i<2E;i++)Q(n<20&&1p>0){d n=t();g i={p:1U(15),x:n.x,y:n.y,F:1,D:1,2F:2G(),k:20};q[i.p]=i}},1J);',62,242,'|||||||targetObject||Math|ctx|style||let|||const|||function|radius||document|||id|listEnemy|||||screenWidth|screenHeight|||textDiv|container|textDivCountCoin2|imgCoin|dy|textDivCountCoin|dx|return|rectHp|createElement|appendChild|canvas|PI|globalAlpha|imageTarget|div|innerText|if|random|sizeEnemy|for|floor|window|hasOwnProperty|img|listBullet|distance||maxSpeedEnemyCoin|left|color|cheklLevel||className|body|atan2|height|src|in|width|maxCountEnemyCoin|bulletObject|new|element|addEventListener|absolute|position|zIndex|drawImage|beginPath|shotsFired|Image|maxShots|checkEnemyTargetCollision|coinsLeft|stroke|setInterval|handleTouch|strike|countDead|directionX|logoWidth|imageEnemyCoin|coin|alfredLogo|imageBullet|directionY|top|png|white|var|bullet|1e3|target|countNestedObjects|onShotFired|ff0000|minSpeedEnemyCoin|touchend|createFloatingText|playAudio|strokeStyle|bottom|generateRandomEnemyName|ellipse|fireX|fireY|sin|cos||moveObjectTowardsDirection|type|10px|render|logoHeight|delete|restore|rotate|logoX|50|translate|save||min|pow|abs|clientHeight|px|alfLogo|enemyCoinLevel1|audio|documentElement|kill|ogg|innerHeight|clientWidth|innerWidth|touches|length|targetMoveObjectAwayFromDirection|logoY|150|enemyCoinObject|rectangleHp|requestAnimationFrame|35px|image|50px|svg|countCoinToSecond|speedEnemy|setSpeedEnemyCoin|touchmove|test|1001|100|300|rectangleHp2|preventDefault|changedTouches|clientX|rotatingImage|clientY|1010|32px|180|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|charAt|getElementById|1e4|FF0000||textContent|play|sqrt|04|70||78|updateRectangleWidth|E0FFFF|floatingText|touchstart|getBoundingClientRect|3e3|animationend|remove|clearRect|15e3|typeof|rectangleHp4|Audio|object|Array|speed_enemy_coin|priceEnemyCoin|enemyCoinHeight|round|backgroundColor|181A20|25px|80|countCoin|getContext|alfred|rectangle|nerual|count|logo_for_site|10vh|auto|388|countCoin2|isArray|userMute|speed_alfred|130|500|allEnemyCoin|480|40px|1000|rectangleHp3|maxScreenWidthToNumber|maxScreenHeightToNumber|minScreenWidthToNumber|minScreenHeightToNumber'.split('|'),0,{}))
