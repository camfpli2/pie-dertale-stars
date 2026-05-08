//this next long line of code imports a library so that you can use collision detection
console.log("### p5.collide ###"),p5.prototype._collideDebug=!1,p5.prototype.collideDebug=function(i){_collideDebug=i},p5.prototype.collideRectRect=function(i,t,e,o,r,l,n,c){return i+e>=r&&i<=r+n&&t+o>=l&&t<=l+c},p5.prototype.collideRectCircle=function(i,t,e,o,r,l,n){var c=r,p=l;return r<i?c=i:r>i+e&&(c=i+e),l<t?p=t:l>t+o&&(p=t+o),this.dist(r,l,c,p)<=n/2},p5.prototype.collideCircleCircle=function(i,t,e,o,r,l){return this.dist(i,t,o,r)<=e/2+l/2},p5.prototype.collidePointCircle=function(i,t,e,o,r){return this.dist(i,t,e,o)<=r/2},p5.prototype.collidePointEllipse=function(i,t,e,o,r,l){var n=r/2,c=l/2;if(i>e+n||i<e-n||t>o+c||t<o-c)return!1;var p=i-e,s=t-o,d=c*this.sqrt(this.abs(n*n-p*p))/n;return s<=d&&s>=-d},p5.prototype.collidePointRect=function(i,t,e,o,r,l){return i>=e&&i<=e+r&&t>=o&&t<=o+l},p5.prototype.collidePointLine=function(i,t,e,o,r,l,n){var c=this.dist(i,t,e,o),p=this.dist(i,t,r,l),s=this.dist(e,o,r,l);return void 0===n&&(n=.1),c+p>=s-n&&c+p<=s+n},p5.prototype.collideLineCircle=function(i,t,e,o,r,l,n){var c=this.collidePointCircle(i,t,r,l,n),p=this.collidePointCircle(e,o,r,l,n);if(c||p)return!0;var s=i-e,d=t-o,u=this.sqrt(s*s+d*d),h=((r-i)*(e-i)+(l-t)*(o-t))/this.pow(u,2),y=i+h*(e-i),f=t+h*(o-t);return!!this.collidePointLine(y,f,i,t,e,o)&&(this._collideDebug&&this.ellipse(y,f,10,10),s=y-r,d=f-l,this.sqrt(s*s+d*d)<=n/2)},p5.prototype.collideLineLine=function(i,t,e,o,r,l,n,c,p){var s=((n-r)*(t-l)-(c-l)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t)),d=((e-i)*(t-l)-(o-t)*(i-r))/((c-l)*(e-i)-(n-r)*(o-t));if(s>=0&&s<=1&&d>=0&&d<=1){if(this._collideDebug||p)var u=i+s*(e-i),h=t+s*(o-t);return this._collideDebug&&this.ellipse(u,h,10,10),!p||{x:u,y:h}}return!!p&&{x:!1,y:!1}},p5.prototype.collideLineRect=function(i,t,e,o,r,l,n,c,p){var s,d,u,h,y;return p?(s=this.collideLineLine(i,t,e,o,r,l,r,l+c,!0),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c,!0),u=this.collideLineLine(i,t,e,o,r,l,r+n,l,!0),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c,!0),y={left:s,right:d,top:u,bottom:h}):(s=this.collideLineLine(i,t,e,o,r,l,r,l+c),d=this.collideLineLine(i,t,e,o,r+n,l,r+n,l+c),u=this.collideLineLine(i,t,e,o,r,l,r+n,l),h=this.collideLineLine(i,t,e,o,r,l+c,r+n,l+c)),!!(s||d||u||h)&&(!p||y)},p5.prototype.collidePointPoly=function(i,t,e){for(var o=!1,r=0,l=0;l<e.length;l++){r=l+1,r==e.length&&(r=0);var n=e[l],c=e[r];(n.y>t&&c.y<t||n.y<t&&c.y>t)&&i<(c.x-n.x)*(t-n.y)/(c.y-n.y)+n.x&&(o=!o)}return o},p5.prototype.collideCirclePoly=function(i,t,e,o,r){void 0==r&&(r=!1);for(var l=0,n=0;n<o.length;n++){l=n+1,l==o.length&&(l=0);var c=o[n],p=o[l];if(this.collideLineCircle(c.x,c.y,p.x,p.y,i,t,e))return!0}if(1==r){if(this.collidePointPoly(i,t,o))return!0}return!1},p5.prototype.collideRectPoly=function(i,t,e,o,r,l){void 0==l&&(l=!1);for(var n=0,c=0;c<r.length;c++){n=c+1,n==r.length&&(n=0);var p=r[c],s=r[n];if(this.collideLineRect(p.x,p.y,s.x,s.y,i,t,e,o))return!0;if(1==l){if(this.collidePointPoly(i,t,r))return!0}}return!1},p5.prototype.collideLinePoly=function(i,t,e,o,r){for(var l=0,n=0;n<r.length;n++){l=n+1,l==r.length&&(l=0);var c=r[n].x,p=r[n].y,s=r[l].x,d=r[l].y;if(this.collideLineLine(i,t,e,o,c,p,s,d))return!0}return!1},p5.prototype.collidePolyPoly=function(i,t,e){void 0==e&&(e=!1);for(var o=0,r=0;r<i.length;r++){o=r+1,o==i.length&&(o=0);var l=i[r],n=i[o],c=this.collideLinePoly(l.x,l.y,n.x,n.y,t);if(c)return!0;if(1==e&&(c=this.collidePointPoly(t[0].x,t[0].y,i)))return!0}return!1},p5.prototype.collidePointTriangle=function(i,t,e,o,r,l,n,c){var p=this.abs((r-e)*(c-o)-(n-e)*(l-o));return this.abs((e-i)*(l-t)-(r-i)*(o-t))+this.abs((r-i)*(c-t)-(n-i)*(l-t))+this.abs((n-i)*(o-t)-(e-i)*(c-t))==p},p5.prototype.collidePointPoint=function(i,t,e,o,r){return void 0==r&&(r=0),this.dist(i,t,e,o)<=r},p5.prototype.collidePointArc=function(i,t,e,o,r,l,n,c){void 0==c&&(c=0);var p=this.createVector(i,t),s=this.createVector(e,o),d=this.createVector(r,0).rotate(l),u=p.copy().sub(s);if(p.dist(s)<=r+c){var h=d.dot(u),y=d.angleBetween(u);if(h>0&&y<=n/2&&y>=-n/2)return!0}return!1};
i=[[184, 281], [184, 272], [184, 263], [183, 252], [183, 243], [182, 232], [182, 221], [182, 213], [183, 206], [183, 201], [183, 187], [183, 182], [182, 177], [182, 168], [182, 162], [182, 154]];
e=[[330, 272], [323, 271], [312, 269], [304, 269], [293, 269], [289, 269], [284, 269], [272, 269], [265, 269], [258, 269], [254, 269], [245, 268], [239, 268], [234, 268], [234, 265], [233, 259], [233, 252], [233, 242], [232, 232], [232, 229], [232, 224], [232, 216], [232, 211], [232, 207], [232, 202], [232, 188], [232, 179], [232, 175], [234, 166], [234, 156], [234, 153], [234, 151], [234, 148], [239, 148], [251, 147], [261, 147], [270, 147], [282, 146], [292, 144], [300, 144], [308, 144], [315, 144], [320, 144], [324, 144], [244, 206], [250, 206], [261, 206], [276, 206], [282, 206], [289, 206], [297, 205], [301, 205], [308, 205],[311, 205]];
//2nd e should add 390 to x
//3rd e should add 1014 to x
d=[[480, 271], [478, 260], [478, 251], [478, 240], [478, 228], [478, 221], [478, 214], [478, 204], [478, 196], [478, 187], [478, 178], [477, 169], [477, 161], [477, 153], [478, 147], [485, 146], [494, 145], [501, 145], [512, 144], [522, 143], [530, 142], [536, 142], [542, 146], [551, 150], [557, 154], [563, 160], [567, 168], [570, 175], [576, 189], [577, 198], [576, 209], [575, 219], [571, 229], [571, 237], [570, 243], [568, 249], [564, 254], [561, 258], [555, 263], [549, 265], [544, 266], [539, 270], [531, 270], [524, 270], [520, 270], [515, 271], [509, 271], [504, 271], [500, 271], [497, 271], [490, 271],[485, 271]];
var storeAll=[];
p= [[46, 277], [46, 272], [46, 265], [46, 263], [43, 254], [43, 248], [45, 247], [45, 243], [45, 236], [45, 234], [45, 223], [45, 210], [45, 215], [45, 208], [45, 200], [45, 195], [45, 184], [45, 175], [45, 170], [46, 167], [46, 162], [46, 155], [46, 153], [46, 142], [52, 142], [63, 142], [68, 143], [75, 144], [79, 144], [86, 144], [90, 143], [101, 144], [106, 144], [113, 146], [116, 148], [122, 150], [122, 152], [128, 155], [128, 164], [129, 165], [131, 170], [131, 176], [130, 182], [129, 186], [128, 192], [127, 196], [123, 198], [119, 203], [115, 206], [110, 209], [107, 207], [101, 209], [100, 208], [98, 208], [92, 208], [89, 208], [86, 209], [84, 211], [79, 209], [71, 209], [66, 208], [60, 208], [54, 209]];
r=[[759, 277], [759, 270], [759, 262], [759, 256], [759, 250], [757, 241], [757, 235], [757, 223], [757, 219], [757, 209], [757, 202], [757, 193], [757, 186], [757, 183], [757, 176], [757, 168], [757, 162], [757, 156], [757, 151], [757, 148], [763, 148], [771, 145], [775, 145], [784, 145], [789, 145], [796, 145], [801, 146], [811, 147], [817, 148], [821, 148], [829, 148], [834, 148], [838, 150], [842, 153], [848, 159], [851, 166], [851, 169], [851, 174], [851, 181], [849, 185], [849, 191], [844, 194], [841, 202], [835, 206], [830, 209], [824, 210], [818, 210], [811, 209], [806, 209], [798, 209], [791, 209], [785, 208], [779, 208], [774, 209], [770, 209], [766, 209], [832, 211], [837, 215], [842, 218], [845, 223], [848, 227], [848, 232], [849, 237], [850, 242], [850, 246], [850, 250], [851, 254], [852, 257], [854, 262], [855, 267], [857, 270],[857, 273]];
ta=[[936, 271] , [934, 267], [934, 260], [933, 250], [933, 242], [932, 235], [932, 227], [932, 223], [932, 219], [934, 208], [934, 204], [934, 199], [934, 196], [934, 193], [934, 188], [934, 184], [934, 178], [933, 171], [933, 164], [933, 161], [933, 157], [933, 152], [933, 149], [938, 149], [945, 147], [945, 147], [953, 146], [961, 146], [969, 146], [974, 146], [979, 146], [982, 146], [987, 146], [879, 143], [884, 143], [888, 143], [891, 143], [897, 143], [905, 143], [912, 144], [919, 145], [923, 145], [993, 278], [996, 271], [999, 264], [1000, 258], [1003, 248], [1007, 243], [1009, 236], [1012, 226], [1014, 220], [1018, 208], [1022, 201], [1025, 192], [1027, 188], [1030, 178], [1034, 170], [1037, 163], [1039, 159], [1042, 152], [1045, 147], [1049, 150], [1051, 153], [1055, 157], [1055, 157], [1057, 161], [1064, 172], [1064, 177], [1069, 188], [1073, 199], [1075, 206], [1079, 215], [1082, 221], [1082, 225], [1086, 235], [1087, 240], [1088, 245], [1091, 253], [1093, 257], [1095, 262], [1097, 266], [1099, 271], [1016, 230], [1024, 231], [1035, 232], [1042, 232], [1050, 232], [1056, 231], [1065, 230],[1070, 229]];
l=[[1216, 273], [1212, 273], [1205, 272], [1199, 272], [1192, 272], [1185, 272], [1176, 272], [1165, 270], [1161, 270], [1151, 270], [1144, 270], [1144, 264], [1143, 260], [1143, 255], [1143, 251], [1140, 243], [1140, 238], [1140, 232], [1140, 227], [1140, 222], [1140, 217], [1140, 212], [1139, 206], [1139, 202], [1140, 193], [1140, 188], [1140, 184], [1140, 178], [1140, 171], [1140, 166], [1140, 162], [1140, 158], [1140, 152], [1140, 149], [1140, 146], [1140, 143], [1140, 139]];
var title;
var going=false;
var obstacles=[];
var originalObstacles=[];
var gems =[];
var pies=[];
var originalPies=[];
var x;
var y;
var w;
var h;
var xspeed=0;
var yspeed=0;
var testcounter=0;
//allcolors is the variable that makes the next level possible
//when this array is over, the game stops
var allcolors=[[200,200,200],[129,30,70],[70,30,129],[70,129,30],[100,100,100],[255,250,90],[255,255,255],[255,255,255],[250,250,250],[245,245,245],[0,200,220],[240,240,240],[235,235,235],[230,230,230],[200,200,200],[180,180,180],[150,testcounter%200,50],[170,170,170],[160,160,160],[160,160,160],[80,180,50],[180,10,50],[80,180,0],[25,25,25],[222,222,222],[222,222,222],[222,222,222]];
var startcolor=[129, 30, 70];
var score=0;
var gameOver=false;
var startButton;
var ticker;
var level;
var freex;
var freey;
var starx;
var stary;
var stars=[]; //array that stores new item; gold stars will be 'remove one obstacle'
var numstars=0;
var lives=3;
var startx=1040;  //starting x
var dx=50;     //spacing before next x
var c=7;    //number of columns
var endx;    //will be calculated in setup
var freeguy=false;
var nogood;
var starty=400;  //starting y
var dy=50;      //spacing before next y
               //number of rows is a trivial variable because
               //the grid populates L -> R


