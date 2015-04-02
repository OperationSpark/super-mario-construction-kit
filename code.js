/* global background,fill,rect,line */
'use strict';

// draws the background in blue
background(127, 131, 231);

// draws a brown floor
var yGround = 500;
fill(156,102,17);
rect(0,yGround,600,600-yGround);

// draw a green pipe coming out of floor
var pipeHeight = 150;
fill(141,199,17); 
rect(400+10,yGround-pipeHeight,80,pipeHeight);
rect(400,yGround-pipeHeight,100,50);

/* ============================================= 
   Start Here! 
   ============================================= */

// draws a box with an X in it
fill(216,216,216);
rect(0,0,100,100);
line(0,0,100,100);
line(100,0,0,100);

