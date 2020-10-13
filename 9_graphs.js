/**
 * Graphs: Breadth-first search (너비 우선 탐색)
 */

// 그래프는 사물의 모음(collections of things)이며 그래프의 데이터를 노드 또는 정점(vertices)이라고 함
// 노드 간의 연결을 가장자리(edge)라고 함
// 무방향(undirected) 그래프는 노드 사이의 edge에 방향이 없는 그래프 ex) 소셜 네트워크
// 유방향(directed) 그래프는 edge에 방향이 있는 그래프 ex) 인터넷과 웹 페이지

// Adjacency List(인접 목록) - 그래프의 각 정점을 인접한 정점 또는 가장자리 모음과 연결
// a - b - c 가 인접 목록으로 연결 되었을때
const undirectedG = {
  NodeA: ["NodeB"],
  NodeB: ["NodeA", "NodeC"],
  NodeC: ["NodeB"],
};
// 로 표현 될 수 있으며 이는 edge의 방향을 표시하지 않기 때문에 무방향 그래프임
// 문자열 레이블이 아닌 숫자만 있는 배열로 더 간단히 나타내면,
const undirectedGArr = [
  [1], // Node A
  [0, 2], // Node B
  [1], // Node C
];

function bfs(graph, root) {
  const nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  nodesLen[root] = 0;

  const queue = [root];
  let current;

  while (queue.length != 0) {
    current = queue.shift();

    const curConnected = graph[current];
    const neighborIdx = [];
    let idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];
console.log(bfs(exBFSGraph, 1));
