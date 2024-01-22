export function Header({children}:{children: string}){
    let title: string = children;
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    )
}