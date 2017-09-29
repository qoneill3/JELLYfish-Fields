$(function() {	


	console.log("what the fuck is up!");


	var anim_id;
	//saving DOM objects to variables
	var container = $('#container');
	var spongebob = $('#spongebob');
	 var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');
    var jelly = $('.jelly');
    var jelly_1 = $('#jelly_1');
    var jelly_2 = $('#jelly_2');
    var jelly_3 = $('#jelly_3');
    var jelly_4 = $('#jelly_4');
    var jelly_5 = $('#jelly_5');
    var jelly_6  = $('#jelly_6');
    var king_jelly = $('#king_jelly');
    var patrick = $('#patrick');
    

	 //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var spongebob_width = parseInt(spongebob.width());
    var spongebob_height = parseInt(spongebob.height());
    var patrick_width = parseInt(patrick.width());
    var patrick_height = parseInt(patrick.height());
    var jelly_width = parseInt(jelly.width());
    var jelly_height = parseInt(jelly.height());

      //some other declarations
    var game_over = false;

    var score_counter = 1;
    var score_counter_2 = 1;

    var speed = 2;
    var line_speed = 5;

    var spongebob_move_right = false;
    var spongebob_move_left = false;
    var spongebob_move_up = false;
    var spongebob_move_down = false;
    

    var patrick_move_right = false;
    var patrick_move_left = false;
    var patrick_move_up = false;
    var patrick_move_down = false;


    $(document).on('keydown', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && spongebob_move_left === false) {
                spongebob_move_left = requestAnimationFrame(spongebob_left);
            } 
            else if (key === 39 && spongebob_move_right === false) {
                spongebob_move_right = requestAnimationFrame(spongebob_right);
            } 
            else if (key === 38 && spongebob_move_up === false) {
                spongebob_move_up = requestAnimationFrame(spongebob_up);
            } 
            else if (key === 40 && spongebob_move_down === false) {
                spongebob_move_down = requestAnimationFrame(spongebob_down);
            } 
            else if (key === 65 && patrick_move_left === false) {
            	patrick_move_left = requestAnimationFrame(patrick_left);            
            } 
            else if (key === 68 && patrick_move_right === false) {
            	patrick_move_right = requestAnimationFrame(patrick_right);
            } 
            else if (key === 87 && patrick_move_up === false) {
            	patrick_move_up = requestAnimationFrame(patrick_up);
            } 
            else if (key === 83 && patrick_move_down === false) {
            	patrick_move_down = requestAnimationFrame(patrick_down);
            }
        }
    });

    $(document).on('keyup', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
                cancelAnimationFrame(spongebob_move_left);
                spongebob_move_left = false;
            } 

            else if (key === 39) {
                cancelAnimationFrame(spongebob_move_right);
                spongebob_move_right = false;
            } 
            else if (key === 38) {
                cancelAnimationFrame(spongebob_move_up);
                spongebob_move_up = false;
            }
             else if (key === 40) {
                cancelAnimationFrame(spongebob_move_down);
                spongebob_move_down = false;
            }
             else if (key === 65) {
            	cancelAnimationFrame(patrick_move_left);
            	patrick_move_left = false;
            } 
            else if (key === 68) {
            	cancelAnimationFrame(patrick_move_right);
            	patrick_move_right = false;
            }
             else if (key === 87) {
            	cancelAnimationFrame(patrick_move_up);
            	patrick_move_up = false;
            }
             else if (key === 83) {
            	cancelAnimationFrame(patrick_move_down);
            	patrick_move_down = false;
            }
        }
    });
   

	//Player movement
	     

	 function spongebob_left() {
        if (game_over === false && parseInt(spongebob.css('left')) > 0) {
            spongebob.css('left', parseInt(spongebob.css('left')) - 5);
            spongebob_move_left = requestAnimationFrame(spongebob_left);
        } 
    }
    function patrick_left() {
    	  if (game_over === false && parseInt(patrick.css('left')) > 0) {
        	patrick.css('left', parseInt(patrick.css('left')) - 5);
        	patrick_move_left = requestAnimationFrame(patrick_left);
        }
    }

    function spongebob_right() {
        if (game_over === false && parseInt(spongebob.css('left')) < container_width - spongebob_width) {
            spongebob.css('left', parseInt(spongebob.css('left')) + 5);
            spongebob_move_right = requestAnimationFrame(spongebob_right);
        } 
    }

    function patrick_right() {
    	 if (game_over === false && parseInt(patrick.css('left')) < container_width - patrick_width) {
        	patrick.css('left', parseInt(patrick.css('left')) + 5);
        	patrick_move_right = requestAnimationFrame(patrick_right);
        }
    }

    function spongebob_up() {
        if (game_over === false && parseInt(spongebob.css('top')) > 0) {
            spongebob.css('top', parseInt(spongebob.css('top')) - 3);
            spongebob_move_up = requestAnimationFrame(spongebob_up);
        } 
    }

    function patrick_up() {
    	if (game_over === false && parseInt(patrick.css('top')) > 0) {
        	patrick.css('top', parseInt(patrick.css('top')) - 3);
        	patrick_move_up = requestAnimationFrame(patrick_up);
        }
    }

    function spongebob_down() {
        if (game_over === false && parseInt(spongebob.css('top')) < container_height - spongebob_height) {
            spongebob.css('top', parseInt(spongebob.css('top')) + 3);
            spongebob_move_down = requestAnimationFrame(spongebob_down);
        } 
    }

    function patrick_down() {
    	 if (game_over === false && parseInt(patrick.css('top')) < container_height - patrick_height) {
        	patrick.css('top', parseInt(patrick.css('top')) + 3);
        	patrick_move_down = requestAnimationFrame(patrick_down);
        }
    }

    
    anim_id = requestAnimationFrame(repeat);

    function repeat() {
        if (collision(spongebob, jelly_1) || collision(spongebob, jelly_2) || collision(spongebob, jelly_3) || collision(spongebob, jelly_4) || collision(spongebob, jelly_5) || collision(spongebob, jelly_6)) {
            
            console.log("Nice!");
            score_counter++;
            }
       

        

        if (score_counter % 20 == 0) {
            score.text(parseInt(score.text()) + 1);
            
        }
        if (score_counter % 500 == 0) {
            speed++;
            
        }

        


        jelly_down(jelly_1);
        jelly_down(jelly_2);
        jelly_down(jelly_3);
        jelly_down(jelly_4);
        jelly_down(jelly_5);
        jelly_down(jelly_6);
        jelly_down(king_jelly);

     
        anim_id = requestAnimationFrame(repeat);
    }

    function repeat_2() {
    	if (collision(patrick, jelly_1) || collision(patrick, jelly_2) || collison(patrick, jelly_3) || collision(patrick, jelly_4) || collision(patrick, jelly_5) || collision(patrick, jelly_6)) {
    		score_counter++;
    		console.log("nice!");
    	}

    	
    }

    

       function jelly_down(jelly) {
        var jelly_current_top = parseInt(jelly.css('top'));
        if (jelly_current_top > container_height) {
            jelly_current_top = -200;
            var jelly_left = parseInt(Math.random() * (container_width - jelly_width));
            jelly.css('left', jelly_left);
        }
        jelly.css('top', jelly_current_top + speed);
    }

   
    restart_btn.click(function() {
        location.reload();
    });
    /*
    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});