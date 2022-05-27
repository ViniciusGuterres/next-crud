import Title from "./Title";

interface LayoutProps {
    title: string,
    children: any
}

function Layout (props: LayoutProps) {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                height: '200px',
                borderRadius: '5px',
                padding: '20px'
            }}
        >
            <Title 
                text={props.title}
            />

            {props.children}
        </div>
    )
}

export default Layout;