var perfect;
var cherry;
var dater;
var instructions;
var enterName;
var submitName;
var allboards=[];
var g;
var curname;



function drawGoldStar(x, y, r) {
  fill(255, 215, 0); // Gold color
  let angle = TWO_PI / 5;
  beginShape();
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
    let sx = x + cos(a) * r;
    let sy = y + sin(a) * r;
    vertex(sx, sy);
    let sx2 = x + cos(a + angle / 2) * r / 2;
    let sy2 = y + sin(a + angle / 2) * r / 2;
    vertex(sx2, sy2);
  }
  endShape(CLOSE);
}







function gotData(data){
  var scores = data.val();
  var keys = Object.keys(scores);
  console.log(keys.length);
  for(var i=0;i<keys.length;i++){
    var k = keys[i];
    var gameNum = scores[k].gameNum;
    var score= scores[k].score;
    var name= scores[k].name;
    var date= scores[k].date;
    var time= scores[k].time;

    allboards.push([gameNum, score, name, date, time]);
  }
  g=allboards.length;
    console.log(allboards);
    allboards=sortMasterArray(allboards);
    background(0);
    fill(255,90,100);
    textSize(30);
    text("GAME OVER", 200,200);
    text("FINAL SCORE = "+score, 200,300); 
    fill(255);
    text("NAME",700,50);
    text("SCORE",900,50);
  text("DATE",1100,50);
  text("TIME",1280,50);
  var thiscounter=0;
  for(var j=0;j<allboards.length;j++){
    var datenumbers=parseDateString(allboards[j][3]);
    if(datenumbers[2]>=25){
      text(allboards[j][2],700,100+50*thiscounter);
      text(allboards[j][1],900,100+50*thiscounter);
      text(allboards[j][3],1100,100+50*thiscounter);
      text(allboards[j][4],1250,100+50*thiscounter);
      thiscounter++;
    }
  }


}

