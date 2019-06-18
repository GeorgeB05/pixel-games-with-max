class Human{
	constructor(id, class){
		this.id = id;
		this.class = class;
		this.object = document.getElementById(id);
		this.objectsClass = document.getElementsByClass(class);
	}
	update(){
		this.object = document.getElementById(id);
		this.objectsClass = document.getElementsByClass(class);
		this.x = this.object.offsetLeft;
		this.y = this.object.offsetTop;
		this.width = this.object.offsetWidth;
		this.height = this.object.offsetHeight;
		this.angle = this.object.width.transform.rotateZ;
		this.move();
	}
	shoot(){}
	move(){}
}
class Player extends Human{

}
class Enemy extends Human{

}
class Weapon{

}
class Bullet{

}
class Platform{

}

function update (){}
function draw() {}
function keyup(key) {}
function mouseup() {}
