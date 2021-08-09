import { Component } from 'react';

class Paginator extends Component {

    render() {
         const { 
             count, 
             page, 
             perPage, 
             setPageFirst, 
             setPageLast, 
             prevPage,
             nextPage
            } = this.props;
        
            const numPages = Math.ceil(count / perPage);
        
        return (
            <div className="paginator">
                <button onClick={setPageFirst} disabled={page <= 1}>First</button>
                <button onClick={prevPage} disabled={page <= 1}>&lt;&lt;</button>
                <span>{page}</span>
                <button onClick={nextPage} disabled={page === numPages}>&gt;&gt;</button>
                <button onClick={(e) => setPageLast(numPages)} disabled={page === numPages}>Last</button>
            </div>
        )
    }
}

export default Paginator;