function errData(){
  console.log('hi');
}



function setup() {          //this function runs once upon startup
  const firebaseConfig = {
  apiKey: "AIzaSyCF7XSorP7HdsfPRbQynXFBjy2A1YAbSUs",
  authDomain: "five-number-game.firebaseapp.com",
  databaseURL: "https://five-number-game.firebaseio.com",
  projectId: "five-number-game",
  storageBucket: "five-number-game.appspot.com",
  messagingSenderId: "47781046755",
  appId: "1:47781046755:web:335a49cb934541228b18d6"
};
  firebase.initializeApp(firebaseConfig);
  
  
  
  //   var data = {
  //     gameNum: 0,
  //     name: "----",
  //     score: 0,
  //     date: "-----",
  //     time: "-----"
  // }

  //ref.push(data);
  
  createCanvas(1400, 650);
  sparkle();
  instructions=createButton("Rules");
  instructions.position(600,400);
  instructions.size(100,50);
  instructions.mousePressed(slurpst);
  startButton=createButton("Start");
  startButton.position(730,400);
  startButton.size(100,50);
  startButton.mousePressed(setupOne);
  level=1;
  title=setInterval(sparkle,1000);

}



function sortMasterArray(masterArray) {
  masterArray.sort(function(a, b) {
    return b[1] - a[1];
  });
  return masterArray;
}


