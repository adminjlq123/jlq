;(function($){
//	轮播图
$(".lunbo").banner({
    items:$(".lunbo").find("img"),   
    left:$(".lunbo").find(".left"),  
    right:$(".lunbo").find(".right"), 
        list:true,
        autoPlay:true,                     
        delayTime:2000,                     
        moveTime:200,                       
        index:0,                            
  })
//楼层
$("#lou ul").children("li").click(function(){
	$("html").stop().animate({
        scrollTop:$('.floor').eq($(this).index()).offset().top
     })
})
//登陆注册
var msg = localStorage.getItem("loginUser");
if(msg){
    $(".p1").hide();
    $(".p2").show();
    $(".p2").find("span").html(JSON.parse(msg).user);
    $(".goo").on("click",function(){
    $(this).attr("href","car.html")
    })
}else{
    $(".p1").show();
    $(".p2").hide();
    $(".goo").on("click",function(){
    	console.log(1)
    	$(this).attr("href","login.html")
    })
}
$(".p2").find("a").click(function(){
	location.reload()
	$(".p1").show();
	$(".p2").hide();
    localStorage.removeItem("loginUser");
    $(".goo").attr("href","login.html")
})
//懒加载
	var aimg = document.querySelectorAll("img");
    var arr = Array.from(aimg);
    var t;

    onload = onscroll = function(){
        clearTimeout(t);
        t = setTimeout(function(){
            fn();
        },100)
    }
    function fn(){
        var scrollT = document.documentElement.scrollTop;
        var clientH = document.documentElement.clientHeight;
        
        for(var i=0;i<arr.length;i++){
            if(arr[i].offsetTop - scrollT < clientH){
                arr[i].src = arr[i].getAttribute("ljz");
                arr.splice(i,1)
            }
        }
    }



class Sport{
	constructor(){
		this.ul = $(".go");
		this.top = $("ul.zhu")
        this.url = "http://localhost/two/project/data/goods.json";
		this.num = 8;
		this.index = 0
        this.load();
        this.addEvent()
	}
	load(){
		ajaxGet(this.url,(res)=>{
			this.res = JSON.parse(res);
			this.display()
		})
	}
	addEvent(){
		var that = this
		$("ul.zhu").on("mouseenter","li",function(){
			$(this).addClass("dangqian").siblings().removeClass("dangqian");
			that.changeIndex($(this).index())
		})
	}
	changeIndex(a){
		this.index = a
		this.display()
	}
	display(){
		var that = this
		var str = "";
		for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
			if(i<this.res.length){
				str+=`<li qwe="${this.res[i].goodid}">
						<div class="to">
							<a href="details.html?${this.res[i].goodid}" target="_blank"><img src="${this.res[i].url}"></a>	
						</div>
						<div class="mi">
							<a href="details.html?${this.res[i].goodid}" target="_blank">${this.res[i].tip}</a>
						</div>
						<div class="bo">
							<u style="color:#999;">疯抢价：</u>
							<s>￥<span>${this.res[i].price}</span></s>
						</div>
					</li>`
			}
		}
		this.ul.html(str)	
	}
}
new Sport
})(jQuery);
