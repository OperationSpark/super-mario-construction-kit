'use strict';

// draw the background
background(127, 131, 231);

// draw the floor
var yGround = 500;
fill(156,102,17); // brown
rect(0,yGround,600,600-yGround);

// draw a pipe coming out of floor
fill(141,199,17); // green
rect(400,400,100,50);
rect(410,450,80,50);

// box
fill(216,216,216);
rect(0,0,100,100);
line(0,0,100,100);
line(100,0,0,100);

