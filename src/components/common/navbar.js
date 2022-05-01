import '../../styles/navbar.css'
function navbar(){
    return (
        <div>
            <nav>
                <div className="logo">
                    <p>REACT CRUD TODO LIST</p>
                </div>
                <ul>
                    <li><a href="http://localhost:3000/" className="active">Home</a></li>
                    <li><a href="http://localhost:3000/">About</a></li>
                    <li><a href="http://localhost:3000/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar