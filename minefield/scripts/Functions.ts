import { board } from "@/constants/types"

const createBoard = (rows: number, columns: number) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

const spreadMines = (board: board[][], minesAmount: number) => {
    const rows: number = board.length;
    const columns: number = board[0].length;
    let minesPlanted = 0;
    while (minesPlanted < minesAmount){
        const rowSel: number = Math.floor(Math.random() * rows);
        const columnSel: number = Math.floor(Math.random() * columns);

        if(!board[rowSel][columnSel].mined){
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
}

const createMineBoard = (rows: number, columns: number, minesAmount: number) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

const cloneBoard = (board: board[][]) => {
    return board.map((rows) => {
        return rows.map((field) => {
            return {...field}
        })
    })
}

const getNeighbors = (board: board[][], row, column) => {
    const neighbors: board[] = [];
    const rows = [row -1, row, row + 1];
    const columns = [column -1, column, column + 1];
    rows.forEach((r) => {
        columns.forEach((c) => {
        const diferent = r !== row || c !== column;
        const validRow = r >= 0 && r < board.length;
        const validColumn = c >= 0 && c < board[0].length;
        if(diferent && validRow && validColumn){
            neighbors.push(board[r][c])
        }
        })
    })
    return neighbors;
}

const safeNeighborhood = (board: board[][], row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined;
    return getNeighbors(board, row, column).reduce(safes, true);
}

const openField = (board: board[][], row, column) => {
    const field = board[row][column];
    if(!field.opened){
        field.opened = true;
        if(field.mined){
            field.exploded = true;
        } else if (safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column)
            .forEach(n => openField(board, n.row, n.column));
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}
const fields = (board) => [].concat(...board)
const hadExplosion = (board) => fields(board).filter(field => field.exploded).length > 0;

const pendding = (field) => (field.mined && !field.flagged) || 
    (!field.mined && !field.opened)

const wonGame = (board) => fields(board).filter(pendding).length === 0

const showMines = (board) => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}
const flagsUsed = board => fields(board)
    .filter(fields => fields.flagged.length)

export {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed,
}