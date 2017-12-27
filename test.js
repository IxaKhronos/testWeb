var point= new Array();
var renderer,scene,camera;
var controls;
$(function(){
	renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#myCanvas')});
	renderer.setPixelRatio(window.devicePixelRatio);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, 400 / 400);
	camera.position.set(10, 10, +10);
	controls = new THREE.OrbitControls(camera);

	var geometry = new THREE.Geometry();
	geometry.vertices[0] = new THREE.Vector3(0,0,0);//位置の指定
	geometry.colors[0] = new THREE.Color(0xffffff);//色の指定
	point[0] = new THREE.Points(geometry,new THREE.PointsMaterial({color:0xffff00,size:0.4,vertexColors:true}));
	point[0].position.set(1,1,1);
	scene.add(point[0]);
	point[1] = new THREE.Points(geometry,new THREE.PointsMaterial({color:0xff00ff,size:0.4,vertexColors:true}));
	point[1].position.set(2,1,2);
	scene.add(point[1]);
	
	var axesHelper = new THREE.AxesHelper( 5 );
	scene.add( axesHelper );
	
	tick()
})
function tick(){
	renderer.render(scene, camera);
	requestAnimationFrame(tick);
}
