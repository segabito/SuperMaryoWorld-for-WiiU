var DUMMYOBJ=new DummyObject();
var DIMMYSPR=new DummySprite();



function DummySprite(name){
	this.x=0;
	this.y=0;
	this.z=0;
	this.rotate=0;
	this.flipV=false;
	this.flipH=false;
	this.opacity=100; // 0 〜 100
	this.visible=false;
	this.alive=1;
	this.width=32;
	this.height=32;


	 this.moveSpriteTo	 = function(){};
		 this.moveTo	 = function(){};
	 this.moveSpriteBy	 = function(){};
		 this.moveBy	 = function(){};

	 this.setSpriteVisibility = function(){};
		this.setVisibility= function(){};
	 this.setSpriteZPosition  = function(){};
		this.setZPosition = function(){};
	 this.setSpriteBitmap	 = function(){};
		this.setBitmap	 = function(){};
	 this.setSpriteHTML	 = function(){};
		this.setHTML	 = function(){};
	 this.setSpriteSize	 = function(){};
		this.setSize	 = function(){};
	 this.setSpriteFlipV	 = function(){};
		this.setFlipV	 = function(){};
	 this.setSpriteFlipH	 = function(){};
		this.setFlipH	 = function(){};
	 this.setSpriteOpacity	 = function(){};
		this.setOpacity	 = function(){};
	 this.rotateSpriteTo	 = function(){};
		this.rotateTo	 = function(){};
	 this.rotateSpriteBy	 = function(){};
		this.rotateBy	 = function(){};

	 this.update		 = function(){};
	 this.kill		 = function(){};
	 this.reset		 = function(){};

	this.Body=getSpriteBody();
	this.Body.alive="1";
	this.bitmap="";

	this.name=(name)?name : "sprite"+parseInt(Math.random()*10000);
	this.objType="IMAGE"; // TEXT HTML vector polygon circle
	
	this.parent=null;
	this.child=null;

} //

function DummyObject(x,y){
	var T=this;
	T.XX=0;	T.YY=0;
	T.oldXX=T.XX;	T.oldYY=T.YY;
	T.alive  = 1;T.score  = 0;
	T.cCounter=0; 
	T.vFace=0;
	T.hFace=1;


	T.xMove=5;	T.xSpeedMax=4;
	T.xSpeedMaxTurbo=4;	T.xSpeedMin=.9;
	T.xBrakeSlow = .75;	T.xBrakeQuick= 0;
	T.xAccel =3;	T.xBounce=1;
	
	T.yMove=0;	T.yAccel=3;
	T.yDropSpeedMax=12;	T.yJump    =0;
	T.yJumpHigh=0;	T.yJumpSpeeddown=.6;
	T.yBounce=-.3;	
	T.checkStage= true;	T.checkFloor= false;
	T.checkWall = true;

	T.imgWalk  = T.imgDie   = "img/undefined";
	

	T.mind = MindCode.DUMMY;
	T.dummy=true;

	T.plRight = ".gif";T.plLeft  = ".gif";

	T.charWidth  = BGBLOCKSIZE_X;	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 32;	T.charBodyHeight = 32;
	T.charSpriteWidth  = 32;	T.charSpriteHeight = 32;




	T.face=T.imgWalk+T.plRight;


	T.cSprX = 0;	T.cSprY = 0;
	T.oldXX=T.XX=0;	T.oldYY=T.YY=0;

	T.o=new DummySprite();	T.Body=T.o.Body;

	T.myGroup;

	T.action=function(){};
	T.kill=function(){};
	T.show  =function(){};
	T.entry = function(){};
	T.collision=function(){};
	T.onCollision=function(){};

	return this;
} //

//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
function ItemObject(obj,option,x,y){
	var T=this;
	T.XX=x;
	T.YY=y;
	T.mode=ItemCode.KINOKO;if(option)T.mode=option;
	T.oldXX=T.XX;
	T.oldYY=T.YY;
	T.alive  = 1;
	T.score  = 1000;
	T.cCounter=12;
 	// 顔の向き
	T.vFace=0; // 1 = up    -1 = down
	T.hFace=1; // 1 = right -1 = left


 //移動パラメータ ---
	T.xMove=5;
	T.xSpeedMax=4;
	T.xSpeedMaxTurbo=4;
	T.xSpeedMin=.9;
	T.xBrakeSlow = .75;
	T.xBrakeQuick= 0;
	T.xAccel =3;
	T.xBounce=1;
	
	T.yMove=0;
	T.yAccel=3;
	T.yDropSpeedMax=12;
	T.yJump    =0;
	T.yJumpHigh=0;
	T.yJumpSpeeddown=.6;
	T.yBounce=-.3;
	
	T.checkStage= true;
	T.checkFloor= false; // 床の端でターンするか
	T.checkWall = true;  // 壁を無視するか
 //移動パラメータ --->

	T.imgWalk  = "img/kinoko";
	T.imgDie   = "";
	

	T.mind = MindCode.ITEM;

	T.plRight = ".gif";
	T.plLeft  = ".gif";

	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 24;
	T.charBodyHeight = 24;
	T.charSpriteWidth  = 32;
	T.charSpriteHeight = 36;

	switch(T.mode){
		case ItemCode.POISON:
			T.imgWalk="img/poison";
		break;
		case ItemCode.ONEUP:
			T.imgWalk="img/1up";
		break;
		case ItemCode.FLOWER:
			T.xMove=0;
			T.xAccel=0;
			T.imgWalk="img/flower";
			T.plLeft="L.gif";
		break;
		case ItemCode.STAR:
			T.yJump=20.5
			T.xAccel =3;
			T.imgWalk="img/star";
		break;
		case ItemCode.TSUTA:
			T.charBodyWidth  = 32;
			T.charBodyHeight = 20;
			T.charSpriteWidth  = 32;
			T.charSpriteHeight = 32;
			T.xMove=0;
			T.yMove=-6;
			T.yAccel=0;
			T.imgWalk="img/tsutatop";
//			alert();
		break;
	}



	T.face=T.imgWalk+T.plRight;


		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight );
	T.oldXX=T.XX=Math.floor(T.XX/T.charWidth)*T.charWidth+(T.charWidth-T.charBodyWidth)/2;
	T.oldYY=T.YY=Math.floor(T.YY/T.charHeight)*T.charHeight;

	T.o=new Sprite();
	T.o.moveTo(T.XX,T.YY,false);
	T.o.setBitmap(T.face,T.charSpriteWidth,T.charSpriteHeight);