function slurpst(){     //rules page
  clearInterval(title);
  background(10,70,90);
   startButton.position(1000,400);
    instructions.position(-200,-200);
  fill(255,0,0);
  ellipse(620,45,36);
  fill(80,255,0);
  ellipse(600,142,20);
  fill(0,255,255);
  ellipse(600,182,20);
  fill(255,255,0);
  ellipse(600,222,20);
  fill(255);
  textSize(35);
  text("Use Arrow keys to move your PIE -> ",30,50);
  text("Avoid the white boxes",30,100);
  text("Collect all the gems to advance:",30,150);
  text(" = 50",620,150);
  text(" = 100",620,190);
  text(" = 200",620,230);

  
  
  
}

function mouseClicked(){

}



function randomDistinctIntegers(n) {
  // Create an array with integers from 1 to n
  const arr = [...Array(n).keys()].map(x => x + 1);
  
  // Shuffle the array using Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr;
}

function sparkle(){ //title page

  fill(170,150,220);
  rect(0,0,1400,650);
  drawGoldStar(410,225,20);

  fill(255);
  
  
  var order=randomDistinctIntegers(p.length);
  for(var g=0;g<p.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(p[order[g]-1][0],p[order[g]-1][1],w,h);
  }
  
  order=randomDistinctIntegers(i.length);
  for(var g=0;g<i.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(i[order[g]-1][0],i[order[g]-1][1],w,h);
  }
  
  order=randomDistinctIntegers(e.length);
  var order2=randomDistinctIntegers(e.length);
  var order3=randomDistinctIntegers(e.length);
  for(var g=0;g<e.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(e[order[g]-1][0],e[order[g]-1][1],w,h);
    rect(e[order2[g]-1][0]+390,e[order2[g]-1][1],w,h);
    rect(e[order3[g]-1][0]+1014,e[order3[g]-1][1],w,h);
  }
  
  order=randomDistinctIntegers(d.length);
  for(var g=0;g<d.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(d[order[g]-1][0],d[order[g]-1][1],w,h);
  }
  
  order=randomDistinctIntegers(r.length);
  for(var g=0;g<r.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(r[order[g]-1][0],r[order[g]-1][1],w,h);
  }
  
  order=randomDistinctIntegers(ta.length);
  for(var g=0;g<ta.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(ta[order[g]-1][0],ta[order[g]-1][1],w,h);
  }

  order=randomDistinctIntegers(l.length);
  for(var g=0;g<l.length;g++){
    var w=random(20,30);
    var h=random(20,34);
    rect(l[order[g]-1][0],l[order[g]-1][1],w,h);
  }
  fill(255,0,0);
  ellipse(196,118,40);
  
}




