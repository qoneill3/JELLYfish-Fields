$(function() {	





	var anim_id;
	//saving DOM objects to variables
	var container = $('#container');
	var spongebob = $('#spongebob');
	 var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');
    var score_2 = $('#score_2');
    var jelly = $('.jelly');
    var jelly_1 = $('#jelly_1');
    var jelly_2 = $('#jelly_2');
    var jelly_3 = $('#jelly_3');
    var jelly_4 = $('#jelly_4');
    var jelly_5 = $('#jelly_5');
    var jelly_6  = $('#jelly_6');
    var king_jelly = $('#king_jelly');
    var patrick = $('#patrick');
    var timer = $('#timer');
    var spongebob_point = $('#spongebob_point');
    var spongebob_point2 = $('#spongebob_point2');
    var spongebob_point3 = $('#spongebob_point3');
    var patrick_point = $('#patrick_point');
    var patrick_point2 = $('#patrick_point2');
    var patrick_point3 = $('#patrick_point3');
    var sponge_king_point = $('#sponge_king_point');
    var patrick_king_point = $('#patrick_king_point');

    var spongebob_winner = $('#spongebob_winner');
    var patrick_winner = $('#patrick_winner');
    var tie = $('#tie');

    var sponge_plus_reg = $('#sponge_plus_reg');
    var sponge_plus_big = $('#sponge_plus_big');
    var pat_plus_reg = $('#pat_plus_reg');
    var pat_plus_big = $('#pat_plus_big');


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

    var timer_counter = 1;

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

    //Key Controls
    $(document).on('keydown', function(e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && spongebob_move_left === false) {
                event.preventDefault();
                spongebob_move_left = requestAnimationFrame(spongebob_left);
            } 
            else if (key === 39 && spongebob_move_right === false) {
                event.preventDefault();
                spongebob_move_right = requestAnimationFrame(spongebob_right);
            } 
            else if (key === 38 && spongebob_move_up === false) {
                event.preventDefault();
                spongebob_move_up = requestAnimationFrame(spongebob_up);
            } 
            else if (key === 40 && spongebob_move_down === false) {
                event.preventDefault();
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

    //Who won?!?!
   function winner() {
    if (score.text() > score_2.text()) {
        spongebob_winner.fadeIn("slow");
    }
    else if (score.text() == score_2.text()) {
        tie.fadeIn("slow");
    }
    else {
        patrick_winner.fadeIn("slow");
    }
   } 


    function repeat() {

        if (game_over === false) {
            timer_counter++;
        }
        
        if (timer_counter % 30 == 0) {
            timer.text(parseInt(timer.text()) - 1);
        }

        if (timer.text() == 10) {
            timer.css('color', 'red');
            timer.css('font-size', '45px');
        } 
       
        if (timer.text() == 0) {
            winner();
            restart_btn.fadeIn("slow");
            spongebob.fadeOut("slow");
            patrick.fadeOut("slow");
            king_jelly.fadeOut("fast");
     


            stop_the_game();
          
        }
        


        //spongebob collisions!!!!
       
        if (collision(spongebob, jelly_1) ){
            jelly_1.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) + 1);
            spongebob_point.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");

        }
        
        if (collision(spongebob, jelly_2)) {
            jelly_2.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) +1);
            spongebob_point2.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(spongebob, jelly_3)) {
            jelly_3.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) +1);
            spongebob_point3.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(spongebob, jelly_4)) {
            jelly_4.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) +1);
            spongebob_point.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(spongebob, jelly_5)) {
            jelly_5.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) +1);
            spongebob_point2.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(spongebob, jelly_6)) {
            jelly_6.hide().delay( 5000 ).fadeIn();
            score.text(parseInt(score.text()) +1);
            spongebob_point3.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_reg.show().delay( 500 ).fadeOut("fast");
        }

        //patrick collisions!!!!

        if (collision(patrick, jelly_1)) {
            jelly_1.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }

        if (collision(patrick, jelly_2)) {
            jelly_2.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(patrick, jelly_3)) {
            jelly_3.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point3.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }

        if (collision(patrick, jelly_4)) {
            jelly_4.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }
        
        if (collision(patrick, jelly_5)) {
            jelly_5.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point2.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }

        if (collision(patrick, jelly_6)) {
            jelly_6.hide().delay( 5000 ).fadeIn();
            score_2.text(parseInt(score_2.text()) +1);
            patrick_point3.show().delay( 1000 ).fadeOut("slow");
            pat_plus_reg.show().delay( 500 ).fadeOut("fast");
        }

        //King Collisions
        if (collision(spongebob, king_jelly)) {
            king_jelly.hide().delay( 5000 ).fadeIn("fast");
            score.text(parseInt(score.text()) + 5);
            sponge_king_point.show().delay( 1000 ).fadeOut("slow");
            sponge_plus_big.show().delay( 1000 ).fadeOut("slow");
        }
        if (collision(patrick, king_jelly)) {
            king_jelly.hide().delay( 5000 ).fadeIn("fast");
            score_2.text(parseInt(score_2.text()) + 5);
            patrick_king_point.show().delay( 1000 ).fadeOut("slow");
            pat_plus_big.show().delay( 1000 ).fadeOut("slow");
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
    
    function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();
        spongebob.hide();
        patrick.hide();
        if (score > score_2) {
            return "Winner: Spongebob!";
        }
    }

    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */

    //collision detection layout
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