//	T.o.setVisibility(true,false);
	T.o.setZPosition(99);
	T.Body=T.o.Body;

	T.myGroup;

	T.action=actItem;
	T.kill=killItem;
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=itemCollision;
	
	
	createCacheImage(T.mode,
		T.walk+T.plRight,T.walk+T.plLeft
	);

	return this;
}//

function actItem(){
 with(this){
 if(mode!=ItemCode.TSUTA){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)kill();
 }

  if(cCounter-->0){
	oldYY=YY;
	YY-=2;
  }else{
   basicMove(this);
   if(mode==ItemCode.TSUTA){
//	  if(YY<=WIN.SCROLL_TOP){
	  if(YY<=0){
		var dd=createItem(myGroup,XX,YY,ItemCode.TSUTA_UP);
		return kill();
	  }
	var bp=checkWallBlock(getXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2));

	switch(bp){
	 case -2:
	 case -3:
	 break;
	 case 0:
	 case -1:
		setXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2,0x6c);
	 break;
	 default:
		kill();
	 break;
	}
   }else{
	o.setZPosition(900);
	groupCollision(this,myGroup);

    if(mode==ItemCode.FLOWER){
	var p=getPlayerObject(0);
	if(XX<p.XX)
		face=imgWalk+plRight;
	else
		face=imgWalk+plLeft;
    }
   }
  }
 }
} //
function showItem(){
 with(this){
 if(alive<0)return -1;
  o.setBitmap(face,charBodyWidth,charBodyHeight);
  o.moveTo(XX,YY);
 }
}//
function killItem(){
  this.alive=this.o.kill();
} //
function itemCollision(obj){
 with(this){
 if(alive<0)return -1;
 if(obj.alive<0)return -1;
 if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
  if(cCounter>0)return;
  if(mode==ItemCode.TSUTA)return -1;
  if(obj.mind==MindCode.UPPER){
	if(obj.XX+obj.charBodyWidth/2 > XX+charBodyWidth/2)xMove=-xAccel;
	 else xMove=xAccel;
	yMove=-22.5;
	return;
  }else
    if(obj.mind==MindCode.PLAYER){
	obj.getItem(this.mode);
	if(mode==ItemCode.ONEUP)createEffect(XX,YY,EffectCode.SCORE,"1UP");
	kill();
  }
 }
} //
//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
function BounceObject(obj,num,x,y){
	var T=this;
	T.XX=x;
	T.YY=y;
	T.oldXX=T.XX;
	T.oldYY=T.YY;

	T.alive  = 1;

	T.replaceItem=-1; // 終了後に置き換えるアイテム

 	// 顔の向き
	T.vFace=0; // 1 = up    -1 = down
	T.hFace=1; // 1 = right -1 = left

 //移動パラメータ ---
	T.xMove=0;
	T.xSpeedMax=0;
	T.xSpeedMaxTurbo=0;
	T.xSpeedMin=.9;
	T.xBrakeSlow = .75;
	T.xBrakeQuick= 0;
	T.xAccel =4;
	T.xBounce=1;
	
	T.yMove=-20;
	T.yAccel=5;
	T.yDropSpeedMax=30;
	T.yJump    =0;
	T.yJumpHigh=0;
	T.yJumpSpeeddown=.6;
	T.yBounce=-.3;
	
	T.checkStage= false;
	T.checkFloor= false; // 床の端でターンするか
	T.checkWall = true;  // 壁を無視するか
 //移動パラメータ --->

	T.imgWalk  = "";
	T.imgDie   = "";
	
	T.plRight = "";
	T.plLeft  = "";

	T.lastLife =30;


	T.face=T.imgDie+T.plRight;

	T.face="img/kage.gif";

	T.mind = MindCode.UPPER;
//	T.master = obj;
	T.master=getPlayerObject(0);

	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = BGBLOCKSIZE_X;
	T.charBodyHeight = BGBLOCKSIZE_Y;
	T.charSpriteWidth  = BGBLOCKSIZE_X;
	T.charSpriteHeight = BGBLOCKSIZE_Y;
		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight );

	T.XX = Math.floor( T.XX / T.charWidth  ) * T.charWidth;
	T.YY = Math.floor( T.YY / T.charHeight ) * T.charHeight;
	T.oldXX=T.XX;
	T.oldYY=T.YY;

//	T.o=new Sprite();
	T.b1=callEffect(EffectCode.OTHER ,x ,y,"");
	T.o=T.b1.o;
	T.b1.animateCounter=10;
//	T.o.setHTML(WIN.charTable[num],T.charSpriteWidth,T.charSpriteHeight);
	T.o.setBitmap(WIN.charTable[num],T.charSpriteWidth,T.charSpriteHeight);
	T.o.moveTo(T.XX,T.YY,false);
	T.o.setVisibility(true,false);
	T.o.setZPosition(900);

	T.Body=T.o.Body;

	T.myGroup;

	T.action=actBounce;
	T.kill =function(){T.alive=-1;T.o.kill(true);T.b1.kill()};
	T.show  = showBounce;
	T.entry = enemyEntry;
	T.getScore = function(n){
			 createEffect(T.XX,T.YY,EffectCode.SCORE,n);
			 T.master.getScore(n);
			};
	T.collision=enemyCollision;
	T.onCollision=function(){};
	
 return this;
}//
function showBounce(){
 with(this){
	if(alive<0)return -1;
	o.moveTo(XX,YY,false);
 }
}//

function actBounce(){
 with(this){
	if(alive<0)return -1;
  if(replaceItem>=0){
	setXYpointObject(oldXX,oldYY,replaceItem);
	replaceItem=-1;
  }
  yMove+=yAccel;

  groupCollision(this,ENEMIES);
  groupCollision(this,myGroup);
	yMove+=yAccel;
	YY+=yMove;
	b1.XX=XX;	b1.YY=YY;

	if(YY > oldYY){
		kill();
	}
 }
}//

//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//

