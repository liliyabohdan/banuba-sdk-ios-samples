const am = bnb.scene.getAssetManager();

class Headwear{
    constructor(){
        this.settings = {
            "shape": "default",
            "color": "default"
        }
        this.shapes = {
            "default" : "",
            "shape_1" : {
                "name": "hat_01",
                "hair": false,
            },
            "shape_2" : {
                "name": "hat_02",
                "hair": true,
            },
            "shape_3" : {
                "name": "hat_03",
                "hair": true,
            },
            "shape_4" : {
                "name": "hat_04",
                "hair": true,
            },
            "shape_5" : {
                "name": "hat_05",
                "hair": true,
            },
            "shape_6" : {
                "name": "hat_06",
                "hair": true,
            },
            "shape_7" : {
                "name": "hat_07",
                "hair": true,
            },
            "shape_8" : {
                "name": "hat_08",
                "hair": true,
            },
            "shape_9" : {
                "name": "hat_09",
                "hair": true,
            },
            "shape_10" : {
                "name": "hat_10",
                "hair": true,
            },
            "shape_11" : {
                "name": "hat_11",
                "hair": true,
            },

        }
        this.colors = {
            "default": "0., 0., 0., 1.",
            "color_1": "0.9764705882352941, 0.9764705882352941, 0.9764705882352941, 1.",
            "color_2": "0.8352941176470589, 0.8352941176470589, 0.8352941176470589, 1.",
            "color_3": "0.3215686274509804, 0.3215686274509804, 0.3215686274509804, 1.",
            "color_4": "0.06274509803921569, 0.06274509803921569, 0.06274509803921569, 1.",
            "color_5": "0.9882352941176471, 0.6941176470588235, 0.6705882352941176, 1.",
            "color_6": "0.8980392156862745, 0.19215686274509805, 0.13725490196078433, 1.",
            "color_7": "0.6470588235294118, 0.09411764705882353, 0.050980392156862744, 1.",
            "color_8": "0.3607843137254902, 0.0784313725490196, 0.054901960784313725, 1.",
            "color_9": "1., 0.8392156862745098, 0.9137254901960784, 1.",
            "color_10": "0.9176470588235294, 0.34901960784313724, 0.615686274509804, 1.",
            "color_11": "0.6235294117647059, 0.0196078431372549, 0.3058823529411765, 1.",
            "color_12": "0.3686274509803922, 0.1411764705882353, 0.24705882352941178, 1.",
            "color_13": "0.8392156862745098, 0.788235294117647, 1., 1.",
            "color_14": "0.5568627450980392, 0.45098039215686275, 0.9019607843137255, 1.",
            "color_15": "0.1568627450980392, 0.054901960784313725, 0.49411764705882355, 1.",
            "color_16": "0.2235294117647059, 0.1803921568627451, 0.3607843137254902, 1.",
            "color_17": "0.7176470588235294, 0.8470588235294118, 1., 1.",
            "color_18": "0.30196078431372547, 0.596078431372549, 0.9529411764705882, 1.",
            "color_19": "0.0784313725490196, 0.34901960784313724, 0.6745098039215687, 1.",
            "color_20": "0.12156862745098039, 0.23921568627450981, 0.3803921568627451, 1.",
            "color_21": "0.788235294117647, 0.9254901960784314, 0.6274509803921569, 1.",
            "color_22": "0.5058823529411764, 0.7254901960784313, 0.2549019607843137, 1.",
            "color_23": "0.2549019607843137, 0.42745098039215684, 0.058823529411764705, 1.",
            "color_24": "0.20392156862745098, 0.2901960784313726, 0.10196078431372549, 1.",
            "color_25": "0.9921568627450981, 0.9372549019607843, 0.5607843137254902, 1.",
            "color_26": "0.9764705882352941, 0.7843137254901961, 0.28627450980392155, 1.",
            "color_27": "0.9176470588235294, 0.49411764705882355, 0.16862745098039217, 1.",
            "color_28": "0.3686274509803922, 0.19607843137254902, 0.06666666666666667, 1.",
        }

        this.material_headwear = am.findMaterial("mat_hat_01");
        this.mesh = am.findMesh("hat_01");

        this.MI = bnb.scene.getRoot().findChildByName("Hat").getComponent(bnb.ComponentType.MESH_INSTANCE).asMeshInstance()
        this.Base = am.findImage("hat_Base").asTexture();
        this.MR = am.findImage("hat_MR").asTexture();
        this.Normal = am.findImage("hat_Normal").asTexture();
        this.Blendshapes = am.findImage("hat_blendshapes").asTexture();

        this.headwear_color = am.findMaterial("unused").findParameter("hat_color");
        this.is_hat = am.findMaterial("unused").findParameter("is_hat");
        
        this.disableAll()
    }

    setShape(shape){
        if(shape == "default"){
            return
        }
        if(this.shapes[shape]){
        // am.uploadMeshData(this.mesh, "meshes/"+this.sets[name]+".bsm2")
        // const Mesh = am.findMesh(this.shapes[shape].name)
        // this.MI.setMesh(Mesh)
        am.uploadMeshData(this.mesh, "meshes/"+this.shapes[shape].name+".bsm2")

        this.MI.setSubGeometryMaterial("mat_hat_01", this.material_headwear)
        this.Base.load("modules/headwear/images/"+this.shapes[shape].name+"_Base.jpg")
        this.MR.load("modules/headwear/images/"+this.shapes[shape].name+"_MR.jpg")
        this.Normal.load("modules/headwear/images/"+this.shapes[shape].name+"_Normal.jpg")
        this.Blendshapes.load("modules/headwear/images/blendshapes_"+this.shapes[shape].name+".ktx")
        this.shapes[shape].hair && this.is_hat.setVector4(new bnb.Vec4(1.,0.,0.,0.))
        this.MI.setVisible(true)
        }

    }

    setColor(color){
        let c;
        if(color.charAt(0) == "@"){
            c = color.substring(1);
        } else {
            c = this.colors[color] || this.colors["default"];
        }
        const [x,y,z] = c.split(',');
        this.headwear_color.setVector4(new bnb.Vec4(x,y,z,1.0))
    }

    disableAll(){
        this.MI.setVisible(false)
        this.is_hat.setVector4(new bnb.Vec4(0.,0.,0.,0.))
    }

    parameters({shape, color}){
        shape && this.setShape(shape)
        color && this.setColor(color)
    }

    clear(){
        this.disableAll()
    }
}

exports.Headwear = Headwear