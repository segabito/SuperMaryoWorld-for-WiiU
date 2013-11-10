function EnemyCode(){
	EnemyCode.KURI			= 0x80;
	EnemyCode.KAME			= 0x81;	EnemyCode.KAME_MIDORI	= 0x81;
	EnemyCode.KAME_AKA		= 0x82;
	EnemyCode.KAME_KURO		= 0x83;
	EnemyCode.PATA			= 0x84;
	EnemyCode.PATA_V		= 0x85;
	EnemyCode.PATA_H		= 0x86;
	EnemyCode.TOGE			= 0x87;
	EnemyCode.PAKKUN		= 0x88;
	EnemyCode.AKAPAKKUN		= 0x89;
	EnemyCode.CANNONBALL	= 0x8a;
	EnemyCode.CANNON		= 0x8b;
	EnemyCode.SWIMFISH		= 0x8c;EnemyCode.SAKANA		= 0x108c;
	EnemyCode.FLYFISH		= 0x8d;
	EnemyCode.SQUID			= 0x8e;
	EnemyCode.FIREBUBBLE	= 0x8f;
	EnemyCode.BAKI			= 0x90;
	EnemyCode.KUMOZO		= 0x91;
	EnemyCode.TAMAGO		= 0x1091;
	EnemyCode.KAMEZO		= 0xb0;
	EnemyCode.BREATH		= 0x10b0;
	EnemyCode.FIREBAR		= 0xc0;
	EnemyCode.FIREBAR_L		= 0xc1;
	EnemyCode.LONGFIREBAR	= 0xc2;
	EnemyCode.LONGFIREBAR_L	= 0xc3;
	EnemyCode.JUMPBLOCK		= 0xc8;
	EnemyCode.SUPERJUMPBLOCK= 0xc9;
	EnemyCode.LIFT_UP		= 0xe0;
	EnemyCode.LIFT_DOWN		= 0xe1;
	EnemyCode.LIFT_LEFT		= 0xe2;
	EnemyCode.LIFT_RIGHT	= 0xe3;
	EnemyCode.LIFT_FALL		= 0xe4;
	EnemyCode.LIFT_RISE		= 0xe5;
	EnemyCode.LIFT_UPDOWN	= 0xe6;
	EnemyCode.LIFT_L_R		= 0xe7;
	EnemyCode.KUMO_RIGHT	= 0xe8;
	EnemyCode.BALANCELIFT	= 0xe9;
}
EnemyCode();

function EffectCode(){
	EffectCode.HANABI		= 0x4003;
	EffectCode.HITMARK		= 0x4002;
	EffectCode.ONEUP		= 0x4008;
	EffectCode.SCORE		= 0x4001;
	EffectCode.TEXT			= 0x4006;
	EffectCode.MESSAGE		= 0x4007;
	EffectCode.COIN			= 0x4000;
	EffectCode.BROKEN		= 0x4004;
	EffectCode.DEAD			= 0x1000;
	EffectCode.AWA			= 0x4005;
	
	EffectCode.CASTLE		= 0xca;
	EffectCode.BIGCASTLE	= 0xcb;
	EffectCode.PRINCESS		= 0xcc;

	EffectCode.OTHER		=-1;
}
EffectCode();

function ItemCode(){
	ItemCode.BOUNCE		= 0x2000;
	ItemCode.KINOKO		= 0x3000;
	ItemCode.FLOWER		= 0x3001;
	ItemCode.STAR		= 0x3002;
	ItemCode.ONEUP		= 0x3003;
	ItemCode.TSURU		= 0x3004;ItemCode.TSUTA		= 0x3004;
	ItemCode.TENCOIN	= 0x3005;
	ItemCode.AXE		= 0xf0;
	ItemCode.DOKAN_UP		= 0xf1;
//	ItemCode.TSUTA_UP		= 0x2001;
	ItemCode.DOKAN_DOWN		= 0xf2;
	ItemCode.DOKAN_LEFT		= 0xf3;
	ItemCode.DOKAN_RIGHT	= 0xf4;
	ItemCode.TSUTA_UP		= 0x200000;
//	ItemCode.DOKAN_DOWN 	= 0x002000;// 8192
//	ItemCode.DOKAN_DOWN_OUT = 0x004000;
//	ItemCode.DOKAN_UP 		= 0x008000;
//	ItemCode.DOKAN_UP_OUT 	= 0x010000;
//	ItemCode.DOKAN_LEFT 	= 0x020000;
//	ItemCode.DOKAN_LEFT_OUT = 0x040000;
//	ItemCode.DOKAN_RIGHT 	= 0x080000;
//	ItemCode.DOKAN_RIGHT_OUT= 0x100000;
//	ItemCode.TSUTA_UP		= 0x200000;
//	ItemCode.TSUTA_UP_OUT	= 0x400000;

	ItemCode.CASTLE		= 0xca;
	ItemCode.BIGCASTLE	= 0xcb;
	ItemCode.PRINCESS		= 0xcc;

}
ItemCode();