function callDyingCharacter(obj,option,x,y){
 var T=callEffect(EffectCode.OTHER ,x ,y,"");
 with(T){
 	active=true;
	alive=1;

	charBodyWidth = obj.charBodyWidth;
	charBodyHeight= obj.charBodyHeight;
	XX=obj.XX;
	YY=obj.YY;

	var opa=100,flip=false;
	if(option=="press"){
		xMove  = yMove  =
		xAccel = yAccel = 0;
	  if(obj.peta==true){	//潰れる
		YY=obj.YY+obj.charBodyHeight/2;
		obj.charSpriteHeight = obj.charBodyHeight/2;
		animateCounter=10;
	  }else{		//潰れない
		yAccel=3;
		animateCounter=15;
		opa=50;
	  }
	}else{
		xMove=obj.xMove;
		if(xMove==0)xMove=  4 * obj.hFace;
		if(xMove==0)xMove=  4;
		yMove=-20;
		xAccel =0;
		yAccel =3;
		animateCounter=20;
		opa=50;
		flip=true;
	}

	var facetmp=obj.imgDie;
	if(!facetmp.match(/\.(gif|jpe?g|png|mng|bmp)$/)){
		facetmp+=((obj.hFace > 0 ) ? obj.plRight : obj.plLeft);
	}

  o.moveTo(XX,YY);
	o.setBitmap(
		facetmp,
		obj.charSpriteWidth,
		obj.charSpriteHeight
	);
		o.setOpacity(opa);
		o.setFlipV(flip,false);

  o.setVisibility(true,false);

 return T;
 }
} //


//---------------------------------------------------------
// 花火・ヒットマーク・コイン・スコア・1UPなど
// 本当は動的に生成したいが、IEだともっさりするので固定で用意しておく
function EffectObjectGroup(obj,max){
	this.maxObjects=10;	if(max)this.maxObjects=max;
	this.master=obj;
	
	this.obj=Array();
	for(var i=0;i<this.maxObjects;i++)
		this.obj[i]=new EffectObject(obj);

	this.call=callEffectObjects;
	this.show=showEffectObjects;
	this.action=actEffectObjects;
} //

function callEffectObjects(etype,x,y,option,obj){
 with(this){
//	return DUMMYOBJ;
  for(var i=0;i<maxObjects;i++)
	if(!obj[i].active)return obj[i].call(obj,etype,x,y,option);
//  if(DEBUGMODE)alert("ERR function callEffectObjects()");
  return DUMMYOBJ;
 }
} //

function showEffectObjects(){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(obj[i].active)obj[i].show();
 }
} //
function actEffectObjects(){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(obj[i].active)obj[i].action();
 }
} //

function EffectObject(obj,etype,option){
	var T=this;
	T.active = false;
	T.alive  = 1;
	T.animateCounter=0;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.hFace=0;
	T.vFace=0;
	T.xAccel=0;
	T.yAccel=0;
	T.yJump=0;
	T.xMove=0;
	T.yMove=0;



	T.master=obj;
	T.mind=MindCode.EFFECT;
	T.face="";



	T.charWidth  = 32;
	T.charHeight = 32;
	T.charBodyWidth  = 32;	//当たり判定サイズ
	T.charBodyHeight = 32;
	T.charSpriteWidth  = 32; //グラフィックのサイズ
	T.charSpriteHeight = 32;
		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight );
	
	T.o=new Sprite();
	T.o.setVisibility(false,false);
	T.o.setZPosition(950);
	 T.Body=T.o.Body;
	 T.Body.style.color="white";
	 T.Body.style.fontWeight="bolder";
	 T.Body.style.fontFamily="impact";
	 T.Body.style.fontSize=(dbHeight/20).toString()+"px";
	 T.Body.style.letterSpacing=-1;
	

	this.call = callEffectObject;
	this.action = actEffectObject;
	this.show = function(){this.o.moveTo(this.XX,this.YY,false)};//showEffect;
	this.kill = killEffectObject;
	this.collision= function(){};
	this.onCollision = function(){};

	T.getScore=function(n){this.master.getScore(n);}

} //

function showEffect(){
 with(this){
	o.moveTo(XX,YY,false);
 }
} //


function callEffectObject(obj,etype,x,y,option){
 with(this){
	var x2=parseInt(x/charWidth)*charWidth;
	var y2=parseInt(y/charHeight)*charHeight;
   switch(etype){
	case 0x4003://EffectCode.HANABI:
	case 0x4002://EffectCode.HITMARK:
	 active=true;
	 alive=1;
	 xMove=0;
	 yMove=0;
	 xAccel=0;
	 yAccel=0;
	 animateCounter=10;
	 XX=x;
	 YY=y;
	 this.face="";
	 if(option !="")
	  o.setBitmap(option,32,32);
	 else
	  o.setBitmap("img/hanabi.gif",32,32);
	 o.setZPosition(1200);
	break;

	case 0x4008://EffectCode.ONEUP:
	case 0x4001://EffectCode.SCORE:
	case 0x4006://EffectCode.TEXT:
	case 0x4007://EffectCode.MESSAGE:
	 option=(option+"").replace("1UP","+ 1GET +");
	 active=true;
	 alive=1;
	 xMove=0;
	 yMove=-10;
	 xAccel=0;
	 yAccel=1;
	 animateCounter=10;
	 XX=x;
	 YY=y;
	//	 o.setHTML('<span style="color:white;font-weight:bolder;font-family:impact;font-size:'+ (dbHeight/20)+'px;letter-spacing:-1;"><nobr>'+option+'</nobr></span>',32,32);
	 if(option.match(/^(50|100|200|400|500|800|1000|2000|4000|8000)$/))
		o.setBitmap("img/s"+option+".gif",32,20);
	 else
	 if(option == "+ 1GET +")
		o.setBitmap("img/s1get.gif",48,24);
	 else
		 o.setHTML('<nobr>'+option+'</nobr>',32,32);
	 o.setZPosition(1200);
	break;
	
	case 0x4000://EffectCode.COIN:
	 active=true;
	 alive=1;
	 xMove=0;
	 yMove=-30;
	 xAccel=0;
	 yAccel=4;
	 animateCounter=10;
	 XX=x2;
	 YY=y2;
	 o.setBitmap("img/coinA.gif",32,32);
	 o.setZPosition(250);
	break;

	case 0x4004://EffectCode.BROKEN:
	 active=true;
	 alive=1;
	 xMove=-5;
	 yMove=-5;
	 xAccel=0;
	 yAccel=4;
	 animateCounter=20;
	 XX=x2;
	 YY=y2;
//	 o.setHTML(WIN.charTable[1],BGBLOCKSIZE_X,BGBLOCKSIZE_Y);
	 o.setBitmap(WIN.charTable[option],BGBLOCKSIZE_X/2,BGBLOCKSIZE_Y/2);
	 o.setZPosition(150);
	 break;

	case 0x4005://EffectCode.AWA:// 水中で吐く泡
	 active=true;
	 alive=1;
	 xMove=0;
	 yMove=0;
	 xAccel=0;
	 yAccel=-.1;
	 animateCounter=80;
	 XX=x-8;
	 YY=y+8;
	 o.setBitmap("img/awa.gif",16,16);
	 o.setZPosition(50);
	break;

	 default:
	 case -1://EffectCode.OTHER:
	  active=true;
	  alive=1;
	  XX=x;
	  YY=y;
	  xMove=yMove=xAccel=yAccel=0;
	  return this;
	 break;
   }
// Body.style.border="1px solid red";
 o.moveTo(XX,YY);
 o.setVisibility(true,false);
 return this;
 }
} //

