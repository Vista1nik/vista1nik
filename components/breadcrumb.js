import Router from 'next/router'

import EasterEgg from '../components/easteregg'

const Breadcrumb = props => (
        <div className="container">
            <style jsx>{`
                .container {
                    margin: 32px 0;
                    margin-left: -8px;
                    display: flex;
                    align-items: center;
                }

                .divider {
                    color: #333;
                    margin: 0 8px;
                    user-select: none;
                }

                .breadcrumb {
                    padding: 8px;
                    font-size: 1.125rem;
                    text-decoration: none;
                    color: inherit;
                    border-radius: 4px;
                    transition: 0.2s ease;
                    cursor: default;
                    user-select: none;
                    display: block;
                    border: none;
                }

                .breadcrumb:hover {
                    background-color: #222;
                }
            `}</style>
            <EasterEgg>
                <a className="breadcrumb" onClick={() => {
                    if (props.page) {
                        Router.push('/')
                    }
                }}>vista1nik</a>
            </EasterEgg>
            {props.page && <p className="divider">/</p>}
            {props.page && <a className="breadcrumb">{props.page}</a>}
        </div>
)

export default Breadcrumb