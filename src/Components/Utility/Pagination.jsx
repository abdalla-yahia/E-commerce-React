
import ReactPaginate from 'react-paginate'

function Paginations({pg,pages}) {
  const handlePageClick =(e)=>{
    pg(e.selected +1 )
    
  }
const pageCount = pages || 5
  return (
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 0'}}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالي >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={'2'}
                activeClassName='active'
                pageCount={pageCount}
                previousLabel="< السابق"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                nextClassName='page-item'
                previousClassName='page-item'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                previousLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeLinkClassName='page-link-active'
      />
  </div>
  )
}

export default Paginations