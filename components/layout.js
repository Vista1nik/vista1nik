const Layout = props => (
    <div style={{
        width: '45rem',
        margin: 'auto'
    }}>
        <div>
            {props.children}
        </div>
        <div style={{
                color: '#666',
                marginTop: 32
            }}>
            <p>{new Date().getFullYear()} © vista1nik</p>
        </div>
    </div>
)

export default Layout