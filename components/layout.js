const Layout = props => (
    <div className="layout">
        <style jsx>{`
            .layout {
                width: 45rem;
                margin: auto;
            }

            .footer {
                margin-top: 32px;
                color: #666
            }

            @media only screen and (max-width: 768px) {
                .layout {
                    padding: 0 24px;
                    width: 100%;
                }
            }
        `}</style>
        <div>
            {props.children}
        </div>
        <div className="footer">
            <p>{new Date().getFullYear()} © vista1nik</p>
        </div>
    </div>
)

export default Layout