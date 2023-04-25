import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import GeneralContent from '../components/GeneralContent/GeneralContent';

function PageOne() {
  return (
    <div>
      <Navbar></Navbar>
      <GeneralContent></GeneralContent>
      <div>MÁSIK OLDAL</div>
    </div>    
  );
}

export default PageOne;
