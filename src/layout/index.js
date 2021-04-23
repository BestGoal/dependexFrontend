import React from "react"
import VerticalLayout from "./VerticalLayout"
import FullLayout from "./FullpageLayout"

const ContextLayout = React.createContext()
class Layout extends React.Component {
    render() {
        return (
            <ContextLayout.Provider
                value={{
                    FullLayout,
                    VerticalLayout
                }}
            >
                {this.props.children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }