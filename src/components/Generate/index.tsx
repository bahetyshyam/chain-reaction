import ForceGraph from 'force-graph';
import { useEffect, useRef } from 'react';
import { chainsArray } from '../../dummyData';
import UserForm from '../UserForm';

function createNodesArray(chain) {
  return chain.map((item) => ({ id: item.name }));
}
function createChainsArray(chain) {
  const returnArray = [];
  for (let i = 0; i < chain.length - 1; i++) {
    returnArray.push({
      source: chain[i].name,
      target: chain[i + 1].name,
    });
  }
  return returnArray;
}

function createChain(chainArray, parentNode) {
  chainArray.forEach((chain, index) => {
    const nodesArray = createNodesArray(chain);
    const linksArray = createChainsArray(chain);
    const myGraph = ForceGraph();
    myGraph(document.getElementById(`chain${index}`)!)
      .graphData({
        nodes: nodesArray,
        links: linksArray,
      })
      .nodeId('id')
      .nodeVal('val')
      .nodeLabel((node) => (node.id as string) || 'Hello world')
      .linkDirectionalParticles(3)
      .enableNodeDrag(false)
      .enablePanInteraction(false)
      .nodeColor(() => '#AA4A44')
      .width(600)
      .height(250);
  });
}

function Generate() {
  const graphNodeRef = useRef(null);
  useEffect(() => {
    if (graphNodeRef.current) {
      createChain(chainsArray, graphNodeRef.current);
    }
  }, []);

  return (
    <div className="flex justify-between">
      <UserForm />
      <div ref={graphNodeRef} id="chains-container" className="mt-3">
        {chainsArray.map((_, index) => (
          <div
            id={`chain${index}`}
            key={`chain${index}`}
            className="border-gray-400 rounded-xl border-2 mb-4"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Generate;