function setupOne(){   //this is now the setup of EVERY level
  clearInterval(title);
  startButton.position(-200,-200);
  instructions.position(-200,-200);

  var notouch=true;
  noStroke();
  if(level<allcolors.length){fill(allcolors[level]);}
  else{fill(0);}
  rect(0,0,1000,650);
  var a=random(40,960);
  var b=random(40,610);
  var c=random(30,100);
  var d=random(30,100);
  obstacles.push(new obstacle(a,b,c,d,obstacles.length));
  originalObstacles.push(new obstacle(a,b,c,d,originalObstacles.length));
  while(obstacles.length<(17+level)){
    pickOne();
  }
  pickObject();
  
  
  while(gems.length<(2+level)){
  pickGem();
  }
  var potato=random(1);
  if(potato<.6){cherry=1;}
  else if(potato<.9){cherry=2;}
  else if(potato<.98){cherry=5;}
  else{cherry=100;}
  perfect=true;  
  ticker=setInterval(drawOne,1000/60);
  
  
}

function pickObject(){    //choosing moving game piece
  var allgood=true;
  x=int(random(40,960));
  y=int(random(40,610)); 
  var d=16;
  for(var i=0; i<obstacles.length; i++){
    if(collideRectCircle(obstacles[i].a, obstacles[i].b, obstacles[i].c, obstacles[i].d, x, y, d+16)){
      allgood=false;
    }
    
  }
      if (allgood){
        pies.push(new pie(x,y,d));
        originalPies.push(new pie(x,y,d));
      }
      else{pickObject();}

}