var crEnemy=Array();
function getCharObject(){
		return crEnemy.length;
 for(var i=0;i<crEnemy.length;i++)
 	if(crEnemy[i])
 		if(crEnemy[i].alive < 0)break;
 return i;
}
function createEnemy(group,x,y,num,option,obj){
// var crEL=getCharObject();
 var newEnemy;
 // switch内は定数じゃないと遅くなるかも
 switch(num){
	case 0x80://EnemyCode.KURI://0x80:
		newEnemy= new Kuri(obj,"KURI",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x81://EnemyCode.KAME://0x81:
		newEnemy= new Kame(obj,"MIDORI",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x82://EnemyCode.KAME_AKA://0x82:
		newEnemy= new Kame(obj,"AKA",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x83://EnemyCode.KAME_KURO://0x83:
		newEnemy= new Kame(obj,"KURO",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x84://EnemyCode.PATA://0x84:
		newEnemy= new Kuri(obj,"PATA",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x85://EnemyCode.PATA_V://0x85:
		newEnemy= new Kuri(obj,"PATA-V",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x86://EnemyCode.PATA_H://0x86:
		newEnemy= new Kuri(obj,"PATA-H",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x87://EnemyCode.TOGE://0x87:
		newEnemy= new Kuri(obj,"TOGE",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x88://EnemyCode.PAKKUN://0x88:
		newEnemy= new MonsterFlower(obj,"",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x89://EnemyCode.AKAPAKKUN://0x89:
		newEnemy= new MonsterFlower(obj,"AKA",x,y,option);
		return newEnemy.entry(group);
	break;


	case 0x8a://EnemyCode.CANNONBALL://0x8a:
		newEnemy= new Kuri(obj,"CANNONBALL",x,y,option);
		return newEnemy.entry(group);
	break;


	case 0x8b://EnemyCode.CANNON://0x8b:
		newEnemy= new Cannon(obj,"",x,y,option);
		return newEnemy.entry(group);
	break;


	case 0x8c://EnemyCode.SWINFISH://0x8c:
		newEnemy= new Kuri(obj,"SWIMFISH",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x8d://EnemyCode.FLYFISH://0x8d:
		newEnemy= new Kuri(obj,"FLYFISH",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x8e://EnemyCode.SQUID://0x8e:
		newEnemy= new Kuri(obj,"SQUID",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x8f://EnemyCode.FIREBUBBLE://0x8f:
		newEnemy= new FireBubble(obj,"FIREBUBBLE",x,y,option);
		return newEnemy.entry(group);
	break;

	case 0x90://EnemyCode.BAKI://0x90:
		newEnemy= new HammerBaki(obj,"",x,y,option,group);
		return newEnemy.entry(group);
	break;

	case 0x91://EnemyCode.KUMOZO://0x91:
		newEnemy= new Kumozo(obj,"",x,y,option,group);
		return newEnemy.entry(group);
	break;

	case 0x1091://EnemyCode.TAMAGO:
		newEnemy= new Kuri(obj,"TAMAGO",x,y,option,group);
		return newEnemy.entry(group);
	break;


	case 0xb0://EnemyCode.KAMEZO://0xb0:
		newEnemy= new Kamezo(obj,"KAMEZO",x,y,option,group);
		return newEnemy.entry(group);
	break;

	case 0x10b0://EnemyCode.BREATH:
		newEnemy= new Kuri(obj,"BREATH",x,y,option);
		return newEnemy.entry(group);
	break;




	case 0xc0://EnemyCode.FIREBAR://0xc0:
		newEnemy= new Firebar(obj,"normal",x,y,FIREBARSPEED);
		return newEnemy.entry(group);
	break;
	case 0xc1://EnemyCode.FIREBAR_L://0xc1:
		newEnemy= new Firebar(obj,"normal",x,y,-FIREBARSPEED);
		return newEnemy.entry(group);
	break;

	case 0xc2://EnemyCode.LONGFIREBAR://0xc2:
		newEnemy= new Firebar(obj,"LONG",x,y,FIREBARSPEED);
		return newEnemy.entry(group);
	break;
	case 0xc3://EnemyCode.LONGFIREBAR_L://0xc3:
		newEnemy= new Firebar(obj,"LONG",x,y,-FIREBARSPEED);
		return newEnemy.entry(group);
	break;

	case 0xc8://EnemyCode.JUMPBLOCK://0xc8:
		newEnemy= new JumpBlock(obj,"NORMAL",x,y);
		return newEnemy.entry(group);
	break;
	case 0xc9://EnemyCode.SUPERJUMPBLOCK://0xc9:
		newEnemy= new JumpBlock(obj,"SUPER",x,y);
		return newEnemy.entry(group);
	break;

	
	
	case 0xe0://EnemyCode.LIFT_UP://0xe0:
	case 0xe1://EnemyCode.LIFT_DOWN://0xe1:
	case 0xe2://EnemyCode.LIFT_LEFT://0xe2:
	case 0xe3://EnemyCode.LIFT_RIGHT://0xe3:
	case 0xe4://EnemyCode.LIFT_FALL://0xe4:
	case 0xe5://EnemyCode.LIFT_RISE://0xe5:
	case 0xe6://EnemyCode.LIFT_UPDOWN://0xe6:
	case 0xe7://EnemyCode.LIFT_L_R://0xe7:
		if(num>=0xe0 && num<=0xe7)
		 num=Array("UP","DOWN","LEFT","RIGHT","FALL","RISE","UPDOWN","L-R")[num-0xe0];
		else
		num=(num+'').replace("LIFT_","");
		newEnemy= new LiftObject(obj,num,x,y,LIFTWIDTH);
		return newEnemy.entry(group);
	break;
	case 0xe8://EnemyCode.KUMO_RIGHT://0xe8:
		newEnemy= new LiftObject(obj,"KUMO-RIGHT",x,y,LIFTWIDTH);
		return newEnemy.entry(group);
	break;

	case 0xe9://EnemyCode.BALANCELIFT://0xe9:
		newEnemy= new BalanceLiftObject(obj,"NORMAL",x,y,group);
		return newEnemy.entry(group);
	break;




		case 0x2000://ItemCode.BOUNCE://0x2000:
		case 0x3000://ItemCode.KINOKO://0x3000:
		case 0x3001://ItemCode.FLOWER://0x3001:
		case 0x3002://ItemCode.STAR://0x3002:
		case 0x3003://ItemCode.ONEUP://0x3003:
		case 0x3004://ItemCode.TSURU://0x3004:
		case 0x3005://ItemCode.TENCOIN://0x3005:
		case 0xf0://ItemCode.AXE://0xf0:
		case 0xf1://ItemCode.DOKAN_UP://0xf1:
	//case "TSUTA_UP":
	//	case ItemCode.TSUTA_UP:
		case 0xf2://ItemCode.DOKAN_DOWN://0xf2:
		case 0xf3://ItemCode.DOKAN_LEFT://0xf3:
		case 0xf4://ItemCode.DOKAN_RIGHT://0xf4:
		return createItem(group,x,y,num,option,obj);
	break;



	case 0xca://ItemCode.CASTLE://0xca:
	 num=0xca;
	case 0xcb://ItemCode.BIGCASTLE://0xcb:
		castle(x,y,num-0xca);
	break;
	
	case 0xcc://ItemCode.PRINCESS://0xcc:
		princess(x,y);
	break;

	default:

	 if(WIN != window){
		if(LOADER.createObject)
			return LOADER.createObject(window,group,x,y,num,option,obj);
		else
		if(DEBUGMODE)alert( num + " "+ parseInt(num).toString(16)+"is not found");
	 }
	break;
 }
} //

function createEffect(x,y,num,option,obj){
 if(NOEFFECT)return DUMMYOBJ;
// var crEL=getCharObject();
 switch(num){
	case 0xca://EffectCode.CASTLE://0xca
//	case "CASTLE":
	 num=0xca;
	case 0xcb://EffectCode.BIGCASTLE://0xcb:
		castle(x,y,num-0xca);
	break;
	
	case 0xcc://EffectCode.PRINCESS://0xcc:
//	case "PRINCESS":
		princess(x,y);
	break;


	case 0x1000://EffectCode.DEAD://0x1000:
		return callDyingCharacter(obj,option,x ,y);
	break;

	case 0x4000://EffectCode.COIN://0x4000:
		return callEffect(EffectCode.COIN  ,x ,y,option);
	break;

	case 0x4001://EffectCode.SCORE://0x4001:
		return callEffect(EffectCode.SCORE ,x ,y,option);
	break;

	case 0x4002://EffectCode.HITMARK://0x4002:
	case 0x4003://EffectCode.HANABI://0x4003:
		return callEffect(EffectCode.HANABI,x ,y,option);
	break;

	case 0x4004://EffectCode.BROKEN://0x4004:
	 var xh = BGBLOCKSIZE_X*.5 + x ,yh=BGBLOCKSIZE_Y*.5 + y;
	 var b1=callEffect(EffectCode.BROKEN,x ,y ,option);
	  if(!b1)break;
	 var b2=callEffect(EffectCode.BROKEN,xh,y ,option);
	  if(!b2)break;
	 var b3=callEffect(EffectCode.BROKEN,x ,yh,option);
	  if(!b3)break;
	 var b4=callEffect(EffectCode.BROKEN,xh,yh,option);
	  if(!b4)break;
	  b1.xMove=-10;b1.yMove=-25;//b1.o.Body.style.clip="rect(0,50%,50%,0%)";
	  b2.xMove= 10;b2.yMove=-25;//b2.o.Body.style.clip="rect(0,100%,50%,50%)";
	  b3.xMove=-25;b3.yMove=-10;//b3.o.Body.style.clip="rect(50%, 50%,100%,0%)";
	  b4.xMove= 25;b4.yMove=-10;//b4.o.Body.style.clip="rect(50%,100%,100%,50%)";
	 return b1;
	break;

	case 0x4005://EffectCode.AWA://0x4005:
		return callEffect(EffectCode.AWA,x ,y,option);
	break;

 }
} //


function createItem(group,x,y,num,option,obj){
// var crEL=getCharObject();
 var newItem;
 switch(num){
	case 0x2000://ItemCode.BOUNCE://
		newItem= new BounceObject(obj,option,x,y);
		return newItem.entry(group);
	break;

	case 0x3000://ItemCode.KINOKO://
		newItem= new ItemObject(obj,ItemCode.KINOKO,x,y);
		return newItem.entry(group);
	break;
	case 0x3001://ItemCode.FLOWER://
		newItem= new ItemObject(obj,ItemCode.FLOWER,x,y);
		return newItem.entry(group);
	break;
	case 0x3002://ItemCode.STAR://
		newItem= new ItemObject(obj,ItemCode.STAR,x,y);
		return newItem.entry(group);
	break;
	case 0x3003://ItemCode.ONEUP://
		newItem= new ItemObject(obj,ItemCode.ONEUP,x,y);
		return newItem.entry(group);
	break;
	case 0x3004://ItemCode.TSUTA://
		newItem= new ItemObject(obj,ItemCode.TSUTA,x,y);
		return newItem.entry(group);
	break;
	
	case 0x3005://ItemCode.TENCOIN:
		newItem = new TenCoinBlock(obj,"",x,y);
		return newItem.entry(group);
	break;

	case 0xf0://ItemCode.AXE://
		newItem= new AxeObject(obj,ItemCode.AXE,x,y);
		return newItem.entry(group);
	break;

	case 0xf1://ItemCode.DOKAN_UP://
		newItem= new DokanWarpObject(obj,ItemCode.DOKAN_UP,x,y);
		return newItem.entry(group);
	break;
	case 0x200000://0x2001://ItemCode.TSUTA_UP:
		newItem= new DokanWarpObject(obj,ItemCode.TSUTA_UP,x,y);
		return newItem.entry(group);
	break;
	case 0xf2://ItemCode.DOKAN_DOWN://
		newItem= new DokanWarpObject(obj,ItemCode.DOKAN_DOWN,x,y);
		return newItem.entry(group);
	break;
	case 0xf3://ItemCode.DOKAN_LEFT://0xf3:
		newItem= new DokanWarpObject(obj,ItemCode.DOKAN_LEFT,x,y);
		return newItem.entry(group);
	break;
	case 0xf4://ItemCode.DOKAN_RIGHT://0xf4:
		newItem= new DokanWarpObject(obj,ItemCode.DOKAN_RIGHT,x,y);
		return newItem.entry(group);
	break;

 }
} //


function callEnemy(x,y,mode){
 var lx=WIN.SCROLL_LEFT;
 var rx=lx+SCREEN_X;
 var E=getEnemyGroup();
 var P=getPlayerObject(0);

 var px=Math.floor(P.XX / BGBLOCKSIZE_X) * BGBLOCKSIZE_X;
 var py=Math.floor(P.YY / BGBLOCKSIZE_Y) * BGBLOCKSIZE_Y;
 switch(mode){
	case EnemyCode.BREATH:
//	case "BREATH":
	 var xx=rx+50;
	 var yy=-1
	 while(yy<0)yy=Math.abs(py)+(RND(4)-2)*BGBLOCKSIZE_Y;
	 return createEnemy(E,xx,yy,EnemyCode.BREATH,-1);
	break;
	case EnemyCode.CANNONBALL:
//	case "CANNONBALL":
	 var hFace=RND(2)*2-1;// 0<->1 → 0<->2 → -1 <-> 1
	 var xx=(hFace<0)?(rx+50):(lx-82);
	 var yy=-1;
	 while(yy<0)yy=Math.abs(py)+(RND(4)-2)*BGBLOCKSIZE_Y;
	 return createEnemy(E,xx,yy,EnemyCode.CANNONBALL,hFace);
	break;


	case EnemyCode.SAKANA:
//	case "SAKANA":
	 var dd=callEnemy(x,y,( (RND(100)>65) ? EnemyCode.SQUID : EnemyCode.SWIMFISH ) );
	 dd.screenDrop=true;
	 return dd;
	break;

	case EnemyCode.SWIMFISH:
	case EnemyCode.SQUID:
//	case "SWIMFISH":
//	case "SQUID":
//alert("mode="+mode);
	 if(FISHCNT<FISHCNTMAX){
	  var hFace=RND(2)*2-1;
	  var xx=(hFace<0)?(rx):(lx-32);
	  var yy=RND(SCREEN_Y*.8)+WIN.SCROLL_TOP+SCREEN_Y*.1;
	  return createEnemy(E,xx,yy,mode,hFace);
	 }else
	 return false;
	break;

	case EnemyCode.FLYFISH:
//	case "FLYFISH":
	 if(FISHCNT<FISHCNTMAX){
	 var hFace=RND(2)*2-1;// 0<->1 → 0<->2 → -1 <-> 1
	 var xx=0;
	 if(hFace>0)
	     xx=RND(SCREEN_X*.5)+WIN.SCROLL_LEFT-SCREEN_X*.25;
	 else
	     xx=RND(SCREEN_X*.5)+WIN.SCROLL_LEFT+SCREEN_X*.75;

	 var yy=WIN.SCROLL_TOP+SCREEN_Y-3;
	 var dd=createEnemy(E,xx,yy,EnemyCode.FLYFISH,hFace);
	 dd.screenDrop=true;
	 return dd;
	 }
	break;
 }
} //


//------------------------------------------------------------//
//------------------------------------------------------------//

function enemyGroup(){

	this.maxEnemies=100;
	this.liveCnt=0;

	this.living= new Array(this.maxEnemies+10);
	
	this.addEnemy=addEnemy;
	this.action =enemyGroupActions;
	this.show = enemyGroupShow;
	this.collision=enemiesCollision;
} //

function addEnemy(obj){
	var found=false;
	var i=0;
  for(;i<this.liveCnt;i++){
	if(!this.living[i]){found=true;break;}
	if(this.living[i].alive<0){found=true;break;}
  }
  if(!found){i=this.liveCnt;this.liveCnt++;}

   this.living[i]=obj;
} //


function enemyGroupActions(){
 var i;
 for(i=0;i<this.liveCnt;i++)
	if(this.living[i])
		if(this.living[i].alive>=0)this.living[i].action();
} //

function enemyGroupShow(){
 var i;
 for(i=0;i<this.liveCnt;i++)
	if(this.living[i])
		if(this.living[i].alive>=0)this.living[i].show();
} //

//function enemiesCollision(x,y,w,h){
function enemiesCollision(obj){
	var x=obj.XX;
	var y=obj.YY;
	var w=obj.charBodyWidth;
	var h=obj.charBodyHeight;
	var ret=Array();ret[0]=0;
  for(var i=0;i<this.liveCnt;i++){
	if(!this.living[i])continue;
	if(this.living[i].alive<0)continue;
	c = this.living[i].collision(x,y,w,h,obj);
	if(c > 0){
		ret.push(this.living[i]);
		ret[0]++;
	}
  }
 return ret;
} //

function stepOnEnemyCollision(player,enemy){ // 踏みつけ判定
// if(player.yMove<-player.yAccel || enemy.YY <= player.YY || STAGEMODE == "WATER")return -1;
 if(enemy.YY <= player.YY || STAGEMODE == "WATER")return -1;
  var playerF=player.YY+player.charBodyHeight;
  var enemyF =enemy.YY+enemy.charBodyHeight;
  var playerC=player.XX+player.charBodyWidth/2;
 if(player.yMove - enemy.yMove >= 16)return 1;	// 相対落下速度
 if(playerF < enemyF && player.yMove>10)return 1;
 if(player.yMove==0 && playerF > enemyF)return -1;
 if(enemy.YY+enemy.charBodyHeight*.8 > playerF)return 1;
 if(player.yMove>10 && playerC > enemy.XX && playerC < enemy.XX+enemy.charBodyWidth)return 1;
 if(enemyF <= playerF)return -1;
 return 1;
}//

//------------------------------------------------------------//
//------------------------------------------------------------//
//------------------------------------------------------------//
function basicEnemyInitParam(T,obj,mode,x,y){
	T.XX=0;	   if(x)T.XX=x;
	T.YY=0;	   if(y)T.YY=y;
	T.mode="normal";if(mode)T.mode=mode;
	T.oldXX=T.XX;
	T.oldYY=T.YY;

	T.alive  = 1;
	T.score      = 100;
	T.stepScore  = 100;
	T.upperScore  = 100;
	// 顔の向き
	T.vFace=0; // 1 = up    -1 = down
	T.hFace=-1; // 1 = right -1 = left
	
	T.peta=false;
} //
function basicEnemyInitMove(T,obj,mode,x,y){
	T.animCounter=0;
	T.counter=0;
	T.xMove=-2;
	T.xSpeedMax=6;
	T.xSpeedMaxTurbo=3;
	T.xSpeedMin=.9;
	T.xBrakeSlow = .75;
	T.xBrakeQuick= 0;
	T.xAccel =3;
	T.xBounce=1;
	
	T.yMove=0;
	T.yAccel=6;
	T.yDropSpeedMax=15;
	T.ySpeedMax=6;
	T.yJump    =0;
	T.yJumpHigh=0;
	T.yJumpSpeeddown=.6;
	T.yBounce=-25.5;
	
	T.checkStage= true;  // 背景のオブジェクトとの判定をするかどうか
	T.checkFloor= false; // 床の端でターンするか
	T.checkWall = true;  // 壁を無視するか
	T.hasGroupCollision=true; // 味方同士で衝突判定するか
	T.screenDrop=false; // 画面外に出た時点で死亡とする
	T.yDropKill=true; //落ちた時点で死亡とするか
} //
function basicEnemyInitCharacter(T,obj,mode,x,y,z,cw,ch,sw,sh){
 if(!sw)sw=cw;
 if(!sh)sh=ch;
	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = cw;	//当たり判定サイズ
	T.charBodyHeight = ch;
	T.charSpriteWidth  = sw; //グラフィックのサイズ
	T.charSpriteHeight = sh;
		T.cSprX=(sw-cw)/2;
		T.cSprY=(sh-ch);
	T.o=new Sprite();
	T.o.setSpriteBitmap(UNDEF_GIF,sw,sh);
//	T.o.setSpriteBitmap(T.face,sw,sh);
	T.o.moveTo(T.XX-T.cSprX,T.YY-T.cSprY,false);
	//T.o.setVisibility(true,false);
	T.o.setSpriteZPosition(z);
	T.Body=T.o.Body;
} //

function enemyEntry(group){
	group.addEnemy(this);
	this.o.setVisibility(true,false);
	this.myGroup=group;
	return this;
} //


function enemyCollision(x,y,w,h){
	if(this.alive<0)return -1;
	return basicCollisionC(x,y,w,h,this);
} //

function groupCollision(obj,group){
// var cc=group.collision(obj.XX,obj.YY,obj.charBodyWidth,obj.charBodyHeight);
 var cc=group.collision(obj);
 //if(cc[0]>0)
 	for(var i=1;i<cc.length;i++){
		if(cc[i]!=obj){
			cc[i].onCollision(obj);
			obj.onCollision(cc[i]);
		}
 	}
 return cc;
} //

function basicShow(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
//	o.setBitmap(UNDEF_GIF,charSpriteWidth,charSpriteHeight);
//	o.setVisibility(false,false);
	return -1;
  }

   o.setVisibility(true,false);
   o.setBitmap(face,charSpriteWidth,charSpriteHeight);
   o.moveTo(XX-cSprX,YY-cSprY,false);
 }
} //

function basicMove(obj){
 with(obj){
	oldXX=XX;
	oldYY=YY;
	

	// 落下------------

	if(yMove==0 && yJump!=0){
//	 if(Math.abs(xMove)>xSpeedMax)
//		yMove=-yJumpHigh;
		yMove=-yJump;
	}else{
	 yMove+=yAccel;
	 if(yMove>yDropSpeedMax)yMove=yDropSpeedMax;
	}
	// 落下------------>

 if(checkStage==true){
	if(yMove>0){ //落下中
	 var flPoint=YY+charBodyHeight+yMove;
	 var floor=getXYpointObject(XX+charBodyWidth*.5,flPoint);
	  if(checkFloorBlock(floor) > 0){
		 YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
		 yMove=0;
	  }

	}

	if(checkWall==true){
	 if(xMove>0){
	  var blPoint=XX+charBodyWidth+xMove/2;
	  var blockR=getXYpointObject(blPoint,YY+charBodyHeight*.5);
		if(checkWallBlock(blockR) > 0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth;
		 xMove*=-1;
		}
	 }
	 else 
	 if(xMove<0)
	 {
	  var blPoint=XX+xMove/2;
	  var blockL=getXYpointObject(blPoint,YY+charBodyHeight*.5);
		if(checkWallBlock(blockL) > 0){
		 XX=parseInt(blPoint/charWidth + 1)*charWidth;
		 xMove*=-1;
		}
	 }
	}
	
	if(checkFloor==true && yMove==0){
	 if(xMove>0){
	  var blPoint=XX+charBodyWidth+xMove;
	  var blockR=getXYpointObject(blPoint,YY+charBodyHeight);
		if(checkFloorBlock(blockR) < 0){
		 XX=parseInt(blPoint/charWidth)*charWidth-charBodyWidth/2;
		 xMove*=-1;
		}
	 }
	 else 
	 if(xMove<0)
	 {
	  var blPoint=XX+xMove;
	  var blockL=getXYpointObject(blPoint,YY+charBodyHeight);
		if(checkFloorBlock(blockL) < 0){
		 XX=parseInt(blPoint/charWidth+1)*charWidth+charBodyWidth/2;
		 xMove*=-1;
		}
	 }
	}
 }

	XX+=xMove;
	YY+=yMove;
	
	if(xMove!=0)hFace=xMove/Math.abs(xMove);
 }
} //





function Kuri(obj,mode,x,y,option){ // 基本ザコ
// 移動パラメータを変えるだけで 栗・弾丸・火炎・魚・跳亀・棘亀 をカバーできる
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);


	this.imgWalk  = "img/KRwalk";
	this.imgWalk2 = "img/KRwalk";
	this.imgDie   = "img/KRwalk";
	
	this.plRight = "R.gif";	this.plLeft  = "L.gif";
	this.face=this.imgWalk;
//	this.face=UNDEF_GIF;

	this.mind = MindCode.ENEMY;

	basicEnemyInitCharacter(this,obj,mode,x,y,900,24,24,32,32);

	this.registFire  = -1; //
	this.registUpper = -1; //
	this.registKick  = -1; //
	this.registPress = -1; //
//	this.regist

 with(this){
	switch(mode){
		case "KURI":
		 peta=true; //
		break;
		case "PATA-V":
		 score=400;
		 xMove=0;
		 yMove=3.6;
		 xAccel=0;
		 yAccel=.2;
		 ySpeedMax=7.2;
		 yDropSpeedMax=20;
		 registPress=0;
		 yDropKill=false;
		 stepScore=800;
		 checkWall=false;
		 checkFloor=false;
		 checkStage=false;
		 charSpriteHeight=38;
		 face = imgWalk="img/PATAred";
		 imgDie= "img/KMGsleep";
		 hasGroupCollision=false;
		 
		break;
		case "PATA-H":
		 score=400;
		 xMove=-3.6;
		 yMove=0;
		 xAccel=-.2;
		 yAccel=0;
		 xSpeedMax=7.2;
		 registPress=0;
		 stepScore=800;
		 checkWall=false;
		 checkFloor=false;
		 checkStage=false;
		 charSpriteHeight=38;
		 face = imgWalk="img/PATAred";
		 imgDie= "img/KMGsleep";
		 hasGroupCollision=false;
		break;
		case "PATA":
		 registPress=0;
		 score=400;
		 stepScore=800;
		 yJump=17.1;
		 yAccel=2;
		 charSpriteHeight=38;
		 face = imgWalk="img/PATAgrn";
		 imgDie= "img/KMGsleep";
		break;
		case "TOGE":
//		 screenDrop=true;
		 score=400;
		 registUpper=1;
		 registPress=2;
		 score=400;
//		 charSpriteHeight=38;
		 face = imgDie= imgWalk="img/toge";
		 TOGECNT++;
		  if(option==1){
			xMove=Math.abs(xMove);
			hFace=1;
		  }
		break;
		case "TAMAGO":
		 screenDrop=true;
		 score=200;
		 registPress=1;
		 xMove=xAccel=0;
		 yMove=-15.1;
		 yAccel=2;
		 yDropSpeedMax=10;
		 face = imgWalk="img/tamago";
		 imgDie="img/togeR";
		 TOGECNT++;
		 this.plRight = ".gif";
		 this.plLeft  = ".gif";
		break;

		case "BREATH":
		 registPress=2;
		 charSpriteWidth=48;
		 charSpriteHeight=24;
		 charBodyWidth=32;
		 charBodyHeight=8;
		case "CANNONBALL":
		 if(mode=="CANNONBALL"){
			 face = imgDie= imgWalk="img/cannonball";
			 if(RND(128)==64){ // レアモンスター
			 score*=20;
			 stepScore*=20;
			 face = imgDie= imgWalk="img/toriyama";
			 }
			 charSpriteWidth =32;
			 charSpriteHeight=32;
			 charBodyWidth   =24;
			 charBodyHeight  =24;
			 YY+=4;
		 }else{
		  face = imgDie= imgWalk="img/breath";
		  plRight = ".gif";
		  plLeft  = ".gif";
		 }
		  cSprX=(charSpriteWidth  - charBodyWidth  ) / 2;
		  cSprY=(charSpriteHeight - charBodyHeight ) / 2;
		 screenDrop=true;
		 xMove*=4;
		 yAccel=0;
		 registKick=2;
		 registFire=1;
		 registUpper=2;
		 hasGroupCollision=false;
		 checkWall=false;
		 checkFloor=false;
		 checkStage=false;
		 if(option == 1){
			xMove=Math.abs(xMove);
			hFace=1;
		 }
		break;


		case "FLYFISH":
		 score=400;
//		 screenDrop=true;
		 xMove=-6-RND(4);
		 stepScore=400;
		 yJump=21.5+RND(8);
		 yAccel=1;
		 checkFloor=false;
		 checkWall=false;
		 checkStage=false;
		 hasGroupCollision=false;
		 FISHCNT++;
		 face = imgDie= imgWalk="img/sakana";
		  if(option==1){
			xMove=Math.abs(xMove);
			hFace=1;
		  }
		break;
		case "SWIMFISH":
		 score=400;
//		 screenDrop=true;
		 checkFloor=false;
		 checkWall=false;
		 checkStage=false;
		 xMove=-2;
		 yMove= (RND(10) -5)/4;
		 yAccel=0;
		 hasGroupCollision=false;
		 face = imgDie= imgWalk="img/sakana";
		 FISHCNT++;
		 if(RND(10)>=7){
			face = imgDie= imgWalk="img/sakanaG";
			xMove*=1.2;
		 }

		  if(option==1){
			xMove=Math.abs(xMove);
			hFace=1;
		  }
		break;
		case "SQUID":
		 score=400;
//		 screenDrop=true;
		 checkFloor=false;
		 checkWall=false;
		 checkStage=false;
		 xMove= -4;
		 yMove= 3;
		 yAccel=0;
		 hasGroupCollision=false;
		 face = imgDie= imgWalk="img/ika";
		 imgWalk2="img/ikaswim";
		 this.plRight = ".gif";
		 this.plLeft  = ".gif";
		 FISHCNT++;
		  if(option==1){
			xMove=Math.abs(xMove);
			hFace=1;
		  }
		break;
	}
 }

	this.face=this.imgWalk+((this.hFace > 0 ) ? this.plRight : this.plLeft);

//	this.o.setBitmap(UNDEF_GIF,this.charSpriteWidth,this.charSpriteHeight);


	this.myGroup;

	this.action=actKuri;
	this.kill=killKuri;
	this.show  =basicShow;
	this.entry = enemyEntry;
	this.collision=enemyCollision;
	this.onCollision=kuriCollision;
	
	
	createCacheImage(this.mode,
		this.imgWalk+this.plRight,this.imgWalk+this.plLeft,
		this.imgDie+this.plRight,	this.imgDie+this.plLeft
	);
} //

function kuriCollision(obj){
 with(this){
 if(alive<0)return -1;
 if(obj.alive<0)return -1;
 if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
  switch(obj.mind){
   case MindCode.ENEMY:
    if(!hasGroupCollision || !obj.hasGroupCollision)break;
	 if(XX >= obj.XX)
		xMove=Math.abs(xMove);
	 else
		xMove=-Math.abs(xMove);

   break;
   case MindCode.FIRE:
	if(registFire > 0)break;
	obj.getScore(this.score);
	kill("FIRE");
   break;
   case MindCode.UPPER:
	if(registUpper > 1)break;
	if(registUpper > 0){
		yMove=yBounce;
		break;
	}

	 obj.getScore(this.upperScore);
	if(mode=="PATA" || mode=="PATA-VG" || mode== "PATA-HG"){
		var k = createEnemy(myGroup,XX,YY,EnemyCode.KAME,"UPPER");
		k.xMove = ( XX > obj.XX ) ? xMove : -xMove
		kill("DROP");
	}else
	if(mode=="PATA-V" || mode== "PATA-H"){
		var k = createEnemy(myGroup,XX,YY,EnemyCode.KAME_AKA,"UPPER");
		k.xMove = ( XX > obj.XX ) ? xMove : -xMove
		kill("DROP");
	}else{
	 obj.getScore(score);
	 kill("UPPER");
	}
   break;
   case MindCode.KICK:
		if(registKick>0)break;
		obj.getScore(score);
		obj.getKickBonus();
		kill("KICK");
   break;
   case MindCode.PLAYER:
	if(obj.star == true){
		obj.getStarBonus();
		obj.getScore(score);
		kill("STAR");
	}else{
	 var h = stepOnEnemyCollision(obj,this); // 踏みつけ判定

	  if(	
	  	(mode == "PATA" || mode == "SQUID") && 
	  	(STAGEMODE !="WATER") &&
	  	(obj.yMove>5)
	    ){
		h=1;
	  }

	 if(h>0 && registPress <= 0){
	  if(registPress < 0){
		kill("PRESS");
		obj.stepOnEnemy(this);
		obj.getScore(stepScore);
	  }else
	  {
		if(mode=="PATA" || mode=="PATA-VG" || mode== "PATA-HG"){
		 obj.stepOnEnemy(this);
		 obj.getScore(stepScore);
		 createEnemy(myGroup,XX,YY,EnemyCode.KAME,"PATA").xMove=xMove;
		 kill("DROP");
		}else
		if(mode=="PATA-H" || mode=="PATA-V"){
		 obj.stepOnEnemy(this);
		 obj.getScore(stepScore);
		 createEnemy(myGroup,XX,YY,EnemyCode.KAME_AKA,"PATA").xMove*=hFace;
		 kill("DROP");
		}
	  }
	 }else
	 {
		if(obj.damage(this)){
		 if( mode=="PATA" || mode=="PATA-VG" || mode=="PATA-HG" || mode=="PATA-H" || mode=="PATA-V" || mode=="TOGE" ){
		 if(obj.XX > this.XX)this.xMove=Math.abs(this.xMove);
		 else this.xMove = -Math.abs(this.xMove);
		 }
		}

	 }
	}
   break;
  }
 }
} //

function actKuri(){
 with(this){
 if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	if(screenDrop==true)return kill("DROP");
	else
	return -1;
  }
  if(hasGroupCollision)groupCollision(this,myGroup);
  basicMove(this);

	face=imgWalk+((hFace > 0 ) ? plRight : plLeft);
 switch(mode){
	case "PATA-V":case "PATA-VG":
	 hFace=(XX > getPlayerObject(0).XX) ? -1 : 1;
	case "PATA-H":case "PATA-HG":
	 xMove+=xAccel;
//	 yMove+=yAccel;
	  if(Math.abs(xMove)>xSpeedMax)xAccel*=-1;
	  if(Math.abs(yMove)>ySpeedMax)yAccel*=-1;
	break;
	case "TAMAGO":
	  if(yMove==0){
		hFace=(XX > getPlayerObject(0).XX) ? -1 : 1;
		createEnemy(myGroup,XX,YY,EnemyCode.TOGE,hFace).screenDrop=true;
		kill("DROP");
	  }
	break;
	case "SQUID":
	var cp=counter%30;
	 if(cp==0){
		xMove=((XX > getPlayerObject(0).XX) ? -4 : 4);
		yMove=-5-RND(5);
	 }else
	 if(cp==10){
		xMove=0;
		yMove=5+RND(5);
	 }
	 if(cp<=15){
		face=imgWalk2+((hFace > 0 ) ? plRight : plLeft);
	 }else{
		xMove=0;
		yMove=2;
		face=imgWalk+((hFace > 0 ) ? plRight : plLeft);
	 }
	case "SWIMFISH":
	 if(YY<WIN.SCROLL_TOP+BGBLOCKSIZE_Y*1){
			yMove=Math.abs(yMove);
			YY+=yMove;
	 }
	 else
	 if(YY>WIN.SCROLL_TOP+SCREEN_Y-charHeight*2.5){
			yMove=-Math.abs(yMove);
			YY+=yMove;
	}
	break;
 }


	if((XX > WIN.SCROLL_X_MAX - charBodyWidth) ||
	  (XX < WIN.SCROLL_X_MIN) ||
	  (YY > WIN.SCROLL_Y_MAX && yDropKill)
	  )kill("DROP");

  counter++;
 }
} //
function killKuri(kmode){
 with(this){
  switch(kmode){
	case "drop":case "DROP":
	break;
	case "star":case "STAR":
	case "upper":case "UPPER":
	case "fire":case "FIRE":
	case "kick":case "KICK":
	 if(mode=="PATA" || mode=="PATA-V" || mode == "PATA-H"){
		plLeft=plRight=".gif";
	 }
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 dd.xMove=xMove;
	break;
	case "press": case "PRESS":
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"press",this);
	//  if(mode == "CANNONBALL")dd.o.setFlipV(false,false);
	break;
  }

  if(mode=="TOGE" || mode=="TAMAGO")TOGECNT--;
  else
  if(mode=="SWIMFISH" || mode=="SQUID" || mode=="FLYFISH")FISHCNT--;

  alive=o.kill();
 }
} //


function Kame(obj,mode,x,y,option){ // 基本ザコ
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	T.score=200;
	T.xMoveDefault=T.xMove;
	T.kickXMove=11.5;
	T.ghostTimer=0;
	
	T.imgWalk  = "img/KMGwalk";
	T.imgSleep = "img/KMGsleep";
	T.imgWake  = "img/KMGwake";
	T.imgDie   = "img/KMGsleep";
	
	T.registFire  = -1; //
	T.registUpper = -1; //
	T.registKick  = -1; //
	T.registPress = -1; //


	if(mode == "AKA"){
		T.checkFloor=true;
		T.checkFloorDefault=true;
		T.imgWalk  = "img/KMRwalk";
//		T.imgSleep = "img/KMRsleep";
		T.imgWake  = "img/KMRwake";
		T.imgDie   = "img/KMGsleep";
	}else
	if(mode == "KURO"){
		T.checkFloor=false;
		T.checkFloorDefault=false;
		T.imgWalk  = "img/KMBwalk";
		T.imgSleep = "img/KMBsleep";
		T.imgWake  = "img/KMBwake";
		T.imgDie   = "img/KMBsleep";
		if(RND(64)==10){ //レアモンスター
			mode="KATO";
			T.score    = 3000;
			T.stepScore= 1000;
			T.imgWalk  = "img/katochanwalk";
			T.imgSleep = "img/katochansleep";
			T.imgWake  = "img/katochanwake";
			T.imgDie   = "img/katochansleep";
		}
		T.registFire = 1;
	}else{
		T.checkFloor=false;
		T.checkFloorDefault=false;
		T.mode="MIDORI";
	}
	
	
	T.plRight = "R.gif";	T.plLeft  = "L.gif";
	T.plC=".gif";
	T.face=T.imgWalk+T.plLeft;
	T.face=UNDEF_GIF;

	T.mind = MindCode.ENEMY;
	T.kMode="WALK";
	T.kickBonus=0;
	T.kCounter=0;
	T.sleepCounter=0;
//	T.sleepCounterStart=150;
	T.sleepCounterStart=150;
	T.master=getPlayerObject(0);

	basicEnemyInitCharacter(this,obj,mode,x,y,900,24,24,32,38);




	T.myGroup;

	T.action=actKame;
	T.kill=killKame;
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=kameCollision;
	
	T.setKMode=setKameMode;
	
	T.getScore=function(n){
			//createEnemy(this.master,this.XX,this.YY,"SCORE",n);
			this.master.getScore(n);
		   };
	T.getKickBonus=kameKickBonus;


	
	createCacheImage("KAME-"+mode,
		T.imgWalk+T.plRight,T.imgWalk+T.plLeft,
		T.imgDie+T.plRight,	T.imgDie+T.plLeft
	);
	
	if(option=="UPPER"){
		 T.yMove=T.yBounce;
		 T.setKMode("SLEEP");
		 T.ghostTimer=8;
	}else
	if(option=="PATA")
		T.ghostTimer=8;

} //

function actKame(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	if(kMode=="KICK")return kill("DROP");
	return -1;
  }
  if(hasGroupCollision)groupCollision(this,myGroup);
  basicMove(this);


  switch(kMode){
	case "WALK":
	 hFace=xMove/Math.abs(xMove);
	 face=imgWalk+((hFace > 0 ) ? plRight : plLeft);
	break;
	case "SLEEP":
	 if(xMove!=0)sleepCounter=sleepCounterStart;
	 if(yMove==0)xMove=0;
	 face=(sleepCounter > 64) ? imgSleep : imgWake;
	 if(sleepCounter--==0)setKMode("WALK");
	 face=imgSleep+plC;
	 if(sleepCounter<64)face=imgWake+plC;
	break;
	case "KICK":
	 hFace=xMove/Math.abs(xMove);
	 face=imgSleep+plC;
	break;
  } //


  ghostTimer--;

	if((XX > WIN.SCROLL_X_MAX - charBodyWidth) ||
	  (XX < WIN.SCROLL_X_MIN) ||
	  (YY > WIN.SCROLL_Y_MAX)
	  )kill("DROP");
 }
} //

function killKame(killmode){
 with(this){
  switch(killmode){
	case "DROP":
	break;
	case "STAR":
	case "FIRE":
	case "KICK":
	 plRight=plLeft=".gif";
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 dd.xMove=xMove;
	break;
	case "PRESS":
	 return;
  }
  alive=o.kill();
 }
} //


function kameCollision(obj){
 with(this){
 if(alive<0)return -1;
// if(obj.alive<0)return -1;
 if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
  switch(obj.mind){
   case MindCode.ENEMY:
    if(!hasGroupCollision || !obj.hasGroupCollision)break;
	if(kMode=="WALK"){
		xMove*=-1;
	 if(XX >= obj.XX)
		xMove=Math.abs(xMove);
	 else
		xMove=-Math.abs(xMove);
	}
   break;
   case MindCode.FIRE:
	if(registFire > 0)break;
	obj.getScore(score);
	kill("FIRE");
   break;
   case MindCode.UPPER:
	if(kMode=="SLEEP"){ //ボーナス関係
		if(sleepCounter < 64){
			var c=parseInt((64-sleepCounter)/8);
			var b=obj.master.getBonus(c);
			createEffect(this.XX,this.YY,EffectCode.SCORE,b);
		}
	}
	setKMode("SLEEP");
	obj.getScore(upperScore);
	o.setFlipV(true,false);
	 yMove=yBounce;
	 if(XX>obj.XX)	xMove =  4;
	 else		xMove = -4;

   break;
   case MindCode.KICK:
	if(registKick>0)break;
	obj.getScore(score);
	obj.getKickBonus();
	kill("KICK");
   break;
   case MindCode.PLAYER:
	if(obj.star){
		obj.getStarBonus();
		kill("STAR");
	}else{
	 if(ghostTimer>0)break;

	 var h = stepOnEnemyCollision(obj,this); // 踏みつけ判定
	 if(kMode=="SLEEP"){
		master=obj;
		setKMode("KICK");
		 if(XX>obj.XX)	this.xMove =  kickXMove;
		 else		this.xMove =  kickXMove*-1;
		XX+=xMove;

		if(sleepCounter < 64){
			var c=parseInt((64-sleepCounter)/8);
			var b=obj.getBonus(c);
			createEffect(this.XX,this.YY-20,EffectCode.SCORE,b);
		}
//		getKickBonus();


//		if(h>0)obj.stepOnEnemy(this);
		ghostTimer=7;

		break;
	 }else
	 if(h > 0){ // PRESS
		ghostTimer=3;
		obj.stepOnEnemy(this);
		setKMode("SLEEP");
	 }else{ // 
//	 	if(kMode=="KICK" && obj.xMove*xMove>0)return; //進行方向が同じ
		if(obj.damage(this)){
		 if(obj.XX > this.XX)this.xMove=Math.abs(xMove);
		 else this.xMove = -Math.abs(xMove);
		}
	 }
	}
   break;
  }
 }
} //

function setKameMode(m){
 with(this){
  switch(m){
	case "SLEEP":
	case "sleep":
		kMode="SLEEP";
		mind=MindCode.ENEMY;
		sleepCounter=sleepCounterStart;
		xMove=0;
		yMove=0;
		kickBonus=0;
	break;
	case "KICK":
	case "kick":
		kMode="KICK";
		mind=MindCode.KICK;
		checkFloor=false;
	break;
	case "WALK":
	case "walk":
		kMode="WALK";
		mind=MindCode.ENEMY;
		xMove=xMoveDefault;//*hFace;
		checkFloor=checkFloorDefault;
		o.setFlipV(false,false);
		kickBonus=0;
	break;
  }
 }
} //

function kameKickBonus(){
	var b=this.master.getBonus(this.kickBonus++);
	createEffect(this.XX,this.YY,EffectCode.SCORE,b);
} //

function MonsterFlower(obj,mode,x,y,option){
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	T.xMove=0;
	T.yMove=2;

	T.score=800;
	T.animateCounter=-RND(20);
	
	T.imgWalk  = "img/Mflower";
	T.imgDie   = "img/Mflower";
	
	T.registFire  = -1; //
	T.registUpper = -1; //
	T.registKick  = -1; //
	T.registPress =  1; //
	T.hasGroupCollision = false;


	if(mode == "AKA"){
	}

	T.plRight = ".gif";	T.plLeft  = ".gif";
	T.face=T.imgWalk+T.plRight;
	T.face="UNDEF_GIF";

	T.mind = MindCode.ENEMY;


	basicEnemyInitCharacter(this,obj,mode,x,y,90,32,32,32,48);

	T.XX=parseInt(T.XX/T.charWidth) * T.charWidth-T.charBodyWidth/2;
	T.YY=parseInt(T.YY/T.charHeight) * T.charHeight+T.charHeight-T.charBodyHeight;
	T.topYY=T.YY+2;
	T.YY+=T.charHeight * 2;
	T.bottomYY=T.YY;

	T.o.moveTo(T.XX,T.YY);

	T.myGroup;

	T.action=actMFlower;
	T.kill=killMFlower;
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=mFlowerOnCollision;
	

	
	createCacheImage("MFLOWER-"+mode,
		T.imgWalk+T.plRight,T.imgWalk+T.plLeft,
		T.imgDie+T.plRight,	T.imgDie+T.plLeft
	);
	
} //

function actMFlower(){
 with(this){
  if(alive < 0)return;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
  face=imgWalk+plRight;
  var touch=false;
	var P=getPlayerObject(0);
	var pl=P.XX,pr=P.XX+P.charBodyWidth;
	var dp=charWidth-charBodyWidth / 2  + 3;

	// 土管密着判定
	if(pr > XX-dp && pl < XX+charBodyWidth+dp){
		touch=true;
//		Body.style.border="1px solid red";
	}
//		Body.style.border="";

  if(animateCounter<=0){
	if(touch)animateCounter--;
  }else
  if(animateCounter<50){
	YY-=yMove;
	if(YY<topYY){
		YY=topYY;
		animateCounter=49;
	}
  }else
  if(animateCounter<65){
  }else{
	YY+=yMove;
	if(YY>bottomYY){
		YY=bottomYY;
		animateCounter=-RND(20)-10;
	}
  }


  animateCounter++;
  counter++;
 }
} //

function killMFlower(kmode){
 with(this){
  switch(kmode){
	case "drop":case "DROP":
	break;
	case "star":case "STAR":
	case "upper":case "UPPER":
	case "fire":case "FIRE":
	case "kick":case "KICK":
	 //var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 //dd.xMove=xMove;
	break;
  }
  alive=o.kill();
 }
} //

function mFlowerOnCollision(obj){
 with(this){
 if(alive<0)return -1;
  if(YY>=topYY+charBodyHeight)return -1;
  switch(obj.mind){
	case MindCode.KICK:
	 obj.getKickBonus();
	case MindCode.FIRE:
	 obj.getScore(score);
	 kill("FIRE");
	break;
	case MindCode.PLAYER:
	if(obj.star == true){
		obj.getStarBonus();
		obj.getScore(score);
		kill("FIRE");
	}else{
		obj.damage(this);
	}
	break;
  }
 }
} //

function FireBubble(obj,mode,x,y,option){
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	T.xMove=0;
	T.yMove=0;
	T.yJump=40.1;
	T.yAccel=2;

	T.score=800;
	T.jumpRate=40;
	T.animateCounter=RND(T.jumpRate);
	
	T.imgWalk  = "img/bubble.gif";
	T.imgWalk2 = "img/bubbleD.gif";
	T.imgDie   = "img/bubbleD.gif";
	
	T.registFire  = 2; //
	T.registUpper = 2; //
	T.registKick  = 2; //
	T.registPress = 2; //
	T.hasGroupCollision = false;


	T.plRight = ".gif";	T.plLeft  = ".gif";
	T.face=T.imgWalk+T.plRight;


	T.mind = MindCode.ENEMY;


	basicEnemyInitCharacter(this,obj,mode,x,y,90,24,24,32,32);

	T.XX=parseInt(T.XX/T.charWidth ) * T.charWidth+(T.charWidth-T.charBodyWidth)/2;
	T.YY=parseInt(T.YY/T.charHeight) * T.charHeight;
	T.topYY=T.YY+2;
	T.YY+=T.charHeight * 2;
	T.bottomYY=T.YY;

	var ya=T.yAccel,yj=-T.yJump,yy=0;
	for(var i=0;i<100;i++){yj+=ya;yy+=yj;if(yj>=0)break;}

	T.bottomYY=T.YY=T.YY-yy;
	T.o.moveTo(T.XX,T.YY);


	T.myGroup;

	T.action=actFireBubble;
	T.kill=function(){this.alive=this.o.kill();};
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=fireBubbleOnCollision;
	

	
	createCacheImage("BUBBLE",
		T.imgWalk+T.plRight,T.imgWalk+T.plLeft
	);
	
} //

function actFireBubble(){
 with(this){
  if(alive < 0)return;
  if(checkScreen(XX,WIN.SCROLL_TOP,charBodyWidth,charBodyHeight) < 0)return -1;

  yMove+=yAccel;
  if(YY > bottomYY){
	YY=bottomYY;
	yMove=0;
	animateCounter=RND(jumpRate);
	o.setVisibility(false,false);
  }else
  if(YY == bottomYY){
	if(animateCounter<=0){
	 yMove=-yJump;
	 o.setVisibility(true,false);
	}else{
	 yMove=0;
	}
  }

  face=(yMove<0)?imgWalk:imgWalk2;

  YY+=yMove;
  animateCounter--;
  counter++;
 }
} //

function fireBubbleOnCollision(obj){
 with(this){
 if(alive<0)return -1;
 if(yMove==0)return -1;
  switch(obj.mind){
	case MindCode.PLAYER:
		obj.damage(this);
	break;
  }
 }
} //

function Kumozo(obj,mode,x,y,option){
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	T.xMove=2;
	T.yMove=0;
	T.yJump=0;
	T.yAccel=0;

	T.score=1000;
	T.stepScore=1000;
	T.attackRate=100;
	T.attackCounter=RND(T.attackRate);
	T.sleepCounter=0;
	T.sleepTime=50;
	T.animateCounter=0;
	T.active=true;
	
	T.imgWalk  = "img/kumozo";
//	T.imgWalk2 = "img/kumozo";
	T.imgWalk2 = "img/kumozoB";
	T.imgDie   = "img/kumo";
	
	T.registFire  = -1; //
	T.registUpper = -1; //
	T.registKick  = -1; //
	T.registPress = -1; //
	T.hasGroupCollision = false;


	T.plRight = ".gif";	T.plLeft  = ".gif";
	T.face=T.imgWalk+T.plRight;


	T.mind = MindCode.ENEMY;


	basicEnemyInitCharacter(this,obj,mode,x,y,850,24,24,32,48);
	T.cSprY/=2;

	T.XX=parseInt(x/T.charWidth)*T.charWidth;
	T.YY=parseInt(y/T.charHeight) * T.charHeight;

	T.oldXX=T.XX;T.oldYY=T.YY;// 初期位置を復活ポイントにする

	T.XX=WIN.SCROLL_LEFT+SCREEN_X/2;


	T.o.moveTo(T.XX,T.YY);


	T.myGroup;

	T.action=actKumozo;
	T.kill=killKumozo;
	T.show  =basicShow;
	T.entry = enemyEntry;
	T.collision=enemyCollision;
	T.onCollision=kumozoOnCollision;
	

	
	createCacheImage("KUMOZO",
		T.imgWalk+T.plRight,T.imgWalk2+T.plRight
	);
	
} //

function actKumozo(){
 with(this){
  if(alive<0)return -1;
  if(--sleepCounter>0)return -1;
  var iscreen=checkScreen(XX,WIN.SCROLL_TOP,charBodyWidth,charBodyHeight);
  var oscreen=checkScreen(oldXX,WIN.SCROLL_TOP,charBodyWidth,charBodyHeight);
  var P=getPlayerObject(0);

 // 死んで一定時間たったら復活させるが、復活ポイントが画面内にあったら復活しない
  if(sleepCounter==0){
	if(oscreen < 0){
		XX=oldXX;
		o.moveTo(XX,YY);
		o.setVisibility(true);
	}else
		return kill("DROP");
  }


  if(counter%50==0){
	xMove=Math.abs(xMove);
	if(XX>P.XX)xMove*=-1;
  }
  if(oldXX < P.XX){
	xMove=-8;
  }

  if(iscreen < 0){
	XX+=xMove*10;
  }else{
	if(LEFTSCROLL  && P.xScroll<0)XX+=P.xScroll;
	if(RIGHTSCROLL && P.xScroll>0)XX+=P.xScroll;
//	if(UPSCROLL    && P.yScroll<0)XX+=yMove+P.yScroll;
//	if(DOWNSCROLL  && P.yScroll>0)XX+=yMove+P.yScroll;
//	YY+=P.yScroll;
	XX+=xMove;
	YY+=yMove;
	if(attackCounter--<=0){
		if(TOGECNT<TOGECNTMAX)createEnemy(myGroup,XX,YY,EnemyCode.TAMAGO);
		attackCounter=RND(attackRate)+10;
		face = imgWalk  + plLeft;
	}else
	if(attackCounter == 5){
		face = imgWalk2 + plLeft;
	}
  }
	animateCounter--;
	counter++;
 }
} //

function killKumozo(kmode){
 with(this){
  if(alive<0)return -1;
	 o.setVisibility(false,false);
  switch(kmode){
	case "drop":case "DROP":
	break;
	case "star":case "STAR":
	case "upper":case "UPPER":
	case "fire":case "FIRE":
	case "kick":case "KICK":
	case "press": case "PRESS":
	 sleepCounter=sleepTime;
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 dd.xMove=xMove;
	 XX=-100;
	 return -1;
	break;
  }

  alive=o.kill();
  return -1;
 }
} //


function kumozoOnCollision(obj){
 with(this){
 if(alive<0)return -1;
  switch(obj.mind){
	case MindCode.KICK:
	 obj.getKickBonus();
	case MindCode.FIRE:
	case MindCode.UPPER:
	 obj.getScore(score);
	 kill("FIRE");
	break;
	case MindCode.PLAYER:
	if(obj.star == true){
		obj.getStarBonus();
		obj.getScore(score);
		kill("FIRE");
	}else{
	 var h = stepOnEnemyCollision(obj,this); // 踏みつけ判定
	 if(h > 0){ // PRESS
		obj.stepOnEnemy(this);
		obj.getScore(score);
		kill("PRESS");
	 }else{ // 
		obj.damage(this);
	 }
	}
	break;
  }
 }
} //

function Cannon(obj,mode,x,y,option){
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	T.xMove=0;
	T.yMove=2;

	T.score=800;
	T.rate=200;
	T.animateCounter=RND(T.rate);
	
	T.imgWalk  = "img/cannon";
	T.imgDie   = "img/cannon";
	
	T.registFire  = 2; //
	T.registUpper = 2; //
	T.registKick  = 2; //
	T.registPress = 2; //


	T.plRight = ".gif";	T.plLeft  = ".gif";
	T.face=T.imgWalk+T.plRight;


	T.mind = MindCode.ENEMY;


	basicEnemyInitCharacter(this,obj,mode,x,y,910,32,32,32,32);

//	T.XX=parseInt(T.XX/T.charWidth ) * T.charWidth;
//	T.YY=parseInt(T.YY/T.charHeight) * T.charHeight;

	T.o.moveTo(T.XX,T.YY);
	T.o.setBitmap(this.face,T.charWidth,T.charHeight);
//	if(DEBUGMODE)T.o.setZPosition(150);



	T.myGroup;

	T.action=actCannon;
	T.kill=function(){};
	T.show  =function(){};
	T.entry = enemyEntry;
	T.collision=function(){};
	T.onCollision=function(){};
	

	setXYpointObject(T.XX,T.YY,3,-1);
} //

function actCannon(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;

  var P=getPlayerObject();
  if( XX < P.XX )hFace=1;
  else hFace=-1;
  
  if(animateCounter<=0){
	createEnemy(myGroup,XX,YY,EnemyCode.CANNONBALL,hFace).screenDrop=true;
	animateCounter=RND(rate)+10;
  }

	var pl=P.XX,pr=P.XX+P.charBodyWidth;
	var dp=charWidth+3;

	if( XX <= pr + 2 && XX+charBodyWidth >= pl - 2 ){
		animateCounter=RND(rate)+10;
	}

  animateCounter--;
  counter++;
 }
} //


function Firebar(obj,mode,x,y,option){
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	
	T.imgWalk  = "img/KMGwalk";
	T.imgDie   = "img/KMGwalk";
	
	T.registFire  = 2; //
	T.registUpper = 2; //
	T.registKick  = 2; //
	T.registPress = 2; //
	T.len=6;

	T.hasGroupCollision=false;
	
	
	T.plRight = ".gif";	T.plLeft  = ".gif";
	T.face="img/fireball.gif";


	T.mind = MindCode.ENEMY;

//	basicEnemyInitCharacter(this,obj,mode,x,y,900,24,24,32,36);



	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 14;
	T.charBodyHeight = 14;
	T.charSpriteWidth  = 16;
	T.charSpriteHeight = 16;
	 T.sprX=T.charSpriteWidth/2;
	 T.sprY=T.charSpriteHeight/2;

	T.XX=parseInt(T.XX/T.charWidth ) * T.charWidth  + T.charWidth  / 2;
	T.YY=parseInt(T.YY/T.charHeight) * T.charHeight + T.charHeight / 2;

	T.rotate=0.1+RND(360);
	T.rotR=option;
	T.o=Array();
	
	switch(mode){
	 case "LONG":
	  T.len*=2;
	 break;
	 case "VERYLONG":
	  T.len*=3;
	 break;
	}

 with(this){
	for(var i=0;i<len;i++){
		o[i]=new Sprite();
		o[i].setBitmap(face,charSpriteWidth,charSpriteHeight);
		o[i].moveTo(XX-T.sprX,YY-i*charSpriteHeight-T.sprY);
		o[i].setVisibility(false,false);
		o[i].setZPosition(500);
	}
 }
	T.rLength=T.len*T.charBodyHeight;
	T.rx=  0;
	T.ry=-T.charBodyHeight;

	T.myGroup;

	T.action=actFirebar;
	T.kill=killFirebar;
	T.show  =showFirebar;
	T.entry = function(group){
		group.addEnemy(this);
		this.myGroup=group;
		return this;
	}
	T.collision=collisionFirebar;
	T.onCollision=onCollisionFirebar;


	setXYpointObject(x,y,3);
	
	T.setVisibility = function(flag){
		with(this){
		if(o[0].visible == flag)return;
			for(var i=0;i<len;i++)
				o[i].setVisibility(flag,false);
		}
	}


} //

function actFirebar(){
 with(this){
 if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	setVisibility(false);
	return -1;
	}
  else
  	setVisibility(true);

  rotate+=rotR;

   while(rotate<0)rotate=360-rotate;

  var r=Math.PI*2/360*rotate;


  rx= - (-charBodyWidth ) * Math.sin(r);
  ry= + (-charBodyHeight) * Math.cos(r);

 }
} //
function killFirebar(){
 with(this){
  for(var i=0;i<len;i++)o[i].kill();
  alive=-1;
 return -1;
 }
} //
function showFirebar(){
 with(this){
 if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;

  var rxx=rx*1.1;
  var ryy=ry*1.1;
	for(var i=0;i<len;i++)
		o[i].moveTo(XX+rxx*i-sprX,YY+ryy*i-sprY);

 }
} //
function collisionFirebar(x,y,w,h,obj){
 with(this){
  if(obj.mind!=MindCode.PLAYER)return -1;
  if(alive<0)return -1;
   if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;


 // はじめにおおまかな当たり判定
 if(Math.abs(XX-x) > rLength + w)return -1;
 if(Math.abs(YY-y) > rLength + y)return -1;
 if(rotate % 180 == 90)return -1; //手抜き


  var xp=Array(x,x+w,x,x+w);
  var yp=Array(y,y,y+h,y+h);


  var xm=0;


  // 線の真ん中
  var rr=rLength * rLength / 4;
  var rrcX=rx*len/2+XX;
  var rrcY=ry*len/2+YY;

  var xm=-ry/rx;
  var rgt=0,lft=0;
  for(var i=0;i<xp.length;i++){ //線の右にある点と左にある点をカウント
	var xs=XX-xp[i];
	if(xm*xs + YY > yp[i])	lft++;
	else			rgt++;
  }

	// 線を完全に囲んでしまう大きさのキャラには使えない
  if( rgt > 0 && lft > 0 ){
   for(var i=0;i<xp.length;i++){
	var cx=rrcX-xp[i];
	var cy=rrcY-yp[i];
	if(cx*cx+cy*cy < rr)return onCollision(obj);
   }
  }
	return -1;

 }
} //
function onCollisionFirebar(obj){
 with(this){
  if(obj.mind==MindCode.PLAYER){
	obj.damage();
	return 1;
  }
 }
} //

function HammerBaki(obj,mode,x,y,option,group){ //範馬兄弟
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	
	T.score=2000;
	T.upperScore=2000;
	T.stepScore=2000;

	T.animateCounter=0;
		T.jumpRate=40;
	T.lastBreath=null;
		T.hammerRate = 50;
	T.hammerCounter=RND(T.hammerRate);
	T.jumpCounter=RND(T.jumpRate);

	T.ignoreFloor=0;
	T.ignoreFloorRate=18;

	T.xMove=1.5;
	T.xAccel=1;
	T.yAccel=4;
	T.yJump =23.5;//6.1;
	T.yDropSpeedMax=11;
	T.hasGroupCollision=false;



	
	T.imgWalk="img/baki";
	T.imgDie="img/baki";

	T.face="img/baki";

	T.plRight = "R.gif";	T.plLeft  = "L.gif";
	T.face=T.imgWalk+T.plRight;
	T.face=UNDEF_GIF;

	T.registFire  = -1; //
	T.registUpper = -1; //
	T.registKick  = -1; //
	T.registPress = -1; //


	


	T.mind = MindCode.ENEMY;


	basicEnemyInitCharacter(this,obj,mode,x,y,900,24,48,32,60);





	T.myGroup=group;

	T.action=actBaki;
	T.kill=killBaki;
	T.show  = basicShow;
	T.entry = enemyEntry;
	T.collision= enemyCollision;
	T.onCollision=bakiOnCollision;
	
	
	T.hammer= new HammerObjectGroup(this,5);

	T.getScore=function(){};

	
	createCacheImage("BAKI",
		T.imgWalk+T.plRight,T.imgWalk+T.plLeft,
		T.nakami+T.plRight,	T.nakami+T.plLeft
	);
	
} //
function actBaki(){
 with(this){
 if(alive<1)return -1;
   if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
//   var rr=RND(15);
   if(RND(15)==1)xMove*=-1;
//   DBG(100,100,rr);
 var PL=getPlayerObject(0);

  yMove+=yAccel;
// コインの上にも乗ったりするのは原作に忠実らしい
   var flPoint  = YY + charBodyHeight     + yMove;
   var flPoint2 = flPoint + charHeight;
  if(yMove>0){
    if( (getXYpointObject(XX+charBodyWidth/2,flPoint ) != 0) && 
	(getXYpointObject(XX+charBodyWidth/2,flPoint2) != 0)
      ){
	yMove=0;
	YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
    }
    else
    if( (getXYpointObject(XX+charBodyWidth/2,flPoint ) != 0) &&
        (ignoreFloor <= 0 ) ){
	yMove=0;
	YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
    }
  }
  if(yMove< 10 ){
	var blPoint  = YY + charBodyHeight *.5;
    if( (getXYpointObject(XX+charBodyWidth/2,blPoint) != 0) ){
	yMove=0;
	YY=parseInt(blPoint/charHeight)*charHeight-charBodyHeight;
    }
  }

   if(yMove==0 && jumpCounter < 0){
	yMove=-yJump;
	jumpCounter=RND(jumpRate)+30;
	ignoreFloor=RND(ignoreFloorRate);
   }

  hFace=(PL.XX > XX ) ? 1 : -1 ;
  face=imgWalk+((hFace > 0) ? plRight : plLeft);


  if(counter>15*128){
	xMove=hFace*6;
  }

   XX+=xMove;//+hFace;
   YY+=yMove;

	if(hammerCounter < 0){
		if(hammerCounter >-100){
			if(hammerCounter%15==0)hammer.call();
		}else{
			  hammerCounter=RND(hammerRate)+30;
		}
	}

	if((XX > WIN.SCROLL_X_MAX - charBodyWidth) ||
	  (XX < WIN.SCROLL_X_MIN) ||
	  (YY > WIN.SCROLL_Y_MAX)
	  )kill("DROP");

  counter++;
  jumpCounter--;
  hammerCounter--;
  ignoreFloor--;
 }
} //

function actBaki_n(){
 with(this){
 if(alive<1)return -1;
   if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0)return -1;
//   var rr=RND(15);
   if(RND(15)==1)xMove*=-1;
//   DBG(100,100,rr);
 var PL=getPlayerObject(0);

  yMove+=yAccel;
// コインの上にも乗ったりするのは原作に忠実らしい
   var ctX = XX + charBodyWidth / 2;
   var flPoint  = YY + charBodyHeight     + yMove;
   var flPoint2 = flPoint + charHeight;
   var fl1=getXYpointObject(ctX,flPoint );
   var fl2=getXYpointObject(ctX,flPoint2 );
//*
  if(yMove>0){
	    if((fl1 > 0)){
			if((fl2 > 0) ||
			   (flPoint2 > SCROLL_Y_MAX) ||
			   (ignoreFloor <= 0 )
			){
			 yMove=0;
			 y=Math.floor(flPoint/charHeight)*charHeight-charBodyHeight;
			}
	   }
  }
//*/
/*
   if(yMove>10){
    if( (getXYpointObject(XX+charBodyWidth/2,flPoint ) != 0) && 
	(getXYpointObject(XX+charBodyWidth/2,flPoint2) != 0 || flPoint2 > SCROLL_Y_MAX)
      ){
	yMove=0;
	YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
    }
    else
    if( (getXYpointObject(XX+charBodyWidth/2,flPoint ) != 0) &&
        (ignoreFloor <= 0 ) ){
	yMove=0;
	YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
    }
   }
//*/

//  els
  if(yMove< 10 ){
	var blPoint  = YY + charBodyHeight *.5;
    if( (getXYpointObject(XX+charBodyWidth/2,blPoint) != 0) ){
	yMove=0;
	YY=parseInt(blPoint/charHeight)*charHeight-charBodyHeight;
    }
  }

   if(yMove==0 && jumpCounter < 0){
	yMove=-yJump;
	jumpCounter=RND(jumpRate)+30;
	ignoreFloor=RND(ignoreFloorRate);
   }

  hFace=(PL.XX > XX ) ? 1 : -1 ;
  face=imgWalk+((hFace > 0) ? plRight : plLeft);


  if(counter>15*128){
	xMove=hFace*6;
  }

   XX+=xMove;//+hFace;
   YY+=yMove;

	if(hammerCounter < 0){
		if(hammerCounter >-100){
			if(hammerCounter%15==0)hammer.call();
		}else{
			  hammerCounter=RND(hammerRate)+30;
		}
	}

	if((XX > WIN.SCROLL_X_MAX - charBodyWidth) ||
	  (XX < WIN.SCROLL_X_MIN) ||
	  (YY > WIN.SCROLL_Y_MAX)
	  )kill("DROP");

  counter++;
  jumpCounter--;
  hammerCounter--;
  ignoreFloor--;
 }
} //
function bakiOnCollision(obj){
 with(this){
  if(alive<0)return -1;
  switch(obj.mind){
	case MindCode.UPPER:
	 obj.getScore(upperScore);
	 kill("UPPER");
	break;
	case MindCode.KICK:
	 obj.getKickBonus();
	case MindCode.FIRE:
	obj.getScore(this.score);
	 kill("FIRE");
	break;
	case MindCode.PLAYER:
	if(obj.star == true){
		obj.getStarBonus();
		kill("FIRE");
	}else{
	 var h = stepOnEnemyCollision(obj,this); // 踏みつけ判定
	 if(h>0){
		kill("PRESS");
		obj.stepOnEnemy(this);
		obj.getScore(stepScore);
	  }else{
		obj.damage(this);
	  }
	}
	break;
  }
 }
} //

function killBaki(kmode){
 with(this){
  switch(kmode){
	case "drop":case "DROP":
	break;
	case "star":case "STAR":
	case "upper":case "UPPER":
	case "fire":case "FIRE":
	case "kick":case "KICK":
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 dd.xMove=xMove;
	break;
	case "press": case "PRESS":
	 var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	 dd.xMove=0;
	 dd.yAccel=3;
	break;
  }
  alive=o.kill();
 }
} //

function Kamezo(obj,mode,x,y,option,group){ //ボス
	var T=this;
	basicEnemyInitParam(this,obj,mode,x,y);
	basicEnemyInitMove(this,obj,mode,x,y);

	
	T.score=8000;
	T.life=5;
	T.animateCounter=0;
		T.jumpRate=70;
	T.lastBreath=null;
		T.breathRate=60;
		T.hammerFlag = false;
		T.hammerWorld= 6;
		T.hammerRate = 200;
	T.hammerCounter=RND(T.hammerRate)+100;
	T.breathCounter=RND(T.breathRate)+100;
	T.jumpCounter=RND(T.jumpRate)+100;
	T.xMove=0;
	T.xAccel=.5;
	T.yAccel=0.3;
	T.yJump =6.5;//6.1;
	T.hasGroupCollision=false;

	T.fireReach = 5; // 亀蔵さんの何画面手前から炎が飛んでくるか

  // ワールドごとの変化	
	 var w=getWorldNumber();
	 T.nakami=Array(
		'img/KRwalkL.gif',
		'img/KMGsleep.gif',
		'img/KMBsleep.gif',
		'img/sakanaL.gif',
		'img/togeL.gif',
		'img/kumozo.gif',
		'img/bakiL.gif',
		'img/kamezoL.gif'
//		'img/pinchL.gif'
	 	);
	  if(w>T.nakami.length)w=T.nakami.length;
	 T.imgDie=T.nakami[w-1];
	 if(T.hammerWorld<= w)T.hammerFlag=true;



	
	T.imgWalk="img/kamezo";
	T.imgFire="img/kamezoB";

	T.face="img/kamezo";

	T.plRight = "R.gif";	T.plLeft  = "L.gif";
	T.face=T.imgWalk+T.plLeft;

	T.registFire  = -1; //
	T.registUpper = -2; //
	T.registKick  =  2; //
	T.registPress =  2; //


	


	T.mind = MindCode.BOSS;


	basicEnemyInitCharacter(this,obj,mode,x,y,900,32,55,64,72);

	T.charHeadWidth  = 16;
	T.charHeadHeight = 24;
	T.hXX=T.XX-T.charHeadWidth;
	T.hYY=T.YY;


	T.h=new Sprite();
	if(DEBUGMODE){
	 T.h.setSize(T.charHeadWidth,T.charHeadHeight);
	 T.h.setZPosition(950);
	 T.h.setVisibility(true,false);
	 T.h.moveTo(T.hXX,T.hYY);
	}
	T.Head=T.h.Body;




	T.myGroup=group;
	T.master=null;
	T.kage=null;

	T.action=actKamezo;
	T.kill=killKamezo;
	T.show  =showKamezo;
	T.entry = function(group){
		group.addEnemy(this);
		this.o.setVisibility(true,false);
		this.myGroup=group;
		if(!this.hammer)
			this.hammer = new HammerObjectGroup(this,10);
		return this;
	}
	T.collision=kamezoCollision;
	T.onCollision=kamezoOnCollision;
	
	
	T.hammer= false;//new HammerObjectGroup(this,10);

	T.getScore=function(){};

	
	createCacheImage("KAMEZO",
		T.imgWalk+T.plRight,T.imgWalk+T.plLeft,
		T.nakami+T.plRight,	T.nakami+T.plLeft,
		"img/pinch.gif","img/pinchL.gif","img/pinchR.gif"
	);
	
	if(BOSS){
	 BOSS.master=this;
	 this.kage=BOSS;
	}

	BOSS=this;
} //

function actKamezo(){
 with(this){
 if(alive<1)return -1;

 var iscreen=checkScreen(XX,YY,charBodyWidth,charBodyHeight);
 var PL=getPlayerObject(0);
 if(Math.abs(XX-PL.XX) > SCREEN_Y*fireReach)return -1;

 var imgtmp=imgWalk;


  xMove=hFace*xAccel;
  yMove+=yAccel;

   var flPoint=YY+charBodyHeight+yMove;
  if(getXYpointObject(XX+charBodyWidth/2,flPoint) != 0 ){
	yMove=0;
	YY=parseInt(flPoint/charHeight)*charHeight-charBodyHeight;
  }



   if(yMove==0 && jumpCounter < 0){
	yMove=-yJump;
	jumpCounter=RND(jumpRate)+20;
   }else{
   }

   if(breathCounter < 0 && hFace < 0){
	if(iscreen > 0)
	 lastBreath=createEnemy(myGroup,hXX-charHeadWidth,YY+charHeadHeight,EnemyCode.BREATH,hFace);
	else
	 callEnemy(XX,YY,EnemyCode.BREATH);
	breathCounter=RND(breathRate)+50;
   }
   else
   if(breathCounter < 13 && hFace < 0){
		imgtmp=imgFire;
   }

  if(lastBreath){
	if(lastBreath.counter <  15){
//		imgtmp=imgFire;
	 if(lastBreath.counter <  8){ // 吐いた直後は一緒に動く
		lastBreath.YY+=yMove+2;
	 }
	}
  }

  if(hammerFlag==true && iscreen >0){
	if(hammerCounter < 0){
		if(hammerCounter >-30){
			if(hammerCounter%5==0)hammer.call();
		}else{
			  hammerCounter=RND(hammerRate)+50;
		}
	}
  }

  if(iscreen > 0){
   XX+=xMove;
   YY+=yMove;
  }

  hFace=(PL.XX > XX ) ? 1 : -1 ;

  face=imgtmp+((hFace > 0) ? plRight : plLeft);

  hXX=(hFace > 0 ) ? (XX+charBodyWidth):(XX-charHeadWidth);
  hYY=YY;

  counter++;
  jumpCounter--;
  breathCounter--;
  hammerCounter--;


 }
} //

function showKamezo(){
 with(this){
  if(alive<0)return -1;
  if(checkScreen(XX,YY,charBodyWidth,charBodyHeight) < 0){
	return -1;
  }
  o.setVisibility(true,false);

   o.setBitmap(face,charSpriteWidth,charSpriteHeight);
   o.moveTo(XX-cSprX,YY-cSprY,false);
	if(DEBUGMODE)h.moveTo(hXX,hYY);
//	hammer.show();

  return 1;
 }
} //

function killKamezo(f){
 with(this){
   if(kage)kage.kill(f);
  switch(f){
	case "FIRE":
	  o.setVisibility(false,false);
	  var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	  dd.xMove=3;
	  dd.yAccel *= .8;
	  dd.animateCounter*=2;
	break;
	case "DROP":
	  o.setVisibility(false,false);
	  imgDie=face;
	  var dd=createEffect(XX,YY,EffectCode.DEAD,"normal",this);
	  dd.yMove=10;
	  dd.yAccel=0;
	  dd.xMove=0;
	break;
  }
 alive=o.kill();
 if(h)h.kill();
 }
} //

function kamezoCollision(x,y,w,hh,obj){
 with(this){
	if(alive<0)return -1;
	if(basicCollisionC(x,y,w,hh,this) > 0)return 1;
	if(basicCollision(x,y,w,hh,hXX,hYY,charHeadWidth,charHeadHeight) > 0)return 1;

	return -1;

 }
} //

function kamezoOnCollision(obj){
 with(this){
  switch(obj.mind){
	case MindCode.FIRE:
	 life--;
	 if(life>0)break;
	  kill("FIRE");
	  obj.getScore(score);
	break;
	case MindCode.PLAYER:
	 obj.damage(this);
	break;
  }
  return 1;
 }
} //

function HammerObjectGroup(master,max){
	this.maxObjects=max;
	this.master=master;
	
	this.obj=Array();
	for(var i=0;i<this.maxObjects;i++)
		this.obj[i]=new HammerObject(master);

	this.call=callHammerObjects;
	this.show=showHammerObjects;
	this.action=actHammerObjects;
	this.collision=collisionHammerObjects;
} //

function callHammerObjects(){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(!obj[i].active){return obj[i].call(this.master);}
 }
} //

function showHammerObjects(){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(obj[i].active)obj[i].show();
 }
} //

