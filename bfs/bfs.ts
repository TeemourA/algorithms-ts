import isSeller from './isSeller';
import isTouched from './isTouched';
import getNewQueue from './getNewQueue';

interface Graph {
  [key: string]: string[];
}

const graph: Graph = {};

enum Names {
  you = 'you',
  alice = 'alice',
  bob = 'bob',
  claire = 'claire',
  anuj = 'anuj',
  peggy = 'peggy',
  tom = 'tom',
  jonny = 'jonny',
}

graph[Names.you] = [Names.alice, Names.bob, Names.claire];
graph[Names.bob] = [Names.anuj, Names.peggy];
graph[Names.alice] = [Names.peggy];
graph[Names.claire] = [Names.tom, Names.jonny];
graph[Names.anuj] = [];
graph[Names.peggy] = [];
graph[Names.tom] = [];
graph[Names.jonny] = [];

const breadthFirstSearch = (graph: Graph, startingName: string) => {
  let searchQueue: string[] = [];
  searchQueue = searchQueue.concat(graph[startingName]);

  const touched: string[] = [];

  while (searchQueue.length) {
    const person = searchQueue.shift()!;
    if (!isTouched(touched, person)) {
      if (isSeller(person)) {
        console.log(`${person} is seller.`);
        return true;
      }

      touched.push(person);
      searchQueue = getNewQueue(searchQueue, graph[person]);
    }
  }

  console.log('There is no seller on the given graph.');
  return false;
};

breadthFirstSearch(graph, 'you');