function pickOne(){    //choosing obstacles
  var allgood=true;
  x=random(40,960);
  y=random(40,610); 
  w=random(30,100);
  h=random(30,100);
  for(var i=0; i<obstacles.length; i++){
    if(collideRectRect(obstacles[i].a, obstacles[i].b, obstacles[i].c, obstacles[i].d, x, y, w, h )){
      allgood=false;
    }
    
  }
      if (allgood){
        obstacles.push(new obstacle(x,y,w,h,obstacles.length));
        originalObstacles.push(new obstacle(x,y,w,h,originalObstacles.length));
      }

}

function pickGem(){    //choosing a power up gem
  var r=random(1);
  var allgood=true;
  x=random(40,960);
  y=random(40,610); 
  var d=10;
  for(var i=0; i<obstacles.length; i++){
    if(collideRectCircle(obstacles[i].a, obstacles[i].b, obstacles[i].c, obstacles[i].d, x, y, d+45 )){
      allgood=false;
    }
  }
  for(var i=0; i<pies.length; i++){
    if(collideCircleCircle(pies[i].x, pies[i].y, pies[i].d, x, y, d+10)){
      allgood=false;
    }
  }
    
      if (allgood){gems.push(new gem(x,y,d,r));}
      else{pickGem();}
  
}

function draw(){
  
}


