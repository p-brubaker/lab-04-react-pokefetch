import { Component } from 'react';

class Paginator extends Component {

    render() {
         const { count, page, perPage, setPage } = this.props;
        
            const numPages = Math.ceil(count / perPage);
        
        return (
            <div className="paginator">
                <button onClick={() => setPage(1)} disabled={page <= 1}>First</button>
                <button onClick={() => setPage(page - 1)} disabled={page <= 1}>&lt;&lt;</button>
                <span>{page}</span>
                <button onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;&gt;</button>
                <button onClick={() => setPage(numPages)} disabled={page === numPages}>Last</button>
            </div>
        )
    }
}

export default Paginator;