function killEffectObject(){
 with(this){
	active=false;
	alive=-1;
	o.setVisibility(false,false);
	o.setOpacity(100);
	o.setFlipV(false);
	o.setBitmap(UNDEF_GIF,-1,-1);
//	o.Body.style.clip="rect(0,100%,100%,0)";
	return -1;
 }
} //

function actEffectObject(){
 with(this){
  if(!active)return;
    xMove+=xAccel;
    yMove+=yAccel;

   XX+=xMove;YY+=yMove;
    if(--animateCounter==0)return kill();

 }
} //



function DokanWarpObject(obj,atype,x,y){
	var T=this;
	T.active = true;
	T.alive  = 1;
	T.animateCounter=0;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.mind=MindCode.WARP;
	T.mode=atype;
	T.warpMode= WarpMode.DOKAN_DOWN;
	T.face="";
	T.hFace=0;
	T.vFace=0;
	T.hasGroupCollision=false;
	T.myNumber=WARPCNT++;

	T.charWidth  = 32;
	T.charHeight = 32;
	T.charBodyWidth  = 16;	//当たり判定サイズ
	T.charBodyHeight = 16;
	T.charSpriteWidth  = 16; //グラフィックのサイズ
	T.charSpriteHeight = 16;
	
	var xx=parseInt( x / T.charWidth  ) * T.charWidth;
	var yy=parseInt( y / T.charHeight ) * T.charHeight;

	T.o=new Sprite();


	switch(atype){
		case ItemCode.DOKAN_UP:
		case 0xf1:
			T.warpMode= WarpMode.DOKAN_UP;
			T.hFace= 0;
			T.vFace=-1;
			xx+=T.charWidth  - T.charBodyWidth  / 2;
			yy-=T.charBodyHeight /2;
		break;
		case ItemCode.TSUTA_UP:
			T.warpMode= WarpMode.TSUTA_UP;
			T.hFace= 0;
			T.vFace=-1;
			xx+=T.charBodyWidth  / 2;
			//yy-=T.charBodyHeight /2;
		break;
		case ItemCode.DOKAN_DOWN:
			T.warpMode= WarpMode.DOKAN_DOWN;
			T.hFace= 0;
			T.vFace= 1;
			xx+=T.charWidth  - T.charBodyWidth  / 2;
			yy+=T.charHeight - T.charBodyHeight / 2;
		break;
		case ItemCode.DOKAN_LEFT:
			T.warpMode= WarpMode.DOKAN_LEFT;
			T.vFace= 0;
			T.hFace=-1;
			xx-=T.charBodyWidth /2;
			yy+=T.charHeight - T.charBodyHeight- 6;
		break;
		case ItemCode.DOKAN_RIGHT:
			T.warpMode= WarpMode.DOKAN_RIGHT;
			T.vFace= 0;
			T.hFace= 1;
			xx+=T.charWidth  - T.charBodyWidth /2;
			yy+=T.charHeight - T.charBodyHeight-6;
		break;
	}

	T.XX=xx;
	T.YY=yy;

	if(DEBUGMODE){
		T.o.setSize(T.charBodyWidth,T.charBodyHeight);
		T.o.moveTo(T.XX,T.YY);
		T.o.setZPosition(150);
		T.o.setVisibility(true);
	}



	T.PL=getPlayerObject(0);

	this.action = actDokanWarp;
	this.show = function(){}
	this.kill = function(){}
	this.collision= enemyCollision;//function(){};
	this.onCollision = dokanWarpCollision;
	this.entry= enemyEntry;

 return this;
} //

function actDokanWarp(){
 with(this){
  if(alive < 0)return -1;
 }
} //

function dokanWarpCollision(obj){
 with(this){
   if(obj.mind==MindCode.PLAYER){
	if( obj.myPAD.x * hFace > 0 || obj.myPAD.y * vFace > 0){
		if(vFace==0){
//		  if(obj.YY+obj.charBodyHeight > YY+charBodyHeight){
			obj.YY=YY+charBodyHeight-obj.charBodyHeight;
			obj.yMove=-0.01;
//		  }
		}else
		if(hFace==0){
		  obj.xMove=0;
		  if(obj.XX>XX)obj.XX=XX;
		  else
		  if(obj.XX+obj.charBodyWidth<XX+charBodyWidth){
			obj.XX=XX+charBodyWidth-obj.charBodyWidth;
		  }
		}
		WARPPTR=myNumber;
		obj.setAnimate(this.warpMode);
	}
   }
 }
} //

