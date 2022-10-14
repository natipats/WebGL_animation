//This assignment is for Role 1

//create renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();

//this loader below is required for GLB loading
//var loader = new THREE.GLTFLoader();

//materials and textures
var textureLoader = new THREE.TextureLoader();
//---------------------------------------------------------------------------------------------------------
var brickmap = textureLoader.load('textures/castle_wall_varriation_4k.blend/textures/castle_wall_varriation_diff_4k.jpg');
var bricknormalmap = textureLoader.load('textures/castle_wall_varriation_4k.blend/textures/castle_wall_varriation_nor_gl_4k.exr');
var brickdispmap = textureLoader.load('textures/castle_wall_varriation_4k.blend/textures/castle_wall_varriation_disp_4k.png');
var brickroughmap = textureLoader.load('textures/castle_wall_varriation_4k.blend/textures/castle_wall_varriation_rough_4k.jpg');
var brickmaterial = new THREE.MeshPhongMaterial({map: brickmap, bricknormalmap, brickdispmap, brickroughmap});
//---------------------------------------------------------------------------------------------------------
var floormap = textureLoader.load('textures/forrest_ground_01_4k.blend/textures/forrest_ground_01_diff_simple.jpg');
var floormaterial = new THREE.MeshPhongMaterial({map: floormap});
//---------------------------------------------------------------------------------------------------------
var doormap = textureLoader.load('textures/medieval_wood_4k.blend/textures/medieval_wood_diff_4k.jpg');
var doormaterial = new THREE.MeshPhongMaterial({map: doormap});
//---------------------------------------------------------------------------------------------------------
var mountainmap = textureLoader.load('textures/rock_boulder_dry_4k.blend/textures/rock_boulder_dry_diff_simple.jpg');
var mountainmaterial = new THREE.MeshPhongMaterial({map: mountainmap});
//---------------------------------------------------------------------------------------------------------
var pathmap = textureLoader.load('textures/castle_brick_01_4k.blend/textures/castle_brick_01_diff_simple.jpg');
var pathmaterial = new THREE.MeshPhongMaterial({map: pathmap});
//---------------------------------------------------------------------------------------------------------
var wallmap = textureLoader.load('textures/castle_brick_01_4k.blend/textures/castle_brick_01_diff_simple.jpg');
var wallmaterial = new THREE.MeshPhongMaterial({map: wallmap});
//---------------------------------------------------------------------------------------------------------
var cavemap = textureLoader.load('textures/cave/textures/cave.jpg');
var cavematerial = new THREE.MeshPhongMaterial({map: cavemap});
//---------------------------------------------------------------------------------------------------------
var thronemap = textureLoader.load('textures/wood_table_001_4k.blend/textures/wood_table_001_diff_4k.jpg');
var thronematerial = new THREE.MeshPhongMaterial({map: thronemap});
//---------------------------------------------------------------------------------------------------------
var treemap = textureLoader.load('textures/forest_leaves_03_4k.blend/textures/forest_leaves_03_diff_4k.jpeg');
var treematerial = new THREE.MeshPhongMaterial({map: treemap});
//---------------------------------------------------------------------------------------------------------
var trunkmap = textureLoader.load('textures/wood_table_001_4k.blend/textures/wood_table_001_diff_4k.jpg');
var trunkmaterial = new THREE.MeshPhongMaterial({map: trunkmap});

