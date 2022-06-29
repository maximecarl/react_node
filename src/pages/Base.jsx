const Base = (props) => {
    return (
        <main>
            <header className="app_header">
                <h1>{props.title}</h1>
                <div className="app_input-icon">
                    <input placeholder="Search"/>
                    <i className="fa fa-search"></i>
                </div>
                <button>
                    <i className="fa fa-bell"></i>
                </button>
                <button className="noPadding">
                    <img width="50px" height="50px"/>
                </button>
            </header>

            <div className="app_main-content">
                {props.children}
            </div>
        </main>
    )
}

export default Base;