import Header from "./header"

export default function Layout({ children }) {
    return (
      <>
      <div className="content bg-gray-400 w-screen h-screen">
        <Header/>
        {children}
      </div>
      </>
    )
  }