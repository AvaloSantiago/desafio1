function sanar(fila, col, vidaInicial, vidaActual, d, mapa) {
    const n = fila.length;
    const r = mapa.length;
    const c = mapa[0].length;
    let maxSanacion = 0;

    const startX = fila[0];
    const startY = col[0];

    function calcDistancia(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    function esPosicionValida(x, y) {
        return x >= 0 && x < r && y >= 0 && y < c && mapa[x][y] === '.';
    }

    function bfs(startX, startY, movimientos) {
        const queue = [];
        const visitado = Array.from({ length: r }, () => Array(c).fill(false));
        queue.push([startX, startY, 0]);
        visitado[startX][startY] = true;

        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();

            if (dist <= movimientos) {
                for (let i = 1; i < n; i++) {
                    const distancia = calcDistancia(x, y, fila[i], col[i]);
                    if (distancia <= 2) {
                        const sanacion = Math.min(10, vidaInicial[i] - vidaActual[i]);
                        maxSanacion = Math.max(maxSanacion, sanacion);
                    }
                }

                const direcciones = [[1, 0], [-1, 0], [0, 1], [0, -1]];
                for (const [dx, dy] of direcciones) {
                    const nuevoX = x + dx;
                    const nuevoY = y + dy;
                    if (esPosicionValida(nuevoX, nuevoY) && !visitado[nuevoX][nuevoY]) {
                        visitado[nuevoX][nuevoY] = true;
                        queue.push([nuevoX, nuevoY, dist + 1]);
                    }
                }
            }
        }
    }

    bfs(startX, startY, d);

    return maxSanacion;
}

const fila = [2, 3, 0, 2, 0, 3];
const col = [2, 3, 5, 0, 4, 1];
const vidaInicial = [13, 40, 40, 50, 40, 6];
const vidaActual = [10, 34, 1, 48, 32, 1];
const d = 4;
const mapa = [
    "..XX..",
    "...XXX",
    "...X..",
    "......"
];

console.log("La máxima cantidad de puntos de vida que Khris puede sanar en su turno es " + sanar(fila, col, vidaInicial, vidaActual, d, mapa));
