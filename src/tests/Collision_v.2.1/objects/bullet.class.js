class bulletObj extends baseObj {
    constructor(args) {
      
        switch (args.type) {
            case 'base':
                args.colisionPath = ["0,2.5", "-2.5,0", "-2.5,-30", "2.5,-30", "2.5,0"];
                super(args);
                break;
      
            case 'energy':
                super(args);
                break;
      
            default:
                break;
        }


        this.dmg = args.dmg;
        this.hs = args.hitStop;
    }
}