function LiftObject(obj,mode,x,y,w){
	var T=this;
	T.XX=x;
	T.YY=y;
	T.mode="UP";if(mode)T.mode=mode;
	T.oldXX=T.XX;
	T.oldYY=T.YY;
	T.alive  = 1;
	T.score  = 1000;
 	// 顔の向き
	T.vFace=0; // 1 = up    -1 = down
	T.hFace=1; // 1 = right -1 = left
	T.autoMove=0;


 //移動パラメータ ---
	T.xMove=0;
	T.xSpeedMax=8;
	T.xSpeedMin=.9;
	T.xBrakeSlow = .75;
	T.xBrakeQuick= 0;
	T.xAccel =4;
	T.xBounce=1;
	
	T.yMove=-6;
	T.yAccel=0;
	T.yDropSpeedMax=10;
	T.ySpeedMax=8;
	T.yJump    =0;
	T.yJumpHigh=0;
	T.yJumpSpeeddown=.6;
	T.yBounce=-.3;
	
	T.checkStage= false;
	T.checkFloor= false; // 床の端でターンするか
	T.checkWall = true;  // 壁を無視するか
 //移動パラメータ --->

	T.imgWalk  = "img/lift";
	T.imgDie   = "";
	

	T.mind = MindCode.LIFT;

	T.plRight = ".gif";
	T.plLeft  = ".gif";

 with(this){
//		alert(mode);
	switch(mode){
		case "UP":
		 xMove=0;
		 yMove=-5;
		 xAccel=0;
		 yAccel=0;
		break;
		case "DOWN":
		 xMove=0;
		 yMove=5;
		 xAccel=0;
		 yAccel=0;
		break;
		case "LEFT":
		 xMove =-5;
		 yMove = 0;
		 xAccel= 0;
		 yAccel= 0;
		break;
		case "KUMO-RIGHT":
		 face=imgWalk=imgDie="img/kumolift";
		 autoMove=-1;
		case "RIGHT":
		 xMove = 5;
		 yMove = 0;
		 xAccel=0;
		 yAccel=0;
		break;
		case "FALL":
		 xMove=0;
		 yMove=0;
		 xAccel=0;
		 yAccel=.8;
		 ySpeedMax=10;
		break;
		case "RISE":
		 xMove=0;
		 yMove=0;
		 xAccel=0;
		 yAccel=-.8;
		break;
		case "UPDOWN":
		 xMove=0;
		 yMove=0;
		 xAccel=0;
		 yAccel=+0.25;
		break;
		case "L-R":
		 xMove=0;
		 yMove=0;
		 xAccel=-.3;
		 yAccel=0;
		break;
	}
 }

	
	T.face=T.imgWalk+T.plRight;


	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = T.charWidth*w;
	T.charBodyHeight = 32;
	T.charSpriteWidth  = T.charWidth*w;
	T.charSpriteHeight = 32;
	T.floorHeight = 8;
	if(STAGEMODE=="WATER"){
		T.charBodyHeight = 24;
		T.floorTop    = (T.charBodyHeight-T.floorHeight)/2;
	}
	T.floorTop    = (T.charBodyHeight-T.floorHeight)/2;
	T.floorBottom = T.floorTop + T.floorHeight;

		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight );

	T.YY-=T.floorTop;

	T.o=new Sprite();
	T.o.setBitmap(T.face,T.charSpriteWidth,T.charSpriteHeight);
	T.o.moveTo(T.XX,T.YY,false);
	T.o.setZPosition(1300);
	T.Body=T.o.Body;

	T.myGroup;

	T.catched = false;
	T.PL = getPlayerObject(0);

	T.action=actLift;
	T.kill=killLift;
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=function(){};
	
	
	createCacheImage("LIFT",
		T.walk+T.plRight,T.walk+T.plLeft
	);


} //


function actLift(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0 && mode!="KUMO-RIGHT"){
//	o.setVisibility(false,false);
	return -1;
  }else
  if(mode == "KUMO-RIGHT")
	o.moveTo(XX,YY);
//	o.setVisibility(true,false);

	var lastC=catched;
	catched=false;
  if( collision(PL.XX,PL.YY,PL.charBodyWidth,PL.charBodyHeight) > 0 ){
	var plc=PL.XX+PL.charBodyWidth/2;

	if(PL.yMove <= 0){
	  if(plc<XX){
		if(PL.xMove>0)PL.xMove=0;
		PL.XX=XX-PL.charBodyWidth;
		}
	  else
	  if(plc>XX+charBodyWidth){
		if(PL.xMove<0)PL.xMove=0;
		PL.XX=XX+charBodyWidth;
		}
	else
	if(PL.yMove < 0){
	 if(PL.yMove < yMove){
		PL.yMove=.1;
		PL.YY=YY+floorBottom;
	 }else
	 if(PL.YY > YY+charBodyHeight){
	 }else
	 if(PL.YY > YY){
		PL.yMove=.1;
		PL.YY=YY+floorBottom;
	 }else{
//		PL.yMove=.1;
	 }
	}

	}else{

	 if(PL.YY >= YY){
	 }else
	 if(PL.YY+PL.charBodyHeight <= YY + charBodyHeight){
		PL.yMove=0;
		catched=true;
		PL.YY=YY+floorTop-PL.charBodyHeight;
	 }
	}
  }else{
  }
	if(lastC==true && catched==false){
//		if(DEBUGMODE)DBG(100,100,PL.xMove +" " + xMove);
		PL.xMove+=xMove;
	}

	xMove+=xAccel;
	yMove+=yAccel;
 

  if(( mode=="FALL" || mode=="RISE") && (!catched && autoMove<1))yMove=0;
  else
  if( (mode=="UPDOWN" || mode =="L-R") && 
	(Math.abs(xMove) > xSpeedMax || Math.abs(yMove) > ySpeedMax) ){
	xAccel*=-1;
	yAccel*=-1;
  }

  if(Math.abs(yMove)>ySpeedMax)yMove=ySpeedMax*(yMove/Math.abs(yMove));

  if(yMove>yDropSpeedMax)yMove=yDropSpeedMax;

  if(catched){
	if(autoMove<0)autoMove=0;
	PL.yMove=0;
	PL.XX+=xMove;
	PL.YY+=yMove;
	PL.xScroll+=xMove;
	PL.yScroll+=yMove;
	PL.jumpBonus=0;
	if(PL.myPAD.buttons[1]==0)PL.jumpFlag=0;
/*
	if(PL.xMove==0 && !PL.sitdown){
//		PL.face=PL.imgStand+((PL.hFace > 0 ) ? PL.plRight : PL.plLeft);
	}
*/
  }

  if(autoMove>=0){
	XX+=xMove;
	YY+=yMove;
  }

 switch(mode){
  case "UP":
   if(WIN.SCROLL_TOP >  YY + charBodyHeight)
		YY = WIN.SCROLL_TOP + SCREEN_Y + charBodyHeight;
  break;
  case "DOWN":
   if(WIN.SCROLL_TOP+SCREEN_Y <  YY + charBodyHeight)
		YY = (WIN.SCROLL_TOP - charBodyHeight);
  break;
  case "FALL":
   if(YY > WIN.SCROLL_Y_MAX)kill();
  break;
  case "RIGHT":
   if(XX > WIN.SCROLL_X_MAX)XX=0-charBodyWidth;
  break;
  case "LEFT":
   if(XX < 0-charBodyWidth)XX=WIN.SCROLL_X_MAX;
  break;
 }


 }
} //

