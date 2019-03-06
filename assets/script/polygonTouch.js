cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad () {
        this.colliderTouchEvent = null;
        this.initColliderTouch();
    },

    initColliderTouch(){
        if(this.colliderTouchEvent) return;
        cc.director.getCollisionManager().enabled = true;
        this.colliderTouchEvent = this.node.on(
            cc.Node.EventType.TOUCH_START,
            function (touch, event){
                let touchLoc = touch.getLocation();
                let collider = this.node.getComponents(cc.PolygonCollider).find(element => {
                    return cc.Intersection.pointInPolygon(touchLoc, element.world.points)
                });
                if (collider) this.onColliderTouchEvent(collider);
                return true;
            }, this);
    },
    onColliderTouchEvent(collider) {
        let divId = collider.tag;
        let offset = collider.offset;
        console.log('divId = ', divId);
        console.log('offset = ', offset);
       
    },

    // update (dt) {},
});