function actHammerObjects(){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(obj[i].active)obj[i].action();
 }
} //

function collisionHammerObjects(obj){
 with(this){
  for(var i=0;i<maxObjects;i++)
	if(obj[i].active)obj[i].collision(obj);
 }
} //

function HammerObject(obj){
	var T=this;
	T.active = false;
	T.alive  = 1;
	T.oldXX=T.XX=obj.XX;
	T.oldYY=T.YY=obj.YY;

	T.xAccel=5;
	T.yAccel=2;

	T.yJump=22.2;

	T.xMove=0;
	T.yMove=0;
	T.yDropSpeedMax=20;

	
	T.master=obj;
	T.myGroup=T.master.myGroup;
	T.mind=MindCode.HAMMER;
	T.imgWalk="img/hammer.gif";
	T.face="img/hammer.gif";
	T.face=UNDEF_GIF;


	T.charWidth  = BGBLOCKSIZE_X;
	T.charHeight = BGBLOCKSIZE_Y;
	T.charBodyWidth  = 12;	//当たり判定サイズ
	T.charBodyHeight = 12;
	T.charSpriteWidth  = 16; //グラフィックのサイズ
	T.charSpriteHeight = 16;
	
	T.o=new Sprite();
	T.o.setBitmap(UNDEF_GIF,T.charSpriteWidth,T.charSpriteHeight);
	T.o.setVisibility(false,false);
	T.o.setZPosition(900);
	T.Body=T.o.Body;

	this.call = callHammer;
	this.action = actHammer;
	this.show = showHammer;
	this.kill = killHammer;
	this.collision= function(x,y,w,h){
		if(this.active!=true)return -1;
		return basicCollisionC(x,y,w,h,this);
	};
	this.onCollision = hammerOnCollision;
	this.entry=function(group){
		group.addEnemy(this);
		this.myGroup=group;
		T.o.setVisibility(false,false);
		return this;
	} //
//enemyEntry;

	T.getScore=function(n){this.master.getScore(n);};

//	this.entry(T.master.myGroup);
	this.entry(T.myGroup);

} //