function killLift(){
 with(this){
	alive=-1;
	catched=false;
	o.setVisibility(false,false);
 }
} //

function BalanceLiftObject(obj,option,x,y,group){ // 天秤リフト
	var T=this;
	T.active = true;
	T.alive  = 1;
	T.animateCounter=0;
	T.animateCounterStart=160;
	T.animateFlag=false;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.mind=MindCode.WARP;

	T.face="img/wiretop.gif";
	T.imgWire="img/wire.gif";
	T.hFace=0;
	T.vFace=0;
	T.hasGroupCollision=false;
	T.score=1000;
	T.master=null;

	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 32;	//当たり判定サイズ
	T.charBodyHeight = 32;
	T.charSpriteWidth  = T.charWidth*6; //グラフィックのサイズ
	T.charSpriteHeight = 32;

	T.wireLength=T.charHeight*12;
	T.charWireWidth  = 32; //グラフィックのサイズ
	T.charWireHeight = T.wireLength/2;


	T.XX=parseInt( x / T.charWidth  ) * T.charWidth;
	T.YY=parseInt( y / T.charHeight ) * T.charHeight

	T.o=new Sprite();
	T.o.setBitmap(T.face,T.charSpriteWidth,T.charSpriteHeight);
	T.o.moveTo(T.XX-T.charWidth*3,T.YY+2);
	T.o.setZPosition(800);
	T.o.setVisibility(true,false);
	T.Body=T.o.Body;


	var lw=(LIFTWIDTH-1)/2;
	T.LL=createEnemy(group,T.XX+T.charWidth*(-3-lw),T.YY+T.wireLength*.5,EnemyCode.LIFT_FALL,3);
	T.RR=createEnemy(group,T.XX+T.charWidth*(+2-lw),T.YY+T.wireLength*.5,EnemyCode.LIFT_FALL,3);

	T.RR.YY=T.LL.YY=T.YY+T.wireLength*.5;
	

	T.l=new Sprite();
	T.l.setBitmap(T.imgWire,T.charWireWidth,T.LL.YY-T.YY+T.LL.floorTop-T.charHeight);
	T.l.moveTo(T.XX+T.charWidth*(-3),T.YY+T.charHeight);
	T.l.setZPosition(80);
	T.l.setVisibility(true,false);

	T.r=new Sprite();
	T.r.setBitmap(T.imgWire,T.charWireWidth,T.RR.YY-T.YY+T.RR.floorTop-T.charHeight);
	T.r.moveTo(T.XX+T.charWidth*(+2),T.YY+T.charHeight);
	T.r.setZPosition(80);
	T.r.setVisibility(true,false);



	T.action=actBalanceLift;
	T.kill=function(){};
	T.collision=function(){};
	T.onCollision=function(){};
	T.show=function(){};
	T.entry=enemyEntry;

} //

function actBalanceLift(){
 with(this){
  if(alive<0)return -1;
	var w=wireLength;
	var moveflag=false;
	if(LL.yMove!=0){
		var ly=LL.YY-YY;
		w-=ly;
		RR.YY=YY+w;
		moveflag=true;
	}
	else
	if(RR.yMove!=0){
		var ry=RR.YY-YY;
		w-=ry;
		LL.YY=YY+w;
		moveflag=true;
	}
   if(moveflag==true){
	l.setSize(charWireWidth, Math.abs((LL.YY-YY+LL.floorTop)-charHeight+3) );
	r.setSize(charWireWidth, Math.abs((RR.YY-YY+RR.floorTop)-charHeight+3) );
   }
   if(w<charHeight*1.5){
	LL.yMove=RR.yMove=-10;
	LL.autoMove=1;
	RR.autoMove=1;
	alive=-1;
	var P=getPlayerObject(0);
	P.getScore(score,true);
	
   }
 }
} //

function TenCoinBlock(obj,mode,x,y){
	var T=this;
	T.active = true;
	T.alive  = 1;
	T.animateCounter=100;
	T.oldXX=T.XX=x;
	T.oldYY=T.YY=y;
	T.mind=MindCode.OTHERS;

	T.face="";
	T.hFace=0;
	T.vFace=0;
	T.hasGroupCollision=false;

	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = BGBLOCKSIZE_X;	//当たり判定サイズ
	T.charBodyHeight = BGBLOCKSIZE_Y;//*1.3;
	T.charSpriteWidth  = BGBLOCKSIZE_X; //グラフィックのサイズ
	T.charSpriteHeight = BGBLOCKSIZE_Y;
		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight );
	
	T.XX = parseInt( T.XX / T.charWidth  ) * T.charWidth;
	T.YY = parseInt( T.YY / T.charHeight ) * T.charHeight;//+T.charHeight*.4;
	T.oldXX=T.XX;
	T.oldYY=T.YY;

	T.o=new Sprite();

	T.PL=getPlayerObject(0);

//	this.action = function(){}
	this.action = act10Coin;
	this.show = function(){}
	this.kill = kill10Coin;
	this.collision= enemyCollision;//function(){};
	this.onCollision = tenCoinCollision;
	this.entry= enemyEntry;

//	 setXYpointObject(x,y,0x5,false);

 return this;
	
} //

function act10Coin(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	return -1;
  }
  if( collision(PL.XX,PL.YY,PL.charBodyWidth,PL.charBodyHeight) > 0 ){
	onCollision(PL);
  }
  
	if(animateCounter-- < 0)kill();

 }
} //

