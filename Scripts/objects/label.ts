module objects {
    export class Label extends createjs.Text {
        //CONSTRUCTOR
        constructor(public LabelString:string, 
                    public fontFamily:string,
                    public fontColour:string,
                    x:number,
                    y:number,
                    public centered:boolean) {
            super(LabelString, fontFamily, fontColour);

            this.Start();
            this.x = x;
            this.y = y;
        }

        //PUBLIC METHODS
        public Start():void {
            if (this.centered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
        }
    }
}