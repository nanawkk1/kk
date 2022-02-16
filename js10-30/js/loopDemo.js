/* 打印 */
function pri(){
	// var count=1;/* 迭代量起始值 */
	// while(count<=10000){
	// 	document.write("<h1>好好学习,天天向上。</h1>");
	// 	count++;/* 迭代量要变化，递增1 */
	// }
	for(var count=1;count<=100;count++){
		document.write("<h1>第"+count+"遍,好好学习,天天向上。</h1>");
	}
}
/* 累加和 */
function getSum(){
	// var i=1;
	// var sum=0;
	// while(i<=100){
	// 	sum+=i;//sum=sum+i;		
	// 	i++;
	// }
	// /* 运行到此，证明循环累加结束 */
	// alert("累加和是："+sum);
	var sum=0;
	for(var i=1;i<=100;i++){
		sum+=i;
	}
	alert("累加和是："+sum);
}
/* 偶数累加和 */
function getEven(){
	var i=1;
	var sum=0;
	while(i<=100){
		if(i%2==0){/* 过滤偶数的判断 */
			sum+=i;//sum=sum+i;		
		}
		i++;
	}
	/* 运行到此，证明循环累加结束 */
	alert("累加和是："+sum);
}
/* 交换值 */
function changeVal(){
	var i=10,j=20;
	alert("更换前i="+i+"，j="+j);
	/* 交换的操作 */
	i=i+j;// i=10+20=30
	j=i-j;// j=30-20=10
	i=i-j;// i=30-10=20
	alert("更换后i="+i+"，j="+j);
}

/* 省市级联
	1.准备数据，省份数据，城市数据
	2.页面加载时，先去加载省份数据
	3.选了省份之后就加载城市数据
 */
/* 为了跨函数公用数据 */
var adds=[["广东","广州","深圳","惠州","东莞","清远"],["广西","南宁","桂林"],["湖南","长沙","娄底"],["湖北","武汉","襄阳"]];
onload=function(){/* 窗体加载事件 */
	// 获取到省份的那个元素
	var pro=document.getElementById("pro");/* pro=<select id="pro"> */
	/* 能否把所有的身份信息弹出来 */
	var newHtml="<option value='-1'>请选择</option>";
	for(var i=0;i<adds.length;i++){
		newHtml+="<option value="+i+">"+adds[i][0]+"</option>";
	}
	pro.innerHTML=newHtml;
}
/* 加载城市：根据所选的省份 */
function loadCity(pro){
	//var pro=document.getElementById("pro");
	var proi=pro.value;// 获取到了省份对应的下标
	var city=document.getElementById("city");
	var newHtml="<option>请选择</option>";
	/* 0元素都是省份，所以要从1开始
		adds[proi].length	是城市的数据长度
		adds.length		是省份的数据长度
	 */
	for(var i=1;i<adds[proi].length;i++){
		newHtml+="<option>"+adds[proi][i]+"</option>";
	}
	city.innerHTML=newHtml;
	//city.innerHTML="<option>"+adds[proi][1]+"</option><option>"+adds[proi][2]+"</option>";
}