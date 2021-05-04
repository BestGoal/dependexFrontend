import React from "react"
import VerticalLayout from "./VerticalLayout"
import MainLayout from "./mainLayout"
import HomeLayout from "./HomeLayout"

const ContextLayout = React.createContext()
class Layout extends React.Component {
    render() {
        return (
            <ContextLayout.Provider
                value={{
                    MainLayout,
                    HomeLayout,
                    VerticalLayout
                }}
            >
                {this.props.children}
            </ContextLayout.Provider>
        )
    }
}

export { Layout, ContextLayout }