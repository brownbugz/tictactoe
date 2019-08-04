// author @brownbugz - Sonnia Kemmer

var PETS = {
    'null' : 'Sisters',
    '1' : 'Fantasy',
    '-1' : 'Mystery'
  };

var CATS = {
    'null': 'cat-images/sisters.jpg',
    '1': 'cat-images/fantasy.jpg',
    '-1': 'cat-images/mystery.jpg'



    // 'null': '<img id="sistersimg" src="cat-images/sisters.jpg">',
    // '-1': '<img id="fantasyimg", src="cat-images/fantasy.jpg">',
    // '1': '<img id="mysteryimg" src="cat-images/mystery.jpg">'
};

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/ 
let squares = document.querySelectorAll('td div');

/*----- event listeners -----*/ 
document.querySelector('table').addEventListener('click', handleClick);

/*----- functions -----*/
init();

function init() {
    board = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ];
    turn = 1;
    winner = null;
    render();
}
function render() {
    console.log('do you render?');
    board.forEach(function(sqr, idx) {
        // document.getElementById("photo1");
        document.getElementById("photo"+idx).src = CATS[sqr];
        // squares[idx].innerHTML = CATS[sqr]; 
    });  

    
        if (winner === 'T') {
            alert('It is a Tie!');
        } else if (winner) {
            alert(`Congratulations ${PETS[winner]}`)
        } else {
            alert(`It is ${PETS[turn]} turn.`)
        }
        }

function handleClick(evt) {
    console.log('start click');
    let idx = parseInt(evt.target.id.replace('photo', ''));
    console.log(idx);
    if (board[idx]) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}

function getWinner() {
    for (let i = 0; i < winCombos.length; i++) {
        if (Math.abs(
        board[winCombos[i][0]] +
        board[winCombos[i][1]] +
        board[winCombos[i][2]]) === 3) 
        return board[winCombos[i][0]];
    }
if (board.includes(null)) return null;
        return 'T';
}


