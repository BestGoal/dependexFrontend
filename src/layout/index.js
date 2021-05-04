import React from "react"
import VerticalLayout from "./VerticalLayout"
import MainLayout from "./mainLayout"
import FullLayout from "./FullLayout"

const ContextLayout = React.createContext()
class Layout extends React.Component {
    render() {
        return (
            <ContextLayout.Provider
                value={{
                    MainLayout,
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