;(function($){
	class Login{
        constructor(){
            this.url = "http://api.icodeilife.cn:81/user";
            this.user = $("#user");
            this.pass = $("#pass");
            this.btn = $("#btn");
            this.yzm = $("#yzm")
//          console.log(this.yzm)
            this.s = $(".s");
            this.sp = $("#sp");
            this.state = $(".le span");
            this.s.html(random())
            this.addEvent();
            this.a = this.b = this.c = 0
        }
        addEvent(){
            var that = this;
            this.sp.click(function(){
        		that.s.html(random())
        	})
            this.user.blur(function(){
            	that.yhm()
            })
            this.pass.blur(function(){
            	that.pa()
            })
            this.yzm.blur(function(){
            	that.yz()
            })
            this.btn.click(function(){
            	that.load()
            })
        }
        yhm(){
        	if(this.user.val()!=""){
        		this.user.next("u").html("")
        		this.a = 1
        	}else{
        		this.user.next("u").html("用户名不能为空");
        	}
        }
        pa(){
        	if(this.pass.val()!=""){
        		this.pass.next("u").html("");
        		this.b = 1
        	}else{
        		this.pass.next("u").html("密码不能为空");
        	}
        }
        yz(){
        	if(this.yzm.val() == this.s.html()){
        		this.yzm.parent().find(".te").html("")
        		this.c = 1
        	}else{
        		this.yzm.parent().find(".te").html("验证码错误")
        	}
        }
        load(){
            if(this.a+this.b+this.c == 3){
            	$.ajax({
	                url:this.url,
	                data:{
	                    type:"login",
	                    user:this.user.val(),
	                    pass:this.pass.val(),
	                },
	                success:(res)=>{
	                    this.res = JSON.parse(res);
	                    if(this.res.code == 2){
	                        this.state.html("帐号密码不符，请<a href='login.html'>重新登录</a>")
	                    }else if(this.res.code == 1){
	                        this.setState()
	                        this.state.html("登录成功,3秒后跳转到<a href='index.html'>首页</a>");
	                        setTimeout(() => {
	                            location.href="index.html";
	                        }, 3000);
	                        console.log(res)
	                    }else if(this.res.code == 0){
	                        this.state.html("不存在该用户信息，请<a href='register.html'>注册</a>")
	                    }
	                }
	            })
            }
        }
        setState(){
            localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
        }
    }
    new Login();
	function random(){
	    var str = "";
	    for(var i=0;i<4;i++){
	        str = str + parseInt(Math.random()*10);
	    }
	    return str;
	}
})(jQuery);
