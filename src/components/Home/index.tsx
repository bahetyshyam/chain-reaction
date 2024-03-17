import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import App from '../../App';

function AboutChainReaction() {
  return (
    <div className="container mx-auto mt-0 px-5 flex justify-center items-center flex-col">
      <div className="text-3xl mt-3">Chain Reaction</div>
      <div className="w-2/3 mt-3">
        Responsible disclosure of vulnerabilities continues to be an integral
        task of researchers within the computer security community. More so than
        ever, these vulnerabilities have the potential to affect numerous
        network protocols and device components within mobile devices through a
        process called vulnerability chaining. To better represent the potential
        severity of known (and future) vulnerabilities within the context of
        multiple protocols and system states, we propose a visualization
        framework called Chain Reaction. This framework consists of a database
        of known attacks against mobile devices featuring more information than
        current databases offer, coupled with a graph visualization front-end to
        represent these chains in a format easily consumable by security
        professionals. Using Chain Reaction, we visually reveal five previously
        unknown attack chains and confirm the existence of twelve known attack
        chains within the academic community. Additionally, we confirm the
        efficacy of our generated chains by reproducing two of them on real
        mobile devices. We believe that our framework offers the security
        community a tool to properly contextualize attacks once they become
        disclo
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AboutChainReaction />} />
        <Route path="/generate" element={<App />} />
      </Routes>
    </div>
  );
}

export default Home;
