$(document).ready(function() {
    // MODAL
    var modalText = {
      quiz: {
        title: 'Quiz',
        tag: 'General questions from different fields',
        detail:
          'This project is a React-JS based online quiz that randomly sets five questions for the user and gives the result at the end.',
        link: 'https://msshakeel12.github.io/quiz/'
      },
      dijkstra: {
        title: 'Path Finding ',
        tag: 'using Dijkstra\'\s algorithm ',
        detail:
          'Dijkstra\'\s algorithm finds the shortest path between two nodes. In this project the algorithm is illustrated using grid nodes, with features like creating random mazes and additional obstracle nodes using the keypad/mouse.',
        link: 'https://msshakeel12.github.io/dijkstra-s/'
      },
      bricks: {
        title: 'Bricks-n-Ball Game',
        tag: '2-D Game in Java',
        detail:
          'Classic bricks-ball game made in java, with never ending number of levels. To make the game challenging, the player has to start from level-1 if they lose. ',
        
      },
      sudoku: {
        title: 'Sudoku Solver',
        tag: 'Puzzle ',
        detail:
          'Sudoku is a 9x9 grid game, a combination of trial and error with the logic of number placement in the grids. The aim is to fill all empty grids using digits between 1 to 9 so that each column, each row, and each of the nine 3x3 subgrids do not have any repeating numbers in them. The code takes in the puzzle and runs the algorithm to solve the puzzle.'
      },
      maze: {
        title: 'Maze Generator',
        tag: 'Puzzle creation',
        detail:  
        'This project generates random mazes. The p5.js JavaScript library has been used for the animation, maze display and algorithm. The code gives out unique and different mazes every time you run the code.'
      },
      automatic: {
        title: 'Automatic Hand Dispenser',
        tag: 'Arduino Project',
        detail:
        'This is an Arduino based Python project, inspired by the virus spreaded in 2020. Due to the spead of the virus in 2020, sanitizing hands regularly has become more essential than ever. Furthermore, contact-less technologies or features are prefered. The project uses Arduino for the micro-controller, servo-motor to pull the sanitizer actuator and light sensor to senses the presence of a hand. '
        
      },
      morse: {
        title: 'Morse Code Translator',
        tag: 'Dits and Dahs',
        detail:
          'The code can translate morse code to text (English) and convert text to morse code. I have used Java to implement the project. The idea first struck me when I was learning arrays. However this could be much simpler with Python Lists. '
      },
      voice: {
        title: 'Voice Control',
        tag: 'Arduino Project',
        detail:
        'This is a Arduino based project that uses the primary arduino compoent called HiCell for voice command. It has features like light switch, light brightness mode, party mode and music playlist (with a few music codes played on the speaker). The code is to be runned in Arduino IDE and confiured to be uploaded on Arduino Grove Shield Kit.'  
      },
      cypher: {
        title: 'Cypher Generator',
        tag: 'Puzzle',
        detail:
          'This code takes in the text(s) that needs to be cyphered. It then outputs the cyphered text and the cypher key (a number by how much each alphabet is shifted). Another feature is deciphering a text, for which the user needs to mention the cypher key.'
      }
    };
  
    $('#gallery .button').on('click', function() {
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function() {
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth / 3,
      dragStart,
      dragEnd;
  
    setDimensions();
  
    $('#next').click(function() {
      shiftSlide(-1);
    });
    $('#prev').click(function() {
      shiftSlide(1);
    });
  
    carousel.on('mousedown', function() {
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function() {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)');
      });
      $(document).on('mouseup', function() {
        if (dragPos() > threshold) {
          return shiftSlide(1);
        }
        if (dragPos() < -threshold) {
          return shiftSlide(-1);
        }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1);
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup');
      carousel
        .off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + direction * slideWidth + 'px)');
      setTimeout(function() {
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition');
        carousel.css('transform', 'translateX(0px)');
      }, 700);
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link)
        $('#modal .button')
          .addClass('visible')
          .parent()
          .attr('href', modalText[id].link);
  
      $.each($('#modal li'), function(index, value) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background:
            "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
      });
    }
  });
  