function callHammer(obj){
  with(this){
	XX=obj.XX+obj.charBodyWidth/2;//-charWidth/2;
	YY=obj.YY;
	xMove = xAccel * obj.hFace;
	yMove  = -yJump;
	XX+=xMove;
	active=true;
	alive=1;
	o.setBitmap(imgWalk,charSpriteWidth,charSpriteHeight);
	o.setVisibility(true,false);
	show();
  }
} //

function showHammer(){
 with(this){
  if(!active){
//	o.setVisibility(false,false);
	return -1;
  }
   o.setVisibility(true,false);
   o.moveTo(XX-(charSpriteWidth  - charBodyWidth)/2,
   		  YY-(charSpriteHeight - charBodyHeight),false);
 }
} //
function actHammer(){
 with(this){
  if(!active)return;
  if(	(XX > WIN.SCROLL_LEFT + SCREEN_X) || 
	(XX < WIN.SCROLL_LEFT) || 
	(YY > WIN.SCROLL_TOP + SCREEN_Y)
   )return kill(0);

   oldXX=XX;oldYY=YY;

    yMove+=yAccel;
    if(yMove > yDropSpeedMax)yMove=yDropSpeedMax;

   XX+=xMove;YY+=yMove;
 }
} //

function hammerOnCollision(obj){
 with(this){
  switch(obj.mind){
	case MindCode.PLAYER:
	 obj.damage();
	break;
  }
 }
} //

function killHammer(eflag){
 with(this){
	active=false;
	o.setVisibility(false,false);
	o.setBitmap(UNDEF_GIF,charSpriteWidth,charSpriteHeight);
	if(master){
	 if(master.alive < 0)alive=o.kill();
	}
	return -1;
 }
} //
