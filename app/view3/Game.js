
angular.module('myGame', []).controller('GameController', function ($scope) {

    $scope.reset = function () {

        $scope.currentPlayer = 'X';
        $scope.winner = false;
        $scope.draw = false;
        $scope.cellTaken = false;
        var emptyCell = '?';
        $scope.board = [
            [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }],
            [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }],
            [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }]
        ];
    };

    $scope.reset();

    $scope.isTaken = function (cell) {
        return cell.value !== '?';
    };

    var checkForMatch = function (cell1, cell2, cell3) {
        return cell1.value === cell2.value &&
            cell1.value === cell3.value &&
            cell1.value !== '?';
    };

    $scope.isBoardFull = function () {
        for (var row = 0; row <= 2; row++) {
            for (var col = 0; col <= 2; col++) {
                if ($scope.board[row][col].value === '?') {
                    return false;
                }
            }
        }
        return true;
    }

    $scope.checkForEndOfGame = function () {

        var rowMatch = checkForMatch($scope.board[0][0], $scope.board[0][1], $scope.board[0][2]) || checkForMatch($scope.board[1][0], $scope.board[1][1], $scope.board[1][2]) ||
            checkForMatch($scope.board[2][0], $scope.board[2][1], $scope.board[2][2]);

        var columnMatch = checkForMatch($scope.board[0][0], $scope.board[1][0], $scope.board[2][0]) || checkForMatch($scope.board[0][1], $scope.board[1][1], $scope.board[2][1]) ||
            checkForMatch($scope.board[0][2], $scope.board[1][2], $scope.board[2][2]);

        var diagonalMatch = checkForMatch($scope.board[0][0], $scope.board[1][1], $scope.board[2][2]) || checkForMatch($scope.board[0][2], $scope.board[1][1], $scope.board[2][0]);

        $scope.winner = rowMatch || columnMatch || diagonalMatch;

        $scope.draw = $scope.winner === false && $scope.isBoardFull();

        return $scope.winner || $scope.draw;
    };

    $scope.move = function (cell) {
            
        if ($scope.isTaken(cell)) {
            
            $scope.cellTaken = true;
            return $scope.currentPlayer;
        }   
        cell.value = $scope.currentPlayer;
        if ($scope.checkForEndOfGame() === false) {
            $scope.cellTaken = false;
            $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';
            
        }
    };

});


