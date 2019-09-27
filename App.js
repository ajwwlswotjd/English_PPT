class App {
	constructor(){
		window.addEventListener("mousewheel",this.handleWheel.bind(this), {passive:true});
		this.current = 0;
		$("html, body").animate({scrollTop:0});
		this.sectionList = $("section");
		this.isScrolling = false;
		window.addEventListener("keydown",this.handleWheel.bind(this));
		window.addEventListener("resize",this.scrollSection.bind(this));
	}

	handleWheel(e){
		if(this.isScrolling) return;
		let delta = e.deltaY!=undefined ? e.deltaY : e.keyCode==38||e.keyCode==33 ? -1 : e.keyCode==40||e.keyCode==34||e.keyCode==32 ? 1 : false;
		if(delta > 0){
			//더이상 못내려가면 멈추고
			if(this.current + 1 >= this.sectionList.length) return; 

			//내려갈 수 있다면 다음 타겟을 구한다.
			this.current++;
			this.scrollSection();
		}else if(delta) {
			//올라가기
			if(this.current == 0)  return;
			this.current--;
			this.scrollSection();
		}
	}

	scrollSection(){
		this.isScrolling = true;
		let target = this.sectionList.eq(this.current).offset().top;
			$("html, body").animate({scrollTop:target + "px"}, 1000, ()=>{
				this.isScrolling = false;
		});
	}
}

window.onload = function(){
	let app = new App();
}

function log(c){
	console.log(c);
}