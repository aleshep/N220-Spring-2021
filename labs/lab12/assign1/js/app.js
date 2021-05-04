// variables that define the ship, lasers, and alien fleet
var ship;
var fleet;
var lasers;

// setup of canvas board
function setup() {
    level = 1;

    // defines ship, fleet, and lasers
        createCanvas(1520, 700);
        ship = new Ship();
        fleet = new Fleet(level);
    lasers = [];
}

// Draws the background
function draw() {
    background(30);

    // These functions define drawing the ship and how it moves with the code
    ship.draw();
    ship.move();

    // These functions defines and draws the alien fleet and how it moves with the code
    fleet.draw();
    fleet.move();

    // Draws the lasers and how they function with the code
    for(var i = lasers.length - 1; i >= 0; i--) {
        lasers[i].move();
        lasers[i].draw();
        
        if(lasers[i].y<0) {
            lasers.splice(i,1);
        }
        // When laser hits alien, the alien disappears and destroys it
        else if(fleet.isHit(lasers[i])) {
            lasers.splice(i,1);
        }
    }

}

// Defines the key functions and how to move the ship
// These functions defines what the ship does when keys aren't pressed or released, the ship stops/does nothing
function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        ship.setSpeed(0);
        if(keyIsDown(RIGHT_ARROW)) {
            ship.setSpeed(10);
        }
        else if (keyCode === RIGHT_ARROW) {
            ship.setSpeed(0);
            if (keyIsDown(LEFT_ARROW)) {
                ship.setSpeed(10);
            }
        }
    }
}

// This function defines which keys control how the ship moves and its speed
function keyPressed() {
    if (keyCode === RETURN) {
        setup();
        return;
    }
    if (key === ' ')
    lasers.push(new Lasers(ship.x,0));
    if (keyCode === LEFT_ARROW) {
        ship.setSpeed(-10);
    }
    else if (keyCode === RIGHT_ARROW) {
        ship.setSpeed(10);
    }
}


// This function is an overall function for the alien fleet
// Styling how the aliens move, how many there are, and how they bounce back
function Alien(x,y) {
    // Positioning of aliens
        this.x = x;
    this.y = y;
    this.r = 20;
        this.vy = 2;
        
        // Aliens styling
        this.draw = function() {
            fill(71, 214, 58);
            ellipse(this.x, this.y, this.r*2, this.r*2);
        }
        
        // Speed functions for aliens
        this.setSpeedX = function(speedx) {
            this.vx = speedx;
        }

        this.setSpeedY = function(speedy) {
            this.vy = speedy;
        }

        this.move = function() {
            this.x += this.vx;
        }
}

// Fleet defines the bouncing function of the aliens and how they move
function Fleet(level) {

    // stores aliens
    this.aliens = []; 
   
    // Defines the amount of aliens
    for(var i = 0; i<11; i++) {
        this.aliens[i] = new Alien(i*100, 100);
    }

    this.level = level;
    this.vx = 15;
    this.vy = 2;
    this.bounces = 0;

    // DThis function starts drawing the fleet functions
    this.draw = function() {
        for (var i = 0; i<this.aliens.length; i++) {
            this.aliens[i].draw();
        }
    }

    // These are speed functions
    this.setSpeedX = function(speedx) {
        this.vx = speedx;
        for(var i = 0; i<this.aliens.length; i++) {
            this.aliens[i].setSpeedX(speedx);
        }
    }

    this.setSpeedY = function(speedy) {
        this.vy = speedy;
        for(var i = 0; i<this.aliens.length; i++) {
            this.aliens[i].setSpeedY(speedy);
        }
    }

    this.move = function() {
        
        // This is also a bounce function, this is how the fleet bounces the opposite direction
        if((this.aliens[this.aliens.length-1].x+this.vx)> width-10) {
            this.setSpeedX(-1*(5 + (this.level-1)*2));

        // This causes the bounces and the fleet to come closer
            this.bounces++;
        }

        if((this.aliens[0].x+this.vx)< 20) {
            this.setSpeedX(5 + (this.level-1)*2);
            this.bounces++;
        }

        // Move fleet based on bounces
        if((this.level > 5 && this.bounces ==1) || this.bounces>Math.abs(7-this.level)) {
            for(var i = 0; i<this.aliens.length; i++) {
                this.aliens[i].y+=(30);
                this.bounces = 0;
            }
        }

        // Move individual fleets
        for (var i = 0; i<this.aliens.length; i++) {
            this.aliens[i].move();
        }
    }

    // This function is what "destroys" the aliens when they are hit with a laser
    this.isHit = function(laser) {
        for(var i = this.aliens.length - 1; i >= 0; i--) {
            a = this.aliens[i];
            if(Math.abs(laser.x-a.x) < a.r && Math.abs(laser.y-a.y) < a.r) {
                this.aliens.splice(i,1);
                return true;
            }
        }
        return false;
    }
}

// This function is the code for the lasers and how they are supposed to move
function Lasers(x,y) {
    // sets default location of Ship
    // x pos of middle of Ship
    this.x = x;
    // x speed of Ship
    this.vy = -15;

    this.r = 10;
    this.y = height-60;

    // Draws the shape and styles the laser
    this.draw = function() {
        fill(244, 66, 75);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    // Sets laser velocity
    this.setSpeed = function(speedy) {
        this.vy = speedy;
    }

    // Moves laser based on ships velocity
    this.move = function() {
        this.y += this.vy;
    }

}

// This is the function of the ship and deals with the speed settings
function Ship() {
    // default location of Ship
    this.x = width/2;
    this.vx = 0;

    // Draws shape and styles the ship
    this.draw = function() {
        fill(176, 176, 176);
        triangle(this.x, height-60, this.x-30, height-10, this.x+30, height-10);
    }

    // Sets ship velocity
    this.setSpeed = function(speedx) {
        this.vx = speedx;
    }

    // Moves ship based on its velocity
    this.move = function() {
        if((this.x+this.vx)>20 && (this.x+this.vx)<width-20)
            this.x += this.vx;
    }
}