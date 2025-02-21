class TicTacToe {

    board = [];
    n = 0;
    player = 1;

    constructor(n) {
        this.n = n;
        this.board = [];
        for (let i=0; i<this.n; i++){
            let row = [];
            for (let j=0; j<this.n; j++){
                row[j] = 0;
            }
            this.board.push(row);
        }
    }

    render() {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.className = "flex justify-center";

        const board = document.createElement('div');
        board.className = "grid w-80 h-80 border-8 border-teal-500 bg-teal-100 rounded-3xl text-center p-10";
        
        for (let i=0; i<this.n; i++){
            const row = document.createElement('div');
            row.className = "flex justify-between"
                for (let j=0; j<this.n; j++){
                    row.appendChild(this.renderCell(i, j));
                }
            board.appendChild(row);
        }

        gameBoard.replaceChildren(board);

    }

    renderCell(row, col){
        const cell = document.createElement('div');
        cell.className = "w-full h-full content-center"

        switch (this.board[row][col]) {
			case 1:
				cell.innerHTML = '<span class="material-symbols-outlined text-red-600 text-5xl">circle</span>';
				break;
			case 2:
				cell.innerHTML = '<span class="material-symbols-outlined text-gray-600 text-5xl">close</span>';
				break;
			default:
				cell.innerHTML = '<button onClick="game.makeMove('+row+', '+col+');" type="button" class="w-14 h-14 p-2 focus:outline-none bg-teal-400 rounded-lg hover:bg-yellow-300 focus:z-10 focus:ring-4 focus:ring-yellow-300"></button>';
		}

        return cell;
    }

    makeMove(row, col){
        this.board[row][col] = this.player 
        this.render()

        this.player = (this.player == 1) ? 2 : 1;
    }
    
    test() {
        for (let i=0; i<this.n; i++){
            for (let j=0; j<this.n; j++){
                this.board[i][j] = i*3+j;
            }
        }


        console.log(this.board);
    }

}