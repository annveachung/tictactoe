class TicTacToe {

    board = [];
    n = 0;
    player = 1;
    winner = 0;

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
        gameBoard.className = "flex flex-col items-center";

        const board = document.createElement('div');
        board.className = "grid w-80 h-80 border-8 border-gray-700 bg-teal-600 shadow-2xl shadow-sky-100/60 rounded-3xl text-center p-10";
        
        for (let i=0; i<this.n; i++){
            const row = document.createElement('div');
            row.className = "flex justify-between"
                for (let j=0; j<this.n; j++){
                    row.appendChild(this.renderCell(i, j));
                }
            board.appendChild(row);
        }

        const message = document.createElement('div');
        if (this.winner == 0){
            message.className = "pt-10 text-2xl " + this.getCurrentPlayerColor('text');
            message.textContent = 'Player' + this.player;
        }
        else{
            message.className = "pt-10 text-2xl text-teal-100 ";
            message.textContent = 'Player ' + this.winner + ' Won!';
        }

        gameBoard.replaceChildren(board, message);

    }

    getCurrentPlayerColor(type){
        return type + '-' + ((this.player == 1) ? 'red-400' : 'gray-100');
    }

    renderCell(row, col){
        const cell = document.createElement('div');
        cell.className = "w-full h-full content-center"

        switch (this.board[row][col]) {
			case 1:
				cell.innerHTML = '<span class="material-symbols-outlined text-red-400 text-5xl">circle</span>';
				break;
			case 2:
				cell.innerHTML = '<span class="material-symbols-outlined text-gray-100 text-5xl">close</span>';
				break;
			default:
				cell.innerHTML = '<button onClick="game.makeMove('+row+', '+col+');" type="button" class="w-14 h-14 p-2 focus:outline-none bg-teal-100 rounded-lg hover:' + this.getCurrentPlayerColor('bg') +' focus:z-10 focus:ring-4 focus:ring-yellow-300"></button>';
		}

        return cell;
    }

    makeMove(row, col){
        this.board[row][col] = this.player;
        this.detectWinner(this.player, row, col);
        this.player = (this.player == 1) ? 2 : 1;
        this.render();
    }

    detectWinner(player, row, col){

        let xWin = true;

        for (let i=0; i<this.n; i++){
            if (this.board[row][i] != player){
                xWin = false;
                break;
            }
        }

        let yWin = true
        for (let i=0; i<this.n; i++){
            if (this.board[i][col] != player){
                yWin = false;
                break;
            }
        }

        let nwWin = true
        for (let i=0; i<this.n; i++){
            if (this.board[i][i] != player){
                nwWin = false;
                break;
            }
        }

        let swWin = true
        for (let i=0; i<this.n; i++){
            if (this.board[this.n-i-1][i] != player){
                swWin = false;
                break;
            }
        }

        if (xWin || yWin || nwWin || swWin){
            this.winner = player;

        }
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