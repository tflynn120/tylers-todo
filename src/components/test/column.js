// DRY and reusuable patterns in


import React from 'react'

const Tile = ({todo}) => (
    <div>{todo.name}</div>
)


// Not very reusable example - coupled your column to your todo
const Column2 = (props) => (
    <div>
        {props.todos.map((todo) => (
            <Tile todo={todo}/>
        ))}
    </div>
)



// Props.children - still widely used! 
const Column = (props) => (
    <div>
        {props.children}
    </div>
)


const page = (props) => (
    <div>
        <Column>
            {renderTiles()}
        </Column>
    </div>
)


// Render prop example - worth knowing but being replaced by context
const Column3 = (render) => {
    <div>
        {render()}
    </div>
}


const page3 = () => (
    <div>
        <Column render={()=> <Tile todo={todo}/>}/>
    </div>
)


// Context, with hooks largely replaced the render prop pattern
const Column4 = (props) => {
    const columnContent  = useContext(Context)

    return (
        <div>
        {columnContent.map((todo) => (
            <Tile todo={todo}/>
        ))}
        </div>
    )
}