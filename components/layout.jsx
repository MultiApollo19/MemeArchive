import Header from "./header"


export default function Layout({ children }) {
    return (
      <>
      <div className="content bg-neutral-700 w-screen h-screen">
        <Header/>
        {children}
      </div>
      </>
    )
  }