function tenCoinCollision(P){
  with(this){
 if(alive<0)return;
    if(P.yMove < 0 && P.YY > YY ){
	P.getItem("COIN");
	createItem(getOthersGroup(),XX,YY,ItemCode.BOUNCE,0x25,-1,P);
	createEffect(XX,YY,EffectCode.COIN,P);
	P.YY=YY+charHeight;
	P.yMove=1.1;
    }
  }
} //

function kill10Coin(){
 this.alive=this.o.kill();
 setXYpointObject(this.XX,this.YY,0x20);
 return -1;
} //


function JumpBlock(obj,atype,x,y){
	var T=this;
	T.active = true;
	T.alive  = 1;
	T.animateCounter=0;
	T.aCounterStart=8;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.mind=MindCode.WARP;
	T.mode=atype;
	T.face="";
	T.hFace=0;
	T.vFace=0;
	T.hasGroupCollision=false;
	T.catched=false;

	T.charWidth  =	BGBLOCKSIZE_X;
	T.charHeight =	BGBLOCKSIZE_Y;
	T.charBodyWidth  = BGBLOCKSIZE_X;	//当たり判定サイズ
	T.charBodyHeight = BGBLOCKSIZE_X*2;
	T.charSpriteWidth  = BGBLOCKSIZE_X; //グラフィックのサイズ
	T.charSpriteHeight = BGBLOCKSIZE_X*2;
		  T.sprX=(T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		  T.sprY=(T.charSpriteHeight - T.charBodyHeight ) / 2;
	
	T.XX=parseInt( x / T.charWidth  ) * T.charWidth;
	T.YY=parseInt( y / T.charHeight -1) * T.charHeight;

	T.face="img/jump.gif";

	switch(atype){
		case "SUPER":
		 T.face="img/superjump.gif";
		break;
		case "ULTRA":
		 T.face="img/ultrajump.gif";
		break;
		case "YOUNG":
		 T.face="img/youngjump.gif";
		break;
	}

	T.o=new Sprite();
	T.o.setBitmap(T.face,T.charSpriteWidth,T.charSpriteHeight);
	T.o.setZPosition(80);
	T.o.setVisibility(true,false);
	T.o.moveTo(T.XX,T.YY);






	T.PL=getPlayerObject(0);

	this.action = actJumpBlock;
	this.show = function(){}
	this.kill = function(){}
	this.collision= enemyCollision;//function(){};
	this.onCollision = function(){};
	this.entry= enemyEntry;


	setXYpointObject(T.XX,T.YY,0);
//	setXYpointObject(T.XX,T.YY-T.charBodyHeight,0);
 return this;
} //

function actJumpBlock(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	return -1;
  }
  if(catched!=true && animateCounter<=0){
   if(collision(PL.XX,PL.YY,PL.charBodyWidth,PL.charBodyHeight) > 0 ){
	 var h = stepOnEnemyCollision(PL,this);
	 if(h>0){
		animateCounter=aCounterStart;
		catched=true;
		PL.jumpBonus=0;
	}else{
	 if(PL.XX+PL.charBodyWidth/2 > XX+charBodyWidth/2){
		PL.XX=XX+charBodyWidth;
		if(PL.xMove<0)PL.xMove=0;
	 }
	 else{
		PL.XX=XX-PL.charBodyWidth;
		if(PL.xMove>0)PL.xMove=0;
	 }
	 catched=false;
	}
   }else{
	 catched=false;
   }
  }
  

  if(animateCounter>0){
	var am=animateCounter; //
	var as=aCounterStart/2; //4


	if(am>as)am=as-(am%as);
	 if(am>3)am=3;
	 var ams=am*am*5;
	 charSpriteHeight=charBodyHeight-ams;
	 o.setSize(charSpriteWidth,charSpriteHeight);
//	 o.moveTo(XX,YY+am*ams);
	 o.moveTo(XX,YY+ams);

	if(catched){
		PL.YY=YY+(charBodyHeight-charSpriteHeight)-PL.charBodyHeight;
		if(PL.myPAD.buttons[1]!=0 && PL.jumpFlag!=true){
			PL.yMove=-10.1-9*(am+1);
			PL.jumpFlag=true;
			PL.steponFlag=5;
			catched=false;
		}else{
			PL.jumpFlag=false;
		}
	}
  }
  if(animateCounter==0){
	if(catched){
		PL.YY=YY-PL.charBodyHeight;
		PL.yMove=-18.1;
		PL.jumpFlag=true;
		PL.steponFlag=5;
//		alert();
	}
	 charSpriteHeight=charBodyHeight;
	 o.setSize(charSpriteWidth,charSpriteHeight);
	 o.moveTo(XX,YY);
	catched=false;
  }

	animateCounter--;

 }

} //


function AxeObject(obj,atype,x,y){ // ボス面の斧  特殊オブジェクト
	var T=this;
	T.active = true;
	T.alive  = 1;
	T.animateCounter=0;
	T.animateCounterStart=100;
	T.animateFlag=false;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.mind=MindCode.EVENT;

	T.face="img/axe.gif";
	T.hFace=0;
	T.vFace=0;
	T.hasGroupCollision=false;
	T.score=5000;
	T.master=null;

	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 32;	//当たり判定サイズ
	T.charBodyHeight = 32;
	T.charSpriteWidth  = 32; //グラフィックのサイズ
	T.charSpriteHeight = 32;


	T.XX=parseInt( x / T.charWidth  ) * T.charWidth;
	T.YY=parseInt( y / T.charHeight ) * T.charHeight

	T.o=new Sprite();
	T.o.setBitmap(T.face,T.charSpriteWidth,T.charSpriteHeight);
	T.o.moveTo(T.XX,T.YY);
	T.o.setZPosition(800);
	T.o.setVisibility(true,false);


	T.XX+=6;





	this.action = actAxe;
	this.show = function(){};
	this.kill = killAxe;
	this.collision= enemyCollision;
	this.onCollision = axeOnCollision;
	this.entry= enemyEntry;

	T.oldSCROLL_X_MAX=WIN.SCROLL_X_MAX;

	WIN.SCROLL_X_MAX=T.XX+T.charBodyWidth;

	T.XX+=4;

	AXE=this;
 return this;
} //

