function solution(maps) {
    // 동서남북
    const dy = [0, 0, 1, -1];
    const dx = [1, -1, 0, 0];
    const row = maps.length;
    const col = maps[0].length;
    const visitCount = [...maps].map((node) => node.map((num) => 1)); // 각 열의 각 번호 1로 초기화
    // Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(1));

    let temp = 0;
    const queue = [[0, 0]];
    while (queue.length) {
        const [y, x] = queue.shift(); // // queue의 값 선출선입해 할당!
        for (let k = 0; k < 4; k++) {
            // 인접 노드 체크하여 이동할 수 있는 값인지 체크
            const ny = y + dy[k];
            const nx = x + dx[k];

            if (ny >= 0 && nx >= 0 && ny < row && nx < col) {
                if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
                    // 이전칸 + 1 하여 현재 위치의 최단 거리를 계산
                    visitCount[ny][nx] = visitCount[y][x] + 1;
                    queue.push([ny, nx]); // 해당 노드 
                }
            }
        }
    }
    return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
}