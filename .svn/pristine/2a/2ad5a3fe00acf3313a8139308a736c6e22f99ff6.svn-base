;(function($){
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
	
	class Details{
		constructor(){
			this.a = location.search
			console.log(this.a.slice(1))
			this.only = this.a.slice(1)
			this.data = $(".gos")
			this.url = "http://localhost/two/project/data/goods.json";
			this.load()
		}
		load(){
			var that = this
			ajaxGet(this.url,function(res){
				that.res = JSON.parse(res)
				that.display()
			})
		}
		display(){
			var str = "";
			this.res.forEach((resVal)=>{
				if(resVal.goodid == this.only){
					str += `<div class="gos">
								<div class="lef">
									<div class="img">
										<img src="${resVal.url}"/>
									</div>
									<div class="b_box"> 
										<img src="${resVal.url}"/>
									</div>
								</div>
								<div class="mid">
									<h3>${resVal.tip}</h3>			
									<div class="xinghao">
										<p>
											<span>商品编号：</span>
											<span id="num">1028701</span>
										</p>
									</div>
									<div class="jiage">
										<p><span>市 场 价：</span><span id="scj">${resVal.del}</span> 元</p>
										<p>
											<span>优个价：</span>
											<span class="q">￥</span><span id="ygj">${resVal.price}</span> 元 
										</p>
										<p>
											<span>运费说明：</span>
											<span id="yf">满199免运费(大件、货到付款除外)</span>
											<span>一般2天内发货，节假日顺延</span>
										</p>
									</div>
									<div class="guige">
										<p>
											<span>有货规格：</span>
											<a href="##">没有我需要的规格 点此登记</a>
										</p>
										<div class="cm">
											<a href="##">红色</a>
											<a href="##">黄色</a>
											<a href="##">蓝色</a>
											<a href="##">黑色</a>
											<a href="##">白色</a>
										</div>
									</div>
									<div class="sl">
										<div class="nu">数量：</div>
										<div class="zj">
											<a class="j">-</a>
											<input type="text" id="txt" value="1">
											<a class="z">+</a>
										</div>
									</div>
									<div class="btn">
										<a id="j" href="##"><img src="img/shop.png"/></a>
										<a id="l" href="##"><img src="img/by.png"/></a>
									</div>
								</div>
								<div class="rig"><img src="img/right.png"/></div>	
							</div>`
				}
			})
			this.data.html(str)
			this.s_box = $(".img")
			this.s_img = $(".img img");
			this.b_box = $(".b_box")
			this.b_img = $(".b_box img");
			this.oimg = $(".photo img")
			this.addEvent()
			this.changeIndex()
		}
		changeIndex(){
			this.oimg.eq($(this).index())
		}
		addEvent(){
			var that = this
			this.s_box.mouseenter(function(){
				that.show()
			})
			this.s_box.mouseleave(function(){
				that.hide()
			})
			this.s_box.mousemove(function(e){
				that.move(e)
			})
		}
		show(){
			this.b_box.css({display:"block"})
//				1-2.创建蒙版 设置蒙版样式 并 提前判断,将来的实例身上是否有span属性,有就显示,没有就创建
			if(!this.span){
			 	this.span = $("<span>")
				var w = this.b_box.outerWidth() / this.b_img.outerWidth() * this.s_box.outerWidth()
				var h = this.b_box.outerHeight() / this.b_img.outerHeight() * this.s_box.outerHeight()
				console.log(w)
				this.span.css({
					width : w,
					height : h,
					background:"#eee",
					position:"absolute",
					left:0,
					top:0,
					opacity:0.5
				})
				this.s_box.append(this.span)
			}	
//				1-2.有span就显示
			this.span.css({display:"block"})
		}
		hide(){
			this.b_box.css({display:"none"})	
			this.span.css({display:"none"})
		}
		move(e){
			var l = e.pageX - this.s_box.offset().left - this.span.outerWidth()/2;
			var t = e.pageY - this.s_box.offset().top - this.span.outerHeight()/2;
			if(l < 0) l=0;
			if(t < 0) t=0;
			if(l > this.s_box.outerWidth() - this.span.outerWidth()){
				l = this.s_box.outerWidth() - this.span.outerWidth()
			}
			if(t > this.s_box.outerHeight() - this.span.outerHeight()){
				t = this.s_box.outerHeight() - this.span.outerHeight()
			}
			this.span.css({
				left : l 
			});
			this.span.css({
				top : t
			});
			var x = l / (this.s_box.outerWidth() - this.span.outerWidth());
			var y = t / (this.s_box.outerHeight() - this.span.outerHeight());
			console.log(t)
			this.b_img.css({left : -x * (this.b_img.outerWidth() - this.b_box.outerWidth())}) ;
			this.b_img.css({top : -y * (this.b_img.outerHeight() - this.b_box.outerHeight())}) ;

		}
	}
	new Details()
})(jQuery);
