import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

class MainNavbar extends React.Component {
    render() {
        return (
            <>
             
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                          
                            <Nav.Link href="#pricing">Help</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
export default MainNavbar;

// <header>
//         <h1>RESTy</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/history">History</Link>
//             </li>
//             <li>
//               <Link to="/help">Help</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>