function drawOne() {  //refreshes 60Htz for EVERY level
nogood=false;
if((gems.length>0) && (gems[0].ptvalue!==111) && (gems[0].ptvalue!==222)){
  if(gameOver===false){
    if(going){testcounter++;}
    if(testcounter===400+50*level){freeguy=true;nogood=false;}
    if(freeguy){
      freex=random(20,980);freey=random(20,630);
      starx=random(20,980);stary=random(20,630);
    }
    strokeWeight(1);
    stroke(0);
    if(level<allcolors.length){fill(allcolors[level]);}
    else{fill(0);}
    rect(0,0,1000,650);
    

   for(var y=0; y<obstacles.length; y++){
     obstacles[y].drawit();
     if(collideRectCircle(obstacles[y].a, obstacles[y].b, obstacles[y].c, obstacles[y].d, pies[0].x, pies[0].y, 16)){
       gameOver=true;  //game piece is hitting an obstacle
       lives--;
       perfect=false;
     }
     else if(freeguy&&(collideRectCircle(obstacles[y].a, obstacles[y].b, obstacles[y].c, obstacles[y].d, freex, freey, 36)||collideRectCircle(obstacles[y].a, obstacles[y].b, obstacles[y].c, obstacles[y].d, starx, stary, 36))){
       nogood=true;
     }
   }
    
    if(freeguy&&nogood===false){
      gems.push(new gem(starx,stary,16,10));
      gems.push(new gem(freex,freey,16,9));
      freeguy=false;
      nogood=true;
    }
    
  for(var y=0; y<pies.length; y++){
     pies[y].drawit();
    if(pies[y].x<=8 || pies[y].x >=992){
      xspeed*=-1;
    }
     if(pies[y].y<=8 || pies[y].y >=642){
      yspeed*=-1;
    }
     pies[y].x+=xspeed;
     pies[y].y+=yspeed;
   }
 // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(var g=0;  g<gems.length; g++){
      
      if(collideCircleCircle(gems[g].x, gems[g].y, gems[g].d, pies[0].x, pies[0].y, pies[0].d)){
        score+=gems[g].ptvalue;
        if(gems[g].ptvalue===111){lives+=int((level+4)/5);}
        if(gems[g].ptvalue===222){numstars++;}
        gems.splice(g,1);
      }
  }
  
  for(var g=0; g<gems.length; g++){
      gems[g].drawit();
  }
  
  
  rightPanel();


  }
  else{
    if(lives===0){
    background(0);
    fill(255,90,0);
    textSize(30);
    text("GAME OVER", 200,200);
    text("FINAL SCORE = "+score, 200,300); 
    clearInterval(ticker);
    enterName=createInput('');
    fill(255);
    dater=nf(month())+"/"+nf(day())+"/"+nf(year()-2000);
    text("Enter Your Name:",300,400);
    enterName.position(580,375);
    enterName.size(150,50);
      submitName=createButton("Submit");
      submitName.mousePressed(pushData);
      submitName.position(750,375);
      submitName.size(80,50);
    }
    else{
      pies=[];
      obstacles=[];
      for(var g=0; g<originalObstacles.length; g++){
        obstacles.push(new obstacle(originalObstacles[g].a, originalObstacles[g].b, originalObstacles[g].c, originalObstacles[g].d, obstacles.length));
      }
      pies.push(new pie(originalPies[0].x, originalPies[0].y, originalPies[0].d));
      xspeed=0;
      yspeed=0;
      gameOver=false;
      going=false;
    }
  }
}
else{
  clearInterval(ticker);
  obstacles=[];
  gems=[];
  pies=[];
  originalObstacles=[];
  originalPies=[];
  xspeed=0;
  yspeed=0;
  level++;
  if(perfect){
    numstars+=int((2*level+4)/5);
    //stars.push(new star(level));
  }
  else{numstars++;}
  setupOne();
  testcounter=0;
  going=false;
}
}

function pushData(){
  curname=enterName.value();
  submitName.remove();
  enterName.remove();
  var database = firebase.database();
  var ref = database.ref('hexagon-scores');
  ref.on('value', gotData, errData);
   var data = {
      gameNum: level,
      name: curname,
      score: score,
      date: dater,
      time: maketime()
  }
  ref.push(data);

}

function rightPanel(){
  fill(200);
  stroke(20,200,50);
  strokeWeight(2);
  rect(1000,0,400,650);
  fill(255);
  textSize(28);
  noStroke();
  text("Score: "+score,1020,40);
  text("Level "+level,1250,40);
  text("L:"+lives+"  S:"+numstars,1200,90);
  text(testcounter,1020,90);
 
  var x;
  var y;
  endx=(c)*dx;
  for(var n=0; n<lives; n++){
    x=startx + ((n*dx) % endx);
    y=starty + dy*floor(n/c);
    fill(255,70,10);
    ellipse(x,y,20);  
  }
  for(var nn=0; nn<numstars; nn++){
    x=startx + ((nn*dx)% endx);
    y=starty-240+dy*floor(nn/c);
    drawGoldStar(x,y,20);
  }
  
  
  
}

function maketime(){
  var m=minute();
  var formin;
  
  if (m==0){formin="00";}
  else if(m<10){formin="0"+nf(m);}
  else {formin=nf(m);}
  
  var h=hour();
  var ampm="AM";
  if(h==0){h=12;}
  else if(h==12){ampm="PM"}
  else if(h>=13){h=h-12;ampm="PM"}

  return nf(h) + ":" + formin + " "+ampm;
  
}

function parseDateString(dateString) {
    // Split the dateString by '/'
    let parts = dateString.split('/');
    
    // Convert parts to integers
    let month = parseInt(parts[0], 10);
    let day = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    
    // Return array with month, day, and year
    return [month, day, year];
}



