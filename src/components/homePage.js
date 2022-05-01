import '../styles/homePage.css'
function homePageComponent(){
    return(
        <>            
            <div>
                <div className="todo-form">
                    <h1>INSERT YOUR TODO HERE</h1>
                    <form>
                        <p>TODO Title</p>
                        <input type="text" name="todoTitle" placeholder="Insert Your Todo Title Here"/>
                        <p>TODO Task</p>
                        <input type="text" name="todoTitle" placeholder="Insert Your Todo Task Here"/>
                        <p>TODO Date</p>
                        <input type="text" name="todoTitle" placeholder="Insert Your Todo Date Here"/>
                        <p>TODO Serial</p>
                        <input type="text" name="todoTitle" placeholder="Insert Your Todo Serial Here"/> <br/>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default homePageComponent