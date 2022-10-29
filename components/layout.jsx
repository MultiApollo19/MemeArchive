import Header from "./header"

export default function Layout({ children }) {
    return (
      <>
      <div className="content">
        <Header/>
        {children}
      </div>
      </>
    )
  }