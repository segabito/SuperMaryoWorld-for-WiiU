//var bonusTable=Array(100,200,400,800,1000,2000,4000,8000);
var bonusTable=Array(400,500,800,1000,2000,4000,5000,8000);

function MindCode(){
	MindCode.PLAYER	= 1;
	MindCode.FIRE	= 2;
	MindCode.ITEM	= 3;
	MindCode.UPPER	= 4;
	MindCode.EFFECT	= 5;
	MindCode.WARP	= 6;
	MindCode.LIFT	= 7;
	MindCode.EVENT	= 8;
	MindCode.SLEEP	= 9;
	MindCode.ENEMY	=100;
	MindCode.OTHERS	=-1;
	MindCode.DUMMY	= 0;
	
	MindCode.parse = function(str){
		//if(NaN(str))return parseInt(str);
		return (MindCode[str]) ? MindCode[str] : parseInt(str);
	}
	
}
MindCode();
function PlayerMode(){
	PlayerMode.NORMAL	= 0;
	PlayerMode.SUPER	= 1;PlayerMode.KINOKO	= 1;
	PlayerMode.FIRE		= 2;PlayerMode.FLOWER	= 2;
	PlayerMode.GHOST	= 4;
	PlayerMode.STAR		= 8;
	PlayerMode.NONGHOST	= 16;
	PlayerMode.LOSTSTAR	= 32;
	PlayerMode.TIMEBONUS= 64;
	PlayerMode.DIE		= 128;	PlayerMode.DEAD		= 128;	PlayerMode.KILLED	= 128;
	PlayerMode.TIMEOVER	= 256;
	PlayerMode.GOAL		= 512;	PlayerMode.FLAG		= 512;
	PlayerMode.AXE		= 1024;
	PlayerMode.PAUSE	= 2048;
	PlayerMode.SCROLL	= 4096;
	PlayerMode.DOKAN_DOWN 		= 0x002000;// 8192
	PlayerMode.DOKAN_DOWN_OUT 	= 0x004000;
	PlayerMode.DOKAN_UP 		= 0x008000;
	PlayerMode.DOKAN_UP_OUT 	= 0x010000;
	PlayerMode.DOKAN_LEFT 		= 0x020000;
	PlayerMode.DOKAN_LEFT_OUT 	= 0x040000;
	PlayerMode.DOKAN_RIGHT 		= 0x080000;
	PlayerMode.DOKAN_RIGHT_OUT	= 0x100000;
	PlayerMode.TSUTA_UP			= 0x200000;
	PlayerMode.TSUTA_UP_OUT		= 0x400000;
	
	PlayerMode.parse = function(str){
		//if(NaN(str))return parseInt(str);
		return (PlayerMode[str]) ? PlayerMode[str] : parseInt(str);
	}
}
PlayerMode();
function WarpMode(){
	WarpMode.DOKAN_DOWN 		= 0x002000;// 8192
	WarpMode.DOKAN_DOWN_OUT 	= 0x004000;
	WarpMode.DOKAN_UP 		= 0x008000;
	WarpMode.DOKAN_UP_OUT 	= 0x010000;
	WarpMode.DOKAN_LEFT 		= 0x020000;
	WarpMode.DOKAN_LEFT_OUT 	= 0x040000;
	WarpMode.DOKAN_RIGHT 		= 0x080000;
	WarpMode.DOKAN_RIGHT_OUT	= 0x100000;
	WarpMode.TSUTA_UP			= 0x200000;
	WarpMode.TSUTA_UP_OUT		= 0x400000;
}
WarpMode();

function Player(PAD,x,y,option){
	
 //状態 ---
	this.XX=0;	   if(x)this.XX=x;
	this.YY=0;	   if(y)this.YY=y;

		// "normal" "super" //"fire" "mantle"
	this.mode=PlayerMode.NORMAL;if(option)this.mode=option;


	this.fire=false;
	this.fireFlag=false;
	this.jumpFlag=false;
	this.climbFlag=false;
	this.sitdown=false;

	this.oldXX=this.XX;
	this.oldYY=this.YY;

	this.alive  = 1;
	this.star   = false;
	 this.starTimer=0;
	 this.starTimerLength=30*8;
	this.ghost = false; // ダメージで半透明
	  this.ghostTimer=0;
	  this.ghostTimerLength=45;
	this.coins  = 0;
	this.score  = 0;
	this.jumpBonus = 0;
	 this.steponFlag=0;
	this.starBonus = 0;
	 this.actionMode="run";


	this.animateFlag=false;
	this.animateCounter=0;
	this.animateMode="";

	this.life=3;

	this.innerTimer=0;

 	// 顔の向き
	this.vFace=0; // 1 = up    -1 = down
	this.hFace=1; // 1 = right -1 = left
 //状態 --->
	
 //移動パラメータ ---
	this.xMove=0;
	this.xSpeedMax=3.5;
	this.xSpeedMaxTurbo=11;
	this.xSpeedMin=.3;
	this.xBrakeSlow = .88;
	this.xBrakeQuick=.6;
	this.xBrakeSliding = .93
	this.xAccel=.4;
	this.xAccelTurbo=.8;
	this.xBounce=0;
	
	this.yMove=0;
	this.yAccel=3;
	this.yDropSpeedMax=20;
	this.yJump    =26.6;//26.7;
	 
	this.yJumpHigh=32.1;//31.98;
	this.yJumpSpeeddown=.6;
	this.yBounce=-.3;
	this.yClimbSpeed=4;

	 this.xSpeedMaxSwim=6;
	 this.yJumpSwim=9.01;
	 this.yAccelSwim=1;
	 this.yDropSpeedMaxSwim=8;
	
	this.xScroll=0;
	this.yScroll=0;
 //移動パラメータ --->

	this.imgStand = "img/PLstand";
	this.imgWalk  = "img/PLwalk";
	this.imgRun   = "img/PLrun";
	this.imgJump  = "img/PLjump";
	this.imgBrake = "img/PLbrake";
	this.imgDie   = "img/PLdie";
	this.imgFire  = "img/PLfire";
	this.imgSit   = "img/PLsit";
	this.imgClimb = "img/PLwall.gif"; // ツタ・壁上り　停止中
	this.imgClimbMove= "img/PLwallC.gif";// 移動中
	this.imgSwim = "img/PLswim"; 
	this.imgSwimMove= "img/PLswimB";
	this.imgBar   = "img/PLbar";// ポール
	
	this.plRight = "R.gif";
	this.plLeft  = "L.gif";

	
	this.face=this.imgStand+this.plRight;


	this.mind=MindCode.PLAYER;

	this.charWidth  = BGBLOCKSIZE_X;
	this.charHeight = BGBLOCKSIZE_Y;
	this.charBodyWidth=24;
	this.charBodyHeight=24;
	this.charSpriteWidth=32;
	this.charSpriteHeight=32;

	this.charSmallHeight=24;
	this.charBigHeight=48;
	this.charSmallSpriteHeight=32;
	this.charBigSpriteHeight=56;

	this.o=new Sprite();
	this.o.setBitmap(this.face,this.charSpriteWidth,this.charSpriteHeight);
//	this.o.moveTo(this.XX,this.YY,false);
//	this.o.setSpriteVisibility(true,false);
	this.o.setSpriteZPosition(1000);
	this.Body=this.o.Body;
	
	this.myPAD=PAD;


	this.fireball=new FireballGroup(this);
	this.lockObject=null;

	
	this.action=actPlayer;
	this.show  =showPlayer;
	this.specialAction=plSpecialAction;


	this.onCollision=playerOnCollision;
	this.collition=enemyCollision;

	this.setMode = setPLMode;;
	this.setAnimate = setAnimatePLMode;

	this.damage  = plDamage;
	this.die     = plDie;
	this.kill     = plDie;
	this.getBonus = getBonus;
	this.getItem = getItem;
	this.getScore= function(n,sh){
		this.score+=n;updateScoreBoard(this);
		if(sh==true)createEffect(this.XX,this.YY-50,EffectCode.SCORE,n);
	};


	this.stepOnEnemy = stepOnEnemy;
	this.getStarBonus = getStarBonus;

	createCacheImage("PLAYER",
		this.imgStand+this.plRight,	this.imgStand+this.plLeft,
		this.imgRun+this.plRight,	this.imgRun+this.plLeft,
		this.imgJump+this.plRight,	this.imgJump+this.plLeft,
		this.imgBrake+this.plRight,	this.imgBrake+this.plLeft,
		this.imgDie+this.plRight,	this.imgDie+this.plLeft,
		this.imgFire+this.plRight,	this.imgFire+this.plLeft,
		this.imgSit+this.plRight,	this.imgSit+this.plLeft,
		this.imgClimb+this.plRight,	this.imgClimb+this.plLeft,
		this.imgSwim+this.plRight,	this.imgSwim+this.plLeft,
		this.imgSwimMove+this.plRight,	this.imgSwimMove+this.plLeft,
		this.imgWall+".gif",	this.imgWallMove+".gif"
	);
	if(this.mode!=PlayerMode.NORMAL)this.setMode(this.mode);
	this.show();
} // 