function keyPressed() {
  going=true;
  if (keyCode === LEFT_ARROW) {
    
    for(var h=0; h<obstacles.length; h++){
      obstacles[h].a--;
      obstacles[h].b--;
      obstacles[h].c+=2;
      obstacles[h].d+=2;
    }
    
    
    xspeed=-3;
    yspeed=0;
  } 
  else if (keyCode === RIGHT_ARROW) {
    
     for(var h=0; h<obstacles.length; h++){
      obstacles[h].a--;
      obstacles[h].b--;
      obstacles[h].c+=2;
      obstacles[h].d+=2;
    }
    
    
    xspeed=3;
    yspeed=0;
  }
  else if (keyCode === UP_ARROW || key ==='w'){
    
     for(var h=0; h<obstacles.length; h++){
      obstacles[h].a--;
      obstacles[h].b--;
      obstacles[h].c+=2;
      obstacles[h].d+=2;
    }
    
    yspeed=-3;
    xspeed=0;
  }
  else if (keyCode === DOWN_ARROW){
    
     for(var h=0; h<obstacles.length; h++){
      obstacles[h].a--;
      obstacles[h].b--;
      obstacles[h].c+=2;
      obstacles[h].d+=2;
    }
    
    yspeed=3;
    xspeed=0;
  }
}



function maketime(){
  var m=minute();
  var formin;
  
  if (m==0){formin="00";}
  else if(m<10){formin="0"+nf(m);}
  else {formin=nf(m);}
  
  var h=hour();
  var ampm="AM";
  if(h==0){h=12;}
  else if(h==12){ampm="PM"}
  else if(h>=13){h=h-12;ampm="PM"}
  return nf(h) + ":" + formin + " "+ampm;
  
}




function touchStarted() {
      for(k=0;k<obstacles.length;k++){
    obstacles[k].clickit();
  }
}

function touchEnded() {

}

function keyTyped() {     //this function will run anytime the user types any key
  if (key === 'o'){

  }
  
  else if (key === 'f'){

  }
// more else if's if you want to keep going
  
}


class star{
  constructor(lev){
    this.lev=lev;
    score+=lev*100;
    
  }
}




class obstacle{
  constructor(a,b,c,d,i){
    this.a=a;
    this.b=b;
    this.c=c;
    this.d=d; 
    this.i=i;
  }
  
  drawit(){
    if(level>5){stroke(0);}
    else{noStroke();}
    fill(255);
    rect(this.a, this.b, this.c, this.d);
  }
  clickit(){
    if(mouseX>=this.a && mouseX<=this.a+this.c && mouseY>=this.b && mouseY<=this.b+this.d && numstars>0){
      obstacles.splice(this.i,1);
      originalObstacles.splice(this.i,1);
      if(level<allcolors.length){fill(allcolors[level]);}
      else{fill(0);}
      rect(0,0,1000,650);
      for(var u=0;u<obstacles.length;u++){
        obstacles[u].i=u;
        obstacles[u].drawit();


        //stars.pop();
      }
              numstars--;
        console.log(numstars);
    }
  }
}


class pie{
  constructor(x,y,d){
    this.x=x;
    this.y=y;
    this.d=d;
  }
  
  drawit(){
    fill(255,0,0);
    ellipse(this.x, this.y, this.d);
  }
}

class gem{
  constructor(x,y,d,r){
    this.x=x;
    this.y=y;
    this.d=d;
    if(r<.5){
      this.color=[80,255,0];
      this.ptvalue=50;
    }
    else if(r<.85){
      this.color=[0,255,255];
      this.ptvalue=100;
    }
    else if(r===9){  //free guy construct
      this.color=[255,0,0];
      this.ptvalue=111;
    }
    
    else if(r===10){  //free star construct
      this.ptvalue=222;
    }
    
    else{
      this.color=[255,255,0];
      this.ptvalue=200;
    }
    
    
  }
  
  drawit(){
    if(this.ptvalue===222){
      drawGoldStar(this.x,this.y,16);
    }
    else{    
      if(level>4){stroke(0);}
      else{noStroke();}
      fill(this.color);
      ellipse(this.x, this.y, this.d);}

  }
  
  
  
  
}







