window.onload = function(){
//首页与分类切换
	var sy = document.querySelector('.logo a:nth-child(1)');
	var tp = document.querySelector('.logo a:nth-child(2)');
	sy.style = 'background:#ffba02;color:#763b00';
	//点击首页
	sy.onclick = function(){
		this.style = 'background:#ffba02;color:#763b00';
		tp.style = 'background:#763b00;color:#ffba02';
	}
	//点击分类
	tp.onclick = function(){
		this.style = 'background:#ffba02;color:#763b00';
		sy.style = 'background:#763b00;color:#ffba02';
	}

//轮播图
	var picAll = document.querySelectorAll('.picAll a');
	var banner = document.querySelector('.banner');
	var dots = document.querySelectorAll('.dot div');
	var len = picAll.length;
	var timer;
	var index = 0;
	hideA(0)
	//只显示一张图片，其余图片消失
	function hideA(num){
		for(var i = 0; i < len; i++){
			picAll[i].style.display = 'none';
			dots[i].style.background = 'rgba(0,0,0,0.4)';
		}
		picAll[num].style.display = 'block';
		dots[num].style.background = 'black';
	}
	//按时播放图片
	time()
	function time(){
		timer = setInterval(function(){
			index++
			if(index>=4){
				index = 0;
			}
			hideA(index);
		},1500)
	}
	
	//鼠标放上去停止定时器
	document.onmouseover = function(){
		clearInterval(timer);
	}
	//鼠标离开继续定时器
	document.onmouseout = function(){
		time()
	}
	//给每一个小圆点加点击事件
	for(var k = 0; k < len; k++){
		dots[k].index = k;
		dots[k].onclick = function(){
			index = this.index;
			hideA(index);
		}
	}
//改变bottom文字的颜色
	var botP = document.querySelectorAll('#bottom div');
	var length = botP.length;
	showcol(0)
	function showcol(num){
		for(var i = 0; i < length; i++){
			botP[i].querySelectorAll('p')[0].style.color = '#f5f5f5';
			botP[i].querySelectorAll('p')[1].style.color = '#f5f5f5';
		}
		botP[num].querySelectorAll('p')[0].style.color = '#ffba02';
		botP[num].querySelectorAll('p')[1].style.color = '#ffba02';
	}

	for(var i = 0; i < length; i++){
		botP[i].index = i;
		botP[i].onclick = function(){
			var index = this.index;
			showcol(index);
		}
	}
	
}