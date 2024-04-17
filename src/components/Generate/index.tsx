import ForceGraph from 'force-graph';
import { useEffect, useRef, useState } from 'react';
import UserForm from '../UserForm';
import {
  ChainInsideObject,
  ChainObject,
  ListOfChainsToShow,
} from '../../types';
import { transformChainObjectArray } from './utils';

function createNodesArray(chain: ChainInsideObject[]) {
  return chain.map((item) => ({ id: item.name }));
}
function createChainsArray(chain: ChainInsideObject[]) {
  const returnArray = [];
  for (let i = 0; i < chain.length - 1; i++) {
    returnArray.push({
      source: chain[i].name,
      target: chain[i + 1].name,
    });
  }
  return returnArray;
}

function createChain(chainArray: ListOfChainsToShow) {
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
  const [chainsArray, setChainsArray] = useState<ListOfChainsToShow>([]);
  function updateChainsArray(chains: ChainObject[]) {
    const transformedArray = transformChainObjectArray(chains);
    setChainsArray(transformedArray);
  }
  useEffect(() => {
    if (graphNodeRef.current) {
      createChain(chainsArray);
    }
  }, [chainsArray]);

  return (
    <div className="flex justify-between">
      <UserForm updateChainsArray={updateChainsArray} />
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
