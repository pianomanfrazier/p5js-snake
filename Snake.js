function Snake () {
    this.x = 0;
    this.y = 0;

    this.dirX = 1;
    this.dirY = 0;

    this.eat = () => {
        
    }

    this.draw = () => {
        fill(0,0,0);
        stroke(230);
        square(this.x * w, this.y * w, w)
    }

    this.update = () => {
        this.x = this.x + this.dirX;
        this.y = this.y + this.dirY;
    }

    this.goUp = () => {
        this.dirX = 0;
        this.dirY = -1;
    }
    this.goDown = () => {
        this.dirX = 0;
        this.dirY = 1;
    }
    this.goRight = () => {
        this.dirX = 1;
        this.dirY = 0;
    }
    this.goLeft = () => {
        this.dirX = -1;
        this.dirY = 0;
    }
}