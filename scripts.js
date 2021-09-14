turn = 0
const game_status_text = "Game Status "
let game_array = ["A", "B", "c", "d", "E", "F", "G", "r", "R"]
game_not_terminated = 1

function alert_sign() {

    document.getElementById("status").animate([{ color: "black" }, { color: "red" }], 2000)

}

function check_victory() {
    console.log(game_array)
    if (game_array[0] == game_array[4] && game_array[4] == game_array[8] || game_array[2] == game_array[4] && game_array[4] == game_array[6]) {
        document.getElementById("status").innerText = game_status_text + game_array[4] + " Has won Diagonally "

    }
    if (turn <= 9) {
        if (game_array[0] == game_array[1] && game_array[1] == game_array[2]) {

            document.getElementById("status").innerText = game_status_text + game_array[0] + " Has won Horizontally "
        }
        if (game_array[3] == game_array[4] && game_array[4] == game_array[5]) {
            document.getElementById("status").innerText = game_status_text + game_array[3] + " Has won Horizontally "
        }
        if (game_array[6] == game_array[7] && game_array[7] == game_array[8]) {
            document.getElementById("status").innerText = game_status_text + game_array[6] + " Has won Horizontally "

        }
        if (game_array[0] == game_array[3] && game_array[3] == game_array[6]) {

            document.getElementById("status").innerText = game_status_text + game_array[0] + " Has won Vertically "

        }
        if (game_array[1] == game_array[4] && game_array[4] == game_array[7]) {
            document.getElementById("status").innerText = game_status_text + game_array[4] + " Has won Vertically "

        }
        if (game_array[2] == game_array[5] && game_array[5] == game_array[8]) {
            document.getElementById("status").innerText = game_status_text + game_array[6] + "Has won Vertically "

        }
        if (document.getElementById("status").innerText != "Game Status is No one has won") {
            game_not_terminated = 0
        }

    }

    if (turn == 8) {
        document.getElementById("status").innerText = (game_status_text + "game ended in  a draw")
        game_not_terminated = 0

    }
    if (game_not_terminated == 0) {
        alert_sign()
    }

}

function tick(id) {
    if (game_not_terminated) {
        document.getElementById(id).style = "background-color:black;"
        let X = "X"
        let O = "O"
        if (document.getElementById(id).innerText != X || document.getElementById().innerText != O) {
            if (turn % 2 === 1) {
                document.getElementById(id).innerText = X
                game_array[Number(id[id.length - 1]) - 1] = X
            } else {
                document.getElementById(id).innerText = O
                game_array[Number(id[id.length - 1]) - 1] = O;

            }
            check_victory()
            turn += 1


        } else {

            alert("Game ended")
        }

    }
}