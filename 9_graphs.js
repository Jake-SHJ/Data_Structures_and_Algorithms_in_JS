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

// Adjacency Matrix (인접 행렬) - 각 중첩 배열이 동일한 수의 2차원 배열
// 0은 가장자리 또는 관계가 없음, 1은 관계가 있음을 의미

// 무방향 배열
const adjMat = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
// 방향성을 주면
const adjMat = [
  [0, 0, 0], // a
  [1, 0, 0], // b
  [0, 1, 0], // c
];
// b는 a를 향하고, c는 b를 향하는 형태

// Incidence Matrix (입사 행렬) - 인접 행렬은 행과 열을 모두 사용하여 노드를 나타내고, 입사 행렬은 행은 노드를 열은 edge를 의미
// 다른 두 노드가 하나의 열에 1을 가지면 두 노드는 그 edge를 통해 연결되어 있음을 알 수 있음

// 유방향 그래프를 가지려면 서로 다른 두 노드가 1, -1을 각각 가지고 1에서 -1을 향하는 방향을 가짐
const incMatDir = [
  [1, 0, -1, 1], // a
  [-1, 1, 0, 0], // b
  [0, -1, 1, 0], // c
  [0, 0, 0, -1], // d
];
// a와 b는 1번 edge로 연결되어 있고 a에서 b로의 방향을 가짐
// b와 c는 2번 edge로 연결되어 있고 b에서 c로의 방향을 가짐
// c와 a는 3번 edge로 연결되어 있고 c에서 a로의 방향을 가짐
// d와 a는 4번 edge로 연결되어 있고 a에서 d로의 방향을 가짐

// 그래프 순회 알고리즘
// 너비 우선 검색, 깊이 우선 탐색
function bfs(graph, root) {
  const nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity; // 시작은 무한대로 간주, 시작 노드에서 탐색 대상 노드에 연결되어 있지 않으면 무한대 도출
  }

  nodesLen[root] = 0; // 루트 노드에서 루트 노드까지의 거리는 0

  const queue = [root];
  let current;

  while (queue.length != 0) {
    current = queue.shift();

    const curConnected = graph[current];
    const neighborIdx = [];
    let idx = curConnected.indexOf(1); // 연결된 노드를 찾는다
    while (idx != -1) {
      // 음수이면 연결되어 있지 않은 것
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      // 해당 노드의 거리를 아직 설정하지 않았을 때
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

const exBFSGraph = [
  [0, 1, 1, 1, 0], // node 0은 1, 2, 3과 연결되어 있고 그 방향을 바라본다
  [0, 0, 1, 0, 0], // node 1은 2와 연결되어 있고 그 방향을 바라본다
  [1, 1, 0, 0, 0], // node 2는 0, 1과 연결되어 있고 그 방향을 바라본다, 0과 2, 1과 2는 서로를 바라본다
  [0, 0, 0, 1, 0], // node 3은 스스로를 보고 있다
  [0, 1, 0, 0, 0], // node 4는 1과 연결되어 있고 그 방향을 바라본다
];
console.log(bfs(exBFSGraph, 1));