function actPlayer(){
 with(this){
  xScroll=0;
  yScroll=0;
	innerTimer++;
  switch(actionMode){
	case "run":
		actPlayerRun(this);
	break;
	case "swim":
		actPlayerSwim(this);
	break;
  }
  fireball.action();
  if(--ghostTimer==0)setMode(PlayerMode.NONGHOST);
  if(--starTimer==0)setMode(PlayerMode.LOSTSTAR);
  else
  if(starTimer>0){
		if(starTimer<=30 && starTimer%6==0){
			createEffect(XX+charWidth,YY,EffectCode.SCORE,"★"+(starTimer/6).toString(),this);
		}
	if(document.all)
	 Body.style.background=(parseInt(starTimer/4%2)==0)?"gold":"";
	else
	 createEffect(XX+Math.random()*charBodyWidth,YY+Math.random()*charBodyHeight,EffectCode.SCORE,'<span style="color:yellow;font-size:10px;">★</span>');
	
  }
  xScroll+=xMove;
  yScroll+=yMove;
 }
} //

function actPlayerRun(plObj){
 with(plObj){
	oldXX=XX;
	oldYY=YY;

	if(steponFlag==10000){ // なにかを踏みつけたフラグ
	 yMove=-20.1;
	 if(myPAD.buttons[1]==1)yMove-=20.1;
	 steponFlag=3;
	 jumpFlag=true;
	}
	
	
  if(mode!=PlayerMode.NORMAL && yMove == 0){
	if(myPAD.y>0 && !climbFlag){ // しゃがむ
		charBodyHeight=charSmallHeight;
		charSpriteHeight=charSmallSpriteHeight;
		if(!sitdown){
//		if(charBodyHeight == charBigHeight){
			YY+=(charBigHeight-charSmallHeight);
			o.setSize(charSpriteWidth,charSpriteHeight);
			o.moveTo(XX,YY,false);
		}
		sitdown=true;
	}else
	if(myPAD.y<=0 || climbFlag){ //立つ
		charBodyHeight=charBigHeight;
		charSpriteHeight=charBigSpriteHeight;
		if(sitdown){
//		if(charBodyHeight != charBigHeight){
			YY-=(charBigHeight-charSmallHeight);
			o.setSize(charSpriteWidth,charSpriteHeight);
			o.moveTo(XX,YY,false);
		}
		sitdown=false;
	}
 }
	// しゃがむ-->
///*


// 左右移動
	var xAccelT=xAccel;
	 if(yMove!=0)xAccelT*=.8;
	 else 
	 if(myPAD.buttons[0]==1)xAccelT=xAccelTurbo;

	var xMoveABS=Math.abs(xMove);
	if(yMove==0 && myPAD.x==0){
	   if(!sitdown)
		xMove*= xBrakeSlow; 
	   else
		xMove*= xBrakeSliding; 
	 if(Math.abs(xMove)<=xSpeedMin)xMove=myPAD.x;
	}else
	if(yMove==0 && sitdown){
		xMove*= xBrakeSliding; 
	}else{
	  var mp=xMove*myPAD.x;
	  if(mp > 0)xMove += xAccelT*(xMove/xMoveABS);
	  else
	  if(mp < 0)xMove *= xBrakeQuick;
	  else
	  if(mp==0)xMove*=xBrakeSlow;


	xMoveABS=Math.abs(xMove);
	   if(xMoveABS > xSpeedMaxTurbo -1)
		xMove=xSpeedMaxTurbo*(xMove/xMoveABS);
	  if(myPAD.buttons[0]!=1){
	xMoveABS=Math.abs(xMove);
	   if(xMoveABS > xSpeedMax){
		xMove*=xBrakeSlow;
		xMoveABS=Math.abs(xMove);
//		 if(xMoveABS < xSpeedMax)xMove=xSpeedMax*(xMove/xMoveABS);
	   }
	  }
	 if(Math.abs(xMove)<=xSpeedMin)xMove=xSpeedMin*myPAD.x;
	}


	// 落下とジャンプ------------(常に落下している)
	if(climbFlag){ //ツタ
	 yMove=0;
	  yMove=myPAD.y*yClimbSpeed;
	 if(myPAD.buttons[1] == 1){
		climbFlag=false;
		jumpFlag=false;
	 }
	}

	if(!climbFlag){
	 if(myPAD.buttons[1] == 1 && !jumpFlag && yMove==0){
//	  if(Math.abs(xMove)>xSpeedMax)
	  if(Math.abs(xMove)>=xSpeedMaxTurbo-2)
		yMove=-yJumpHigh;
	   else
		yMove=-yJump;
	  jumpFlag=true;
	 }else{
	  if( myPAD.buttons[1] < 1 && yMove < 0 && steponFlag<=0)yMove*=yJumpSpeeddown;

	  yMove+=yAccel;
	  if(yMove>yDropSpeedMax)yMove=yDropSpeedMax;
	 }
	}
	// 落下------------>


	if(yMove>0){ //落下中
	 var flPoint=YY+charBodyHeight+yMove;
	 var floorL=getXYpointObject(XX,flPoint);
	 var floorR=getXYpointObject(XX+charBodyWidth-1,flPoint);
//	 if(flPoint%charHeight<charHeight*.1 || yMove>5){
	  if(checkFloorBlock(floorL) > 0 || checkFloorBlock(floorR) > 0){
		jumpBonus=0;
		if(parseInt(flPoint/charHeight)!=parseInt(YY/charHeight)){
		 YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
		 yMove=0;
		 if(myPAD.buttons[1]==0)jumpFlag=false;
		}
	  }
//	 }
	}
	else
	if(yMove<0){ //上昇中
	 var flPoint=YY+yMove/2;
	 var blockHead=getXYpointObject(XX+charBodyWidth/2,flPoint);
	  if(checkUpperBlock(blockHead) > 0){
		upperBlock(blockHead,XX+charBodyWidth/2,flPoint,plObj);
		YY=parseInt(flPoint/charHeight + 1)*charHeight;
		yMove=0.1;
		eventUpperBlock(plObj,blockHead);
	  }
	}
	else{
	}


	//地形判定---------

// if(mode=="normal"){ //チビ
   if(charBodyHeight<charHeight){//チビ
	var blockP=getXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2);
	var blockPL=getXYpointObject(XX+1,YY+charBodyHeight*.3);
	var blockPR=getXYpointObject(XX+charBodyWidth-1,YY+charBodyHeight*.3);

	
		var bp =checkWallBlock(blockP);
		var bpl=checkWallBlock(blockPL);
		var bpr=checkWallBlock(blockPR);
	if(bpl > 0 && bpr < 0){ // 左めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth;
		 if(xMove<0)xMove=0;
	}
	else 
	if(bpl < 0 && bpr > 0){ //右めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth-charBodyWidth;
		 if(xMove>0)xMove=0;
	}else
	if(bp>0){ // 完全めりこみ (顔と反対方向に押し出す)
		xMove=0;XX-=4*hFace;
	}

	 if(bp!=-3)climbFlag=false;
	else
	if(myPAD.y < 0){ // ツタ & レバーを上
		climbFlag=true;
		xMove=0;
	 }

	if(blockP>0){ // 背景のオブジェクトをチェック
	 var p=checkEventBlock(blockP);
	 if(p==99)eventGoalBlock(plObj,blockP);
	  else
	 if(p>0)eventPointBlock(plObj,blockP);
	}

	var coinflag=false;// ２重ゲットしないためのフラグ
	//コイン判定
	if(blockPL > 0){
	  var c=checkCoin(blockPL);
	  if(c>0){
		  setXYpointObject(XX+1,YY+charBodyHeight*.3,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	  }
	}
	if(!coinflag){
	  var c=checkCoin(blockPR);
	  if(c>0){
		  setXYpointObject(XX+charBodyWidth-1,YY+charBodyHeight*.3,0);
		  getItem(ItemCode.COIN);
	  }
	}


	if(xMove>0){
	 var blPoint=XX+charBodyWidth+xMove;
	 var blockR=getXYpointObject(blPoint,YY+charBodyHeight*.7);
		if(checkWallBlock(blockR)>0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth;
		 xMove*=xBounce;
		}
	}
	else 
	if(xMove<0){
	 var blPoint=XX+xMove;
	 var blockL=getXYpointObject(blPoint,YY+charBodyHeight*.7);
		if(checkWallBlock(blockL)>0){
		 XX=parseInt(blPoint/charWidth + 1)*charWidth;
		 xMove*=xBounce;
		}
	}
 }else{ // スーパーモード
   var blCenterX = XX+charBodyWidth/2;
   var blRightX  = XX+charBodyWidth;
   var blLeftX   = XX;
   var yyHead = YY+charBodyHeight*.2;
   var yyFoot = YY+charBodyHeight*.75;
    //頭側
	var blockHP  = getXYpointObject(blCenterX,yyHead);
	var blockHPL = getXYpointObject(blLeftX  ,yyHead);
	var blockHPR = getXYpointObject(blRightX ,yyHead);
    //足側
	var blockFP  = getXYpointObject(blCenterX,yyFoot);
	var blockFPL = getXYpointObject(blLeftX  ,yyFoot);
	var blockFPR = getXYpointObject(blRightX ,yyFoot);

	
	var bpH =checkWallBlock(blockHP);
	var bpF =checkWallBlock(blockFP);
	var bpHL=checkWallBlock(blockHPL);
	var bpHR=checkWallBlock(blockHPR);
	var bpFL=checkWallBlock(blockFPL);
	var bpFR=checkWallBlock(blockFPR);

	if( (bpHL > 0 || bpFL > 0) && (bpHR < 0 && bpFR < 0) ){ // 左めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth;
		 if(xMove<0)xMove=0;
	}
	else 
	if( (bpHL < 0 && bpFL < 0) && (bpHR > 0 || bpFR > 0) ){ //右めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth-charBodyWidth;
		 if(xMove>0)xMove=0;
	}
	else
	if(bpH > 0 || bpF > 0){ // 完全めりこみ (顔と反対方向に押し出す)
		xMove=0;XX-=4*hFace;
	}


//	 if((bpHL!=-3 && bpHR!=-3))climbFlag=false;
	 if(bpH!=-3)climbFlag=false;
	 else
	 if( myPAD.y < 0){ // ツタ & レバーを上
		climbFlag=true;
		xMove=0;
//		jumpBonus=0;
	 }

	if(blockHP>0 || blockFP>0){
	 var p  = checkEventBlock(blockHP);
	 var p2 = checkEventBlock(blockFP);
	  var blockTMP=blockHP;
	 if(p2 > p){p=p2;blockTMP=blockFP;}

	 if(p  == 99)eventGoalBlock( plObj,blockTMP);
	  else
	 if(p  >  0)eventPointBlock(plObj,blockTMP);
	}

	var coinflag=false;// ２重ゲットしないためのフラグ
	  if(blockHPL > 0){
	   var c=checkCoin(blockHPL);
	   if(c>0){
		  setXYpointObject(blLeftX  ,yyHead,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockHPR);
	   if(c>0){
		  setXYpointObject(blRightX ,yyHead,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockFPL);
	   if(c>0){
		  setXYpointObject(blLeftX  ,yyFoot,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockFPR);
	   if(c>0){
		  setXYpointObject(blRightX ,yyFoot,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
//*/

	if(xMove>0){
	 var blPoint=XX+charBodyWidth+xMove;
	 var blockHR=getXYpointObject(blPoint,yyHead);
	 var blockFR=getXYpointObject(blPoint,YY+charBodyHeight*.85);
		if(checkWallBlock(blockHR) > 0 || checkWallBlock(blockFR) > 0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth;
		 xMove*=xBounce;
		}
	}
	else 
	if(xMove<0){
	 var blPoint=XX+xMove;
	 var blockHL=getXYpointObject(blPoint,yyHead);
	 var blockFL=getXYpointObject(blPoint,YY+charBodyHeight*.85);
		if(checkWallBlock(blockHL) > 0 || checkWallBlock(blockFL) > 0){
		 XX=parseInt(blPoint/charWidth +1)*charWidth;
		 xMove*=xBounce;
		}
	}
 } //



	XX+=xMove;
	YY+=yMove;

	//地形判定--------->


	// 顔の向き --
	 var facetmp=face;
	  if( (yMove <= yAccel && yMove >= 0 && !jumpFlag) || yMove==0){ // 空中では方向転換しない
		if(myPAD.x > 0)hFace=1;
		else if(myPAD.x < 0)hFace=-1;
	  }

	  if(yMove < 0 && !sitdown){ //上昇中
		facetmp=imgJump;
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);
	  }else
	  if(yMove > yAccel){
		if(!sitdown)facetmp=imgJump;
		else facetmp=imgSit;
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);
	  }
	  else {
		if(xMove * hFace < 0 )facetmp=imgBrake;
		else 
		if(Math.abs(xMove)>=xSpeedMaxTurbo-1)facetmp=imgRun;
		else
		if(Math.abs(xMove)>0)facetmp=imgWalk;
		else
		facetmp=imgStand;

		if(sitdown)facetmp=imgSit; // しゃがんでる
		
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);

	  }
	  if(climbFlag){
		face=(yMove!=0)?imgClimbMove:imgClimb;
	  }else
	// 顔の向き -->

	// ファイアー発射
	if(fire && !sitdown){
	 if(myPAD.buttons[0]==1 && !fireFlag){
	  fireball.call();fireFlag=true;
	 }
	 if(myPAD.buttons[0]==0)fireFlag=false;
	}



	 steponFlag--;


	if(XX < WIN.SCROLL_LEFT){
		XX=WIN.SCROLL_LEFT;
		if(xMove<0)xMove=0;
	}
	else
	if(XX +charBodyWidth> WIN.SCROLL_LEFT + SCREEN_X){
		XX=WIN.SCROLL_LEFT + SCREEN_X-charBodyWidth;
		if(xMove>0)xMove=0;
	}

	if(YY > WIN.SCROLL_Y_MAX + SCREEN_Y*.5)eventPlayerDrop(plObj);




 } // end with
} // 

function actPlayerSwim(plObj){
 with(plObj){
	oldXX=XX;
	oldYY=YY;

  if(mode!=PlayerMode.NORMAL && yMove == 0){
	if(myPAD.y>0){ // しゃがむ
//		if(!sitdown){
		charBodyHeight=charSmallHeight;
		if(charSpriteHeight == charBigSpriteHeight){
			charSpriteHeight=charSmallSpriteHeight;
			if(!sitdown)YY+=(charBigHeight-charSmallHeight);
			o.setSize(charSpriteWidth,charSpriteHeight);
			o.moveTo(XX,YY,false);
		}
//		charSpriteHeight=charSmallSpriteHeight;
		sitdown=true;
	}else
	if(myPAD.y<=0){ //立つ
//		if(sitdown){
//		if(charBodyHeight != charBigHeight){
		charBodyHeight=charBigHeight;
		if(charSpriteHeight != charBigSpriteHeight){
			YY-=(charBigHeight-charSmallHeight);
			charSpriteHeight=charBigSpriteHeight;
			o.setSize(charSpriteWidth,charSpriteHeight);
			o.moveTo(XX,YY,false);
		}
		sitdown=false;
	}
 }else{
   if(mode!=PlayerMode.NORMAL){ //しゃがみ泳ぎ
	if(myPAD.y>0){
	 if(charSpriteHeight != charBigSpriteHeight){
		//YY+=(charBigHeight-charSmallHeight);
		charSpriteHeight=charBigSpriteHeight;
		o.setSize(charSpriteWidth,charSpriteHeight);
		o.moveTo(XX,YY,false);
	 }
	 }else
	 if(myPAD.y<=0){ //立つ
		charBodyHeight=charBigHeight;
		if(sitdown){
			YY-=(charBigHeight-charSmallHeight);
			sitdown=false;
		}
	 }
   }
 }
	// しゃがむ-->

// 左右移動
	var xAccelT=xAccel;
	 if(yMove!=0)xAccelT*=.5;
	var xMoveABS=Math.abs(xMove);
	if(yMove==0 && myPAD.x==0){
	   if(!sitdown)
		xMove*= xBrakeSlow; 
	   else
		xMove*= xBrakeSliding; 
	 if(Math.abs(xMove)<=xSpeedMin)xMove=myPAD.x;
	}else
	if(yMove==0 && sitdown){
		xMove*= xBrakeSliding; 
	}else{
	  if(xMove*myPAD.x > 0)	xMove += xAccelT*(xMove/xMoveABS);
	  else			xMove *= xBrakeQuick;// Brake!


	xMoveABS=Math.abs(xMove);
	   if(xMoveABS > xSpeedMaxSwim -2)
		xMove=xSpeedMaxSwim*(xMove/xMoveABS);
	 if(Math.abs(xMove)<=xSpeedMin)xMove=myPAD.x;
	}

//*/

	// 落下とジャンプ------------(常に落下している)

	 if(myPAD.buttons[1] == 1 && !jumpFlag){
		yMove=-yJumpSwim;
	  jumpFlag=true;
	 }else{
	  yMove+=yAccelSwim;
	  if(yMove>yDropSpeedMaxSwim)yMove=yDropSpeedMaxSwim;
	 }

	// 落下------------>

	if(yMove>0){ //落下中
	 var flPoint=YY+charBodyHeight+yMove;
	 var floorL=getXYpointObject(XX,flPoint);
	 var floorR=getXYpointObject(XX+charBodyWidth-1,flPoint);
	  if(checkFloorBlock(floorL) > 0 || checkFloorBlock(floorR) > 0){
		jumpBonus=0;
		if(parseInt(flPoint/charHeight)!=parseInt(YY/charHeight)){
		 YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
		 yMove=0;
		}
	  }

	}
	else
	if(yMove<0){ //上昇中
	 var flPoint=YY+yMove/2;
	 var blockHead=getXYpointObject(XX+charBodyWidth/2,flPoint);
	  if(checkUpperBlock(blockHead) > 0){
		YY=parseInt(flPoint/charHeight + 1)*charHeight;
		yMove=0.1;
	  }
	}
	else{
	}

   if(charBodyHeight<charHeight){//チビ
	var blockP=getXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2);
	var blockPL=getXYpointObject(XX+1,YY+charBodyHeight*.3);
	var blockPR=getXYpointObject(XX+charBodyWidth-1,YY+charBodyHeight*.3);

	
		var bp =checkWallBlock(blockP);
		var bpl=checkWallBlock(blockPL);
		var bpr=checkWallBlock(blockPR);
	if(bpl > 0 && bpr < 0){ // 左めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth;
		 if(xMove<0)xMove=0;
	}
	else 
	if(bpl < 0 && bpr > 0){ //右めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth-charBodyWidth;
		 if(xMove>0)xMove=0;
	}else
	if(bp>0){ // 完全めりこみ (顔と反対方向に押し出す)
		xMove=0;XX-=4*hFace;
	}

	var ws =checkWaterStream(blockP);
	if(ws>0){
	  switch(ws){
		case 1:
		 XX-=3;
		 xScroll-=3;
		case 2:
		 XX+=3;
		 xScroll+=3;
		case 3:
		 YY+=5;
	  }
	}


	if(blockP>0){ // 背景のオブジェクトをチェック
	 var p=checkEventBlock(blockP);
	 if(p==99)eventGoalBlock(plObj,blockP);
	  else
	 if(p>0)eventPointBlock(plObj,blockP);
	 else{
	 }
	}
		var coinflag=false;// ２重ゲットしないためのフラグ
		//コイン判定
		if(blockPL > 0){
		  var c=checkCoin(blockPL);
		  if(c>0){
			  setXYpointObject(XX+1,YY+charBodyHeight*.3,0);
			  getItem(ItemCode.COIN);
			  coinflag=true;
		  }
		}
		if(!coinflag){
		  var c=checkCoin(blockPR);
		  if(c>0){
			  setXYpointObject(XX+charBodyWidth-1,YY+charBodyHeight*.3,0);
			  getItem(ItemCode.COIN);
		  }
		}


	if(xMove>0){
	 var blPoint=XX+charBodyWidth+xMove;
	 var blockR=getXYpointObject(blPoint,YY+charBodyHeight*.7);
		if(checkWallBlock(blockR)>0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth;
		 xMove*=xBounce;
		}
	}
	else 
	if(xMove<0){
	 var blPoint=XX+xMove;
	 var blockL=getXYpointObject(blPoint,YY+charBodyHeight*.7);
		if(checkWallBlock(blockL)>0){
		 XX=parseInt(blPoint/charWidth + 1)*charWidth;
		 xMove*=xBounce;
		}
	}
 }else{ // スーパーモード
   var blCenterX = XX+charBodyWidth/2;
   var blRightX  = XX+charBodyWidth;
   var blLeftX   = XX;
   var yyHead = YY+charBodyHeight*.2;
   var yyFoot = YY+charBodyHeight*.75;
    //頭側
	var blockHP  = getXYpointObject(blCenterX,yyHead);
	var blockHPL = getXYpointObject(blLeftX  ,yyHead);
	var blockHPR = getXYpointObject(blRightX ,yyHead);
    //足側
	var blockFP  = getXYpointObject(blCenterX,yyFoot);
	var blockFPL = getXYpointObject(blLeftX  ,yyFoot);
	var blockFPR = getXYpointObject(blRightX ,yyFoot);

	
	var bpH =checkWallBlock(blockHP);
	var bpF =checkWallBlock(blockFP)
	var bpHL=checkWallBlock(blockHPL);
	var bpHR=checkWallBlock(blockHPR);
	var bpFL=checkWallBlock(blockFPL);
	var bpFR=checkWallBlock(blockFPR);

	if( (bpHL > 0 || bpFL > 0) && (bpHR < 0 && bpFR < 0) ){ // 左めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth;
		 if(xMove<0)xMove=0;
	}
	else 
	if( (bpHL < 0 && bpFL < 0) && (bpHR > 0 || bpFR > 0) ){ //右めりこみ
		 XX=parseInt(XX/charWidth + 1)*charWidth-charBodyWidth;
		 if(xMove>0)xMove=0;
	}
	else
	if(bpH > 0 || bpF > 0){ // 完全めりこみ (顔と反対方向に押し出す)
		xMove=0;XX-=4*hFace;
	}


	var ws =checkWaterStream(blockFP);
	if(ws>0){
	  switch(ws){
		case 1:
		 XX-=3;
		 xScroll-=3;
		case 2:
		 XX+=3;
		 xScroll+=3;
		case 3:
		 YY+=5;
	  }
	}


	if(blockHP>0 || blockFP>0){
	 var p  = checkEventBlock(blockHP);
	 var p2 = checkEventBlock(blockFP);
	  var blockTMP=blockHP;
	 if(p2 > p){p=p2;blockTMP=blockFP;}

	 if(p  == 99)eventGoalBlock( plObj,blockTMP);
	  else
	 if(p  >  0)eventPointBlock(plObj,blockTMP);
	}


	var coinflag=false;// ２重ゲットしないためのフラグ
	  if(blockHPL > 0){
	   var c=checkCoin(blockHPL);
	   if(c>0){
		  setXYpointObject(blLeftX  ,yyHead,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockHPR);
	   if(c>0){
		  setXYpointObject(blRightX ,yyHead,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockFPL);
	   if(c>0){
		  setXYpointObject(blLeftX  ,yyFoot,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }
	  if(!coinflag){
	   var c=checkCoin(blockFPR);
	   if(c>0){
		  setXYpointObject(blRightX ,yyFoot,0);
		  getItem(ItemCode.COIN);
		  coinflag=true;
	   }
	  }

	if(xMove>0){
	 var blPoint=XX+charBodyWidth+xMove;
	 var blockHR=getXYpointObject(blPoint,yyHead);
	 var blockFR=getXYpointObject(blPoint,YY+charBodyHeight*.85);
		if(checkWallBlock(blockHR) > 0 || checkWallBlock(blockFR) > 0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth;
		 xMove*=xBounce;
		}
	}
	else 
	if(xMove<0){
	 var blPoint=XX+xMove;
	 var blockHL=getXYpointObject(blPoint,yyHead);
	 var blockFL=getXYpointObject(blPoint,YY+charBodyHeight*.85);
		if(checkWallBlock(blockHL) > 0 || checkWallBlock(blockFL) > 0){
		 XX=parseInt(blPoint/charWidth +1)*charWidth;
		 xMove*=xBounce;
		}
	}
 }
	XX+=xMove;
	YY+=yMove;

	//地形判定--------->



	// 顔の向き --
	 var facetmp="";

		if(myPAD.x > 0)hFace=1;
		else if(myPAD.x < 0)hFace=-1;
	  if(yMove < -9 ){ //上昇中
		facetmp=imgSwimMove;
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);
	  }else
	  if(yMove != 0){
		facetmp=imgSwim;
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);
	  }
	  else {
		if(xMove * hFace < 0 )facetmp=imgBrake;
		else 
		if(Math.abs(xMove)>0 )facetmp=imgWalk;
		else
		facetmp=imgStand;

		if(sitdown)facetmp=imgSit; // しゃがんでる
		
		face=facetmp+((hFace > 0 ) ? plRight : plLeft);

	  }

	// ファイアー発射
	if(fire && (!sitdown || yMove!=0)){
	 if(myPAD.buttons[0]==1 && !fireFlag){
	  fireball.call();fireFlag=true;
	 }
	 if(myPAD.buttons[0]==0)fireFlag=false;
	}

	 if(myPAD.buttons[1]==0)jumpFlag=false;


	if(innerTimer%40==0)
		createEffect(XX+charBodyWidth/2,YY,EffectCode.AWA);



	if(XX < WIN.SCROLL_LEFT){
		XX=WIN.SCROLL_LEFT;
		if(xMove<0)xMove=0;
	}
	else
	if(XX +charBodyWidth> WIN.SCROLL_LEFT + SCREEN_X){
		XX=WIN.SCROLL_LEFT + SCREEN_X-charBodyWidth;
		if(xMove>0)xMove=0;
	}

	if(YY < WIN.SCROLL_Y_MIN)YY=WIN.SCROLL_Y_MIN;
	else
	if(YY > WIN.SCROLL_Y_MAX + (charSpriteHeight-charHeight))eventPlayerDrop(plObj);
//	if(YY > WIN.SCROLL_TOP+SCREEN_Y)eventPlayerDrop(plObj);

 }
} //

function setPLMode(m,flag){
 with(this){
  if(flag){
	animateFlag=true;
	animateMode=m;
	return;
  }
  switch(m){
	case PlayerMode.FLOWER:
//	case "FLOWER":
//	case "FIRE":
//	case "fire":
	 if(mode != PlayerMode.NORMAL){
		fire=true;
		mode=PlayerMode.FIRE;
	 }
	case PlayerMode.SUPER:
//	case "KINOKO":
//	case "SUPER":
//	case "super":
	 if(charBodyHeight!=charBigHeight){
		oldYY=this.YY-=(charBigHeight-charSmallHeight);
		charBodyHeight=charBigHeight;
		charSpriteHeight=charBigSpriteHeight;
		o.setSize(charSpriteWidth,charSpriteHeight);
	 }
		if(!fire)mode=PlayerMode.SUPER;
	break;

//	case "ghost":
//	case "GHOST":
//	case PlayerMode.STAR:
	case PlayerMode.GHOST:
	 ghost=true;
	 ghostTimer=ghostTimerLength;
	 o.setOpacity(50);
	case PlayerMode.NORMAL:
//	case "NORMAL":
//	case "normal":
//	case "chibi":
	 if(charBodyHeight!=charSmallHeight){
		oldYY=this.YY+=(charBigHeight-charSmallHeight);
		charBodyHeight=charSmallHeight;
		charSpriteHeight=charSmallSpriteHeight;
		o.setSize(charSpriteWidth,charSpriteHeight);
		fire=false;
	 }
		sitdown=false;
		mode=PlayerMode.NORMAL;
	break;
	case PlayerMode.NONGHOST:
//	case "nonghost":
	 ghost=false;
	 ghostTimer=0;
	 o.setOpacity(100);
	break;
	case PlayerMode.LOSTSTAR:
	case "loststar":
	 star=false;
	 starTimer=0;
	 starBonus=0;
	 o.Body.style.background="";
	break;
	case PlayerMode.DIE:
	case PlayerMode.DEAD:
	case PlayerMode.KILLED:
	case PlayerMode.TIMEOVER:
	 die();
	break;
  }
 }
} //

function setAnimatePLMode(anim){
 with(this){
	animateFlag=true;
	animateMode=anim;
	animateCounter=0;
 }
} //

function plSpecialAction(){
 with(this){
	innerTimer++;
  if(mode!=PlayerMode.NORMAL && sitdown && 
		!(animateMode == PlayerMode.DOKAN_DOWN || animateMode == PlayerMode.DOKAN_DOWN_OUT)){
	charBodyHeight=charBigHeight;
	charSpriteHeight=charBigSpriteHeight;
	YY-=(charBigHeight-charSmallHeight);
	o.setSize(charSpriteWidth,charSpriteHeight);
//	o.moveTo(XX,YY,false);
	sitdown=false;
  }
  switch(PlayerMode.parse(animateMode)){
	case PlayerMode.FLOWER:
	if(mode!=PlayerMode.NORMAL){
	  if(animateCounter==0)animateCounter=15;
	  animFire(this,animateCounter,15);
	  yMove=0;jumpFlag=false;
	 break;
	}
	case PlayerMode.SUPER:
	 if(animateCounter==0)animateCounter=15;
	 animKinoko(this,animateCounter,15);
	 yMove=0;jumpFlag=false;
	break;

	case PlayerMode.GHOST:
	 if(animateCounter==0)animateCounter=30;
	 animDamage(this,animateCounter,30);
	 yMove=0;jumpFlag=false;
	break;

	case PlayerMode.DIE:
	case PlayerMode.KILLED:
	case PlayerMode.DEAD:
	case PlayerMode.TIMEOVER:
	 if(animateCounter==0)animateCounter=40;
	 animDie(this,animateCounter,40);
	break;
	case PlayerMode.GOAL:
	 if(animateCounter==0)animateCounter=-1;
	 animGoal(this,animateCounter,-1);
	break;
	case PlayerMode.AXE:
	 if(animateCounter==0)animateCounter=-1;
	 animAxe(this,animateCounter,-1);
	break;
	case PlayerMode.TIMEBONUS:
	 if(animateCounter==0)animateCounter=-1;
	 animGoalTimeBonus(this,animateCounter,-1);
	break;
	case PlayerMode.DOKAN_UP:		case PlayerMode.DOKAN_DOWN:
	case PlayerMode.DOKAN_LEFT:		case PlayerMode.DOKAN_RIGHT:
	case PlayerMode.DOKAN_UP_OUT:	case PlayerMode.DOKAN_DOWN_OUT:
	case PlayerMode.DOKAN_LEFT_OUT:	case PlayerMode.DOKAN_RIGHT_OUT:
	case PlayerMode.TSUTA_UP:		case PlayerMode.TSUTA_UP_OUT:
	 if(animateCounter==0)animateCounter=24;
	 animDokan(this,animateCounter,24,animateMode);
	break;
	case PlayerMode.PAUSE:
	 animateCounter=lockObject.action();
	break;
	
	case PlayerMode.SCROLL:
	 if(animateCounter==0)animateCounter=30;
	 animScroll(this,animateCounter,30,animateMode);
	break;
  }
  if(--animateCounter==0){
	setMode(animateMode,false);
	animateFlag=false;
	animateMode="";
  }
 }
 return 1;
} //

function animKinoko(obj,cnt,mcnt){
 var bh=obj.charBigSpriteHeight;
 var p=(mcnt-cnt)/mcnt;
  var sh=obj.charSmallSpriteHeight;
  obj.o.setSize(obj.charBodyWidth,sh+(bh-sh)*p);
  obj.charSpriteHeight=sh+(bh-sh)*p;

} //
function animFire(obj,cnt,mcnt){
 var p=(mcnt-cnt);
  obj.Body.style.background=( parseInt(p/3%2)==0)?"red":"";

 if(cnt==1)obj.Body.style.background="";
} //
function animDamage(obj,cnt,mcnt){
 if(cnt==mcnt)obj.o.setOpacity(50);
 var bh=obj.charBigSpriteHeight;
 var p=(mcnt-cnt)/mcnt;
  var sh=obj.charSmallSpriteHeight;
  obj.o.setSize(obj.charBodyWidth,bh-(bh-sh)*p);
  obj.charSpriteHeight=bh-(bh-sh)*p;
} //
function animDie(obj,cnt,mcnt){
 with(obj){
	face=imgDie+((hFace > 0 ) ? plRight : plLeft);
//	o.rotateBy(16);
 var p=(mcnt-cnt);
 if(p<10)return;
  if(YY>WIN.SCROLL_TOP+SCREEN_Y)o.setVisibility(false,false);
//if(cnt==mcnt){
  if(p==10){
	o.setBitmap(face,charBodyWidth,charBodyHeight);
   if(YY<WIN.SCROLL_TOP+SCREEN_Y)yMove=-24.5;// 転落死は跳ねない
    ghost=true;
   }
	yMove += yAccel;
	YY    += yMove;
 }
} //

function animGoal(obj,cnt,mcnt){
 with(obj){
  var flPoint = YY+charBodyHeight+yMove;
  var blockP  = getXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2);
  var blockF  = getXYpointObject(XX+charBodyWidth/2,flPoint);
  var blockFC = checkFloorBlock(blockF);

  var F=GOALFLAG; //　旗
  var flPoint2 = F.YY+F.charBodyHeight+yMove;
  var blockP2  = getXYpointObject(XX+charBodyWidth/2,F.YY+F.charBodyHeight/2);
  var blockF2  = getXYpointObject(XX+charBodyWidth/2,flPoint2);
  var blockFC2 = checkFloorBlock(blockF2);
  
  
  if(F.dummy){
	blockFC2=blockFC;
  }
  
  if(cnt>-10000){
	if(cnt==-1){
		//ポールボーナスの算出(効率悪い)
		var flagBonusTable=Array(50,100,200,400,800,1000,2000,2000);
		var fl=YY+charBodyHeight - yMove;
		var flagBonus=5000;
		var i=0;
		for(;fl<SCREEN_Y;fl+=charHeight){
			var b=getXYpointObject(XX+charBodyWidth/2,fl);
			if(b != 0x6d && b != 0x6e)break;
			i++;
		}
		 if(i<flagBonusTable.length)flagBonus=flagBonusTable[i];
		XX=parseInt((XX+charBodyWidth/2)/charWidth)*charWidth-(charBodyWidth/3)+4;
		createEffect(XX+charWidth,YY,EffectCode.SCORE,flagBonus,obj);

	}

	YY+=10;yMove=0;
	F.YY+=10;
	if(blockFC>0){
		YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
	}

		face=imgBar+plRight;
//	if(blockFC > 0 && blockFC2 > 0){
	if(blockFC2 > 0){
		animateCounter=cnt=-10000;
		F.YY=parseInt(flPoint2/charHeight)*charHeight-F.charBodyHeight;
		face=imgWalk+plRight;
		
	}
  }else
  if(cnt>-10010){
	if(cnt==-10001){XX=parseInt(XX/charWidth+2)*charWidth-(charBodyWidth/2)-6;
	}
	face=imgBar+plLeft;
  }else{
	face=imgWalk+plRight;
	yMove+=yAccel;
	if(blockFC>0){
		YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
		yMove=0;
	}
//	o.setZPosition(50);

	WIN.SCROLL_LEFT+=4;
	XX+=4;

	YY+=yMove;
	if(blockP==0x7f){
		xMove=0;
		yMove=0;
		XX=parseInt(XX/charWidth + 1)*charWidth+4;
		YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
//		myPAD.x=myPAD.y=myPAD.buttons[0]=myPAD.buttons[1]=0;
		animateCounter=0;
		animateMode="TIMEBONUS";
	}
  }


 F.show();
 }
} //

function animAxe(obj,cnt,mcnt){
 with(obj){
  var flPoint = YY+charBodyHeight+yMove;
  var blockP  = getXYpointObject(XX+charBodyWidth/2,YY+charBodyHeight/2);
  var blockF  = getXYpointObject(XX+charBodyWidth/2,flPoint);
  var blockFL  = getXYpointObject(XX,flPoint);
  var blockFR  = getXYpointObject(XX+charBodyWidth,flPoint);
  var blockFC = checkFloorBlock(blockF);

  if(cnt>0){
	if(cnt==0)eventGoalBlock(obj);
	return;
  }
  else
  if(cnt>-10000){
	face=imgWalk+plRight;
	yMove+=yAccel;
	if(yMove>yDropSpeedMax)yMove=yDropSpeedMax;
	xMove+=xAccel;
	if(xMove>xSpeedMaxTurbo)xMove=xSpeedMaxTurbo;
	
	if(checkFloorBlock(blockFL)>0 || checkFloorBlock(blockFR)>0){
		YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
		yMove=0;
	}

	YY+=yMove;
	XX+=xMove;

	WIN.SCROLL_LEFT+=xMove *.85;

	if(blockP == 0x7f || cnt < -1300){
		animateCounter=cnt=-10000;
		xMove=0;
		yMove=0;
//		XX=parseInt(XX/charWidth)*charWidth+4;
//		myPAD.x=myPAD.y=myPAD.buttons[0]=myPAD.buttons[1]=0;
	}
  }else{
	face=imgStand+plRight;

	WIN.SCROLL_LEFT+=6;

	if(XX <= WIN.SCROLL_LEFT+SCREEN_X / 2 - charWidth*2 || cnt < -12000){
		xMove=0;
		yMove=0;
//		XX=parseInt(XX/charWidth)*charWidth;
//		myPAD.x=myPAD.y=myPAD.buttons[0]=myPAD.buttons[1]=0;
		animateCounter=30;
		CLEARTIMER=GAMETIMER;
		GAMETIMER=0;
	}
  }


 }
} //


function animGoalTimeBonus(obj,cnt,mcnt){
 with(obj){
  var F2=GOALFLAG2;
  if(cnt==-1){
	CLEARTIME=GAMETIMER;
  }
  if(GAMETIMER>0) {
		    getScore(50);GAMETIMER--;
    if(GAMETIMER>0){getScore(50);GAMETIMER--;}

  }else
  if(GAMETIMER==0 && cnt<0){
	updateScoreBoard(obj);
	var hn=CLEARTIME%10;
	if(hn==6||hn==3||hn==1)
		animateCounter=cnt=hn*15+15;
	else
		animateCounter=cnt=9;
	
  }else
  if(cnt>1){
	if(cnt % 15==0){
		var E=getEffectGroup(0);
		var x=XX+Math.random()*SCREEN_X*.6-SCREEN_X*.3-charWidth;
		var y=SCREEN_Y*.3+Math.random()*SCREEN_Y*.2-SCREEN_Y*.1+WIN.SCROLL_TOP;
		createEffect(x,y,EffectCode.HANABI,"",obj).yMove=-8;
		getScore(500);
	}
	if(cnt<=8){
		F2.o.moveBy(0,-6);
	}
  }else{
		eventGoalBlock(obj);
  }
  
 }
} //


function animDokan(obj,cnt,mcnt,atype){
 var p=(mcnt-cnt)/mcnt;
 var xm=0,ym=0;

 var cpX=obj.XX+obj.charBodyWidth/2,cpY=obj.YY+obj.charBodyHeight/2;

 switch(atype){
	case PlayerMode.TSUTA_UP:
	case PlayerMode.TSUTA_UP_OUT:
//	case "TSUTA_UP":
//	case "TSUTA_UP_OUT":
	 ym=-obj.yClimbSpeed;
	 obj.face=obj.imgClimbMove;
	 obj.climbFlag=true;
	break;
	case PlayerMode.DOKAN_UP:
	 ym=-3;
	break;
	case PlayerMode.DOKAN_UP_OUT:
	 ym=-1;
	 cpY=obj.YY+obj.charBodyHeight-2;
	break;
	case PlayerMode.DOKAN_DOWN:
	 ym=3;
	break;
	case PlayerMode.DOKAN_DOWN_OUT:
	 ym=1;
	 cpY=obj.YY+2;
	break;


	case PlayerMode.DOKAN_RIGHT:
	 xm=2;
	case PlayerMode.DOKAN_RIGHT_OUT:
	 xm+=1;
	 obj.face=obj.imgWalk+obj.plRight;
	 cpX=obj.XX;
	break;

	case PlayerMode.DOKAN_LEFT:
	 xm=-2;
	case PlayerMode.DOKAN_LEFT_OUT:
	 xm-=1;
	 obj.face=obj.imgWalk+obj.plLeft;
	 cpX=obj.XX+obj.charBodyWidth;
	break;
 }
// if(cnt==mcnt)
 obj.XX+=xm;
 obj.YY+=ym;
 var outflag = ((atype & 
 				(PlayerMode.DOKAN_DOWN_OUT +
		  		 PlayerMode.DOKAN_UP_OUT +
		  		 PlayerMode.DOKAN_LEFT_OUT +
		  		 PlayerMode.DOKAN_RIGHT_OUT +
		  		 PlayerMode.TSUTA_UP_OUT ))
		  		!= 0);
//	if(atype.indexOf("TSUTA")<0){
	if(atype <PlayerMode.TSUTA_UP){
		obj.o.setZPosition(50);
//	  if(atype.indexOf("OUT")>=0){
	  if(outflag){
		var bp=checkWallBlock(getXYpointObject(cpX,cpY));
		if(bp>0){obj.animateCounter=cnt=10;}
		else {obj.animateCounter=cnt=1;}
	  }
	}

 if(cnt==1){
//	if(atype.indexOf("TSUTA")>=0){
	if(atype >= PlayerMode.TSUTA_UP){
		obj.face=obj.imgClimb;
//		if(atype.indexOf("OUT")<0){
		if(!outflag){
		 CPULOCK=true;
		 eventWarpBlock(obj);
		}else{
		 obj.xMove=5;
//		 obj.yMove=-25.5;
//		 obj.steponFlag=15;
		 obj.face=obj.imgJump;
		 obj.climbFlag=false;
		 obj.jumpFlag=true;
		}
	}
	else{
//	if(atype.indexOf("OUT")<0){
	if(!outflag){
		CPULOCK=true;
		eventWarpBlock(obj);
	}else 
		obj.o.setZPosition(1000,atype);
	}
 }

} //

function animScroll(obj,cnt,mcnt,atype){
 if(cnt==0)return;
 var p=(mcnt-cnt)/mcnt;
 var xp=WIN.SCROLL_TOP;
 var yp=WIN.SCROLL_LEFT;
 var xc=obj.XX-(SCREEN_X+obj.charBodyWidth)/2;
 var yc=obj.YY-(SCREEN_Y+obj.charBodyHeight)/2;

 var xm=xp+(xp-xc)/cnt,ym=yp+(yp-yc)/cnt;

 if(cnt==1)
	scrollBG(xc,yc);
 else
	scrollBG(xm,ym);

} //

function plDamage(obj){
 with(this){
 if(ghost || star)return false;
  if(mode==PlayerMode.NORMAL)
	setMode(PlayerMode.DIE,true);
  else
	setMode(PlayerMode.GHOST,true);
	return true;
 }
} //

function plDie(){
 with(this){
	setMode(PlayerMode.NORMAL,false);
	life--;
	animateFlag=false;
	ghost=false;
	o.setVisibility(true,false);
	playerDies();
 }
} //

function getItem(itemtype){
 with(this){
  switch(itemtype){
	case "FLOWER":
	case ItemCode.FLOWER:
	 if(fire){
		getScore(1000);
		createEffect(this.XX,this.YY,EffectCode.SCORE,1000);
		break;
	 }else
	 if(mode != PlayerMode.NORMAL){
		getScore(1000);
		setMode(PlayerMode.FIRE,true);
		break;
	 }
	case "KINOKO":
	case ItemCode.KINOKO:
		getScore(1000);
		if(mode==PlayerMode.NORMAL)setMode(PlayerMode.SUPER,true);
	break;

	case "STAR":
	case ItemCode.STAR:
		star=true;
		if(starTimer>0)starTimer+=starTimerLength;
		else starTimer=starTimerLength;
	break;

	case "COIN":
	case ItemCode.COIN:
		getScore(200);
	 coins=(coins+1) % 100;
	 if(coins != 0)break;
		createEffect(this.XX,this.YY,EffectCode.SCORE,"1UP");
	case "1UP":
	case "1GET":
	case ItemCode.ONEUP:
		life++;
	break;

	case "POISON":
	case ItemCode.POISON:
	case "ATTACK":

	break;
  }
  updateScoreBoard(this);
 }
} //


function showPlayer(){
 with(this){


	o.setBitmap(face,charSpriteWidth,charSpriteHeight);

	o.moveTo( XX-(charSpriteWidth  - charBodyWidth ) / 2,
			YY-(charSpriteHeight - charBodyHeight),
			true);
	fireball.show();
 }
} //

function playerOnCollision(obj){
	this.show();
	obj.show();
} //

function stepOnEnemy(obj){
 with(this){
	var b=getBonus(jumpBonus++);
	steponFlag=10000;
	getScore(obj.stepScore);
//	createEffect(this.XX,this.YY,EffectCode.SCORE,b);
	createEffect(obj.XX,obj.YY,EffectCode.SCORE,b);
 }
} //

function getStarBonus(){
	var b=this.getBonus(this.starBonus++);
	createEffect(this.XX,this.YY,EffectCode.SCORE,b);
} //

function getBonus(n){
 with(this){
	if(n >= bonusTable.length){
		getItem("1GET");
		return "1UP";
	}else
		getScore(bonusTable[n]);
		return bonusTable[n];
 }
} //

///*
//---------------------------------------------------------
// 本当は動的に生成したいが、IEだともっさりするので固定にする
function FireballGroup(obj){
	this.maxFireballs=2;
	this.master=obj;
	
	this.fireball=Array();
	for(var i=0;i<this.maxFireballs;i++)
		this.fireball[i]=new Fireball(obj);

	this.call=callFireballs;
	this.show=showFireballs;
	this.action=actFireballs;
} //

//funciton clFireballs(){
//function hoge(){
function callFireballs(){
 with(this){
  for(var i=0;i<maxFireballs;i++)
	if(!fireball[i].active)return fireball[i].call(this.master);
 }
} //

function showFireballs(){
 with(this){
  for(var i=0;i<maxFireballs;i++)
	if(fireball[i].active)fireball[i].show();
 }
} //

function actFireballs(){
 with(this){
  for(var i=0;i<maxFireballs;i++)
	if(fireball[i].active)fireball[i].action();
 }
} //


function Fireball(obj){
	var T=this;
	T.active = false;
	T.alive  = 1;
	T.oldXX=T.XX=0;
	T.oldYY=T.YY=0;
	T.hFace=0;
	T.vFace=0;

	T.xAccel=15;
	T.yAccel=3;

	T.yJump=12.5;

	T.xMove=0;
	T.yMove=0;
	T.yDropSpeedMax=10;

	
	T.master=obj;
	T.mind=MindCode.FIRE;
	T.face="img/fireball.gif";



	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 16;//18;	//当たり判定サイズ
	T.charBodyHeight = 12;//18;
	T.charSpriteWidth  = 16;//12; //グラフィックのサイズ
	T.charSpriteHeight = 16;//12;
		T.cSprX = ( T.charSpriteWidth  - T.charBodyWidth  ) / 2;
		T.cSprY = ( T.charSpriteHeight - T.charBodyHeight ) / 2;
	
	T.o=new Sprite();
	T.o.setBitmap(UNDEF_GIF,T.charSpriteWidth,T.charSpriteHeight);
//	T.o.moveTo(T.XX-T.cSprX,T.YY-T.cSprY,false);
//	T.o.setVisibility(false,false);
	T.o.setZPosition(900);
	T.Body=T.o.Body;

	this.call = callFireball;
	this.action = actFireball;
	this.show = basicShow;
	this.kill = killFireball;
	this.collision= enemyCollision;
	this.onCollision = function(){};//killFireball;//function(){this.hit=1;};

	T.getScore=function(n){
			createEffect(this.XX,this.YY,EffectCode.SCORE,n);
			this.master.getScore(n);
		   };
} //

function callFireball(obj){
  with(this){
	XX=obj.XX+obj.charBodyWidth/2;
	YY=obj.YY+obj.charBodyHeight/4;
	xMove=xAccel * obj.hFace;
	XX+=xMove;
	active=true;
	yMove=7;
	alive=1;
	o.setBitmap(UNDEF_GIF,-1,-1);
	o.setVisibility(true,false);
	show();
	
  }
} //

function actFireball(){
 with(this){
  if(!active)return;
//  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
  if(	(XX > WIN.SCROLL_LEFT + SCREEN_X) || 
	(XX < WIN.SCROLL_LEFT) || 
	(YY > WIN.SCROLL_TOP + SCREEN_Y)
//	(YY < WIN.SCROLL_TOP) 
   )return kill(0);

   oldXX=XX;oldYY=YY;
   var cc=groupCollision(this,ENEMIES);
   if(cc[0]>0)return kill(1);
   

    yMove+=yAccel;
    if(yMove > yDropSpeedMax)yMove=yDropSpeedMax;

    var blPoint=XX+xMove+charBodyWidth/2;
//	if(xMove>0)blPoint+=charBodyWidth;

  var blockF=getXYpointObject(blPoint,YY+charBodyHeight);

    if(checkFloorBlock(blockF)>0){
	YY=parseInt(YY/charHeight + 1)*charHeight - charBodyHeight/2-1;
	yMove=-yJump;
	}
    var blockP=getXYpointObject(blPoint,YY+charBodyHeight/2);
    if(checkWallBlock(blockP)>0)return kill(1);




   XX+=xMove;YY+=yMove;
 }
} //

function showFireball(){
 with(this){
 }
} //

function killFireball(eflag){
 with(this){
	active=false;
	alive=-1;
	if(eflag>0)createEffect(XX,YY-charHeight*.4,EffectCode.HITMARK,"");
	o.setBitmap(UNDEF_GIF,-1,-1);
	o.setVisibility(false,false);
	return -1;
 }
} //
//*/