;(function($){
	class Test{
		constructor(){
			this.url = "http://api.icodeilife.cn:81/user";
			this.user = $("#txt");
            this.pass1 = $("#pass");
            this.pass2 = $("#pass1");
            this.yzm = $("#yzm");
            this.btn = $("#btn");
            this.state = $(".t span");
            this.s = $(".ran")
            this.a = this.b = this.c = this.d = 0
            this.s.html(random())
            this.addEvent()
            
            this.yz()
		}
		addEvent(){
			var that = this
			this.user.blur(function(){
				that.yhm()
			})
			
			this.pass1.blur(function(){
				that.mi()
			})
			
			this.pass2.blur(function(){
				that.ma()
			})
			
			this.yzm.change(function(){
				that.yz()
			})
			
			this.s.click(function(){
				that.ss()
			})
			
			this.btn.click(function(){
				that.load()
			})
		}
		yhm(){
			
			var zhreg=/^[\w]{4,20}$/;
			if(zhreg.test(this.user.val())){
				this.user.next("u").html("账号正确");
				this.a=1;
			}else{
				this.user.next("u").html("账号错误");
				this.a=0
			}
		}
		mi(){
			var areg=/\w+/;
			if(areg.test(this.pass1.val())){
				this.b = 1;
			}else{
				this.pass1.next("u").html("不能为空")
				this.b = 0;
			}
		}
		ma(){
			if(this.pass2.val() == this.pass1.val()){
				this.pass2.next("u").html("密码一致");
				this.c=1;
			}else{
				this.pass2.next("u").html("密码错误");
				this.c=0
			}
		}
		yz(){
			if(this.yzm.val() != ""){
				if(this.yzm.val() == this.s.html()){
					this.yzm.next("s").next("u").html("验证正确");
					this.d=1;
				}else{
					this.yzm.next("s").next("u").html("验证错误");
					this.d=0
				}	
			}else{
				this.yzm.next("s").next("u").html("")
			}
			
		}
		ss(){
			this.s.html(random())
		}
		load(){
			if(this.a+this.b+this.c+this.d == 4){
                $.ajax({
	                url:this.url,
	                data:{
	                    type:"register",
	                    user:this.user.val(),
	                    pass:this.pass1.val(),
	                },
	                success:(res)=>{
	                    res = JSON.parse(res);
	                     alert(res.msg);
	                    if(res.code == 0){
	                        this.state.html("注册失败，请重新注册");
	                    }else if(res.code == 1){
	                        this.state.html("注册成功，3秒后跳转到<a href='login.html'>登录</a>");
	                        setTimeout(() => {
	                            location.href = "login.html"
	                        },3000); 
	                    }
	                }
	            })
			}else{
				alert("出错了")
			}
		}
	}
	new Test()  
function random(){
    var str = "";
    for(var i=0;i<5;i++){
        str = str + parseInt(Math.random()*10);
    }
    return str;
}
})(jQuery);
