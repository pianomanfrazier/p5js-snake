function Apple () {
    this.x = 0;
    this.y = 0;

    this.spawn = () => {
        this.x = floor(random(0,50));
        this.y = floor(random(0,30));
    }

    this.draw = () => {
        fill(255,0,0);
        square(w * this.x, w * this.y, w)
    }

}