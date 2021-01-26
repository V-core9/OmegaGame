

var gUs = {
    player: {
        username: "[8|8> Yea_War <8|8]",
        hero: 'dummy',
        status: 'stand',
        x: 805,     // X coordinate of "this"...what ever it is
        y: 0,       // Y coordinate of "this"...what ever it is
        ang: 0,
        acc: 0,
        speed: 0,
        LDT: 0,
        HP: 100,
        mHP: 150,
        dbgColor: "lime",
    },
    enemies: [
        {
            username: '2emo1user2',
            hero: 'dummy',
            status: 'stand',
            x: 5,
            y: 0,
            ang: 0,
            acc: 0,
            speed: 0,
            LDT: 0,
            HP: 85,
            mHP: 150,
            dbgColor: "red",
        },
        {
            username: '1demo1user1',
            hero: 'dummy',
            status: 'stand',
            x: 275,
            y: 0,
            ang: 0,
            acc: 0,
            speed: 0,
            LDT: 0,
            HP: 100,
            mHP: 150,
            dbgColor: "darkred",
        },

    ]
};

var app = {
    cnv: null,
    ctx: null,
    data: {
        selectedObj: "player",
    },
    start: function () {
        this.cnv = document.getElementById('app');
        this.ctx = this.cnv.getContext("2d");
    },
    renderLoop: function () {

        //console.log('app.draw(' + element.x + ':' + element.y + ')')

        app.ctx.clearRect(0, 0, app.cnv.width, app.cnv.height);

        this.draw(gUs.player);

        gUs.enemies.forEach(elm => {
            this.draw(elm)
        })

        requestAnimationFrame(() => { app.renderLoop(); });
    },
    draw: function (element) {

        switch (element.hero) {
            case "dummy":
                //console.log('case == "DUMMY" -> drawing dummy;')
                human_dummy.draw(element);
                break;

            default:
                //console.log('case == <?EMPTY?> -> drawing dummy;')
                human_dummy.draw(element);
                break;
        }

    },
    drawDBGBox: function () {

    }
};