function actAxe(){
 with(this){
  if(alive<0)return -1;
  if(!animateFlag)return -1;

   if(animateCounter % 1==0){
	var xm=XX-parseInt((animateCounterStart-animateCounter)/1 + 1)*charWidth;
	var wleft = parseInt(WIN.SCROLL_LEFT / charWidth)*charWidth;

	if(xm>wleft + charWidth)setXYpointObject(xm,YY+charHeight*2,0);
//	if(xm>WIN.SCROLL_LEFT+charWidth)setXYpointObject(xm,YY+charHeight*2,0);
	else 
	animateCounter=0;
	if(BOSS && animateCounter==0){
		if(BOSS.alive>0)BOSS.kill("DROP");
	}
   }

   if(animateCounter--<=0)kill();
  return -1;
 }
} //

function axeOnCollision(obj){
 with(this){
  if(alive<0)return -1;
  if(master==obj)return -1;
  if(obj.mind==MindCode.PLAYER){
		obj.getScore(score);
		master=obj;
	if(BOSS && BOSS.alive > 0){
		o.setVisibility(false,false);
		obj.setMode(PlayerMode.PAUSE,true);
		obj.lockObject=this;
		obj.xMove=0;
		if(obj.yMove<-3)obj.yMove=-3;
		animateCounter=animateCounterStart;
		obj.animateCounter=animateCounterStart;
		animateFlag=true;
	}else{
		kill();
	}
  }
  else
  return -1;
 }
} //

function killAxe(){
 with(this){
	WIN.SCROLL_X_MAX=oldSCROLL_X_MAX;
	alive=-1;//o.kill();
	if(master){
		master.setAnimate(PlayerMode.AXE);
	}
 }
} //







function castle(x,y,b){
	var xx=parseInt(x/BGBLOCKSIZE_X)*BGBLOCKSIZE_X;
	var yy=parseInt(y/BGBLOCKSIZE_Y)*BGBLOCKSIZE_Y;
	var w,h,img;
	if(b!=1){
	 w=BGBLOCKSIZE_X*5;
	 h=BGBLOCKSIZE_Y*6;
	 img  = "img/castle.gif";
	 img2 = "img/castlegate.gif";
 	}else{
	 w = BGBLOCKSIZE_X*9;
	 h = BGBLOCKSIZE_Y*12;
	 img  = "img/bigcastle.gif";
	 img2 = "img/castlegate.gif";
	 img3 = "img/castlewall.gif";
	}
	
	if(xx>SCREEN_X){// 右スクロールを前提にした手抜き
		setXYpointObject(xx+BGBLOCKSIZE_X,yy,0x7f,-1);
		setXYpointObject(xx+BGBLOCKSIZE_X,yy+BGBLOCKSIZE_Y,0x7f,-1);

		var g=BackgroundObject(img2,xx,yy-BGBLOCKSIZE_Y,
				BGBLOCKSIZE_X*2,BGBLOCKSIZE_Y*2+1,1100);
		if(b!=1){
		  GOALFLAG2 =new CastleFlag(xx,yy-(h-BGBLOCKSIZE_X*2));
		}else{
		var wall=BackgroundObject(img3,xx+BGBLOCKSIZE_X*4,yy-BGBLOCKSIZE_Y*5.5+1,
				BGBLOCKSIZE_X*10,BGBLOCKSIZE_Y*6.5,160);
			
		}
	}
	BackgroundObject(img,xx-w/2+BGBLOCKSIZE_X*.5,yy-h+BGBLOCKSIZE_Y+1,w,h,150);
} //

function princess(x,y){
	var xx=parseInt(x/BGBLOCKSIZE_X)*BGBLOCKSIZE_X;
	var yy=parseInt(y/BGBLOCKSIZE_Y)*BGBLOCKSIZE_Y;
	var world=getWorldNumber();
	var w=32,h=48;
	var img="img/hiroyuko.gif";
	switch(world){
	 case 1:case 8:
	  img="img/pinch.gif";
	 break;
	 case 6:
	  img="img/lynch.gif";
	 break;
	}
	BackgroundObject(img,xx,yy-h+2+ BGBLOCKSIZE_Y,w,h,1500);

	var fontsize=dbHeight/30;
	backgroundObjectHTML('<div id="MSGAREA" style="font-size:'+fontsize+'px;letter-spacing:3;b order:1px solid white" align="center"></div>',
				xx-BGBLOCKSIZE_X*4,yy-BGBLOCKSIZE_Y*9,BGBLOCKSIZE_X*6,BGBLOCKSIZE_Y*4,1500);
} //


function BackgroundObject(img,x,y,w,h,z){
	var T=this;
	T.o=new Sprite();
	T.o.setBitmap(img,w,h);
	T.o.moveTo(x,y);
	T.o.setZPosition(z);
	T.o.setVisibility(true);
	return this;
} //

function backgroundObjectHTML(html,x,y,w,h,z){
	var T=this;
	T.o=new Sprite();
	T.o.setHTML(html);
	T.o.moveTo(x,y);
	if(w>0 && h>0){
	 var width  = (dbWidth  / SCREEN_X * w);
	 var height = (dbHeight / SCREEN_Y * h);
	 T.o.setSize(width,height);
	}
	T.o.setZPosition(z);
	T.o.setVisibility(true);
	return this;
} //


function GoalFlag(x,y){
	var T=this;
	
	T.charBodyWidth  = 48;
	T.charBodyHeight = 32;
	T.XX=x-32;
	T.YY=y+WIN.BGBLOCKSIZE_Y*.5;
	T.yMove=10;
	
	T.dummy=false;
	
	T.o=new Sprite();
	T.o.setBitmap("img/goalflag.gif",T.charBodyWidth,T.charBodyHeight);
	T.o.moveTo(T.XX,T.YY);
	T.o.setVisibility(true,false);
	T.o.setZPosition(90);
	
	T.show=function(){this.o.moveTo(this.XX,this.YY);}

	return this;
} //

function CastleFlag(x,y){
	var T=this;
	
	T.charBodyWidth=32;
	T.charBodyHeight=64;
	T.XX=x;
	T.YY=y;
	T.yMove=-4;

	T.dummy=false;
	
	T.o=new Sprite();
	T.o.setBitmap("img/castleflag.gif",T.charBodyWidth,T.charBodyHeight);
	T.o.moveTo(T.XX,T.YY);
	T.o.setVisibility(true,false);
	T.o.setZPosition(90);
	
	T.show=function(){this.o.moveTo(this.XX,this.YY);}

	return this;
} //