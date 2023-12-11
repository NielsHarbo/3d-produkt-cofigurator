AFRAME.registerComponent("scaledown", 
    {
        init : function (){
            const that = this
            const model = document.getElementById("model")
            that.el.addEventListener("click", function(){
                let size = model.getAttribute("scale")
                size.z = size.z - 0.05
                size.y = size.y - 0.05
                size.x = size.x - 0.05
            })
        }
    } 
)

AFRAME.registerComponent("scaleup", 
    {
        init : function (){
            const that = this
            const model = document.getElementById("model")
            that.el.addEventListener("click", function(){
                let size = model.getAttribute("scale")
                size.z = size.z + 0.05
                size.y = size.y + 0.05
                size.x = size.x + 0.05
            })
        }
    } 
)


AFRAME.registerComponent('changetexture', {
    //Schema er værdier der passes til komponentet med som attribute values.
    //Værdierne trækkes ud med [data.whateverKey] f.eks. this.data.path
    schema: {
        path:{default: "assets/texture1.jpg"}
    },
    init: function () {
        const that = this; // i eventlistn er "this" eventens "ejer" selv, derfor må vi deklarere that uden for eventlstn
        let model = document.getElementById("model");
        model.addEventListener('model-loaded', function (e) {
            const mobject = model.getObject3D('mesh');
            that.el.addEventListener('click', function () {
                console.log(that.data.path);
                if (mobject) {
                    
                    mobject.traverse(function (node) {
                        if (node.isMesh) {
                            
                            //node.material.color.setHex( 0xff0000 );
                            node.material.map = new THREE.TextureLoader().load(that.data.path);
                            node.material.needsUpdate = true;
                        }
                    });
                }
            });
        });
    }
});