////Add the castle towers////
var castletower;
// instantiate a loader
var objloader = new THREE.OBJLoader();
// load a resource
objloader.load ('exports/Towers.obj',
// called when resource is loaded
function ( object ) 
    {
    castletower = object;
    castletower.position.y = 0;
    castletower.traverse( function ( node ) {
        if ( node.isMesh ) node.material = brickmaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( castletower );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the towers' ); 
    }
);

////Add the castle wall////
var castlewall;
// load a resource
objloader.load ('exports/castlewall.obj',
// called when resource is loaded
function ( object ) 
    {
    castlewall = object;
    castlewall.position.y = 0;
    castlewall.traverse( function ( node ) {
        if ( node.isMesh ) node.material = wallmaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( castlewall );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the wall' ); 
    }
);

////Add the castle ridge////
var castleridge;
// load a resource
objloader.load ('exports/castleridge.obj',
// called when resource is loaded
function ( object ) 
    {
    castleridge = object;
    castleridge.position.y = 0;
    castleridge.traverse( function ( node ) {
        if ( node.isMesh ) node.material = brickmaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( castleridge );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the creselation' ); 
    }
);

////Add the castle doors////
var castledoor;
// load a resource
objloader.load ('exports/castledoors.obj',
// called when resource is loaded
function ( object ) 
    {
    castledoor = object;
    castledoor.position.y = 0;
    castledoor.traverse( function ( node ) {
        if ( node.isMesh ) node.material = doormaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( castledoor );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the door' ); 
    }
);

////Add the throne////
var throne;
// load a resource
objloader.load ('exports/throne.obj',
// called when resource is loaded
function ( object ) 
    {
        throne = object;
        throne.position.y = 0;
        throne.traverse( function ( node ) {
        if ( node.isMesh ) node.material = thronematerial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( throne );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the throne' ); 
    }
);

////Add the castle path////
var castlepath;
// load a resource
objloader.load ('exports/path.obj',
// called when resource is loaded
function ( object ) 
    {
    castlepath = object;
    castlepath.position.y = 0;
    castlepath.traverse( function ( node ) {
        if ( node.isMesh ) node.material = pathmaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( castlepath );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the path' ); 
    }
);


////Add the floor////
var floor;
// load a resource
objloader.load ('exports/floor.obj',
// called when resource is loaded
function ( object ) 
    {
    floor = object;
    floor.position.y = 0;
    floor.traverse( function ( node ) {
        if ( node.isMesh ) node.material = floormaterial;
        if (node.isMesh) node.receiveShadow = true;
      } );
    scene.add( floor );
    },
    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the floor' ); 
    }
);

////Add the trunk////
var trunk; 

// load a resource
objloader.load ('exports/trunk.obj',
// called when resource is loaded
function ( object ) 
    {
        trunk = object;
        trunk.position.y = 0;
        trunk.traverse( function ( node ) {
        if (node.isMesh) node.material = trunkmaterial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
      tree.add( trunk );
    },
    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the trunks' ); 
    }

    
);

////Add the tree////
var tree;
// load a resource
objloader.load ('exports/tree.obj',
// called when resource is loaded
function ( object ) 
    {
        tree = object;
        tree.position.y = 0;
        tree.traverse( function ( node ) {
        if ( node.isMesh ) node.material = treematerial;
        if (node.isMesh) node.receiveShadow = true;
        if (node.isMesh) node.castShadow = true;
      } );
    scene.add( tree );
    },
    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the trees' ); 
    }
);

////Add the mountains////
var mountains;
// load a resource
objloader.load ('exports/mountains.obj',
// called when resource is loaded
function ( object ) 
    {
    mountains = object;
    mountains.position.y = 0;
    mountains.traverse( function ( node ) {
        if ( node.isMesh ) node.material = mountainmaterial;
        if (node.isMesh) node.receiveShadow = true;
      } );
    scene.add( mountains );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the mountains' ); 
    }
);

////Add the cave////
var cave;
// load a resource
objloader.load ('exports/cave.obj',
// called when resource is loaded
function ( object ) 
    {
    cave = object;
    cave.position.y = 0;
    cave.traverse( function ( node ) {
        if ( node.isMesh ) node.material = cavematerial;
        if (node.isMesh) node.receiveShadow = true;
      } );
    scene.add( cave );
    },  

    // called when loading is in progresses
    function ( xhr ) 
    { 
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); 
    },
    // called when loading has errors
    function ( error ) 
    { console.log( 'An error with the cave' ); 
    }
);


//background colour
scene.background = new THREE.Color( 0x78c4eb );

//create camera
var camera = new THREE.PerspectiveCamera(75, 
window.innerWidth/window.innerHeight, 1, 1000);

//OrbitControls are necessary to view the scene
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

//call controls.update() if i change the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

//add spotlight
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100, 50, 100);
spotLight.intensity = 0.8;
spotLight.castShadow=true;
scene.add(spotLight);


//add spotlight2
var spotLight2 = new THREE.SpotLight(0xffffff);
spotLight2.position.set(100, 50, -120);
spotLight2.intensity = 0.8;
spotLight2.castShadow=true;
scene.add(spotLight2);


//camera represented
var geoIce1= new THREE.SphereGeometry(1, 18, 18);
var matIce1 = new THREE.MeshPhongMaterial({color: 0x669900});
var meshIce1 = new THREE.Mesh(geoIce1, matIce1);

//spinning suns
var geosun= new THREE.SphereBufferGeometry(
    10, 10, 10,
     400, 400, 
     400, 400
      );
var matsun = new THREE.MeshPhongMaterial({color: 0xbbcc58});
var sun = new THREE.Mesh(geosun, matsun);
sun.position.set(20,90,-4);

sun.rotation.z=90;

scene.add(sun);

var sun2;
sun2=sun.clone();
sun.clone();

sun2.position.set(15,70,-50);
scene.add(sun2);

var sun3;
sun3=sun.clone();
sun.clone();

sun3.position.set(15,70,40);
scene.add(sun3);

//sun babies 
var babysungeo= new THREE.SphereGeometry(5);
var babysunmat = new THREE.MeshPhongMaterial({color: 0x693225});
var babysun = new THREE.Mesh(babysungeo, babysunmat);
babysun.position.set(10,10,10);
sun.add(babysun);

var babysungeo2= new THREE.SphereGeometry(5);
var babysunmat2 = new THREE.MeshPhongMaterial({color: 0x672569});
var babysun2 = new THREE.Mesh(babysungeo2, babysunmat2);
babysun2.position.set(-10,-10,-10);
sun.add(babysun2);

var babysungeo3= new THREE.SphereGeometry(5);
var babysunmat3 = new THREE.MeshPhongMaterial({color: 0x2b1e8f});
var babysun3 = new THREE.Mesh(babysungeo3, babysunmat3);
babysun3.position.set(-10,10,-10);
sun.add(babysun3);

var babysungeo4= new THREE.SphereGeometry(5);
var babysunmat4 = new THREE.MeshPhongMaterial({color: 0x1e8f38});
var babysun4 = new THREE.Mesh(babysungeo4, babysunmat4);
babysun4.position.set(10,-10,10);
sun.add(babysun4);

//add pointlight
//while pointLight is advisable to have, the scene looked better if spotlights are used instead
/*var pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(100, -50, 50);
pointlight.intensity = 0.8;
pointlight.castShadow=true;
scene.add(pointlight);*/

// Add the ambient light
var lightAmbient = new THREE.AmbientLight( 0xdbdbdb ); 
scene.add(lightAmbient);


var iFrame = 0;
function animate() 
{
    //this moves the cone, we wont use it
   // meshCone.position.x = Math.sin(iFrame/100)*6;
    requestAnimationFrame(animate);
    
    // required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
    
    sun.rotation.x = 0.01 * iFrame;
    sun.rotation.y = 0.01 *iFrame;
    sun.rotation.z = 0.01 *iFrame;

    sun2.rotation.x = -0.01 * iFrame;
    sun2.rotation.y = -0.01 *iFrame;
    sun2.rotation.z = -0.01 *iFrame;

    sun3.rotation.x = -0.02 * iFrame;
    sun3.rotation.y = -0.01 *iFrame;
    sun3.rotation.z = -0.01 *iFrame;

    renderer.render(scene, camera);
    iFrame ++;
    
}
animate();
console.log("Done");

//-------------------------------------------------------
                //IN HERE ALL THE STUFF IM NOT USING

//Alternative rendering method with GLB


    /*loader.load('castleExported.glb', function(glb){
        glb.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true; }
            if ( node.isMesh ) { node.receiveShadow = true; }

        } );

    scene.add( glb.scene );
}, function(xhr){
    console.log((xhr.loaded/xhr.total *100) + "% loaded of the castle")
}, function (error) {
    console.log('an error happened here')
})*/


/*loader.load('MountainsExported.glb', function(glb){
    scene.add(glb.scene);
}, function(xhr){
   console.log((xhr.loaded/xhr.total *100) + "% loaded of the Mountains")
}, function (error) {
   console.log('an error happened here')
})

loader.load('floorExported.glb', function(glb){
    glb.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = false; }
        if ( node.isMesh ) { node.receiveShadow = true; }

    } );

    scene.add( glb.scene );
}, function(xhr){
   console.log((xhr.loaded/xhr.total *100) + "% loaded of the Mountains")
}, function (error) {
   console.log('an error happened here')
})*/

/*
//create test icecream (balls and cone)
var geoCone= new THREE.CylinderGeometry(1.1, 0.1, 3, 18);
var matCone = new THREE.MeshPhongMaterial({color: 0xCC6622});
var meshCone = new THREE.Mesh(geoCone, matCone);

//-------------------------------------------------------
var geoIce1= new THREE.SphereGeometry(1, 18, 18);
var matIce1 = new THREE.MeshPhongMaterial({color: 0x669900});
var meshIce1 = new THREE.Mesh(geoIce1, matIce1);
meshIce1.position.y = 1.7;
//--------------------------------------------------------------
var geoIce2= new THREE.SphereGeometry(0.8, 18, 18);
var matIce2 = new THREE.MeshPhongMaterial({color: 0xCCCCCC});
var meshIce2 = new THREE.Mesh(geoIce2, matIce2);
meshIce2.position.y = 1.0;
//-----------------------------------------------------------------
*/

//meshCone.add(meshIce1);
//meshIce1.add(meshIce2);