var human_dummy = {
    w: 220,
    h: 445,
    bodyDots: {
        head: [0, 45],    //Main head position    [dummy.w/2, 45px]
        neck: [0, 75],   //Neck conection dot [dummy.w/2 +-0,  75px I guess. ]
        shl: [70, 90],     //Shoulder  [dummy.w/2 +- 70, dummy.h/2]
        elb: [85, 200],    //Elbow 
        hnd: [50, 265],    //Hand 
        hip: [40, 215],    //Hip 
        kn: [50, 330],     //Knee 
        ft: [50, 445],     //Foot 
    },

    draw: function (vals) {

        app.ctx.save();

        app.ctx.translate(vals.x, vals.y);
        app.ctx.strokeStyle = vals.dbgColor;
        app.ctx.fillStyle = vals.dbgColor;

        this.drawDbgBox();
        this.drawObjSkelet();

        app.ctx.restore();
    },

    drawObjSkelet: function () {
        //console.log("humman_dummy.headDraw()")
        app.ctx.save();

        app.ctx.strokeStyle = "red";
        app.ctx.fillStyle = "red";
        app.ctx.lineWidth = Math.round(app.cnv.width / 160);

        //Body Joints [marking dots]
        //HEAD
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.head[0], this.bodyDots.head[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //NECK
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.neck[0], this.bodyDots.neck[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //SHOULDERS
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.shl[0], this.bodyDots.shl[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.shl[0], this.bodyDots.shl[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //ELBOVE ARM JOINT
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.elb[0], this.bodyDots.elb[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.elb[0], this.bodyDots.elb[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //HANDS
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.hnd[0], this.bodyDots.hnd[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.hnd[0], this.bodyDots.hnd[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //HIPS
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.hip[0], this.bodyDots.hip[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2, this.bodyDots.hip[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.hip[0], this.bodyDots.hip[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //KNEELS
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.kn[0], this.bodyDots.kn[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.kn[0], this.bodyDots.kn[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        //FEET
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.ft[0], this.bodyDots.ft[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 - this.bodyDots.ft[0], this.bodyDots.ft[1], 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.restore();


        // AND HERE CONNECT THOSE TO SEE WHAT WE GET...
        app.ctx.save();

        app.ctx.lineWidth = Math.round(app.cnv.width / 320);
        app.ctx.strokeStyle = "rgba(50,50,250,.5)";
        app.ctx.fillStyle = "rgba(250,50,250,.5)";

        //NECK
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 + this.bodyDots.head[0], this.bodyDots.shl[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.neck[0], this.bodyDots.elb[1]);
        app.ctx.stroke();

        //HEAD
        app.ctx.beginPath();
        app.ctx.arc(this.w / 2 + this.bodyDots.head[0], this.bodyDots.head[1], 30, 0, 2 * Math.PI, true);
        app.ctx.fill(); app.ctx.stroke();

        //Torso SIDE
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 + this.bodyDots.neck[0], this.bodyDots.neck[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.shl[0], this.bodyDots.shl[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.hip[0], this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2, this.bodyDots.hip[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();

        //Torso SIDE OTHER
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 + this.bodyDots.neck[0], this.bodyDots.neck[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.shl[0], this.bodyDots.shl[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.hip[0], this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2, this.bodyDots.hip[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();

        //HAND
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 + this.bodyDots.shl[0], this.bodyDots.shl[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.elb[0], this.bodyDots.elb[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.hnd[0], this.bodyDots.hnd[1]);
        app.ctx.stroke();

        //OTHER HAND
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 - this.bodyDots.shl[0], this.bodyDots.shl[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.elb[0], this.bodyDots.elb[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.hnd[0], this.bodyDots.hnd[1]);
        app.ctx.stroke();

        //LEG
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2, this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.hip[0], this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.kn[0], this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 - (this.bodyDots.kn[0] - this.bodyDots.hip[0]) * 1.5, this.bodyDots.kn[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();

        //LEG BOT
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 - (this.bodyDots.kn[0] - this.bodyDots.hip[0]) * 1.5, this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.ft[0], this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 - this.bodyDots.ft[0], this.bodyDots.ft[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();

        //LEG
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2, this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.hip[0], this.bodyDots.hip[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.kn[0], this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 + (this.bodyDots.kn[0] - this.bodyDots.hip[0]) * 1.5, this.bodyDots.kn[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();

        //LEG BOT
        app.ctx.beginPath();
        app.ctx.moveTo(this.w / 2 + (this.bodyDots.kn[0] - this.bodyDots.hip[0]) * 1.5, this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.ft[0], this.bodyDots.kn[1]);
        app.ctx.lineTo(this.w / 2 + this.bodyDots.ft[0], this.bodyDots.ft[1]);
        app.ctx.closePath();
        app.ctx.fill();
        app.ctx.stroke();


        app.ctx.restore();
    },

    drawDbgBox: function () {
        // base 
        app.ctx.strokeRect(0, 0, this.w, this.h);

        app.ctx.beginPath();
        app.ctx.arc(0, 0, 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w, 0, 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(this.w, this.h, 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();

        app.ctx.beginPath();
        app.ctx.arc(0, this.h, 3, 0, 2 * Math.PI, true);
        app.ctx.stroke();
    }
};

function listObjListToView() {
    document.getElementById('objListView').innerHTML += '<div class="row"><h5>Objects List</h5></div><div id="' + gUs.player.username + '" class="row" onclick=\'app.data.selectedObj = "player"; selectObjEditor();">' + gUs.player.username + '</div>'
    gUs.enemies.forEach(elm => {
        document.getElementById('objListView').innerHTML += '<div id="' + elm.username + '" class="row"  onclick=\'app.data.selectedObj = "' + elm.username + '"; selectObjEditor();\'>' + elm.username + '</div>'
    });


    /*if (app.data.selectedObj == "player"){
        
    }*/
};


app.start();
listObjListToView();

requestAnimationFrame(() => { app.renderLoop(); });