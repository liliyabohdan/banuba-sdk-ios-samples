bnb.scene.enableRecognizerFeature(bnb.FeatureID.ACTION_UNITS_ANTIJITTER);
require("bnb_js/timers")
const am = bnb.scene.getAssetManager();
const hair_module = require("./modules/hair/index.js")
const body_module = require("./modules/body/index.js")
const mouth_module = require("./modules/mouth/index.js")
const ears_module = require("./modules/ears/index.js")
const background_module = require("./modules/background/index.js")
const nose_module = require("./modules/nose/index.js")
const eyes_module = require("./modules/eyes/index.js")
const facialhair_module = require("./modules/facialhair/index.js")
const eyelashes_module = require("./modules/eyelashes/index.js")
const brows_module = require("./modules/brows/index.js")
const outfit_module = require("./modules/outfit/index.js")
const glasses_module = require("./modules/glasses/index.js")
const headwear_module = require("./modules/headwear/index.js")



// speed from 0.0 to 1.0, less - slower, more - faster
const speedReturn = 0.25;
const speedDefault = 0.125;

const AvatarRegions = {
    "Face": new body_module.Face,
    "FacialHair": new facialhair_module.Facialhair,
    "Mouth": new mouth_module.Mouth,
    "Nose": new nose_module.NoseShape,
    "Ears": new ears_module.Ears,
    "Eyes": new eyes_module.EyesShape,
    "Eyelashes": new eyelashes_module.Eyelashes,
    "Brows": new brows_module.Brows,
    "Hair": new hair_module.Hair,
    "Background": new background_module.Background,
    "Glasses": new glasses_module.Glasses,
    "Headwear": new headwear_module.Headwear,
    "Outfit": new outfit_module.Outfit
}

function clear() {
    for (const region of Object.values(AvatarRegions)) region.clear()
}

function setState(state) {
    let time = new Date().getTime();
    clear()
    if (state)
        for (const [region, settings] of Object.entries(state)) AvatarRegions[region].parameters(settings)
    let time2 = new Date().getTime();
    bnb.log("Change time: "+(time2 - time))
}

let isScreenshot = false

function screenshot(check) {
    if (check) {
        AvatarRegions["Background"].clear();
        am.findMaterial("unused").findParameter("is_face_anim").setVector4(new bnb.Vec4(1., 1., 0., 0.));
        isScreenshot = true;
    } else {
        isScreenshot = false;
    }
}

const rot = am.findMaterial("unused").findParameter("face_rotation");
const face = bnb.scene.getRoot().findChildByName("face_tracker0").getComponent(bnb.ComponentType.FACE_TRACKER).asFaceTracker()

let anim = 0;
let isFaceAnim = false;
bnb.eventListener.on("onUpdate", function (args) {
    const transl = bnb.scene.getRoot().findChildByName("face_tracker0").getComponent(bnb.ComponentType.TRANSFORMATION).asTransformation().getTranslation()
    if (!isScreenshot) {
        rot.setVector4(new bnb.Vec4(transl.x, transl.y, transl.z, 0.))

        if (face.hasFace() && (!isFaceAnim || (anim < 1. && anim > 0))) {
            anim -= speedReturn;
            anim = anim >= 0 ? anim : 0;

            am.findMaterial("unused").findParameter("is_face_anim").setVector4(new bnb.Vec4(1., anim, 0., 0.));
            if(anim == 0)
                isFaceAnim = true;
        } else if(!face.hasFace() && isFaceAnim) {
            // rot.setVector4(new bnb.Vec4(transl.x, transl.y, transl.z, 0.))
            anim += speedDefault;
            anim = anim <= 1 ? anim : 1;

            am.findMaterial("unused").findParameter("is_face_anim").setVector4(new bnb.Vec4(0., anim, 0., 0.));
            if(anim == 1){
                isFaceAnim = false;
            }
        }
    }
})

setState({
    "Face": {
        "shape": "shape_1",
        "makeups": {
            "wrinkles": {
                "type": "default",
                "color": "default"
            },
            "freckles": {
                "type": "default",
                "color": "default"
            },
            "moles": {
                "type": "default",
                "color": "default"
            },
            "blush": {
                "type": "default",
                "color": "default"
            },
        },
        "lips": {
            "color": "default",
            "type": "matte"
        },
        "color": "default",
        "gender": "male"
    },
    "FacialHair":{
        "shape": "default",
        "color": "default",
    },
    "Mouth": {
        "shape": "default"
    },
    "Nose": {
        "shape": "default"
    },
    "Ears": {
        "shape": "default",
        "left_earring":{
            "shape": "default",
            "color": "default"
        },
        "right_earring":{
            "shape": "default",
            "color": "default" 
        }
    },
    "Eyes": {
        "shape": "default",
        "color": "default",
        "eyelids": {
            "type": "default",
            "color": "default"
        },
        "shadows":  {
            "type": "default",
            "color": "default"
        },
    },
    "Eyelashes": {
        "shape": "default"
    },
    "Brows": {
        "shape": "default",
        "color": "default"
    },
    "Hair": {
        "shape": "default",
        "color": "default"
    },
    "Glasses": {
        "frame": "default",
        "color": "default"
    },
    "Headwear": {
        "shape": "default",
        "color": "default"
    },
    "Outfit": {
        "set": "default"
    },
    "Background": {
        "set": "default"
    },
})