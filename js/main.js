var jsonHome = 
	{
		"home1927":{
			"1":"晋陵沿溪宋氏家族",
			"2":"沈氏宗族",
			"3":"岳式宗谱",
			"4":"晋陵沿溪宋氏家族"
		},
		"home1928":{"1":"浦阳冠山沈氏宗族"},
		"home1929":{
			"1":"白洋桥沈氏宗族",
			"2":"蓉湖蓝港沈氏宗族",
		},
		"home1930":{
			"1":"谢街周氏宗谱",
			"2":"山阴金氏宗谱",
		}
	}
;
var initialPositionX,desPositionX;
var dValue=gValue=0;var t=false,x=0;


for(var i=0;i<28;i++){
	addElementDivOne("mainContainer",i);
	addElementDivTwo("secondContainer",i);
	initalChange();
}

$("div.on").on("mouseup",function(e){
   e.stopPropagation();
	t=false;
	gValue=dValue;
}).on("mousedown",function(e){
	e.stopPropagation();
	t=true;
	x++;
	initialPositionX = e.pageX;
}).on("mousemove",function(e){
	e.stopPropagation();
	if(t){
		desPositionX = e.pageX;
		$("#testSpan").text(desPositionX);
		if(x==1){
			dValue = gValue+desPositionX-initialPositionX-1200;
		}else{
			dValue = gValue+desPositionX-initialPositionX;
		}
		
		document.getElementById("mainContainer").style.transform ='translate(' + dValue + 'px, ' + 0 + 'px)';
		document.getElementById("secondContainer").style.transform ='translate(' + dValue + 'px, ' + 0 + 'px)';
	}
});




function initalChange(){
	document.getElementById("mainContainer").style.transform ='translate(' + (-1200) + 'px, ' + 0 + 'px)';
	document.getElementById("secondContainer").style.transform ='translate(' + (-1200) + 'px, ' + 0 + 'px)';
}

function count(o){
    var t = typeof o;
    if(t == 'string'){
            return o.length;
    }else if(t == 'object'){
            var n = 0;
            for(var i in o){
                    n++;
            }
            return n;
    }
    return false;
}

//创建div

function addElementDivOne(obj,i) {
　　　　var parent = document.getElementById(obj);
　　　　var div = document.createElement("div");

		var home = "home19"+(i+20);
		div.setAttribute("id", home);
		div.setAttribute("class", "oneSame on");
		
		parent.appendChild(div);

		setTimeout(_sd(home),100);
   
}

function addElementDivTwo(obj,i){
	var parent = document.getElementById(obj);

　　　　var div = document.createElement("div");
		div.setAttribute("class", "twoSame on");

		div.innerHTML = i;
		parent.appendChild(div);	
}

function _sd(home){
	return function(){
		sd(home);
	}
}
function  sd(home){
	for(var j=1;j<=count(jsonHome[home]);j++){
			
			$("#"+home).append(jsonHome[home][j]+"</br>");
		}
		
}